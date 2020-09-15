/*
 * @Author: your name
 * @Date: 2020-09-15 11:03:40
 * @LastEditTime: 2020-09-15 14:11:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /iBook/src/router/modules/vue.js
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const vueRouter = {
  path: '/vue',
  component: Layout,
  redirect: '/vue/images',
  name: 'Vue',
  meta: {
    title: 'Vue',
    icon: 'vue'
  },
  children: [
    {
      path: 'images',
      component: () => import('@/views/vue/images/download'),
      name: 'ImagesDownload',
      meta: { title: 'images Download' }
    }
  ]
}
export default vueRouter
