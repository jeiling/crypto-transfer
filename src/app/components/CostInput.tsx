import { Input, Button } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";
import { FormValues } from "./Form";

const CostInput = ({ control }: { control: Control<FormValues> }) => {
  return (
    <div className="flex justify-between gap-x-4">
      <Controller
        name="gasCost"
        control={control}
        render={({ field }) => (
          <Input {...field} label="GasCost" />
        )}
      />
      <Controller
        name="economy"
        control={control}
        render={({ field }) => (
          <Input {...field} label="GasCost" />
        )}
      />
    </div>
  );
};
export default CostInput;
