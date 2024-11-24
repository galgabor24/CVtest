import React from 'react';
import SocialLinks from './SocialLinks';
import ScrollIndicator from './ScrollIndicator';
import { FileDown } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const fileName = link.href.split('/').pop();
    link.download = fileName || 'GaborGal_CV.pdf';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-[90vh] min-h-[700px]'
        }`}>
          {isScrolled ? (
            <CompactHeader handleDownload={handleDownload} />
          ) : (
            <HeroContent handleDownload={handleDownload} />
          )}
        </div>
      </div>
      {!isScrolled && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ScrollIndicator targetId="about" label="View My Journey" />
        </div>
      )}
    </header>
  );
}

interface HeaderContentProps {
  handleDownload: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function CompactHeader({ handleDownload }: HeaderContentProps) {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center">
        <ProfileImage size="small" />
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-4">
          Gabor Gal
        </h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <SocialLinks variant="compact" />
        <a
          href="/cv/GaborGal_CV.pdf"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group text-sm"
        >
          <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span className="font-medium hidden sm:inline">CV</span>
        </a>
      </div>
    </div>
  );
}

function HeroContent({ handleDownload }: HeaderContentProps) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12 text-center mt-[-10vh]">
        <div className="flex flex-col items-center space-y-8">
          <ProfileImage size="large" />
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Gabor Gal
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-3">
              System Administrator
            </p>
            <p className="text-base md:text-lg text-gray-400">
              London, United Kingdom
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto space-y-2">
            <div className="typing-animation-1 text-gray-300 text-lg">
              I'm a London based SysAdmin.
            </div>
            <div className="typing-animation-2 text-gray-300 text-lg">
              Let's start scrolling and learn more about me.
            </div>
          </div>
          <div className="w-full max-w-xs mx-auto">
            <SocialLinks variant="expanded" />
          </div>
          <a
            href="/cv/GaborGal_CV.pdf"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group"
          >
            <FileDown className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span className="text-base font-medium">Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProfileImage({ size }: { size: 'small' | 'large' }) {
  return (
    <div className={`relative mx-auto transition-all duration-500 ease-in-out ${
      size === 'small' ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-32 h-32'
    }`}>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="rounded-full object-cover w-full h-full ring-4 ring-cyan-500/30 shadow-lg shadow-cyan-500/20"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent" />
    </div>
  );
}