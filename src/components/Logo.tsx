import Image from "next/image";

function Logo({ height = 50, width = 50 }) {
  return (
    <Image
      src="/assets/images/logolow.webp"
      width={width}
      height={height}
      alt="Picture of the author"
    />
  );
}

export function LogoWithText() {
  return (
    <div className="flex items-center">
      <Logo />
      <h1 className="font-extrabold text-2xl px-1 font-raleway dark:text-zinc-300 text-zinc-600 ">
        JSON Viewer
      </h1>
    </div>
  );
}

export default Logo;
