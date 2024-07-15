"use client";
import {
  Card,
  Accordion,
  CardFooter,
  Button,
  AccordionItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import SelectToken from "./SelectToken";
import BalanceInput from "./BalanceInput";
import CostInput from "./CostInput";
import { useAccount, useBalance, useSendTransaction } from "wagmi";
import { parseUnits } from "viem/utils";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { ethers } from "ethers";

export interface FormValues {
  balance: string;
  gasCost: string;
  economy: string;
  tokenFrom: string;
  from: string;
  tokenTo: string;
  to: string;
}

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    criteriaMode: "all",
  });
  const { address, chain } = useAccount();
  const { data: balance } = useBalance({
    address,
  });
  const { sendTransaction } = useSendTransaction();

  const { from, to } = watch();

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    try {
      if (!window?.ethereum) {
        throw new Error("No crypto wallet found. Please install it.");
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const txResponse = await signer.sendTransaction({
        to: data.to,
        value: parseUnits(data.balance, 6),
      });

      enqueueSnackbar("Transaction sent, awaiting confirmation...");
      await txResponse.wait();
      enqueueSnackbar("Transaction confirmed!");
    } catch (error) {
      enqueueSnackbar(`Transaction failed: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExchange = () => {
    setValue("from", to);
    setValue("to", from);
  };

  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <Card className="flex flex-col gap-y-4 p-4">
        <SelectToken control={control} onExchange={handleExchange} />
        <BalanceInput control={control} errors={errors} />
        <CostInput control={control} />
        <CardFooter className="flex flex-col border-t-2 divide-slate-700">
          <Accordion className="text-sm">
            <AccordionItem
              title={
                <div className="flex justify-between">
                  You will receive<div>--</div>
                </div>
              }
              className="text-sm"
            ></AccordionItem>
          </Accordion>
          <Button type="submit" color="primary" isLoading={isLoading}>
            connect wallet
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Form;
