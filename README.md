# Muhammed Fahim - AI Engineer Portfolio

A modern, responsive React portfolio website showcasing AI engineering expertise, projects, and professional experience.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Interactive Chat Widget**: AI-powered assistant for answering questions about Fahim
- **Particle Background**: Dynamic particle animation using particles.js
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Contact Form**: Integrated with Formspree for form submissions
- **SEO Optimized**: Meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables, Flexbox, Grid
- **Animations**: CSS Animations, Framer Motion
- **Particles**: particles.js
- **Icons**: Font Awesome 6
- **Form Handling**: Formspree integration

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Education.js    # Education details
│   ├── Experience.js   # Work experience
│   ├── Projects.js     # Featured projects
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer component
│   ├── ChatWidget.js   # AI chat assistant
│   └── ParticleBackground.js # Animated background
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # React entry point
└── index.css           # Base styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd muhammed-fahim-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

### Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Customization

### Updating Personal Information

1. **Personal Details**: Edit the content in each component file
2. **Skills**: Modify the `skills` array in `src/components/Skills.js`
3. **Projects**: Update the `projects` array in `src/components/Projects.js`
4. **Experience**: Edit the `experiences` array in `src/components/Experience.js`

### Styling

- **Colors**: Update CSS variables in `src/index.css`
- **Typography**: Modify font families and sizes in component CSS files
- **Layout**: Adjust grid and flexbox properties in component CSS files

### Chat Widget

The AI chat widget uses a simple knowledge base. To enhance it:

1. **Knowledge Base**: Update the `knowledgeBase` object in `src/components/ChatWidget.js`
2. **RAG Logic**: Modify the `findRelevantInfo` function for better responses
3. **Integration**: Connect to external AI services for more sophisticated responses

## Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure form handling with Formspree

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy on push

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px, 992px, and 1200px
- Touch-friendly interface elements

### Performance Optimizations
- Lazy loading for images
- Optimized bundle size
- Efficient re-renders with React hooks

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color scheme

### SEO Features
- Meta tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Muhammed Fahim**
- Email: fahimunais57@gmail.com
- Phone: +91 85477 64880
- Location: Maniyur, Kozhikode, Kerala, India

## Acknowledgments

- Font Awesome for icons
- particles.js for background animation
- React team for the amazing framework
- Formspree for form handling
