import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/*<ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">*/}
        {/*  <li className="mb-2 tracking-[-.01em]">*/}
        {/*    Get started by editing{" "}*/}
        {/*    <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">*/}
        {/*      app/page.tsx*/}
        {/*    </code>*/}
        {/*    .*/}
        {/*  </li>*/}
        {/*  <li className="tracking-[-.01em]">*/}
        {/*    Save and see your changes instantly.*/}
        {/*  </li>*/}
        {/*</ol>*/}

        {/*<div className="flex gap-4 items-center flex-col sm:flex-row">*/}
        {/*  <a*/}
        {/*    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Deploy now*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"*/}
        {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Read our docs*/}
        {/*  </a>*/}
        {/*</div>*/}
          <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                  <AccordionTrigger>
                      <p>
                          unfinished movie data aggregator site: <br/>
                          - wraps omdb, tmdb, and wikidata (sparql) &#39;s apis<br/>
                          - built with postgresql, nuxt.js, tailwind, and shadcn-vue. hosted on vercel + supabase
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      <iframe src={"https://untitled-moviesite.vercel.app"}/>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                  <AccordionTrigger>
                      <p>
                          minecraft resource pack updater + utility mod showcase site: <br/>
                          - pack-updater: my full client-side web worker-based solution for updating resource packs from 1.7&#39;s version 1 to 1.21.4&#39;s version 46<br/>
                          - pvp-utils: hosts information for my mod and integrates with modrinth&#39;s api to keep it&#39;s modrinth page updated<br/>
                          - built with next.js, tailwind, and shadcn. hosted on vercel + supabase
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      <iframe src={"https://pvputils.vercel.app/"}/>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                  <AccordionTrigger>
                      <p>
                          minecraft utility mod: <br/>
                          - uses fabric&#39;s modding framework to implement a variety of pvp-related features<br/>
                          - built with java. hosted on modrinth
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      <iframe src={"https://pvputils.vercel.app/fabric-pvp-utils"}/>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                  <AccordionTrigger>
                      <p>
                          project showcase site: <br/>
                          - built with next.js, tailwind, and shadcn. hosted on vercel
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      <iframe src={"https://super-showcase.vercel.app"}/>
                  </AccordionContent>
              </AccordionItem>
              {/*<AccordionItem value="item-9">*/}
              {/*    <AccordionTrigger>leetcode</AccordionTrigger>*/}
              {/*    <AccordionContent>*/}
              {/*        /!*TODO -> leetcode profile?*!/*/}
              {/*    </AccordionContent>*/}
              {/*</AccordionItem>TODO remove*/}
              <AccordionItem value="item-100">
                  <AccordionTrigger>
                      <p>
                          minecraft server network: <br/>
                          - paper&#39;s plugin framework<br/>
                          - built with java, postgresql, and sqlite. was hosted on ovh
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      {/*TODO -> potpissers */}
                      https://www.youtube.com/watch?v=XCERSWZMcac&list=PLBHQeT8CULinPAdCLE_jSEqW6i_v7ToPe
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                  <AccordionTrigger>
                      <p>
                          minecraft server network site: <br/>
                          - built with javascript, css, and golang. was hosted on ovh
                      </p>
                  </AccordionTrigger>
                  <AccordionContent>
                      {/*TODO -> potpissers-web*/}
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
      </main>
      {/*<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">*/}
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Examples*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Go to nextjs.org →*/}
        {/*</a>*/}
      {/*</footer>*/}
    </div>
  );
}
