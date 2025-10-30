import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, Target, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const stats = [
    { icon: Flame, label: "Calories Burned", value: "1,247", unit: "kcal", color: "text-orange-500" },
    { icon: Target, label: "Daily Goal", value: "75", unit: "%", color: "text-primary" },
    { icon: Clock, label: "Active Time", value: "45", unit: "min", color: "text-green-500" },
    { icon: TrendingUp, label: "Weekly Progress", value: "+12", unit: "%", color: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-muted-foreground">Let's crush your goals today</p>
        </div>

        {/* Progress Ring */}
        <Card className="glass-card p-6 shadow-elegant">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-48 h-48">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88 * 0.75} ${2 * Math.PI * 88}`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(211 100% 50%)" />
                    <stop offset="100%" stopColor="hsl(211 100% 60%)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-gradient">75%</span>
                <span className="text-sm text-muted-foreground">Daily Goal</span>
              </div>
            </div>
            <p className="text-center text-muted-foreground">
              You're doing great! Keep up the momentum
            </p>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="glass-card p-4 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-2">
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">{stat.unit}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <Button
            onClick={() => navigate("/workouts")}
            className="w-full gradient-primary shadow-elegant h-14 text-lg"
          >
            Start Workout
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
