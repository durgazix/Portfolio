const tabs = ['home', 'about', 'projects', 'contact', 'experience']

export default function TopNav({ activeSection, onSelect }) {
  return <nav className="top-nav" aria-label="Portfolio sections">{tabs.map((tab) => <button key={tab} className={activeSection === tab ? 'active' : ''} onClick={() => onSelect(tab, `Tell me about ${tab}`)}>{tab[0].toUpperCase() + tab.slice(1)}</button>)}</nav>
}
