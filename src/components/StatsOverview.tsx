import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, AlertTriangle, CheckCircle, Activity } from "lucide-react";

const StatsOverview = () => {
  const stats = [
    {
      title: "Total Emissions",
      value: "58.2K",
      unit: "tonnes CO₂e",
      icon: Activity,
      trend: -5.2,
      color: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      title: "Reduction Target",
      value: "23%",
      unit: "vs baseline",
      icon: TrendingDown,
      trend: 12.5,
      color: "bg-gradient-to-br from-secondary to-secondary/80",
    },
    {
      title: "Compliance Status",
      value: "94%",
      unit: "standards met",
      icon: CheckCircle,
      trend: 3.1,
      color: "bg-gradient-to-br from-secondary to-secondary/80",
    },
    {
      title: "Alert Zones",
      value: "2",
      unit: "active warnings",
      icon: AlertTriangle,
      trend: -50,
      color: "bg-gradient-to-br from-accent to-accent/80",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const trendColor = stat.trend > 0 ? "text-secondary" : "text-destructive";
        const trendSymbol = stat.trend > 0 ? "↑" : "↓";
        
        return (
          <Card key={index} className="border-border/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xs font-semibold ${trendColor}`}>
                  {trendSymbol} {Math.abs(stat.trend)}%
                </span>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">{stat.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.unit}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsOverview;
