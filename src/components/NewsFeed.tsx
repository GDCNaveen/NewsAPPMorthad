import { useMemo } from 'react';
import { newsData, NewsItem } from '@/data/newsData';
import { NewsCard } from './NewsCard';

interface NewsFeedProps {
  category: string;
  onSelectArticle: (article: NewsItem) => void;
}

export function NewsFeed({ category, onSelectArticle }: NewsFeedProps) {
  const filteredNews = useMemo(() => {
    if (category === 'home') {
      return newsData;
    }
    return newsData.filter(
      news => news.category.toLowerCase() === category.toLowerCase()
    );
  }, [category]);

  return (
    <div className="pb-24">
      {filteredNews.map((news, index) => (
        <NewsCard
          key={news.id}
          news={news}
          onClick={() => onSelectArticle(news)}
          index={index}
        />
      ))}
      {filteredNews.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No news in this category</p>
        </div>
      )}
    </div>
  );
}
