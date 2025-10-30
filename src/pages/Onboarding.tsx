import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Activity, Target, Zap } from "lucide-react";

const onboardingSteps = [
  {
    icon: Activity,
    title: "Track Your Progress",
    description: "Monitor your workouts, calories burned, and fitness milestones all in one place",
    quote: "The only bad workout is the one that didn't happen."
  },
  {
    icon: Target,
    title: "Set & Achieve Goals",
    description: "Define your fitness objectives and watch yourself crush them day by day",
    quote: "Success is the sum of small efforts repeated daily."
  },
  {
    icon: Zap,
    title: "Stay Motivated",
    description: "Get personalized workout plans, meal suggestions, and daily reminders",
    quote: "Your body can do it. It's your mind you have to convince."
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/auth");
    }
  };

  const handleSkip = () => {
    navigate("/auth");
  };

  const step = onboardingSteps[currentStep];
  const Icon = step.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-md space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-scale-in">
            <Icon className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-3xl font-bold text-foreground">{step.title}</h1>
          <p className="text-muted-foreground text-lg">{step.description}</p>
          <p className="text-sm italic text-primary font-medium mt-6">"{step.quote}"</p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleNext}
            className="w-full gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 text-lg h-14"
          >
            {currentStep < onboardingSteps.length - 1 ? "Next" : "Get Started"}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          
          {currentStep < onboardingSteps.length - 1 && (
            <Button
              onClick={handleSkip}
              variant="ghost"
              className="w-full text-muted-foreground"
            >
              Skip
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
