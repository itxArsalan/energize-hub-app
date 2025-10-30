import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Moon, Bell, Shield, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    toast({
      title: `${!darkMode ? 'Dark' : 'Light'} mode enabled`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
            className="rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Customize your experience</p>
          </div>
        </div>

        {/* Appearance */}
        <Card className="glass-card p-6 shadow-elegant">
          <h3 className="font-semibold text-lg mb-4">Appearance</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Moon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Toggle dark theme</p>
              </div>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={handleDarkModeToggle}
            />
          </div>
        </Card>

        {/* Notifications */}
        <Card className="glass-card p-6 shadow-elegant">
          <h3 className="font-semibold text-lg mb-4">Notifications</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Get workout reminders</p>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
        </Card>

        {/* About */}
        <Card className="glass-card p-6 shadow-elegant space-y-4">
          <h3 className="font-semibold text-lg">About</h3>
          
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium">Privacy Policy</p>
              <p className="text-sm text-muted-foreground">View our privacy policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
              <Info className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-medium">Terms of Service</p>
              <p className="text-sm text-muted-foreground">Read our terms</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              FitFlow v1.0.0
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
