import Image from "next/image";

function Logo({ height = 80, width = 80 }) {
  return (
    <Image
      src="/assets/images/logolow.webp"
      width={width}
      height={height}
      alt="JSON Viewer Logo"
      className="hover:animate-pulse h-11 w-11 "
    />
  );
}

export function LogoWithText() {
  return (
    <div className="flex items-center">
      <Logo />
      <h1 className="hover:animate-pulse font-extrabold text-xl px-1 font-raleway dark:text-zinc-300 text-zinc-600 ">
        JSON Viewer
      </h1>
    </div>
  );
}

export default Logo;
