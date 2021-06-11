<template>
  <div id="app">
    <router-view />
    <navigation />
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
<style lang="sass">
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css)
#app
  font-family: Noto Sans JP
  background: #f5f5f5
  margin: auto
  padding: none
  width: 375px
body
  margin-top: none !important
  background: #f5f5f5
</style>
