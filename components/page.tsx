import GenericLinkBadge from "@/components/GenericLinkBadge";
import {Badge} from "@/components/ui/badge";
import React from "react";

export type genericBadgeColors = "bg-sky-100" | "bg-sky-200" | "bg-green-100" | "bg-red-200"

export function GenericBadge({text, color, isHoverUnderline}: {
    text: React.ReactNode;
    color?: genericBadgeColors;
    isHoverUnderline?: boolean
}) {
    return <Badge variant={"secondary"}
                  className={(color ? color : "") + (isHoverUnderline ? " hover:underline " : "")}>{text}</Badge>
}

export function GenericSourceBadge({isOrganizationElseSource, github, loc}: { isOrganizationElseSource?: boolean; github?: string; loc?: number}) {
    const sourceText = <>{isOrganizationElseSource ? "organization" : "source"} <GithubImg/></>
    // TODO -> handle purpur and handle loc w/o github (untitled-moviesite)
    return <GenericBadge text={<>
        {github && (<GenericLinkBadge color={"bg-green-100"} link={github} text={sourceText}/>)}
        {loc && <GenericBadge text={(<small>(~{loc} loc)</small>)}/>}
    </>} color={github ? "bg-green-100" : "bg-red-200"}/>
}

export function GithubImg() {
    // TODO
    return <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt={""}
        className="w-3 h-3"
    />
}