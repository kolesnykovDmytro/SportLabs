<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-btn dark color="secondary" v-for="(item) in departItems" :key="item.id" :href="item.route" :class="item.class" xs3>
          {{item.title}}
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    computed: {
      departItems(){
        return [
          {
            id: 1,
            title: 'Разработка',
            class: 'develop-btn',
            route: '/develop-list'
          },
          {
            id: 2,
            title: 'Маркетинг',
            class: 'marketing-btn',
            route: '/marketing-list'
          },
          {
            id: 3,
            title: 'Hr',
            class: 'hr-btn',
            route: '/hr-list'
          },
          {
            id: 4,
            title: 'Тестирование',
            class: 'testing-btn',
            route: '/testing-list'
          },
          {
            id: 5,
            title: 'Бухгалтерия',
            class: 'accounting-btn',
            route: '/accounting-list'
          },
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>

  .accounting-btn
    width: 300px
    height: 300px
    background-image: url('../assets/img/count-bg.jpg')
    background-size: cover
    background-position: 50% 50%
    background-repeat: no-repeat

  .testing-btn
    width: 300px
    height: 300px
    background-image: url('../assets/img/testing.jpg')
    background-size: cover
    background-position: 50% 50%
    background-repeat: no-repeat

  .marketing-btn
    width: 300px
    height: 300px
    background-image: url('../assets/img/marketing.jpg')
    background-size: cover
    background-position: 50% 50%
    background-repeat: no-repeat

  .hr-btn
    width: 300px
    height: 300px
    background-image: url('../assets/img/hr-bg.jpeg')
    background-size: cover
    background-position: 50% 50%
    background-repeat: no-repeat

  .develop-btn
    width: 300px
    height: 300px
    background-image: url('../assets/img/develop.jpg')
    background-size: cover
    background-position: 50% 50%
    background-repeat: no-repeat

  .v-btn
    font-size: 20px
      
</style>
