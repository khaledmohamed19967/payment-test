<template>
  <component :class="[fontWeight, fontSize, fontColor]" :is="tag">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  tag: { type: String as PropType<TBaseTextTags>, default: 'p' },
  fontWeight: { type: String as PropType<TBaseTextWeight> },
  fontSize: { type: String as PropType<TBaseFontSize> },
  fontColor: {
    type: String as PropType<TBaseFontColor>,
    default: 'dark',
  },
});
</script>

<style scoped src="./styles.scss"></style>
