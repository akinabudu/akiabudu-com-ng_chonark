import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Page() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen w-1/2 px-4 mx-auto">
      <div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Elevator Pitch
					</h2>
					{/* <p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p> */}
				</div>
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
      </div>
    </div>
  );
}
