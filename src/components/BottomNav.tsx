import { Home, Search, Bookmark, Settings } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

type NavItem = 'home' | 'search' | 'saved' | 'settings';

interface BottomNavProps {
  activeNav: NavItem;
  onNavChange: (nav: NavItem) => void;
}

const navItems = [
  { id: 'home' as NavItem, icon: Home, label: 'Home', labelTe: 'హోమ్' },
  { id: 'search' as NavItem, icon: Search, label: 'Search', labelTe: 'శోధన' },
  { id: 'saved' as NavItem, icon: Bookmark, label: 'Saved', labelTe: 'సేవ్' },
  { id: 'settings' as NavItem, icon: Settings, label: 'Settings', labelTe: 'సెట్టింగ్స్' },
];

export function BottomNav({ activeNav, onNavChange }: BottomNavProps) {
  const { language } = useApp();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card safe-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around">
        {navItems.map(({ id, icon: Icon, label, labelTe }) => {
          const isActive = activeNav === id;
          return (
            <button
              key={id}
              onClick={() => onNavChange(id)}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 py-3 transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className={cn('h-5 w-5', isActive && 'scale-110')} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">
                {language === 'te' ? labelTe : label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export type { NavItem };
