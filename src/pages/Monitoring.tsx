import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Monitoring = () => {
  const sensorData = [
    { id: "SEN-001", location: "Manufacturing Plant A", status: "active", value: 245, threshold: 300, type: "CO₂" },
    { id: "SEN-002", location: "Transportation Hub", status: "warning", value: 189, threshold: 150, type: "CO₂" },
    { id: "SEN-003", location: "Energy Facility", status: "active", value: 312, threshold: 400, type: "CO₂" },
    { id: "SEN-004", location: "Agricultural Site B", status: "active", value: 78, threshold: 120, type: "CH₄" },
    { id: "SEN-005", location: "Waste Processing", status: "offline", value: 0, threshold: 100, type: "CO₂" },
    { id: "SEN-006", location: "Manufacturing Plant B", status: "active", value: 267, threshold: 300, type: "CO₂" },
  ];

  const recentAlerts = [
    { time: "5 min ago", message: "Transportation Hub exceeding threshold", severity: "high" },
    { time: "23 min ago", message: "Sensor SEN-005 offline - maintenance required", severity: "medium" },
    { time: "1 hour ago", message: "Manufacturing Plant A spike detected", severity: "low" },
    { time: "2 hours ago", message: "Energy Facility returning to normal levels", severity: "info" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-secondary/20 text-secondary border-secondary/30";
      case "warning": return "bg-accent/20 text-accent border-accent/30";
      case "offline": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return CheckCircle;
      case "warning": return AlertTriangle;
      case "offline": return Activity;
      default: return Activity;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Real-time Monitoring</h1>
        <p className="text-muted-foreground">Live sensor data and emission alerts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sensors</p>
                <p className="text-3xl font-bold text-foreground">24</p>
              </div>
              <Activity className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warnings</p>
                <p className="text-3xl font-bold text-accent">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Offline</p>
                <p className="text-3xl font-bold text-destructive">1</p>
              </div>
              <Activity className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-3xl font-bold text-foreground">1.2s</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sensor Grid */}
        <div className="lg:col-span-2">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Sensor Network Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sensorData.map((sensor) => {
                const StatusIcon = getStatusIcon(sensor.status);
                const percentage = (sensor.value / sensor.threshold) * 100;
                
                return (
                  <div key={sensor.id} className="p-4 rounded-lg border border-border/50 bg-muted/30">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{sensor.id}</h4>
                          <Badge className={getStatusColor(sensor.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {sensor.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{sensor.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">{sensor.value}</p>
                        <p className="text-xs text-muted-foreground">ppm {sensor.type}</p>
                      </div>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Threshold: {sensor.threshold} ppm ({percentage.toFixed(1)}%)
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAlerts.map((alert, index) => {
                const severityColors = {
                  high: "border-l-destructive bg-destructive/5",
                  medium: "border-l-accent bg-accent/5",
                  low: "border-l-primary bg-primary/5",
                  info: "border-l-secondary bg-secondary/5",
                };
                
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${severityColors[alert.severity as keyof typeof severityColors]}`}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
