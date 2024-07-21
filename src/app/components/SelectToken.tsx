"use client";
import Section from "./Section";
import { Select, SelectItem, Button, Avatar } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";
import { mockToken } from "../constant";
import { FormValues } from "./Form";
import { uesPublicClients } from "../utils/usePublicClients";

const SelectToken = ({
  control,
  onExchange,
}: {
  control: Control<FormValues>;
  onExchange: () => void;
}) => {
  const selection = uesPublicClients();
  const chains = selection.map((ele) => ele.chain);

  return (
    <>
      <Section title="From">
        <div className="flex gap-x-4">
          <Controller
            name="tokenFrom"
            control={control}
            render={({ field }) => (
              <Select
                label="token"
                selectedKeys={[field.value]}
                placeholder="Select"
                {...field}
              >
                {mockToken.map((token) => (
                  <SelectItem {...token}>{token.title}</SelectItem>
                ))}
              </Select>
            )}
          />
          <Controller
            name="from"
            control={control}
            render={({ field }) => (
              <Select
                label="from"
                selectedKeys={[field.value]}
                placeholder="Select"
                {...field}
              >
                {chains.map((chain) => (
                  <SelectItem key={chain.id}>{chain.name}</SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
      </Section>
      <Button className="w-6/12 m-auto" onClick={onExchange}>
        exchange
      </Button>
      <Section title="To">
        <div className="flex gap-x-4">
          <Controller
            name="tokenTo"
            control={control}
            render={({ field }) => (
              <Select
                label="token"
                selectedKeys={[field.value]}
                placeholder="Select"
                {...field}
              >
                {mockToken.map((token) => (
                  <SelectItem {...token}>{token.title}</SelectItem>
                ))}
              </Select>
            )}
          />
          <Controller
            name="to"
            control={control}
            render={({ field }) => (
              <Select
                label="to"
                selectedKeys={[field.value]}
                placeholder="Select"
                {...field}
              >
                {chains.map((chain) => (
                  <SelectItem key={chain.id}>{chain.name}</SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
      </Section>
    </>
  );
};
export default SelectToken;
