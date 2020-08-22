<template>
  <div class="card">
    {{card.name}}
    <button @click="$emit('del-card', card.id)" class="del-card">X</button>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["card"],
};
</script>

<style scoped>
.card {
  padding: 20px;
  background: linear-gradient(#2f2926, #444);
  color: #fff;
  border-radius: 7.5px;
  height: 200px;
  width: 405px;
  box-shadow: 5px 7.5px 15px #000;
}
.del-card {
  color: snow;
  background: tomato;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border: none;
  font-weight: lighter;
  cursor: pointer;
}

.del-card:hover{
    background: rgb(255, 38, 0);
}
</style>