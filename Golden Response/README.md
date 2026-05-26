# AI Models Showcase

A Next.js web application showcasing modern AI foundation models, built by Harshit Kumar.

## Features

- Animated model cards grid with scroll-triggered reveal
- Chronological timeline with alternating layout
- Contact form modal with validation and email notifications
- Rate-limited API endpoint with input sanitization

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**

   Edit `.env.local` with your SMTP credentials:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   RECEIVER_EMAIL=your-notifications@domain.com
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Nodemailer
- Lucide React
