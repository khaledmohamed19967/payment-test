import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { Cookies } from 'quasar';
import useWebView from 'src/composable/webView/useWebView';

export default boot(({ app, ssrContext }) => {
  const cookie = process.env.CLIENT
    ? Cookies
    : Cookies.parseSSR(ssrContext);

  const options: any = {
    baseURL: process.env.APP_BASE_URL
  }

  const api  = axios.create(options)

  api.interceptors.request.use(config => {
    const userToken = process.env.CLIENT
      ? useWebView().webViewOrderPayload.value?.user_token
      : undefined;

    const locale = cookie.get('locale');
    const currentLanguage = locale === 'ar' ? 'ar' : 'en';

    if (userToken) config.headers['Authorization'] = `Bearer ${userToken}`;
    config.headers['language'] = currentLanguage;

    return config;
  });

  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

