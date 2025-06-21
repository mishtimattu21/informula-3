import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, CheckCircle, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OnboardingData {
  age: string;
  gender: string;
  allergies: string[];
  customAllergies: string[];
  skinType: string;
  avoiding: string[];
  customAvoiding: string[];
  medications: string[];
  customMedications: string[];
  healthConditions: string[];
  customHealthConditions: string[];
  concerns: string[];
  customConcerns: string[];
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    age: '',
    gender: '',
    allergies: [],
    customAllergies: [],
    skinType: '',
    avoiding: [],
    customAvoiding: [],
    medications: [],
    customMedications: [],
    healthConditions: [],
    customHealthConditions: [],
    concerns: [],
    customConcerns: []
  });

  const [customInputs, setCustomInputs] = useState({
    allergy: '',
    avoiding: '',
    medication: '',
    healthCondition: '',
    concern: ''
  });

  const addCustomItem = (category: keyof typeof customInputs, listKey: keyof OnboardingData) => {
    const value = customInputs[category].trim();
    if (value) {
      setData(prev => ({
        ...prev,
        [listKey]: [...(prev[listKey] as string[]), value]
      }));
      setCustomInputs(prev => ({ ...prev, [category]: '' }));
    }
  };

  const removeCustomItem = (category: keyof OnboardingData, index: number) => {
    setData(prev => ({
      ...prev,
      [category]: (prev[category] as string[]).filter((_, i) => i !== index)
    }));
  };

  const questions = [
    {
      title: "What's your age range?",
      content: (
        <RadioGroup value={data.age} onValueChange={(value) => setData({...data, age: value})}>
          {['18-25', '26-35', '36-45', '46-55', '56-65', '65+'].map((age) => (
            <div key={age} className="flex items-center space-x-2">
              <RadioGroupItem value={age} id={age} />
              <Label htmlFor={age} className="text-lg">{age}</Label>
            </div>
          ))}
        </RadioGroup>
      )
    },
    {
      title: "What's your gender?",
      content: (
        <RadioGroup value={data.gender} onValueChange={(value) => setData({...data, gender: value})}>
          {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <RadioGroupItem value={gender} id={gender} />
              <Label htmlFor={gender} className="text-lg">{gender}</Label>
            </div>
          ))}
        </RadioGroup>
      )
    },
    {
      title: "Do you have any known allergies?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {['Nuts', 'Dairy', 'Gluten', 'Soy', 'Fragrance', 'Nickel', 'Latex', 'Sulfates'].map((allergy) => (
              <div key={allergy} className="flex items-center space-x-2">
                <Checkbox
                  id={allergy}
                  checked={data.allergies.includes(allergy)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setData({...data, allergies: [...data.allergies, allergy]});
                    } else {
                      setData({...data, allergies: data.allergies.filter(a => a !== allergy)});
                    }
                  }}
                />
                <Label htmlFor={allergy} className="text-lg">{allergy}</Label>
              </div>
            ))}
          </div>
          
          {/* Custom allergies */}
          <div className="pt-4 border-t">
            <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">Add custom allergy:</Label>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Type custom allergy..."
                value={customInputs.allergy}
                onChange={(e) => setCustomInputs(prev => ({ ...prev, allergy: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem('allergy', 'customAllergies')}
              />
              <Button 
                onClick={() => addCustomItem('allergy', 'customAllergies')}
                disabled={!customInputs.allergy.trim()}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {data.customAllergies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.customAllergies.map((allergy, index) => (
                  <div key={index} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                    <span className="text-sm">{allergy}</span>
                    <Button
                      onClick={() => removeCustomItem('customAllergies', index)}
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "What's your skin type?",
      content: (
        <RadioGroup value={data.skinType} onValueChange={(value) => setData({...data, skinType: value})}>
          {['Oily', 'Dry', 'Combination', 'Sensitive', 'Normal', 'Not sure'].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type} className="text-lg">{type}</Label>
            </div>
          ))}
        </RadioGroup>
      )
    },
    {
      title: "Are you trying to avoid any specific ingredients?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {['Parabens', 'Sulfates', 'Silicones', 'Alcohol', 'Artificial Colors', 'Mineral Oil', 'Phthalates', 'Formaldehyde'].map((ingredient) => (
              <div key={ingredient} className="flex items-center space-x-2">
                <Checkbox
                  id={ingredient}
                  checked={data.avoiding.includes(ingredient)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setData({...data, avoiding: [...data.avoiding, ingredient]});
                    } else {
                      setData({...data, avoiding: data.avoiding.filter(a => a !== ingredient)});
                    }
                  }}
                />
                <Label htmlFor={ingredient} className="text-lg">{ingredient}</Label>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t">
            <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">Add ingredient to avoid:</Label>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Type ingredient to avoid..."
                value={customInputs.avoiding}
                onChange={(e) => setCustomInputs(prev => ({ ...prev, avoiding: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem('avoiding', 'customAvoiding')}
              />
              <Button 
                onClick={() => addCustomItem('avoiding', 'customAvoiding')}
                disabled={!customInputs.avoiding.trim()}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {data.customAvoiding.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.customAvoiding.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                    <span className="text-sm">{ingredient}</span>
                    <Button
                      onClick={() => removeCustomItem('customAvoiding', index)}
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "Are you currently taking any medications?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {['Blood Thinners', 'Retinoids', 'Antibiotics', 'Birth Control', 'Antidepressants', 'Blood Pressure Meds', 'Diabetes Meds', 'None'].map((med) => (
              <div key={med} className="flex items-center space-x-2">
                <Checkbox
                  id={med}
                  checked={data.medications.includes(med)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setData({...data, medications: [...data.medications, med]});
                    } else {
                      setData({...data, medications: data.medications.filter(m => m !== med)});
                    }
                  }}
                />
                <Label htmlFor={med} className="text-lg">{med}</Label>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t">
            <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">Add custom medication:</Label>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Type medication name..."
                value={customInputs.medication}
                onChange={(e) => setCustomInputs(prev => ({ ...prev, medication: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem('medication', 'customMedications')}
              />
              <Button 
                onClick={() => addCustomItem('medication', 'customMedications')}
                disabled={!customInputs.medication.trim()}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {data.customMedications.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.customMedications.map((med, index) => (
                  <div key={index} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                    <span className="text-sm">{med}</span>
                    <Button
                      onClick={() => removeCustomItem('customMedications', index)}
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "Do you have any specific health conditions?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {['Acne', 'Eczema', 'Psoriasis', 'Rosacea', 'Sensitive Skin', 'Dry Skin', 'Oily Skin', 'None'].map((condition) => (
              <div key={condition} className="flex items-center space-x-2">
                <Checkbox
                  id={condition}
                  checked={data.healthConditions.includes(condition)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setData({...data, healthConditions: [...data.healthConditions, condition]});
                    } else {
                      setData({...data, healthConditions: data.healthConditions.filter(c => c !== condition)});
                    }
                  }}
                />
                <Label htmlFor={condition} className="text-lg">{condition}</Label>
              </div>
            ))}
          </div>
    
          <div className="pt-4 border-t">
            <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">Add custom health condition:</Label>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Type health condition..."
                value={customInputs.healthCondition}
                onChange={(e) => setCustomInputs(prev => ({ ...prev, healthCondition: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem('healthCondition', 'customHealthConditions')}
              />
              <Button
                onClick={() => addCustomItem('healthCondition', 'customHealthConditions')}
                disabled={!customInputs.healthCondition.trim()}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {data.customHealthConditions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.customHealthConditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                    <span className="text-sm">{condition}</span>
                    <Button
                      onClick={() => removeCustomItem('customHealthConditions', index)}
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      title: "What are your main concerns about ingredients in products?",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {['Toxicity', 'Irritation', 'Allergic Reaction', 'Long-term Health Effects', 'Environmental Impact', 'Animal Testing', 'Ethical Sourcing', 'None'].map((concern) => (
              <div key={concern} className="flex items-center space-x-2">
                <Checkbox
                  id={concern}
                  checked={data.concerns.includes(concern)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setData({...data, concerns: [...data.concerns, concern]});
                    } else {
                      setData({...data, concerns: data.concerns.filter(c => c !== concern)});
                    }
                  }}
                />
                <Label htmlFor={concern} className="text-lg">{concern}</Label>
              </div>
            ))}
          </div>
    
          <div className="pt-4 border-t">
            <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">Add custom concern:</Label>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="Type concern..."
                value={customInputs.concern}
                onChange={(e) => setCustomInputs(prev => ({ ...prev, concern: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && addCustomItem('concern', 'customConcerns')}
              />
              <Button
                onClick={() => addCustomItem('concern', 'customConcerns')}
                disabled={!customInputs.concern.trim()}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {data.customConcerns.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {data.customConcerns.map((concern, index) => (
                  <div key={index} className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                    <span className="text-sm">{concern}</span>
                    <Button
                      onClick={() => removeCustomItem('customConcerns', index)}
                      size="sm"
                      variant="ghost"
                      className="h-4 w-4 p-0 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof OnboardingData) => {
    setData({ ...data, [key]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof OnboardingData) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setData(prevData => {
      if (isChecked) {
        return { ...prevData, [key]: [...(prevData[key] as string[]), value] };
      } else {
        return { ...prevData, [key]: (prevData[key] as string[]).filter(item => item !== value) };
      }
    });
  };

  const handleRadioChange = (value: string, key: keyof OnboardingData) => {
    setData({ ...data, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', data);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      console.log('Onboarding completed:', data);
      navigate('/analyzer');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-black dark:via-gray-900 dark:to-emerald-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Complete Your Health Profile
          </CardTitle>
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentStep ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Step {currentStep + 1} of {questions.length}
          </p>
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {questions[currentStep].title}
            </h3>
            {questions[currentStep].content}
          </div>
          
          <div className="flex justify-between">
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              variant="outline"
              className="flex items-center px-6 py-3 rounded-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={nextStep}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full flex items-center"
            >
              {currentStep === questions.length - 1 ? (
                <>
                  Complete
                  <CheckCircle className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
