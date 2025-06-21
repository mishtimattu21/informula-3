
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              About <span className="gradient-text">IngredientIQ</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                We believe everyone deserves to know what's in the products they use. 
                Our mission is to democratize ingredient transparency through cutting-edge AI technology.
              </p>
              
              <p>
                Founded by a team of chemists, data scientists, and health advocates, 
                IngredientIQ combines scientific rigor with user-friendly design to make 
                complex ingredient analysis accessible to everyone.
              </p>
              
              <p>
                With over <span className="text-emerald-600 dark:text-emerald-400 font-semibold">50,000 products analyzed</span> and 
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> 15,000 happy users</span>, 
                we're building a safer, more transparent future for consumer products.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">99%</div>
                <div className="text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Available</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 rounded-3xl p-12 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mb-8 mx-auto animate-pulse-glow">
                  <span className="text-4xl text-white font-bold">IQ</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                  Our Vision
                </h3>
                <p className="text-emerald-700 dark:text-emerald-300">
                  A world where every consumer can make informed, safe choices about the products they use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
