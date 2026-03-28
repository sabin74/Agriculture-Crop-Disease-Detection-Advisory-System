import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload'; // <--- make sure this is imported
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                {/* Root path: redirect to dashboard if logged in, otherwise login */}
                <Route path="/" element={token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />

                {/* Public routes */}
                <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
                <Route path="/signup" element={<PublicRoute> <Signup /> </PublicRoute>} />

                {/* Protected routes */}
                <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
                <Route path="/upload" element={<PrivateRoute> <Upload /> </PrivateRoute>} />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
