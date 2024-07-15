import { Input, Button } from "@nextui-org/react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormValues } from "./Form";

const BalanceInput = ({
  control,
  errors
}: {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}) => {
  return (
    <Controller
      name="balance"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          {...field}
          description={`Est. Value:${
            field.value ? Number(field.value) * 0.01 : ""
          }`}
          isInvalid={!!errors.balance}
          errorMessage={!!errors.balance && 'required'}
          endContent={<Button variant="light">Max</Button>}
        />
      )}
    />
  );
};
export default BalanceInput;
