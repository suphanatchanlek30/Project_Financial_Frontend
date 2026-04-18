export type LoginFieldName = "identifier" | "password";

export interface LoginFormValues {
  identifier: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginFieldDefinition {
  name: LoginFieldName;
  label: string;
  placeholder: string;
  autoComplete: string;
  type: "text" | "password";
}

export interface LoginStatsItem {
  value: string;
  label: string;
}

export interface LoginFeatureItem {
  title: string;
  description: string;
}