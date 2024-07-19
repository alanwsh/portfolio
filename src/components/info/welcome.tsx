import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
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
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-6 md:divide-x divide-black">
          <ScrollLink to="about" smooth={true} duration={500}>
            <Button
              variant="contained"
              className="px-9 text-lg mt-0 md:mr-4"
              style={{ borderRadius: 20, textTransform: "none" }}
              size="large"
            >
              About
            </Button>
          </ScrollLink>
          <div className="flex mt-4 md:mt-0 md:pl-2">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/wong-shou-hong-aa158a1ab/"
            >
              <LinkedIn fontSize="large" className="mx-2" />
            </Link>
            <Link target="_blank" href="https://github.com/alanwsh">
              <GitHub fontSize="large" className="mx-2" />
            </Link>
            <Link target="_blank" href="mailto:alan_wsh@hotmail.com">
              <Email fontSize="large" className="mx-2" />
            </Link>
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
    </section>
  );
}
