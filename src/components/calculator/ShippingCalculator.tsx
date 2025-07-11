import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  PlaneTakeoff,
  PlaneLanding,
  Ruler,
  Scale,
  Square,
  Maximize2,
  Calculator,
} from "lucide-react";
import { FloatingInput } from "./FloatingInput";

export default function ShippingCalculator() {
  const [receiverPays, setReceiverPays] = useState(false);

  return (
    <form className="flex justify-center gap-6">
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 py-18 sm:grid-cols-2 md:w-[60%]">
        <FloatingInput label="Пункт отправления" icon={<PlaneTakeoff />} />
        <FloatingInput label="Пункт назначения" icon={<PlaneLanding />} />
        <FloatingInput label="Вес, кг" type="number" icon={<Scale />} />
        <FloatingInput label="Длина, см" type="number" icon={<Ruler />} />
        <FloatingInput label="Ширина, см" type="number" icon={<Square />} />
        <FloatingInput label="Высота, см" type="number" icon={<Maximize2 />} />

        {/* Receiver Pays Switch */}
        <div className="flex items-center space-x-2 pt-4">
          <Switch
            id="receiverPays"
            className="cursor-pointer"
            checked={receiverPays}
            onCheckedChange={setReceiverPays}
          />
          <Label htmlFor="receiverPays">
            Отметьте, если отправление оплачивает получатель
          </Label>
        </div>

        {/* Submit Button */}
        <div className="pt-4 text-center">
          <Button size="lg" className="text-lg">
            <Calculator className="mr-2 h-6! w-6!" />
            РАССЧИТАТЬ
          </Button>
        </div>
      </div>
      <div className="hidden w-[40%] rounded-md bg-[url(/bg-calc.jpg)] bg-cover bg-center md:block"></div>
    </form>
  );
}
