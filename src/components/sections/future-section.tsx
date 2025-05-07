import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const futurePoints = [
  "Continuous investment in modern sports infrastructure.",
  "Promotion of grassroots sports and inclusion through national programs.",
  "Adoption of new technologies to improve performance and spectator experience.",
  "Growing focus on sustainability in sporting events and organizations.",
  "Expansion of eSports presence and its integration into sports culture."
];

export function FutureSection() {
  return (
    <AnimatedSection id="future" as="section" className="py-16 bg-background sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">The Future of Spanish Sports</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Spain not only celebrates its rich sporting heritage but also looks towards a promising future.
              With a combination of tradition, innovation, and unwavering passion, Spanish sports are poised to reach new heights of excellence and global participation.
            </p>
            <ul className="mt-8 space-y-3">
              {futurePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#introduction">Back to Top</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/600/400?random=5"
              alt="Futuristic vision of a Spanish stadium"
              layout="fill"
              objectFit="cover"
              data-ai-hint="future stadium"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

