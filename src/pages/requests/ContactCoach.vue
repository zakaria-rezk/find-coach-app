<template>
   
    <form @submit.prevent="submitform">
 <div class="form-control">
    <label for="email">Your E-mail</label>
    <input type="email" id="email" v-model.trim="email">
 </div>
 <div class="form-control">
    <label for="message">Your message</label>
   <textarea id="message" rows="5" v-model.trim="messsage" ></textarea>
 </div>
  <p class="errors" v-if="!validation">plz enter a valid data</p>
 <div class="actions">
     <base-button>Send Message</base-button>
 </div>


    </form>
</template>
<script>
export default{
    data(){
        return{
      email:'',
      messsage:'',
      validation:true
        }
    },
    methods:{
        validform(){
            this.validation=true;
            if(this.email===''||!(this.email.includes('@'))||this.messsage===''){
                this.validation=false;
                
            }

        },
        submitform(){
            this.validform();
            if(!this.validation) return
            const data ={
                coachid:this.$route.params.id,
                email:this.email,
                mess:this.messsage,  
            }
            
            this.$store.dispatch('request/addrequest',data)
            this.$router.replace('/');
            
        }
    }
}




</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}</style>