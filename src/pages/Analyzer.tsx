
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Upload, Sparkles, X } from 'lucide-react';

const Analyzer = () => {
  const [selectedTab, setSelectedTab] = useState('scan');
  const [ingredients, setIngredients] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-black dark:via-gray-900 dark:to-emerald-950">
      <Navigation />
      
      {/* Animated background elements matching landing page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
                Ingredient <span className="gradient-text">Analyzer</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover what's really in your products - scan, upload, or type ingredients to get detailed safety insights
            </p>
          </div>

          {/* Main Container */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-800/50">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                onClick={() => setSelectedTab('scan')}
                className={`flex-1 py-6 px-6 rounded-2xl font-semibold text-base transition-all duration-300 ${
                  selectedTab === 'scan'
                    ? 'bg-emerald-600 text-white shadow-lg hover:bg-emerald-700'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Camera className="w-5 h-5 mr-3" />
                Scan/Camera
              </Button>
              <Button
                onClick={() => setSelectedTab('upload')}
                className={`flex-1 py-6 px-6 rounded-2xl font-semibold text-base transition-all duration-300 ${
                  selectedTab === 'upload'
                    ? 'bg-emerald-600 text-white shadow-lg hover:bg-emerald-700'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Upload className="w-5 h-5 mr-3" />
                Upload Image
              </Button>
              <Button
                onClick={() => setSelectedTab('type')}
                className={`flex-1 py-6 px-6 rounded-2xl font-semibold text-base transition-all duration-300 ${
                  selectedTab === 'type'
                    ? 'bg-emerald-600 text-white shadow-lg hover:bg-emerald-700'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Type Ingredients
              </Button>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {/* Scan/Camera Tab */}
              {selectedTab === 'scan' && (
                <div className="text-center py-16">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Camera className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Scan Ingredient Label</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto text-lg">
                    Use your camera to scan product labels directly
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <Camera className="w-5 h-5 mr-2" />
                      Open Camera
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Choose from Gallery
                    </Button>
                  </div>
                </div>
              )}

              {/* Upload Image Tab */}
              {selectedTab === 'upload' && (
                <div className="py-8">
                  {!uploadedImage ? (
                    <div className="border-2 border-dashed border-emerald-300 dark:border-emerald-700 rounded-3xl p-16 text-center hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors duration-300 bg-emerald-50/50 dark:bg-emerald-950/50">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Upload className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Drag & Drop or Click to Upload
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                        Support for JPG, PNG, and other image formats
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full cursor-pointer font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                          Choose File
                        </Button>
                      </label>
                    </div>
                  ) : (
                    <div className="relative max-w-md mx-auto">
                      <img
                        src={uploadedImage}
                        alt="Uploaded ingredient label"
                        className="w-full rounded-2xl shadow-lg"
                      />
                      <Button
                        onClick={removeImage}
                        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg"
                        size="sm"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Type Ingredients Tab */}
              {selectedTab === 'type' && (
                <div className="py-6">
                  <Textarea
                    placeholder="Enter ingredients separated by commas... (e.g., Water, Sodium Lauryl Sulfate, Glycerin, Parabens)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="min-h-[240px] text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-600 rounded-2xl p-6 bg-white dark:bg-gray-800 resize-none"
                  />
                  <div className="mt-6 flex flex-wrap gap-3">
                    {['Water', 'Glycerin', 'Sodium Lauryl Sulfate', 'Parabens', 'Fragrance'].map((ingredient) => (
                      <Button
                        key={ingredient}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newIngredients = ingredients ? `${ingredients}, ${ingredient}` : ingredient;
                          setIngredients(newIngredients);
                        }}
                        className="border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-full px-4 py-2 font-medium transition-all duration-300"
                      >
                        + {ingredient}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Analyze Button */}
            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 group animate-pulse-glow"
                disabled={!ingredients.trim() && !uploadedImage && selectedTab !== 'scan'}
              >
                <Sparkles className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Analyze Ingredients
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
