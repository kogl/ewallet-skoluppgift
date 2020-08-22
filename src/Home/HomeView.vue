<template>
  <div>
      <Cards v-bind:cards="cards"  v-on:del-card="deleteCard"/>
  </div>
</template>

<script>
import Cards from './Cards'
export default {
  name: "HomeView",
  components: {
  Cards,},
  

};
</script>

<style>
</style>