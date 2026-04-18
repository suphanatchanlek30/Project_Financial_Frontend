import type { InputHTMLAttributes, ReactNode } from "react";

interface LoginInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  endAdornment?: ReactNode;
}

export function LoginInputField({
  label,
  error,
  endAdornment,
  className,
  id,
  ...props
}: LoginInputFieldProps) {
  const hasError = Boolean(error);

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-[0.92rem] font-semibold tracking-tight text-slate-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={`h-11 w-full rounded-[0.65rem] border bg-white px-4 text-sm text-slate-900 shadow-none outline-none transition placeholder:text-slate-300 focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[var(--ring)] ${className ?? ""} ${
            hasError ? "border-rose-400" : "border-[color:var(--border)]"
          }`}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error` : undefined}
          {...props}
        />
        {endAdornment ? (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {endAdornment}
          </div>
        ) : null}
      </div>
      {hasError ? (
        <p id={`${id}-error`} className="text-sm text-rose-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}