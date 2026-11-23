import { personalInfo } from './personalInfo';
import { skillCategories } from './skillsData';
import { projectsData } from './projectsData';
import { achievementsData } from './achievementsData';

export const handleTerminalCommand = (rawCommand) => {
  const cmd = rawCommand.trim().toLowerCase();
  const args = cmd.split(' ').slice(1);
  const baseCmd = cmd.split(' ')[0];

  switch (baseCmd) {
    case 'help':
      return [
        { type: 'info', text: '⚡ Antigravity DevShell v2.4 — Available Commands:' },
        { type: 'success', text: '  about        → View biographical summary and background' },
        { type: 'success', text: '  skills       → Display technical skills matrix' },
        { type: 'success', text: '  projects     → List key software & AI projects' },
        { type: 'success', text: '  experience   → Show professional experience at Invicto Labs' },
        { type: 'success', text: '  awards       → Display state championships & honors' },
        { type: 'success', text: '  education    → View academic degrees and certifications' },
        { type: 'success', text: '  contact      → View direct contact channels' },
        { type: 'success', text: '  neofetch     → Display system diagnostics and developer specs' },
        { type: 'success', text: '  time         → Check live Indian Standard Time (IST)' },
        { type: 'success', text: '  github       → Open GitHub profile in browser' },
        { type: 'success', text: '  quote        → Inspiring engineering philosophy' },
        { type: 'success', text: '  sudo         → Try elevated developer privileges' },
        { type: 'success', text: '  clear        → Clear the terminal screen' },
      ];

    case 'about':
      return [
        { type: 'header', text: `👤 ${personalInfo.name} — ${personalInfo.role}` },
        { type: 'text', text: `📍 Location: ${personalInfo.location.currentHub}` },
        { type: 'text', text: `🎓 Education: ${personalInfo.education.degree}` },
        { type: 'text', text: `🏛️ College: ${personalInfo.education.institution}` },
        { type: 'text', text: `💼 Current Role: ${personalInfo.currentExperience.role} at ${personalInfo.currentExperience.company}` },
        { type: 'muted', text: personalInfo.shortBio },
      ];

    case 'skills':
      const lines = [{ type: 'header', text: '🛠️ TECHNICAL SKILLS MATRIX' }];
      skillCategories.forEach(cat => {
        lines.push({ type: 'warning', text: `[${cat.title}]` });
        lines.push({
          type: 'text',
          text: '  ' + cat.skills.map(s => s.name).join(' • '),
        });
      });
      return lines;

    case 'projects':
      return [
        { type: 'header', text: '🚀 HIGHLIGHTED SOFTWARE PROJECTS' },
        ...projectsData.map(p => ({
          type: 'text',
          text: `• [${p.category}] ${p.title} ${p.award ? '🏆 (Award Winner)' : ''}\n  Stack: ${p.technologies.slice(0, 5).join(', ')}`,
        })),
        { type: 'info', text: 'Tip: Scroll down to the Projects section or press Ctrl+K to inspect architecture details.' },
      ];

    case 'experience':
      return [
        { type: 'header', text: '💼 PROFESSIONAL EXPERIENCE' },
        { type: 'success', text: 'Invicto Labs | Bangalore, Karnataka' },
        { type: 'text', text: 'Role: IT Intern — Backend & Automation (2026 – Present)' },
        { type: 'text', text: 'Key Systems:' },
        { type: 'text', text: '  1. Tax-cert-app: Scaled property tax automation across 80+ portals in 32 US states; cut turnaround by 95%+.' },
        { type: 'text', text: '  2. SearchFix: Browser extension + Google Gemini API for title defect reasoning & QC.' },
      ];

    case 'awards':
      return [
        { type: 'header', text: '🏆 HONORS & RECOGNITION' },
        ...achievementsData.map(a => ({
          type: 'warning',
          text: `• ${a.title} (${a.year})\n  ${a.highlight}`,
        })),
      ];

    case 'education':
      return [
        { type: 'header', text: '🎓 ACADEMIC JOURNEY' },
        { type: 'text', text: `• Sri Siddhartha Institute of Technology (SSIT), Tumakuru` },
        { type: 'text', text: `  B.E. in Information Science and Engineering (2022–2026) | GPA: 8.15 / 10.0` },
        { type: 'text', text: `• M.E.S PU College, Sirsi | PCMB Class XII (87.0% Distinction)` },
        { type: 'text', text: `• Ave Maria High School, Sirsi | SSLC Class X (High Distinction)` },
      ];

    case 'contact':
      return [
        { type: 'header', text: '📬 CONTACT CHANNELS' },
        { type: 'text', text: `• Email:    ${personalInfo.social.email}` },
        { type: 'text', text: `• GitHub:   ${personalInfo.social.github}` },
        { type: 'text', text: `• LinkedIn: ${personalInfo.social.linkedin}` },
        { type: 'text', text: `• Phone:    ${personalInfo.social.phone}` },
        { type: 'info', text: 'Status: Open to Opportunities & Collaborative Engineering Roles.' },
      ];

    case 'time':
      const istTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date());
      return [
        { type: 'info', text: `🕒 Indian Standard Time (IST): ${istTime}` },
        { type: 'muted', text: `Coordinates: Karnataka, India (GMT+5:30)` },
      ];

    case 'neofetch':
      return [
        { type: 'header', text: '       _       MP@dev-station' },
        { type: 'header', text: '     /   \\     --------------' },
        { type: 'header', text: '    / /_\\ \\    OS: Prateek-OS (React 19 + Node 26 + Vite)' },
        { type: 'header', text: '   / _____ \\   Host: Full-Stack Developer Engine' },
        { type: 'header', text: '  /_/     \\_\\  Kernel: MERN-Architecture-v1.0' },
        { type: 'text', text: `  Uptime: Engineering Since 2022` },
        { type: 'text', text: `  Shell: Antigravity-Zsh / PowerShell` },
        { type: 'text', text: `  Theme: Dark Futuristic Cyber` },
        { type: 'text', text: `  CPU: Java / JavaScript / Python / Kotlin` },
        { type: 'text', text: `  GPU: YOLO11 Nano + MiDaS Depth Engine` },
        { type: 'text', text: `  Memory: 8.15 CGPA / 99.4% Extraction Fidelity` },
      ];

    case 'quote':
      const quotes = [
        '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
        '"First, solve the problem. Then, write the code." — John Johnson',
        '"Building, learning, and improving a little every single day." — M M Prateek',
        '"Make it work, make it right, make it fast." — Kent Beck',
      ];
      return [{ type: 'info', text: quotes[Math.floor(Math.random() * quotes.length)] }];

    case 'sudo':
      return [
        { type: 'error', text: '🔒 Permission Denied: You do not need root to admire good software architecture.' },
        { type: 'muted', text: 'Try "help" to see what actions are authorized.' },
      ];

    case 'github':
      window.open(personalInfo.social.github, '_blank', 'noopener,noreferrer');
      return [{ type: 'success', text: `Opening ${personalInfo.social.github} in a new tab...` }];

    case 'matrix':
      return [
        { type: 'success', text: '01001010 01101110 01100001 01101110 01100101 01110100 01110010 01100001' },
        { type: 'success', text: 'Wake up, Neo... The matrix of automation has you.' },
      ];

    default:
      return [
        { type: 'error', text: `Command not found: "${cmd}". Type "help" for a list of available commands.` },
      ];
  }
};
