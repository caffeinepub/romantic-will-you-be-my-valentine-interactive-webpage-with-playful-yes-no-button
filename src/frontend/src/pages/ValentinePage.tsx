import { useState } from 'react';
import ValentineDecor from '../components/ValentineDecor';
import { Button } from '../components/ui/button';
import EvasiveNoButton from '../components/EvasiveNoButton';
import CelebrationView from '../components/CelebrationView';

const NO_PROMPTS = [
  "Are you sure?",
  "Really? Think about it...",
  "Come on, don't break my heart! 💔",
  "Please? I promise I'll be the best Valentine! 🥺",
  "One more chance? I'll do anything! 😭",
  "You're killing me here... Just say yes! 💕",
  "I'm not giving up! Say yes already! 😤"
];

export default function ValentinePage() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const handleNoClick = () => {
    setNoClickCount(prev => Math.min(prev + 1, NO_PROMPTS.length - 1));
  };

  const handleReplay = () => {
    setShowCelebration(false);
    setNoClickCount(0);
  };

  if (showCelebration) {
    return <CelebrationView onReplay={handleReplay} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ValentineDecor />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center space-y-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-romantic-primary animate-fade-in">
            WIll you be my valentines zaaaluuttiii?
          </h1>
          
          {noClickCount > 0 && (
            <p className="text-2xl md:text-3xl text-romantic-secondary font-semibold animate-fade-in">
              {NO_PROMPTS[noClickCount]}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center relative min-h-[120px]">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-xl px-12 py-6 h-auto font-semibold shadow-romantic hover:scale-105 transition-transform"
            >
              Yes
            </Button>
            
            {/* No button is now positioned fixed relative to viewport */}
            <EvasiveNoButton onNo={handleNoClick} />
          </div>
        </div>
      </main>

      <footer className="absolute bottom-4 left-0 right-0 z-20 text-center text-sm text-romantic-muted">
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
