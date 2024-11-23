import SadSmileSVG from "../../assets/svgs/sad.svg?react";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-[#3c3d3c] mx-auto">
      <SadSmileSVG className="mb-8"/>
      <h1 className="text-8xl mb-10">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found!</h2>
      <h3 className="text-lg mb-6">The resource requested could not be found on this server.</h3>
    </div>
  );
}
