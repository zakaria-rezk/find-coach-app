<template>
  <form action="">
    <div class="form-control" :class= "{invalid:  !firstname.isvalid}">
      <label for="firstname">First Name</label>
      <input type="text" name="" id="firstname" v-model.trim="firstname.val" />
      <p v-if="!firstname.isvalid">pleas enter a valid name</p>
    </div>
    <div class="form-control" :class= "{invalid:  !lastname.isvalid}">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastname.val" />
      <p v-if="!lastname.isvalid">pleas enter a valid name</p>

    </div>
    <div class="form-control" :class= "{invalid:  !description.isvalid}">
      <label for="description">Description</label>
      <textarea
        name=""
        id="descriotion"
        rows="5"
        v-model="description.val"
      ></textarea>
      <p v-if="!description.isvalid">pleas enter a valid description</p>
    </div>
    <div class="form-control" :class= "{invalid:  !hourlyrate.isvalid}">
      <label for="rate">hourlyRate</label>
      <input type="number" name="" id="rate" v-model="hourlyrate.val" />
      <p v-if="!hourlyrate.isvalid">pleas enter a valid rate</p>
    </div>
    <div class="form-control" :class= "{invalid:  !areas.isvalid}">
      <h3>area of experites</h3>
      <input
        type="checkbox"
        name=""
        id="backend"
        value="backend"
        v-model="areas.val"
      />
      <label for="frontend">Backend</label>
      <input
        type="checkbox"
        name=""
        id="frontend"
        value="frontend"
        v-model="areas.val"
      />
      <label for="backend">Frontend</label>
      <input
        type="checkbox"
        name=""
        id="career"
        value="career"
        v-model="areas.val"
      />
      <label for="career">Career</label>
      <p v-if="!areas.isvalid">pleas enter a valid areas of experites</p>
    </div>
    <base-button @click="submitform">register</base-button>
  </form>
</template>
<script>
// import BaseCard from '../../UI/BaseCard.vue';
export default {
  emits: ['save-data'],

  data() {
    return {
      firstname: {
        val: '',
        isvalid: true,
      },
      lastname: {
        val: '',
        isvalid: true,
      },
      description: {
        val: '',
        isvalid: true,
      },
      hourlyrate: {
        val: '',
        isvalid: true,
      },
      areas: {
        val: [],
        isvalid: true,
      },
      validation: true,
    };
  },
  computed: {},
  methods: {
    resetvalidatino(){
      this.firstname.isvalid = true;
      this.lastname.isvalid = true;
      this.description.isvalid = true;
      this.hourlyrate.isvalid = true;
      this.areas.isvalid = true;
      this.validation=true
    },
    validationmethod() {
      if (this.firstname.val == '') {
        this.firstname.isvalid = false;
        this.validation = false;
      }
      if (this.lastname.val == '') {
        this.lastname.isvalid = false;
        this.validation = false;
      }
      if (this.description.val == '') {
        this.description.isvalid = false;
        this.validation = false;
      }
      if (this.hourlyrate.val <= 0 || !this.hourlyrate.val) {
        this.hourlyrate.isvalid = false;
        this.validation = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isvalid = false;
        this.validation = false;
      }
    },
    submitform(event) {
      event.preventDefault();
      this.resetvalidatino();
      this.validationmethod();
     
      if(!this.validation) return;
     
      const coach = {
        iscoach: true,
        first: this.firstname.val,
        last: this.lastname.val,
        desc: this.description.val,
        rate: this.hourlyrate.val,
        areas: this.areas.val,
      };
    
 
      this.$router.replace('/');
      this.$emit('save-data', coach);
      
     
    },
  },
};
</script>
<style>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
p{
  color: red;
}
</style>