import { ref } from 'vue';
import { type ITapCreateCharge } from 'src/featuers/payments/api/payments.type';

interface ICreateOrderQueryPayload extends ITapCreateCharge {
  user_token: string;
}

export default function useWebView() {
  const webViewOrderPayload = ref<ICreateOrderQueryPayload | null>(null);

  const isWebView = () => {
    const searchParam = new URLSearchParams(window.location.search);
    return searchParam.has('webview') || webViewOrderPayload.value;
  };

  const fetchPayloadFromQuery = () => {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      if (urlSearchParams.has('data')) {
        const data: string | null = urlSearchParams.get('data');
        if (data != null) {
          webViewOrderPayload.value = JSON.parse(decodeURIComponent(data));
        }
      }
    } catch (err) {
      console.error('Failed to parse payload from URL:', err);
    }
  };

  fetchPayloadFromQuery();

  return {
    isWebView,
    webViewOrderPayload,
  };
}
