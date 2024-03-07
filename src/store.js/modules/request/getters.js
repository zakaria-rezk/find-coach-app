export default {
  requestsG(state, _1, _2, rootGetters) {
    // const id =rootGetters.avtiveuser;
    const coachId = rootGetters.avtiveuser;
    console.log('requestiiiid' + state.requests[0]);
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasrequest(state) {
    return state.requests && state.requests.length > 0;
  },
};
