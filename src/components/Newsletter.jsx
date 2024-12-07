import { motion } from 'framer-motion'
import { FaNewspaper } from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div name="newsletter" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Newsletter</p>
          <p className="py-4">Stay updated with my latest projects and tech insights</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#112240] p-8 rounded-lg shadow-xl mt-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <FaNewspaper className="text-secondary text-4xl" />
            <h3 className="text-2xl font-bold text-textPrimary">Subscribe to My Newsletter</h3>
          </div>
          <p className="text-textSecondary mb-6">
            Get exclusive content, project updates, and tech tips delivered straight to your inbox.
            No spam, unsubscribe at any time.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-lg bg-primary border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
          <p className="text-textSecondary text-sm mt-4">
            By subscribing, you agree to receive email communications from me.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Newsletter