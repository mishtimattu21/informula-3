
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Upload, Image, Sparkles, X } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Ingredient Safety Analyzer</h1>
            </div>
            <p className="text-purple-100 text-lg">
              Discover what's really in your products - scan, upload, or type ingredients to get detailed safety insights
            </p>
          </div>

          {/* Main Container */}
          <div className="bg-white dark:bg-gray-100 rounded-3xl p-8 shadow-2xl">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              <Button
                onClick={() => setSelectedTab('scan')}
                className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                  selectedTab === 'scan'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Camera className="w-5 h-5 mr-2" />
                📷 Scan/Camera
              </Button>
              <Button
                onClick={() => setSelectedTab('upload')}
                className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                  selectedTab === 'upload'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Upload className="w-5 h-5 mr-2" />
                📁 Upload Image
              </Button>
              <Button
                onClick={() => setSelectedTab('type')}
                className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                  selectedTab === 'type'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                ✏️ Type Ingredients
              </Button>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {/* Scan/Camera Tab */}
              {selectedTab === 'scan' && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Camera className="w-12 h-12 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Scan Ingredient Label</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Use your camera to scan product labels directly
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium">
                      <Camera className="w-5 h-5 mr-2" />
                      📷 Open Camera
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium">
                      <Image className="w-5 h-5 mr-2" />
                      🖼️ Choose from Gallery
                    </Button>
                  </div>
                </div>
              )}

              {/* Upload Image Tab */}
              {selectedTab === 'upload' && (
                <div className="py-8">
                  {!uploadedImage ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-purple-400 transition-colors duration-300">
                      <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        Drag & Drop or Click to Upload
                      </h3>
                      <p className="text-gray-500 mb-6">
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
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full cursor-pointer">
                          Choose File
                        </Button>
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={uploadedImage}
                        alt="Uploaded ingredient label"
                        className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                      />
                      <Button
                        onClick={removeImage}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
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
                <div className="py-4">
                  <Textarea
                    placeholder="Enter ingredients separated by commas... (e.g., Water, Sodium Lauryl Sulfate, Glycerin, Parabens)"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="min-h-[200px] text-lg border-2 border-gray-200 focus:border-purple-400 rounded-xl p-4"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Water', 'Glycerin', 'Sodium Lauryl Sulfate', 'Parabens', 'Fragrance'].map((ingredient) => (
                      <Button
                        key={ingredient}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const newIngredients = ingredients ? `${ingredients}, ${ingredient}` : ingredient;
                          setIngredients(newIngredients);
                        }}
                        className="border-gray-300 hover:border-purple-400 hover:text-purple-600"
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
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                disabled={!ingredients.trim() && !uploadedImage && selectedTab !== 'scan'}
              >
                <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                🔬 Analyze Ingredients
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
