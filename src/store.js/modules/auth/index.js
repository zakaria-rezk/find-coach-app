import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    state(){
        return {
            token:null,
            userID:null,
            tokenExperstion:null,
        }

    },
    getters,
    mutations,
    actions,
   
   
}

