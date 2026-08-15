import { PageHero } from '@/components/PageHero';
import { DonationClient } from '@/components/DonationClient';
export const metadata={title:'Donate'};
export default function Donate(){return <><PageHero eyebrow="Donate" title="Turn generosity into accountable action." description="Select an amount and cause. The system records donation intent in Supabase; connect your approved payment gateway or hosted checkout URL for live online payments."/><section className="section"><div className="container"><DonationClient/></div></section></>}
