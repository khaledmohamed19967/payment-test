<template>
  <div class="container base-container" :class="[containerFullHeight && containerFullHeight]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  containerFullHeight: {type: String}
})
</script>

<style lang="scss" scoped>
.base-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 100%;

  @media screen and (max-width: 1274px) {
    padding: 0 18px !important;
  }

  &.mainLayout {
    display: flex;
    flex-direction: column;
    min-height: calc(-178px + 100vh);
    gap: 16px;
  }

  &.blankLayout {
    display: flex;
    flex-direction: column;
    min-height: calc(-44px + 100vh);
    gap: 16px;
  }
}
</style>
