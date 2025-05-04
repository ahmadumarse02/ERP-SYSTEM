import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <>
            <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
                <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
                    <Link href="/" className="flex items-center gap-2">
                        <h4 className="text-3xl font-semibold">
                            ERP<span className="text-primary">System</span>
                        </h4>
                    </Link>
                </div>

                <nav className="hidden md:flex md:justify-end md:space-x-4">
                        <Button variant="secondary">Sign in</Button>
                        <Button>Sign up</Button>
                </nav>
            </div>

            <section className="relative flex items-center justify-center">
                <div className="relative items-center w-full py-12 lg:py-20">
                    <div className="text-center">
                        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
                            ERP SYSYEM
                        </h1>

                        <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
                        Please sign in and go to the dashboard to manage your business efficiently and effortlessly.
                        </p>
                        <div className="flex items-center gap-x-5 w-full justify-center mt-5 ">
                                <Button variant="secondary">
                                    <Link href="/dashboard">
                                    Go to Dashboard
                                    </Link>
                                    </Button>
                               
                        </div>
                    </div>

                    <div className="relative items-center w-full py-12 mx-auto mt-12">
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
