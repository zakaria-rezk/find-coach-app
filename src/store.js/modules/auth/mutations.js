export default {
     setUser(state , paylod){
          state.userID=paylod.userid,
           state.token =paylod.token,
          state.tokenExperstion =paylod.expiresIn
     }
}