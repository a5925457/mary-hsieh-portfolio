import Fullpage from './components/Fullpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Fullpage />} />
            </Routes>
        </Router>
    );
}

export default App;
