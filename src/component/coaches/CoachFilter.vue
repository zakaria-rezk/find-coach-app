<template>
    <base-card>
   <h2>Find Your Coach</h2> 
   <span class="filter-option">
   <input type="checkbox" name="front-end" id="frontend" checked @change="updatefilter">
   <label for="front-end">Frontend</label>
   <input type="checkbox" name="career" id="career" checked  @change="updatefilter">
   <label for="career">Career</label>
   <input type="checkbox" name="back-end" id="backend" checked  @change="updatefilter">
   <label for="back-end">Backend</label>
   </span>
    </base-card>
</template>

<script>
export default {
    emits:['change-filter'],
    data(){
        
   return {
    checkfilter:{
    frontend:true,
    career:true,
    backend:true,
    }
   }
   },
   methods:{
       updatefilter(event){
        
        const id =event.target.id;
        const isactive=event.target.checked
        const updatedfilter=
         {
            ...this.checkfilter,
            [id]:isactive  
         } 
         this.checkfilter=updatedfilter
      this.$emit('change-filter',updatedfilter)
     
   }

    }
   
}


</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>