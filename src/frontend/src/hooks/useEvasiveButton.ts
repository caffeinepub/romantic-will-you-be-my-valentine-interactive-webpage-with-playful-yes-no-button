import { RefObject } from 'react';

export default function useEvasiveButton(
  buttonRef: RefObject<HTMLElement | null>
) {
  const moveAway = (pointerX: number, pointerY: number, currentX: number, currentY: number) => {
    if (!buttonRef.current) {
      return { x: currentX, y: currentY };
    }

    const button = buttonRef.current.getBoundingClientRect();
    
    // Get viewport dimensions (use visualViewport for mobile if available)
    const viewportWidth = window.visualViewport?.width || window.innerWidth;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;

    // Calculate button center in viewport coordinates
    const buttonCenterX = currentX + button.width / 2;
    const buttonCenterY = currentY + button.height / 2;

    // Calculate direction away from pointer
    const deltaX = buttonCenterX - pointerX;
    const deltaY = buttonCenterY - pointerY;
    
    // Normalize and scale the movement
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const moveDistance = 100; // pixels to move
    
    let newX = currentX + (deltaX / distance) * moveDistance;
    let newY = currentY + (deltaY / distance) * moveDistance;

    // Add some randomness to make it more playful
    newX += (Math.random() - 0.5) * 40;
    newY += (Math.random() - 0.5) * 40;

    // Constrain within viewport bounds
    const maxX = viewportWidth - button.width;
    const maxY = viewportHeight - button.height;
    
    newX = Math.max(0, Math.min(maxX, newX));
    newY = Math.max(0, Math.min(maxY, newY));

    return { x: newX, y: newY };
  };

  const getRandomPosition = (buttonRef: RefObject<HTMLElement | null>) => {
    if (!buttonRef.current) {
      return { x: 0, y: 0 };
    }

    const button = buttonRef.current.getBoundingClientRect();
    
    // Get viewport dimensions
    const viewportWidth = window.visualViewport?.width || window.innerWidth;
    const viewportHeight = window.visualViewport?.height || window.innerHeight;

    // Calculate safe random position within viewport
    const maxX = viewportWidth - button.width;
    const maxY = viewportHeight - button.height;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { 
      x: Math.max(0, randomX), 
      y: Math.max(0, randomY) 
    };
  };

  return { moveAway, getRandomPosition };
}
