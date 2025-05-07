
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle, Zap, Users, TrendingUp, Globe, Award } from 'lucide-react';
import Link from 'next/link';

const futurePoints = [
  {
    text: "Continuous investment in state-of-the-art sports infrastructure and smart stadiums.",
    icon: <Zap className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Promotion of grassroots sports, ensuring accessibility and inclusion through nationwide programs.",
    icon: <Users className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Full adoption of emerging technologies like AI and VR to enhance athlete performance and fan engagement.",
    icon: <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Leading the way in sustainable sporting events and environmentally friendly club operations.",
    icon: <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Significant expansion of eSports, integrating it further into the mainstream sports culture and economy.",
    icon: <Globe className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Bidding for and hosting more major international sporting events, showcasing Spain to the world.",
    icon: <Award className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Enhanced focus on women's sports, aiming for equal representation, funding, and media coverage.",
    icon: <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Strengthening international collaborations for sports development and knowledge exchange.",
    icon: <Globe className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Deepening the cultural integration of sports, using it as a tool for social cohesion and national pride.",
    icon: <Users className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  },
  {
    text: "Investing in next-generation talent identification and development programs across all major sports.",
    icon: <Zap className="h-6 w-6 text-accent flex-shrink-0 mr-3 mt-1" />
  }
];

export function FutureSection() {
  return (
    <AnimatedSection id="future" as="section" className="py-16 bg-background sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">The Bright Future of Spanish Sports</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Spain is not just resting on its laurels; it's actively shaping a dynamic and innovative future for its sports sector. The nation is committed to enhancing its global sporting influence through strategic initiatives, technological advancements, and a deep-seated passion that resonates from grassroots to elite levels.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              The influence of sports extends beyond the playing field, impacting tourism, economic growth, and national identity. Future plans are geared towards solidifying Spain's position as a global sports powerhouse.
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
                <Link href="#introduction">Back to Top ↑</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="https://picsum.photos/800/600?random=5"
              alt="Futuristic vision of a Spanish sports complex"
              layout="fill"
              objectFit="cover"
              data-ai-hint="future sports tech"
              className="transform transition-transform duration-500 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
             <div className="absolute bottom-0 left-0 p-6">
               <h3 className="text-2xl font-semibold text-white shadow-text">Innovation in Motion</h3>
               <p className="text-sm text-gray-200 mt-1 shadow-text">Pioneering the next era of sports excellence.</p>
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
