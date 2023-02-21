import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import { Footer } from "./components/footer/footer.component";
import Projects from "./pages/projects/projects.component";

function App() {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 bg-zinc-100 dark:bg-black">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      {/* <div className="w-full h-max bg-neutral-100 dark:bg-black">
        <div className="max-w-7xl mx-auto shadow-md bg-white dark:bg-neutral-900"> */}
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
      {/* </div>
      </div> */}
    </>
  );
}

export default App;
