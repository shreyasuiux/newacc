// Main App Component
import React, { useState } from "react";
import Desktop2 from "../imports/Desktop72";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchModal } from "./components/SearchModal";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // These handlers will be called from Footer and trigger Desktop2's navigation via custom events
  const handleServiceClick = (serviceTitle: string) => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Dispatch custom events that Desktop2 listens to
    window.dispatchEvent(new CustomEvent('navigate-service', { detail: serviceTitle }));
  };

  const handleProductClick = (productTitle: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('navigate-product', { detail: productTitle }));
  };

  const handleWhoWeAreItemClick = (item: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('navigate-whoweare', { detail: item }));
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('navigate-home'));
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
        <Desktop2 onSearchClick={handleSearchClick} />
        <Footer 
          onServiceClick={handleServiceClick}
          onProductClick={handleProductClick}
          onWhoWeAreItemClick={handleWhoWeAreItemClick}
          onLogoClick={handleLogoClick}
        />
        <SearchModal 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}