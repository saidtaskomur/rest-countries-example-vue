export default [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage'),
    },
    {
      path: '/:id',
      name: 'countryDetail',
      component: () => import('@/pages/CountryDetail'),
    },
  ];
  