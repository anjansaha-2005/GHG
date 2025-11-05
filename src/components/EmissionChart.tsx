import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const emissionData = [
  { month: "Jan", industrial: 2400, transport: 1800, agriculture: 1200, energy: 3200, waste: 800 },
  { month: "Feb", industrial: 2300, transport: 1900, agriculture: 1150, energy: 3100, waste: 850 },
  { month: "Mar", industrial: 2500, transport: 2100, agriculture: 1300, energy: 3400, waste: 900 },
  { month: "Apr", industrial: 2350, transport: 2000, agriculture: 1250, energy: 3250, waste: 870 },
  { month: "May", industrial: 2450, transport: 2150, agriculture: 1350, energy: 3350, waste: 920 },
  { month: "Jun", industrial: 2280, transport: 1950, agriculture: 1180, energy: 3150, waste: 840 },
];

const predictionData = [
  { month: "Jul", actual: 9800, predicted: 9750 },
  { month: "Aug", actual: 10100, predicted: 10050 },
  { month: "Sep", actual: null, predicted: 9900 },
  { month: "Oct", actual: null, predicted: 9700 },
  { month: "Nov", actual: null, predicted: 9500 },
  { month: "Dec", actual: null, predicted: 9300 },
];

export const EmissionChart = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Emission Sources Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={emissionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Legend />
            <Area type="monotone" dataKey="industrial" stackId="1" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="transport" stackId="1" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="agriculture" stackId="1" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="energy" stackId="1" stroke="hsl(var(--chart-4))" fill="hsl(var(--chart-4))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="waste" stackId="1" stroke="hsl(var(--chart-5))" fill="hsl(var(--chart-5))" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const PredictionChart = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">ML Prediction Model (6-Month Forecast)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ fill: "hsl(var(--primary))" }} />
            <Line type="monotone" dataKey="predicted" stroke="hsl(var(--secondary))" strokeWidth={3} strokeDasharray="5 5" dot={{ fill: "hsl(var(--secondary))" }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
