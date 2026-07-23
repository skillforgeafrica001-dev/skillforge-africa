# SkillForge Africa - Professional Digital Skills Learning Platform

Learn Skills. Build Income. Change Your Future.

## Project Overview

SkillForge Africa is a comprehensive digital skills learning platform designed to empower African professionals and entrepreneurs. The platform provides structured learning paths, hands-on projects, and income-generating opportunities.

## Key Features

- **Structured Learning Paths**: Curated courses in digital marketing, web development, data analysis, and more
- **Interactive Projects**: Real-world projects to build practical skills
- **Income Opportunities**: Connect learners with freelance opportunities and businesses
- **Community**: Peer support, mentorship, and networking
- **Progress Tracking**: Detailed analytics and skill certification
- **Mobile Responsive**: Works seamlessly on all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with bcryptjs
- **Email**: Nodemailer with Gmail SMTP
- **File Handling**: Multer, Sharp
- **State Management**: Zustand
- **UI Components**: Framer Motion, React Icons, React Hot Toast
- **Charts**: Recharts
- **Utilities**: QR Code, HTML2Canvas, jsPDF

## Project Structure

```
skillforge-africa/
├── pages/                 # Next.js pages
├── components/           # React components
├── lib/                  # Utility functions
├── prisma/              # Database schema
├── public/              # Static assets
├── styles/              # Global styles
└── api/                 # API routes
```

## Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL database
- Gmail account for email service

### Installation

1. Clone the repository:
```bash
git clone https://github.com/skillforgeafrica001-dev/skillforge-africa.git
cd skillforge-africa
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` from `.env.example`:
```bash
cp .env.example .env.local
```

4. Update environment variables with your credentials

5. Set up the database:
```bash
npm run prisma:migrate
npm run prisma:seed
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:seed` - Seed database with initial data

## Environment Variables

See `.env.example` for all required environment variables including:
- Database connection
- JWT secret
- Email configuration
- Admin credentials
- Payment settings

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary. All rights reserved © 2024 SkillForge Africa.

## Contact

- **Email**: skillforgeafrica001@gmail.com
- **WhatsApp**: +234 810 2610 140
- **Telegram**: [@skillforgeafrica](https://t.me/skillforgeafrica)

## Support

For support, reach out to our team through the contact channels above.

---

**Made with ❤️ in Africa for Africa**