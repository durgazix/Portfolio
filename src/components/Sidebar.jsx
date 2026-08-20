import { FileText, Globe, Mail, MapPin, Menu, MessageCircle, Send } from 'lucide-react'

export default function Sidebar({ onQuery }) {
  return <aside className="sidebar">
    <div className="sidebar-top"><button className="mobile-menu" aria-label="Open menu"><Menu size={20} /></button><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
    <div className="profile-photo"><img src="/projects/image.png" alt="Durga Prasad Sahoo" onError={(event) => { event.currentTarget.style.display = 'none' }} /><span>DPS</span></div>
    <h2>Durga Prasad Sahoo</h2><p className="role">Full-Stack AI Engineer</p>
    <div className="education"><strong>GIET University</strong><span>B.Tech CSE · 8.4/10 · Jul 2026</span></div>
    <p className="tagline">AI/ML, Generative AI &<br />full-stack development.</p>
    <div className="socials" aria-label="Social links"><a href="https://www.linkedin.com/in/durgaprasadsahoo171/" aria-label="LinkedIn"><Send size={17} /></a><a href="https://github.com/durgazix" aria-label="GitHub"><Globe size={17} /></a><a href="https://leetcode.com/u/durgazix_06/" aria-label="LeetCode"><MessageCircle size={17} /></a><a href="mailto:durgaprasadsahoo171@gmail.com" aria-label="Email"><Mail size={17} /></a></div>
    <button className="resume-button" onClick={() => onQuery('Show me your resume')}><FileText size={15} /> Resume</button>
    <div className="location"><MapPin size={16} /><span>PAN India</span></div>
  </aside>
}
