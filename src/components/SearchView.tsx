import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { newsData, NewsItem } from '@/data/newsData';
import { useApp } from '@/contexts/AppContext';
import { NewsCard } from './NewsCard';
import { cn } from '@/lib/utils';

interface SearchViewProps {
  onSelectArticle: (article: NewsItem) => void;
}

export function SearchView({ onSelectArticle }: SearchViewProps) {
  const { language } = useApp();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return newsData.filter(news => {
      const title = (language === 'te' ? news.titleTe : news.title).toLowerCase();
      const summary = (language === 'te' ? news.summaryTe : news.summary).toLowerCase();
      const category = news.category.toLowerCase();
      return title.includes(searchTerm) || summary.includes(searchTerm) || category.includes(searchTerm);
    });
  }, [query, language]);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Search Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-background p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'te' ? 'వార్తలు శోధించండి...' : 'Search news...'}
            className={cn(
              'w-full rounded-xl border border-input bg-secondary py-3 pl-10 pr-10',
              'text-foreground placeholder:text-muted-foreground',
              'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
              language === 'te' && 'font-telugu'
            )}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="p-4">
        {query && results.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className={cn(
              'text-lg font-medium text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'ఫలితాలు కనుగొనబడలేదు' : 'No results found'}
            </p>
            <p className={cn(
              'mt-1 text-sm text-muted-foreground/70',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'వేరే పదాలతో ప్రయత్నించండి' : 'Try different keywords'}
            </p>
          </div>
        ) : query ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {results.length} {language === 'te' ? 'ఫలితాలు' : 'results'}
            </p>
            {results.map((news, index) => (
              <NewsCard
                key={news.id}
                news={news}
                onClick={() => onSelectArticle(news)}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-12 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground/30" />
            <p className={cn(
              'text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'వార్తలు, అంశాలు శోధించండి' : 'Search for news, topics'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
