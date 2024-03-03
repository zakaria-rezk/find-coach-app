<template>
  <base-dialog :show="!!error" @close="handleerror" title="An error accured"> 
  {{ error }} 
</base-dialog>
  <section>
  <coach-filter @change-filter="showfilter"></coach-filter>
  </section>
  
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="laodcoaches">Refresh</base-button>
        <base-button link to="auth?redirect=register" v-if="!islogedin">Login to register as a coach</base-button>
        <base-button link to="register" v-if="islogedin &&  !isloading" >Register as a coach</base-button>
      </div>
      <div v-if="isloading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hascoach">
        <coach-item
          v-for="coach in filterdcoach"
          :key="coach.id"
          :id="coach.id"
          :areas="coach.areas"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :hourlyRate="coach.hourlyRate"
          
        ></coach-item>
      </ul>
      <ul v-else>
        <h2>No coaches founded</h2>
      </ul>
    </base-card>
  </section>
</template>
<script>
import BaseButton from '../../UI/BaseButton.vue'

import CoachItem from '../../component/coaches/CoachItem.vue'

import CoachFilter from '../../component/coaches/CoachFilter.vue'


export default {
 
  data(){
    return{
      isloading:false,
      error:null,
      coacheslist:{
        frontend:true,
        career:true,
        backend:true,
      }
    }
  },
  components: {
    CoachItem,
    BaseButton,
    CoachFilter,
  },
  computed: {
    filterdcoach() {
    const activecoahes= this.$store.getters['coach/coaches'];
    console.log(activecoahes)
   
   return activecoahes.filter((c=>{
      if (this.coacheslist.frontend && c.areas.includes('frontend')) return true
      if (this.coacheslist.career && c.areas.includes('career'))return true
      if (this.coacheslist.backend && c.areas.includes('backend'))return true 
      return false
    }))
  
    },
    islogedin(){
      return this.$store.getters.isauth
    },
    hascoach() {
      return !this.isloading &&  this.$store.getters['coach/hascoach'];
    },
  
  
  },
  created(){
    this.laodcoaches();
  },
  methods:{
       showfilter(updatedfilter){
        this.coacheslist=updatedfilter;
      },
      async  laodcoaches(){
        this.isloading=true;
       try{
       await this.$store.dispatch('coach/loadcoaches')
        }
        catch (error){
          this.error =error || 'something went wrong';

        }
        this.isloading=false;
       
      },
      handleerror(){
        this.error =null
      }
    },
    
   
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>