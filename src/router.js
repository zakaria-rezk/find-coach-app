import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coaches/CoachList.vue'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import RequestRecived from './pages/requests/RequestRecived.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{path:'/',redirect:'/coaches'},
   {path:'/coaches',component:CoachList},
   {
    path:'/coaches/:id',
    component:CoachDetails,
    props:true,
      children:[
        {
 path:'contact',component: ContactCoach }
    ]
  
  },
   {path:'/register',component:CoachRegistration},
   {path:'/request',component:RequestRecived},
   {path:'/caon',component:null}],
});

export default router;
