import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100">
      <div className="md:w-1/2 p-4">
        <h1 className="text-2xl text-gray-900 mb-4">Hello, I'm</h1>
        <h1 className="text-4xl font-bold text-primary-700 my-6">Alan Wong</h1>
        <p className="text-xl text-gray-900 mb-4">
          A{" "}
          <span className="font-bold text-purple-700">
            Full Stack Developer
          </span>{" "}
          from{" "}
          <span className="text-alert font-bold">Kuala Lumpur, Malaysia</span>
        </p>
        <p className="text-md text-gray-700 mb-4">
          {`I'm a passionate software developer with a focus on creating efficient
        and scalable solutions expertising in web and mobile application
        development`}
        </p>
        <p className="text-md text-gray-700">
          {`Let's connect and create something amazing together!`}
        </p>
        <div className="flex flex-col md:flex-row items-center mt-6 divide-x divide-black">
          <Button
            variant="contained"
            className="px-9 text-lg mt-0 ml-6"
            style={{ borderRadius: 20, textTransform: "none" }}
            size="large"
            href="/about"
          >
            About Me
          </Button>
          <div className="flex ml-6 pl-6">
            <LinkedIn fontSize="large" className="mx-2" />
            <GitHub fontSize="large" className="mx-2" />
            <Email fontSize="large" className="mx-2" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <div className="rounded-full overflow-hidden bg-black w-64 h-64">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-64 w-64"
            priority
            width={120}
            height={120}
          />
        </div>
      </div>
      <header className="bg-white">
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  className="h-20 w-auto"
                  priority
                  width={120}
                  height={100}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Product
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
