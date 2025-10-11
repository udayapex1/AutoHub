# AutoHub - Premium Car Listing Platform

A modern, interactive web application for browsing and purchasing premium cars with 360° viewing, EMI calculator, and real-time pricing features.

## Features

### Core Features

- **360° Interactive Model Viewer** - View cars from every angle with smooth 3D model interaction
- **Dynamic Image Carousel** - Browse multiple car photos with swipe support and Framer Motion animations
- **EMI Calculator** - Calculate monthly EMI with adjustable loan amount, down payment, and duration
- **Price Calculator** - Real-time pricing based on invites and duration
- **Car Overview** - Comprehensive vehicle details including year, mileage, and price
- **Responsive Design** - Seamless experience on desktop, tablet, and mobile devices

### UI Components

- **Navigation Bar** - Sticky navbar with search, cart, and user account features
- **Model Viewer Modal** - Bottom sheet modal for 3D car visualization
- **EMI Modal** - Centered modal for eligibility checks and EMI calculations
- **Responsive Carousel** - Full-featured image slider with thumbnails and dot indicators

## Tech Stack

### Frontend

- **React 18** - UI framework with hooks
- **Next.js 14** - App router and server components
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations and transitions
- **Lucide React** - Icon library
- **Google Model Viewer** - 3D model rendering

### Libraries

- `framer-motion` - Smooth animations and drag interactions
- `lucide-react` - Beautiful SVG icons
- `@google/model-viewer` - 3D model viewer component

## Project Structure

```
src/
├── app/
│   ├── page.js              # Main home page
│   └── layout.js            # Root layout
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   ├── Carousel.jsx         # Image carousel with Framer Motion
│   ├── ModelViewer360.jsx   # 3D model viewer modal
│   ├── CarOverview.jsx      # Car details card
│   ├── PriceCalculator.jsx  # Pricing calculator
│   └── EMICalculator.jsx    # EMI calculation modal
└── public/
    └── 360/
        └── audi_a6_c7_limousine.glb  # 3D model file
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd autohub
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Component Details

### Carousel Component

- Drag-to-swipe functionality with Framer Motion
- Thumbnail navigation
- Dot indicators
- Progress bar
- Responsive design

```javascript
<Carousel images={images} />
```

### ModelViewer360 Component

- 360° interactive 3D viewing
- Toggle auto-rotate feature
- Reset camera view button
- Professional modal interface

```javascript
<ModelViewer360 src={modelSrc} onClose={() => setShow3D(false)} />
```

### EMICalculator Component

- Adjustable loan amount slider
- Down payment configuration
- Loan duration selection
- Real-time EMI calculation
- Centered modal presentation

```javascript
<EMICalculator onClose={() => setShowEMI(false)} />
```

### PriceCalculator Component

- Invite count input
- Duration adjustment
- Real-time price calculation
- Breakdown display

```javascript
<PriceCalculator baseRate={60} />
```

## Animations

The project uses Framer Motion for sophisticated animations:

### Page Animations

- Staggered element entrance animations
- Fade-in with slide effects
- Progressive animation delays for visual hierarchy

### Carousel Animations

- Directional slide transitions (left/right)
- Spring-based physics animations
- Drag and swipe interactions
- Smooth image transitions

### Component Animations

- Button hover and tap effects
- Scale and translate animations
- Icon rotation and movement
- Progress bar animations

## Styling

The design uses a clean white theme with gray and black accents:

- Primary: Gray (#111827)
- Secondary: Gray (various shades)
- Background: White/Light Gray
- Accents: Black shadows and borders

All components are built with Tailwind CSS utility classes and custom animations.

## Features Walkthrough

### Browsing Cars

1. View car images in the carousel with smooth transitions
2. Use arrow buttons or drag to navigate
3. Click thumbnails for quick access
4. Use dot indicators for direct navigation

### 3D Viewing

1. Click "View 360° Interactive Model" button
2. Interact with the 3D model using mouse/touch
3. Toggle auto-rotation on/off
4. Reset camera to default position

### Price Calculation

1. Adjust number of invites
2. Set duration in hours
3. View real-time price calculation
4. See breakdown of charges

### EMI Calculation

1. Click "Check EMI & Eligibility"
2. Adjust loan amount with slider
3. Set down payment
4. Configure loan duration
5. View monthly EMI calculation
6. Check eligibility criteria

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Performance Optimizations

- Lazy loading of images
- Optimized animations with requestAnimationFrame
- Efficient re-renders with React hooks
- Tailwind CSS purging for smaller bundle size

## Future Enhancements

- User authentication
- Wishlist functionality
- Comparison tool for multiple cars
- Advanced search and filters
- Payment integration
- Customer reviews and ratings
- Video tours
- Virtual test drive booking

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email support@autohub.com or open an issue in the repository.

## Acknowledgments

- Google Model Viewer for 3D rendering
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling
- Next.js team for the framework

---

**Created with ❤️ by the AutoHub Team**
