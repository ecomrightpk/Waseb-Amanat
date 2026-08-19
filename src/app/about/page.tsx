import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Database,
  GraduationCap,
  HeartPulse,
  Mail,
  Phone,
  Quote,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Waseb Amanat Foundation, its community-centered approach, and founder Dr. Syed Waqas Shabbir — a sociologist and social development professional with extensive experience in public health, field operations, research and data management.',
};

const expertise = [
  {
    icon: Users,
    title: 'Community Mobilization',
    text: 'Experience engaging communities, local stakeholders and field teams to improve participation, trust and service delivery.',
  },
  {
    icon: HeartPulse,
    title: 'Public Health Operations',
    text: 'Hands-on leadership in immunization campaigns, health outreach, field surveillance and community-level public health interventions.',
  },
  {
    icon: Database,
    title: 'Data & Program Management',
    text: 'District-scale experience in field data collection, quality assurance, operational planning, monitoring and evidence-based decision making.',
  },
  {
    icon: BookOpen,
    title: 'Research & Academia',
    text: 'Academic research, peer-reviewed publications, university teaching and the translation of sociological evidence into practical social action.',
  },
];

const journey = [
  {
    label: 'Current Leadership',
    title: 'District Manager — Punjab Socio-Economic Registry (PSER), Multan',
    text: 'Leads district-scale field operations, supervises enumerator teams, strengthens data quality controls and coordinates with local administrative authorities to support reliable socio-economic registration.',
    icon: Briefcase,
  },
  {
    label: 'Public Health',
    title: 'Tehsil Polio Officer — WHO/UNICEF Polio Eradication Program',
    text: 'Served through CHIP Training & Consulting, leading immunization activities, microplanning, multi-tiered field teams, stakeholder coordination and community engagement to address vaccine hesitancy.',
    icon: Stethoscope,
  },
  {
    label: 'Academia',
    title: 'Visiting Lecturer — Bahauddin Zakariya University',
    text: 'Taught sociological concepts, mentored diverse learners and contributed to an academic environment focused on critical thinking, research and social understanding.',
    icon: GraduationCap,
  },
  {
    label: 'Research',
    title: 'Social & Public Health Research',
    text: 'Has contributed research in peer-reviewed journals on public health, social determinants, gender issues, community welfare and related social development themes.',
    icon: BarChart3,
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Accountability',
    text: 'Programs should be documented, measurable and responsible to the people they are designed to serve.',
  },
  {
    icon: Users,
    title: 'Community First',
    text: 'Local voices, local realities and community participation should shape sustainable social interventions.',
  },
  {
    icon: BarChart3,
    title: 'Evidence-Led Action',
    text: 'Reliable data and research strengthen targeting, implementation, learning and long-term impact.',
  },
  {
    icon: HeartPulse,
    title: 'Dignity in Service',
    text: 'Humanitarian support should protect dignity, improve access and create pathways toward resilience.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="About us"
        title="Rooted in South Punjab. Built for service, dignity and measurable social impact."
        description="Waseb Amanat Foundation brings together community understanding, field experience, research and responsible program management to support people through healthcare, education, relief and social development."
      />

      {/* Founder spotlight */}
      <section className="section founder-section">
        <div className="container">
          <Reveal>
            <div className="founder-card">
              <div className="founder-portrait-wrap">
                <div className="founder-accent founder-accent-one" aria-hidden="true" />
                <div className="founder-accent founder-accent-two" aria-hidden="true" />

                <div className="founder-portrait">
                  <Image
                    src="/images/founder-dr-syed-waqas-shabbir.png"
                    alt="Dr. Syed Waqas Shabbir, Founder of Waseb Amanat Foundation"
                    width={1370}
                    height={1724}
                    priority
                    sizes="(max-width: 900px) 92vw, 480px"
                  />
                </div>

                <div className="founder-credential-card glass">
                  <Award size={22} aria-hidden="true" />
                  <div>
                    <strong>Gold Medalist</strong>
                    <span>M.A. Sociology</span>
                  </div>
                </div>
              </div>

              <div className="founder-copy">
                <span className="eyebrow">Founder &amp; Leadership</span>
                <p className="founder-kicker">Meet the Founder</p>
                <h2 className="display-2">Dr. Syed Waqas Shabbir</h2>
                <p className="founder-role">
                  Founder, Waseb Amanat Foundation <span aria-hidden="true">•</span> Sociologist <span aria-hidden="true">•</span> Social Development &amp; Public Health Professional
                </p>

                <div className="credential-row" aria-label="Founder credentials">
                  <span><GraduationCap size={17} /> Ph.D. in Sociology</span>
                  <span><Award size={17} /> Gold Medal — M.A. Sociology</span>
                  <span><Briefcase size={17} /> 10+ Years Field Experience</span>
                </div>

                <p className="founder-lead">
                  Dr. Syed Waqas Shabbir brings together academic rigor and extensive field leadership across public health, social development, data management and community-based operations. His professional journey has consistently focused on turning evidence into practical action for communities.
                </p>

                <p>
                  Currently serving as District Manager for the Punjab Socio-Economic Registry (PSER) in Multan, he oversees large-scale field data collection, team management, data quality assurance and coordination with district administration. His earlier public-health work in the WHO/UNICEF Polio Eradication Program strengthened his expertise in microplanning, field surveillance, immunization operations, community mobilization and stakeholder engagement.
                </p>

                <div className="founder-contact">
                  <a className="contact-pill" href="mailto:syedwaqasshabbir1149@gmail.com">
                    <Mail size={18} />
                    <span>
                      <small>Email</small>
                      syedwaqasshabbir1149@gmail.com
                    </span>
                  </a>
                  <a className="contact-pill" href="tel:+923041759350">
                    <Phone size={18} />
                    <span>
                      <small>Phone</small>
                      +92 304 1759350
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder message */}
      <section className="section founder-message-section">
        <div className="container">
          <Reveal>
            <div className="founder-message">
              <div className="quote-mark" aria-hidden="true"><Quote size={34} /></div>
              <div>
                <span className="eyebrow founder-message-eyebrow">A message from the founder</span>
                <blockquote>
                  “Sustainable social progress begins when compassion is supported by credible data, accountable leadership and genuine community participation.”
                </blockquote>
                <p>
                  Waseb Amanat Foundation reflects an approach to social welfare in which communities are not treated simply as beneficiaries, but as partners. The aim is to combine local knowledge with professional systems so that humanitarian support is respectful, transparent and capable of creating lasting value.
                </p>
                <strong className="signature">Dr. Syed Waqas Shabbir</strong>
                <span className="signature-role">Founder — Waseb Amanat Foundation</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="section section-soft">
        <div className="container">
          <Reveal>
            <div className="section-head about-section-head">
              <div>
                <span className="eyebrow">Leadership expertise</span>
                <h2 className="display-2">Where research meets field action</h2>
              </div>
              <p className="lead">
                The Foundation benefits from leadership experience that spans community engagement, public health, large-scale field operations, social research and data-driven program management.
              </p>
            </div>
          </Reveal>

          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <article className="expertise-card card">
                    <div className="expertise-number">0{index + 1}</div>
                    <div className="expertise-icon"><Icon size={24} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career journey */}
      <section className="section">
        <div className="container journey-layout">
          <Reveal>
            <div className="journey-intro">
              <span className="eyebrow">Professional journey</span>
              <h2 className="display-2">A career shaped by service, evidence and leadership.</h2>
              <p className="lead">
                Dr. Shabbir&apos;s experience spans district-level program management, public health operations, university teaching and social research — bringing a multidisciplinary perspective to humanitarian work.
              </p>

              <div className="education-panel">
                <div className="education-icon"><GraduationCap size={28} /></div>
                <div>
                  <strong>Academic Foundation</strong>
                  <p>Ph.D. in Sociology with a Gold Medal in M.A. Sociology.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="career-timeline">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <article className="career-item">
                    <div className="career-marker"><Icon size={20} /></div>
                    <div className="career-content">
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research + operational philosophy */}
      <section className="section section-soft">
        <div className="container grid-2 research-grid">
          <Reveal>
            <div className="research-panel research-dark">
              <div className="research-icon"><BookOpen size={30} /></div>
              <span className="eyebrow dark-eyebrow">Research perspective</span>
              <h2>Academic insight with community relevance.</h2>
              <p>
                Dr. Shabbir&apos;s research interests include public health, social determinants, gender issues and community welfare. His scholarly work strengthens a Foundation culture that values evidence, learning and responsible program design.
              </p>
              <ul className="clean-list">
                <li><CheckCircle2 size={18} /> Peer-reviewed research experience</li>
                <li><CheckCircle2 size={18} /> Sociology and social determinants</li>
                <li><CheckCircle2 size={18} /> Public health and community welfare</li>
                <li><CheckCircle2 size={18} /> Academic teaching and mentorship</li>
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="research-panel">
              <div className="research-icon light"><Database size={30} /></div>
              <span className="eyebrow">Operational perspective</span>
              <h2>Programs strengthened by data and accountability.</h2>
              <p>
                Large field programs require more than goodwill. They depend on planning, verification, quality control, team coordination and continuous learning. This operational discipline informs how Waseb Amanat Foundation intends to design and evaluate its community programs.
              </p>
              <ul className="clean-list light-list">
                <li><CheckCircle2 size={18} /> District-scale field management</li>
                <li><CheckCircle2 size={18} /> Data quality and monitoring</li>
                <li><CheckCircle2 size={18} /> Stakeholder coordination</li>
                <li><CheckCircle2 size={18} /> Community-centered implementation</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Foundation values */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="center values-heading">
              <span className="eyebrow">How we aim to serve</span>
              <h2 className="display-2">Principles behind the Foundation</h2>
              <p className="lead values-lead">
                Our approach is designed around transparency, local participation, evidence and the dignity of every person we serve.
              </p>
            </div>
          </Reveal>

          <div className="values-premium-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <article className="value-premium-card">
                    <div className="value-premium-icon"><Icon size={24} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta-section">
        <div className="container">
          <Reveal>
            <div className="about-cta">
              <div>
                <span className="eyebrow cta-eyebrow">Waseb Amanat Foundation</span>
                <h2>Help turn compassion into meaningful, measurable action.</h2>
                <p>
                  Support community-rooted initiatives across healthcare, education, relief and social development in South Punjab and beyond.
                </p>
              </div>
              <div className="about-cta-actions">
                <Link className="btn btn-accent" href="/donate">Donate Now <ArrowRight size={18} /></Link>
                <Link className="btn cta-outline" href="/volunteers">Become a Volunteer</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-page {
          --about-blue: #0B4F8A;
          --about-blue-dark: #073860;
          --about-green: #2E8B57;
          --about-gold: #F4B400;
        }

        .founder-section {
          position: relative;
          overflow: hidden;
        }

        .founder-section::before {
          content: '';
          position: absolute;
          width: 440px;
          height: 440px;
          right: -180px;
          top: 40px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(46,139,87,.11), transparent 68%);
          pointer-events: none;
        }

        .founder-card {
          display: grid;
          grid-template-columns: minmax(320px, .82fr) minmax(0, 1.18fr);
          gap: clamp(42px, 6vw, 82px);
          align-items: center;
          position: relative;
        }

        .founder-portrait-wrap {
          position: relative;
          padding: 22px 0 28px 22px;
          max-width: 510px;
        }

        .founder-portrait {
          position: relative;
          z-index: 2;
          overflow: hidden;
          border-radius: 36px;
          background: #dceef8;
          border: 1px solid rgba(11,79,138,.12);
          box-shadow: 0 32px 80px rgba(8,48,79,.22);
        }

        .founder-portrait img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: 50% 34%;
        }

        .founder-accent {
          position: absolute;
          border-radius: 32px;
          pointer-events: none;
        }

        .founder-accent-one {
          width: 72%;
          height: 80%;
          left: 0;
          bottom: 0;
          background: linear-gradient(145deg, var(--about-blue), #0871b9);
          transform: translate(-2px, 12px) rotate(-4deg);
          opacity: .15;
        }

        .founder-accent-two {
          width: 105px;
          height: 105px;
          right: -16px;
          top: 0;
          border-radius: 28px;
          background: linear-gradient(145deg, var(--about-gold), #ffd65f);
          transform: rotate(15deg);
          opacity: .88;
        }

        .founder-credential-card {
          position: absolute;
          z-index: 4;
          right: -24px;
          bottom: 8px;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 195px;
          padding: 15px 18px;
          border-radius: 18px;
          color: var(--ink);
          box-shadow: 0 16px 45px rgba(8,48,79,.18);
        }

        .founder-credential-card svg { color: var(--about-gold); }
        .founder-credential-card strong { display: block; font: 800 .92rem Manrope, sans-serif; }
        .founder-credential-card span { display: block; color: var(--muted); font-size: .76rem; }

        .founder-kicker {
          margin: 0 0 5px;
          color: var(--about-green);
          font-size: .92rem;
          font-weight: 800;
        }

        .founder-copy h2 { margin-bottom: 12px; }

        .founder-role {
          color: var(--about-blue);
          font-weight: 800;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .founder-role span { color: var(--about-gold); margin: 0 6px; }

        .credential-row {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 0 0 24px;
        }

        .credential-row span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 999px;
          background: var(--surface-2);
          border: 1px solid var(--border);
          color: var(--ink);
          font-size: .79rem;
          font-weight: 800;
        }

        .credential-row svg { color: var(--about-blue); }

        .founder-lead {
          color: var(--ink);
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .founder-contact {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 12px;
          margin-top: 26px;
        }

        .contact-pill {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 15px;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--surface-2);
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }

        .contact-pill:hover {
          transform: translateY(-3px);
          border-color: rgba(11,79,138,.28);
          box-shadow: var(--shadow);
        }

        .contact-pill > svg { color: var(--about-blue); flex: 0 0 auto; }
        .contact-pill span { min-width: 0; font-size: .78rem; font-weight: 800; overflow-wrap: anywhere; }
        .contact-pill small { display: block; color: var(--muted); font-weight: 600; margin-bottom: 1px; }

        .founder-message-section {
          padding-top: 22px;
        }

        .founder-message {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          padding: clamp(30px, 5vw, 58px);
          border-radius: 34px;
          overflow: hidden;
          background:
            radial-gradient(circle at 92% 14%, rgba(244,180,0,.20), transparent 24%),
            radial-gradient(circle at 6% 92%, rgba(46,139,87,.18), transparent 28%),
            linear-gradient(135deg, #073b67, #0a5b76 54%, #14715a);
          color: #fff;
          box-shadow: 0 28px 75px rgba(7,46,72,.22);
        }

        .founder-message::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: .16;
          background-image: radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: linear-gradient(to left, #000, transparent 72%);
          pointer-events: none;
        }

        .founder-message > * { position: relative; z-index: 1; }
        .quote-mark { width: 58px; height: 58px; border-radius: 18px; display: grid; place-items: center; background: rgba(255,255,255,.12); color: var(--about-gold); }
        .founder-message-eyebrow { color: #fff; border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.10); }
        .founder-message blockquote { margin: 0 0 18px; max-width: 950px; font: 700 clamp(1.45rem, 2.8vw, 2.3rem)/1.35 Manrope, sans-serif; letter-spacing: -.025em; }
        .founder-message p { color: rgba(255,255,255,.78); max-width: 940px; }
        .signature { display: block; font-family: Manrope, sans-serif; margin-top: 20px; }
        .signature-role { display: block; color: rgba(255,255,255,.62); font-size: .84rem; margin-top: 2px; }

        .about-section-head {
          display: grid;
          grid-template-columns: 1fr .75fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 34px;
        }

        .about-section-head .lead { margin: 0; }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .expertise-card {
          height: 100%;
          position: relative;
          padding: 27px 24px;
          overflow: hidden;
        }

        .expertise-number {
          position: absolute;
          right: 18px;
          top: 10px;
          color: rgba(11,79,138,.07);
          font: 900 3.8rem Manrope, sans-serif;
          letter-spacing: -.06em;
        }

        .expertise-icon,
        .value-premium-icon,
        .research-icon,
        .education-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          color: var(--about-blue);
          background: rgba(11,79,138,.08);
          margin-bottom: 20px;
        }

        .expertise-card h3 { font-size: 1.13rem; }
        .expertise-card p { margin-bottom: 0; font-size: .91rem; }

        .journey-layout {
          display: grid;
          grid-template-columns: .78fr 1.22fr;
          gap: clamp(44px, 7vw, 90px);
          align-items: start;
        }

        .journey-intro {
          position: sticky;
          top: 120px;
        }

        .education-panel {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-top: 28px;
          padding: 18px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface-2);
        }

        .education-icon { margin: 0; flex: 0 0 auto; background: rgba(244,180,0,.14); color: #aa7800; }
        .education-panel strong { display: block; margin-bottom: 2px; font-family: Manrope, sans-serif; }
        .education-panel p { margin: 0; font-size: .87rem; }

        .career-timeline {
          position: relative;
          display: grid;
          gap: 0;
        }

        .career-timeline::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 28px;
          bottom: 28px;
          width: 2px;
          background: linear-gradient(var(--about-blue), var(--about-green), rgba(46,139,87,.06));
        }

        .career-item {
          position: relative;
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 20px;
          padding: 0 0 38px;
        }

        .career-item:last-child { padding-bottom: 0; }

        .career-marker {
          position: relative;
          z-index: 2;
          width: 50px;
          height: 50px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: var(--surface);
          border: 1px solid rgba(11,79,138,.18);
          color: var(--about-blue);
          box-shadow: 0 8px 24px rgba(11,79,138,.11);
        }

        .career-content {
          padding: 5px 0 0;
        }

        .career-content > span {
          display: inline-block;
          margin-bottom: 6px;
          color: var(--about-green);
          font-size: .74rem;
          font-weight: 900;
          letter-spacing: .09em;
          text-transform: uppercase;
        }

        .career-content h3 { font-size: 1.2rem; margin-bottom: 8px; }
        .career-content p { margin: 0; }

        .research-grid { align-items: stretch; }

        .research-panel {
          height: 100%;
          padding: clamp(28px, 4vw, 45px);
          border: 1px solid var(--border);
          border-radius: 30px;
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .research-panel h2 { font-size: clamp(1.7rem, 3vw, 2.6rem); }
        .research-icon.light { color: var(--about-green); background: rgba(46,139,87,.1); }

        .research-dark {
          background: linear-gradient(145deg, #071e31, #0a456c);
          color: #fff;
          border-color: rgba(255,255,255,.08);
        }

        .research-dark p { color: rgba(255,255,255,.72); }
        .research-dark .research-icon { background: rgba(255,255,255,.11); color: var(--about-gold); }
        .dark-eyebrow { color: #fff; background: rgba(255,255,255,.09); border-color: rgba(255,255,255,.14); }

        .clean-list {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: grid;
          gap: 11px;
        }

        .clean-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: rgba(255,255,255,.86);
          font-size: .9rem;
          font-weight: 700;
        }

        .clean-list svg { color: var(--about-gold); flex: 0 0 auto; margin-top: 2px; }
        .light-list li { color: var(--ink); }
        .light-list svg { color: var(--about-green); }

        .values-heading { max-width: 820px; margin: 0 auto 38px; }
        .values-lead { margin-inline: auto; }

        .values-premium-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 18px;
        }

        .value-premium-card {
          position: relative;
          height: 100%;
          padding: 26px 22px;
          border-radius: 24px;
          border: 1px solid var(--border);
          background: linear-gradient(180deg, var(--surface), var(--surface-2));
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .value-premium-card:hover {
          transform: translateY(-6px);
          border-color: rgba(11,79,138,.22);
          box-shadow: var(--shadow);
        }

        .value-premium-icon { margin-bottom: 16px; }
        .value-premium-card:nth-child(2) .value-premium-icon,
        .value-premium-card:nth-child(4) .value-premium-icon { color: var(--about-green); background: rgba(46,139,87,.09); }
        .value-premium-card h3 { font-size: 1.08rem; }
        .value-premium-card p { font-size: .88rem; margin: 0; }

        .about-cta-section { padding-top: 24px; }

        .about-cta {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          padding: clamp(32px, 5vw, 58px);
          border-radius: 34px;
          background:
            radial-gradient(circle at 85% 0%, rgba(244,180,0,.22), transparent 27%),
            linear-gradient(130deg, #0b4f8a, #096b81 56%, #2e8b57);
          color: #fff;
          box-shadow: 0 28px 70px rgba(8,59,92,.22);
        }

        .about-cta h2 {
          max-width: 760px;
          font-size: clamp(2rem, 4vw, 3.45rem);
        }

        .about-cta p { color: rgba(255,255,255,.76); max-width: 760px; margin-bottom: 0; }
        .cta-eyebrow { color: #fff; background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.15); }
        .about-cta-actions { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
        .cta-outline { color: #fff; border: 1px solid rgba(255,255,255,.32); background: rgba(255,255,255,.08); }
        .cta-outline:hover { background: rgba(255,255,255,.15); }

        @media (max-width: 1050px) {
          .founder-card { grid-template-columns: .88fr 1.12fr; gap: 42px; }
          .expertise-grid, .values-premium-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .founder-contact { grid-template-columns: 1fr; }
          .about-cta { grid-template-columns: 1fr; }
          .about-cta-actions { justify-content: flex-start; }
        }

        @media (max-width: 850px) {
          .founder-card,
          .journey-layout,
          .about-section-head { grid-template-columns: 1fr; }
          .founder-portrait-wrap { width: min(520px, 100%); margin-inline: auto; padding-right: 18px; }
          .founder-copy { max-width: 720px; }
          .journey-intro { position: static; }
          .about-section-head { gap: 14px; }
        }

        @media (max-width: 620px) {
          .founder-portrait-wrap { padding: 12px 12px 36px; }
          .founder-portrait { border-radius: 27px; }
          .founder-credential-card { right: 0; bottom: 2px; min-width: 175px; padding: 12px 14px; }
          .founder-accent-two { width: 78px; height: 78px; right: 0; }
          .credential-row { align-items: stretch; }
          .credential-row span { width: 100%; border-radius: 14px; }
          .founder-message { grid-template-columns: 1fr; gap: 16px; }
          .quote-mark { width: 50px; height: 50px; }
          .expertise-grid, .values-premium-grid { grid-template-columns: 1fr; }
          .career-item { grid-template-columns: 44px 1fr; gap: 14px; }
          .career-marker { width: 44px; height: 44px; border-radius: 14px; }
          .career-timeline::before { left: 21px; }
          .research-panel { border-radius: 24px; }
          .about-cta { border-radius: 26px; }
          .about-cta-actions { display: grid; grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
