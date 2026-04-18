import { LoginBrandPanel } from "./login-brand-panel";
import { LoginForm } from "./login-form";

export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto grid w-full max-w-215 overflow-hidden rounded-2xl border border-white/50 bg-surface-strong shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:min-h-120 md:grid-cols-[minmax(320px,1fr)_minmax(0,1fr)]">
          <LoginBrandPanel />
          <div className="flex items-stretch justify-center bg-surface-strong">
            <div className="flex w-full items-center">
              <div className="mx-auto w-full max-w-107.5">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}