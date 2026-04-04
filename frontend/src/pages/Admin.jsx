import { ShieldCheck, Users, AlertTriangle, IndianRupee } from 'lucide-react';

export default function Admin() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Admin API Dashboard</h1>
        <span className="badge badge-APPROVED border border-success">System Online</span>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="glass-card text-center hoverable">
           <Users size={32} className="mx-auto text-primary mb-2" />
           <p className="text-main text-2xl font-bold">1,248</p>
           <p className="text-xs text-muted uppercase tracking-wider mt-1">Active Policies</p>
        </div>
        <div className="glass-card text-center hoverable">
           <AlertTriangle size={32} className="mx-auto text-danger mb-2" />
           <p className="text-main text-2xl font-bold">14.2%</p>
           <p className="text-xs text-muted uppercase tracking-wider mt-1">Spoofing Blocked</p>
        </div>
        <div className="glass-card text-center hoverable">
           <ShieldCheck size={32} className="mx-auto text-success mb-2" />
           <p className="text-main text-2xl font-bold">98.5%</p>
           <p className="text-xs text-muted uppercase tracking-wider mt-1">Auto-Approval Rate</p>
        </div>
        <div className="glass-card text-center hoverable">
           <IndianRupee size={32} className="mx-auto text-info mb-2" />
           <p className="text-main text-2xl font-bold">4.2M</p>
           <p className="text-xs text-muted uppercase tracking-wider mt-1">Processed (INR)</p>
        </div>
      </div>

      <div className="glass-card">
        <h2 className="text-lg mb-4 font-bold border-b border-gray-700 pb-4">Recent Rejected Claims (AI Anti-Spoofing Engine)</h2>
        <table className="w-full text-left border-collapse">
           <thead>
             <tr className="text-muted text-sm border-b border-gray-700">
                <th className="py-3 px-2">User ID</th>
                <th className="py-3 px-2">Trigger Zone</th>
                <th className="py-3 px-2">AI Score</th>
                <th className="py-3 px-2">Explanation</th>
             </tr>
           </thead>
           <tbody>
             <tr className="border-b border-gray-800 hover:bg-gray-800 transition">
                <td className="py-4 px-2 font-medium">1042</td>
                <td className="py-4 px-2">Mumbai_Zone1</td>
                <td className="py-4 px-2 text-danger font-bold">92</td>
                <td className="py-4 px-2 text-sm text-muted">No movement detected (GPS spoofing). No delivery activity.</td>
             </tr>
             <tr className="border-b border-gray-800 hover:bg-gray-800 transition">
                <td className="py-4 px-2 font-medium">891</td>
                <td className="py-4 px-2">Delhi_NCR</td>
                <td className="py-4 px-2 text-warning font-bold">65</td>
                <td className="py-4 px-2 text-sm text-muted">Weather mismatch. Review required.</td>
             </tr>
           </tbody>
        </table>
      </div>
    </div>
  );
}
