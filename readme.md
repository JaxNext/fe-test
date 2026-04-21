# NGA Test Project

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fe-test
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
fe-test/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── menu/items/    # Menu items endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── client/                # Client-side code
│   └── components/        # React components
│       ├── Panel/         # Panel component
│       └── SideMenu/      # Side menu component
├── public/                # Static assets
├── arch_design.md         # Architecture design document
├── requirements.md        # Project requirements
└── README.md             # This file
```

## 📚 Documentation

- [Architecture Design](./arch_design.md) - Detailed architecture and design decisions
- [Requirements](./requirements.md) - Original project requirements and specifications
