<template>
<div class="container">
    <div class="card-form-info">
    <form action @submit="addCard">
      <label for="cardnr">card number</label>
      <input type="text" v-model="cardnumber" name="cardNumber" id="cardnr"/>

      <label for="cardname">name cardholder</label>
      <input type="text" v-model="name" name="name" id="cardname"/>

      <label for="valid">valid thru</label>
      <input class="valid" v-model="valid" type="text" name="valid" id="valid" />

      <label for="vendors">vendor</label>
      <select class="bank" name="bank" v-model="bank" id="vendors">
        <option value="ninja">ninja</option>
        <option value="bitcoin">bitcoin</option>
        <option value="block">block</option>
        <option value="evil">evil</option>
      </select>
      <input type="submit" class="btn" value="Submit" />
    </form>
  </div>
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "CardForm",
  data(){
    return{
      cardnumber:'',
      name:'',
      valid:'',
      bank:''
    }
  },
  methods:{
    addCard(e){
      e.preventDefault()

      const newCard = {
        id:  uuidv4(),
        // cardNumber: this.cardNumber,
        // name: this.name,
        // valid: this.valid,
        // bank: this.bank
      }
      this.$emit('add-card', newCard)
    }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
}
.card-form-info {
margin-top: 10px

}

label {
  font-weight: lighter;
  font-size: 10px;
  padding-bottom: 10px;
}

input {
  padding: 10px;
  height: 50px;
  width: 410px;
  border: solid 1px black;
  border-radius: 7.5px;
  flex: 12;

}

.valid {
  padding: 15px;
  height: 50px;
  width: 205px;
}

.bank {
  padding: 15px;
  height: 50px;
  width: 410px;
}

.btn{
  background: black;
  color: white
}
</style>