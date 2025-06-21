
import { Camera, Brain, Shield, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Scan/Upload Product Label',
    description: 'Take a photo or upload an image of any product ingredient list',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI Extracts Ingredients',
    description: 'Our advanced AI instantly recognizes and processes all ingredients',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Get Safety Analysis',
    description: 'Receive detailed safety ratings and potential health impacts',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: CheckCircle,
    title: 'Make Informed Decisions',
    description: 'Choose products that align with your health and safety preferences',
    gradient: 'from-emerald-500 to-green-500'
  }
];

export function StepsSection() {
  return (
    <section id="steps" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How to <span className="gradient-text">Decode</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simple steps to understand what's really in your products
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-500 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
