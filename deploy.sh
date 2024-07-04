#!/bin/bash

# Build the project
npm run build

# Move to the build directory and initialize a new git repository
cd build
git init

# Add and commit the build files
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to the main branch of your GitHub repository
git push --force git@github.com:chanh-t/your-repo-name.git main:main

# Return to the project root
cd ..