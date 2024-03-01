export default{
    addrequests(state,paylod){
        state.requests.push(paylod);

    },
    getrequests(state, payload) {
        state.requests = payload;
        
      }
}