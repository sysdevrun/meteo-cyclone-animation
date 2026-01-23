# Cyclones.re Web App

React/Vite frontend for visualizing cyclone trajectories in the South-West Indian Ocean basin.

## Project Structure

```
src/
├── main.tsx                 # App entry point
├── App.tsx                  # Root component with layout
├── index.css                # Global styles (Tailwind)
├── components/
│   ├── CycloneMap.tsx       # Leaflet map with trajectory & satellite overlays
│   ├── CycloneInfo.tsx      # Cyclone details panel (name, intensity, position)
│   ├── ConfigurationPanel.tsx # Settings toggle (satellite layers, etc.)
│   ├── Legend.tsx           # Cyclone intensity color legend
│   ├── LoadingOverlay.tsx   # Loading spinner
│   ├── PlaybackButtons.tsx  # Timeline navigation controls
│   └── ReportSection.tsx    # CMRS bulletin display
├── hooks/
│   ├── useCycloneData.ts    # Data fetching and snapshot state management
│   └── useAnimation.ts      # Playback animation logic
├── types/
│   └── index.ts             # TypeScript interfaces
└── utils/
    ├── api.ts               # API calls and URL helpers
    ├── colors.ts            # Cyclone intensity color mapping
    └── formatting.ts        # Date and value formatting helpers
```

## Data Flow

1. `useCycloneData` loads `/data/api_data.json` containing snapshot metadata
2. For each snapshot, trajectory GeoJSON and reports are fetched from `/data/`
3. Satellite images (IR108, RGB) are loaded as Leaflet overlays
4. `useAnimation` handles playback through historical snapshots

## Development

```bash
npm install
npm run dev     # Start dev server on http://localhost:5173
npm run build   # Build to dist/
```

## Dependencies

- React 18 + TypeScript
- Vite (build tool)
- Leaflet + react-leaflet (mapping)
- Tailwind CSS (styling)
- date-fns (date formatting with Reunion timezone)
