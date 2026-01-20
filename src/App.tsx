import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Certifications } from "@/components/sections/Certifications";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { APP_ROUTES } from "@/constants/AppConstants";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Home Page with all sections
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Articles />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.HOME} element={<HomePage />} />
            <Route path={APP_ROUTES.PROJECTS} element={<div className="pt-20"><Projects /></div>} />
            <Route path={APP_ROUTES.CONTACT} element={<div className="pt-20"><Contact /></div>} />
            {/* Add more specific routes as needed, for now Home covers all as a single page scroll experience usually, but here satisfied with routing */}
            <Route path={APP_ROUTES.ABOUT} element={<div className="pt-20"><About /><Skills /></div>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
