import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTopNav from '@/components/layout/DashboardTopNav';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Bell } from 'lucide-react';

const sampleNotifications = [
  { id: 1, type: 'alert', title: 'Security Alert: Unusual Login Attempt', message: 'We detected a login attempt from an unrecognized device. If this wasn\'t you, please secure your account immediately.', date: '2 hours ago', read: false, icon: <AlertCircle className="h-5 w-5 text-red-500" /> },
  { id: 2, type: 'info', title: 'Payment Successful: Netflix Subscription', message: 'Your monthly payment of $15.99 to Netflix has been processed successfully.', date: '1 day ago', read: false, icon: <CheckCircle2 className="h-5 w-5 text-green-500" /> },
  { id: 3, type: 'promo', title: 'New Feature: Savings Goals', message: 'Explore our new Savings Goals feature to help you reach your financial targets faster!', date: '3 days ago', read: true, icon: <Bell className="h-5 w-5 text-blue-500" /> },
  { id: 4, type: 'reminder', title: 'Upcoming Bill: Electricity', message: 'Your electricity bill of $75.50 is due on July 25th, 2024.', date: '5 days ago', read: true, icon: <Bell className="h-5 w-5 text-yellow-500" /> },
];

const NotificationsPage: React.FC = () => {
  console.log('NotificationsPage loaded');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <DashboardTopNav
        title="Notifications"
        showBackButton={true}
        onBackClick={() => navigate('/dashboard')}
      />

      <main className="flex-grow overflow-y-hidden"> {/* Key: overflow-y-hidden on main, ScrollArea handles its own scroll */}
        <ScrollArea className="h-full pt-4 pb-20 px-4"> {/* Adjust padding as needed, pb for bottom nav */}
          {sampleNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Bell className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-xl font-semibold text-gray-600">No New Notifications</p>
              <p className="text-sm text-gray-500">You're all caught up!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {sampleNotifications.map((notification) => (
                <Card key={notification.id} className={` ${notification.read ? 'bg-white' : 'bg-blue-50 border-blue-200'}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 mt-1">{notification.icon}</span>
                      <div>
                        <CardTitle className="text-base">{notification.title}</CardTitle>
                        <CardDescription className="text-xs">{notification.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{notification.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default NotificationsPage;