import { PageHero } from '@/components/PageHero';
import { NewsCard } from '@/components/Cards';
import { getNews } from '@/lib/data';
export const metadata={title:'News'};
export default async function News(){const posts=await getNews();return <><PageHero eyebrow="News & stories" title="Field updates, announcements and stories of progress." description="Publish updates directly from the admin dashboard; each story receives its own shareable page."/><section className="section"><div className="container"><div className="grid-3">{posts.map(p=><NewsCard key={p.id} post={p}/>)}</div></div></section></>}
