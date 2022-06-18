import { Icons } from "./Icons";


export default function icons(props) {
    const MediaIcons = Icons[props.icontype];
    return <MediaIcons />;
}
