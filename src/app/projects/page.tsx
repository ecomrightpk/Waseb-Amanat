import { PageHero } from '@/components/PageHero';
import { ProjectFilter } from '@/components/ProjectFilter';
import { getProjects } from '@/lib/data';
export const metadata={title:'Projects'};
export default async function Projects(){const projects=await getProjects();return <><PageHero eyebrow="Projects" title="Transparent projects with clear goals, locations and progress." description="Browse active humanitarian and development initiatives. Funding and beneficiary figures can be updated from the protected admin dashboard."/><section className="section"><div className="container"><ProjectFilter projects={projects}/></div></section></>}
