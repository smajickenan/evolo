import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/FlipWords";

const AnimatedSection = ({ isRight = false }) => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(155deg, #FF3366 0%, #FF9933 15%, #FFCC33 30%, #9933FF 50%, #FF3366 65%, #33CCFF 80%, #FF3366 95%)",
            "linear-gradient(155deg, #33CCFF 0%, #FF3366 15%, #FF9933 30%, #FFCC33 50%, #9933FF 65%, #FF3366 80%, #33CCFF 95%)",
            "linear-gradient(155deg, #9933FF 0%, #33CCFF 15%, #FF3366 30%, #FF9933 50%, #FFCC33 65%, #9933FF 80%, #33CCFF 95%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  );
};

export const OurServices = () => {
  return (
    <div id="services" className="w-full min-h-screen bg-white/80 relative">
      {/* Hero Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start pt-20">
          <div className="lg:w-1/2">
            <h1 className="font-libre text-[#08183e] text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              FULL
              <br />
              DIGITAL
              <br />
              <span className="text-[#08183e] font-libre">
                PRESENCE
                <br />
                MANAGEMENT
              </span>
            </h1>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#08183e]">
                Evolo provides complete website services from design and development to SEO and digital marketing, ensuring your business is represented flawlessly online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-[10px] md:gap-0">
        {/* Face to Face */}
        <section className="w-full h-[350px] md:h-auto md:py-12 lg:py-16 relative overflow-hidden z-10">
          <div className="absolute left-0 top-0 w-full md:w-[500px] h-full overflow-hidden">
            <div className="w-full h-full rounded-r-full relative overflow-hidden">
              <AnimatedSection />
            </div>
          </div>
          <div className="w-full h-full px-6 md:px-12 lg:px-20 relative z-10 flex items-center">
            <div className="ml-auto max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
                FACE-TO-FACE
                <br />
                <span className="text-[#08183e] font-libre">PARTNERSHIP</span>
              </h2>
              <p className="text-[#08183e] mt-6 text-lg md:text-xl">
                We believe in personal interactions and clear communication. Meet directly with our US-based team to bring your website vision to life exactly as you imagine it.
              </p>
            </div>
          </div>
        </section>

        {/* Customized Solutions */}
        <section className="w-[110vw] h-[350px] md:h-auto md:py-12 lg:py-16 relative overflow-hidden z-10">
          <div className="absolute right-0 top-0 w-full md:w-[600px] h-full">
            <div className="w-full h-full rounded-l-full relative overflow-hidden">
              <AnimatedSection isRight={true} />
            </div>
          </div>
          <div className="w-full h-full px-6 md:px-12 lg:px-20 relative z-10 flex items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
                CUSTOMIZED SOLUTIONS
              </h2>
              <p className="text-[#08183e] mt-6 text-lg md:text-xl">
                Every project at Evolo is unique. We tailor your website specifically to meet your business needs, ensuring it's both beautiful and highly functional.
              </p>
            </div>
          </div>
        </section>

        {/* Results-Driven */}
        <section className="w-full h-[350px] md:h-auto md:py-12 lg:py-16 relative overflow-hidden z-10">
          <div className="absolute left-0 top-0 w-full md:w-[500px] h-full overflow-hidden">
            <div className="w-full h-full rounded-r-full relative overflow-hidden">
              <AnimatedSection />
            </div>
          </div>
          <div className="w-full h-full px-6 md:px-12 lg:px-20 relative z-10 flex items-center">
            <div className="ml-auto max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
                RESULTS-DRIVEN APPROACH
              </h2>
              <p className="text-[#08183e] mt-6 text-lg md:text-xl">
                We don't just create websites—we create business growth tools that attract customers, boost visibility, and drive sales.
              </p>
            </div>
          </div>
        </section>

        {/* Transparent Pricing */}
        <section className="w-full h-[350px] md:h-auto md:py-12 lg:py-16 relative overflow-hidden z-10">
          <div className="absolute right-0 top-0 w-full md:w-[600px] h-full">
            <div className="w-full h-full rounded-l-full relative overflow-hidden">
              <AnimatedSection isRight={true} />
            </div>
          </div>
          <div className="w-full h-full px-6 md:px-12 lg:px-20 relative z-10 flex items-center">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
                TRANSPARENT PRICING
                <br />
                & PROCESS
              </h2>
              <p className="text-[#08183e] mt-6 text-lg md:text-xl">
                No hidden fees or mysterious workflows. We provide clear project timelines, straightforward pricing, and regular updates so you always know what's happening with your website investment.
              </p>
            </div>
          </div>
        </section>

        {/* Ongoing Support */}
        <section className="w-full h-[350px] md:h-auto md:py-12 lg:py-16 relative overflow-hidden z-10">
          <div className="absolute left-0 top-0 w-full md:w-[600px] h-full">
            <div className="w-full h-full rounded-r-full relative overflow-hidden">
              <AnimatedSection />
            </div>
          </div>
          <div className="w-full h-full px-6 md:px-12 lg:px-20 relative z-10 flex items-center">
            <div className="ml-auto max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
                ONGOING SUPPORT
                <br />
                & GROWTH PARTNERSHIP
              </h2>
              <p className="text-[#08183e] mt-6 text-lg md:text-xl">
                Your success doesn't end at launch. We offer dedicated post-launch support and guidance to help your online presence evolve with your business goals, ensuring long-term digital success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
