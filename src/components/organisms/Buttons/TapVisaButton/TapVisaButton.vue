<template>
  <base-button
    button-height="lg-btn"
    button-background="transparent"
    button-width="full-size"
    @click="visaDialogStatus = true"
  >
    <base-text tag="span">Pay Card</base-text>
    <span>
      <q-img
        width="40px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
      />
    </span>
    <span>
      <q-img width="30px" src="https://pngimg.com/d/mastercard_PNG16.png" />
    </span>
  </base-button>
  <dialog-visa-card v-model="visaDialogStatus"/>
</template>
<script setup lang="ts">
import BaseButton from 'components/atoms/BaseButton/BaseButton.vue';
import BaseText from 'components/atoms/BaseText/BaseText.vue';
import DialogVisaCard from 'components/organisms/Dialogs/DialogVisaCard/DialogVisaCard.vue';
import {ref} from 'vue'

const visaDialogStatus = ref(false)
</script>
