import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import HeroBackground from './components/HeroBackground';
import SkillCategory from './components/SkillCategory';
import CareerTimeline from './components/CareerTimeline';
import RetroTerminal from './components/RetroTerminal';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroBackground />
      <Header isScrolled={isScrolled} />

      {/* Main Content */}
      <main className="relative pt-[80vh] snap-y snap-mandatory">
        <ContentSection id="about" title="About Me" className="mt-24">
          <RetroTerminal />
        </ContentSection>

        <ContentSection id="career" title="Career Journey" className="-mt-16" variant="alternate">
          <CareerTimeline />
        </ContentSection>

        <ContentSection id="skills" title="Technical Expertise" className="-mt-16">
          <div className="max-w-5xl mx-auto">
            <SkillCategory 
              title="Technical Proficiency" 
              skills={[
                'Windows Server & Desktop Administration',
                'Active Directory & Azure AD',
                'Virtualization (VMware, Hyper-V)',
                'Microsoft Intune',
                'Cloud Computing (Azure, AWS)',
                'Network Administration (Cisco Meraki)',
                'Security Best Practices',
                'Backup & Disaster Recovery'
              ]} 
            />
            <SkillCategory 
              title="Platform & Device Management" 
              skills={[
                'Azure VM Provisioning & Management',
                'SSO (Okta, Azure AD SAML)',
                'Meraki MDM',
                'VOIP (Teams, Zoom)',
                'Microsoft Office 365',
                'Conferencing Solutions',
                'Onboarding & Offboarding',
                'Device Lifecycle Management'
              ]} 
            />
            <SkillCategory 
              title="Support & Customer Service" 
              skills={[
                'POS & Desktop Support',
                'Hardware Installation',
                'Incident Response',
                'Ticketing Systems',
                'Knowledge Base Creation',
                'End-User Training',
                'Technical Documentation',
                'Service Desk Management'
              ]} 
            />
            <SkillCategory 
              title="Networking & Infrastructure" 
              skills={[
                'Cisco CCNA Fundamentals',
                'Network Troubleshooting',
                'VPN Configuration',
                'AV Setup & Management',
                'Cross-Platform Device Provisioning',
                'Infrastructure Planning',
                'Network Security',
                'System Integration'
              ]} 
            />
          </div>
        </ContentSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;