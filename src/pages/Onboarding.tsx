
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 'allergies',
    title: 'Tell us about your allergies',
    description: 'Select any ingredients you are allergic to',
    type: 'multiselect',
    options: ['Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs', 'Shellfish', 'Fragrance', 'Parabens', 'Sulfates', 'Latex']
  },
  {
    id: 'avoiding',
    title: 'What do you want to avoid?',
    description: 'Choose ingredients you prefer to avoid in products',
    type: 'checkbox',
    options: ['Parabens', 'Sulfates', 'Phthalates', 'Formaldehyde', 'Synthetic Fragrances', 'Mineral Oil', 'Petrolatum', 'Silicones']
  },
  {
    id: 'medications',
    title: 'Current medications?',
    description: 'List any medications you are currently taking (optional)',
    type: 'text',
    placeholder: 'Enter medications separated by commas...'
  },
  {
    id: 'skintype',
    title: 'Skin type & concerns?',
    description: 'Help us personalize your recommendations',
    type: 'select',
    options: ['Dry', 'Oily', 'Combination', 'Sensitive', 'Normal', 'Acne-prone', 'Mature', 'Rosacea']
  },
  {
    id: 'products',
    title: 'Preferred product types?',
    description: 'What products do you use most often?',
    type: 'multiselect',
    options: ['Skincare', 'Makeup', 'Hair Care', 'Body Care', 'Sunscreen', 'Deodorant', 'Toothpaste', 'Fragrance']
  },
  {
    id: 'notifications',
    title: 'Notification preferences?',
    description: 'How would you like to receive updates?',
    type: 'switches',
    options: ['New ingredient alerts', 'Product recalls', 'Personalized recommendations', 'Weekly safety reports', 'Research updates']
  }
];

const Onboarding = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [question.id]: value });
    if (question.type === 'multiselect' || question.type === 'checkbox') {
      setSelectedItems(value);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedItems(answers[questions[currentQuestion + 1]?.id] || []);
    } else {
      // Complete onboarding
      navigate('/analyzer');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedItems(answers[questions[currentQuestion - 1]?.id] || []);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const toggleSelection = (option: string) => {
    const newSelection = selectedItems.includes(option)
      ? selectedItems.filter(item => item !== option)
      : [...selectedItems, option];
    
    setSelectedItems(newSelection);
    handleAnswer(newSelection);
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiselect':
      case 'checkbox':
        return (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {selectedItems.map(item => (
                <Badge key={item} variant="default" className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer" onClick={() => toggleSelection(item)}>
                  {item}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {question.options?.map(option => (
                <div
                  key={option}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedItems.includes(option)
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300'
                  }`}
                  onClick={() => toggleSelection(option)}
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedItems.includes(option)}
                      onChange={() => {}}
                    />
                    <Label className="cursor-pointer">{option}</Label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <Input
              placeholder={question.placeholder}
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswer(e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'select':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {question.options?.map(option => (
              <div
                key={option}
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  answers[question.id] === option
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-emerald-300'
                }`}
                onClick={() => handleAnswer(option)}
              >
                <div className="text-center">
                  <div className="font-medium text-gray-900 dark:text-white">{option}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'switches':
        return (
          <div className="space-y-4">
            {question.options?.map(option => (
              <div key={option} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <Label className="flex-1 cursor-pointer">{option}</Label>
                <Switch
                  checked={answers[question.id]?.[option] || false}
                  onCheckedChange={(checked) => {
                    const currentSwitches = answers[question.id] || {};
                    handleAnswer({ ...currentSwitches, [option]: checked });
                  }}
                />
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-black dark:via-gray-900 dark:to-emerald-950 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        {/* Question Card */}
        <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              {question.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              {question.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {renderQuestion()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700"
              >
                Skip
              </Button>

              <Button
                onClick={handleNext}
                className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2"
              >
                {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
