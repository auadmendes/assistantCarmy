import React, { useState, useRef, PropsWithChildren } from "react";

interface LongPressDeleteButtonProps {
  onLongPress: () => void;
}

const LongPressDeleteButton: React.FC<
  PropsWithChildren<LongPressDeleteButtonProps>
> = ({ onLongPress, children }) => {
  const [isLongPress, setIsLongPress] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseDown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLongPress(true);
      onLongPress();
    }, 500); // Duration for the long press
  };

  const handleMouseUp = () => {
    clearTimeout(timeoutRef.current!);
    if (isLongPress) {
      setIsLongPress(false);
    }
  };

  const handleTouchStart = () => {
    timeoutRef.current = setTimeout(() => {
      setIsLongPress(true);
      onLongPress();
    }, 500);
  };

  const handleTouchEnd = () => {
    clearTimeout(timeoutRef.current!);
    if (isLongPress) {
      setIsLongPress(false);
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children} {/* Render children here */}
    </div>
  );
};

export default LongPressDeleteButton;
