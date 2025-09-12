"use client";

import React from "react";
import {GenericBadge, genericBadgeColors} from "@/app/page";

export default function GenericLinkBadge({text, color, link}: { text: React.ReactNode; color?: genericBadgeColors; link: string }) {
    return <a
        href={link}
        target={"_blank"}
        onClick={e => e.stopPropagation()}>{<GenericBadge text={text} color={color} isHoverUnderline={true}/>}</a>
}