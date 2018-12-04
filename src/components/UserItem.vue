<template>
 <div class="card">
  <div class="card-body">
   <h4 class="card-title">{{index}} {{user.title}}</h4>
   <p class="card-text"><span>Телефон</span><span>{{user.phone}}</span></p>
   <p class="card-text"><span>Почта</span><span>{{user.email}}</span></p>
   <p class="card-text"><span>Скайп</span><span>{{user.skype}}</span></p>
   <p class="card-text"><span>Телеграм</span><span>{{user.telegram}}</span></p>
   <p class="card-text"><span>Коментарий</span><span>{{user.message}}</span></p>
   <v-btn @click="viewDetailsClicked" color="info" class="btn-more">Подробнее</v-btn>
   <button @click="deleteObject(user)" color="info" class="btn-delete">
     <i class="material-icons">delete_forever</i>
    </button>
  </div>
 </div>
</template>

<script>
import UserService from '../service/UserService.js'
export default {
 props: {
  user: {
   type: Object,
   required: true
  },
  index: {
   type: Number
  },
 },
 data(){
  return{}
 },
 methods: {
  viewDetailsClicked(){
   this.$router.push('/detail/'+this.user.id)
   UserService.viewDetails(this.user.id)
  },
  deleteObject(index){
  this.$confirm('Вы действительно хотите удалить пользователя?').then(res => {
    if(res)
      UserService.users.splice(index, 1)
    })
  }
}
}
</script>

<style lang="sass">
  .card
    border-radius: 10px
    margin-bottom: 1%
    padding: 1em
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1)
    width: 280px
    height: 395px
    margin-right: 2%
    .card-body
      position: relative
      height: 100%
      .card-title
        font-size: 16px
        margin-bottom: 5px
      .card-text
        display: flex
        flex-direction: column
        span
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          &:first-child
            font-weight: bold
      .btn-delete
        position: absolute
        top: 0
        right: 0
      .btn-more
        position: absolute
        bottom: 0
        left: 0
</style>

