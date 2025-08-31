// "use client"; TODO remove -> react components can't move an iframe without losing it's state, trivial in vanilla js, without being complicated as fuck (portals?!). what a joke
//
// import {AccordionContent, AccordionItem} from "@/components/ui/accordion";
// import ShowcaseAccordionTrigger from "./ShowcaseAccordionTrigger";
// import React from "react";
// import {GenericBadge, GithubImg, SourceBadge} from "@/app/page";
// import GenericLinkBadge from "@/components/GenericLinkBadge";
//
// export default function ShowcaseAccordionItem() {
//     return <AccordionItem value={entry.name} key={entry.name} className={"relative overflow-y-hidden w-[90vw]"}>
//         {React.cloneElement(entry.absoluteIframe, {className: "absolute ShowcaseIFrame"})}
//         <ShowcaseAccordionTrigger>
//             <div className={"h-full w-full flex justify-between"} >
//                 {entry.content}
//                 {entry.isWip && (<a><GenericBadge text={"wip"} color={"bg-red-200"}/></a>)} {/*TODO div*/}
//                 {entry.source && (<SourceBadge source={entry.source}/>)}
//                 {entry.organization && (<GenericLinkBadge link={entry.organization} text={<>organization <GithubImg/></>} color={"bg-green-100"}/>)}
//             </div>
//         </ShowcaseAccordionTrigger>
//         <AccordionContent className={"h-[90vh] w-[90vw]"}>
//             {entry.absoluteIframe}
//         </AccordionContent>
//     </AccordionItem>
// }