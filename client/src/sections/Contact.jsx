import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';
import { sendContactMessage } from '../services/api';
import { playClick, playSuccess } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const validate = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      return 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return 'Please write a message with at least 10 characters.';
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status.type === 'error') {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();

    const validationError = validate();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await sendContactMessage(formData);
      playSuccess();

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#8B5CF6', '#10B981'],
        });
      } catch (err) {
        // ignore
      }

      setStatus({
        type: 'success',
        message: response.message || 'Your message has been sent successfully! I will get back to you shortly.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to deliver message. Please try again or email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-950/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Together</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Have an interesting opportunity, a project idea, or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto text-left">
          
          {/* Left Column: Direct Channels & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl space-y-4">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether you're recruiting for SDE-1, backend systems, or looking for an innovative engineering collaborator, my inbox is open.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email Channel */}
                <a
                  href={`mailto:${personalInfo.social.email}`}
                  onClick={playClick}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/30 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Email Address</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                      {personalInfo.social.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-blue-500/30 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">LinkedIn Profile</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-300">
                      linkedin.com/in/mm-prateek
                    </span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-purple-500/30 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">GitHub Repositories</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-purple-300">
                      github.com/mmprateek1
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Operating Region</span>
                    <span className="text-xs font-semibold text-slate-200">
                      {personalInfo.location.currentHub}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Status Trust Badge */}
            <div className="p-5 rounded-3xl bg-dark-900/80 border border-emerald-500/20 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Actively Interviewing:</strong> Open for Full-Time Software Engineering & Backend opportunities.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50">
              
              <h3 className="font-heading font-bold text-xl text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-sans">
                Fill out the form below; submissions are routed directly to my secure database and verified endpoint.
              </p>

              {/* Status Banner */}
              {status.type && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-xs flex items-start gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      required
                      className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Subject Line <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    required
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project requirements, or what you'd like to collaborate on..."
                    required
                    className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                  🔒 Handled with end-to-end input sanitization and rate-limiting.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
