import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Using shadcn Progress
import { cn } from "@/lib/utils"; // For conditional classes

interface AccountSummaryCardProps {
  accountName: string;
  accountType?: string; // e.g., "E-Savings Account"
  balance: number;
  currencySymbol?: string;
  progress?: number; // Optional progress (0-100) towards a goal for this account
  progressLabel?: string;
  accentColor?: string; // e.g., "teal" or a Tailwind color class like "bg-teal-500"
  onPress?: () => void;
}

const AccountSummaryCard: React.FC<AccountSummaryCardProps> = ({
  accountName,
  accountType,
  balance,
  currencySymbol = '$',
  progress,
  progressLabel = "Goal Progress",
  accentColor, // e.g. "teal-500"
  onPress,
}) => {
  console.log("Rendering AccountSummaryCard for:", accountName);

  const cardClasses = cn(
    "w-full",
    onPress && "cursor-pointer hover:shadow-md transition-shadow",
    accentColor && `border-l-4 border-${accentColor}` // E.g. border-teal-500
  );

  return (
    <Card className={cardClasses} onClick={onPress}>
      <CardHeader>
        <CardTitle>{accountName}</CardTitle>
        {accountType && <CardDescription>{accountType}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <span className="text-2xl font-bold">{currencySymbol}{balance.toFixed(2)}</span>
          <p className="text-xs text-muted-foreground">Available Balance</p>
        </div>
        {progress !== undefined && (
          <div className="space-y-1">
             <div className="flex justify-between text-sm">
                <span>{progressLabel}</span>
                <span>{progress}%</span>
             </div>
            <Progress value={progress} aria-label={`${progressLabel} for ${accountName}`} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AccountSummaryCard;