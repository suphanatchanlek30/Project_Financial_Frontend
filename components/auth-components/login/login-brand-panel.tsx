import { LOGIN_LEFT_DESCRIPTION } from "./login-constants";

export function LoginBrandPanel() {
  return (
    <section className="relative flex min-h-55 overflow-hidden bg-[linear-gradient(135deg,#1151c8_0%,#2f68d9_100%)] px-6 py-7 text-white sm:px-8 sm:py-9 md:min-h-120 md:px-10 md:py-12">
      <div className="relative flex w-full items-center">
        <div className="max-w-96 space-y-4">
          <h1 className="text-[1.78rem] font-bold leading-[1.2] sm:text-[2.15rem] md:text-[2.45rem]">
            <span className="block">ระบบประเมินความเสี่ยงผู้ขอสินเชื่อ</span>
          </h1>
          <p className="max-w-80 text-[0.98rem] leading-6 text-white/80 sm:text-[1.02rem] sm:leading-7">
            {LOGIN_LEFT_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
}