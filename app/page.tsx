import {Badge} from "@/components/ui/badge";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Accordion type="single" collapsible>
              {
                  [{
                      name: "untitled-moviesite",
                      heightBypass: false,
                      isWip: true,
                      source: null,
                      organization: null,
                      iframe: (
                          <iframe className={"absolute"} src={"https://untitled-moviesite.vercel.app/"}/>
                      ),
                      content: (
                          <p>
                              <GenericBadge text={"vue"}/> <GenericBadge text={"nuxt"}/> <PostgresQLBadge/>
                              <TailwindBadge/> <ShadcnBadge/> <GitBadge/> <br/>
                              movie data aggregator site <br/>
                              - wraps <GenericBadge text={"omdb"}/>, <GenericBadge text={"tmdb"}/>, and <GenericBadge
                              text={"wikidata"}/>&#39;s respective apis. hosted using <VercelSupabaseBadge/><br/>
                          </p>
                      )
                  }, {
                      name: "pvp-utils-site",
                      heightBypass: false,
                      isWip: false,
                      source: "https://github.com/memeasaur/pvputils-web",
                      organization: null,
                      iframe: (
                          <iframe className={"absolute"} src={"https://pvputils.vercel.app/"}/>
                      ),
                      content: (
                          <p>
                              <NextBadge/> <TailwindBadge/> <ShadcnBadge/> <GenericBadge text={"typescript"}/> <GitBadge/> <br/>
                              minecraft resource pack updater app + utility mod showcase site <br/>
                              - pack-updater: fully client-side webworker-based solution for quickly updating resource
                              packs from 1.7&#39;s version 1 format to 1.21.4&#39;s version 46 format<br/>
                              - pvp-utils: hosts information for the mod and integrates with <ModrinthBadge/>&#39;s api
                              to keep it&#39;s page updated<br/>
                              - hosted using <VercelSupabaseBadge/>
                          </p>
                      )
                  }, {
                      name: "fabric-pvp-utils",
                      heightBypass: false,
                      isWip: false,
                      source: "https://github.com/pvputils/fabricpvputils-oss",
                      organization: null,
                      iframe: (
                          <ShowcaseYoutubeIFrame source={"youtube.com"}/>
                      ),
                      content: (
                          <p>
                              <JavaBadge/> <GenericBadge text={"mixin"}/> <GitBadge/> <br/>
                              minecraft utility mod <br/>
                              - uses <GenericBadge text={"fabric"}/>&#39;s mod framework to implement a variety of
                              pvp-related features. hosted on <ModrinthBadge/><br/>
                          </p>
                      )
                  }, {
                      name: "potpissers-web",
                      heightBypass: false,
                      isWip: false,
                      source: "https://github.com/potpissers/Potpissers-web",
                      organization: null,
                      iframe: (
                          <iframe className={"absolute"} src={"https://www.youtube.com/"}/>
                      ),
                      content: (
                          <p>
                              <GenericBadge text={"golang"}/> <GenericBadge text="html"/> <GenericBadge text={"css"}/>
                              <GenericBadge text={"javascript"}/> <PostgresQLBadge/> <LinuxBadge/> <GitBadge/> <br/>
                              minecraft server network site <br/>
                              - was hosted on <OvhBadge/>
                          </p>
                      )
                  }, {
                      name: "potpissers",
                      heightBypass: true,
                      isWip: false,
                      source: null,
                      organization: "https://github.com/orgs/potpissers/repositories",
                      iframe: (
                          <ShowcaseYoutubeIFrame source={"https://www.youtube.com/embed/XCERSWZMcac"}/>
                      ), content: (
                          <p>
                              <JavaBadge/> <PostgresQLBadge/> <GenericBadge text={"sqlite"}/> <GenericBadge text={"git patches"}/> <LinuxBadge/> <GitBadge/>
                              <br/>
                              minecraft server network <br/>
                              - my first project. Comprised of: <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugins made using <GenericBadge text={"paper"}/>&#39;s framework. all of these plugins share an upstream <SourceBadge source={"null"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} hardcore factions (<SourceBadge source={"null"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} practice (hcf) (<SourceBadge source={"null"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} dayZ (<SourceBadge source={"null"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} practice (dayZ) (<SourceBadge source={"null"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - custom server jar (<SourceBadge source={"null"}/>), forked from <GenericBadge text={"purpur"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugin (<SourceBadge source={"null"}/>) for paper&#39;s <GenericBadge text={"velocity"}/> server proxy <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - postgres database (<SourceBadge source={"null"}/>)<br/>
                              - was all hosted on <OvhBadge/><br/>
                          </p>
                      )
                  }
                  ].map((entry) => (
                      <AccordionItem value={entry.name} key={entry.name} className={"relative overflow-y-hidden w-[85vw]"}>
                          {entry.iframe}
                          <AccordionTrigger className={`relative z-10${entry.heightBypass ? "" : " h-[30vh]"}`} style={{
                              backdropFilter: "blur(1vw)",
                              backgroundColor: "rgba(255, 255, 255, 0.65)",
                              padding: "1vw"
                          }}>
                              <div className={"flex flex-col w-full"}>
                                  <div className={"flex"}>
                                      {entry.isWip && (<Badge variant={"destructive"}>wip</Badge>)}
                                      {entry.source && (<SourceBadge source={"null"}/>)}
                                      {entry.organization && (<GenericBadge text={"organization"}/>)}
                                  </div>
                                  {entry.content}
                              </div>
                          </AccordionTrigger>
                          <AccordionContent className={"h-[85vh] w-[85vw]"}/>
                      </AccordionItem>
                  ))
              }
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

function GenericBadge({text}: { text: string }) {
    return <Badge>{text}</Badge>;
}

function GitBadge() {
    return <Badge>git</Badge>;
}

function PostgresQLBadge() {
    return <Badge>postgresql</Badge>;
}

function JavaBadge() {
    return <Badge>java</Badge>;
}

function ReactBadge() {
    return <Badge>react</Badge>;
}

function NextBadge() {
    return (
        <>
            <ReactBadge/> <Badge>next</Badge>
        </>
    )
}

function TailwindBadge() {
    return <Badge>tailwind</Badge>;
}

function ShadcnBadge() {
    return <Badge>shadcn</Badge>;
}

function LinuxBadge() {
    return <Badge>linux/shell</Badge>;
}

function VercelSupabaseBadge() {
    return (
        <>
            <Badge>vercel</Badge> + <Badge>supabase</Badge>
        </>
    )
}

function OvhBadge() {
    return <Badge>ovh</Badge>;
}

function ModrinthBadge() {
    return <GenericBadge text={"modrinth"}/>
}

function ShowcaseYoutubeIFrame({source}: { source: string }) {
    return <iframe width="560" height="315"
                   className={"absolute"}
                   src={`${source}?autoplay=1&mute=1&loop=1`}
                   allow="autoplay"
                   allowFullScreen/>
}

function SourceBadge({source}: { source: string }) {
    return <GenericBadge text={"source"}/>
}