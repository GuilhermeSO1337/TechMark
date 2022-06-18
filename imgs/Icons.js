import Email from './email';
import Facebook from './facebook';
import Instagram from './instagram';
import Whatsapp from './whatsapp';
import Telephone from './telephone';
import Twitter from './twitter';
import Linkedin from './linkedin';

const Icons ={
    Email: Email,
    Facebook,
    Instagram,
    Whatsapp,
    Telephone,
    Twitter,
    Linkedin,
}

export default function icons(props) {
    const MediaIcon = Icons[props.icontype];
    return <MediaIcon width={30} height={30} />;
  }