<template>
  <section>
    <base-card>
      <header><h2>Request Received</h2></header>
      <ul v-if="hasrequest">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :message="request.message"
          :email="request.email"
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

  computed: {
    requests() {
      return this.$store.getters['request/requests'];
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
  methods: {
    show() {
      console.log(this.request[0].messages);
      console.log(this.request[0].emails);
      console.log();
    },
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