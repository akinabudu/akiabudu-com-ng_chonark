import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Page() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen w-3/4 px-4 mx-auto">
      <div className="max-w-2xl mx-auto lg:mx-0 mb-5">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Bio
					</h2>
					{/* <p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p> */}
				</div>
        <Card>
          <div className=" m-5 md:m-10 text-center animate-fade-in">
            <h2 className="text-[10px] md:text-md text-white/70 ">
              Hi, my name is <span className="font-bold">Akinbola Laide-Abudu</span>, and I'm a seasoned <span className="font-bold">Software Engineer</span> {" "}
              with a specialized background in <span className="font-bold">AWS Cloud Engineering </span>.
              <br /> With a strong foundation in Computer and Information Science and several
              years of hands-on experience,
              <br /> I've consistently delivered innovative solutions to complex
              technical challenges.
            </h2>
          </div>
        </Card>
      </div>
    </div>
  );
}
