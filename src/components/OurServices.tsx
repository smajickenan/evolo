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
    <div className="w-full min-h-screen bg-white/80 relative">
     

      {/* Hero Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-8 relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start pt-20">
          <div className="lg:w-1/2">
            <h1 className="font-libre text-[#08183e] text-4xl md:text-3xl lg:text-4xl xl:text-5xl ">
              DIGITAL MARKETING
              <br />
              AGENCY
              <br />
              SPECIALISING IN
              <br />
              <span className="text-[#08183e] font-libre ">
                LEAD GENERATION
                <br />
                AND
                <br />
                ECOMMERCE.
              </span>
            </h1>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#08183e]">
                Need more leads. Want to grow but don't know how. Not getting
                the ROAs you once were or need a new strategy. Sound familiar?
                You're not alone. We work with CEOs, GMs, CMOs and Marketing
                Managers all over World solving these exact problems with
                digital marketing solutions.
              </p>
              <p className="text-sm md:text-base text-[#08183e]">
                Evolo is a digital performance agency with an innate
                understanding of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Know You Section */}
      <section className="w-full relative overflow-hidden py-12 md:py-16 z-10">
        <div className="absolute left-0 top-0 w-[500px] h-full overflow-hidden">
          <div className="w-full h-[90%] rounded-r-full relative overflow-hidden">
            <AnimatedSection />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="ml-auto max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
              FRONTEND
              <br />
              <span className=" text-[#08183e] font-libre">DEVELOPMENT.</span>
            </h2>
            <p className="text-[#08183e] mt-6 text-lg md:text-xl">
              We believe in getting to know you, your industry, and your
              problem, intimately. We're obsessive about detail and that means
              better strategy and execution which means better outcomes for all.
            </p>
          </div>
        </div>
      </section>

      {/* Media Stack Section */}
      <section className="w-full relative overflow-hidden py-12 md:py-16 z-10">
        <div className="absolute right-0 top-0 w-[600px] h-full">
          <div className="w-full h-full rounded-l-full relative overflow-hidden">
            <AnimatedSection isRight={true} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
              THE COMPLETE
              <br />
              MEDIA STACK.
            </h2>
            <p className="mt-6 text-sm md:text-xl text-[#08183e]">
              Full stack marketing ensures you're not missing an opportunity or
              worse yet, being held to ransom by one channel. We build
              integrated marketing campaigns that deploy all the tools necessary
              to get the job done.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="w-full relative overflow-hidden py-12 md:py-16 z-10">
        <div className="absolute left-0 top-0 w-[600px] h-full">
          <div className="w-full h-full rounded-r-full relative overflow-hidden">
            <AnimatedSection />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="ml-auto max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
              PERFORMANCE
              <br />
              CAMPAIGNS THAT
              <br />
              CUT THROUGH.
            </h2>
            <p className="mt-6 text-sm md:text-xl text-[#08183e]">
              We develop performance campaigns with creative that cuts through.
              Smart targeting, mind bending, brilliantly strategic, direct
              response campaigns that convert.
            </p>
          </div>
        </div>
      </section>

      {/* Execute Section */}
      <section className="w-full relative overflow-hidden py-12 md:py-16 z-10">
        <div className="absolute right-0 top-0 w-[600px] h-full">
          <div className="w-full h-full rounded-l-full relative overflow-hidden">
            <AnimatedSection isRight={true} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#08183e] font-libre">
              THINK BIGGER
              <br />
             EXECUTE FASTER.
            </h2>
            <p className="mt-6 text-sm md:text-xl text-[#08183e]">
              Big ideas are only as good as your ability to execute them. It's
              why at April Ford we invest in people that deliver, not just talk.
              It's why we're all in-house, working together to deliver world
              class marketing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
