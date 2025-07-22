<template>
  <div class="payment-screen">
    <base-container>
      <section class="payment-section-details flex column justify-center items-center q-pt-lg">
        <q-img
          width="78px"
          class="app-mb-8"
          src="https://ucarecdn.com/111bac76-ab1d-4bbd-bdc2-ef8349b8a4e0/-/preview/156x156/"
        />

        <base-text
          font-weight="text-font-600"
          font-size="text-18"
          class="text-center app-mb-8"
        >
          {{ t('PAYMENTS.PAYMENT_TYPE') }}
        </base-text>
        <base-text class="text-center">
          {{ t('PAYMENTS.CHOOSE_PAYMENT_TYPE_DISC') }}
        </base-text>

        <tap-visa-button/>

        <div class="notes">
          <q-img
            width="19px"
            src="https://ucarecdn.com/ad78689c-ab16-4721-a4d2-fe6949fe8b6b/-/preview/20x22/"
          />
          <base-text font-size="text-caption-10">
            {{ t('PAYMENTS.PAYMENT_GATEWAY_SECURITY_NOTE') }}
          </base-text>
        </div>
      </section>
    </base-container>
  </div>
</template>
<script setup lang="ts">
import BaseContainer from 'components/atoms/BaseContainer/BaseContainer.vue';
import BaseText from 'components/atoms/BaseText/BaseText.vue';
import TapVisaButton from 'components/organisms/Buttons/TapVisaButton/TapVisaButton.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<style scoped lang="scss" src="./payments.scss"></style>

