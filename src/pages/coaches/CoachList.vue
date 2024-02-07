<template>
  <base-dialog :show="!!error" @close="handleerror"> 
  {{ error }} 
</base-dialog>
  <section>
  <coach-filter @change-filter="showfilter"></coach-filter>
  </section>
  
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="laodcoaches">Refresh</base-button>
        <base-button link to="register" v-if="!iscoach && !isloading" >Register as a coach</base-button>
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
    const  activecoahes= this.$store.getters['coach/coaches'];
    console.log(activecoahes[activecoahes.length-1].iscoach)
   return activecoahes.filter((c=>{
      if (this.coacheslist.frontend && c.areas.includes('frontend')) return true
      if (this.coacheslist.career && c.areas.includes('career'))return true
      if (this.coacheslist.backend && c.areas.includes('backend'))return true 
      return false
    }))
  
    },
    hascoach() {
      return this.$store.getters['coach/hascoach'];
    },
    iscoach(){
      const coaches= this.$store.getters['coach/coaches'];
      return coaches[coaches.length-1].iscoach
    }
  
  },
  methods:{
      showfilter(updatedfilter){
        this.coacheslist=updatedfilter;
      },
      laodcoaches(){
        try{
        this.$store.dispatch('coaches/loadcoaches')
        }
        catch (error){
          this.error =error || 'something went wrong';

        }
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