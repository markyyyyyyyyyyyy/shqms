import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './state/auth';
import { AdminSettingsProvider } from './state/adminSettings';

createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <AuthProvider>
            <AdminSettingsProvider>
                <App />
            </AdminSettingsProvider>
        </AuthProvider>
    </BrowserRouter>
);
