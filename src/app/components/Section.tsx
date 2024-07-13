import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="justify-between">{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
export default Section;
