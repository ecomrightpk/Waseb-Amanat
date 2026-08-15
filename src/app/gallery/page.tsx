import { PageHero } from '@/components/PageHero';
import { GalleryGrid } from '@/components/GalleryGrid';
import { getGallery } from '@/lib/data';
export const metadata={title:'Gallery'};
export default async function Gallery(){const items=await getGallery();return <><PageHero eyebrow="Gallery" title="Human stories, documented with dignity." description="Published field images and media can be uploaded from the protected admin dashboard and organized by category."/><section className="section"><div className="container"><GalleryGrid items={items}/></div></section></>}
