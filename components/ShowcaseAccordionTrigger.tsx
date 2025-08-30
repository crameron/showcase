"use client";

import {AccordionTrigger} from "@/components/ui/accordion";
import React from "react";

const foo = "h-[17vh]"

export default function ShowcaseAccordionTrigger({ children }: {children?: React.ReactNode;}) {
    return <AccordionTrigger className={`relative ` + foo} style={{
        backdropFilter: "blur(1vw)",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        padding: "1vw"
    }} onClick={e => {
        const current = e.currentTarget
        if (!current.classList.contains(foo))
            current.classList.add(foo) // TODO share animation with accordion
            // TODO -> this isn't handling it being closed by another one being activated. i need to iterate over all of them or something
        else {
            current.classList.remove(foo)
            current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }}>
        {children}
    </AccordionTrigger>
}