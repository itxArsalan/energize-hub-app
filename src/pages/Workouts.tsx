import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Dumbbell, Heart, Flame, Zap, Wind, User } from "lucide-react";

const workoutCategories = [
  { icon: Dumbbell, name: "Strength", exercises: 45, color: "bg-blue-500" },
  { icon: Heart, name: "Cardio", exercises: 32, color: "bg-red-500" },
  { icon: Wind, name: "Yoga", exercises: 28, color: "bg-purple-500" },
  { icon: Zap, name: "HIIT", exercises: 38, color: "bg-orange-500" },
  { icon: Flame, name: "CrossFit", exercises: 25, color: "bg-yellow-500" },
  { icon: User, name: "Bodyweight", exercises: 40, color: "bg-green-500" },
];

const Workouts = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold">Workouts</h1>
          <p className="text-muted-foreground">Choose your workout category</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4">
          {workoutCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                onClick={() => navigate(`/workout/${category.name.toLowerCase()}`)}
                className="glass-card p-6 shadow-elegant hover:shadow-glow transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.exercises} exercises
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Workout */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Featured Workout</h2>
          <Card className="glass-card p-6 shadow-elegant">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Full Body Blast</h3>
                  <p className="text-muted-foreground text-sm">30 min • Advanced</p>
                </div>
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                  <Flame className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <p className="text-muted-foreground">
                A high-intensity workout targeting all major muscle groups for maximum results
              </p>
              <div className="flex gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  450 kcal
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                  8 exercises
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Workouts;
