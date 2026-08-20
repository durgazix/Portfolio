import { ArrowUpRight, Globe, Mail, X } from 'lucide-react'
import { useState } from 'react'
import ResumeViewer from './ResumeViewer'

const Tag = ({ children }) => <span className="tag">{children}</span>

function ProjectMedia({ project }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const images = project.images || []
  return <>
    <button className="project-image-button" onClick={() => setSelectedImage(images[0])} aria-label={`Enlarge ${project.title} image`}><img src={images[0]} alt={`${project.title} preview`} loading="lazy" /></button>
    {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} image viewer`} onClick={() => setSelectedImage(null)}><button onClick={() => setSelectedImage(null)} aria-label="Close image"><X size={22} /></button><img src={selectedImage} alt={`${project.title} enlarged preview`} onClick={(event) => event.stopPropagation()} /></div>}
  </>
}

export default function ResponseCard({ section, content, onQuery }) {
  if (section === 'projects') return <article className="response-card projects-response"><span className="response-label">SELECTED WORK</span><h2>Things I’ve made</h2><div className="project-grid">{content.map((project, index) => <div className="project-item" key={project.title}><ProjectMedia project={project} /><div className="project-index">0{index + 1}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tech.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div><div className="project-links"><a href={project.live}>Live site <ArrowUpRight size={14} /></a><a href={project.github}><Globe size={14} /> Source</a></div></div>)}</div></article>
  if (section === 'experience') return <article className="response-card"><span className="response-label">THE JOURNEY</span><h2>Experience</h2><div className="timeline">{content.map((item) => <div className="timeline-item" key={item.role}><div className="timeline-marker" /><div><div className="timeline-meta">{item.dates}</div><h3>{item.role}</h3><strong>{item.company}</strong><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></div>)}</div></article>
  if (section === 'contact') return <article className="response-card contact-response"><span className="response-label">SAY HELLO</span><h2>{content.title}</h2><p>{content.body}</p><a className="email-link" href={`mailto:${content.email}`}><Mail size={17} /> {content.email}</a><div className="contact-links">{content.socials.map((social) => <a href={social.href} key={social.label}>{social.label} <ArrowUpRight size={14} /></a>)}</div></article>
  if (section === 'find-me') return <article className="response-card"><span className="response-label">VERIFIED SOURCES ONLY</span><h2>{content.title}</h2><p>{content.body}</p><div className="find-links">{content.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} <ArrowUpRight size={14} /></a>)}</div></article>
  if (section === 'resume') return <article className="response-card"><span className="response-label">DOCUMENT</span><h2>{content.title}</h2><ResumeViewer file={content.file} /></article>
  return <article className="response-card"><span className="response-label">{section === 'home' ? 'WELCOME' : 'THE SHORT VERSION'}</span><h2>{content.title}</h2><p>{content.body}</p>{content.skills && <div className="tags skills">{content.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>}{content.prompts && <div className="prompt-list">{content.prompts.map((prompt) => <button key={prompt} onClick={() => onQuery(prompt)}>{prompt} <ArrowUpRight size={14} /></button>)}</div>}</article>
}
