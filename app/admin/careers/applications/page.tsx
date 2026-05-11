'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Loader2, Briefcase, ChevronRight, User, GraduationCap, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface JobApplication {
  _id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  experience: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function JobApplicationsAdmin() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const clearAllApplications = async () => {
    try {
      const response = await fetch('/api/admin/careers/applications', {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('All applications cleared successfully');
        setApplications([]);
      } else {
        toast.error('Failed to clear applications');
      }
    } catch (error) {
      toast.error('An error occurred while clearing applications');
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/admin/careers/applications');
      const data = await response.json();
      if (Array.isArray(data)) {
        setApplications(data);
      }
    } catch (error) {
      toast.error('Failed to fetch applications');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      // In a real app, you'd have a PATCH route for this
      toast.info(`Status update to ${newStatus} coming soon!`);
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-1.5 bg-[#332885] rounded-full"></div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Job Applications</h1>
          </div>
          <p className="text-gray-500 text-sm">Review and manage candidates applying for positions.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button 
                className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-sm hover:shadow-md"
                disabled={applications.length === 0}
              >
                <Trash2 size={18} />
                Clear All Applications
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-3xl border-gray-100 shadow-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-serif font-bold text-gray-900">Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-500 text-lg leading-relaxed">
                  This action cannot be undone. This will permanently delete all <span className="font-bold text-red-600">{applications.length}</span> job applications from your database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-3 sm:gap-0">
                <AlertDialogCancel className="rounded-xl border-gray-200 font-bold hover:bg-gray-50">Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={clearAllApplications}
                  className="bg-red-600 text-white rounded-xl font-bold hover:bg-black"
                >
                  Yes, delete all data
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-[#332885]" size={40} />
            <p className="text-gray-400 font-medium italic">Loading applications...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-32">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No applications yet</h3>
            <p className="text-gray-500">Wait for candidates to apply through the careers page.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Candidate</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Position & Exp</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Contact</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Status</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Date</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {applications.map((app) => (
                  <tr key={app._id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#332885]/5 flex items-center justify-center text-[#332885]">
                          <User size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{app.name}</p>
                          <p className="text-xs text-gray-400 mt-1 max-w-[200px] truncate italic">"{app.message}"</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-2">
                        <p className="font-bold text-[#332885] text-sm">{app.jobTitle}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <GraduationCap size={14} className="text-[#332885]/40" />
                          {app.experience} Years Experience
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail size={14} className="text-[#332885]/40" />
                          {app.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} className="text-[#332885]/40" />
                          {app.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        app.status === 'pending' ? 'bg-amber-50 text-amber-600' :
                        app.status === 'reviewed' ? 'bg-blue-50 text-blue-600' :
                        app.status === 'rejected' ? 'bg-red-50 text-red-600' :
                        'bg-green-50 text-green-600'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Calendar size={14} className="text-[#332885]/40" />
                        {new Date(app.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-gray-300 hover:text-[#332885] transition-colors">
                        <ChevronRight size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="px-8 py-5 bg-gray-50/50 border-t border-gray-50 flex justify-between items-center">
          <p className="text-xs text-gray-400">{applications.length} applications total</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#332885]/60 italic">Recruitment Portal</p>
        </div>
      </div>
    </div>
  );
}
