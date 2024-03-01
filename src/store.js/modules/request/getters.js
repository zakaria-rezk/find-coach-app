export default{
    requestsG(state){
        // const id =rootGetters.avtiveuser;
        
        
        return state.requests
    },
    hasrequest(state,_,getter){
        return getter.requests && getter.requests.length >0
    }
}