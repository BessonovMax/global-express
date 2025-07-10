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
    <section className="bg-muted text-foreground py-12">
      <div className="bg-background mx-auto w-[90%] max-w-[1240px] space-y-8 rounded-lg p-6 shadow-md">
        <h2 className="text-center text-2xl font-bold">
          Калькулятор стоимости
        </h2>
        <p className="text-muted-foreground text-center text-sm">
          Заполните форму ниже и узнайте стоимость вашей услуги
        </p>

        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FloatingInput label="Пункт отправления" icon={<PlaneTakeoff />} />
          <FloatingInput label="Пункт назначения" icon={<PlaneLanding />} />
          <FloatingInput label="Вес, кг" type="number" icon={<Scale />} />
          <FloatingInput label="Длина, см" type="number" icon={<Ruler />} />
          <FloatingInput label="Ширина, см" type="number" icon={<Square />} />
          <FloatingInput
            label="Высота, см"
            type="number"
            icon={<Maximize2 />}
          />

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
              <Calculator className="mr-2 h-5 w-5" />
              РАССЧИТАТЬ
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
