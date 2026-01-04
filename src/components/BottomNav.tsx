import React from 'react';
import { Home, Users, Clapperboard, Bell, Menu } from 'lucide-react';
// Assuming React Router or similar context is available for navigation hooks
// import { useLocation, Link } from 'react-router-dom'; 

interface NavItem {
  name: string;
  href: string;
  Icon: React.ElementType;
}

// Mocking useLocation for demonstration purposes in a raw file
// In a real application, this would be imported from 'react-router-dom'
const useMockLocation = (mockPath: string) => ({
  pathname: mockPath,
});

const navItems: NavItem[] = [
  { name: 'Feed', href: '/', Icon: Home },
  { name: 'Friends', href: '/friends', Icon: Users },
  { name: 'Watch', href: '/watch', Icon: Clapperboard },
  { name: 'Notifications', href: '/notifications', Icon: Bell },
  { name: 'Menu', href: '/menu', Icon: Menu },
];

const BottomNav: React.FC = () => {
  // Replace with actual useLocation() hook in a routed environment
  const location = useMockLocation('/'); 
  const pathname = location.pathname;

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around items-center h-14 max-w-xl mx-auto">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            // Replace 'a' with the project's 'Link' component (e.g., from react-router-dom or next/link)
            <a 
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative group`}
              aria-label={item.name}
            >
              <item.Icon 
                className={`w-6 h-6 ${
                  active 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-gray-700'
                }`} 
              />
              {/* Optional: Visual indicator bar */}
              {active && (
                <span className="absolute top-0 w-8 h-0.5 bg-blue-600 rounded-b-lg"></span>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;