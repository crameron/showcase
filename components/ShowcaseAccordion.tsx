"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import React from "react";
import {GenericBadge, GenericSourceBadge} from "@/app/page";

const foo = "h-[17vh]"
type showcaseItem = { // TODO react is retarded for giving an error if I type this inline
    name: string;
    isWip: boolean;
    source: {
        github: string;
        loc: number;
        openhubId: number;
    } | null;
    organization: {
        github: string;
        loc: number;
    } | null;
    absoluteIframe: React.ReactElement<
        React.IframeHTMLAttributes<HTMLIFrameElement> &
        React.RefAttributes<HTMLIFrameElement>
    >;
    content: React.ReactNode;
};
export default function ShowcaseAccordion({props}: {props: showcaseItem[]}) {
    const accordionIFrames = React.useRef<Map<string, HTMLElement>>(new Map());
    const accordionTriggers = React.useRef<Set<HTMLElement>>(new Set());
    return <Accordion type="single" collapsible>
        {
            props.map((entry) => {
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