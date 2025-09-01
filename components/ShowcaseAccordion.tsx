"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import GenericLinkBadge from "@/components/GenericLinkBadge";
import React from "react";
import {Badge} from "@/components/ui/badge";

const foo = "h-[17vh]"
export default function ShowcaseAccordion() {
    const accordionItems = new Set<HTMLElement>()
    return <Accordion type="single" collapsible>
        {
            [{
                name: "untitled-moviesite",
                isWip: true,
                source: null,
                organization: null,
                absoluteIframe: (
                    <iframe className={"absolute"} src={"https://untitled-moviesite.vercel.app/"}/>
                ),
                content: (
                    <p>
                        <GenericBadge text={"vue"} color={"bg-sky-200"}/> <GenericBadge text={"nuxt"} color={"bg-sky-200"}/> <PostgresQLBadge color={"bg-sky-100"}/> <TailwindBadge/> <ShadcnBadge/> <GitBadge/> <br/>
                        movie data aggregator site <br/>
                        - wraps <GenericLinkBadge text={"omdb"} link={"https://www.omdbapi.com/"}/>, <GenericLinkBadge text={"tmdb"} link={"https://developer.themoviedb.org/docs/getting-started"}/>, and <GenericLinkBadge
                        text={"wikidata"} link={"https://www.wikidata.org/wiki/Wikidata:Main_Page"}/>&#39;s respective apis. hosted using <VercelSupabaseBadge/><br/>
                    </p>
                )
            }, {
                name: "pvp-utils-site",
                isWip: false,
                source: "https://github.com/memeasaur/pvputils-web",
                organization: null,
                absoluteIframe: (
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
                absoluteIframe: (
                    <iframe className={"absolute"} src={"https://pvputils.vercel.app/fabric"}/>
                ),
                content: (
                    <p>
                        <JavaBadge/> <GenericBadge text={"mixin"} color={"bg-sky-200"}/> <GitBadge color={"bg-sky-100"}/> <br/>
                        minecraft utility mod <br/>
                        - uses <GenericLinkBadge text={"fabric"} link={"https://fabricmc.net/"}/>&#39;s mod framework to implement a variety of
                        pvp-related features. hosted on <ModrinthBadge/><br/>
                    </p>
                )
            }, {
                name: "potpissers-web",
                isWip: false,
                source: "https://github.com/potpissers/Potpissers-web",
                organization: null,
                absoluteIframe: (
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
                absoluteIframe: (
                    <ShowcaseYoutubeIFrame source={"https://www.youtube.com/embed/XCERSWZMcac"}/>
                ), content: (
                    <p>
                        <JavaBadge/> <PostgresQLBadge color={"bg-sky-200"}/> <GenericBadge text={"sqlite"} color={"bg-sky-200"}/> <GenericBadge text={"git patches"} color={"bg-sky-100"}/> <LinuxBadge color={"bg-sky-100"}/> <GitBadge color={"bg-sky-100"}/>
                        <br/>
                        minecraft server network <br/>
                        - first project. comprised of: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - plugins made using <GenericLinkBadge text={"paper"} link={"https://papermc.io/"}/>&#39;s framework. these plugins share an upstream <SourceBadge source={"https://github.com/potpissers/Potpissers-upstream"}/> <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} hardcore factions (<SourceBadge source={"https://github.com/potpissers/Potpissers-cubecore"}/>) <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} dayZ (<SourceBadge source={"https://github.com/potpissers/Potpissers-kollusion"}/>) <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - custom server jar (<SourceBadge source={"https://github.com/potpissers/Potpissers-purpur"}/>), forked from <GenericLinkBadge text={"purpur"} link={"https://purpurmc.org/"}/> <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - plugin (<SourceBadge source={"https://github.com/potpissers/Potpissers-velocity"}/>) for paper&#39;s <GenericLinkBadge text={"velocity"} link={"https://papermc.io/software/velocity"}/> server proxy <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - postgres database (<SourceBadge source={"https://github.com/potpissers/Potpissers-postgres"}/>)<br/>
                        - was all hosted on <OvhBadge/><br/>
                    </p>
                )
            }
            ].map((entry) => (
                <AccordionItem value={entry.name} key={entry.name} className={"relative overflow-y-hidden w-[90vw]"}>
                    {React.cloneElement(entry.absoluteIframe, {className: "absolute ShowcaseIFrame"})}
                    <AccordionTrigger className={`ShowcaseAccordionTrigger relative ` + foo} style={{
                        backdropFilter: "blur(1vw)",
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                        padding: "1vw"
                    }} onClick={e => {
                        const current = e.currentTarget
                        const flag = current.classList.contains(foo)
                        for (const child of current.parentElement!.parentElement!.parentElement!.children) {
                            child.querySelector('.ShowcaseAccordionTrigger')?.classList.add(foo);
                            (child.parentElement!.querySelector('.ShowcaseIFrame')! as HTMLElement).style.marginTop = "0px"
                        }
                        // TODO share animation with accordion
                        // TODO -> this isn't handling it being closed by another one being activated. i need to iterate over all of them or something
                        if (flag) {
                            current.classList.remove(foo);
                            (current.parentElement!.parentElement!.querySelector('.ShowcaseIFrame')! as HTMLElement).style.marginTop = `${current.offsetHeight}px`
                            current.scrollIntoView({behavior: "smooth", block: "start"});
                        }
                    }}>
                        <div className={"h-full w-full flex justify-between"} >
                            {entry.content}
                            {entry.isWip && (<a><GenericBadge text={"wip"} color={"bg-red-200"}/></a>)} {/*TODO div*/}
                            {entry.source && (<SourceBadge source={entry.source}/>)}
                            {entry.organization && (<GenericLinkBadge link={entry.organization} text={<>organization <GithubImg/></>} color={"bg-green-100"}/>)}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className={"h-[90vh] w-[90vw]"}/>
                </AccordionItem>
            ))
        }
    </Accordion>
}

export type genericBadgeColors = "bg-sky-100" | "bg-sky-200" | "bg-green-100" | "bg-red-200"

export function GenericBadge({text, color, isHoverUnderline}: {
    text: React.ReactNode;
    color?: genericBadgeColors;
    isHoverUnderline?: boolean
}) {
    return <Badge variant={"secondary"}
                  className={(color ? color : "") + (isHoverUnderline ? " hover:underline " : "")}>{text}</Badge>
}

export function SourceBadge({source}: { source: string }) {
    return <GenericLinkBadge link={source} text={<>source <GithubImg/></>} color={"bg-green-100"}/>
}

function GitBadge({color}: { color?: genericBadgeColors }) {
    return <GenericBadge text={"git"} color={color}/>;
}

function PostgresQLBadge({color}: { color: genericBadgeColors }) {
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

function LinuxBadge({color}: { color?: genericBadgeColors }) {
    return <GenericBadge text={"linux/shell"} color={color}/>;
}

function VercelSupabaseBadge() {
    return (
        <>
            <GenericLinkBadge text={"vercel"} link={"https://vercel.com/"}/> + <GenericLinkBadge text={"supabase"}
                                                                                                 link={"https://supabase.com/"}/>
        </>
    )
}

function OvhBadge() {
    return <GenericLinkBadge text={"ovh"} link={"https://us.ovhcloud.com/"}/>;
}

function ModrinthBadge() {
    return <GenericLinkBadge text={"modrinth"} link={"https://modrinth.com/"}/>
}

function ShowcaseYoutubeIFrame({source}: { source: string }) {
    return <iframe width="560" height="315"
                   src={`${source}?autoplay=1&mute=1&loop=1&controls=0&playlist=${source.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)}`} // TODO ai made this
                   allow="autoplay"
                   className={"absolute"}
                   allowFullScreen/>
}

function GithubImg() {
    return <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt={""}
        className="w-3 h-3"
    />
}