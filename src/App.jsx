import React, { useState } from 'react';
import LiquidCanvas from './components/LiquidCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import CalculatorSuite from './components/CalculatorSuite';
import Transformations from './components/Transformations';
import Supplements from './components/Supplements';
import Timetable from './components/Timetable';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import AppPreview from './components/AppPreview';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#08090C] text-slate-100 selection:bg-[#FF5500] selection:text-white">
      {/* Dynamic 60FPS Neural Liquid Background Canvas */}
      <LiquidCanvas />

      {/* Floating Glassmorphism Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero onOpenBooking={handleOpenBooking} />
        <About onOpenBooking={handleOpenBooking} />
        <Programs onOpenBooking={handleOpenBooking} />
        <Trainers onOpenBooking={handleOpenBooking} />
        <Membership onOpenBooking={handleOpenBooking} />
        <CalculatorSuite />
        <Transformations onOpenBooking={handleOpenBooking} />
        <Supplements />
        <Timetable onOpenBooking={handleOpenBooking} />
        <Gallery />
        <Testimonials />
        <Blog />
        <AppPreview onOpenBooking={handleOpenBooking} />
        <ContactMap />
      </main>

      {/* Futuristic Premium Footer */}
      <Footer />

      {/* Interactive AI Cyberbot Assistant */}
      <AIChatbot onOpenBooking={handleOpenBooking} />

      {/* Lead Capture Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
