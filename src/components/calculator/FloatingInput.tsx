import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { type HTMLProps, type ReactNode, useState } from "react";

interface FloatingInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export function FloatingInput({
  label,
  icon,
  className,
  ...props
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(props.value || props.defaultValue);

  return (
    <div className="relative w-full">
      <Input
        {...props}
        className={cn(
          "peer h-12 pt-5 pl-14 placeholder-transparent focus:outline-none",
          className,
        )}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
      />
      <label
        className={cn(
          "text-muted-foreground pointer-events-none absolute top-1/2 left-14 z-10 origin-top-right translate-y-[-50%] scale-100 transform text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:translate-y-0 peer-focus:scale-90",
          (focused || hasValue) && "!top-1 !left-10 !translate-y-0 !scale-90",
        )}
      >
        {label}
      </label>
      {icon && (
        <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2">
          {icon}
        </span>
      )}
    </div>
  );
}
