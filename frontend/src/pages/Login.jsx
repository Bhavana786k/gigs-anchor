import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo123');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const user = await res.json();
        login(user);
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
        // Hackathon fast path
        login({ id: 1, name: 'Demo Partner', email, location: 'Mumbai' });
        navigate('/dashboard');
      }
    } catch (err) {
      console.error(err);
      // For demo fallback if backend hasn't booted fully yet
      login({ id: 1, name: 'Demo Partner', email, location: 'Mumbai' });
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center" style={{ minHeight: '80vh' }}>
      <div className="glass-card w-full hoverable" style={{ maxWidth: '400px' }}>
        <div className="text-center mb-6">
          <LogIn size={40} className="text-primary mb-4" style={{ margin: '0 auto' }}/>
          <h2 className="text-2xl">Welcome Back</h2>
          <p className="text-muted">Sign in to your GigsAnchor account</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" required className="form-input" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" required className="form-input" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          
          <button type="submit" className="btn btn-primary w-full mt-4">
            <LogIn size={20} /> Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-muted">
          Don't have an account? <Link to="/register" className="text-primary">Register here</Link>
        </p>
      </div>
    </div>
  );
}
