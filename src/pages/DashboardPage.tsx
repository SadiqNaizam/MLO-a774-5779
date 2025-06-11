import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTopNav from '@/components/layout/DashboardTopNav';
import SpendSaveSummaryCard from '@/components/SpendSaveSummaryCard';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea"; // Or use a simple <p>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const savingsGoals = [
    { id: 'goal1', title: 'Vacation Fund', current: 750, target: 1500, description: 'Saving for a trip to Hawaii!' },
    { id: 'goal2', title: 'New Laptop', current: 300, target: 1200, description: 'For work and personal projects.' },
  ];

  const eSavingsAccount = {
    accountName: "E-Savings Account",
    accountType: "High-Yield Savings",
    balance: 5250.75,
    progress: 60,
    progressLabel: "Annual Goal",
    accentColor: "teal-500",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardTopNav
        title="Dashboard"
        showMenuButton={true} // Example: show menu on mobile
        onMenuClick={() => console.log('Menu clicked')}
        showNotificationsButton={true}
        notificationCount={3}
        onNotificationsClick={() => navigate('/notifications')}
        showSettingsButton={true}
        onSettingsClick={() => navigate('/settings')}
      />

      <main className="flex-grow overflow-y-auto pt-4 pb-20 px-4 space-y-6"> {/* pt for topnav, pb for bottomnav */}
        <SpendSaveSummaryCard
          title="Monthly Snapshot"
          spentAmount={1250.50}
          savedAmount={350.20}
          totalTarget={500}
          description="Your spending and saving activity this month."
        />

        <Card>
          <CardHeader>
            <CardTitle>Your Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {savingsGoals.map(goal => (
                <AccordionItem value={goal.id} key={goal.id}>
                  <AccordionTrigger>{goal.title} ({Math.round((goal.current/goal.target)*100)}%)</AccordionTrigger>
                  <AccordionContent>
                    <p>{goal.description}</p>
                    <p className="text-sm text-muted-foreground">
                      Current: ${goal.current.toFixed(2)} / Target: ${goal.target.toFixed(2)}
                    </p>
                    {/* Could add a small progress bar here too */}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <AccountSummaryCard
          accountName={eSavingsAccount.accountName}
          accountType={eSavingsAccount.accountType}
          balance={eSavingsAccount.balance}
          progress={eSavingsAccount.progress}
          progressLabel={eSavingsAccount.progressLabel}
          accentColor={eSavingsAccount.accentColor}
          onPress={() => navigate('/accounts')} // Navigate to a specific account page later
        />

        <Card>
          <CardHeader>
            <CardTitle>Fund Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="overwrite-funds" />
              <Label htmlFor="overwrite-funds">Overwrite Remaining Funds</Label>
            </div>
            <Textarea
              readOnly
              value="Automatically allocate any unspent budget to your primary savings goal at the end of the month."
              className="h-auto bg-gray-100 border-none text-sm text-muted-foreground"
            />
          </CardContent>
        </Card>

      </main>

      <MobileBottomNav />
    </div>
  );
};

export default DashboardPage;