import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const data = JSON.parse(readFileSync(new URL('../public/data/portfolio.json', import.meta.url), 'utf8'));
const text = (value, name) => assert.equal(typeof value, 'string', `${name} debe ser texto`);
const list = (value, name) => assert.ok(Array.isArray(value), `${name} debe ser una lista`);
const image = path => {
  text(path, 'Ruta de imagen');
  if (!path) return;
  assert.ok(/^assets\/img\/[\w./-]+$/.test(path) && !path.includes('..'), 'Las fotos deben estar en assets/img/');
  assert.ok(existsSync(new URL(`../public/${path}`, import.meta.url)), `Falta la imagen ${path}`);
};
const url = value => {
  text(value, 'Enlace');
  if (value) assert.ok(['https:', 'http:'].includes(new URL(value).protocol), 'Usa enlaces HTTP o HTTPS');
};
assert.ok(data.profile, 'Falta profile');
for (const key of ['name', 'initials', 'role', 'intro', 'about', 'location', 'email', 'photo', 'heroPhoto', 'photoAlt']) text(data.profile[key], `profile.${key}`);
assert.ok(data.profile.name.trim(), 'Falta el nombre');
if (data.profile.email) assert.match(data.profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
image(data.profile.photo); image(data.profile.heroPhoto);
for (const key of ['skills', 'education', 'projects', 'socials']) list(data[key], key);
for (const skill of data.skills) { text(skill.name, 'skill.name'); text(skill.description, 'skill.description'); }
for (const item of data.education) for (const key of ['title', 'institution', 'period', 'description']) text(item[key], `education.${key}`);
const ids = new Set();
for (const project of data.projects) {
  for (const key of ['id', 'title', 'category', 'description', 'image', 'imageAlt', 'url']) text(project[key], `project.${key}`);
  assert.ok(project.id && !ids.has(project.id), 'Cada proyecto necesita un id único'); ids.add(project.id);
  assert.ok(project.category && project.category !== 'Todos', 'Categoría de proyecto no válida');
  list(project.technologies, 'technologies'); project.technologies.forEach(tech => text(tech, 'technology'));
  image(project.image); url(project.url);
}
for (const social of data.socials) { text(social.label, 'social.label'); url(social.url); }
console.log(`JSON válido: ${data.projects.length} proyectos y ${data.skills.length} herramientas.`);
