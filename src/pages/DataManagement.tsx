import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Upload, Download, Search, Plus } from "lucide-react";

const DataManagement = () => {
  const inventoryData = [
    { id: "INV-001", source: "Manufacturing Plant A", type: "Industrial", lastUpdate: "2024-11-04", records: 1247, status: "active" },
    { id: "INV-002", source: "Transport Fleet", type: "Transportation", lastUpdate: "2024-11-04", records: 892, status: "active" },
    { id: "INV-003", source: "Solar Farm Alpha", type: "Energy", lastUpdate: "2024-11-03", records: 523, status: "active" },
    { id: "INV-004", source: "Agricultural Site B", type: "Agriculture", lastUpdate: "2024-11-04", records: 356, status: "active" },
    { id: "INV-005", source: "Waste Processing", type: "Waste", lastUpdate: "2024-11-02", records: 189, status: "maintenance" },
  ];

  const dataQuality = [
    { metric: "Completeness", value: 96, status: "excellent" },
    { metric: "Accuracy", value: 94, status: "excellent" },
    { metric: "Timeliness", value: 89, status: "good" },
    { metric: "Consistency", value: 92, status: "excellent" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Data Management</h1>
          <p className="text-muted-foreground">Emission inventory and data source configuration</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Import Data
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Source
          </Button>
        </div>
      </div>

      {/* Data Quality Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {dataQuality.map((item, index) => {
          const statusColors = {
            excellent: "text-secondary",
            good: "text-primary",
            poor: "text-accent",
          };

          return (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{item.metric}</h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold ${statusColors[item.status as keyof typeof statusColors]}`}>
                    {item.value}%
                  </span>
                  <Badge variant="outline" className="capitalize">
                    {item.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search and Filters */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search inventory..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Emission Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Records</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.source}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.type}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.lastUpdate}</TableCell>
                  <TableCell>{item.records.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.status === "active"
                          ? "bg-secondary/20 text-secondary border-secondary/30"
                          : "bg-accent/20 text-accent border-accent/30"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Data Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Connected Data Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "IoT Sensor Network", type: "Real-time", status: "active", records: "24 sensors" },
              { name: "Manual Entry System", type: "Batch", status: "active", records: "5 sources" },
              { name: "API Integration", type: "Real-time", status: "active", records: "3 endpoints" },
              { name: "CSV Import", type: "Batch", status: "inactive", records: "Historical" },
            ].map((source, index) => (
              <div key={index} className="p-4 rounded-lg border border-border/50 bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{source.name}</h4>
                  <Badge
                    className={
                      source.status === "active"
                        ? "bg-secondary/20 text-secondary border-secondary/30"
                        : "bg-muted text-muted-foreground border-border"
                    }
                  >
                    {source.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Type: {source.type}</span>
                  <span>•</span>
                  <span>{source.records}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Recent Data Operations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { operation: "Bulk import completed", time: "10 minutes ago", status: "success" },
              { operation: "API sync successful", time: "25 minutes ago", status: "success" },
              { operation: "Data validation passed", time: "1 hour ago", status: "success" },
              { operation: "Manual entry updated", time: "2 hours ago", status: "success" },
              { operation: "Export generated", time: "3 hours ago", status: "success" },
            ].map((log, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div>
                  <p className="text-sm font-medium text-foreground">{log.operation}</p>
                  <p className="text-xs text-muted-foreground">{log.time}</p>
                </div>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                  {log.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataManagement;
