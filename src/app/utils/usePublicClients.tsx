import { http, createPublicClient, stringify } from "viem";
import { mainnet, optimism, polygon, base, arbitrum } from "viem/chains";

export const uesPublicClients = () => {
  const clients = [
    createPublicClient({
      chain: mainnet,
      transport: http(),
    }),
    createPublicClient({
      chain: polygon,
      transport: http(),
    }),
    createPublicClient({
      chain: optimism,
      transport: http(),
    }),
    createPublicClient({
      chain: base,
      transport: http(),
    }),
    createPublicClient({
      chain: arbitrum,
      transport: http(),
    }),
  ]

  return clients;
};
