#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "You can now deploy the 'build' folder to your hosting service."
    echo ""
    echo "For Netlify:"
    echo "1. Drag and drop the 'build' folder to Netlify"
    echo "2. Or connect your GitHub repo for automatic deployments"
    echo ""
    echo "For Vercel:"
    echo "1. Run 'npx vercel' in the project directory"
    echo "2. Or connect your GitHub repo to Vercel"
    echo ""
    echo "For GitHub Pages:"
    echo "1. Run 'npm run deploy' (if configured)"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi
