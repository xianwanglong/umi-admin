export const menus = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '列表',
    path: '/list',
    component: './List',
    routes: [
      {
        name: '详情',
        path: '/list/detail',
        component: './List/Details',
      },
    ],
  },
  {
    name: '表格',
    path: '/table',
    component: './Table',
  },
];