
import { defineStore, acceptHMRUpdate } from 'pinia';
import { API_TAP_CREATE_CHARGE } from 'src/featuers/payments/api';
import { type ITapCreateCharge } from 'src/featuers/payments/api/payments.type';
export const usePaymentStore = defineStore('usePaymentStore', {
  state: () => ({}),

  getters: {},

  actions: {
    async dispatchTapCreateCharge(payload: ITapCreateCharge) {
      try {
        const response = await API_TAP_CREATE_CHARGE(payload);
        if (response.data.error) {
          alert(response.data.error)
        } else alert(response.data.message);

        return response;
      } catch (error) {
        console.log(error);
        // utils_handleResponseErrors(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaymentStore, import.meta.hot));
}
