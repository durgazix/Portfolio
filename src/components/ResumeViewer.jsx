import { Download, ExternalLink, FileText } from 'lucide-react'
import { useState } from 'react'
import { publicAsset } from '../publicAsset'

export default function ResumeViewer({ mode = 'inline', file = publicAsset('/resume.pdf') }) {
  const [loaded, setLoaded] = useState(false)
  return <div className={`resume-viewer ${mode}`}>
    <div className="resume-actions"><span><FileText size={16} /> PDF resume</span><div><a href={file} download><Download size={14} /> Download</a><a href={file} target="_blank" rel="noreferrer"><ExternalLink size={14} /> Open in new tab</a></div></div>
    {!loaded && <div className="resume-skeleton" aria-label="Loading resume"><span /><span /><span /></div>}
    <iframe title="Durga Prasad Sahoo resume" src={file} onLoad={() => setLoaded(true)} className={loaded ? 'loaded' : ''} />
    {mode === 'inline' && <a className="resume-full-link" href={file} target="_blank" rel="noreferrer">View full page</a>}
  </div>
}
