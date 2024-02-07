import { createStore } from "vuex";
import coachmodule from "./modules/coach";
import requestmodule from "./modules/request";
const store =createStore({
    modules:{
        coach:coachmodule,
        request:requestmodule,

    },
    state(){
        return {
            userid:'c3'
        }
    },
    getters:{
        avtiveuser(state){
            return state.userid
        }
    }

})
export default store;