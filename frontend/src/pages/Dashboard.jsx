import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ShieldAlert, IndianRupee, Activity, CloudRain } from 'lucide-react';
import DemoPanel from '../components/DemoPanel';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [policy, setPolicy] = useState(null);

  const fetchPolicy = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/policy/${user.id}`);
      if (res.ok) setPolicy(await res.json());
    } catch (err) {
      console.log('Error fetching policy', err);
    }
  };

  useEffect(() => {
    if (user?.id) fetchPolicy();
  }, [user]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Hello, {user?.name} 👋</h1>
        {!policy && (
            <Link to="/policy" className="btn btn-primary hoverable">Get Covered Now</Link>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="glass-card flex-col gap-2 hoverable">
          <ShieldAlert className="text-primary" size={32} />
          <p className="text-muted text-sm mt-4">Active Policy</p>
          <h3 className="text-xl">{policy ? 'Premium Active' : 'No Policy Found'}</h3>
          {policy && <span className="badge badge-low mt-2 inline-block">Protected</span>}
        </div>

        <div className="glass-card flex-col gap-2 hoverable">
          <IndianRupee className="text-success" size={32} />
          <p className="text-muted text-sm mt-4">Weekly Premium</p>
          <h3 className="text-xl">₹{policy?.premium ? policy.premium.toFixed(2) : '0.00'}</h3>
        </div>

        <div className="glass-card flex-col gap-2 hoverable">
          <Activity className="text-warning" size={32} />
          <p className="text-muted text-sm mt-4">Risk Level</p>
          <h3 className="text-xl">
            {policy ? (policy.riskScore > 0.6 ? 'High' : policy.riskScore > 0.3 ? 'Medium' : 'Low') : 'N/A'}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card hoverable">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <CloudRain className="text-info" /> Environment Status
          </h2>
          <div className="flex-col gap-4 mt-6">
            <div className="flex justify-between items-center p-4 mb-4" style={{background: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem'}}>
              <span className="font-medium">Current AQI ({user?.location})</span>
              <span className="badge badge-high">185 - Poor</span>
            </div>
            <div className="flex justify-between items-center p-4 mb-4" style={{background: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem'}}>
              <span className="font-medium">Rain Probability</span>
              <span className="badge badge-low">12%</span>
            </div>
          </div>
        </div>

        {/* Demo Panel integration */}
        <div className="glass-card border border-primary hoverable" style={{background: 'rgba(59, 130, 246, 0.05)'}}>
          <DemoPanel userId={user?.id} location={user?.location} />
        </div>
      </div>
    </div>
  );
}
