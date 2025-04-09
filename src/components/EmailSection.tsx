import  { useState } from 'react'
import { ClipboardIcon, CheckIcon } from 'lucide-react'
import CTASection from './CTASection'
const EmailSection = () => {
  const [copied, setCopied] = useState(false)
  const email = 'eli.jerome2@gmail.com'
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <section className="relative text-center pb-14 pt-32 bg-white/80">
     
      
      
       <CTASection />
    </section>
  )
}
export default EmailSection
