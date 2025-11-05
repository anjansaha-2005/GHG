import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Compliance = () => {
  const standards = [
    { name: "ISO 14064-1", description: "GHG inventories", status: "compliant", compliance: 94 },
    { name: "GHG Protocol", description: "Corporate standard", status: "compliant", compliance: 96 },
    { name: "EPA Reporting", description: "Federal requirements", status: "review", compliance: 87 },
    { name: "CDP Climate", description: "Carbon disclosure", status: "compliant", compliance: 91 },
  ];

  const reports = [
    { title: "Q3 2024 Emissions Report", date: "Oct 15, 2024", status: "published", size: "2.4 MB" },
    { title: "Annual Carbon Inventory", date: "Sep 30, 2024", status: "published", size: "5.8 MB" },
    { title: "Q2 2024 Compliance Summary", date: "Jul 20, 2024", status: "published", size: "1.9 MB" },
    { title: "Mid-Year Assessment", date: "Jun 30, 2024", status: "archived", size: "3.2 MB" },
    { title: "Q1 2024 Emissions Report", date: "Apr 15, 2024", status: "archived", size: "2.1 MB" },
  ];

  const upcomingDeadlines = [
    { title: "EPA Annual Report", date: "Dec 15, 2024", priority: "high" },
    { title: "ISO 14064 Audit", date: "Jan 10, 2025", priority: "medium" },
    { title: "CDP Disclosure", date: "Feb 28, 2025", priority: "medium" },
    { title: "Q4 Internal Review", date: "Dec 31, 2024", priority: "low" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Compliance Reports</h1>
          <p className="text-muted-foreground">Standards compliance and regulatory reporting</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <FileText className="h-4 w-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Standards Compliance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {standards.map((standard, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{standard.name}</h4>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </div>
                  <Badge
                    className={
                      standard.status === "compliant"
                        ? "bg-secondary/20 text-secondary border-secondary/30"
                        : "bg-accent/20 text-accent border-accent/30"
                    }
                  >
                    {standard.status === "compliant" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {standard.status}
                  </Badge>
                </div>
                <Progress value={standard.compliance} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">{standard.compliance}% compliant</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingDeadlines.map((deadline, index) => {
              const priorityColors = {
                high: "border-l-destructive bg-destructive/5",
                medium: "border-l-accent bg-accent/5",
                low: "border-l-primary bg-primary/5",
              };

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${priorityColors[deadline.priority as keyof typeof priorityColors]}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{deadline.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {deadline.date}
                      </div>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {deadline.priority}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Reports Archive */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Report Archive</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {reports.map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{report.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                      <span className="text-sm text-muted-foreground">{report.size}</span>
                      <Badge
                        variant="outline"
                        className={report.status === "published" ? "border-secondary/30 text-secondary" : ""}
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Compliance;
