import { useEffect, useState } from 'react'
import { updates } from '../data/portfolioData'
import { publicAsset } from '../publicAsset'

export default function UpdatesPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 300)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = 'Updates | Durga Prasad Sahoo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      const tag = document.createElement('meta')
      tag.name = 'description'
      tag.content = 'Recent updates, learning notes, and project milestones from Durga Prasad Sahoo.'
      document.head.appendChild(tag)
    } else {
      metaDescription.content = 'Recent updates, learning notes, and project milestones from Durga Prasad Sahoo.'
    }
  }, [])

  if (loading) {
    return (
      <div className="updates-shell">
        <div className="page-intro">
          <span className="page-kicker">Latest</span>
          <h1 className="page-title">Updates</h1>
        </div>
        <div className="loading-grid">
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
        </div>
      </div>
    )
  }

  const hasUpdates = Array.isArray(updates) && updates.length > 0

  return (
    <div className="updates-shell">
      <div className="page-intro">
        <span className="page-kicker">Latest</span>
        <h1 className="page-title">Updates</h1>
        <p className="page-subtitle">A quick stream of recent projects, milestones, and learning moments.</p>
      </div>

      {!hasUpdates ? (
        <div className="empty-update-state">
          <div className="empty-update-visual">
            <img src={publicAsset('/projects/update.png')} alt="No updates yet" />
          </div>
          <div className="empty-update-copy">
            <span className="page-kicker">No updates yet</span>
            <h2>New work and milestones will appear here.</h2>
          </div>
        </div>
      ) : (
        <div className="updates-feed">
          {updates.map((entry) => (
            <article className="update-item" key={`${entry.date}-${entry.title}`}>
              <div className="update-visual">
                <img src={entry.image || publicAsset('/projects/update.png')} alt={entry.title} />
              </div>
              <div className="update-date">{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              <div className="update-content">
                {entry.tag && <span className="update-tag">{entry.tag}</span>}
                <h3 className="update-title">{entry.title}</h3>
                <p className="update-description">{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
