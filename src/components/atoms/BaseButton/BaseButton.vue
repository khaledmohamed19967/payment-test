<template>
  <q-btn
    :loading="loading"
    flat
    class="app-button"
    :class="[
      classList,
      buttonPosition,
      buttonHeight,
      buttonWidth,
      buttonBackground,
      buttonColor,
      buttonRadius,
      fontSize,
    ]"
  >
    <div class="flex items-center icon" v-if="slot.icon">
      <slot name="icon" />
    </div>
    <slot />
    <template v-slot:loading>
      <q-spinner-ios size="1.8rem" />
    </template>
  </q-btn>
</template>

<script setup lang="ts">
import {type  PropType, useSlots } from 'vue';
import type { TButtonPosition } from 'components/atoms/BaseButton/button.type';

defineProps({
  classList: { type: String },
  buttonPosition: {
    type: String as PropType<TButtonPosition>,
    default: 'button-relative',
  },
  buttonHeight: {
    type: String as PropType<
      'lg-btn' | 'sm-btn' | 'md-btn' | 'sm-primary-btn' | 'xs-btn'
    >,
  },
  buttonWidth: {
    type: String as PropType<'max-content' | 'full-size'>,
  },
  buttonBackground: {
    type: String as PropType<'transparent' | 'secondary-color'>,
  },
  buttonColor: {
    type: String as PropType<'colorWhite'>,
  },
  buttonRadius: {
    type: String as PropType<'radius-sm' | 'radius-md'>,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  fontSize: {
    type: String as PropType<'font-18'>,
  },
});

const slot = useSlots();
</script>

<style lang="scss">
.app-button {
  background:#cccccc;
  padding: 0 23px;
  color: #ffffff;
  font-weight: 500;
  min-width: 13.813rem;
  border-radius: 94px;

  .icon {
    gap: 4px;
  }

  .q-btn__content {
    gap: 4px !important;
  }

  &.button-fixed {
    position: fixed;
    bottom: 1.313rem;
    width: 93% !important;
    margin: auto !important;
    left: 0;
    right: 0;
  }

  &.max-content {
    min-width: inherit;
  }

  &.full-size {
    min-width: 100%;
  }

  &.lg-btn {
    min-height: 56px;
  }

  &.md-btn {
    min-height: 49px;
  }

  &.sm-primary-btn {
    min-height: 42px;
  }

  &.sm-btn {
    min-height: 36px;
  }

  &.xs-btn {
    min-height: 32px;
    height: 32px;
  }

  &.fixed {
    position: fixed;
    width: 100%;
    left: 0;
    z-index: 9999;
    bottom: 10px;
  }

  &.transparent {
    background: transparent;
    border: 1px solid var(--q-app-primary-color);
    color: var(--q-app-primary-color);
  }

  &.secondary-color {
    position: relative;
    background: var(--q-app-primary-color);
    color: var(--q-app-primary-color);
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.77);
    }
  }

  /*
  * -------------------------------------
  * Color
  * -------------------------------------
  */
  &.colorWhite {
    color: #ffffff;
  }

  /*
  * -------------------------------------
  * Radius
  * -------------------------------------
  */
  &.radius-sm {
    border-radius: 6px;
  }

  &.radius-md {
    border-radius: 16px;
  }

  /*
  * -------------------------------------
  * Font Size
  * -------------------------------------
  */
  &.font-18 {
    .q-btn__content {
      font-size: 18px;
    }
  }
}

body.body--dark {
  .app-button {
    &.secondary-color {
      color: #000000;
      p {
        color: #000000 !important;
      }
    }
  }
}
</style>
