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
  background: #f5f5f5
  margin: auto
  padding: none
  width: 375px
body
  margin-top: none !important
  background: #f5f5f5
</style>
