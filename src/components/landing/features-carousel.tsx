
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeaturesCarouselProps = {
  features: Feature[];
};

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="mt-12 relative h-80 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-sm"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col">
            <CardHeader>
              <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                {features[index].icon}
              </div>
              <CardTitle>{features[index].title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{features[index].description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
