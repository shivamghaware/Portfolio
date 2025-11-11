'use client';
import React from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} shivamghaware. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
