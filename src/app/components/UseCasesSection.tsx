import React, { useState } from "react";
import { motion } from "motion/react";

interface UseCase {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    category: "AI AUTOMATION",
    categoryColor: "bg-purple-600",
    title: "Loan Origination & Mandate Management",
    description: "A Leading Private Bank Needed A Robust Loan Origination System To Automate Mandate Validation And Ensure Compliance Across Multiple Channels While Reducing Processing Time By 60%.",
    desktopImage: "https://images.unsplash.com/photo-1656189368832-43a6dd24f18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjBiYW5raW5nJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2ODIwMTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwcGF5bWVudHxlbnwxfHx8fDE3NjcxNjEyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    category: "CLOUD MIGRATION",
    categoryColor: "bg-purple-600",
    title: "Migration Of Financial-Services Workload To AWS",
    description: "Modernized Financial Services Platform With High Security, SEBI Compliance, And Zero Downtime. Migrated To AWS With 99.99% Uptime.",
    desktopImage: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBV1MlMjBjbG91ZCUyMHNlcnZlcnMlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2ODIwMTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VydmVyJTIwcm9vbXxlbnwxfHx8fDE3NjcxNjEyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    category: "IOT ANALYTICS",
    categoryColor: "bg-purple-600",
    title: "Industrial IoT Platform",
    description: "A Leading Industrial Enterprise Needed A Centralized IoT Platform To Collect, Process, And Analyze Millions Of Sensor Signals In Real Time. Enabled Predictive Maintenance And Reduced Downtime By 45%.",
    desktopImage: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwZmFjdG9yeSUyMHNlbnNvcnN8ZW58MXx8fHwxNzY4MjAxOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzE2MTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    category: "DIGITAL TRANSFORMATION",
    categoryColor: "bg-purple-600",
    title: "Insurance Platform Modernization",
    description: "A Leading Life Insurance Company Wanted To Modernize Core Insurance Applications To Handle Large Policyholder Data Securely While Providing Real-Time Policy Management And Claims Processing.",
    desktopImage: "https://images.unsplash.com/photo-1711185898083-e1f04ff38300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjB0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMHBsYXRmb3JtfGVufDF8fHx8MTc2ODIwMjA1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjBoYW5kc2hha2V8ZW58MXx8fHwxNjcxNjEyODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    category: "DIGITAL TRANSFORMATION",
    categoryColor: "bg-purple-600",
    title: "Cloud Transformation For Housing Finance",
    description: "Digitalized Housing Finance Workflows To Reduce Loan Processing Delays And Improve Customer Experience With Cloud-Native Architecture.",
    desktopImage: "https://images.unsplash.com/photo-1709080381729-965c62ab0471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzaW5nJTIwZmluYW5jZSUyMHJlYWwlMjBlc3RhdGV8ZW58MXx8fHwxNzY4MjAyMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1713937118847-3e1970b61cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBza3lsaW5lfGVufDF8fHx8MTc2NzEyMzc4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    category: "CLOUD MIGRATION",
    categoryColor: "bg-purple-600",
    title: "Secure Cloud Migration For Leading Private Bank",
    description: "Enhanced Service Reliability With RBI Compliance And Secure Digital Infrastructure With Multi-Region Disaster Recovery.",
    desktopImage: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBjbG91ZCUyMGJhbmtpbmclMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjgyMDM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBjbG91ZCUyMGJhbmtpbmclMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjgyMDM1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 7,
    category: "DEVOPS AUTOMATION",
    categoryColor: "bg-purple-600",
    title: "DevOps Pipeline For PlayStation",
    description: "A Leading Gaming Platform Needed To Modernize DevOps Pipelines To Improve Release Speed And Reduce Downtime In Multi-Region Deployments With Automated Testing And Continuous Integration.",
    desktopImage: "https://images.unsplash.com/photo-1759701547797-15ee208edc40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGVzcG9ydHN8ZW58MXx8fHwxNjcxNjEyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mobileImage: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBjb250cm9sbGVyfGVufDF8fHx8MTc2NzEyNzY4NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    category: "DIGITAL TRANSFORMATION",
    categoryColor: "bg-purple-600",
    title: "NPS Withdrawal & Grievance System",
    description: "A Leading Mutual Fund Service Provider Required A Modern Platform To Digitize Pension Withdrawals And Grievance Management With End-To-End Automation And Real-Time Status Tracking.",
    desktopImage: "https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR1YWwlMjBmdW5kJTIwaW52ZXN0bWVudCUyMGFuYWx5c2lzfGVufDF8fHx8MTc2ODIwMjI5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mobileImage: "https://images.unsplash.com/photo-1726653024714-42857c1b4906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwcG9ydGZvbGlvJTIwZGlnaXRhbHxlbnwxfHx8fDE3NjcxNjEyODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
  onCaseStudiesClick?: () => void;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase, index, onCaseStudiesClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileTapped, setIsMobileTapped] = useState(false);

  // Handle mobile tap - toggle expanded state
  const handleMobileTap = () => {
    setIsMobileTapped(!isMobileTapped);
  };

  // Determine if card should show expanded state (hover on desktop OR tap on mobile)
  const isExpanded = isHovered || isMobileTapped;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleMobileTap}
      onTap={handleMobileTap}
      className="group relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(152deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 100%)",
        border: "1px solid rgba(139, 92, 246, 0.2)"
      }}
    >
      {/* Background Image with Purple Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop Background Image */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${useCase.desktopImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Mobile Background Image */}
        <div 
          className="block md:hidden absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${useCase.mobileImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Purple Gradient Overlay - Lighter for better image visibility */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(88, 28, 135, 0.4) 70%, rgba(0, 0, 0, 0.75) 100%)"
          }}
        />
        
        {/* Hover Overlay - Darker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col p-6 md:p-8">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isExpanded ? 0 : 1, y: isExpanded ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className={`${useCase.categoryColor} text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full inline-block self-start mb-auto`}
        >
          {useCase.category}
        </motion.div>

        {/* Title - Always Visible */}
        <motion.h3
          animate={{ 
            y: isExpanded ? -20 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] text-white mb-4"
        >
          {useCase.title}
        </motion.h3>

        {/* Description - Show on Hover/Tap */}
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ 
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 20,
            height: isExpanded ? "auto" : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] leading-[1.6] text-white/90 mb-6">
            {useCase.description}
          </p>
          
          {/* Know More Button - Left Aligned */}
          <div className="flex justify-start">
            <button
              className="font-['Montserrat',sans-serif] font-medium text-[14px] text-white px-6 py-4 rounded-full border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              onClick={onCaseStudiesClick}
            >
              Know more
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hover Border Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.1)"
        }}
      />
    </motion.div>
  );
};

export const UseCasesSection: React.FC<{ onCaseStudiesClick?: () => void }> = ({ onCaseStudiesClick }) => {
  return (
    <section className="relative w-full bg-black pt-[0px] pb-16 md:pb-24 -mt-[80px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Section Header */}
      

      {/* Cards Grid Container with consistent padding */}
      <div className="w-full px-[32px] md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index} onCaseStudiesClick={onCaseStudiesClick} />
          ))}
        </div>
      </div>
    </section>
  );
};