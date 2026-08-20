import ResponseCard from './ResponseCard'
import { useEffect, useRef } from 'react'

export default function ChatCanvas({ messages, isThinking, onQuery }) {
  const canvasEnd = useRef(null)
  useEffect(() => { canvasEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }, [messages, isThinking])
  return <section className="chat-canvas" aria-live="polite">{messages.map((message, index) => message.type === 'query' ? <div className="query-bubble" key={index}>{message.content}</div> : <ResponseCard key={index} section={message.section} content={message.content} onQuery={onQuery} />)}{isThinking && <div className="thinking"><span /><span /><span /></div>}<div ref={canvasEnd} /></section>
}
