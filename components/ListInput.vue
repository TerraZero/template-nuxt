<template lang="pug">
  .list-input
    input.list-input--input(type="text", v-model="field", @keyup.enter="onAdd")
    button.list-input--button(@click="onAdd")
      | Add
</template>

<script>
export default {
  data() {
    return {
      field: ""
    };
  },
  computed: {
    list() {
      return this.$store.state.app.list;
    }
  },
  methods: {
    onAdd() {
      if (this.field) {
        this.$store.commit("app/add", this.field);
        this.field = "";
      }
    }
  }
};
</script>

<style lang="sass">
  .list-input
    display: flex

    &--input
      width: 100%
      border: 0
      padding: 5px
      color: black
      font-size: 25px
      outline: 0

    &--button
      border: 0
      padding: 10px 40px
      font-size: 25px
      outline: 0
      cursor: pointer
      &:hover
        background-color: #CCC

</style>
