export default{
    avtiveuser(state){
        return state.userID
    },
    userToken(state){
      return state.token
    },
    isauth(state){
        return !!state.userID
    }
}