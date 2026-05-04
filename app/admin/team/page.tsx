import { Mail, CheckCircle2, Clock } from 'lucide-react'

export default function TeamManagement() {
  const dummyInvites = [
    { id: 1, email: 'john@example.com', role: 'Admin', status: 'Accepted', date: 'Oct 20, 2024' },
    { id: 2, email: 'pending.admin@example.com', role: 'Admin', status: 'Pending', date: 'Oct 24, 2024' },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-500 mt-1">Invite new administrators and manage access.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Invite Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Invite Admin</h2>
            <p className="text-sm text-gray-600 mb-6">
              Send an invitation to grant administrative access to the HEARD dashboard.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@example.com" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#332885] focus:ring-1 focus:ring-[#332885]"
                />
              </div>
              <button 
                type="button"
                className="w-full bg-[#332885] hover:bg-[#281f6d] text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={18} />
                Send Invitation
              </button>
            </form>
          </div>
        </div>

        {/* Invites List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">Recent Invitations</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
                <tr>
                  <th className="px-6 py-4 font-semibold">Email</th>
                  <th className="px-6 py-4 font-semibold">Role</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Sent On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dummyInvites.map((invite) => (
                  <tr key={invite.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{invite.email}</td>
                    <td className="px-6 py-4 text-gray-600">{invite.role}</td>
                    <td className="px-6 py-4">
                      {invite.status === 'Accepted' ? (
                        <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                          <CheckCircle2 size={16} /> Accepted
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-yellow-600 text-sm font-semibold">
                          <Clock size={16} /> Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{invite.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
