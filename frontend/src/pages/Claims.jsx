import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FileText, Clock, FileWarning, CheckCircle } from 'lucide-react';

export default function Claims() {
  const { user } = useContext(AuthContext);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/claims/${user.id}`);
        if(res.ok) setClaims(await res.json());
      } catch (err) {
        console.log("Using Mock Fallback", err);
        setClaims([
            { id: 489, amount: 250, status: 'APPROVED', fraudScore: 12, reason: 'All patterns normal.' }
        ]);
      }
    };
    if (user) fetchClaims();
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl mb-6 flex items-center gap-2"><FileText className="text-primary"/> Claims History & AI Explanations</h1>
      
      {claims.length === 0 ? (
        <div className="glass-card text-center p-8">
          <p className="text-muted text-lg">No claims found.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {claims.map((claim, idx) => (
             <div key={idx} className="glass-card hoverable flex justify-between items-center px-6">
                <div className="flex items-center gap-6">
                  {claim.status === 'APPROVED' ? <CheckCircle className="text-success" size={28} /> : (claim.status === 'REVIEW' ? <Clock className="text-warning" size={28} /> : <FileWarning className="text-danger" size={28} />)}
                  <div>
                    <h3 className="font-bold text-lg">Claim #{claim.id} - ₹{claim.amount.toFixed(2)}</h3>
                    <p className="text-sm text-info mt-1 text-muted">AI Reason: {claim.reason || 'Auto-Parametric Standard Payout'}</p>
                  </div>
                </div>
                <div className="text-right">
                   <div className="text-sm font-semibold mb-2 text-muted">AI Fraud Score: <span className="text-primary">{claim.fraudScore.toFixed(0)}</span></div>
                   <span className={`badge badge-${claim.status}`}>{claim.status}</span>
                </div>
             </div>
          ))}
        </div>
      )}
    </div>
  );
}
