<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cards: [
        {
          id: 1,
          cardNumber: "XXXX XXXX XXXX XXXX",
          name: "Hasse ClaesOhlsson",
          valid: "04/24",
          bank: "Ninja",
        },
        {
          id: 2,
          cardNumber: "XXXX XXXX XXXX XXXX",
          name: "Bubba",
          valid: "04/24",
          bank: "Bit",
        },
        {
          id: 3,
          cardNumber: "XXXX XXXX XXXX XXXX",
          name: "Sadulisten Eurocopsson",
          valid: "04/24",
          bank: "Evil",
        },
        {
          id: 4,
          cardNumber: "XXXX XXXX XXXX XXXX",
          name: "Oskar ",
          valid: "04/24",
          bank: "block",
        },
      ],
    };
  },
  methods: {
    deleteCard(id) {
      this.cards = this.cards.filter((card) => card.id !== id);
    },
    addCard(newCard) {
      this.cards = [...this.cards, newCard];
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Josefin Sans", sans-serif;
}
</style>
