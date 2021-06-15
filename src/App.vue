<template>
  <div id="app">
    <router-view />
    <navigation />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap')
#app
  font-family: 'Noto Sans JP', sans-serif
  font-style: normal
  font-weight: normal
  background: $background-color
  margin: auto
  width: 100%
  max-width: 375px
body
  background: $background-color
  margin: 0px
</style>
