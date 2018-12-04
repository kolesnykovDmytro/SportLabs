<template>
  <v-form ref="form" v-model="valid" lazy-validation class="add-user-form">
    <router-link class="back-link" to="/develop-list"><i class="material-icons">arrow_back</i>Назад</router-link>
    <v-text-field
      v-model="user.title"
      :rules="nameRules"
      label="Ваше имя и фамилия"
      id="title"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.phone"
      :rules="phoneRules"
      label="Ваш телефон"
      type='number'
      id="phone"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="Ваш E-mail"
      id="price"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.skype"
      :rules="skypeRules"
      label="Ваш skype"
      id="skype"
      required
    ></v-text-field>
    <v-text-field
      v-model="user.telegram"
      :rules="telegramRules"
      label="Ваш телеграм"
      id="telegram"
      required
    ></v-text-field>
    <v-textarea
      name="input-7-1"
      v-model="user.message"
      :rules="messageRules"
      label="Ваш комментарий"
      id="coment"
      required
    ></v-textarea>
    <v-btn
      :disabled="!valid"
      @click.prevent="addUser"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
import UserService from '../service/UserService.js'
export default {
  data: () => ({
    user: {},
    valid: true,
    name: '',
    nameRules: [
    v => !!v || 'Введите пожалуйста Ваше Имя и Фамилию'
    ],
    phone: '',
    phoneRules: [
    v => !!v || 'Введите пожалуйста Ваш телефон',
    ],
    email: '',
    emailRules: [
    v => !!v || 'Введите пожалуйста E-mail',
    v => /.+@.+/.test(v) || 'Введите пожалуйста коректный E-mail'
    ],
    skype: '',
    skypeRules: [
      v => !!v || 'Введите пожалуйста Ваш Skype'
    ],
    telegram:'',
    telegramRules: [
      v => !!v || 'Введите пожалуйста Ваш Telegram'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Введите пожалуйста Ваш коментарий'
    ],
  }),

 methods: {
  addUser(){
   UserService.addUser(this.user.title, this.user.phone, this.user.email, this.user.skype, this.user.telegram, this.user.message )
   this.$router.push('/develop-list')
  },
  clear () {
    this.$refs.form.reset()
  }
 }
}
</script>

<style lang="sass" scoped>
  .add-user-form
    max-width: 600px
    margin: 0 auto
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1)
    padding: 1em
    border-radius: 5px
</style>

