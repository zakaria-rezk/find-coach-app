<template>
  <section>
    <base-card>
      <h2>{{ fullname }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now</h2>

        <base-button link :to="contactlink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      coachdetail: this.$store.getters['coach/coaches'],
    };
  },

  computed: {
    fullname() {
      return this.selectedcoach.firstName + ' ' + this.selectedcoach.lastName;
    },
    selectedcoach() {
      return this.$store.getters['coach/coaches'].find(
        (co) => co.id === this.id
      );
    },
    areas() {
      return this.selectedcoach.areas;
    },
    description() {
      return this.selectedcoach.description;
    },
    contactlink() {
      return '/coaches' + '/' + this.$route.params.id + '/contact';
    },
    rate() {
      return this.selectedcoach.hourlyRate;
    },
  },
};
</script>