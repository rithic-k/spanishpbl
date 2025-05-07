import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const futurePoints = [
  "Inversión continua en infraestructuras deportivas modernas.",
  "Fomento del deporte base y la inclusión a través de programas nacionales.",
  "Adopción de nuevas tecnologías para mejorar el rendimiento y la experiencia del espectador.",
  "Creciente enfoque en la sostenibilidad en eventos y organizaciones deportivas.",
  "Expansión de la presencia de eSports y su integración en la cultura deportiva."
];

export function FutureSection() {
  return (
    <AnimatedSection id="future" as="section" className="py-16 bg-background sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">El Futuro del Deporte Español</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              España no solo celebra su rica herencia deportiva, sino que también mira hacia un futuro prometedor.
              Con una combinación de tradición, innovación y una pasión inquebrantable, el deporte español está preparado para alcanzar nuevas cotas de excelencia y participación global.
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
                <Link href="#introduction">Volver al Inicio</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/600/400?random=5"
              alt="Visión futurista de un estadio español"
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
