<template>
  
    <base-dialog :show="!!error" @close="handleerror" title="An error accured"> 
  {{ error }} 
</base-dialog>
  <section>
    <base-card>
      <header><h2>Request Received</h2></header>
      <div v-if="isloading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="!hasrequest && !isloading">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :message="request.userMessage"
          :email="request.userEmail"
        ></request-item>
      </ul>
      <h3 v-else>You have not recevied any messages</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../../component/requests/RequestItem.vue';
export default {
  components: {
    RequestItem,
  },
  //   data() { 
    data(){
      return{
        req: this.$store.getters['request/requestsG'],
        isloading:false,
        error:null,
      }
    },

  computed: {
    requests() {
      return this.$store.getters['request/requestsG'];
    },
    hasrequest() {
      return this.$store.getters['request/hasrequest'];
    },
    mess() {
      return this.request[0].messages;
    },
    add() {
      return this.request[0].emails;
    },
  },
  created(){
    this.loadrequests();

  },
  methods: {
 
   async loadrequests() {
    this.isloading=true;
      try{
       
      await this.$store.dispatch('request/loadrequest')
     
      }
            catch (error){
              this.error=error || 'Some thing going wrong'
            }
            this.isloading=false
    },
    handleerror(){
      this.error=null;
  
    }
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>