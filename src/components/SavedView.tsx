import { Bookmark } from 'lucide-react';
import { newsData, NewsItem } from '@/data/newsData';
import { useApp } from '@/contexts/AppContext';
import { NewsCard } from './NewsCard';
import { cn } from '@/lib/utils';

interface SavedViewProps {
  onSelectArticle: (article: NewsItem) => void;
}

export function SavedView({ onSelectArticle }: SavedViewProps) {
  const { language, savedNews } = useApp();

  const savedArticles = newsData.filter(news => savedNews.includes(news.id));

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-background px-4 py-4">
        <h1 className={cn(
          'text-xl font-bold text-foreground',
          language === 'te' && 'font-telugu'
        )}>
          {language === 'te' ? 'సేవ్ చేసిన వార్తలు' : 'Saved Articles'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {savedArticles.length} {language === 'te' ? 'వార్తలు' : 'articles'}
        </p>
      </div>

      {/* Content */}
      <div className="p-4">
        {savedArticles.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center">
            <div className="mb-4 rounded-full bg-secondary p-4">
              <Bookmark className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className={cn(
              'text-lg font-medium text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'సేవ్ చేసిన వార్తలు లేవు' : 'No saved articles'}
            </p>
            <p className={cn(
              'mt-1 text-sm text-muted-foreground/70',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'వార్తలను సేవ్ చేయడానికి బుక్‌మార్క్ చిహ్నాన్ని నొక్కండి' : 'Tap the bookmark icon to save articles'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedArticles.map((news, index) => (
              <NewsCard
                key={news.id}
                news={news}
                onClick={() => onSelectArticle(news)}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
