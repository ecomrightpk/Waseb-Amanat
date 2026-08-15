import Link from 'next/link';
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {eyebrow}</div><span className="eyebrow">{eyebrow}</span><h1 className="display-2" style={{maxWidth:880}}>{title}</h1><p className="lead">{description}</p></div></section>;
}
