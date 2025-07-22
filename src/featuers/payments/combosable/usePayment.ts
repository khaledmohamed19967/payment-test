import { type ITapCreateCharge } from '../api/payments.type';
import { usePaymentStore } from 'src/featuers/payments/store/payments.store';

export default function useTapPayment() {
  const tapStore = usePaymentStore();



  const tapCreateCharge = async (payload: ITapCreateCharge) => {
    const dataPayload = {
      ...payload,
    };
    const response = await tapStore.dispatchTapCreateCharge(dataPayload);
    if (response) {
      const redirect_url = response.data.url;
      if (redirect_url) window.location.href = response.data.url;
    }
    return response;
  };

  return {
    tapCreateCharge,
  };
}

