import { type ITapCreateCharge } from 'src/featuers/payments/api/payments.type';
import { getCurrentInstance } from 'vue';
const { appContext } = getCurrentInstance()!;
const api = appContext.config.globalProperties.$api;

export const API_TAP_CREATE_CHARGE = (payload?: ITapCreateCharge) => {
  const options = {
    url: '/tap-payment/create-charge',
    method: 'POST',
    data: payload,
  };
  return api(options);
};
