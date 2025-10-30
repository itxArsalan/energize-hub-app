import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, Calendar } from "lucide-react";

const Progress = () => {
  const weeklyData = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 78 },
    { day: "Wed", value: 85 },
    { day: "Thu", value: 72 },
    { day: "Fri", value: 90 },
    { day: "Sat", value: 88 },
    { day: "Sun", value: 95 },
  ];

  const achievements = [
    { icon: Target, title: "First Workout", description: "Completed your first workout", color: "bg-blue-500" },
    { icon: Award, title: "Week Warrior", description: "7 days streak", color: "bg-purple-500" },
    { icon: TrendingUp, title: "Progress Master", description: "Reached 75% of monthly goal", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold">Progress</h1>
          <p className="text-muted-foreground">Track your fitness journey</p>
        </div>

        {/* Weekly Chart */}
        <Card className="glass-card p-6 shadow-elegant">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">This Week</h3>
              <span className="text-sm text-muted-foreground">Goal Completion</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-muted rounded-t-lg overflow-hidden relative h-full">
                    <div
                      className="absolute bottom-0 left-0 right-0 gradient-primary transition-all duration-500 rounded-t-lg"
                      style={{
                        height: `${data.value}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.day}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="glass-card p-4 shadow-elegant">
            <div className="space-y-2">
              <Calendar className="w-6 h-6 text-primary" />
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-muted-foreground">Days Active</p>
              </div>
            </div>
          </Card>
          <Card className="glass-card p-4 shadow-elegant">
            <div className="space-y-2">
              <Target className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-muted-foreground">Workouts Done</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <div className="space-y-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="glass-card p-4 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-xl ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
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

export default Progress;
