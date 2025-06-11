import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardTopNav from '@/components/layout/DashboardTopNav';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const settingsSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  pushNotifications: z.boolean().default(false),
  emailNotifications: z.boolean().default(true),
  twoFactorAuth: z.boolean().default(false),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

const SettingsPage: React.FC = () => {
  console.log('SettingsPage loaded');
  const navigate = useNavigate();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: "user@example.com",
      pushNotifications: true,
      emailNotifications: false,
      twoFactorAuth: true,
    },
  });

  function onSubmit(data: SettingsFormValues) {
    console.log("Settings saved:", data);
    // Here you would typically call an API to save settings
    alert("Settings saved successfully!");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardTopNav
        title="Settings"
        showBackButton={true}
        onBackClick={() => navigate(-1)} // Or navigate to a specific previous page
      />

      <main className="flex-grow overflow-y-auto pt-4 pb-20 px-4 space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your account email and personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Add more profile fields here if needed */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="pushNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Push Notifications</FormLabel>
                        <FormDescription>
                          Receive alerts directly on your device.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Email Notifications</FormLabel>
                        <FormDescription>
                          Get updates sent to your email address.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Enhance your account security.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="twoFactorAuth"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Two-Factor Authentication (2FA)</FormLabel>
                        <FormDescription>
                          Add an extra layer of security to your account.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                 <Button variant="outline">Change Password</Button>
              </CardContent>
            </Card>

            <Button type="submit" className="w-full">Save Settings</Button>
          </form>
        </Form>
      </main>

      <MobileBottomNav />
    </div>
  );
};

export default SettingsPage;