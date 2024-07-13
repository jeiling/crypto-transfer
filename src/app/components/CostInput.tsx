import { Input, Button } from "@nextui-org/react";
import { Controller, Control } from "react-hook-form";

const CostInput = ({ control }: { control: Control }) => {
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
