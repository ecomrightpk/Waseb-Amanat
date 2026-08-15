import { PageHero } from '@/components/PageHero';
import { EventCard } from '@/components/Cards';
import { getEvents } from '@/lib/data';
export const metadata={title:'Events'};
export default async function Events(){const events=await getEvents();return <><PageHero eyebrow="Events" title="Medical camps, volunteer drives, fundraisers and community activities." description="Event listings are managed from the admin dashboard and can include dates, locations, categories and registration links."/><section className="section"><div className="container"><div className="grid-3">{events.map(e=><EventCard key={e.id} event={e}/>)}</div></div></section></>}
