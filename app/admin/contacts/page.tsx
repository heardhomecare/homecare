'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';
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
import { Download, Search, Mail, Phone, MapPin, Calendar, Loader2, ChevronRight, Trash2 } from 'lucide-react';

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  source: string;
  message: string;
  createdAt: string;
}

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const clearAllContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts', {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('All contacts cleared successfully');
        setContacts([]);
      } else {
        toast.error('Failed to clear contacts');
      }
    } catch (error) {
      toast.error('An error occurred while clearing contacts');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts');
      const data = await response.json();
      if (Array.isArray(data)) {
        setContacts(data);
      }
    } catch (error) {
      toast.error('Failed to fetch contacts');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToExcel = () => {
    const dataToExport = contacts.map(c => ({
      Name: c.name,
      Email: c.email,
      Phone: c.phone,
      City: c.city,
      Source: c.source || 'N/A',
      Message: c.message,
      Date: new Date(c.createdAt).toLocaleDateString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    XLSX.writeFile(workbook, `HEARD_Home_Care_Leads_${new Date().toISOString().split('T')[0]}.xlsx`);
    toast.success('Exported successfully');
  };

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-1.5 bg-[#332885] rounded-full"></div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Contact Leads</h1>
          </div>
          <p className="text-gray-500 text-sm">Manage and export your marketing leads and inquiries.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#332885]/10 focus:border-[#332885] w-full md:w-64 transition-all"
            />
          </div>
          <button 
            onClick={exportToExcel}
            className="flex items-center gap-2 bg-[#332885] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Download size={18} />
            Export
          </button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button 
                className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 hover:text-white transition-all active:scale-95"
                disabled={contacts.length === 0}
              >
                <Trash2 size={18} />
                Clear All
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-3xl border-gray-100 shadow-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-serif font-bold text-gray-900">Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-500 text-lg leading-relaxed">
                  This action cannot be undone. This will permanently delete all <span className="font-bold text-red-600">{contacts.length}</span> contact leads from your database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-3 sm:gap-0">
                <AlertDialogCancel className="rounded-xl border-gray-200 font-bold hover:bg-gray-50">Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={clearAllContacts}
                  className="bg-red-600 text-white rounded-xl font-bold hover:bg-black"
                >
                  Yes, delete all data
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="animate-spin text-[#332885]" size={40} />
            <p className="text-gray-400 font-medium italic">Loading your leads...</p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-32">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No leads found</h3>
            <p className="text-gray-500">Try adjusting your search terms or wait for new submissions.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Lead Information</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Contact Details</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Location & Source</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60">Date Received</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#332885]/60"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredContacts.map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#332885]/5 flex items-center justify-center text-[#332885] font-bold text-lg">
                          {contact.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{contact.name}</p>
                          <p className="text-xs text-gray-400 mt-1 max-w-[200px] truncate italic">"{contact.message}"</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail size={14} className="text-[#332885]/40" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone size={14} className="text-[#332885]/40" />
                          {contact.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} className="text-[#332885]/40" />
                          {contact.city}
                        </div>
                        <div className="inline-block px-2 py-1 rounded bg-[#332885]/5 text-[#332885] text-[10px] font-bold uppercase tracking-wider">
                          {contact.source || 'Direct'}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <Calendar size={14} className="text-[#332885]/40" />
                        {new Date(contact.createdAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
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
          <p className="text-xs text-gray-400">Showing {filteredContacts.length} of {contacts.length} leads</p>
          <p className="text-xs font-bold uppercase tracking-widest text-[#332885]/60 italic">Marketing Data Dashboard</p>
        </div>
      </div>
    </div>
  );
}
