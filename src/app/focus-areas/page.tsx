import { PageHero } from '@/components/PageHero';
import { FocusGrid } from '@/components/FocusGrid';
export const metadata={title:'Focus Areas'};
export default function FocusAreas(){return <><PageHero eyebrow="Focus areas" title="Fifteen connected pathways to stronger communities." description="Human needs overlap. Our focus areas are designed to work together—from emergency survival to education, health, livelihoods and long-term resilience."/><section className="section"><div className="container"><FocusGrid/></div></section></>}
