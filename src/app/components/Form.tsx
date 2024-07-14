import {
  Card,
  Accordion,
  CardFooter,
  Button,
  AccordionItem,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import SelectToken from "./SelectToken";
import BalanceInput from "./BalanceInput";
import CostInput from "./CostInput";

const Form = () => {
  const { handleSubmit, formState, control, setValue, watch } = useForm<any>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const { from, to } = watch();

  const onSubmit = () => {};

  const handleExchange = () => {
    setValue("from", to);
    setValue("to", from);
  };

  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <Card className="flex flex-col gap-y-4 p-4">
        <SelectToken control={control} onExchange={handleExchange} />
        <BalanceInput control={control} />
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
          <Button type="submit" color="primary">
            connect wallet
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Form;
