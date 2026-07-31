<div align="center">
  <img src="public/profile_pic.png" alt="Sam Jacob Profile" width="150" style="border-radius: 50%; border: 4px solid #3b82f6;"/>

  # Sam Jacob | Data & AI Engineer Portfolio
  
  **A modern, professional portfolio showcasing expertise in Data Engineering, Business Intelligence, and AI Automation.**

  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

</div>

---

## 🎯 About The Project

This repository contains the source code for my personal portfolio website, built to highlight my experience connecting business requirements with technical implementation. The site features dynamic animations, a responsive design, and a fully customizable data architecture.

### ✨ Key Features
- **Dynamic Data Rendering**: All content is managed via centralized TypeScript files for easy updates.
- **Beautiful UI/UX**: Crafted with Tailwind CSS and Framer Motion for smooth, professional micro-interactions.
- **Dark/Light Mode**: Built-in theming support via `next-themes`.
- **Performance Optimized**: Leveraging Next.js App Router and optimized image rendering.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark mode by default)

---

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Editing Profile Data

All text content is stored in simple, easy-to-edit TypeScript data files located in the `src/data` directory:

- `src/data/profile.ts`: Edit Hero, About section, Contact details, and Recruiter summary.
- `src/data/roles.ts`: Edit Target Roles and skills fit.
- `src/data/experience.ts`: Edit work experience timeline.
- `src/data/projects.ts`: Edit featured projects.
- `src/data/skills.ts`: Edit grouped technical skills.
- `src/data/education.ts`: Edit education history and certifications.

Just open any of these files, change the text inside the quotes, and save. The website will update automatically!

---

## 📄 Adding CV PDFs

The website links to different versions of your CV. To make the download buttons work, place your PDF files in the `public/cv` directory with these exact names (or change the names in `src/components/CVDownloads.tsx`):

1. `public/cv/Sam_Jacob_Data_AI_Engineer.pdf`
2. `public/cv/Sam_Jacob_Machine_Learning_Engineer.pdf`
3. `public/cv/Sam_Jacob_Data_Analyst_BI.pdf`
4. `public/cv/Sam_Jacob_AI_Automation.pdf`

Note: You may need to create the `public/cv` folder first.

---

## 🌐 Deployment

### 1. Push to GitHub
1. Create a new repository on [GitHub](https://github.com).
2. Initialize and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### 2. Deploy on Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New** -> **Project**.
3. Import your new GitHub repository.
4. Leave all default settings as they are. Vercel automatically detects Next.js.
5. Click **Deploy**.

Within a minute, your portfolio will be live!

---

<div align="center">
  <i>Developed with ❤️ by Sam Jacob</i>
</div>
