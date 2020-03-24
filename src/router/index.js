import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Message from '../views/Message/Message.vue';
import Join from '../views/Join.vue';
import SenderNumberManagement from '../views/SenderNumber/SenderNumberManagement.vue';
// @ is an alias to /src
import Content from '../views/Message/components/Content.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  },
  {
    path: '/senderNumberManagement',
    name: 'senderNumberManagement',
    component: SenderNumberManagement
  },
  {
    path: '/message',
    name: 'message',
    component: Message,
    children: [
      { path: ':no', name: 'content', component: Content, props: true }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ '../views/Message.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
