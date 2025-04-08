import AccordionItem from './AccordionItem'
const FAQSection  = () => {

  const faqItems = [
    {
      question: 'What problems can you solve for me?',
      answer:
   'We help small businesses improve their online presence by redesigning outdated or underperforming websites. This includes making your site faster, mobile-friendly, modern-looking, and optimized for SEO and conversions. Whether your current website feels clunky, hard to navigate, or simply doesn’t represent your brand well — we’ll transform it into a professional and engaging experience that builds trust and brings in more customers.' },
   {
    question: 'What services do you offer?',
    answer: (
      <>
        <p>My services are simple and effective — I build websites that save time, generate revenue, and are easy to manage and scale.</p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Web Design</strong> – Clean, modern, and conversion-focused (Figma)</li>
          <li><strong>Web Development</strong> – Webflow, React, Tailwind CSS</li>
          <li><strong>E-Commerce</strong> – Scalable stores with Webflow E-commerce</li>
          <li><strong>Migration Services</strong> – WordPress, HubSpot, Squarespace → Webflow</li>
          <li><strong>SEO</strong> – On-page optimization for visibility</li>
          <li><strong>Analytics</strong> – Google Analytics & Hotjar setup</li>
          <li><strong>Reputation Management</strong> – Build and maintain online trust</li>
          <li><strong>Long-term Growth</strong> – Ongoing scaling, updates, and support</li>
        </ul>
        <p className="mt-4">Tools are just the means — I focus on results using proven systems that work.</p>
      </>
    )
  },
  
  {
    question: 'How long does a project usually take?',
    answer: (
      <>
        <p>Most projects typically take between <strong>2 to 4 weeks</strong>, depending on the size and complexity of the website.</p>
        <p>Smaller websites with just a few pages can be completed faster, while larger projects with custom features, animations, or e-commerce functionality may take a bit longer.</p>
        <p>I always aim to deliver on time without compromising quality — and I’ll keep you updated throughout the entire process so you know exactly where things stand.</p>
      </>
    )
  },
  {
    question: 'What industries do you have experience with?',
    answer: (
      <>
        <p>I’ve worked with a wide range of industries, which helps me understand different business needs and tailor websites accordingly.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Local service-based businesses</li>
          <li>Health & wellness (gyms, personal trainers, clinics)</li>
          <li>Real estate and property management</li>
          <li>E-commerce & retail</li>
          <li>Consulting and professional services</li>
          <li>Automotive industry (car services, dealerships)</li>
          <li>Creative and portfolio-based businesses</li>
          <li>Startups and tech-focused teams</li>
        </ul>
        <p className="mt-2">No matter the industry, our focus is always on creating a clean, user-friendly, and results-driven website that fits your brand and goals.</p>
      </>
    )
  }
,  
{
  question: 'Do you take on small hourly work?',
  answer: (
    <>
      <p>Yes, I do take on smaller hourly-based tasks — especially if they are clearly defined and time-sensitive.</p>
      <p>This includes things like quick website fixes, content updates, performance improvements, SEO adjustments, or consulting.</p>
      <p>However, for larger or ongoing work, I usually recommend setting up a fixed scope or a retainer model to keep things organized and efficient for both sides.</p>
    </>
  )
}
,
{
  question: 'What are the payment terms, how should I pay you?',
  answer: (
    <>
      <p>For most projects, I work with a simple and transparent payment structure.</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Fixed-price projects:</strong> Usually split into 2 or 3 milestones — for example, 50% upfront and 50% upon completion.</li>
        <li><strong>Hourly work:</strong> Tracked and billed weekly or bi-weekly, depending on the scope.</li>
        <li><strong>Ongoing work or retainers:</strong> Billed monthly with clearly defined deliverables.</li>
      </ul>
      <p className="mt-2">Payments can be made securely via PayPal, Wise, or bank transfer — whichever works best for you.</p>
    </>
  )
}
,
{
  question: 'Can you do graphic design and illustrations?',
  answer: (
    <>
      <p>Yes, I can help with graphic design needs such as banners, icons, social media visuals, and basic illustrations to support your website content and branding.</p>
      <p>For more advanced or custom illustration work, I collaborate with talented designers from my network to ensure high-quality and consistent visuals.</p>
      <p>So whether it’s something simple or more creative, I can make sure your visuals align perfectly with your brand and website style.</p>
    </>
  )
}
,
{
  question: 'Can you work with my existing web team?',
  answer: (
    <>
      <p>Absolutely! I'm very comfortable collaborating with existing web teams, whether it's designers, developers, marketers, or project managers.</p>
      <p>I can adapt to your team’s workflow, use shared tools (like Git, Trello, Figma, Slack, etc.), and focus on delivering high-quality results while maintaining clear and efficient communication.</p>
      <p>My goal is always to make the collaboration smooth and productive — whether I'm supporting your team or taking the lead on certain parts of the project.</p>
    </>
  )
}

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
