import {
  BookOpen, Droplets, GraduationCap, HandHeart, HeartPulse, House,
  Laptop, Leaf, LifeBuoy, PackageOpen, ShieldCheck, Sparkles, Stethoscope,
  Users, UsersRound, type LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  name: 'Waseb Amanat Foundation',
  shortName: 'WAF',
  description: 'A South Punjab-rooted humanitarian foundation advancing healthcare, education, disaster response, clean water, skills, dignity and community resilience.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.org',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@yourdomain.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+92 300 1234567',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'South Punjab, Pakistan',
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
  },
};

export const navItems = [
  ['Home', '/'], ['About', '/about'], ['Mission', '/mission'], ['Focus Areas', '/focus-areas'],
  ['Projects', '/projects'], ['Gallery', '/gallery'], ['Volunteers', '/volunteers'],
  ['Events', '/events'], ['News', '/news'], ['Contact', '/contact'],
] as const;

export type FocusArea = { title: string; description: string; icon: LucideIcon; accent: string };

export const focusAreas: FocusArea[] = [
  { title: 'Healthcare', description: 'Medical camps, medicines, mobile clinics, vaccination and maternal care.', icon: HeartPulse, accent: 'blue' },
  { title: 'Education', description: 'Scholarships, school support, libraries, teacher training and digital learning.', icon: GraduationCap, accent: 'green' },
  { title: 'Disaster Relief', description: 'Rapid relief, recovery support and resilient community preparedness.', icon: LifeBuoy, accent: 'gold' },
  { title: 'Flood Relief', description: 'Emergency food, shelter, hygiene, medical support and recovery.', icon: House, accent: 'blue' },
  { title: 'Emergency Response', description: 'Time-critical assistance for families facing humanitarian emergencies.', icon: ShieldCheck, accent: 'gold' },
  { title: 'Food Distribution', description: 'Dignified ration, cooked meals and nutrition support for vulnerable families.', icon: PackageOpen, accent: 'green' },
  { title: 'Clean Water', description: 'Safe drinking water, filtration, wells and hygiene awareness.', icon: Droplets, accent: 'blue' },
  { title: "Women's Empowerment", description: 'Skills, livelihoods, education, health awareness and economic inclusion.', icon: Sparkles, accent: 'gold' },
  { title: 'Youth Development', description: 'Leadership, mentoring, employability and civic participation.', icon: UsersRound, accent: 'green' },
  { title: 'Community Development', description: 'Locally-led initiatives that strengthen resilience and opportunity.', icon: Users, accent: 'blue' },
  { title: 'Environmental Protection', description: 'Tree plantation, climate awareness and community-led conservation.', icon: Leaf, accent: 'green' },
  { title: 'Skill Development', description: 'Practical training that creates pathways to dignified livelihoods.', icon: HandHeart, accent: 'gold' },
  { title: 'Orphan Support', description: 'Education, wellbeing and family-centered support for orphaned children.', icon: BookOpen, accent: 'blue' },
  { title: 'Mental Health', description: 'Awareness, psychosocial support and referral pathways with dignity.', icon: Stethoscope, accent: 'green' },
  { title: 'Digital Literacy', description: 'Digital skills and safe access to technology for students and communities.', icon: Laptop, accent: 'gold' },
];

export const fallbackProjects = [
  { id:'1', slug:'rohi-clean-water', title:'Rohi Clean Water Initiative', excerpt:'Solar-powered safe water access for underserved settlements.', description:'A community-led clean water initiative combining filtration, solar pumping and hygiene education.', category:'Clean Water', location:'South Punjab', image_url:'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80', goal_amount:3500000, raised_amount:2180000, beneficiaries:4200, status:'Active', featured:true, published:true, created_at:new Date().toISOString() },
  { id:'2', slug:'mobile-health-camps', title:'Mobile Health Camps', excerpt:'Free consultations, medicines and maternal health support.', description:'Mobile medical teams reaching communities with limited access to primary healthcare.', category:'Healthcare', location:'Multan Division', image_url:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', goal_amount:2500000, raised_amount:1475000, beneficiaries:6800, status:'Active', featured:true, published:true, created_at:new Date().toISOString() },
  { id:'3', slug:'parwaz-scholarships', title:'Parwaz Scholarships', excerpt:'Keeping talented students in school through targeted scholarships.', description:'Scholarship assistance for students at risk of leaving education because of household financial pressure.', category:'Education', location:'South Punjab', image_url:'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80', goal_amount:1800000, raised_amount:990000, beneficiaries:180, status:'Active', featured:true, published:true, created_at:new Date().toISOString() },
] as const;

export const fallbackNews = [
  { id:'1', slug:'community-health-outreach', title:'Community health outreach reaches remote villages', excerpt:'Volunteer doctors and local partners delivered consultations, medicine and health awareness.', body:'Our community health outreach brought primary consultations, essential medicines and health awareness closer to families who often travel long distances for basic care. The program prioritizes dignity, referral pathways and local follow-up.', category:'Healthcare', image_url:'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80', published_at:new Date().toISOString(), published:true, created_at:new Date().toISOString() },
  { id:'2', slug:'student-learning-kits', title:'Learning kits distributed to students', excerpt:'School supplies and learning materials were provided to children in underserved communities.', body:'The education team distributed learning kits and met teachers and families to understand barriers to regular attendance. Our education work combines direct support with community engagement.', category:'Education', image_url:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80', published_at:new Date().toISOString(), published:true, created_at:new Date().toISOString() },
] as const;

export const fallbackEvents = [
  { id:'1', title:'Free Medical Camp', description:'General physician consultations, basic screening and medicine support.', location:'South Punjab', event_date:new Date(Date.now()+86400000*14).toISOString(), category:'Medical Camp', image_url:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80', registration_url:null, published:true, created_at:new Date().toISOString() },
  { id:'2', title:'Volunteer Orientation Day', description:'Introduction to safeguarding, field conduct and volunteer pathways.', location:'Multan', event_date:new Date(Date.now()+86400000*25).toISOString(), category:'Volunteer Drive', image_url:'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80', registration_url:'/volunteers', published:true, created_at:new Date().toISOString() },
] as const;
