import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, ExternalLink, Printer } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { playClick, playSuccess } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('download'); // 'download' | 'preview'

  if (!isOpen) return null;

  const handleDownload = (type) => {
    playSuccess();
    const link = document.createElement('a');
    if (type === '1page') {
      link.href = personalInfo.resumes.onePage;
      link.download = 'M_M_Prateek_1Page_Resume.pdf';
    } else {
      link.href = personalInfo.resumes.master;
      link.download = 'M_M_Prateek_Master_Resume.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-dark-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-slate-100">
                Official Engineering Resumes
              </h3>
              <p className="text-xs text-slate-400">Verified documents for M M Prateek</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-white/10 bg-dark-850 px-6 pt-3 gap-6 text-sm">
          <button
            onClick={() => {
              playClick();
              setActiveTab('download');
            }}
            className={`pb-3 font-medium transition-colors border-b-2 ${
              activeTab === 'download'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Download Direct PDF
          </button>
          <button
            onClick={() => {
              playClick();
              setActiveTab('preview');
            }}
            className={`pb-3 font-medium transition-colors border-b-2 ${
              activeTab === 'preview'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ATS Summary Preview
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'download' ? (
            <div className="space-y-4">
              {/* Option 1: 1-Page Resume */}
              <div className="p-5 rounded-xl border border-cyan-500/20 bg-dark-800/50 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-100 text-base">
                      1-Page SDE Focused Resume
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Recommended for Recruiters
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Concise, high-impact 1-page format tailored for quick recruiter evaluation. Highlights Invicto Labs internship, Jnanetra state award, and technical skills matrix.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <span>PDF Format</span>
                    <span>•</span>
                    <span>~122 KB</span>
                    <span>•</span>
                    <span>Updated 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={personalInfo.resumes.onePage}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    title="Preview in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDownload('1page')}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download 1-Page
                  </button>
                </div>
              </div>

              {/* Option 2: Master Resume */}
              <div className="p-5 rounded-xl border border-purple-500/20 bg-dark-800/50 hover:border-purple-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-100 text-base">
                      Master Engineering Dossier
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      In-Depth Technical Dossier
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Comprehensive multi-page engineered master dossier covering complete architectural specifications, system performance metrics, algorithmic details, and full academic history.
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                    <span>PDF Format</span>
                    <span>•</span>
                    <span>~159 KB</span>
                    <span>•</span>
                    <span>Compliant with Google Hiring Guidelines</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={personalInfo.resumes.master}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                    title="Preview in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => handleDownload('master')}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-purple-500/20 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download Master
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ATS Summary tab */
            <div className="bg-dark-950 p-5 rounded-xl border border-white/10 space-y-4 text-xs text-slate-300 font-mono">
              <div className="border-b border-white/10 pb-3">
                <h4 className="text-sm font-bold text-slate-100 font-heading">
                  M M PRATEEK — SOFTWARE DEVELOPMENT ENGINEER
                </h4>
                <p className="text-slate-400">
                  Tumakuru / Bangalore, Karnataka | +91 7975151758 | mmprateek2004@gmail.com
                </p>
              </div>

              <div>
                <span className="text-cyan-400 font-bold block mb-1">
                  WORK EXPERIENCE: INVICTO LABS PVT LTD
                </span>
                <p className="text-slate-400">
                  SDE Intern — Backend & Automation (2026 – Present)
                </p>
                <ul className="list-disc list-inside space-y-0.5 mt-1 text-slate-300">
                  <li>Scaled backend property tax automation across 80+ county portals (TX, KS, IN, SD, IL, ND, VA).</li>
                  <li>Cut record extraction turnaround by 95%+ from 20 mins to &lt;30s via Node.js/Express & Puppeteer v24.</li>
                  <li>Integrated Google Gemini API for title defect reasoning, cutting review cycle by 60%.</li>
                </ul>
              </div>

              <div>
                <span className="text-amber-400 font-bold block mb-1">
                  HONORS & AWARDS
                </span>
                <p>🏆 Winner — Best Project Award (ISE), KSCST 49th Series (2025–26) out of 400+ finalist teams for Jnanetra.</p>
              </div>

              <div>
                <span className="text-purple-400 font-bold block mb-1">
                  EDUCATION
                </span>
                <p>Sri Siddhartha Institute of Technology (SSIT) — B.E. ISE (2022–2026) | CGPA: 8.15 / 10.0</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print ATS View
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-dark-950/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Files verified and ready for download</span>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
