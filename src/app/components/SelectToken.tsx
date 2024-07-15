import Section from "./Section";
import { Select, SelectItem, Button, Avatar } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";
import { mockSelection, mockToken } from "../constant";
import { FormValues } from "./Form";

const SelectToken = ({
  control,
  onExchange,
}: {
  control: Control<FormValues>;
  onExchange: () => void;
}) => {
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
                {mockSelection.map((ele) => (
                  <SelectItem
                    key={ele.key}
                    startContent={
                      <Avatar
                        alt={ele.key}
                        className="w-6 h-6"
                        src={ele.src}
                      />
                    }
                  >
                    {ele.label}
                  </SelectItem>
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
                {mockSelection.map((ele) => (
                  <SelectItem
                    key={ele.key}
                    startContent={
                      <Avatar
                        alt={ele.key}
                        className="w-6 h-6"
                        src={ele.src}
                      />
                    }
                  >
                    {ele.label}
                  </SelectItem>
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
