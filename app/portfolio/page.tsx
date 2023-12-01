"use client";
import React from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen w-1/2 px-4  mx-auto mt-10">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 my-10 sm:text-4xl">
            Portfolio
          </h2>
          {/* <p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p> */}
        </div>
        <section className="grid grid-flow-row w-full justify-center gap-3" >
          <Image
          src={"/aws_ccp.png"}
          alt="ccp"
          width={300}
          height={300}
          />
          <Link href={'https://linkedin/in/akinabudu'} target="_blank" className="flex justify-center group border border-zinc-500 hover:border-white rounded-lg mb-5 p-5  text-center">
          <Linkedin  size={30} className="text-white group-hover:text-zinc-500 "/>
          </Link>

        </section>
        <section>
          <Link href={"/front-end-developer.pdf"} target="_blank">
            <Card>
              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 5000);
                }}
                className="px-20 py-5 text-white"
              >
                {isLoading ? "loading..." : "View my Resume"}
              </button>
            </Card>
          </Link>
        </section>
      </div>
    </div>
  );
}
