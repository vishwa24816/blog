
'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeaturesCarouselProps = {
  features: Feature[];
};

export function FeaturesCarousel({ features }: FeaturesCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const carouselRef = React.useRef<any>(null);

  const handleInteraction = () => {
    const autoplay = carouselRef.current?.plugins()?.autoplay;
    if (!autoplay) return;

    if(autoplay.isPlaying()) autoplay.stop();
    setTimeout(() => {
        if (!autoplay.isPlaying()) {
            autoplay.play();
        }
    }, 5000);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const autoplay = carouselRef.current?.plugins()?.autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
        autoplay.stop();
    }
  }

  return (
    <div className="mt-12" onMouseDown={handleInteraction} onTouchStart={handleInteraction}>
        <Carousel
            ref={carouselRef}
            plugins={[plugin.current]}
            className="w-full"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
            {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3" onDoubleClick={handleDoubleClick}>
                    <div className="p-1 h-full">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col">
                            <CardHeader>
                                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                                {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  );
}
