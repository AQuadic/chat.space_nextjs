"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const MultipleWhatsappHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="container flex flex-wrap justify-between gap-8 xl:gap-0 pt-[50px] pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={contentVariants}>
        <motion.h1
          className="text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] capitalize"
          variants={contentVariants}
        >
          Connect Multiple <br />{" "}
          <span className="text-[#22C55E]">WhatsApp</span> Numbers to <br />{" "}
          Your Wati Account
        </motion.h1>
        <motion.p
          className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl leading-[150%] font-normal capitalize mt-4 md:mt-8 lg:mt-11"
          variants={contentVariants}
        >
          Unify sales, support, and marketing numbers—cut costs,{" "}
          <br className="hidden sm:block" /> speed up responses, and scale
          effortlessly.
        </motion.p>
        <motion.div
          className="w-full max-w-[201px] h-[50px] sm:h-[60px] bg-[#10B981] rounded-[8px] flex items-center justify-center mt-6 md:mt-8 cursor-pointer hover:bg-[#0d9668] transition-colors"
          style={{ boxShadow: "0px 10px 15px 0px #0000001A" }}
          variants={contentVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-[#FFFFFF] text-base sm:text-lg font-semibold">
            Start Free Trial
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="relative" variants={imageVariants}>
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/multipleWhatsapphero.png"
            alt="hero"
            width={592}
            height={384}
            className="z-10 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[592px] h-auto"
          />
        </motion.div>
        <Image
          src="/images/solution/blueFrame.png"
          alt="blue frame"
          width={572}
          height={394}
          className="md:block hidden absolute top-2.5 left-10 -z-10 w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[572px] h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default MultipleWhatsappHero;
