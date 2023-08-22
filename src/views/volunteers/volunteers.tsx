import { CombinedState } from "@reduxjs/toolkit"
import React, { useEffect, useMemo, useState } from "react"
import InfiniteScroll from 'react-infinite-scroller'
import { useSelector } from "react-redux"
import { AddressDto } from "../../dto/address/AddressDto"
import { AddressType } from "../../dto/address/AddressType"
import { ReduxState } from "../../dto/reduxState"
import { VolunteerDto } from "../../dto/volunteer/VolunteerDto"
import { useAppDispatch } from "../../redux/app/hooks"
import { coreStates } from "../../redux/app/reduxModels"
import * as coreRedux from "../../redux/coreRedux"
import * as volunteerRedux from "../../redux/volunteerRedux"
import { volunteerStates } from "../../redux/volunteerReduxModels"
import { dateToString } from "../../utils/dateUtil"
import PageHeader from "../app/components/pageHeader"
import { CalendarSelectButton, MultiSelectButton, SingleSelectButton } from "../app/components/selectButton"
import SizedBox from "../app/components/sizedBox"
import VolunteerCard from "../app/components/volunteerCard"
import styles from './volunteers.module.scss'

const size = 10
const Volunteers = () => {
  const keyword = useSelector((state: CombinedState<any>) => state.coreCall.keyword as string)

  const volunteers = useSelector((state: CombinedState<any>) => state.volunteerCall.volunteers as ReduxState<VolunteerDto[]>)
  const sidoAddressFilters = useSelector(
    (state: CombinedState<any>) => state.volunteerCall.sidoAddressFilters as ReduxState<AddressDto[]>
  )
  const sggAddressFilters = useSelector((state: CombinedState<any>) => state.volunteerCall.sggAddressFilters as ReduxState<AddressDto[]>)
  const categoryFilters = useSelector((state: CombinedState<any>) => state.volunteerCall.categoryFilters as ReduxState<string[]>)

  const [getVolunteersPayload, setGetVolunteersPayload] = useState({
    page: 0,
    size: size,
    keyword: '',
    regionCode: 0,
    date: '',
    categories: ['']
  })
  const [sidoIndex, setSidoIndex] = useState(0)
  const [sggIndex, setSggIndex] = useState(0)
  const [categoryIndexes, setCategoryIndexes] = useState([] as number[])
  const [selectedDate, setSelectedDate]: [undefined | Date, React.Dispatch<React.SetStateAction<undefined | Date>>] = useState()
  const [volunteerList, setVolunteerList] = useState([] as VolunteerDto[])

  const [hasMore, setHasMore] = useState(false)

  const loadMore = (page: number) => {
    setHasMore(false)
    if (!volunteers.data || volunteers.data?.length === 0) return
    setGetVolunteersPayload({
      page: getVolunteersPayload.page + 1,
      size,
      regionCode: getVolunteersPayload.regionCode,
      date: getVolunteersPayload.date,
      categories: getVolunteersPayload.categories,
      keyword: getVolunteersPayload.keyword,
    })
  }

  const setDate = (date: Date) => {
    setSelectedDate(date)
    setGetVolunteersPayload({
      page: 0,
      size,
      regionCode: getVolunteersPayload.regionCode,
      date: dateToString(date),
      categories: getVolunteersPayload.categories,
      keyword: getVolunteersPayload.keyword,
    })
  }

  const setCategoryIndexesWrapper = (index: number) => {
    const copyCategoryIndexes =
      (categoryIndexes.length === 0)
        ? [index]
        : (categoryIndexes.includes(index))
          ? categoryIndexes.filter((i: number) => index !== i)
          : [index].concat(categoryIndexes)

    setCategoryIndexes(copyCategoryIndexes)
    setGetVolunteersPayload({
      page: 0,
      size,
      regionCode: getVolunteersPayload.regionCode,
      date: getVolunteersPayload.date,
      categories: copyCategoryIndexes.map((index: number) => categoryFilters.data?.at(index) as string),
      keyword: getVolunteersPayload.keyword,
    })
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(volunteerRedux.getAddresses({ key: volunteerStates.sidoAddressFilters, payload: { type: AddressType.SIDO, parentCode: '', keyword: '', } }))
  }, [dispatch])

  useEffect(() => {
    setSggIndex(0)
    if (sidoIndex === 0) {
      dispatch(volunteerRedux.reset({ key: volunteerStates.sggAddressFilters }))
      return
    }

    const parentCode = sidoAddressFilters.data?.at(sidoIndex - 1)?.code
    dispatch(volunteerRedux.getAddresses({ key: volunteerStates.sggAddressFilters, payload: { type: AddressType.SGG, parentCode, keyword: '' } }))
  }, [dispatch, sidoIndex, sidoAddressFilters.data])

  useEffect(() => {
    const regionCode =
      sggIndex === 0
        ? (
          sidoIndex === 0
            ? 0
            : (sidoAddressFilters.data?.at(sidoIndex - 1)?.regionCode) ?? getVolunteersPayload.regionCode
        )
        : (sggAddressFilters.data?.at(sggIndex - 1)?.regionCode) ?? getVolunteersPayload.regionCode

    setGetVolunteersPayload({
      page: 0,
      size,
      regionCode,
      date: getVolunteersPayload.date,
      categories: getVolunteersPayload.categories,
      keyword: getVolunteersPayload.keyword,
    })

    dispatch(volunteerRedux.getFilterCategories({
      payload: {
        regionCode, date: getVolunteersPayload.date
      }
    }))
  }, [dispatch, sggIndex, sggAddressFilters.data])

  useEffect(() => {
    setCategoryIndexes([] as number[])
  }, [categoryFilters])

  useEffect(() => {
    console.log(getVolunteersPayload)
    dispatch(volunteerRedux.getVolunteers({ payload: getVolunteersPayload }))
    dispatch(coreRedux.changeState({ key: coreStates.keyword, state: keyword }))
  }, [dispatch, getVolunteersPayload])

  useEffect(() => {
    if (!keyword || keyword.trim() === '') return
    if (getVolunteersPayload.keyword && keyword.trim() === getVolunteersPayload.keyword.trim()) return

    setGetVolunteersPayload({
      page: 0,
      size,
      regionCode: getVolunteersPayload.regionCode,
      date: getVolunteersPayload.date,
      categories: getVolunteersPayload.categories,
      keyword: keyword,
    })
    dispatch(coreRedux.changeState({ key: coreStates.keyword, state: '' }))
  }, [keyword])

  const viewVolunteers = useMemo(() => {
    if (!volunteers.data) {
      setHasMore(false)
      return
    }

    if (getVolunteersPayload.page === 0) {
      setVolunteerList(volunteers.data)
      setHasMore(true)
    } else if (volunteerList.at(volunteerList.length - 1)?.id === volunteers.data.at(volunteers.data.length - 1)?.id) {
      setHasMore(false)
    } else {
      setVolunteerList(volunteerList.concat(volunteers.data))
      setHasMore(true)
    }
  }, [volunteers])
  useEffect(() => viewVolunteers, [volunteers])

  useEffect(() => {
  }, [volunteerList])

  return <>
    <div className={styles.body}>
      <div className={styles.volunteers}>
        <PageHeader
          title="모아보기"
          content="유기견 봉사를 한눈에 모아볼 수 있어요"
        />
        <SizedBox height="76px" />
        <div className={styles.filterButtons}>
          <SingleSelectButton list={
            sidoAddressFilters.data ?
              ['지역'].concat(sidoAddressFilters.data.map((e: AddressDto) => e.name))
              : ['지역']
          }
            selectedIndex={sidoIndex}
            onChange={setSidoIndex}
          />
          <SingleSelectButton list={
            sggAddressFilters.data ?
              ['동네'].concat(sggAddressFilters.data.map((e: AddressDto) => e.name))
              : ['동네']
          }
            selectedIndex={sggIndex}
            onChange={setSggIndex}
          />
          <CalendarSelectButton
            onChange={setDate}
            title={
              selectedDate === undefined
                ? '날짜'
                : dateToString(selectedDate)
            }
            selectedDate={selectedDate ?? new Date()} />
          <MultiSelectButton
            list={categoryFilters.data ? categoryFilters.data : []}
            onChange={setCategoryIndexesWrapper}
            title="카테고리"
            selectedIndexes={categoryIndexes}
          />
        </div>
        <SizedBox height="32px" />
        <div>
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >
            {
              volunteerList ?
                volunteerList.map((volunteerDto: VolunteerDto, index: number) =>
                  <React.Fragment key={index}>
                    <VolunteerCard
                      onClick={() => { }}
                      entity={{
                        term: volunteerDto.isShort ? '단기' : '장기',
                        types: volunteerDto.categories,
                        location: volunteerDto.address?.regionName,
                        duration: `${volunteerDto.startDate} ~ ${volunteerDto.endDate}`,
                        day: volunteerDto.day,
                        time: volunteerDto.time,
                        content: volunteerDto.content,
                        shelter: {
                          name: volunteerDto.shelterName
                        },
                        url: volunteerDto.url,
                      }}
                    />
                    <SizedBox height="24px" />
                  </React.Fragment>
                )
                : ''
            }
          </InfiniteScroll>
        </div>
      </div>
    </div>
  </>
}

class GetVolunteersPayload {
  readonly page: number = 0
  readonly size: number = size
  readonly keyword: string = ''
  readonly regionCode!: number
  readonly date!: string
  readonly categories!: string[]
}

export default Volunteers