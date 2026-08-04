import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';

// Secondary route — split out so the landing page ships less JavaScript.
const MyStory = lazy(() => import('./pages/MyStory'));

/**
 * React Router does not scroll to hash targets on navigation, so do it here:
 * jump to the anchored section, or to the top when there is no hash.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait one frame so the target section has mounted.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/my-story" element={<MyStory />} />

        {/* Legacy per-page routes now live as sections on the landing page. */}
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/education" element={<Navigate to="/#education" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    // reducedMotion="user" makes framer-motion honour prefers-reduced-motion.
    // The CSS override in index.css cannot reach these JS-driven animations.
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollManager />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <ScrollProgress />
        <main id="main">
          <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </Router>
    </MotionConfig>
  );
}

export default App;
