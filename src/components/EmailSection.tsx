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
    <section className="relative text-center py-32 bg-white/80">
     
      
      <div className="relative z-10">
        <p className="text-[#08183e] font-semibold text-xl mb-4">
          Need more answers? Feel free to emailus at:
        </p>
       <div className="inline-flex items-center  bg-[#08183e]  text-white rounded-md px-4 py-2 border border-gray-700/50 w-[50vw] max-w-[15vw]">
 <span className="mr-3  text-[white] font-semibold">{email}</span>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Copy email to clipboard"
          >
            {copied ? (
              <CheckIcon className="w-5 h-5 text-green-400" />
            ) : (
              <ClipboardIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
       <CTASection />
    </section>
  )
}
export default EmailSection
