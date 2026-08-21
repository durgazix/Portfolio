import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/portfolioData'

export function BlogPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 350)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = 'Blog | Durga Prasad Sahoo'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      const tag = document.createElement('meta')
      tag.name = 'description'
      tag.content = 'Read project notes, AI engineering thoughts, and product-building lessons from Durga Prasad Sahoo.'
      document.head.appendChild(tag)
    } else {
      metaDescription.content = 'Read project notes, AI engineering thoughts, and product-building lessons from Durga Prasad Sahoo.'
    }
  }, [])

  if (loading) {
    return (
      <div className="blog-shell">
        <div className="page-intro">
          <span className="page-kicker">Writing</span>
          <h1 className="page-title">Blog</h1>
        </div>
        <div className="loading-grid">
          <div className="loading-card" />
          <div className="loading-card" />
          <div className="loading-card" />
        </div>
      </div>
    )
  }

  return (
    <div className="blog-shell">
      <div className="page-intro">
        <span className="page-kicker">Writing</span>
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">Notes on product building, AI systems, and lessons from shipping tools that solve real problems.</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <img className="cover" src={post.coverImage} alt={post.title} loading="lazy" />
            <div className="blog-card-content">
              <div className="meta-row">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>{post.tags.length} tags</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="tags">
                {post.tags.map((tag) => (
                  <span className="tag" key={`${post.slug}-${tag}`}>{tag}</span>
                ))}
              </div>
              <Link className="blog-link" to={`/blog/${post.slug}`}>
                Read article <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function BlogPostPage() {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const post = useMemo(() => posts.find((entry) => entry.slug === slug), [slug])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 350)
    return () => window.clearTimeout(timer)
  }, [slug])

  useEffect(() => {
    if (!post) return
    document.title = `${post.title} | Durga Prasad Sahoo`
    const metaDescription = document.querySelector('meta[name="description"]')
    const description = post.excerpt
    if (!metaDescription) {
      const tag = document.createElement('meta')
      tag.name = 'description'
      tag.content = description
      document.head.appendChild(tag)
    } else {
      metaDescription.content = description
    }
  }, [post])

  if (loading) {
    return (
      <div className="blog-shell">
        <div className="loading-post">
          <div className="loading-post-card" />
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-shell">
        <div className="page-intro">
          <span className="page-kicker">Not found</span>
          <h1 className="page-title">This post could not be found.</h1>
          <Link className="return-link" to="/blog"><ArrowLeft size={16} /> Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-shell">
      <article className="blog-post">
        <div className="head">
          <span className="page-kicker">Article</span>
          <h1 className="page-title">{post.title}</h1>
          <div className="meta-row">
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <div className="tags">
              {post.tags.map((tag) => (
                <span className="tag" key={`${post.slug}-${tag}`}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <img className="cover" src={post.coverImage} alt={post.title} />
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link className="return-link" to="/blog"><ArrowLeft size={16} /> Back to Blog</Link>
      </article>
    </div>
  )
}

export default BlogPage
