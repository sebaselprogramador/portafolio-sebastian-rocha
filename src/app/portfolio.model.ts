export interface Portfolio {
  profile: { name: string; initials: string; role: string; intro: string; about: string; location: string; email: string; photo: string; heroPhoto: string; photoAlt: string };
  skills: { name: string; description: string }[];
  education: { title: string; institution: string; period: string; description: string }[];
  projects: { id: string; title: string; category: string; description: string; image: string; imageAlt: string; technologies: string[]; url: string }[];
  socials: { label: string; url: string }[];
}
