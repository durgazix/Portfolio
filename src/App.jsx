import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import SearchBar from './components/SearchBar'
import ChatCanvas from './components/ChatCanvas'
import ResumeViewer from './components/ResumeViewer'
import { portfolioSections, routeIntent } from './intentRouter'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [messages, setMessages] = useState([{ type: 'response', section: 'home', content: portfolioSections.home }])
  const [isThinking, setIsThinking] = useState(false)

  function showSection(section, query = `Show me your ${section}`) {
    setActiveSection(section)
    setIsThinking(true)
    window.setTimeout(() => {
      setMessages((current) => [...current, { type: 'query', content: query }, { type: 'response', section, content: portfolioSections[section] }])
      setIsThinking(false)
    }, 420)
  }

  function handleSearch(value) {
    const { section, query } = routeIntent(value)
    showSection(section, query || 'Tell me about my portfolio')
  }

  if (window.location.pathname === '/resume') return <ResumeViewer mode="page" />

  return (
    <div className="app-shell"><Sidebar onQuery={handleSearch} /><main className="workspace"><TopNav activeSection={activeSection} onSelect={showSection} /><div className="canvas-wrap"><header className="canvas-heading"><span className="eyebrow">DURGA PRASAD SAHOO / PORTFOLIO</span><h1>A portfolio that talks back.</h1><p>Ask about my AI work, full-stack projects, experience, or how to get in touch.</p></header><ChatCanvas messages={messages} isThinking={isThinking} onQuery={handleSearch} /><SearchBar onSubmit={handleSearch} /></div></main></div>
  )
}

export default App
