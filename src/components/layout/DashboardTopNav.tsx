import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Menu, Bell, Settings } from 'lucide-react';

interface DashboardTopNavProps {
  title?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
  showNotificationsButton?: boolean;
  notificationCount?: number;
  onNotificationsClick?: () => void;
  showSettingsButton?: boolean;
  onSettingsClick?: () => void;
}

const DashboardTopNav: React.FC<DashboardTopNavProps> = ({
  title,
  showBackButton = false,
  onBackClick,
  showMenuButton = true,
  onMenuClick,
  showNotificationsButton = true,
  notificationCount,
  onNotificationsClick,
  showSettingsButton = false,
  onSettingsClick,
}) => {
  console.log("Rendering DashboardTopNav with title:", title);
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1); // Default back behavior
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-1">
          {showBackButton && (
            <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack} aria-label="Go back">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          {showMenuButton && !showBackButton && ( // Show menu only if no back button or explicitly told
            <Button variant="ghost" size="icon" className="mr-2 lg:hidden" onClick={onMenuClick} aria-label="Open menu"> {/* Example: Show only on mobile */}
              <Menu className="h-5 w-5" />
            </Button>
          )}
          {title && <h1 className="text-lg font-semibold">{title}</h1>}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {showNotificationsButton && (
            <Button variant="ghost" size="icon" onClick={onNotificationsClick} aria-label="Notifications">
              <Bell className="h-5 w-5" />
              {notificationCount && notificationCount > 0 && (
                <span className="absolute top-1 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              )}
            </Button>
          )}
          {showSettingsButton && (
             <Button variant="ghost" size="icon" onClick={onSettingsClick} aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardTopNav;