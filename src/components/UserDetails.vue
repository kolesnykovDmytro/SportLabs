<template>
 <div class="user-details">
  <router-link class="back-link" to="/develop-list">
    <i class="material-icons arrow-back">arrow_back_ios</i>
    <span>Назад к списку</span>
  </router-link>
  <h2>Подробнее</h2>
  <fieldset class="field-inner">
    <div class="field__item user-name">
      <label for="title">Имя пользователя</label>
      <p>{{user.title}}</p>
    </div>
    <div class="field__item">
      <label for="phone">Телефон</label>
      <p>{{user.phone}}</p>
    </div>
    <div class="field__item">
      <label for="email">E-mail</label>
      <p>{{user.email}}</p>
    </div>
    <div class="field__item">
      <label for="skype">Skype</label>
      <p>{{user.skype}}</p>
    </div>
    <div class="field__item">
      <label for="telegram">Tелеграм</label>
      <p>{{user.telegram}}</p>
    </div>
    <div class="field__item">
      <label for="message">Комментарий</label>
      <p>{{user.message}}</p>
    </div>
  </fieldset>
 </div>
</template>

<script>
import UserService from '../service/UserService.js'

export default {

 data(){
  return{
   user:{},
   counter: 0,
   leakyReference: null
  }
 },
 created(){
  UserService.$on("viewDetails", (selectedUser) => {
   this.user = selectedUser;
  })
 },
 mounted(){
  UserService.viewDetails(this.$route.params.id)
 },
 watch:{
  '$route.params.id'(id){
   UserService.viewDetails(id)
  }
 }
}
</script>

<style lang="sass" scoped>
  .field-inner
    border: none
    margin-top: 20px
  .field__item
    label
      font-size: 16px
      color: #1976d2
    p
      font-size: 20px
  .back-link
    display: flex
    align-items: center
    text-decoration: none
    .arrow-back
      margin-right: 5px
</style>
