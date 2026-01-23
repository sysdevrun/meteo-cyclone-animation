# Cyclones.re

Cyclone tracking application for the South-West Indian Ocean basin.

## Project Structure

```
cyclones.re/
├── web/                    # Vite/React frontend app
├── fetchers/               # Data fetching scripts
│   ├── fetch_cmrs_image.ts      # Fetches trajectory images from CMRS
│   ├── fetch_meteofrance_api.ts # Fetches cyclone data from Meteo France API
│   └── fetch_satellite.ts       # Fetches satellite images from EUMETSAT WMS
├── wms-downloader/         # WMS download library (used by fetchers)
├── nginx/                  # Nginx configuration
├── data/                   # Fetched data (gitignored)
└── setup_cron.sh           # Cron job setup script
```

## Commands

### Web App (from `web/`)
```bash
npm run dev      # Start development server
npm run build    # Build for production
```

### Fetchers (from `fetchers/`)
```bash
npm run fetch:image      # Fetch CMRS trajectory image
npm run fetch:api        # Fetch Meteo France cyclone API data
npm run fetch:satellite  # Fetch EUMETSAT satellite images
```

## Data Storage

All fetched data is stored in `./data/` at project root:
- `data/cmrs_images/` - CMRS trajectory images
- `data/cmrs_images.json` - CMRS images index
- `data/meteofrance/` - Meteo France API responses
- `data/api_data.json` - API data index
- `data/satellite/` - Satellite images
- `data/satellite_metadata.json` - Satellite images index

## Cyclone Season

The South-West Indian Ocean cyclone season runs from July to June (e.g., season 2025-2026 covers July 2025 to June 2026).

## External APIs

- **Meteo France CMRS**: Cyclone tracking data and reports for SWI basin
- **EUMETSAT WMS**: Satellite imagery (IR108 infrared, RGB Natural Enhanced)
