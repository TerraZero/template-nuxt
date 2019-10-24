<template lang="pug">
  .list
    transition-group(name="enter-right")
      .list--item(v-for="item, index of list", :key="item")
        .list--text
          | {{ item }}
        button.list--remove(@click="onClick(index)")
          | X
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.app.list;
    }
  },
  methods: {
    onClick(index) {
      this.$store.commit("app/remove", index);
    }
  }
};
</script>

<style lang="sass">
  .list
    display: flex
    flex-direction: column
    overflow: hidden

    &--item
      display: flex
      font-size: 25px

    &--item:nth-child(odd) &--text
      background: #999

    &--item:nth-child(even) &--text
      background: #BBB

    &--text
      width: 100%
      line-height: 50px
      padding: 0 20px

    &--remove
      font-size: 25px
      border: 0
      padding: 10px 40px
      cursor: pointer
      outline: 0

    &--item:nth-child(odd) &--remove
      background: #AAA
      &:hover
        background: #BBB

    &--item:nth-child(even) &--remove
      background: #CCC
      &:hover
        background: #DDD
</style>
