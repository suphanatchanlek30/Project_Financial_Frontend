import type {
  LoginFieldDefinition,
  LoginFormValues,
} from "./login-types";

export const LOGIN_TITLE = "เข้าสู่ระบบ";

export const LOGIN_LEFT_TITLE = "ระบบประเมินความเสี่ยงผู้ขอสินเชื่อ";

export const LOGIN_LEFT_DESCRIPTION =
  "ช่วยประเมินความเสี่ยงผู้ขอสินเชื่อได้รวดเร็วและเป็นมาตรฐาน เพื่อการตัดสินใจที่แม่นยำขึ้น";

export const LOGIN_FORM_DEFAULTS: LoginFormValues = {
  identifier: "",
  password: "",
  rememberMe: true,
};

export const LOGIN_FIELDS: readonly LoginFieldDefinition[] = [
  {
    name: "identifier",
    label: "Username หรือ Email",
    placeholder: "กรอก Username หรือ Email",
    autoComplete: "username",
    type: "text",
  },
  {
    name: "password",
    label: "รหัสผ่าน",
    placeholder: "กรอกรหัสผ่าน",
    autoComplete: "current-password",
    type: "password",
  },
] as const;

export const LOGIN_PRIMARY_BUTTON_LABEL = "Log In";

export const LOGIN_REMEMBER_ME_LABEL = "Remember Me";

export const LOGIN_FORGOT_PASSWORD_LABEL = "Forgot Password?";
