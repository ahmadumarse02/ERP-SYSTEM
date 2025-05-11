import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Hero() {
  return (
    <>
      <div className="relative mx-auto flex w-full flex-col py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <h4 className="text-3xl font-semibold">
              ERP<span className="text-primary">System</span>
            </h4>
          </Link>
        </div>

        <nav className="hidden md:flex md:justify-end md:space-x-4">
          {/* <Button variant="secondary"></Button> */}
          <SignInButton>Sign in</SignInButton>
          <Button>Sign up</Button>
        </nav>
      </div>

      <section className="relative flex items-center justify-center">
        <div className="relative w-full items-center py-12 lg:py-20">
          <div className="text-center">
            <h1 className="mt-8 text-4xl leading-none font-medium sm:text-6xl md:text-7xl lg:text-8xl">
              ERP SYSYEM
            </h1>

            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base font-light tracking-tighter lg:text-lg">
              Please sign in and go to the dashboard to manage your business
              efficiently and effortlessly.
            </p>
            <div className="mt-5 flex w-full items-center justify-center gap-x-5">
              <Button variant="secondary">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-12 w-full items-center py-12">
            <svg
              className="absolute -mt-24 blur-3xl"
              fill="none"
              viewBox="0 0 400 400"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path
                    d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                    fill="#03FFE0"
                  ></path>
                  <path
                    d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                    fill="#7C87F8"
                  ></path>
                  <path
                    d="M320 400H400V78.75L106.2 134.75L320 400Z"
                    fill="#4C65E4"
                  ></path>
                  <path
                    d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                    fill="#043AFF"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="720.666"
                  id="filter0_f_10_20"
                  width="720.666"
                  x="-160.333"
                  y="-160.333"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_10_20"
                    stdDeviation="80.1666"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
