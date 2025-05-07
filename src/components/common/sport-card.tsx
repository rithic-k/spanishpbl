import type { ReactNode } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type SportCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
};

export function SportCard({ title, description, icon, imageUrl, imageAlt, imageHint }: SportCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-x-3 pb-3">
        <div className="p-2 bg-primary/10 rounded-md text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          data-ai-hint={imageHint}
        />
      </div>
      <CardContent className="pt-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
