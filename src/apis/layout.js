/**
 * @description: 获取分类列表
 * @param {*}
 * @return {*}
 */
import httpInstance from "@/utils/http.js";

export function getCategoryAPI() {
  return httpInstance({
    url:'/home/category/head'
  })
}
