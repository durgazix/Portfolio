import { publicAsset } from '../publicAsset'

export const home = {
  type: 'home',
  title: 'Hello, I’m Durga Prasad Sahoo.',
  body: 'A Full-Stack AI Engineer building practical machine learning, generative AI, and full-stack applications with Python, React, Node.js, Flask, RAG, LangChain, and OpenAI.',
  prompts: ['Show me your projects', 'Tell me about your AI experience', 'How can I contact you?'],
}

export const fallback = {
  type: 'fallback',
  title: 'Let’s narrow that down.',
  body: 'Try asking about my projects, experience, or how to reach me.',
  prompts: ['Show me your projects', 'Tell me about your experience', 'How can I contact you?'],
}

export const about = {
  type: 'about',
  title: 'Full-Stack AI Engineer',
  body: 'I build end-to-end AI solutions, REST APIs, and full-stack products. My work spans machine learning, deep learning, generative AI, LLM applications, agentic workflows, and responsive web interfaces. I achieved 0.96 ROC AUC on an ML classification project.',
  skills: ['Python', 'JavaScript', 'React.js', 'Node.js', 'Flask', 'Machine Learning', 'RAG', 'LangChain', 'LangGraph', 'OpenAI', 'MongoDB', 'PostgreSQL', 'Streamlit', 'TensorFlow', 'FAISS'],
}

export const projects = [
  { title: 'DevOps Graph Wexa AI', description: 'An AI-powered DevOps knowledge platform that connects engineering data, services, and workflows in a searchable graph to help teams understand systems, investigate issues, and make faster operational decisions.', tech: ['Python', 'AI', 'Knowledge Graph', 'DevOps', 'Streamlit'], images: [publicAsset('/projects/field-notes.svg')], live: 'https://devopsgraphwexaai.vercel.app/', github: 'https://github.com/durgazix/devopsgraphwexaai' },
  { title: 'Auto Insurance Fraud Claim Detection', description: 'Built an end-to-end Random Forest pipeline for imbalanced claim data, reaching 88.42% accuracy and 0.96 ROC AUC. Deployed a Streamlit risk-scoring app and analytics dashboard.', tech: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'NumPy', 'Streamlit'], images: [publicAsset('/projects/field-notes.svg')], live: '#', github: 'https://github.com/durgazix/Auto_Insurance_Fraud_Claim' },
  { title: 'Customer Refund Management using Agentic AI', description: 'Built a full-stack support platform using RAG and LLM agents for refund eligibility and customer conversations, with voice workflows and real-time agent monitoring.', tech: ['React.js', 'MongoDB', 'RAG', 'OpenAI', 'LangChain', 'LangGraph'], images: [publicAsset('/projects/northstar.svg')], live: '#', github: 'https://github.com/durgazix/Customer-Support-Agent' },
  { title: 'Nova Stay — AI Reservation System', description: 'Created a Flask hotel operations assistant with context-aware chat, booking confirmation, GST-compliant invoices, and stay-duration calculations across 50+ scenarios.', tech: ['Python', 'Flask', 'RAG', 'GenAI', 'ChromaDB', 'Hugging Face'], images: [publicAsset('/projects/mori-studio.svg')], live: '#', github: 'https://github.com/durgazix/Nova_Stay' },
  { title: 'Uber Application', description: 'Built a real-time rider and driver platform with JWT authentication, Socket.IO communication, and Dijkstra-based optimal route calculation.', tech: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js',('Python'), ('Flask'), ('RAG'), ('GenAI'), ('ChromaDB'), ('Hugging Face')], images: [publicAsset('/projects/northstar.svg')], live: '#', github: 'https://github.com/durgazix/Uber-App' },
]

export const experience = [
  { role: 'Full Stack Developer & AI Engineer Intern', company: 'Sonydig Technology Pvt. Ltd.', dates: 'Dec 2025 — Mar 2026', points: ['Implemented structured data handling, input validation, and optimized MySQL queries for a Government Odisha State Archaeology project.', 'Developed a SaaS AI E-Office platform with an AI chatbot, OCR document processing, and image generation.', 'Researched and fine-tuned a custom Stable Diffusion model.'] },
  { role: 'MERN Developer Intern', company: 'Vanur-Tech Media Pvt. Ltd.', dates: 'May 2025 — Jun 2025', points: ['Rebuilt an LMS interface with reusable React components and improved cross-device accessibility.', 'Worked with a three-person team to optimize rendering and responsiveness across mobile, tablet, and desktop.'] },
]

export const contact = {
  type: 'contact',
  title: 'Let’s build something intelligent.',
  body: 'I’m open to opportunities involving AI engineering, machine learning, generative AI, and full-stack product development.',
  email: 'durgaprasadsahoo171@gmail.com',
  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/durgaprasadsahoo171/' }, { label: 'GitHub', href: 'https://github.com/durgazix' }, { label: 'LeetCode', href: 'https://leetcode.com/u/durgazix_06/' }],
}

export const findMe = {
  type: 'find-me',
  title: 'Find me online',
  body: 'These are the only verified places to find me. Add your personal profile URLs below when ready; the Google link remains scoped to the allowed sources.',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/durgaprasadsahoo171/' },
    { label: 'Instagram', href: 'https://www.instagram.com/_.laden.__.666._/' },
    { label: 'Google search', href: 'https://www.google.com/search?q=%22Durga+Prasad+Sahoo%22+(site%3Alinkedin.com+OR+site%3Ainstagram.com)' },
  ],
}

export const resume = { type: 'resume', title: 'My resume', file: publicAsset('/resume.pdf') }

export const posts = [
  {
    slug: 'ai-operations-lab',
    title: 'Designing a practical AI operations lab',
    coverImage: publicAsset('/projects/northstar.svg'),
    excerpt: 'A simple blueprint for stitching LLM pipelines, observability, and team workflows into a real operating system for AI projects.',
    date: '2026-08-18',
    tags: ['AI', 'Workflow', 'Leadership'],
    content: `
      <h2>Building an AI ops loop that does not break under real work</h2>
      <p>Most AI projects fail not because the model is weak, but because the operating model around it is noisy. I’ve found that a good implementation needs clarity around prompts, data boundaries, and feedback loops.</p>
      <p>My approach is to treat the model as a tool inside a structured system: a clear prompt contract, measurable output checks, and a simple human review path when confidence drops.</p>
      <h3>What matters in practice</h3>
      <ul>
        <li>Define success as a product outcome, not a model benchmark.</li>
        <li>Track prompt variation and retrieval quality with the same seriousness as application metrics.</li>
        <li>Keep a review loop for edge cases and noisy user requests.</li>
      </ul>
      <pre><code>if confidence &lt; threshold:
  route_to_human_review()
else:
  return_response_with_trace()</code></pre>
      <p>That combination makes AI feel more like infrastructure than magic.</p>
    `,
  },
  {
    slug: 'full-stack-ai-product',
    title: 'Shipping a full-stack AI product from idea to prototype',
    coverImage: publicAsset('/projects/mori-studio.svg'),
    excerpt: 'A behind-the-scenes look at the architecture, UX choices, and tradeoffs that matter when building AI features for people.',
    date: '2026-08-07',
    tags: ['Product', 'React', 'AI'],
    content: `
      <h2>From concept to user-facing prototype</h2>
      <p>When building AI products, the main challenge is usually not model quality; it is creating an experience that users trust and understand.</p>
      <p>I focus on three levers: concise UI, explicit guardrails, and transparent system behavior. The interface should explain what is happening without overwhelming the user.</p>
      <h3>Architecture pattern</h3>
      <ol>
        <li>Collect structured inputs from the frontend.</li>
        <li>Route requests through a backend validation layer.</li>
        <li>Perform retrieval or tool execution and return a bounded response.</li>
      </ol>
      <p>Once the workflow is stable, the next step is tuning for clarity and confidence. The product becomes easier to trust when the user sees the right signals.</p>
    `,
  },
  {
    slug: 'learning-by-building',
    title: 'Why learning by building has been the fastest path',
    coverImage: publicAsset('/projects/field-notes.svg'),
    excerpt: 'I keep returning to this principle: real constraints create better engineering instincts than theory alone.',
    date: '2026-07-21',
    tags: ['Learning', 'Engineering'],
    content: `
      <h2>The best engineering lessons come from real constraints</h2>
      <p>My favorite projects are the ones that force decisions about scale, reliability, and user trust early. These constraints teach faster than any course or tutorial.</p>
      <p>When I build an app, I try to answer: what breaks when users actually use this? What happens under poor data? What if the model hallucinates? What if the UI is confusing?</p>
      <p>That mindset turns each project into a system-level learning exercise.</p>
    `,
  },
]

export const updates = []
