import { useState } from 'react';
import { CloudLightning, Factory, NavigationOff, Zap, ShieldCheck } from 'lucide-react';

export default function DemoPanel({ userId, location }) {
  const [simStatus, setSimStatus] = useState(null);
  const [claimResponse, setClaimResponse] = useState(null);

  const simulateTrigger = async (type) => {
    setSimStatus(`Simulating ${type}... Executing FastAPI Logic.`);
    setClaimResponse(null);
    try {
      const res = await fetch('http://localhost:8080/api/triggers/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, userId: userId || 1, location: location || 'Demo' })
      });
      if (res.ok) {
        setClaimResponse(await res.json());
        setSimStatus('Simulation complete.');
      } else {
        setSimStatus('No active policy found. Get cover first!');
        // Provide mock offline structure for pure static frontend demo running
        if (!res) { throw new Error('offline') }
      }
    } catch(err) {
       setSimStatus('API offline - showing mock demo output.');
       setClaimResponse({
           status: type === 'GPS_SPOOFING' ? 'REJECTED' : 'APPROVED',
           fraudScore: type === 'GPS_SPOOFING' ? 95 : 12,
           reason: type === 'GPS_SPOOFING' ? 'No movement detected (GPS spoofing).' : 'All patterns normal.',
           amount: 250
       });
    }
  };

  return (
    <div className="p-2">
      <h2 className="text-xl flex items-center gap-2 mb-4 text-primary">
        <Zap /> Demo Panel
      </h2>
      <p className="text-muted text-sm mb-6">Trigger parametric events to test automation and fraud models.</p>

      <div className="grid grid-cols-2 gap-4">
        <button className="btn btn-outline border-info flex-col gap-2 p-4 h-full text-center" onClick={() => simulateTrigger('HEAVY_RAIN')}>
          <CloudLightning className="text-info" size={24}/>
          <span className="text-sm">Simulate Rain Trigger<br/>(Valid Scenario)</span>
        </button>
        <button className="btn btn-outline border-warning flex-col gap-2 p-4 h-full text-center" onClick={() => simulateTrigger('SEVERE_POLLUTION')}>
          <Factory className="text-warning" size={24}/>
          <span className="text-sm">Simulate AQI Trigger<br/>(Valid Scenario)</span>
        </button>
        <button className="btn btn-outline border-danger flex-col gap-2 p-4 h-full text-center" onClick={() => simulateTrigger('GPS_SPOOFING')}>
          <NavigationOff className="text-danger" size={24}/>
          <span className="text-sm">Market Crash Test<br/>(GPS Spoofing)</span>
        </button>
        <button className="btn btn-outline border-primary flex-col gap-2 p-4 h-full text-center" onClick={() => simulateTrigger('WEATHER_MISMATCH')}>
          <ShieldCheck className="text-primary" size={24}/>
          <span className="text-sm">Weather Mismatch<br/>(Review Scenario)</span>
        </button>
      </div>

      {simStatus && (
        <div className="mt-6 p-4 rounded bg-gray-800 text-center border-t border-gray-700">
          <p className="text-sm text-primary animate-pulse">{simStatus}</p>
        </div>
      )}

      {claimResponse && (
        <div className="mt-4 p-4 border rounded relative overflow-hidden" 
             style={{borderColor: claimResponse.status === 'APPROVED' ? 'var(--success)' : (claimResponse.status === 'REVIEW' ? 'var(--warning)' : 'var(--danger)')}}>
          <h4 className="font-bold mb-2">AI Fraud Output</h4>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Score: {claimResponse.fraudScore.toFixed(0)}/100</span>
            <span className={`badge badge-${claimResponse.status}`}>{claimResponse.status}</span>
          </div>
          <p className="text-sm mt-2">{claimResponse.reason || 'All clear'}</p>
          
          {claimResponse.status === 'APPROVED' && (
            <div className="mt-4 pt-4 border-t border-gray-700 text-center">
              <span className="text-success font-bold text-lg">₹{claimResponse.amount} credited to wallet instantly</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
