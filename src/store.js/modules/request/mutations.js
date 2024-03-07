export default {
  addrequests(state, paylod) {
    state.requests.push(paylod);
  },
  getrequests(state, payload) {
    console.log('mtattion' + payload[0].userEmail);
    state.requests = payload;
  },
};
