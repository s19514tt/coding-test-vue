<template>
  <div class="card">
    <picture>
      <source
        class="card-image"
        :srcset="`${imageUrl}?fm=webp&w=500`"
        type="image/webp"
      />
      <img class="card-image" :srcset="`${imageUrl}?w=500`" :alt="title" />
    </picture>
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
  margin: 16px 0px
  width: 100%
  max-width: 335px
  height: 100%
  background: $white
  border-radius: 10px
  overflow: hidden
  &-text
    padding: 10px 12px
    border-radius: 10px
    &-title
      font-weight: 900
      font-size: 18px
      line-height: 26px
      align-items: center
      letter-spacing: 0.06em
      color: $black
      margin: 0px
    &-description
      margin: 6px 0px 0px 0px
      font-size: 13px
      line-height: 19px
      text-align: justify
      letter-spacing: 0.01em
      color: $black
  &-image
    width: 100%
    max-width: 335px
    height: 160px
    object-fit: cover
    object-position: 0% 0%
    border-radius: 10px 10px 0px 0px
    vertical-align: bottom
</style>
