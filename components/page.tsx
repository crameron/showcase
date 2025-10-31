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

export function GenericSourceBadge({isOrganizationElseSource, github, loc}: { isOrganizationElseSource?: boolean; github: string | null; openhubId?: number; loc?: number}) {
    const sourceText = <>{isOrganizationElseSource ? "organization" : "source"} <GithubImg/></>
    if (github && loc) { // TODO -> handle purpur and handle loc w/o github (untitled-moviesite)
        const locText = (<small>(~{loc} loc)</small>)
        return <GenericBadge text={<>
            <GenericLinkBadge color={"bg-green-100"} link={github} text={sourceText}/> <GenericBadge text={locText}/>
        </>} color={"bg-green-100"}/>
    }
    else
        return <GenericBadge text={sourceText} color={"bg-red-200"}/>
}

export function GithubImg() {
    // TODO
    return <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        alt={""}
        className="w-3 h-3"
    />
}