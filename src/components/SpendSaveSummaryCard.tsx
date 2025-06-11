import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Using shadcn Progress

interface SpendSaveSummaryCardProps {
  title?: string;
  description?: string;
  spentAmount: number;
  savedAmount: number;
  totalTarget?: number; // Optional: for overall progress if 'savedAmount' contributes to a larger target
  currencySymbol?: string;
  spendLabel?: string;
  saveLabel?: string;
}

const SpendSaveSummaryCard: React.FC<SpendSaveSummaryCardProps> = ({
  title = "Spend & Save",
  description,
  spentAmount,
  savedAmount,
  totalTarget,
  currencySymbol = '$',
  spendLabel = "Spent",
  saveLabel = "Saved",
}) => {
  console.log("Rendering SpendSaveSummaryCard. Spent:", spentAmount, "Saved:", savedAmount);

  const totalAmount = spentAmount + savedAmount;
  let spendPercentage = 0;
  let savePercentage = 0;
  let overallProgress = 0;

  if (totalAmount > 0) {
    spendPercentage = Math.round((spentAmount / totalAmount) * 100);
    savePercentage = Math.round((savedAmount / totalAmount) * 100);
  }

  if (totalTarget && totalTarget > 0) {
    overallProgress = Math.min(Math.round((savedAmount / totalTarget) * 100), 100);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">{spendLabel}</span>
            <span className="text-xl font-bold">{currencySymbol}{spentAmount.toFixed(2)}</span>
          </div>
          {totalAmount > 0 && <Progress value={spendPercentage} aria-label={`${spendLabel} progress`} className="h-2 [&>*]:bg-red-500" />}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">{saveLabel}</span>
            <span className="text-xl font-bold text-green-600">{currencySymbol}{savedAmount.toFixed(2)}</span>
          </div>
          {totalAmount > 0 && <Progress value={savePercentage} aria-label={`${saveLabel} progress`} className="h-2 [&>*]:bg-green-500" />}
        </div>
        
        {totalTarget !== undefined && (
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Overall Savings Goal Progress</span>
                <span className="text-sm font-semibold">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} aria-label="Overall savings goal progress" className="h-3" />
            <p className="text-xs text-muted-foreground text-right">
                Target: {currencySymbol}{totalTarget.toFixed(2)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SpendSaveSummaryCard;