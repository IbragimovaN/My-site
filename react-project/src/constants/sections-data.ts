export type SectionId =
  | "about"
  | "skills"
  | "educations"
  | "experience"
  | "portfolio"
  | "contacts";

export interface SectionData {
  navTitle: string;
  sectionTitle: string;
  order?: number;
}

export const SECTIONS_DATA: Record<SectionId, SectionData> = {
  about: {
    navTitle: "Обо мне",
    sectionTitle: "Привет, я [Ваше Имя]",
    order: 1,
  },
  skills: {
    navTitle: "Навыки",
    sectionTitle: "В мои навыки входят следующие технологии",
    order: 2,
  },
  educations: {
    navTitle: "Образование",
    sectionTitle: "Образование",
    order: 3,
  },
  experience: {
    navTitle: "Опыт",
    sectionTitle: "Мой опыт в IT и не только",
    order: 4,
  },
  portfolio: {
    navTitle: "Портфолио",
    sectionTitle: "Портфолио",
    order: 5,
  },
  contacts: {
    navTitle: "Контакты",
    sectionTitle: "Связаться со мной",
    order: 6,
  },
} as const;

export const NAV_ITEMS = Object.entries(SECTIONS_DATA) as Array<
  [SectionId, SectionData]
>;
