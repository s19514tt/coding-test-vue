<template>
  <div id="home">
    <p id="page-title">投稿一覧</p>
    <card
      v-for="photo in photos"
      :title="photo.title"
      :imageUrl="photo.image.url"
      :description="photo.description"
      :key="photo.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { Photo } from "../store/index";
import Card from "@/components/Card.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Card,
  },
  mounted: function (): void {
    this.$store.dispatch("getPhotos");
  },
  computed: mapState<{ photos: Photo[] }>({
    photos: (state: { photos: Photo[] }) =>
      state.photos.sort((a, b) => a.displayOrder - b.displayOrder),
  }),
});
</script>

<style lang="sass">
#page-title
  width: auto
  height: 32px
  left: 20px
  top: 36px
  margin: 36px 20px 0px
  font-family: Noto Sans JP
  font-style: normal
  font-weight: 900
  font-size: 22px
  line-height: 32px
  /* identical to box height */
  letter-spacing: 0.06em
  color: #000000
#home
  margin-bottom: 94px
</style>
