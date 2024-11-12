// 封装分类页面包屑数据的相关代码
import {onMounted, ref} from "vue"
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getTopCategoryAPI} from "@/apis/category";

export function useCategory() {
  // 获取面包屑数据
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  // 路由参数变化时，指定重新获取分类页商品的数据
  onBeforeRouteUpdate((to) => {
    // 使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
