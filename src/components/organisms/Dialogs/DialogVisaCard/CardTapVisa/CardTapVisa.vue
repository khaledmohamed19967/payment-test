<template>
  <div>
    <div class="card-container">
      <div id="card-sdk-id"></div>
    </div>
    <base-button class="vm_mt_12" @click="handleSubmit" >
      {{ t('pay') }}
    </base-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { ITapGetTokenResponse } from 'src/featuers/payments/api/payments.type'
import usePayment from 'src/featuers/payments/combosable/usePayment'
import useWebView from 'src/composable/webView/useWebView'
import { useI18n } from 'vue-i18n';
import BaseButton from 'components/atoms/BaseButton/BaseButton.vue';

declare global {
  interface Window {
    CardSDK: {
      tokenize: () => Promise<never>
    }
  }
}



const { tapCreateCharge } = usePayment()
const { webViewOrderPayload } = useWebView()

const {t} = useI18n();

// Stats
const cardTokenData = ref(<ITapGetTokenResponse>{})

const handleSubmit = async () => {
  await window.CardSDK.tokenize()
}

const setTokenDataAndSubmit = async (payload: ITapGetTokenResponse) => {
  cardTokenData.value = payload
  await submitRequestData()
}

const submitRequestData = async () => {
  const payload = {
    cardType: cardTokenData.value?.card.scheme,
    token: cardTokenData.value?.id,
    ...webViewOrderPayload.value,
  }
  const response = await tapCreateCharge(payload)
  if (response) {
    const redirect_url = response.data.url
    if (redirect_url) window.location.href = response.data.url
  }
}

onMounted(() => {
  const { renderTapCard, Theme, Currencies, Direction, Edges, Locale } = window.CardSDK as any ;

  renderTapCard('card-sdk-id', {
    publicKey: process.env.APP_TAP_PUBLIC_KEY,
    merchant: {
      id: process.env.APP_TAP_MERCHANT_ID,
    },
    transaction: {
      amount: 1,
      currency: Currencies?.SAR,
    },
    acceptance: {
      supportedBrands: ['AMERICAN_EXPRESS', 'VISA', 'MASTERCARD', 'MADA'],
      supportedCards: 'ALL',
    },
    fields: {
      cardHolder: true,
    },
    addons: {
      displayPaymentBrands: true,
      loader: true,
      saveCard: true,
    },
    interface: {
      locale: Locale.EN,
      theme: Theme.LIGHT,
      edges: Edges.CURVED,
      direction: Direction.LTR,
    },
    onReady: () => console.log('onReady'),
    onFocus: () => console.log('onFocus'),
    onBinIdentification: (data: never) => console.log('onBinIdentification', data),
    onValidInput: (data: never) => console.log('onValidInputChange', data),
    onInvalidInput: (data: never) => console.log('onInvalidInput', data),
    onChangeSaveCardLater: (isSaveCardSelected: never) =>
      console.log(isSaveCardSelected, ' :onChangeSaveCardLater'),
    onError: (data: never) => console.log('onError', data),
    onSuccess: (data: never) => setTokenDataAndSubmit(data),
  })
})
</script>

<style scoped lang="scss">
.card-container {
  background: rgba(0, 0, 0, 0.93);
  border-radius: 18px;
  padding: 50px 17px 55px 17px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > div {
    width: 100%;
  }
}
</style>
