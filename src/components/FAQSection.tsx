import AccordionItem from './AccordionItem'
const FAQSection  = () => {

  const faqItems = [
    {
      question: 'What services does Evolo offer?',
      answer:
  'Evolo offers website design, website development, mobile optimization, SEO, digital marketing, hosting and domain management, website maintenance, content creation, branding, and graphic design.',
    },
  {
    question: 'What kind of businesses do you usually work with?',
    answer: 'We specialize in helping small to medium-sized businesses across various industries, including restaurants, gyms, salons, law firms, residential communities, and more.'
  },
  
  {
    question: 'How long does a typical project take?',
    answer: 'Most projects are completed within 3 to 6 weeks, depending on complexity and specific requirements.'
  },
  {
    question: 'Do you offer small, hourly-based services or minor edits?',
    answer: 'Yes, we’re flexible and happy to assist you with smaller tasks or updates.'
  }
,  
{
  question: 'How do payment and billing work?',
  answer: 'We typically request a deposit at project initiation and offer multiple convenient payment options including credit cards, checks, and digital transfers.'
}
,
{
  question: 'Can you collaborate with our current marketing or web team?',
  answer: 'Absolutely! We regularly work alongside existing teams to seamlessly integrate our services and achieve shared goals.'
}
,


  ]
  return (
    <section id="faq" className="relative bg-white/80">
    
      
      <div className="max-w-3xl mx-auto relative z-10 px-4">
        <h2 className="font-libre text-4xl md:text-6xl font-extrabold text-center mb-12 text-[#08183e] ">
          Frequently asked questions
        </h2>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  )
}
export default FAQSection
