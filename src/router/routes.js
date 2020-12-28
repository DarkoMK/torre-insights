const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue'),
      }
    ]
  },
  {
    path: '/insights',
    component: () => import('layouts/InsightsLayout.vue'),
    children: [
      {
        path: '',
        name: 'insights',
        component: () => import('pages/Insights.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
