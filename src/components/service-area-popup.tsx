'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export const ServiceAreaPopup = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView && !hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasBeenShown(true);
      }, 500); // Small delay before showing
      return () => clearTimeout(timer);
    }
  }, [inView, hasBeenShown]);

  return (
    <div ref={ref}>
      {children}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>A quick note on our service area!</AlertDialogTitle>
            <AlertDialogDescription>
              Even if your city isn't listed, we invite you to send us a message to verify if we can reach you. We're always looking to expand!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsOpen(false)}>Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
