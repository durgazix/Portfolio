import { ArrowUp } from 'lucide-react'
import ResponseCard from './ResponseCard'
import { useEffect, useRef, useState } from 'react'

export default function ChatCanvas({ messages, isThinking, onQuery }) {
  const canvasEnd = useRef(null)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setShowTopButton(scrollTop > 220)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { canvasEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }, [messages, isThinking])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="chat-canvas" aria-live="polite">
        {messages.map((message, index) => message.type === 'query' ? <div className="query-bubble" key={index}>{message.content}</div> : <ResponseCard key={index} section={message.section} content={message.content} onQuery={onQuery} />)}
        {isThinking && <div className="thinking"><span /><span /><span /></div>}
        <div ref={canvasEnd} />
      </section>
      {showTopButton && (
        <button type="button" className="scroll-top-button" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUp size={18} />
        </button>
      )}
    </>
  )
}
