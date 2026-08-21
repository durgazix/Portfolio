const tabs = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
  { key: 'experience', label: 'Experience' },
  { key: 'blog', label: 'Blog' },
  { key: 'updates', label: 'Updates' },
]

export default function TopNav({ activeSection, currentPath = '/', onSelect }) {
  const isActive = (tabKey) => {
    if (currentPath.startsWith('/blog')) return tabKey === 'blog'
    if (currentPath === '/updates') return tabKey === 'updates'
    if (currentPath === '/resume') return tabKey === 'home'
    return activeSection === tabKey
  }

  return (
    <nav className="top-nav" aria-label="Portfolio sections">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={isActive(tab.key) ? 'active' : ''}
          onClick={() => onSelect(tab.key, tab.key === 'blog' ? 'Show me the blog' : tab.key === 'updates' ? 'Show me the updates' : `Tell me about ${tab.key}`)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
