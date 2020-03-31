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
    },
  ]
}
export default vueRouter
