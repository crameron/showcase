import {Badge} from "@/components/ui/badge";
import {Accordion, AccordionContent, AccordionItem} from "@/components/ui/accordion";
import ShowcaseAccordionTrigger from "@/components/ShowcaseAccordionTrigger";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Accordion type="single" collapsible>
              {
                  [{
                      name: "untitled-moviesite",
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
                              - wraps <GenericBadge text={"omdb"} variant={"secondary"}/>, <GenericBadge text={"tmdb"} variant={"secondary"}/>, and <GenericBadge
                              text={"wikidata"} variant={"secondary"}/>&#39;s respective apis. hosted using <VercelSupabaseBadge/><br/>
                          </p>
                      )
                  }, {
                      name: "pvp-utils-site",
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
                              - uses <GenericBadge text={"fabric"} variant={"secondary"}/>&#39;s mod framework to implement a variety of
                              pvp-related features. hosted on <ModrinthBadge/><br/>
                          </p>
                      )
                  }, {
                      name: "potpissers-web",
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
                              - first project. comprised of: <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugins made using <GenericBadge text={"paper"} variant={"secondary"}/>&#39;s framework. these plugins share an upstream <SourceBadge source={"https://github.com/potpissers/Potpissers-upstream"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} hardcore factions (<SourceBadge source={"https://github.com/potpissers/Potpissers-cubecore"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} dayZ (<SourceBadge source={"https://github.com/potpissers/Potpissers-kollusion"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - custom server jar (<SourceBadge source={"https://github.com/potpissers/Potpissers-purpur"}/>), forked from <GenericBadge text={"purpur"} variant={"secondary"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugin (<SourceBadge source={"https://github.com/potpissers/Potpissers-velocity"}/>) for paper&#39;s <GenericBadge text={"velocity"} variant={"secondary"}/> server proxy <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - postgres database (<SourceBadge source={"https://github.com/potpissers/Potpissers-postgres"}/>)<br/>
                              - was all hosted on <OvhBadge/><br/>
                          </p>
                      )
                  }
                  ].map((entry) => (
                      <AccordionItem value={entry.name} key={entry.name} className={"relative overflow-y-hidden w-[90vw]"}>
                          {entry.iframe}
                          <ShowcaseAccordionTrigger>
                              <div className={"h-full w-full flex justify-between"} >
                                  {entry.content}
                                  {entry.isWip && (<a><Badge variant={"destructive"}>wip</Badge></a>)} {/*TODO div*/}
                                  {entry.source && (<SourceBadge source={entry.source}/>)}
                                  {entry.organization && (<a href={entry.organization}><GenericBadge text={"organization"}/></a>)}
                              </div>
                          </ShowcaseAccordionTrigger>
                          <AccordionContent className={"h-[90vh] w-[90vw]"}/>
                      </AccordionItem>
                  ))
              }
          </Accordion>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn*/}
        {/*</a>*/}
          <SourceBadge source={"null"}/>
      </footer>
    </div>
  );
}

function GenericBadge({text, variant = "default"}: { text: string; variant?: "default" | "destructive" | "outline" | "secondary" }) {
    return <Badge variant={variant}>{text}</Badge>;
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
            <GenericBadge text={"vercel"} variant={"secondary"}/> + <GenericBadge text={"supabase"} variant={"secondary"}/>
        </>
    )
}

function OvhBadge() {
    return <GenericBadge text={"ovh"} variant={"secondary"}/>;
}

function ModrinthBadge() {
    return <GenericBadge text={"modrinth"} variant={"secondary"}/>
}

function ShowcaseYoutubeIFrame({source}: { source: string }) {
    return <iframe width="560" height="315"
                   className={"absolute"}
                   src={`${source}?autoplay=1&mute=1&loop=1&controls=0&playlist=${source.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)}`} // TODO ai made this
                   allow="autoplay"
                   allowFullScreen/>
}

function SourceBadge({source}: { source: string }) {
    return <a href={source}>
        <GenericBadge text={"source"}/>
    </a>
}