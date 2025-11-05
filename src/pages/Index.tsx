import EmissionSourceCard from "@/components/EmissionSourceCard";
import { EmissionChart, PredictionChart } from "@/components/EmissionChart";
import StatsOverview from "@/components/StatsOverview";
import ModelInfo from "@/components/ModelInfo";
import { Factory, Car, Sprout, Zap, Trash2 } from "lucide-react";

const Index = () => {
  const emissionSources = [
    {
      title: "Industrial Emissions",
      icon: Factory,
      value: 24500,
      unit: "tonnes CO₂e",
      trend: -3.2,
      color: "bg-gradient-to-br from-[hsl(var(--chart-1))] to-[hsl(var(--chart-1))]/80",
    },
    {
      title: "Transportation",
      icon: Car,
      value: 18200,
      unit: "tonnes CO₂e",
      trend: 1.8,
      color: "bg-gradient-to-br from-[hsl(var(--chart-2))] to-[hsl(var(--chart-2))]/80",
    },
    {
      title: "Agriculture",
      icon: Sprout,
      value: 8700,
      unit: "tonnes CO₂e",
      trend: -5.4,
      color: "bg-gradient-to-br from-[hsl(var(--chart-3))] to-[hsl(var(--chart-3))]/80",
    },
    {
      title: "Energy Production",
      icon: Zap,
      value: 5200,
      unit: "tonnes CO₂e",
      trend: -8.1,
      color: "bg-gradient-to-br from-[hsl(var(--chart-4))] to-[hsl(var(--chart-4))]/80",
    },
    {
      title: "Waste Management",
      icon: Trash2,
      value: 1600,
      unit: "tonnes CO₂e",
      trend: -12.3,
      color: "bg-gradient-to-br from-[hsl(var(--chart-5))] to-[hsl(var(--chart-5))]/80",
    },
  ];

  return (
    <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3 py-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Climate Change & Weather Prediction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time GHG monitoring with advanced machine learning predictions for sustainable decision-making
          </p>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Emission Sources Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Emission Sources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {emissionSources.map((source, index) => (
              <EmissionSourceCard key={index} {...source} />
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EmissionChart />
          <PredictionChart />
        </div>

        {/* Model Info */}
        <ModelInfo />

        {/* Compliance Footer */}
        <div className="mt-8 p-6 rounded-xl bg-card border border-border/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Compliance Reporting</h4>
              <p className="text-sm text-muted-foreground">
                Next report generation: <span className="font-medium text-foreground">December 1, 2025</span>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                ISO 14064 Compliant
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                GHG Protocol
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Index;
