import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'pointer' | 'text';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const positionRef = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const hasCoarsePointer =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;

    setIsTouchDevice(hasCoarsePointer);

    if (hasCoarsePointer) {
      return;
    }

    const updateCursorPosition = () => {
      if (!cursorRef.current) return;

      const { x, y } = positionRef.current;
      const rotation = cursorState !== 'text' ? 'rotate(-45deg)' : 'rotate(0deg)';
      cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) ${rotation}`;
      frameRef.current = undefined;
    };

    const handleMouseMove = (event: MouseEvent) => {
      positionRef.current = { x: event.clientX, y: event.clientY };

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    const isClickable = (element: HTMLElement) => {
      const tag = element.tagName.toLowerCase();
      const role = element.getAttribute('role');

      return (
        tag === 'a' ||
        tag === 'button' ||
        role === 'button' ||
        element.onclick !== null ||
        element.classList.contains('cursor-pointer') ||
        element.closest('a') !== null ||
        element.closest('button') !== null
      );
    };

    const isTextInput = (element: HTMLElement) => {
      const tag = element.tagName.toLowerCase();

      return (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        element.contentEditable === 'true'
      );
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isTextInput(target)) {
        setCursorState('text');
      } else if (isClickable(target)) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);

    const style = document.createElement('style');
    style.textContent = `
      @media (pointer: fine) {
        *,
        *::before,
        *::after {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      style.remove();
    };
  }, [cursorState]);

  if (isTouchDevice) {
    return null;
  }

  const cursorIcon = {
    default: 'fluent:cursor-20-filled',
    pointer: 'clarity:cursor-hand-solid',
    text: 'mdi:cursor-text',
  }[cursorState];

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 pointer-events-none z-[9999] will-change-transform"
      aria-hidden="true"
    >
      <Icon icon={cursorIcon} className="w-8 h-8 text-black" />
    </div>
  );
};

export default Cursor;
