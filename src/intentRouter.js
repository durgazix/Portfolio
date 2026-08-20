import { about, contact, experience, fallback, findMe, home, projects, resume } from './data/portfolioData'

export const portfolioSections = { home, about, projects, contact, experience, fallback, 'find-me': findMe, resume }

export function routeIntent(value) {
  const query = value.trim()
  if (/resume|cv|curriculum vitae/i.test(query)) return { section: 'resume', query }
  if (/find me|online|linkedin|instagram|where can i find|social profile/i.test(query)) return { section: 'find-me', query }
  if (/project|work/i.test(query)) return { section: 'projects', query }
  if (/contact|email|reach/i.test(query)) return { section: 'contact', query }
  if (/experience|career|role/i.test(query)) return { section: 'experience', query }
  if (/about|bio|skill/i.test(query)) return { section: 'about', query }
  if (/home|hello/i.test(query)) return { section: 'home', query }
  return { section: 'fallback', query }
}