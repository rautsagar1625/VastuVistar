import { motion } from "framer-motion";

export default function PageHero({ image, eyebrow, title, height = "480px" }) {
  return (
    <section data-testid="page-hero" className="relative overflow-hidden panel-navy" style={{ height, minHeight: 320 }}>
      {image && (
        <motion.img
          src={image}
          alt=""
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(28,36,49,0.94)_0%,rgba(28,36,49,0.72)_45%,rgba(10,77,224,0.40)_100%)]" />
      <div className="relative h-full mx-auto max-w-[1320px] px-6 flex flex-col justify-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="eyebrow text-white/70 mb-5"
          >
            {eyebrow}
          </motion.p>
        )}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display-heavy text-white text-[38px] md:text-[60px] leading-[1.02] max-w-3xl"
          >
            {title}
          </motion.h1>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 72 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="h-1 bg-amber mt-7"
        />
      </div>
    </section>
  );
}
