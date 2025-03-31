import { LinkPreview } from "./ui/LinkPreview";

const TechWeUse: React.FC = () => {{





    return (
        <section className="py-16 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-[#023157]/80 max-w-3xl mx-auto">
              Hover over each technology to learn more about our development stack.
            </p>
          </div>
          <LinkPreview />
        </div>
      </section>
      
     
      );


    
}}
export default TechWeUse