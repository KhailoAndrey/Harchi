import { FaFacebookF } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { EmailShareButton, FacebookShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

export const socialMedias = [
    {
      id: 1,
      name: 'Facebook',
      icon: FaFacebookF,
      shareButton: FacebookShareButton,
    },
    {
      id: 2,
      name: 'Telegram',
      icon: FaTelegramPlane,
      shareButton: TelegramShareButton,
    },
    { id: 3, name: 'X', icon: FaXTwitter, shareButton: TwitterShareButton },
    {
      id: 4,
      name: 'Whatsapp',
      icon: FaWhatsapp,
      shareButton: WhatsappShareButton,
    },
    {
      id: 5,
      name: 'E-mail',
      icon: MdOutlineAlternateEmail,
      shareButton: EmailShareButton,
    },
  ];