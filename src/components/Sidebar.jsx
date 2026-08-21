import { ArrowLeft, ArrowRight, ChevronRight, FileText, Globe, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

export default function Sidebar({ onQuery, onResume, onUpdates, isOpen, onToggle }) {
  return <aside className={`sidebar${isOpen ? '' : ' collapsed'}`}>
    <div className="sidebar-top">{isOpen && <><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</>}<button className="sidebar-toggle" type="button" onClick={onToggle} aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'} aria-expanded={isOpen}>{isOpen ? <ArrowLeft size={18} /> : <ChevronRight size={18} />}</button></div>
    <div className="profile-photo"><img src="/projects/image.png" alt="Durga Prasad Sahoo" onError={(event) => { event.currentTarget.style.display = 'none' }} /><span>DPS</span></div>
    <h2>Durga Prasad Sahoo</h2><p className="role">Full-Stack AI Engineer</p>
    <div className="education"><strong>GIET University</strong><span>B.Tech CSE · 8.4/10 · Jul 2026</span></div>
    <p className="tagline">AI/ML, Generative AI &<br />full-stack development.</p>
    <div className="socials" aria-label="Social links"><a href="https://www.linkedin.com/in/durgaprasadsahoo171/" aria-label="LinkedIn"><Send size={17} /></a><a href="https://github.com/durgazix" aria-label="GitHub"><Globe size={17} /></a><a href="https://leetcode.com/u/durgazix_06/" aria-label="LeetCode"><MessageCircle size={17} /></a><a href="mailto:durgaprasadsahoo171@gmail.com" aria-label="Email"><Mail size={17} /></a></div>

    <button className="resume-button" type="button" onClick={onResume}><FileText size={15} /> Resume</button>
    <button className="updates-link" type="button" onClick={onUpdates}>
      <span className="updates-copyblock">
        <span className="updates-kicker">WHAT'S NEW</span>
        <span className="updates-copy">See what’s new</span>
      </span>
      <ArrowRight size={15} />
    </button>
    <div className="location"><MapPin size={16} /><span>PAN India</span></div>
  </aside>
}
