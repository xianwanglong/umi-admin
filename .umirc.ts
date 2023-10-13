import { defineConfig } from '@umijs/max';
import { menus } from 'config/routes';

console.log('h',menus)

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '后台',
  },
  routes: menus,
  npmClient: 'yarn',
});

