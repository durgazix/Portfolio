import { ArrowUp, Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('')
  function submit(event) { event.preventDefault(); onSubmit(value); setValue('') }
  return <form className="search-bar" onSubmit={submit}><Search size={19} /><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Ask about my work, or search a section..." aria-label="Ask about my portfolio" /><button type="submit" aria-label="Send question"><ArrowUp size={18} /></button></form>
}
