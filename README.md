# Impresos Diego - Lead Generation Website

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite)](https://vitejs.dev)

A modern, responsive lead generation website for **Impresos Diego**, a printing company in Puebla, Mexico with over 35 years of experience. Built with React, Tailwind CSS, and deployed on Vercel.

## 🌟 Features

### Core Functionality
- **Lead Generation Form** - Contact form with file uploads, stored in PostgreSQL database
- **Email Notifications** - Automated emails via Resend API when leads are submitted
- **Quote Requests** - Customers can request printing quotes with project details

### User Experience
- **Dark Mode** - Toggle with system preference detection and localStorage persistence
- **Responsive Design** - Mobile-first approach, works on all device sizes
- **Accessibility Menu** - Visual alerts, large text, and reduced motion options
- **Smooth Animations** - AOS (Animate on Scroll) library integration

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home page with hero section, services overview, and acabados |
| `/servicios` | Detailed printing services information |
| `/nosotros` | About the company and team |
| `/pedido` | Lead generation / quote request form |
| `/faq` | Frequently asked questions |
| `/privacidad` | Privacy policy |
| `/terminos` | Terms and conditions |

---

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Animate.css & AOS** - Animation libraries

### Backend (Serverless)
- **Vercel Functions** - Serverless API endpoints
- **Neon PostgreSQL** - Serverless database for leads
- **Resend** - Transactional email API

### Development
- **ESLint** - Code linting
- **PostCSS/Autoprefixer** - CSS processing

---

## ⚠️ Pending Client Requirements

> [!IMPORTANT]
> The following items are required from the client before the project is fully operational:

| Item | Description | Status |
|------|-------------|--------|
| **Client Email** | Email address for receiving lead notifications via Resend | ❌ Pending |
| **GA4 Measurement ID** | Google Analytics 4 tracking ID (format: `G-XXXXXXXXXX`) | ❌ Pending |
| **Valid WhatsApp Number** | Current number is not working - need verified business number | ❌ Pending |
| **Custom Domain** | Purchase and configure a custom domain for the website | ❌ Pending |

### Where to Update

- **Client Email**: Update in `api/submit-lead.js` (Resend `to` field)
- **GA4 ID**: Add to `.env` as `VITE_GA_MEASUREMENT_ID` and Vercel environment variables
- **WhatsApp**: Update in `src/components/WhatsAppButton.jsx` and `src/components/Footer.jsx`
- **Domain**: Configure in Vercel project settings → Domains

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/impresos-diego.git
cd impresos-diego

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database - Neon PostgreSQL
DATABASE_URL=postgresql://user:password@host/database?sslmode=require

# Email - Resend API
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Optional: Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Development

```bash
# Start development server (Vite)
npm run dev

# Start with Vercel functions locally
npx vercel dev
```

The app will be available at `http://localhost:5173` (Vite) or `http://localhost:3000` (Vercel dev).

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
impresos-diego/
├── api/                      # Vercel serverless functions
│   └── submit-lead.js        # Lead submission endpoint
├── database/                 # Database schema
│   └── schema.sql            # PostgreSQL schema for leads
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── routes/           # Page components
│   │   │   ├── index.jsx     # Home page
│   │   │   ├── servicios.jsx # Services page
│   │   │   ├── nosotros.jsx  # About page
│   │   │   ├── pedido.jsx    # Quote form page
│   │   │   ├── faq.jsx       # FAQ page
│   │   │   ├── privacidad.jsx
│   │   │   └── terminos.jsx
│   │   ├── Header.jsx        # Navigation with dark mode toggle
│   │   ├── Footer.jsx
│   │   ├── MobileMenu.jsx    # Mobile navigation portal
│   │   ├── AccessibilityMenu.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── Acabados.jsx      # Finishing services section
│   │   └── IntroPage.jsx     # Hero section
│   ├── images/               # Image assets
│   ├── styles/
│   │   └── index.css         # Global styles + dark mode
│   ├── App.jsx               # Root component with routing
│   └── main.jsx              # React entry point
├── index.html                # HTML template with SEO meta tags
├── tailwind.config.js        # Tailwind configuration + dark mode
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
└── package.json
```

---

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `darkMode: 'class'` strategy:

- **Toggle Button** - Located in the header (moon/sun icons)
- **System Detection** - Automatically detects `prefers-color-scheme: dark`
- **Persistence** - Saves preference to `localStorage` under key `theme`
- **No Flash** - Inline script in `<head>` prevents theme flash on load

### How It Works
1. On page load, a script in `index.html` checks localStorage and system preferences
2. The `dark` class is added to `<html>` before React renders
3. CSS overrides in `src/styles/index.css` handle all dark mode styling
4. The Header component syncs state with the DOM and localStorage

---

## ♿ Accessibility

The site includes an accessibility menu (bottom-left button) with:

- **Visual Alerts** - Visual notifications instead of sounds (for deaf users)
- **Large Text** - Increases font sizes
- **Reduce Motion** - Disables animations

---

## 📧 Lead Submission API

### Endpoint
`POST /api/submit-lead`

### Request Body
```json
{
  "nombre": "string (required)",
  "email": "string (required)",
  "telefono": "string (required)",
  "empresa": "string (optional)",
  "servicio": "string (required)",
  "cantidad": "string (required)",
  "descripcion": "string (required)",
  "archivo": "string (optional, base64)"
}
```

### Response
```json
{
  "success": true,
  "message": "Lead submitted successfully",
  "leadId": 123
}
```

---

## 🚢 Deployment

The project is configured for **Vercel** deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Required Environment Variables on Vercel
- `DATABASE_URL` - Neon PostgreSQL connection string
- `RESEND_API_KEY` - Resend API key for emails

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npx vercel dev` | Run with Vercel functions locally |

---

## 🔧 Configuration Files

- **`tailwind.config.js`** - Tailwind CSS with dark mode and custom theme
- **`vite.config.js`** - Vite build configuration
- **`vercel.json`** - Vercel deployment settings
- **`postcss.config.js`** - PostCSS with Tailwind and Autoprefixer
- **`.eslintrc.cjs`** - ESLint rules for React

---

## 📄 License

This project is proprietary software for Impresos Diego.

---

## 👥 Contact

**Impresos Diego**  
📍 Puebla, México  
📞 222 248 8993  
💬 [WhatsApp](https://wa.me/522222488993)

---

Built with ❤️ for Impresos Diego