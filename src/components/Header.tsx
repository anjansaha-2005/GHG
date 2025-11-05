import { Cloud, Activity } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80">
          <Cloud className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">ClimateWatch</h1>
          <p className="text-xs text-muted-foreground">GHG Monitoring & Prediction</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
        <Activity className="h-4 w-4 text-secondary animate-pulse" />
        <span className="text-sm font-medium text-secondary">Live Monitoring</span>
      </div>
    </div>
  );
};

export default Header;
