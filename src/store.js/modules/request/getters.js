export default{
    requests(state,_,_2,rootGetters){
        const id =rootGetters.avtiveuser;
        console.log(state.requests)
        return state.requests.filter(req => req.coachid ===id)
    },
    hasrequest(_,getter){
       
        return getter.requests&& getter.requests.length > 0
    }
}