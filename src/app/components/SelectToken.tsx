import Section from "./Section";
import { Select, SelectItem, Button, Avatar } from "@nextui-org/react";
import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { mockSelection } from "../constant";

const SelectToken = ({
  control,
}: {
  control: Control;
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
                {mockSelection.map((animal) => (
                  <SelectItem
                    key={animal.key}
                    startContent={
                      <Avatar
                        alt={animal.key}
                        className="w-6 h-6"
                        src={animal.src}
                      />
                    }
                  >
                    {animal.label}
                  </SelectItem>
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
                {mockSelection.map((animal) => (
                  <SelectItem
                    key={animal.key}
                    startContent={
                      <Avatar
                        alt={animal.key}
                        className="w-6 h-6"
                        src={animal.src}
                      />
                    }
                  >
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
      </Section>
      <Button className="w-6/12 m-auto">exchange</Button>
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
                {mockSelection.map((animal) => (
                  <SelectItem
                    key={animal.key}
                    startContent={
                      <Avatar
                        alt={animal.key}
                        className="w-6 h-6"
                        src={animal.src}
                      />
                    }
                  >
                    {animal.label}
                  </SelectItem>
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
                {mockSelection.map((animal) => (
                  <SelectItem
                    key={animal.key}
                    startContent={
                      <Avatar
                        alt={animal.key}
                        className="w-6 h-6"
                        src={animal.src}
                      />
                    }
                  >
                    {animal.label}
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
