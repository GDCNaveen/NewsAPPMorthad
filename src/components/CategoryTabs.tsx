import { useRef, useEffect } from 'react';
import { categories } from '@/data/newsData';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { language } = useApp();
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const tabsContainer = tabsRef.current;
      const activeTab = activeTabRef.current;
      const containerWidth = tabsContainer.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      tabsContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-[52px] z-40 menu-bar">
      <div 
        ref={tabsRef}
        className="flex overflow-x-auto hide-scrollbar px-2"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                'whitespace-nowrap px-4 py-3 text-sm font-medium transition-all duration-200',
                isActive ? 'tab-active' : 'tab-inactive hover:text-foreground'
              )}
            >
              {language === 'te' ? category.labelTe : category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
