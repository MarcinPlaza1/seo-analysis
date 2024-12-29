# SEO Master

## Description
SEO Master is a modern web application built using Next.js 15. The application is designed for website SEO analysis and optimization, offering advanced tools to improve search engine visibility.

## Technologies
- Next.js 15.1.2
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion

## System Requirements
- Node.js 18.0 or newer
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/twoje-repo/seo-master.git
cd seo-master
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```
Then fill in the `.env.local` file with appropriate values.

## Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`

### Production
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure
```
seo-master/
├── app/              # Main Next.js application directory
├── components/       # React components
├── lib/             # Libraries and utilities
├── public/          # Static files
├── styles/          # CSS/Tailwind styles
└── types/           # TypeScript definitions
```

## Features
- Website SEO analysis
- SEO report generation
- Optimization suggestions
- Progress tracking
- Data export to various formats

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a Pull Request

## Authors
- Marcin Plaza - Lead Developer

## Support
If you encounter any problems or have questions, please create an issue in the repository or contact the support team.
