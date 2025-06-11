import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTopNav from '@/components/layout/DashboardTopNav';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Assuming Chart component uses recharts
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"; // Shadcn chart wrapper

// Sample data for charts
const spendingData = [
  { category: 'Groceries', spent: 400 },
  { category: 'Dining Out', spent: 250 },
  { category: 'Utilities', spent: 150 },
  { category: 'Transport', spent: 100 },
  { category: 'Shopping', spent: 300 },
];

const savingsData = [
  { month: 'Jan', saved: 200 },
  { month: 'Feb', saved: 250 },
  { month: 'Mar', saved: 220 },
  { month: 'Apr', saved: 300 },
  { month: 'May', saved: 280 },
  { month: 'Jun', saved: 350 },
];

const chartConfig = {
  spent: {
    label: "Spent",
    color: "hsl(var(--chart-1))",
  },
  saved: {
    label: "Saved",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;


const FinancialInsightsPage: React.FC = () => {
  console.log('FinancialInsightsPage loaded');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardTopNav
        title="Financial Insights"
        showBackButton={true}
        onBackClick={() => navigate('/dashboard')}
        showSettingsButton={true}
        onSettingsClick={() => navigate('/settings')}
      />

      <main className="flex-grow overflow-y-auto pt-4 pb-20 px-4 space-y-6">
        <Tabs defaultValue="spending" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
            <TabsTrigger value="savings">Savings Trends</TabsTrigger>
          </TabsList>
          <TabsContent value="spending">
            <Card>
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>Your expenses breakdown for the current month.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={spendingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar dataKey="spent" fill="var(--color-spent)" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="savings">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Savings Progress</CardTitle>
                <CardDescription>How your savings have grown over the past few months.</CardDescription>
              </CardHeader>
              <CardContent>
                 <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={savingsData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="saved" fill="var(--color-saved)" radius={4} />
                        </BarChart>
                    </ResponsiveContainer>
                 </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default FinancialInsightsPage;