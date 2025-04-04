# REMWaste Skip Hire Application

A React application for skip hire management with a focus on clean architecture and maintainable code.

## Project Overview

- **Type**: React Single Page Application
- **Purpose**: Skip hire selection and booking system

## Technical Stack

- React
- Context API for state management
- SASS for styling

## Project Structure

```
REMWaste/
├── public/
│   └── images/        # Static images
├── src/
│   ├── components/    # React components
│   ├── context/       # React Context providers
│   ├── styles/        # SASS stylesheets
│   ├── App.js         # Root component
│   └── index.js       # Entry point
```

## Architecture Decisions

### 1. State Management
- Using React Context API over Redux for simplicity
- Centralized skip selection state
- Shared state between components without prop drilling

### 2. Styling Approach
- SASS with a focus on maintainability
- Variables for consistent theming

## Setup and Development

1. Install dependencies:
```
npm install
```

2. Start development server:
```
npm start
```
## Key Features

- Skip size selection
- Real-time price updates
- Progress tracking navigation
- Responsive design

## API Integration

The application integrates with the WeWantWaste API:
- Base URL: `https://app.wewantwaste.co.uk/api`
- Endpoints:
  - GET `/skips/by-location` - Retrieves available skips by location
  - Params `?postcode=NR32&area=Lowestoft` 

## Deployment

The application can be deployed using:
```
npm run build
```
This creates an optimized production build in the `build` folder.