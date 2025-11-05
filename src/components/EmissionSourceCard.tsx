import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EmissionSourceCardProps {
  title: string;
  icon: LucideIcon;
  value: number;
  unit: string;
  trend: number;
  color: string;
}

const EmissionSourceCard = ({ title, icon: Icon, value, unit, trend, color }: EmissionSourceCardProps) => {
  const trendColor = trend > 0 ? "text-destructive" : "text-secondary";
  const trendSymbol = trend > 0 ? "↑" : "↓";
  
  return (
    <Card className="transition-all duration-300 hover:shadow-[var(--shadow-elevated)] border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${color}`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <span className={`text-sm font-semibold ${trendColor}`}>
            {trendSymbol} {Math.abs(trend)}%
          </span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">{value.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmissionSourceCard;
