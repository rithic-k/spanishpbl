

import { Goal, Dribbble, Bike } from 'lucide-react'; // Changed Football to Goal
import { SportCard } from '@/components/common/sport-card';
import { TennisIcon } from '@/components/icons/tennis-icon';
import { AnimatedSection } from '@/components/ui/animated-section';

const sportsData = [
  {
    title: 'Football',
    description: 'Football is the king of sports in Spain, with a world-renowned league (LaLiga) and iconic teams like Real Madrid and FC Barcelona. The national team has also achieved great international success.',
    icon: <Goal className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=1',
    imageAlt: 'Football stadium in Spain',
    imageHint: 'football stadium',
  },
  {
    title: 'Tennis',
    description: 'Spain has produced some of the greatest legends in world tennis. Rafael Nadal is a global icon and has inspired generations of Spanish tennis players. The country hosts numerous prestigious tournaments.',
    icon: <TennisIcon className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=2',
    imageAlt: 'Clay tennis court',
    imageHint: 'tennis court',
  },
  {
    title: 'Basketball',
    description: 'Basketball enjoys great popularity, with the Liga ACB considered one of the best in Europe. The Spanish national basketball team has won multiple world and European championships.',
    icon: <Dribbble className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=3',
    imageAlt: 'Basketball game in Spain',
    imageHint: 'basketball game',
  },
  {
    title: 'Cycling',
    description: 'Cycling has a rich history in Spain, with the Vuelta a España being one of the three Grand Tours. The country boasts challenging mountainous terrains that attract cyclists from around the world.',
    icon: <Bike className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=4',
    imageAlt: 'Cyclists on a Spanish mountain road',
    imageHint: 'cycling mountain',
  },
];

export function SportsSection() {
  return (
    <AnimatedSection id="sports" as="section" className="py-16 bg-secondary/20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Emblematic Sports of Spain</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A look at the disciplines that define Spanish sporting passion.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {sportsData.map((sport, index) => (
             // Each card can have its own animation trigger if needed by wrapping SportCard with AnimatedSection,
             // but for a simpler effect, the whole section animates in.
            <SportCard
              key={index}
              title={sport.title}
              description={sport.description}
              icon={sport.icon}
              imageUrl={sport.imageUrl}
              imageAlt={sport.imageAlt}
              imageHint={sport.imageHint}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}


