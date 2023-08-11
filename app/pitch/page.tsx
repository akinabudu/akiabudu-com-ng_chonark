import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Page() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen w-1/2 px-4 mx-auto">
        {/* <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16"> */}
        <Card>
          <Link
            href={"s.href"}
            target="_blank"
            className="text-white/50 text-xl font-thin italic p-4 relative flex flex-col items-end  justify-center  duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-10"
          >
            {" "}
            Elevator Pitch Here
          </Link>
        </Card>
        {/* </div> */}
      </div>
    </div>
  );
}
