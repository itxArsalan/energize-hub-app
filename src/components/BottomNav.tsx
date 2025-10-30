import { Home, Dumbbell, UtensilsCrossed, User, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Dumbbell, label: "Workouts", path: "/workouts" },
    { icon: TrendingUp, label: "Progress", path: "/progress" },
    { icon: UtensilsCrossed, label: "Diet", path: "/diet" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border glass-card z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "scale-110" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
