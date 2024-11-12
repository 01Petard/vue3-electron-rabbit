import httpInstance from '@/utils/http'

/**
 * @description: 获取banner图
 * @return {*}
 * @param params
 */
export function getBannerAPI(params = {}) {
  // 不传的话默认为1获取主页轮播图，传2为获取分类页商品的轮播图
  const {distributionSite = '1'} = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
