import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import '../components/animations/celebration.css';

interface CelebrationViewProps {
  onReplay: () => void;
}

export default function CelebrationView({ onReplay }: CelebrationViewProps) {
  const [hearts, setHearts] = useState<number[]>([]);
  const [fireworks, setFireworks] = useState<number[]>([]);

  useEffect(() => {
    // Generate hearts
    const heartInterval = setInterval(() => {
      setHearts(prev => [...prev, Date.now()]);
    }, 300);

    // Generate fireworks
    const fireworkInterval = setInterval(() => {
      setFireworks(prev => [...prev, Date.now()]);
    }, 800);

    // Cleanup after 5 seconds
    const cleanup = setTimeout(() => {
      clearInterval(heartInterval);
      clearInterval(fireworkInterval);
    }, 5000);

    return () => {
      clearInterval(heartInterval);
      clearInterval(fireworkInterval);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-romantic-bg-start via-romantic-bg-mid to-romantic-bg-end">
      {/* Background decoration */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
        }}
      />

      {/* Fireworks */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {fireworks.map((id, index) => (
          <div
            key={id}
            className="firework absolute"
            style={{
              left: `${20 + (index % 5) * 15}%`,
              top: `${10 + (index % 4) * 20}%`,
              animationDelay: `${(index % 3) * 0.3}s`,
            }}
          >
            <img 
              src="/assets/generated/fireworks-bursts.dim_1024x1024.png" 
              alt="" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Floating hearts */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {hearts.map((id, index) => (
          <div
            key={id}
            className="heart-pop absolute"
            style={{
              left: `${Math.random() * 90}%`,
              bottom: '-10%',
              animationDelay: `${(index % 5) * 0.1}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <img 
              src="/assets/generated/hearts-stickers.dim_512x512.png" 
              alt="" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Main content */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 animate-celebration-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-romantic-primary drop-shadow-romantic animate-scale-in">
            YAAAYYY i lovee youuu smm zaaluubabbyyyyy😘💋
          </h1>
          
          <div className="pt-8 animate-fade-in-delayed">
            <Button
              onClick={onReplay}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto font-semibold shadow-romantic hover:scale-105 transition-transform"
            >
              Celebrate Again
            </Button>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-4 left-0 right-0 z-30 text-center text-sm text-romantic-muted">
        <p>
          Built with <span className="text-romantic-accent">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-romantic-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
