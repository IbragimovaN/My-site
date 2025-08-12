export interface ExperienceDataType {
  id: number;
  school: string;
  name?: string;
  link: string;
  descr: string;
  date: string;
}

export const EXPERIENCE_DATA: ExperienceDataType[] = [
  {
    id: 1,
    school: "МГРИ-РГГРУ",
    link: "https://mgri.ru",
    descr: "Университет",
    date: "2012-2017",
  },
  {
    id: 2,
    school: "BionMax",
    name: "Курс веб-разработчик с нуля до результата.",
    link: "https://beonmax.com/courses/web-razrabotchik/",
    descr:
      "На курсе я освоила основы веб-разработки, научилaсь создавать адаптивные сайты с использованием современных технологий. Получила практический опыт работы с HTML5, CSS3, JavaScript, Bootstrap и препроцессорами, а также освоила такие инструменты как Figma, Git, Gulp. Курс дал мне понимание принципов разработки под CMS и валидной верстки по стандартам W3C.",
    date: "январь 2023 - февраль 2023",
  },
  {
    id: 3,
    school: "Result University",
    name: "Курс junior frontend рзработчик",
    link: "https://result.school/products/junior-js/u8a3b1s#program",
    descr:
      "Освоила современный стек: React (переход от классовых к функциональным компонентам React с хуками) в связке с Node.js + Express. Реализовала SPA-приложения с REST API, валидацией форм и оптимизацией. В качестве тимлида привела команду к победе в хакатоне (на чистом JS). На практике применяла Docker, MongoDB",
    date: "сентябрь 2023 - май 2024",
  },
  {
    id: 4,
    school: "Result University",
    name: "Курс middle frontend разработчик",
    link: "https://result.school/products/middle-js/b1",
    descr:
      "Продвинутое изучение TypeScript с дженериками и декораторами, углубленная работа с React (кастомные хуки, оптимизация производительности через мемоизацию и lazy loading). Освоила PWA и SSR (Next.js), научилась настраивать сложные Webpack-конфигурации для React/TypeScript проектов. Изучила state-менеджмент (Redux/RTK, MobX), включая написание собственного мини-Redux. Получила практический опыт тестирования (unit/integration/E2E) и DevOps-практик: Docker (контейнеризация, Compose), CI/CD (GitLab), развертывание на Nginx с SSL. Применила Scrum/Kanban в командной работе над проектами с код-ревью.",
    date: "ноябрь 2024 - наст.время",
  },
];
