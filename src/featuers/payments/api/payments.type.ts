
export interface ITapCreateCharge {
  order_id?: string;
  cardType?: string;
  token?: string;
  split?: number;
  payment_split_id?: string;
  amount?: number;
  isApple?: boolean;
}

export interface ITapGetTokenResponse {
  id: string;
  status: string;
  created: number;
  object: string;
  live_mode: boolean;
  type: string;
  purpose: string;
  used: boolean;
  card: ITapCard;
  payment: ITapPayment;
  merchant: ITapMerchant;
  url: string;
}

export interface ITapCard {
  id: string;
  object: string;
  on_file: boolean;
  funding: string;
  fingerprint: string;
  brand: string;
  scheme: string;
  category: string;
  exp_month: number;
  exp_year: number;
  last_four: string;
  first_six: string;
  first_eight: string;
  name: string;
}

export interface ITapPayment {
  id: string;
  on_file: boolean;
  card_data: ITapCardData;
  fingerprint: string;
  scheme: string;
  category: string;
}

export interface ITapCardData {
  exp_month: number;
  exp_year: number;
  last_four: string;
  first_six: string;
  first_eight: string;
}

export interface ITapMerchant {
  id: string;
}
