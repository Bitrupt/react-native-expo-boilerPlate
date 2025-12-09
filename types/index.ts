export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    createdAt: string;
  }
  
  export interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
  }
  
  export interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    sector?: string;
    marketCap?: string;
  }
  
  export interface Holding {
    symbol: string;
    name: string;
    shares: number;
    avgPrice: number;
    currentPrice: number;
    totalValue: number;
    gain: number;
    gainPercent: number;
  }
  
  export interface Transaction {
    id: string;
    type: 'buy' | 'sell';
    symbol: string;
    shares: number;
    price: number;
    date: string;
    total: number;
  }
  
  export interface Portfolio {
    totalValue: number;
    totalGain: number;
    totalGainPercent: number;
    dayChange: number;
    dayChangePercent: number;
    holdings: Holding[];
    transactions: Transaction[];
  }
  
  export type RootStackParamList = {
    '(auth)': undefined;
    '(tabs)': undefined;
  };
  
  export type AuthStackParamList = {
    onboarding: undefined;
    'get-started': undefined;
    signup: undefined;
    login: undefined;
    'permissions-push-notification': undefined;
    'permissions-location': undefined;
  };
  
  export type TabStackParamList = {
    home: undefined;
    portfolio: undefined;
    // invest: undefined;
    profile: undefined;
    rewards: undefined;
    goals: undefined;
  };
  
  export interface CustomButtonProps {
    label: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    disabled?: boolean;
    loading?: boolean;
    buttonStyle?: any;
    textStyle?: any;
    icon?: React.ReactNode;
  }


  