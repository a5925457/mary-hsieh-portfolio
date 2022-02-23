import Fullpage from './components/Fullpage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Fullpage />} />
        </Routes>
    );
}

export default App;
