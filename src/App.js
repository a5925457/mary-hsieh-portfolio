import Fullpage from './components/Fullpage';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Fullpage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
