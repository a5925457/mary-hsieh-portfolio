import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio'
import Contact from './Contact';

const Fullpage = () => (
    <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={['#FF9292', '#FF9BA2', '#FFA8B7', '#FFAEC0']}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <Navbar fullpageApi={fullpageApi} />
                    <div className="section">
                        <Banner />
                        <i
                            style={{ bottom: '5%' }}
                            className="cursor-pointer absolute left-1/2 animate-bounce text-white fa-solid fa-angles-down text-center"
                            onClick={() => fullpageApi.moveSectionDown()}
                        ></i>
                    </div>
                    <div className="section">
                        <About />
                    </div>
                    <div className="section">
                        <Portfolio />
                    </div>
                    <div className="section">
                        <Contact />
                        <footer className="absolute w-full text-white text-center " style={{ bottom: '3%' }}>
                            © Copyrights Mary Hsieh. All rights reserved.
                        </footer>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default Fullpage;
