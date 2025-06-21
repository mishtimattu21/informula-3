
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const educationalQuotes = [
  "Overconsumption of salt can kill you!",
  "Hidden chemicals in cosmetics affect hormones",
  "Natural doesn't always mean safer",
  "Your skin absorbs 60% of what you apply",
  "Parabens may disrupt your endocrine system",
  "Some fragrances contain toxic compounds"
];

export function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % educationalQuotes.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-black dark:via-gray-900 dark:to-emerald-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Dynamic Quote Display - Properly positioned */}
        <div className="mb-12">
          <div
            className={`transition-all duration-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <p className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
              ⚠️ {educationalQuotes[currentQuote]}
            </p>
          </div>
        </div>

        {/* Main Headlines */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Decode</span>{' '}
            <span className="gradient-text">What You Use</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            AI-powered ingredient analysis for cosmetics, food, and personal care products. 
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> Make informed decisions</span> about what you put on and in your body.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mb-12 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">50K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Products Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">15K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse-glow group"
            asChild
          >
            <Link to="/analyzer">
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              DECODE NOW
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-600 hover:text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>

        {/* 3D Mockup placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800 hover-lift">
            <div className="aspect-video bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <p className="text-emerald-700 dark:text-emerald-300 font-semibold">Interactive Demo Coming Soon</p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-2">Scan • Analyze • Decide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
