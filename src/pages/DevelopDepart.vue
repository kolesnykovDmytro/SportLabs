<template>
  <div class="user-container">
    <div class="title">
      <router-link class="back-link" to="/home"><i class="material-icons">arrow_back</i>На главную</router-link>
      <h2>Отдел разработки</h2>
    </div>
    <v-flex md12>
      <v-container fluid>
        <v-layout row>
          <v-flex>
            <router-link to="/add" class="btn btn-user">
              <i class="material-icons">person_add</i>
              <span>Добавить пользователя</span>
            </router-link>
          </v-flex>
          <v-flex class="user-search">
            <v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <UserItem v-for="(user, i) in filteredUsers" :user="user" :key="user.id" :index="(i+1)"></UserItem>
  </div>
</template>

<script>
import UserItem from '../components/UserItem.vue'
import UserService from '../service/UserService.js'
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      searchTerm: null,
    }
  },
  computed:{
    ...mapGetters({
      users: 'getUsers'
    }),
    filteredUsers(){
      let users = this.users
      if(this.searchTerm)
        users = users.filter(b => 
        b.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0 || b.phone.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0 || b.email.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=0)
        return users
    }
  },
  components: {
    UserItem,
  },
  methods:{
    ...mapActions(['loadUsers'])
  },
  created(){
    this.loadUsers(UserService.users)
  },
}
</script>

<style lang="sass" scoped>
  .user-container
    display: flex
    flex-wrap: wrap
    .btn-user
      flex-basis: 100%
      text-decoration: none
      display: flex
      align-items: center
      .material-icons
        margin-right: 5px
  .layout.row
    align-items: center
  .user-search
    max-width: 300px
</style>