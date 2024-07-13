import { Input, Button } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";

const BalanceInput = ({ control }: { control: Control }) => {
  return (
    <Controller
      name="balance"
      control={control}
      render={({ field }) => (
        <Input {...field} description={'Est. Value:'} endContent={<Button variant="light">Max</Button>} />
      )}
    />
  );
};
export default BalanceInput;
