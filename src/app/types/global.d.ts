interface Window {
    ethereum?: Eip1193Provider;
  }
  
  interface Eip1193Provider {
    isMetaMask?: boolean;
    request: (request: { method: string; params?: Array<any> }) => Promise<any>;
    on?: (event: string, callback: (...args: any[]) => void) => void;
  }
  