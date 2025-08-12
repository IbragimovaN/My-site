import EmailIcon from "../assets/icons/contacts/email.svg?react";
import PhoneIcon from "../assets/icons/contacts/phone.svg?react";
import TelegramIcon from "../assets/icons/contacts/telegram.svg?react";

export const CONTACTS_DATA = [
  {
    id: 1,
    icon: <PhoneIcon />,
    title: "Телефон",
    value: "+79150908372",
    link: "tel:+79150908372",
  },
  {
    id: 2,
    icon: <EmailIcon />,
    title: "Email",
    value: "anastasiya.ibr@mail.ru",
    link: "mailto:anastasiya.ibr@mail.ru",
  },
  {
    id: 3,
    icon: <TelegramIcon />,
    title: "Telegram",
    value: "IbragimovaNast",
    link: "https://t.me/IbragimovaNast",
  },
];
