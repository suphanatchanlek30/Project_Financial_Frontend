"use client";

import { useMemo, useState } from "react";

import {
  LOGIN_FIELDS,
  LOGIN_FORGOT_PASSWORD_LABEL,
  LOGIN_FORM_DEFAULTS,
  LOGIN_PRIMARY_BUTTON_LABEL,
  LOGIN_REMEMBER_ME_LABEL,
  LOGIN_TITLE,
} from "./login-constants";
import type { LoginFieldName, LoginFormValues } from "./login-types";
import { LoginInputField } from "./login-input-field";

function validate(values: LoginFormValues) {
  const errors: Partial<Record<LoginFieldName, string>> = {};

  if (!values.identifier.trim()) {
    errors.identifier = "กรุณากรอก Username หรือ Email";
  }

  if (!values.password.trim()) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  } else if (values.password.trim().length < 8) {
    errors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
  }

  return errors;
}

export function LoginForm() {
  const [values, setValues] = useState<LoginFormValues>(LOGIN_FORM_DEFAULTS);
  const [errors, setErrors] = useState<Partial<Record<LoginFieldName, string>>>({});

  const fieldErrors = useMemo(
    () => ({
      identifier: errors.identifier,
      password: errors.password,
    }),
    [errors.identifier, errors.password],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

  }

  function updateField<K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) {
    setValues((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full w-full flex-col justify-center gap-4 bg-surface-strong px-6 py-7 sm:px-9 sm:py-9 md:px-10 md:py-10"
      noValidate
    >
      <div>
        <h2 className="text-[1.9rem] font-bold tracking-[-0.03em] text-slate-900 sm:text-[2.05rem]">
          {LOGIN_TITLE}
        </h2>
      </div>

      <div className="space-y-4">
        {LOGIN_FIELDS.map((field) => {
          if (field.name === "password") {
            return (
              <div key={field.name} className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor={field.name}
                    className="text-[0.92rem] font-semibold tracking-tight text-slate-700"
                  >
                    {field.label}
                  </label>
                  <button
                    type="button"
                    className="text-[0.9rem] font-semibold text-primary transition hover:text-secondary"
                  >
                    {LOGIN_FORGOT_PASSWORD_LABEL}
                  </button>
                </div>
                <LoginInputField
                  id={field.name}
                  type="password"
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={values.password}
                  onChange={(event) => updateField("password", event.target.value)}
                  error={fieldErrors.password}
                  label=""
                />
              </div>
            );
          }

          return (
            <LoginInputField
              key={field.name}
              id={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              value={values.identifier}
              onChange={(event) => updateField("identifier", event.target.value)}
              error={fieldErrors.identifier}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-start pt-0.5">
        <label className="inline-flex items-center gap-2.5 text-[0.92rem] font-medium text-slate-600">
          <input
            type="checkbox"
            checked={values.rememberMe}
            onChange={(event) => updateField("rememberMe", event.target.checked)}
            className="h-4 w-4 rounded-sm border-border text-primary accent-primary focus:ring-2 focus:ring-ring"
          />
          {LOGIN_REMEMBER_ME_LABEL}
        </label>
      </div>

      <button
        type="submit"
        className="mt-1 h-11 w-full rounded-[0.65rem] bg-[linear-gradient(135deg,#1e5ed6_0%,#1350c5_100%)] text-[0.96rem] font-semibold text-primary-foreground shadow-[0_7px_16px_rgba(37,99,235,0.23)] transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-ring sm:h-12"
      >
        {LOGIN_PRIMARY_BUTTON_LABEL}
      </button>
    </form>
  );
}