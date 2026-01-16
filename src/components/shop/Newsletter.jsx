import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <section className="w-screen py-16 md:py-20 bg-[#E9DBCF]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-serif text-[#5A3E2B] mb-4">
            Stay Inspired
          </h2>
          <p className="text-[#8A6F5A] mb-8 text-lg">
            Subscribe to receive updates on new arrivals, exclusive offers, and design <br/> inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#FBF9F6] border border-border focus:border-foreground outline-none transition-colors text-[#9A8A7A] placeholder:text-[#9A8A7A]"
              required
            />
            <button
              type="submit"
              className="bg-[#2B2622] text-white px-8 flex items-center justify-center gap-2 group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;