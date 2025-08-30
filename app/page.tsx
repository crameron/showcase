import {Badge} from "@/components/ui/badge";
import {Accordion, AccordionContent, AccordionItem} from "@/components/ui/accordion";
import ShowcaseAccordionTrigger from "@/components/ShowcaseAccordionTrigger";
import React from "react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center"> {/*TODO min-h-screen p-8 pb-20 gap-16 sm:p-20*/}
      <main className="flex flex-col row-start-2 items-center sm:items-start"> {/*TODO gap-[32px]*/}
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
                              <GenericBadge text={"vue"} color={"bg-sky-200"}/> <GenericBadge text={"nuxt"} color={"bg-sky-200"}/> <PostgresQLBadge color={"bg-sky-100"}/> <TailwindBadge/> <ShadcnBadge/> <GitBadge/> <br/>
                              movie data aggregator site <br/>
                              - wraps <GenericBadge text={"omdb"} link={"https://www.omdbapi.com/"}/>, <GenericBadge text={"tmdb"} link={"https://developer.themoviedb.org/docs/getting-started"}/>, and <GenericBadge
                              text={"wikidata"} link={"https://www.wikidata.org/wiki/Wikidata:Main_Page"}/>&#39;s respective apis. hosted using <VercelSupabaseBadge/><br/>
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
                              <NextBadge/> <TailwindBadge/> <ShadcnBadge/> <GenericBadge text={"typescript"} color={"bg-sky-100"}/> <GitBadge/> <br/>
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
                              <JavaBadge/> <GenericBadge text={"mixin"} color={"bg-sky-200"}/> <GitBadge color={"bg-sky-100"}/> <br/>
                              minecraft utility mod <br/>
                              - uses <GenericBadge text={"fabric"} link={"https://fabricmc.net/"}/>&#39;s mod framework to implement a variety of
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
                              <GenericBadge text={"golang"} color={"bg-sky-200"}/> <GenericBadge text="html" color={"bg-sky-200"}/> <GenericBadge text={"css"} color={"bg-sky-200"}/> <GenericBadge text={"javascript"} color={"bg-sky-200"}/> <PostgresQLBadge color={"bg-sky-100"}/> <LinuxBadge/> <GitBadge/> <br/>
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
                              <JavaBadge/> <PostgresQLBadge color={"bg-sky-200"}/> <GenericBadge text={"sqlite"} color={"bg-sky-200"}/> <GenericBadge text={"git patches"} color={"bg-sky-100"}/> <LinuxBadge color={"bg-sky-100"}/> <GitBadge color={"bg-sky-100"}/>
                              <br/>
                              minecraft server network <br/>
                              - first project. comprised of: <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugins made using <GenericBadge text={"paper"} link={"https://papermc.io/"}/>&#39;s framework. these plugins share an upstream <SourceBadge source={"https://github.com/potpissers/Potpissers-upstream"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} hardcore factions (<SourceBadge source={"https://github.com/potpissers/Potpissers-cubecore"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} dayZ (<SourceBadge source={"https://github.com/potpissers/Potpissers-kollusion"}/>) <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - custom server jar (<SourceBadge source={"https://github.com/potpissers/Potpissers-purpur"}/>), forked from <GenericBadge text={"purpur"} link={"https://purpurmc.org/"}/> <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp; - plugin (<SourceBadge source={"https://github.com/potpissers/Potpissers-velocity"}/>) for paper&#39;s <GenericBadge text={"velocity"} link={"https://papermc.io/software/velocity"}/> server proxy <br/>
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
                                  {entry.isWip && (<a><GenericBadge text={"wip"} color={"bg-red-200"}/></a>)} {/*TODO div*/}
                                  {entry.source && (<SourceBadge source={entry.source}/>)}
                                  {entry.organization && (<a href={entry.organization}><GenericBadge text={<>organization <GithubImg/></>} color={"bg-green-100"}/></a>)}
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
          <SourceBadge source={"https://github.com/memeasaur/showcase"}/> {/*TODO -> this shouldn't be here if the project is private*/}
      </footer>
    </div>
  );
}

type genericBadgeColors = "bg-sky-100" | "bg-sky-200" | "bg-green-100" | "bg-red-200"
function GenericBadge({text, color, link}: { text: React.ReactNode; color?: genericBadgeColors; link?: string }) {
    const badge = <Badge variant={"secondary"} className={color ? color : ""}>{text}</Badge>
    if (link)
        return <a href={link}>{badge}</a>
    else
        return badge;
}

function GitBadge({color} : {color?: genericBadgeColors}) {
    return <GenericBadge text={"git"} color={color}/>;
}

function PostgresQLBadge({color} : {color: genericBadgeColors}) {
    return <GenericBadge text={"postgresql"} color={color}/>;
}

function JavaBadge() {
    return <GenericBadge text={"java"} color={"bg-sky-200"}/>;
}

function ReactBadge() {
    return <GenericBadge text={"react"} color={"bg-sky-200"}/>;
}

function NextBadge() {
    return (
        <>
            <ReactBadge/> <GenericBadge text={"next"} color={"bg-sky-200"}/>
        </>
    )
}

function TailwindBadge() {
    return <GenericBadge text={"tailwind"} color={"bg-sky-100"}/>;
}

function ShadcnBadge() {
    return <GenericBadge text={"shadcn"} color={"bg-sky-100"}/>;
}

function LinuxBadge({color} : {color?: genericBadgeColors}) {
    return <GenericBadge text={"linux/shell"} color={color}/>;
}

function VercelSupabaseBadge() {
    return (
        <>
            <GenericBadge text={"vercel"} link={"https://vercel.com/"}/> + <GenericBadge text={"supabase"} link={"https://supabase.com/"}/>
        </>
    )
}

function OvhBadge() {
    return <GenericBadge text={"ovh"} link={"https://us.ovhcloud.com/"}/>;
}

function ModrinthBadge() {
    return <GenericBadge text={"modrinth"} link={"https://modrinth.com/"}/>
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
        <GenericBadge text={<>source <GithubImg/></>} color={"bg-green-100"}/>
    </a>
}
function GithubImg() {
    return <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt={""}
        className="w-3 h-3"
    />
}