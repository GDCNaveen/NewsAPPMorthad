import { ArrowLeft, Share2, Bookmark, BookmarkCheck } from 'lucide-react';
import { NewsItem } from '@/data/newsData';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface ArticleViewProps {
  article: NewsItem;
  onBack: () => void;
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

export function ArticleView({ article, onBack }: ArticleViewProps) {
  const { language, toggleSaved, isSaved } = useApp();
  const saved = isSaved(article.id);

  const handleShare = async () => {
    const title = language === 'te' ? article.titleTe : article.title;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: language === 'te' ? article.summaryTe : article.summary,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${title}\n${window.location.href}`);
      toast({
        title: language === 'te' ? 'లింక్ కాపీ చేయబడింది' : 'Link copied',
      });
    }
  };

  const handleSave = () => {
    toggleSaved(article.id);
    toast({
      title: saved 
        ? (language === 'te' ? 'తొలగించబడింది' : 'Removed') 
        : (language === 'te' ? 'సేవ్ చేయబడింది' : 'Saved'),
    });
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm">
        <button
          onClick={onBack}
          className="rounded-full p-2 transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
          >
            {saved ? (
              <BookmarkCheck className="h-5 w-5 text-primary" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={handleShare}
            className="rounded-full p-2 transition-colors hover:bg-secondary"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Content */}
      <article className="pb-24">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={language === 'te' ? article.titleTe : article.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="px-4 py-5">
          <div className="mb-3 flex items-center gap-3">
            <span className={cn('category-badge', categoryStyles[article.category])}>
              {article.category}
            </span>
            <time className="text-sm text-muted-foreground">
              {new Date(article.date).toLocaleDateString(language === 'te' ? 'te-IN' : 'en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>

          <h1 className={cn(
            'mb-4 text-2xl font-bold leading-tight text-foreground',
            language === 'te' && 'font-telugu'
          )}>
            {language === 'te' ? article.titleTe : article.title}
          </h1>

          <p className={cn(
            'mb-6 text-base leading-relaxed text-muted-foreground',
            language === 'te' && 'font-telugu'
          )}>
            {language === 'te' ? article.summaryTe : article.summary}
          </p>

          <div className="h-px bg-border mb-6" />

          <div className={cn(
            'text-base leading-relaxed text-foreground',
            language === 'te' && 'font-telugu'
          )}>
            {language === 'te' ? article.contentTe : article.content}
          </div>
        </div>
      </article>
    </div>
  );
}
