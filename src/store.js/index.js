import { createStore } from 'vuex';
import coachmodule from './modules/coach';
import requestmodule from './modules/request';
import authmodule from './modules/auth';
const store = createStore({
  modules: {
    coach: coachmodule,
    request: requestmodule,
    auth: authmodule,
  },
  state() {},
  getters: {},
});
export default store;
