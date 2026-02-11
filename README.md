# NewProdata - Company Website

A modern, responsive React.js website for NewProdata, an IT services and solutions provider specializing in data warehousing, analytics, and full-stack development.

## Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Interactive Components**: Dynamic filtering, forms, and interactive elements
- **SEO Optimized**: Meta tags and structured data for search engines

## Pages

- **Home**: Hero section with company tagline, services highlights, and call-to-action
- **About Us**: Company introduction, values, mission, and vision
- **Services**: Detailed service sections with features and benefits
- **Skills & Tech Stack**: Interactive grid showcasing technical expertise
- **Projects**: Portfolio with filtering by technology and category
- **Contact**: Contact form and company information

## Technologies Used

- **React 19.1.1**: Modern React with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Icons**: Additional icon components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd newprodata-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Skills.js       # Skills page
│   ├── Projects.js     # Projects page
│   └── Contact.js      # Contact page
├── data/               # Data files
│   ├── services.js     # Services data
│   ├── skills.js       # Skills data
│   └── projects.js     # Projects data
├── App.js              # Main app component
└── index.css           # Global styles
```

## Customization

### Adding New Services

Edit `src/data/services.js` to add or modify services:

```javascript
{
  id: 6,
  title: "New Service",
  description: "Service description",
  icon: "IconName",
  features: ["Feature 1", "Feature 2"]
}
```

### Adding New Projects

Edit `src/data/projects.js` to add or modify projects:

```javascript
{
  id: 7,
  title: "New Project",
  description: "Project description",
  technologies: ["React", "Node.js"],
  category: "Full Stack Development",
  // ... other properties
}
```

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `src/index.css` or by extending the Tailwind configuration in `tailwind.config.js`.

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure redirects for client-side routing

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with zero configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software owned by NewProdata.

## Contact

For questions or support, please contact us at info@newprodata.com