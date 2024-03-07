<template>
  <base-card>
    <!-- <section v-if="false"><h2>Register as a coach now!</h2></section> -->
    <coach-form @save-data="getdata"></coach-form>
  </base-card>
</template>
<script>
import CoachForm from '../../component/coaches/CoachForm.vue';
// import { mapActions } from 'vuex';
export default {
  components: {
    CoachForm,
  },
  methods: {
    getdata(coachdata) {
      this.$store.dispatch('coach/addcoach', coachdata);
    },
  },
};
</script>
<style scoped>
</style>