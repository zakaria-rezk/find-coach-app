import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coaches/CoachList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import RequestRecived from './pages/requests/RequestRecived.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';
import userAuth from './pages/auth/userAuth.vue';
import store from './store.js/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requireAuth: true },
    },
    {
      path: '/request',
      component: RequestRecived,
      meta: { requireAuth: true },
    },
    { path: '/auth', component: userAuth },
    { path: '/caon', component: null },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.isauth) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
