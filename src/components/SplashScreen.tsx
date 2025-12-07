import { useEffect, useState } from 'react';
import { Newspaper } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="animate-scale-in flex flex-col items-center">
        <div className="mb-6 rounded-2xl bg-primary-foreground/10 p-5">
          <Newspaper className="h-16 w-16 text-primary-foreground" strokeWidth={1.5} />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-primary-foreground">
          NewsFlash
        </h1>
        <p className="text-primary-foreground/80">
          Stay Informed, Stay Ahead
        </p>
      </div>
      <div className="absolute bottom-12 flex gap-1">
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-primary-foreground/60" style={{ animationDelay: '0ms' }} />
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-primary-foreground/60" style={{ animationDelay: '200ms' }} />
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-primary-foreground/60" style={{ animationDelay: '400ms' }} />
      </div>
    </div>
  );
}
