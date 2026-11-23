# 🌌 M M Prateek — Premium Full-Stack Developer Portfolio

An award-winning, creative, interactive full-stack developer portfolio designed with high-end agency aesthetics, futuristic dark styling, interactive 3D WebGL visuals, an embedded retro-futuristic developer terminal, and a production-grade Node.js/Express backend.

---

## ⚡ Quick Start

### 1. Start the Backend API (Port 5000)
```bash
cd portfolio/server
npm install
npm run dev
```
> The API will start on `http://localhost:5000`. Health check endpoint: `http://localhost:5000/api/health`.
> MongoDB connects automatically if available, with a resilient persistent fallback system to ensure contact submissions are never lost.

### 2. Start the Frontend Application (Port 5173)
```bash
cd portfolio/client
npm install
npm run dev
```
> Open your browser at `http://localhost:5173`.

---

## 🚀 Key Features & Highlights

1. **Award-Winning Visual Identity**:
   - Dark futuristic aesthetic with deep blacks, electric blues, neon cyans, and violet gradients.
   - Designed in the spirit of top-tier Awwwards developer portfolios and Apple minimalism.
   - Subtle glowing ambient backdrops, glassmorphism cards, and interactive typography.

2. **Interactive 3D Three.js Hero Visual**:
   - High-performance WebGL 3D wireframe core with orbiting satellite particles and glowing energy node.
   - Real-time mouse tracking and smooth perspective interpolation.
   - Dynamic typewriter role rotation with live Indian Standard Time (IST) indicator.

3. **KSCST State Grand Champion Showcase**:
   - Dedicated spotlight for **Jnanetra** — Winner of the Best Project Award at the 49th Series KSCST State-Level Student Project Programme out of 400+ teams.
   - Real-time telemetry cards showing on-device latency (<45ms), YOLO11 Nano detection, and MiDaS monocular depth estimation.

4. **Interactive Invicto Labs Experience Timeline**:
   - Detailed systems breakdown of **Tax-cert-app** (automated property tax certificate platform across 80+ US county portals) and **SearchFix** (AI-assisted title defect reasoning via Google Gemini API).
   - Highlighting key metrics: 95%+ latency reduction, 99.4% extraction fidelity, and 60% faster review cycles.

5. **Embedded Developer DevShell CLI**:
   - Retro-futuristic command-line emulator (`prateek@dev-station:~$`).
   - Supports commands: `help`, `about`, `skills`, `projects`, `experience`, `awards`, `education`, `contact`, `neofetch`, `time`, `quote`, `matrix`, `clear`.
   - Up/Down arrow command history, quick command pills, and session clipboard copy.

6. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Instant fuzzy search across sections and actions.
   - Quick jump to any part of the site, toggle sounds, copy email, or open resume download center.

7. **Synthesized High-Tech Audio Engine**:
   - Built with the Web Audio API without needing external MP3/WAV files.
   - Subtle cyber click, hover, and success audio chimes with persistent mute toggle.

8. **Official Resume Download Center**:
   - Choice between **1-Page SDE Focused Resume** and **Master Engineering Dossier**.
   - Includes printable ATS-friendly text view.

9. **Secure Full-Stack Contact Pipeline**:
   - Client-side validation + backend input sanitization.
   - Rate-limiting (10 requests per 15 mins per IP) via Express middleware.
   - Dual-mode persistence: Mongoose MongoDB database + persistent JSON backup fallback.
   - Celebratory canvas confetti upon delivery.

---

## 🛠️ Technology Stack (Strictly MERN)

### Frontend
- **React.js (v19)** with **Vite**
- **Tailwind CSS (v3.4)** with custom futuristic dark theme
- **Three.js** for 3D WebGL interactive visuals
- **Lucide Icons**
- **Canvas Confetti** for award celebrations
- **Web Audio API** for interactive feedback

### Backend
- **Node.js (v22/v26)** & **Express.js**
- **MongoDB** & **Mongoose** (with local persistent fallback)
- **Helmet** for HTTP security headers
- **express-rate-limit** for DDoS/spam mitigation
- **Validator** for email and string sanitization
- **Morgan** for HTTP request telemetry

---

## 📂 Project Architecture

```
portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.svg               # Custom "MP." neon SVG favicon
│   │   └── resumes/
│   │       ├── M_M_Prateek_1Page_Resume.pdf
│   │       └── M_M_Prateek_Master_Resume.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   └── SocialIcons.jsx   # SVG GitHub & LinkedIn icons
│   │   │   ├── CommandMenu.jsx       # Ctrl+K modal palette
│   │   │   ├── CustomCursor.jsx      # Cyber cursor with smooth trailing
│   │   │   ├── FloatingBackToTop.jsx # Bottom-right return button
│   │   │   ├── Footer.jsx            # Dynamic year, philosophy, links
│   │   │   ├── HeroScene3D.jsx       # Three.js 3D interactive core
│   │   │   ├── LoadingScreen.jsx     # Initial animated entrance
│   │   │   ├── Navbar.jsx            # Glassmorphism navigation
│   │   │   ├── ProjectModal.jsx      # Architecture deep-dive modal
│   │   │   ├── ResumeModal.jsx       # 1-Page & Master resume downloads
│   │   │   └── ScrollProgress.jsx    # Top reading progress indicator
│   │   ├── data/
│   │   │   ├── achievementsData.js   # KSCST award, Gamethon, Techfest
│   │   │   ├── educationData.js      # SSIT, JSpiders, MES PU, Ave Maria
│   │   │   ├── experienceData.js     # Invicto Labs systems & metrics
│   │   │   ├── personalInfo.js       # Central single source of truth
│   │   │   ├── projectsData.js       # All 6 projects with details
│   │   │   ├── skillsData.js         # 6 technical arsenal categories
│   │   │   └── terminalCommands.js   # DevShell command handler
│   │   ├── sections/
│   │   │   ├── About.jsx             # Bento grid narrative
│   │   │   ├── Achievements.jsx      # State award & competitions
│   │   │   ├── Contact.jsx           # Form with API integration
│   │   │   ├── Education.jsx         # Academic timeline
│   │   │   ├── Experience.jsx        # Invicto Labs deep dive
│   │   │   ├── Hero.jsx              # Fullscreen visual intro
│   │   │   ├── Projects.jsx          # Jnanetra spotlight & bento grid
│   │   │   ├── Skills.jsx            # Technical arsenal & search
│   │   │   └── TerminalSection.jsx   # Interactive retro CLI
│   │   ├── services/
│   │   │   └── api.js                # API client with resilient fallback
│   │   ├── utils/
│   │   │   └── soundEffects.js       # Web Audio API synthesizer
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js                     # MongoDB connection with fallback
│   ├── controllers/
│   │   ├── contactController.js      # Ingestion, validation, stats
│   │   └── projectController.js      # Filtered projects provider
│   ├── data/
│   │   └── projectsData.js           # Server-side project repository
│   ├── middleware/
│   │   ├── errorHandler.js           # 404 & 500 JSON error handling
│   │   └── rateLimiter.js            # Spam mitigation
│   ├── models/
│   │   └── Contact.js                # Mongoose schema
│   ├── routes/
│   │   ├── contactRoutes.js          # POST /api/contact, GET /api/contact/stats
│   │   ├── healthRoutes.js           # GET /api/health
│   │   └── projectRoutes.js          # GET /api/projects
│   ├── utils/
│   │   └── storageFallback.js        # Local JSON persistent storage
│   ├── .env.example
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📡 REST API Documentation

### 1. Health Check
- **`GET /api/health`**
- Returns uptime, timestamp, server status, and database connection state.

### 2. Contact Ingestion
- **`POST /api/contact`**
- Rate limited: 10 requests / 15 minutes per IP.
- Payload:
  ```json
  {
    "name": "Jane Recruiter",
    "email": "jane@techcorp.com",
    "subject": "SDE-1 Opportunity at TechCorp",
    "message": "Hi Prateek, we loved your work on Jnanetra and Invicto Labs..."
  }
  ```
- Responses:
  - `201 Created`: Message persisted successfully.
  - `400 Bad Request`: Validation failure (short name, invalid email, etc.).
  - `429 Too Many Requests`: Rate limit exceeded.

### 3. Projects API
- **`GET /api/projects`**
- Query Parameters:
  - `?category=AI%20%26%20Computer%20Vision`
  - `?featured=true`

---

## 🎨 Personal Details & Configuration

To update any personal information, simply edit `portfolio/client/src/data/personalInfo.js`:
- Email, phone, location
- Headline and bios
- Rotating titles
- Resume paths

All components read reactively from this centralized data file.

---

## ⚖️ License
Created for **M M Prateek**. All rights reserved.
