"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import React from "react";
import {GenericBadge, genericBadgeColors, GenericSourceBadge} from "@/components/page";
import GenericLinkBadge from "@/components/GenericLinkBadge";

const foo = "h-[17vh]"
export default function ShowcaseAccordion({props}: {props: Map<string, {
        id: number;
        loc: number;
    }>;}) {
    const accordionIFrames = React.useRef<Map<string, HTMLElement>>(new Map());
    const accordionTriggers = React.useRef<Set<HTMLElement>>(new Set());
    return <Accordion type="single" collapsible>
        {
            [{
                name: "untitled-moviesite",
                isWip: true,
                source: null,
                organization: null,
                absoluteIframe: (
                    <iframe className={"absolute"}
                            src={"https://untitled-moviesite.vercel.app/"}/>
                ),
                content: (
                    <p>
                        <GenericBadge text={"vue"} color={"bg-sky-200"}/> <GenericBadge text={"nuxt"} color={"bg-sky-200"}/> <PostgresQLBadge color={"bg-sky-100"}/> <TailwindBadge/> <ShadcnBadge/> <JsonBadge color={"bg-sky-100"}/> <GitBadge/> <br/>
                        movie data aggregator site <br/>
                        - wraps <GenericLinkBadge text={"omdb"} link={"https://www.omdbapi.com/"}/>, <GenericLinkBadge text={"tmdb"} link={"https://developer.themoviedb.org/docs/getting-started"}/>, and <GenericLinkBadge
                        text={"wikidata"} link={"https://www.wikidata.org/wiki/Wikidata:Main_Page"}/>&#39;s respective apis. hosted using <VercelSupabaseBadge/><br/>
                    </p>
                )
            }, {
                name: "pvp-utils-site",
                isWip: false,
                source: {
                    github: "https://github.com/memeasaur/pvputils-web",
                    loc: props.get("pvp-utils-site")!.loc,
                    openhubId: props.get("pvp-utils-site")!.id,
                },
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
                source: {
                    github: "https://github.com/pvputils/fabricpvputils-oss",
                    loc: props.get("fabric-pvp-utils")!.loc,
                    openhubId: props.get("fabric-pvp-utils")!.id,
                },
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
                source: {
                    github: "https://github.com/potpissers/Potpissers-web",
                    loc: props.get("potpissers-web")!.loc,
                    openhubId: props.get("potpissers-web")!.id,
                },
                organization: null,
                absoluteIframe: (
                    <iframe className={"absolute"} src={"https://potpissers.com/"}/>
                ),
                content: (
                    <p>
                        <GenericBadge text={"golang"} color={"bg-sky-200"}/> <GenericBadge text="html" color={"bg-sky-200"}/> <GenericBadge text={"css"} color={"bg-sky-200"}/> <GenericBadge text={"javascript"} color={"bg-sky-200"}/> <PostgresQLBadge color={"bg-sky-100"}/> <JsonBadge color={"bg-sky-100"}/> <LinuxBadge/> <GitBadge/> <br/>
                        minecraft server network site <br/>
                        - integrates with <GenericLinkBadge text={"square"} link={"https://developer.squareup.com/us/en"}/>, <GenericLinkBadge text={"reddit"} link={"https://www.reddit.com/dev/api/"}/> <GenericLinkBadge text={"mojang"} link={"https://minecraft.wiki/w/Mojang_API"}/>, and <GenericLinkBadge text={"discord"} link={"https://discord.com/developers/docs/reference"}/>&#39;s apis. was hosted on <OvhBadge/>, currently on <GenericLinkBadge text={"google cloud"} link={"https://cloud.google.com/?hl=en"}/>
                    </p>
                )
            }, {
                name: "potpissers",
                isWip: false,
                source: null,
                organization: {
                    github: "https://github.com/orgs/potpissers/repositories",
                    loc: props.entries()
                        .filter(([name, ]) => name !== "potpissers-web" && name.includes("potpissers"))
                        .reduce((sum, [, value]) => sum + value.loc, 0),
                },
                absoluteIframe: (
                    <iframe width="560" height="315" // TODO method-ize this. GL with what a piece of fucking trash react is
                            src={`${"https://www.youtube.com/embed/XCERSWZMcac"}?autoplay=1&mute=1&loop=1&controls=0&playlist=${"https://www.youtube.com/embed/XCERSWZMcac".match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)}`} // TODO ai made this
                            allow="autoplay"
                            className={"absolute"}
                            allowFullScreen/>
                ), content: (
                    <p>
                        <JavaBadge/> <PostgresQLBadge color={"bg-sky-200"}/> <GenericBadge text={"sqlite"} color={"bg-sky-200"}/> <GenericBadge text={"git patches"} color={"bg-sky-100"}/> <LinuxBadge color={"bg-sky-100"}/> <GitBadge color={"bg-sky-100"}/>
                        <br/>
                        minecraft server network <br/>
                        - first project. comprised of: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - plugins made using <GenericLinkBadge text={"paper"} link={"https://papermc.io/"}/>&#39;s framework. these plugins share an upstream <GenericSourceBadge github={"https://github.com/potpissers/Potpissers-upstream"}/> <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} hardcore factions (<GenericSourceBadge github={"https://github.com/potpissers/Potpissers-cubecore"}/>) <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" >"} dayZ (<GenericSourceBadge github={"https://github.com/potpissers/Potpissers-kollusion"}/>) <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - custom server jar (<GenericSourceBadge github={"https://github.com/potpissers/Potpissers-purpur"}/>), forked from <GenericLinkBadge text={"purpur"} link={"https://purpurmc.org/"}/> <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - plugin (<GenericSourceBadge github={"https://github.com/potpissers/Potpissers-velocity"} openhubId={props.get("potpissers-velocity")?.id} loc={props.get("potpissers-velocity")?.loc}/>) for paper&#39;s <GenericLinkBadge text={"velocity"} link={"https://papermc.io/software/velocity"}/> server proxy <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; - postgres database (<GenericSourceBadge github={"https://github.com/potpissers/Potpissers-postgres"} openhubId={props.get("potpissers-postgres")?.id} loc={props.get("potpissers-postgres")?.loc}/>)<br/>
                        - was all hosted on <OvhBadge/><br/>
                    </p>
                )
            }
            ].map((entry) => {
                const name = entry.name
                const source = entry.source
                const organization = entry.organization
                return (
                <AccordionItem value={name} key={name} className={"relative overflow-y-hidden w-[90vw]"}>
                    {React.cloneElement(entry.absoluteIframe, {ref: (frame: HTMLIFrameElement | null) => {
                        if (frame)
                            accordionIFrames.current.set(entry.name, frame)
                        }})}
                    <AccordionTrigger ref={trigger => {
                        if (trigger)
                            accordionTriggers.current.add(trigger)}
                    } className={`relative ` + foo} style={{
                        backdropFilter: "blur(1vw)",
                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                        padding: "1vw",
                    }} onClick={e => {
                        const current = e.currentTarget
                        const flag = current.classList.contains(foo)
                        for (const bar of accordionIFrames.current.values())
                            bar.style.marginTop = "0px"
                        for (const bar of accordionTriggers.current)
                            bar.classList.add(foo)
                        // TODO share animation with accordion
                        // TODO -> this isn't handling it being closed by another one being activated. i need to iterate over all of them or something
                        if (flag) {
                            current.classList.remove(foo);
                            accordionIFrames.current.get(entry.name)!.style.marginTop = `${current.offsetHeight}px` // TODO ?
                            // current.scrollIntoView({behavior: "smooth", block: "start"}); TODO Fix
                        }
                    }}>
                        <div className={"h-full w-full flex justify-between items-start"} >
                            {entry.content}
                            {entry.isWip && (<a><GenericBadge text={"wip"} color={"bg-red-200"}/></a>)} {/*TODO div*/}
                            {source && (<GenericSourceBadge github={source.github} openhubId={source.openhubId} loc={source.loc}/>)}
                            {organization && (<GenericSourceBadge isOrganizationElseSource={true} github={organization.github} loc={organization.loc}/>)}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className={"w-[90vw] h-[90vh]"}/>
                </AccordionItem>
            )})
        }
    </Accordion>
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
function GitBadge({color}: { color?: genericBadgeColors }) {
    return <GenericBadge text={"git"} color={color}/>;
}
function JsonBadge({color}: { color?: genericBadgeColors }) {
    return <GenericBadge text={"json"} color={color}/>;
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