import AccordionItem from './AccordionItem'
const FAQSection  = () => {

  const faqItems = [
    {
      question: 'What problems can you solve for me?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'What services do you offer?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'How much can I expect to pay?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'How long does a project usually take?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'What industries do you have experience with?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'Do you take on small hourly work?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'What are the payment terms, how should I pay you?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'Can you do graphic design and illustrations?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      question: 'Can you work with my existing web team?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ]
  return (
    <section className="relative bg-white/80">
    
      
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
