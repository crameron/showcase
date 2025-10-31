import React from "react";
import ShowcaseAccordion from "@/components/ShowcaseAccordion";
import {GenericSourceBadge} from "@/components/page";

export const revalidate = 259200; // 72 * 60 * 60;
export default async function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto_1fr] min-h-screen place-items-center"> {/*TODO p-8 pb-20 gap-16 sm:p-20*/}
      <main className="flex flex-col row-start-2 items-center sm:items-start"> {/*TODO gap-[32px]*/}
          <ShowcaseAccordion/>
      </main>
      <footer className="justify-self-end row-start-3">
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn*/}
        {/*</a>*/}
          <GenericSourceBadge github={"https://github.com/memeasaur/showcase"}/> {/*TODO -> this shouldn't be here if the project is private*/}
      </footer>
    </div>
  );
}