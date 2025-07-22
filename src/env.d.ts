declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    APP_PUSHER_APP_ID: string;
    APP_PUSHER_KEY: string;
    APP_PUSHER_SECRET: string;
    APP_PUSHER_CLUSTER: string;
    APP_ENV: 'production' | 'development' | 'pre_production';
    APP_TAP_PUBLIC_KEY: string;
    APP_TAP_MERCHANT_ID: string;
    APP_TAP_APPElPAY_MERCHANT_ID: string;
    APP_DOMAIN: string;
  }
}
