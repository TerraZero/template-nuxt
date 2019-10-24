<template lang="pug">
  .page
    .content
      ListInput
      List
</template>

<script>
export default {
  components: {
    List: () => import("@/components/List"),
    ListInput: () => import("@/components/ListInput")
  }
};
</script>

<style lang="sass">
  .page,
  .content
    height: 100%

  .page
    padding: 8%
    box-sizing: border-box

</style>
