import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, BarChart2, MoreHorizontal, LucideIcon } from 'lucide-react'; // Example icons
import { cn } from '@/lib/utils';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: (pathname: string, href: string) => boolean; // Custom active check
}

interface MobileBottomNavProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/dashboard", icon: Home },
  { label: "Accounts", href: "/accounts", icon: CreditCard },
  { label: "Insights", href: "/insights", icon: BarChart2 },
  { label: "More", href: "/more", icon: MoreHorizontal },
];

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  navItems = defaultNavItems,
}) => {
  const location = useLocation();
  console.log("Rendering MobileBottomNav, current path:", location.pathname);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 h-16 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"> {/* Hidden on md screens and up */}
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map((item) => {
          const isActive = item.isActive
            ? item.isActive(location.pathname, item.href)
            : location.pathname.startsWith(item.href); // Default active check

          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-2 hover:bg-muted transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;