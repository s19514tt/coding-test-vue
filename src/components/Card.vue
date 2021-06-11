<template>
  <div class="card">
    <img class="card-image" :src="imageUrl" />
    <div class="card-text">
      <p class="card-text-title">{{ title }}</p>
      <p class="card-text-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    imageUrl: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.card
  margin: 16px 20px
  width: 335px
  height: 100%
  background: #FFFFFF
  border-radius: 10px
  font-size: 0px
  &-text
    padding: 10px 12px
    border-radius: 10px
    &-title
      font-family: Noto Sans JP
      font-style: normal
      font-weight: 900
      font-size: 18px
      line-height: 26px
      display: flex
      align-items: center
      letter-spacing: 0.06em
      color: #000000
      margin: 0px 0px
    &-description
      margin: 6px 0px 0px 0px
      font-family: Noto Sans JP
      font-style: normal
      font-weight: normal
      font-size: 13px
      line-height: 19px
      text-align: justify
      letter-spacing: 0.01em
      color: #000000
  &-image
    width: 335px
    height: 160px
    object-fit: cover
    object-position: 0% 0%
    border-radius: 10px 10px 0px 0px
</style>
