import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Brain, TrendingUp, Target } from "lucide-react";
import ModelInfo from "@/components/ModelInfo";

const Analytics = () => {
  const historicalData = [
    { month: "Jan", emissions: 9800, target: 9500 },
    { month: "Feb", emissions: 9600, target: 9300 },
    { month: "Mar", emissions: 10200, target: 9100 },
    { month: "Apr", emissions: 9400, target: 8900 },
    { month: "May", emissions: 9100, target: 8700 },
    { month: "Jun", emissions: 8900, target: 8500 },
    { month: "Jul", emissions: 8700, target: 8300 },
    { month: "Aug", emissions: 8500, target: 8100 },
  ];

  const comparisonData = [
    { category: "Industrial", current: 24500, previous: 25300, reduction: 3.2 },
    { category: "Transport", current: 18200, previous: 17850, reduction: -2.0 },
    { category: "Agriculture", current: 8700, previous: 9200, reduction: 5.4 },
    { category: "Energy", current: 5200, previous: 5650, reduction: 8.0 },
    { category: "Waste", current: 1600, previous: 1825, reduction: 12.3 },
  ];

  const performanceData = [
    { metric: "Accuracy", value: 94 },
    { metric: "Precision", value: 91 },
    { metric: "Recall", value: 88 },
    { metric: "F1 Score", value: 89 },
    { metric: "Coverage", value: 96 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Analytics & Predictions</h1>
        <p className="text-muted-foreground">Advanced machine learning insights and forecasting</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Model Accuracy</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">94.2%</p>
            <p className="text-sm text-muted-foreground mt-1">Random Forest Regressor</p>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-secondary/10">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Forecast Confidence</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">87.5%</p>
            <p className="text-sm text-muted-foreground mt-1">6-month predictions</p>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-accent/10">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Target Progress</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">68%</p>
            <p className="text-sm text-muted-foreground mt-1">Annual reduction goal</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="performance">Model Performance</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Historical Emissions vs Target</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="emissions" stroke="hsl(var(--primary))" strokeWidth={3} name="Actual Emissions" />
                  <Line type="monotone" dataKey="target" stroke="hsl(var(--secondary))" strokeWidth={3} strokeDasharray="5 5" name="Target" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Source Category Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Period" />
                  <Bar dataKey="previous" fill="hsl(var(--muted))" name="Previous Period" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>ML Model Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={performanceData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                  <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
                  <Radar name="Performance" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <ModelInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
