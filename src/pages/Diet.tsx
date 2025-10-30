import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Apple, Coffee, Salad, Pizza } from "lucide-react";

const meals = [
  {
    icon: Coffee,
    name: "Breakfast",
    time: "8:00 AM",
    calories: 420,
    items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
  },
  {
    icon: Apple,
    name: "Morning Snack",
    time: "10:30 AM",
    calories: 150,
    items: ["Apple", "Almonds"],
  },
  {
    icon: Salad,
    name: "Lunch",
    time: "1:00 PM",
    calories: 580,
    items: ["Grilled chicken salad", "Brown rice", "Lemon water"],
  },
  {
    icon: Pizza,
    name: "Dinner",
    time: "7:00 PM",
    calories: 650,
    items: ["Salmon", "Quinoa", "Steamed vegetables"],
  },
];

const Diet = () => {
  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const calorieGoal = 2200;
  const remaining = calorieGoal - totalCalories;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold">Meal Planner</h1>
          <p className="text-muted-foreground">Track your daily nutrition</p>
        </div>

        {/* Calorie Summary */}
        <Card className="glass-card p-6 shadow-elegant">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Calories Today</p>
                <p className="text-3xl font-bold text-gradient">{totalCalories}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Remaining</p>
                <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(remaining)}
                </p>
              </div>
            </div>
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full gradient-primary transition-all duration-500"
                style={{ width: `${Math.min((totalCalories / calorieGoal) * 100, 100)}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Goal: {calorieGoal} kcal
            </p>
          </div>
        </Card>

        {/* Meal List */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Today's Meals</h2>
          <div className="space-y-3">
            {meals.map((meal, index) => {
              const Icon = meal.icon;
              return (
                <Card
                  key={index}
                  className="glass-card p-4 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{meal.name}</h3>
                          <p className="text-xs text-muted-foreground">{meal.time}</p>
                        </div>
                        <span className="text-sm font-medium text-primary">
                          {meal.calories} kcal
                        </span>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {meal.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Diet;
