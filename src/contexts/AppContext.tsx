import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'te';
type Theme = 'light' | 'dark';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  titleTe?: string;
  summary: string;
  summaryTe?: string;
  image: string;
  content: string;
  contentTe?: string;
  date: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  savedNews: number[];
  toggleSaved: (id: number) => void;
  isSaved: (id: number) => boolean;
  notifications: boolean;
  setNotifications: (enabled: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('news-app-language');
    return (saved as Language) || 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('news-app-theme');
    return (saved as Theme) || 'light';
  });

  const [savedNews, setSavedNews] = useState<number[]>(() => {
    const saved = localStorage.getItem('news-app-saved');
    return saved ? JSON.parse(saved) : [];
  });

  const [notifications, setNotifications] = useState<boolean>(() => {
    const saved = localStorage.getItem('news-app-notifications');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('news-app-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('news-app-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('news-app-saved', JSON.stringify(savedNews));
  }, [savedNews]);

  useEffect(() => {
    localStorage.setItem('news-app-notifications', JSON.stringify(notifications));
  }, [notifications]);

  const toggleSaved = (id: number) => {
    setSavedNews(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const isSaved = (id: number) => savedNews.includes(id);

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      savedNews,
      toggleSaved,
      isSaved,
      notifications,
      setNotifications,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
