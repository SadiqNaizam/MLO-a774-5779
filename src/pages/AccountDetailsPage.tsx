import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTopNav from '@/components/layout/DashboardTopNav';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowUpRightFromSquare, Send } from 'lucide-react';

const transactions = [
  { id: 'txn1', date: '2024-07-20', description: 'Grocery Store Purchase', amount: -55.20, type: 'Debit' },
  { id: 'txn2', date: '2024-07-19', description: 'Salary Deposit', amount: 2500.00, type: 'Credit' },
  { id: 'txn3', date: '2024-07-18', description: 'Online Subscription', amount: -12.99, type: 'Debit' },
  { id: 'txn4', date: '2024-07-17', description: 'Restaurant Bill', amount: -78.50, type: 'Debit' },
  { id: 'txn5', date: '2024-07-15', description: 'ATM Withdrawal', amount: -100.00, type: 'Debit' },
];

const AccountDetailsPage: React.FC = () => {
  console.log('AccountDetailsPage loaded');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardTopNav
        title="Savings Account"
        showBackButton={true}
        onBackClick={() => navigate('/dashboard')}
        showSettingsButton={true}
        onSettingsClick={() => navigate('/settings')}
      />

      <main className="flex-grow overflow-y-auto pt-4 pb-20 px-4 space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate('/dashboard')}>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate('/accounts')}>Accounts</BreadcrumbLink> {/* Placeholder, could be previous accounts list */}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Savings Account Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">E-Savings Account</CardTitle>
            <CardDescription>Account Number: **** **** **** 1234</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Available Balance</p>
              <p className="text-3xl font-bold">$5,250.75</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline"><Send className="mr-2 h-4 w-4" /> Transfer</Button>
              <Button variant="outline"><ArrowDownToLine className="mr-2 h-4 w-4" /> Deposit</Button>
              <Button variant="outline"><ArrowUpRightFromSquare className="mr-2 h-4 w-4" /> Statements</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.date}</TableCell>
                    <TableCell>{txn.description}</TableCell>
                    <TableCell className={`text-right font-medium ${txn.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {txn.amount < 0 ? '-' : '+'}${Math.abs(txn.amount).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="link">View all transactions</Button>
          </CardFooter>
        </Card>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default AccountDetailsPage;