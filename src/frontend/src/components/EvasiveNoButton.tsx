import { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import useEvasiveButton from '../hooks/useEvasiveButton';

interface EvasiveNoButtonProps {
  onNo?: () => void;
}

export default function EvasiveNoButton({ onNo }: EvasiveNoButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { moveAway, getRandomPosition } = useEvasiveButton(buttonRef);

  // Initialize with a safe centered position
  useEffect(() => {
    if (buttonRef.current) {
      const viewportWidth = window.visualViewport?.width || window.innerWidth;
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const button = buttonRef.current.getBoundingClientRect();
      
      setPosition({
        x: (viewportWidth - button.width) / 2,
        y: (viewportHeight - button.height) / 2 + 50, // Slightly below center
      });
    }
  }, []);

  const handlePointerEnter = (e: React.PointerEvent) => {
    const newPosition = moveAway(e.clientX, e.clientY, position.x, position.y);
    setPosition(newPosition);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPosition = moveAway(e.clientX, e.clientY, position.x, position.y);
    setPosition(newPosition);
  };

  const handleClick = () => {
    // Call the onNo callback first (to increment the prompt)
    if (onNo) {
      onNo();
    }
    
    // Then immediately reposition to a random location
    const newPosition = getRandomPosition(buttonRef);
    setPosition(newPosition);
  };

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="lg"
      onPointerEnter={handlePointerEnter}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className="fixed text-xl px-12 py-6 h-auto font-semibold transition-all duration-200 ease-out cursor-pointer z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      No
    </Button>
  );
}
