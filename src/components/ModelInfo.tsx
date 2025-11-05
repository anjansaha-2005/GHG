import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, GitBranch, Zap } from "lucide-react";

const ModelInfo = () => {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Brain className="h-5 w-5 text-primary" />
          Active ML Models
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-foreground">Random Forest Regressor</h4>
            </div>
            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
              Active
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Primary model for emission predictions based on historical patterns
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Accuracy:</span>
              <span className="ml-2 font-semibold text-foreground">94.2%</span>
            </div>
            <div>
              <span className="text-muted-foreground">R² Score:</span>
              <span className="ml-2 font-semibold text-foreground">0.89</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <h4 className="font-semibold text-foreground">XGBoost Classifier</h4>
            </div>
            <Badge variant="outline" className="border-accent/30 text-accent">
              Secondary
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Anomaly detection and compliance risk assessment
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Precision:</span>
              <span className="ml-2 font-semibold text-foreground">91.7%</span>
            </div>
            <div>
              <span className="text-muted-foreground">Recall:</span>
              <span className="ml-2 font-semibold text-foreground">88.3%</span>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-primary">Neural Network</span> model training in progress for deep pattern recognition
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelInfo;
