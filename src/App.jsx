import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import SearchBar from './components/SearchBar'
import ChatCanvas from './components/ChatCanvas'
import ResumeViewer from './components/ResumeViewer'
import BlogPage, { BlogPostPage } from './components/BlogPage'
import UpdatesPage from './components/UpdatesPage'
import { portfolioSections, routeIntent } from './intentRouter'
import './App.css'

function ChatLayout({ messages, isThinking, onQuery, onNavigate }) {
  return (
    <div className="canvas-wrap">
      <header className="canvas-heading">
        <span className="eyebrow">DURGA PRASAD SAHOO / PORTFOLIO</span>
        <h1>A portfolio that talks back.</h1>
        <p>Ask about my AI work, full-stack projects, experience, or how to get in touch.</p>
      </header>
      <ChatCanvas messages={messages} isThinking={isThinking} onQuery={onQuery} />
      <SearchBar onSubmit={onQuery} />
    </div>
  )
}

function PortfolioShell() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
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

  function handleNavigation(section) {
    if (section === 'blog') {
      setActiveSection('blog')
      navigate('/blog')
      return
    }

    if (section === 'updates') {
      setActiveSection('updates')
      navigate('/updates')
      return
    }

    if (location.pathname !== '/') {
      navigate('/')
    }

    setActiveSection(section)
    if (section !== 'home') {
      showSection(section, `Tell me about ${section}`)
    } else {
      setMessages([{ type: 'response', section: 'home', content: portfolioSections.home }])
    }
  }

  function handleSearch(value) {
    const { section, query } = routeIntent(value)
    if (section === 'blog') {
      navigate('/blog')
      return
    }

    if (section === 'updates') {
      navigate('/updates')
      return
    }

    if (location.pathname !== '/') {
      navigate('/')
    }

    showSection(section, query || 'Tell me about my portfolio')
  }

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((open) => !open)}
        onQuery={handleSearch}
        onResume={() => navigate('/resume')}
        onUpdates={() => navigate('/updates')}
      />
      <main className="workspace">
        <TopNav
          activeSection={activeSection}
          currentPath={location.pathname}
          onSelect={(section) => {
            handleNavigation(section)
          }}
        />
        <Routes>
          <Route path="/" element={<ChatLayout messages={messages} isThinking={isThinking} onQuery={handleSearch} onNavigate={handleNavigation} />} />
          <Route path="/resume" element={<div className="page-shell"><ResumeViewer mode="page" /></div>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <PortfolioShell />
    </BrowserRouter>
  )
}

export default App
