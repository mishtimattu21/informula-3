
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/onboarding');
    }, 2000);
  };

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/analyzer');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-black dark:via-gray-900 dark:to-emerald-950 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Benefits */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="gradient-text">IngredientIQ</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join thousands of users making informed decisions about product safety
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Products Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">15K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">99%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <Card className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Get Started
            </CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-gray-400">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button 
                  onClick={handleSignIn}
                  disabled={isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    Apple
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button 
                  onClick={handleSignUp}
                  disabled={isLoading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-gray-900 px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    Apple
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
