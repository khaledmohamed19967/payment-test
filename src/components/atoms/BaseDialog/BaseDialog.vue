<template>
  <q-dialog
    full-width
    :persistent="persistent"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    class="bottom-dialog app-modal"
    position="bottom"
  >
    <div class="modal-body">
      <!-- modal header -->
      <div class="flex items-center modal-header" v-if="!hideHeaderRules">
        <p class="app-font-size-mid app-font-weight-bold">
          {{ dialogTitle }}
        </p>
        <q-btn
          v-if="showCloseButton"
          @click="cancelButton"
          class="close-icon"
          size="0.75rem"
          flat
          dense
          round
          icon="close"
          aria-label="dark_mode"
        >
        </q-btn>
      </div>

      <!-- content -->
      <div class="content">
        <div class="full-width">
          <div class="image-wrapper text-center app-mb-mid-1" v-if="slot.image">
            <slot name="image" />
          </div>
          <slot />
        </div>
      </div>

      <div class="actions">
        <!-- accept action button -->
        <app-button
          :loading="buttonLoading"
          v-if="buttonLabel"
          class-list="app-mt-mid lg-btn app-font-size-mid-1 app-font-weight-bold full-width"
          :label="buttonLabel"
          @click="submitButton"
        />
        <app-button
          :loading="buttonLoading"
          v-if="cancelButtonLabel"
          class-list="lg-btn app-font-size-mid-1 app-font-weight-bold app-mt-small full-width transparent"
          :label="cancelButtonLabel"
          @click="cancelButton"
        />
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  useSlots,
  defineAsyncComponent,
} from 'vue';

const appButton = defineAsyncComponent(() =>
  import('components/atoms/BaseButton/BaseButton.vue')
);



const props = defineProps({
  buttonLoading: Boolean,
  buttonLabel: { type: String, default: undefined },
  dialogTitle: { type: String, default: undefined },
  cancelButtonLabel: String,
  persistent: Boolean,
  showCloseButton: { type: Boolean, default: true },
  showNavigationBack: Boolean,
});

const emit = defineEmits([
  'onCancelButton',
  'onSubmitButton',
  'update:modelValue',
]);

const slot = useSlots();

const hideHeaderRules = computed(() => {
  return (
    !props.dialogTitle && !props.showCloseButton && !props.showNavigationBack
  );
});

const cancelButton = () => {
  emit('onCancelButton');
  emit('update:modelValue', false);
};

const submitButton = () => {
  if (props.buttonLoading) return;
  emit('onSubmitButton');
};
</script>
<style lang="scss">
.content {
  display: flex;
}

.modal-body {
  background: #ffffff;
  padding: 33px 16px 33px;
  border-radius: 39px 39px 0 0 !important;
  position: relative;

  .modal-header {
    margin-bottom: 31px;
    position: relative;

    p {
      flex: 1;
      text-align: center;
    }

    .close-icon {
      position: absolute;
      right: 0;
      background: var(--q-app-primary-color);
      width: 32px;
      height: 32px;
      font-size: 8px !important;
      color: #ffffff;
    }
  }
}

body.body--dark {
  .modal-body {
    background: #000000;
  }
}
</style>
