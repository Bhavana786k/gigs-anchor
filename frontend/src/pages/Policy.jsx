import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Shield, Settings, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Policy() {
  const { user } = useContext(AuthContext);
  const [premiumData, setPremiumData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateDynamicPremium = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/premium/calculate?rain=0.8&aqi=185&areaRisk=0.6&workHours=0.5`);
        if (res.ok) setPremiumData(await res.json());
      } catch (err) {
        setPremiumData({ weekly_premium: 85.5, risk_score: 0.71, risk_category: "High", message: "Demo Premium Computed" });
      }
    };
    calculateDynamicPremium();
  }, [user]);

  const handleBuyPolicy = async () => {
    try {
        await fetch('http://localhost:8080/api/policy/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id || 1, premium: premiumData?.weekly_premium || 80, riskScore: premiumData?.risk_score || 0.5, status: 'ACTIVE' })
        });
        navigate('/dashboard');
    } catch(err) {
        console.error(err);
        navigate('/dashboard');
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-6 flex items-center gap-2"><Shield className="text-primary"/> Dynamic Policy Engine</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card hoverable">
          <h2 className="text-xl flex items-center gap-2 mb-4"><Settings className="text-warning"/> AI Risk Assessment</h2>
          
          <div className="space-y-4">
            <div className="form-group mb-4">
              <label className="form-label space-y-2">Rain Probability: High</label>
              <div className="w-full bg-gray-700 h-2 rounded"><div className="bg-primary h-2 rounded" style={{width: '80%'}}></div></div>
            </div>
            <div className="form-group mb-4">
              <label className="form-label space-y-2">Air Quality Index (AQI): 185</label>
              <div className="w-full bg-gray-700 h-2 rounded"><div className="bg-danger h-2 rounded" style={{width: '37%'}}></div></div>
            </div>
            <div className="form-group mb-4">
              <label className="form-label space-y-2">Area Risk Factor (Historical)</label>
              <div className="w-full bg-gray-700 h-2 rounded"><div className="bg-warning h-2 rounded" style={{width: '60%'}}></div></div>
            </div>
          </div>

          {premiumData && (
            <div className="mt-8 p-4 border border-primary rounded" style={{background: 'rgba(59, 130, 246, 0.1)'}}>
              <p className="text-muted text-sm"><Info size={16} className="inline mr-1"/> {premiumData.message}</p>
              <h3 className="text-2xl mt-2 text-warning font-bold">Dynamic Premium: <br/>₹{premiumData.weekly_premium.toFixed(2)}/week</h3>
            </div>
          )}

          <button onClick={handleBuyPolicy} className="btn btn-primary mt-6 w-full text-lg">Purchase Weekly Protection</button>
        </div>
      </div>
    </div>
  );
}
