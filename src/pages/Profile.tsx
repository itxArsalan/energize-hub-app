import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Ruler, Weight, Calendar, LogOut } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [age, setAge] = useState("25");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>

        {/* Profile Card */}
        <Card className="glass-card p-6 shadow-elegant">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-glow">
              <User className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{user?.email?.split('@')[0] || 'User'}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Mail className="w-4 h-4" />
                {user?.email}
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="glass-card p-6 shadow-elegant space-y-4">
          <h3 className="font-semibold text-lg">Your Stats</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Age
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight" className="flex items-center gap-2">
                <Weight className="w-4 h-4" />
                Weight (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="height" className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Height (cm)
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="h-12"
              />
            </div>
          </div>

          <Button className="w-full gradient-primary shadow-elegant h-12">
            Save Changes
          </Button>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            className="w-full h-12"
          >
            Settings
          </Button>
          
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full h-12"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
