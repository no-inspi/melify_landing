#!/bin/bash

# Remove potentially corrupted node_modules
rm -rf node_modules

# Install dependencies
npm install

# Build the Next.js app
npm run build

# Start the application
npm run start