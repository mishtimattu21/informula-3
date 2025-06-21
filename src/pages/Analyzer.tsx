
import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, Type, Download, Share, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

const Analyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [overallScore, setOverallScore] = useState(0);

  const mockIngredients = [
    { name: 'Water (Aqua)', safety: 'safe', description: 'Universal solvent, completely safe' },
    { name: 'Sodium Lauryl Sulfate', safety: 'caution', description: 'Can cause skin irritation in sensitive individuals' },
    { name: 'Glycerin', safety: 'safe', description: 'Natural humectant, safe for all skin types' },
    { name: 'Parabens (Methylparaben)', safety: 'moderate', description: 'Preservative with potential endocrine effects' },
    { name: 'Fragrance (Parfum)', safety: 'caution', description: 'May contain allergens, not fully disclosed' },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      setOverallScore(75);
    }, 3000);
  };

  const getSafetyColor = (safety: string) => {
    switch (safety) {
      case 'safe': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'moderate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'caution': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSafetyIcon = (safety: string) => {
    switch (safety) {
      case 'safe': return <CheckCircle className="w-4 h-4" />;
      case 'moderate': return <AlertCircle className="w-4 h-4" />;
      case 'caution': return <AlertTriangle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Ingredient <span className="gradient-text">Analyzer</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Panel 1: Input Methods */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Input Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="scan" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="scan" className="flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Scan
                    </TabsTrigger>
                    <TabsTrigger value="upload" className="flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload
                    </TabsTrigger>
                    <TabsTrigger value="type" className="flex items-center gap-2">
                      <Type className="w-4 h-4" />
                      Type
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="scan" className="mt-6">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <div className="text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">Camera Preview</p>
                        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Start Scanning</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upload" className="mt-6">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 dark:text-gray-400">Drag & Drop or Click to Upload</p>
                        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Choose File</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="type" className="mt-6">
                    <Textarea
                      placeholder="Enter ingredients separated by commas..."
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      className="min-h-[200px]"
                    />
                    <Button 
                      onClick={handleAnalyze}
                      className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                      disabled={!ingredients.trim() || isAnalyzing}
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Ingredients'}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Panel 2: Processing & Results */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                {isAnalyzing && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">Analyzing ingredients...</p>
                    </div>
                    <Progress value={33} className="w-full" />
                  </div>
                )}

                {analysisComplete && (
                  <div className="space-y-4">
                    {mockIngredients.map((ingredient, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${getSafetyColor(ingredient.safety)}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{ingredient.name}</span>
                          <div className="flex items-center gap-1">
                            {getSafetyIcon(ingredient.safety)}
                            <Badge variant="outline" className={getSafetyColor(ingredient.safety)}>
                              {ingredient.safety}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{ingredient.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {!isAnalyzing && !analysisComplete && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Type className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Enter ingredients to start analysis</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Panel 3: Insights & Actions */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Insights & Actions</CardTitle>
              </CardHeader>
              <CardContent>
                {analysisComplete && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900 rounded-full"></div>
                        <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-emerald-600">{overallScore}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Safety Score</h3>
                      <p className="text-gray-600 dark:text-gray-400">Generally Safe with Minor Concerns</p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Recommendations</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-2 space-y-1">
                          <li>• Consider sulfate-free alternatives</li>
                          <li>• Patch test before full use</li>
                          <li>• Avoid if you have sensitive skin</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <h4 className="font-medium text-emerald-800 dark:text-emerald-200">Alternative Products</h4>
                        <ul className="text-sm text-emerald-700 dark:text-emerald-300 mt-2 space-y-1">
                          <li>• CeraVe Gentle Cleanser</li>
                          <li>• Vanicream Gentle Facial Cleanser</li>
                          <li>• Neutrogena Ultra Gentle</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                )}

                {!analysisComplete && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Analysis results will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
