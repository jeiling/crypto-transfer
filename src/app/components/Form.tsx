import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import SelectToken from "./SelectToken";
import BalanceInput from "./BalanceInput";
import CostInput from "./CostInput";

const Form = () => {
  const { handleSubmit, formState, control, setValue, watch } = useForm<any>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = () => {};
  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <Card className="flex flex-col gap-y-4 p-4">
        <SelectToken control={control} />
        <BalanceInput control={control} />
        <CostInput control={control} />
        <CardFooter className="flex justify-center">
          <Button>connect wallet</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Form;
