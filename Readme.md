# Product Hunt Clone

A modern, collaborative product discovery platform built with Next.js, React, Tailwind CSS, and [Velt](https://velt.dev). This project demonstrates real-time commenting, multi-user collaboration, and modern web application development practices.

![Product Hunt Clone](https://img.shields.io/badge/Next.js-13.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwind-css)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Velt Integration](#velt-integration)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This is a full-featured Product Hunt clone that showcases:

- **Product Discovery**: Browse and explore innovative products with detailed information
- **Real-Time Collaboration**: Engage with live comments, user presence, and notifications powered by Velt
- **Modern UI/UX**: Beautiful, responsive design with dark/light theme support
- **Multi-User Support**: Switch between user accounts to test collaboration features
- **Product Management**: View product details, images, makers, reviews, and similar products

For detailed product requirements and specifications, see [PRD.md](./PRD.md).

---

## ✨ Features

### Core Features

- 🧑‍🤝‍🧑 **Multi-User Support**: Switch between predefined users with avatars and profiles
- 👥 **Live User Presence**: See who's currently viewing the same product in real-time
- 💬 **Real-Time Comments**: Add and view collaborative comments using Velt's inline commenting system
- 🎨 **Dark/Light Theme**: Seamless theme switching with persistent preferences
- 🔔 **Notifications**: In-app notifications powered by Velt for collaboration events
- 🗳️ **Voting System**: Upvote products to show support and help them rank higher
- 📱 **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop
- 🔍 **Search Functionality**: Quick product search with keyboard shortcuts (⌘ + K)
- 🏷️ **Product Categories**: Browse products by categories and tags
- 📊 **Product Rankings**: Daily product rankings and launch status

### UI Components

- 🧩 **Reusable Components**: Built with Radix UI primitives for accessibility
- 🎭 **Component Library**: Comprehensive set of UI components (buttons, cards, badges, avatars, etc.)
- 🎨 **Custom Styling**: Tailwind CSS with custom design system
- ♿ **Accessibility**: WCAG-compliant components with keyboard navigation support

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 13.5.1](https://nextjs.org/)** - React framework with App Router
- **[React 18.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.2.2](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 3.3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Collaboration & Real-Time
- **[Velt SDK v4.5.2-beta.12](https://velt.dev/)** - Real-time collaboration platform
  - User presence and cursor tracking
  - Inline comments and annotations
  - Real-time notifications
  - Comments sidebar

### State Management & Utilities
- **[Zustand 5.0.8](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Class name utilities

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16+ recommended, v18+ preferred)
- **npm** (v8+ recommended) or **pnpm** (recommended)
- **Git** for version control
- **Velt API Key** - Get one from [Velt Dashboard](https://app.velt.dev)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Studio1HQ/product-hunt-velt.git
cd product-hunt-velt
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm (recommended):
```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_VELT_ID=your_velt_api_key_here
```

> **Note**: You can get your API key from the [Velt Dashboard](https://app.velt.dev). If you have a `sample.env` file, use it as a reference.

### 4. Run the Development Server

```bash
npm run dev
# or
pnpm run dev
```

### 5. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
product-hunt-clone/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home/product detail page
├── components/              # React components
│   ├── (general)/          # Feature-specific components
│   │   ├── comment-section.tsx      # Comment system component
│   │   ├── product-hero.tsx         # Product hero section
│   │   ├── product-sidebar.tsx      # Product sidebar with actions
│   │   ├── product-tabs.tsx         # Product tabs (Overview, Reviews, etc.)
│   │   └── sidebar.tsx              # General sidebar component
│   ├── ui/                  # Reusable UI components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   └── toast.tsx
│   ├── header.tsx           # Main navigation header
│   └── similar-products.tsx # Similar products recommendations
├── helper/                  # Helper functions and data
│   └── userdb.ts           # User database/store (Zustand)
├── hooks/                   # Custom React hooks
│   ├── theme-toggle.tsx    # Theme management hook
│   └── use-toast.ts        # Toast notification hook
├── lib/                     # Utility functions
│   └── utils.ts            # Common utilities (cn, etc.)
├── PRD.md                   # Product Requirements Document
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

---

## 🎨 Key Features

### Product Detail Pages

Each product page includes:

- **Product Hero**: Logo, name, tagline, description, launch status
- **Product Gallery**: Image carousel with navigation
- **Product Tabs**: Overview, Reviews, Alternatives, Team, Awards
- **Voting System**: Upvote button with vote count
- **Product Sidebar**: Company info, social links, launch history
- **Similar Products**: Recommendations based on categories

### Real-Time Collaboration

- **Live Comments**: Inline commenting on product sections
- **User Presence**: See active users viewing the same product
- **Notifications**: Real-time notifications for collaboration events
- **Comments Sidebar**: Manage and view all comments in one place

### User Experience

- **Theme Toggle**: Switch between dark and light modes
- **User Switching**: Test collaboration with multiple user accounts
- **Responsive Design**: Optimized for all screen sizes
- **Keyboard Shortcuts**: Quick search with ⌘ + K (Mac) or Ctrl + K (Windows)

---

## 🔌 Velt Integration

This project uses **Velt SDK v4.5.2-beta.12** for real-time collaboration features.

### Velt Components Used

- **`VeltProvider`**: Main provider component wrapping the application
- **`VeltInlineCommentsSection`**: Inline commenting system for product sections
- **`VeltCommentsSidebar`**: Sidebar for managing all comments
- **`VeltNotificationsTool`**: Notification bell and notification system
- **`VeltPresence`**: Display active users with avatars
- **`VeltSidebarButton`**: Button to toggle comments sidebar

### Configuration

The application uses the following Velt configurations:

- **Document ID**: `"product-hunt-velt"`
- **User Authentication**: Predefined users with avatars and profiles
- **Dark Mode**: Full support for dark/light themes
- **Custom Styling**: Comment bubbles styled to match the design system

### Setting Up Velt

1. Sign up at [Velt Dashboard](https://app.velt.dev)
2. Create a new project
3. Copy your API key
4. Add it to `.env.local` as `NEXT_PUBLIC_VELT_ID`

---

## 💻 Development

### Available Scripts

```bash
# Development server
npm run dev
# or
pnpm run dev

# Production build
npm run build
# or
pnpm run build

# Start production server
npm run start
# or
pnpm run start

# Lint code
npm run lint
# or
pnpm run lint
```

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier (if configured) for code formatting
- Component-based architecture
- Custom hooks for reusable logic

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Velt API Key Issues

**Problem**: Collaboration features not working

**Solutions**:
- Ensure your API key is correctly set in `.env.local`
- Verify the key is active in your [Velt Dashboard](https://app.velt.dev)
- Restart the development server after adding the key
- Check that the environment variable name is exactly `NEXT_PUBLIC_VELT_ID`

#### 2. Collaboration Features Not Working

**Problem**: Comments, presence, or notifications not appearing

**Solutions**:
- Check browser console for errors
- Verify network connectivity
- Ensure you're using a supported browser (Chrome, Firefox, Safari, Edge)
- Check that Velt SDK is properly initialized
- Verify user identification is working (check console logs)

#### 3. Build Issues

**Problem**: Build fails or dependencies errors

**Solutions**:
- Clear `.next` directory: `rm -rf .next`
- Remove `node_modules`: `rm -rf node_modules`
- Clear package manager cache:
  - npm: `npm cache clean --force`
  - pnpm: `pnpm store prune`
- Reinstall dependencies: `npm install` or `pnpm install`
- Check Node.js version compatibility (v16+ required)

#### 4. Theme Not Persisting

**Problem**: Theme resets on page refresh

**Solutions**:
- Check browser localStorage permissions
- Verify theme hook implementation
- Clear browser cache and localStorage

#### 5. Images Not Loading

**Problem**: Product images or avatars not displaying

**Solutions**:
- Check image URLs in mock data
- Verify Next.js Image component configuration
- Check network requests in browser DevTools
- Ensure external image domains are allowed in `next.config.js`

---

## 📚 Documentation

### Project Documentation

- **[PRD.md](./PRD.md)** - Complete Product Requirements Document
- **Component Documentation** - Inline code comments
- **Type Definitions** - TypeScript interfaces and types

### External Resources

#### Velt Resources
- [Velt Documentation](https://docs.velt.dev/getting-started/introduction)
- [Velt API Reference](https://docs.velt.dev/api-reference)
- [Velt Dashboard](https://app.velt.dev)
- [Velt GitHub](https://github.com/veltdev)

#### Framework & Library Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/getting-started/introduction)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly
- For major changes, please open an issue first to discuss

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Product Hunt](https://www.producthunt.com/) for inspiration
- [Velt](https://velt.dev/) for the collaboration SDK
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Next.js](https://nextjs.org/) team for the amazing framework

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [Documentation](#documentation)
3. Open an issue on GitHub
4. Check existing issues for solutions

---

**Built with ❤️ using Next.js, React, and Velt**
