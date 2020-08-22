<template>
  <div>
    <CardForm v-on:add-card="addCard" />
  </div>
</template>

<script>
import CardForm from "./CardForm";
export default {
  name: "CardFormView",
  components: {
    CardForm,
  },
  methods: {
    
  },
};
</script>

<style>
</style>