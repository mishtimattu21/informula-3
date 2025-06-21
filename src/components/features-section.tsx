
import { Brain, Camera, Database, Bell, FileDown, Smartphone, Zap, Users } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze thousands of ingredients in seconds',
    icon: Brain,
    large: true,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Smart Scanning',
    description: 'Instant ingredient extraction from any product label',
    icon: Camera,
    large: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Safety Database',
    description: '50,000+ ingredients with scientific safety ratings',
    icon: Database,
    large: false,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Personal Alerts',
    description: 'Custom notifications for your specific allergies and concerns',
    icon: Bell,
    large: false,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Export Reports',
    description: 'Download detailed analysis reports for your records',
    icon: FileDown,
    large: false,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Mobile App',
    description: 'Scan products on-the-go with our mobile application',
    icon: Smartphone,
    large: false,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Real-time Updates',
    description: 'Latest research and regulatory changes instantly reflected',
    icon: Zap,
    large: false,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Community Insights',
    description: 'Join thousands making informed choices about product safety',
    icon: Users,
    large: true,
    gradient: 'from-pink-500 to-rose-500'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to make informed decisions about the products you use every day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover-lift transition-all duration-500 cursor-pointer ${
                  feature.large ? 'md:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-20`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to experience the power?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join thousands of users making safer choices every day.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Try All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
