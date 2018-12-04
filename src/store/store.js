import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        users: []
    },
    getters:{
      getUsers: state => state.users
    },
    actions:{
      loadUsers(context, users){
        context.commit('loadUsers', users)
      }
    },
    mutations:{
        loadUsers(state, payload) {
            state.users = payload
        }
    }
})