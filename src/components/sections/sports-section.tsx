import { Futbol, Basketball } from 'lucide-react';
import { SportCard } from '@/components/common/sport-card';
import { TennisIcon } from '@/components/icons/tennis-icon';
import { AnimatedSection } from '@/components/ui/animated-section';

const sportsData = [
  {
    title: 'Fútbol',
    description: 'El fútbol es el deporte rey en España, con una liga de renombre mundial (LaLiga) y equipos icónicos como el Real Madrid y el FC Barcelona. La selección nacional también ha cosechado grandes éxitos internacionales.',
    icon: <Futbol className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=1',
    imageAlt: 'Estadio de fútbol en España',
    imageHint: 'football stadium',
  },
  {
    title: 'Tenis',
    description: 'España ha producido algunas de las leyendas más grandes del tenis mundial. Rafael Nadal es un ícono global y ha inspirado a generaciones de tenistas españoles. El país cuenta con numerosos torneos de prestigio.',
    icon: <TennisIcon className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=2',
    imageAlt: 'Pista de tenis de tierra batida',
    imageHint: 'tennis court',
  },
  {
    title: 'Baloncesto',
    description: 'El baloncesto goza de gran popularidad, con la Liga ACB considerada una de las mejores de Europa. La selección española de baloncesto ha logrado múltiples campeonatos mundiales y europeos.',
    icon: <Basketball className="h-6 w-6" />,
    imageUrl: 'https://picsum.photos/400/300?random=3',
    imageAlt: 'Partido de baloncesto en España',
    imageHint: 'basketball game',
  },
  {
    title: 'Ciclismo',
    description: 'El ciclismo tiene una rica historia en España, con la Vuelta a España como una de las tres Grandes Vueltas. El país cuenta con terrenos montañosos desafiantes que atraen a ciclistas de todo el mundo.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bike h-6 w-6"><path d="M12 17.5V14l-3-3 4-3 2 3h2"/><circle cx="17" cy="5.5" r="2.5"/><circle cx="6" cy="18.5" r="2.5"/></svg>,
    imageUrl: 'https://picsum.photos/400/300?random=4',
    imageAlt: 'Ciclistas en una carretera de montaña española',
    imageHint: 'cycling mountain',
  },
];

export function SportsSection() {
  return (
    <AnimatedSection id="sports" as="section" className="py-16 bg-secondary/20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Deportes Emblemáticos de España</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Una mirada a las disciplinas que definen la pasión deportiva española.
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
