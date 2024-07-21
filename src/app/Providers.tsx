"use client";
import { NextUIProvider } from "@nextui-org/react";
import { WagmiProvider } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();

export const config = getDefaultConfig({
  appName: 'demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
  ],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <RainbowKitProvider>
            <SnackbarProvider>{children}</SnackbarProvider>
          </RainbowKitProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
