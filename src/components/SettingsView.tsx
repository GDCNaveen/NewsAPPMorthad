import { Moon, Sun, Globe, Bell, ChevronRight } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

export function SettingsView() {
  const { language, setLanguage, theme, setTheme, notifications, setNotifications } = useApp();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-border bg-background px-4 py-4">
        <h1 className={cn(
          'text-xl font-bold text-foreground',
          language === 'te' && 'font-telugu'
        )}>
          {language === 'te' ? 'సెట్టింగ్స్' : 'Settings'}
        </h1>
      </div>

      {/* Settings List */}
      <div className="p-4">
        <div className="space-y-6">
          {/* Appearance */}
          <section>
            <h2 className={cn(
              'mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'రూపం' : 'Appearance'}
            </h2>
            <div className="rounded-xl bg-card news-card-shadow overflow-hidden">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex w-full items-center justify-between p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? (
                    <Moon className="h-5 w-5 text-primary" />
                  ) : (
                    <Sun className="h-5 w-5 text-primary" />
                  )}
                  <div className="text-left">
                    <p className={cn(
                      'font-medium text-foreground',
                      language === 'te' && 'font-telugu'
                    )}>
                      {language === 'te' ? 'డార్క్ మోడ్' : 'Dark Mode'}
                    </p>
                    <p className={cn(
                      'text-sm text-muted-foreground',
                      language === 'te' && 'font-telugu'
                    )}>
                      {theme === 'dark' 
                        ? (language === 'te' ? 'ఆన్' : 'On') 
                        : (language === 'te' ? 'ఆఫ్' : 'Off')}
                    </p>
                  </div>
                </div>
                <Switch checked={theme === 'dark'} />
              </button>
            </div>
          </section>

          {/* Language */}
          <section>
            <h2 className={cn(
              'mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'భాష' : 'Language'}
            </h2>
            <div className="rounded-xl bg-card news-card-shadow overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className="flex w-full items-center justify-between border-b border-border p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">English</span>
                </div>
                {language === 'en' && (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
              <button
                onClick={() => setLanguage('te')}
                className="flex w-full items-center justify-between p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium font-telugu text-foreground">తెలుగు</span>
                </div>
                {language === 'te' && (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className={cn(
              'mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'నోటిఫికేషన్లు' : 'Notifications'}
            </h2>
            <div className="rounded-xl bg-card news-card-shadow overflow-hidden">
              <button
                onClick={() => setNotifications(!notifications)}
                className="flex w-full items-center justify-between p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className={cn(
                      'font-medium text-foreground',
                      language === 'te' && 'font-telugu'
                    )}>
                      {language === 'te' ? 'పుష్ నోటిఫికేషన్లు' : 'Push Notifications'}
                    </p>
                    <p className={cn(
                      'text-sm text-muted-foreground',
                      language === 'te' && 'font-telugu'
                    )}>
                      {language === 'te' ? 'తాజా వార్తల అప్‌డేట్లు పొందండి' : 'Get latest news updates'}
                    </p>
                  </div>
                </div>
                <Switch checked={notifications} />
              </button>
            </div>
          </section>

          {/* About */}
          <section>
            <h2 className={cn(
              'mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground',
              language === 'te' && 'font-telugu'
            )}>
              {language === 'te' ? 'గురించి' : 'About'}
            </h2>
            <div className="rounded-xl bg-card news-card-shadow overflow-hidden">
              <div className="p-4">
                <p className="text-lg font-bold text-primary">NewsFlash</p>
                <p className="text-sm text-muted-foreground">Version 1.0.0</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
