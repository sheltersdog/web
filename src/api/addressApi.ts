import { http } from "."


export const getAddresses = async ({type, parentCode, keyword}: any) => {
  return await http.get(`/api/shelter/address/list?type=${type??''}&parentCode=${parentCode??''}&keyword=${keyword??''}`)
}