import { motion } from 'framer-motion';
import { MOCK_PROJECTS } from '../data/business';
import { Sun, Home, Building2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Residential: Home,
  Commercial: Building2,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-warm-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-800 mb-4">
            Our Projects
          </h2>
          <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
            Solar installations across Kakinada and surrounding areas
          </p>
          <p className="text-warm-gray-400 text-sm mt-2 italic">
            Project showcase — actual project photos will be updated
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {MOCK_PROJECTS.map((project) => {
            const IconComp = iconMap[project.type] || Sun;
            return (
              <motion.div
                key={project.id}
                variants={item}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-solar-blue/10 to-solar-amber/10 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-solar-blue/10 flex items-center justify-center">
                    <IconComp className="w-8 h-8 text-solar-blue" />
                  </div>
                  <span className="absolute top-3 right-3 bg-solar-amber text-warm-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {project.capacity}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-solar-amber uppercase tracking-wider">
                    {project.type}
                  </span>
                  <h3 className="font-semibold text-warm-gray-800 mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-warm-gray-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
