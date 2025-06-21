
import { useState } from 'react';
import { Scan, Search, Shield, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Scan/Upload Product Label',
    description: 'Simply take a photo of your product label or upload an image. Our AI will instantly extract all ingredients.',
    icon: Scan,
    color: 'emerald',
    delay: 0
  },
  {
    id: 2,
    title: 'AI Extracts Ingredients',
    description: 'Advanced OCR and machine learning identify and categorize every ingredient with 99% accuracy.',
    icon: Search,
    color: 'emerald',
    delay: 200
  },
  {
    id: 3,
    title: 'Get Safety Analysis',
    description: 'Comprehensive safety ratings based on scientific research, regulatory data, and toxicology studies.',
    icon: Shield,
    color: 'emerald',
    delay: 400
  },
  {
    id: 4,
    title: 'Make Informed Decisions',
    description: 'Receive personalized recommendations and alternative product suggestions tailored to your needs.',
    icon: CheckCircle,
    color: 'emerald',
    delay: 600
  }
];

export function StepsSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="steps" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Four simple steps to decode the safety of any product. 
            Our AI-powered analysis takes seconds, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`relative group cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${step.delay}ms` }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-transparent transform translate-x-4 z-0"></div>
                )}

                {/* Step Card */}
                <div className={`relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 transition-all duration-300 hover-lift ${
                  hoveredStep === step.id 
                    ? 'border-emerald-500 shadow-xl glow-emerald' 
                    : 'border-gray-200 dark:border-gray-800 shadow-lg'
                }`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    hoveredStep === step.id 
                      ? 'bg-emerald-600 scale-110' 
                      : 'bg-emerald-100 dark:bg-emerald-900/50'
                  }`}>
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredStep === step.id 
                        ? 'text-white'
                        : 'text-emerald-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover indicator */}
                  <div className={`absolute inset-0 bg-emerald-500/5 rounded-2xl transition-opacity duration-300 ${
                    hoveredStep === step.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to decode your first product?
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            Start Analysis
          </button>
        </div>
      </div>
    </section>
  );
}
