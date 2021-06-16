<template>
  <div class="home">
    <h1 class="page-title">投稿一覧</h1>
    <card
      v-for="photo in getPhotos"
      :title="photo.title"
      :imageUrl="photo.image.url"
      :description="photo.description"
      :key="photo.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Card,
  },
  mounted: function (): void {
    this.$store.dispatch("getPhotos");
  },
  computed: { ...mapGetters(["getPhotos"]) },
});
</script>

<style lang="sass">
.page-title
  width: auto
  margin: 36px 20px 0px
  font-weight: 900
  font-size: 22px
  line-height: 32px
  letter-spacing: 0.06em
  color: #000000
.home
  margin-bottom: 94px
</style>
