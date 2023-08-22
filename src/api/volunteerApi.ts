import { http } from "."


export const getCategories = async ({ regionCode, date }: any) => {
  return await http.get(`/api/volunteer/category/list?regionCode=${regionCode ?? 0}&date=${date ?? ''}`)
}

export const getVolunteers = async ({ page, size, keyword, regionCode, date, categories }: any) => {
  const categoriesParam = (!categories || (categories as string[]).length === 0) ? '' : (categories as string[]).join(',')
  return await http.get(`/api/volunteer/list?page=${page??0}&size=${size??10}&keyword=${keyword??''}&regionCode=${regionCode??0}&date=${date??''}&categories=${categoriesParam}`)
}