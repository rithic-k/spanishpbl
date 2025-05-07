
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle, Zap, Users, TrendingUp, Globe, Award } from 'lucide-react';
import Link from 'next/link';

const futurePoints = [
  {
    text: "Inversión continua en infraestructura deportiva de vanguardia y estadios inteligentes.",
    icon: <Zap className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Promoción del deporte base, asegurando la accesibilidad e inclusión a través de programas a nivel nacional.",
    icon: <Users className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Adopción total de tecnologías emergentes como IA y RV para mejorar el rendimiento de los atletas y la participación de los aficionados.",
    icon: <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Liderando el camino en eventos deportivos sostenibles y operaciones de clubes respetuosas con el medio ambiente.",
    icon: <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Expansión significativa de los eSports, integrándolos aún más en la cultura y economía deportiva principal.",
    icon: <Globe className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Candidaturas y organización de más eventos deportivos internacionales importantes, mostrando España al mundo.",
    icon: <Award className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Mayor enfoque en el deporte femenino, buscando igualdad en representación, financiación y cobertura mediática.",
    icon: <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Fortalecimiento de colaboraciones internacionales para el desarrollo deportivo y el intercambio de conocimientos.",
    icon: <Globe className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Profundización de la integración cultural del deporte, utilizándolo como herramienta de cohesión social y orgullo nacional.",
    icon: <Users className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Inversión en programas de identificación y desarrollo de talentos de próxima generación en todos los deportes principales.",
    icon: <Zap className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  }
];

export function FutureSection() {
  return (
    <AnimatedSection id="future" as="section" className="py-16 bg-background sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">El Brillante Futuro de los Deportes Españoles</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              España no solo se duerme en los laureles; está moldeando activamente un futuro dinámico e innovador para su sector deportivo. La nación está comprometida a mejorar su influencia deportiva global a través de iniciativas estratégicas, avances tecnológicos y una pasión profundamente arraigada que resuena desde las bases hasta los niveles de élite.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              La influencia del deporte se extiende más allá del campo de juego, impactando el turismo, el crecimiento económico y la identidad nacional. Los planes futuros están orientados a consolidar la posición de España como una potencia deportiva mundial.
            </p>
            <ul className="mt-8 space-y-4">
              {futurePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  {point.icon}
                  <span className="text-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
                <Link href="#introduction">Volver Arriba ↑</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="https://picsum.photos/800/600?random=5"
              alt="Visión futurista de un complejo deportivo español"
              layout="fill"
              objectFit="cover"
              data-ai-hint="future sports tech"
              className="transform transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
             <div className="absolute bottom-0 left-0 p-6">
               <h3 className="text-2xl font-semibold text-white shadow-text">Innovación en Movimiento</h3>
               <p className="text-sm text-gray-200 mt-1 shadow-text">Pioneros en la próxima era de la excelencia deportiva.</p>
             </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Helper style for text shadow, can be moved to globals.css if used elsewhere
const styles = `
  .shadow-text {
    text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
  }
`;
// Inject styles (in a real app, this would be in a CSS file)
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
