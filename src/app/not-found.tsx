import Link from 'next/link';
export default function NotFound(){return <div className="not-found"><div><span className="eyebrow">404</span><h1 className="display-2">Page not found</h1><p>The page may have moved or may not be published.</p><Link className="btn btn-primary" href="/">Return home</Link></div></div>}
