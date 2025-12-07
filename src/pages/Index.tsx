import { useState, useEffect } from 'react';
import { AppProvider } from '@/contexts/AppContext';
import { SplashScreen } from '@/components/SplashScreen';
import { CategoryTabs } from '@/components/CategoryTabs';
import { BottomNav, NavItem } from '@/components/BottomNav';
import { NewsFeed } from '@/components/NewsFeed';
import { ArticleView } from '@/components/ArticleView';
import { SearchView } from '@/components/SearchView';
import { SavedView } from '@/components/SavedView';
import { SettingsView } from '@/components/SettingsView';
import { NewsItem } from '@/data/newsData';
import { Newspaper } from 'lucide-react';

function NewsApp() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeNav, setActiveNav] = useState<NavItem>('home');
  const [activeCategory, setActiveCategory] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const handleSelectArticle = (article: NewsItem) => {
    setSelectedArticle(article);
  };

  const handleBackFromArticle = () => {
    setSelectedArticle(null);
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (selectedArticle) {
    return <ArticleView article={selectedArticle} onBack={handleBackFromArticle} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {activeNav === 'home' && (
        <>
          {/* App Header */}
          <header className="sticky top-0 z-50 flex items-center gap-2 border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
            <div className="rounded-lg bg-primary p-1.5">
              <Newspaper className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
            </div>
            <h1 className="text-lg font-bold text-foreground">NewsFlash</h1>
          </header>
          
          {/* Category Tabs */}
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* News Feed */}
          <NewsFeed
            category={activeCategory}
            onSelectArticle={handleSelectArticle}
          />
        </>
      )}

      {activeNav === 'search' && (
        <SearchView onSelectArticle={handleSelectArticle} />
      )}

      {activeNav === 'saved' && (
        <SavedView onSelectArticle={handleSelectArticle} />
      )}

      {activeNav === 'settings' && <SettingsView />}

      <BottomNav activeNav={activeNav} onNavChange={setActiveNav} />
    </div>
  );
}

export default function Index() {
  return (
    <AppProvider>
      <NewsApp />
    </AppProvider>
  );
}
