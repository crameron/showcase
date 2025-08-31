"use client";

import {AccordionTrigger} from "@/components/ui/accordion";
import React, {useEffect, useState} from "react";

const foo = "h-[17vh]"

export default function ShowcaseAccordionTrigger({ children }: {children?: React.ReactNode;}) {
    // const [height, setHeight] = useState(0);
    // useEffect(() => {
    //     if (triggerRef.current) {
    //         setHeight(triggerRef.current.offsetHeight);
    //     }
    // }, []);
    return <AccordionTrigger className={`ShowcaseAccordionTrigger relative ` + foo} style={{
        backdropFilter: "blur(1vw)",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        padding: "1vw"
    }} onClick={e => {
        const current = e.currentTarget
        const flag = current.classList.contains(foo)
        for (const child of current.parentElement!.parentElement!.parentElement!.children) {
            child.querySelector('.ShowcaseAccordionTrigger')?.classList.add(foo);
            (child.parentElement!.querySelector('.ShowcaseIFrame')! as HTMLElement).style.marginTop = "0px"
        }TODO -> this probably has to be react state collection
        // TODO share animation with accordion
        // TODO -> this isn't handling it being closed by another one being activated. i need to iterate over all of them or something
        if (flag) {
            current.classList.remove(foo);
            (current.parentElement!.parentElement!.querySelector('.ShowcaseIFrame')! as HTMLElement).style.marginTop = `${current.offsetHeight}px`
            current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }}>
        {children}
    </AccordionTrigger>
}