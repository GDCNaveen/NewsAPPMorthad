import { useState } from 'react';
import { Share2, Bookmark, BookmarkCheck } from 'lucide-react';
import { NewsItem } from '@/data/newsData';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface NewsCardProps {
  news: NewsItem;
  onClick: () => void;
  index: number;
}

const categoryStyles: Record<string, string> = {
  'Local': 'category-local',
  'State': 'category-state',
  'National': 'category-national',
  'International': 'category-international',
  'Sports': 'category-sports',
  'Entertainment': 'category-entertainment',
  'Technology': 'category-technology',
};

export function NewsCard({ news, onClick, index }: NewsCardProps) {
  const { language, toggleSaved, isSaved } = useApp();
  const saved = isSaved(news.id);
  const [expanded, setExpanded] = useState(false);

  const summary = language === 'te' ? news.summaryTe : news.summary;
  const shouldTruncate = summary.length > 100;

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const title = language === 'te' ? news.titleTe : news.title;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: language === 'te' ? news.summaryTe : news.summary,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${title}\n${window.location.href}`);
      toast({
        title: language === 'te' ? 'లింక్ కాపీ చేయబడింది' : 'Link copied',
        description: language === 'te' ? 'క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది' : 'Copied to clipboard',
      });
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaved(news.id);
    toast({
      title: saved 
        ? (language === 'te' ? 'తొలగించబడింది' : 'Removed') 
        : (language === 'te' ? 'సేవ్ చేయబడింది' : 'Saved'),
      description: saved 
        ? (language === 'te' ? 'బుక్‌మార్క్‌ల నుండి తొలగించబడింది' : 'Removed from bookmarks')
        : (language === 'te' ? 'బుక్‌మార్క్‌లకు జోడించబడింది' : 'Added to bookmarks'),
    });
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <article
      className={cn(
        'bg-card border-b border-border',
        'animate-fade-up'
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Full-width image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer" onClick={onClick}>
        <img
          src={news.image}
          alt={language === 'te' ? news.titleTe : news.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className={cn('category-badge absolute left-3 top-3', categoryStyles[news.category])}>
          {news.category}
        </span>
      </div>
      
      <div className="p-4">
        <h3 
          onClick={onClick}
          className={cn(
            'mb-2 text-base font-semibold leading-tight text-card-foreground cursor-pointer',
            language === 'te' && 'font-telugu'
          )}
        >
          {language === 'te' ? news.titleTe : news.title}
        </h3>
        
        <div className={cn('text-sm text-muted-foreground', language === 'te' && 'font-telugu')}>
          <p className={expanded ? '' : 'line-clamp-2'}>
            {summary}
          </p>
          {shouldTruncate && (
            <button
              onClick={toggleExpand}
              className="text-primary font-medium mt-1 hover:underline"
            >
              {expanded 
                ? (language === 'te' ? 'తక్కువ చదవండి' : 'Read Less')
                : (language === 'te' ? 'మరింత చదవండి' : 'Read More')
              }
            </button>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <time className="text-xs text-muted-foreground">
            {new Date(news.date).toLocaleDateString(language === 'te' ? 'te-IN' : 'en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </time>
          
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label={saved ? 'Remove from saved' : 'Save article'}
            >
              {saved ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={handleShare}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Share article"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
