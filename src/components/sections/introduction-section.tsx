import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import Link from 'next/link';

export function IntroductionSection() {
  return (
    <AnimatedSection id="introduction" as="section" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Collage de deportes españoles fondo"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="Spain culture"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-primary">España Deportes:</span>
          <span className="block text-foreground">Pasión y Cultura</span>
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Descubre la vibrante cultura deportiva de España, un país donde el deporte es más que un juego: es un estilo de vida.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#sports">Explorar Deportes</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#future">Ver Futuro</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

