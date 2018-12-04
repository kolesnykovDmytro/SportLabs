import Vue from 'vue'
import _ from 'lodash'

export default new Vue({
 data: {
  users: [
   {
    id: 1,
    title: 'Kolesnykov Dmytro',
    phone: '0933333332',
    email: 'kolesnykovdmytro@gmail.com',
    skype: 'dmytro_kolesnykov',
    telegram: '@kolesnykovdmuytro',
    message: 'Я хочу працювати у Sport Labs Group',
   }
  ]
 },
 methods: {
  viewDetails(id) {
   let userToView = _.find(this.users, {id: parseInt(id)});
   this.$emit("viewDetails", userToView);
  },
  addUser(title, phone, email, skype, telegram, message) {
   var id = this.users[this.users.length - 1].id+1;
   this.users.push({
    id,
    title,
    phone,
    email,
    skype,
    telegram,
    message,
   })
  }
 }
})