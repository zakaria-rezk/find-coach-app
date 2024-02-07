export default {
  addcoach(state, payload) {
    state.coaches.push(payload);
  },
  loadcoaches(state, payload) {
    state.coaches = payload ;
    
  },
};
