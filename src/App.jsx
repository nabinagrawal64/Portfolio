import { BrowserRouter } from "react-router-dom";
//eslint-disable-next-line
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
                    <Navbar />
                    <Hero />
                </div>
                <div>
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    {/* <Feedbacks /> */}
                </div>
                <div className="relative z-0 ">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
