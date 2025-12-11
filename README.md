# FocusFlow

A modern web application for organizing interests, skills, and learning paths. Built with Next.js, TypeScript, Tailwind CSS, and Zustand.

## Features

- 🔐 **Mock Authentication System** - Sign up and login with email/password
- 📊 **Interest Tracking** - Organize and track your learning interests
- 📈 **Progress Tracking** - Visual progress indicators for each interest
- 🎨 **Modern UI** - Clean, neumorphic design with soft pastel colors
- 📱 **Fully Responsive** - Mobile-first design with adaptive navigation
- ⚡ **Smooth Animations** - Framer Motion powered transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── dashboard/         # Dashboard page
│   └── auth/              # Authentication pages
│       ├── login/
│       └── signup/
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── interest/         # Interest-specific components
├── store/                # Zustand stores
│   ├── userStore.ts
│   └── interestsStore.ts
├── lib/                  # Utilities and helpers
│   ├── api/mock/         # Mock API functions
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
└── styles/               # Global styles
    ├── globals.css
    └── theme.css
```

## Mock Authentication

The app uses a mock authentication system for demonstration purposes. You can:
- Sign up with any email/password combination
- Sign in with any credentials (or use `demo@focusflow.com`)
- State persists in localStorage during the session

## Backend Integration

The codebase is structured to easily integrate with:
- **Firebase** - Replace `lib/api/mock/auth.ts` and `lib/api/mock/interests.ts`
- **Supabase** - Add Supabase client and update API functions
- **Vercel KV** - Add KV client for data persistence

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

The app uses a custom theme with:
- **Colors**: Soft, pastel-leaning palette
- **Shadows**: Neumorphic soft shadows
- **Typography**: Inter font family
- **Spacing**: Consistent spacing system
- **Animations**: Smooth, subtle transitions

## Next Steps

- [ ] Add real backend integration (Firebase/Supabase)
- [ ] Implement interest detail modal
- [ ] Add interest editing functionality
- [ ] Add categories and filtering
- [ ] Add search functionality
- [ ] Implement learning path visualization
- [ ] Add user profile page

## License

MIT

