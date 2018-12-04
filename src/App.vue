<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <div class="container">
        <router-view/>
      </div>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  computed:{
    componentName(){
      return this.mode == 'view' ? 'UserDetails' : 'UserAdd'
    }
  },
  components: {
    AppHeader,
    AppFooter,
  },
  data () {
    return {
      selectedUser: {}
    }
  },
  }
</script>

<style lang="sass">
  .back-link
    display: flex
    align-items: center
    text-decoration: none
    margin-bottom: 20px

</style>

