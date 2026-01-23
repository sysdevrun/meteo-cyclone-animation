# Cyclones.re

Cyclone tracking application for the South-West Indian Ocean basin.

## Project Structure

```
cyclones.re/
├── web/                    # Vite/React frontend app
├── fetchers/               # Data fetching scripts
│   ├── fetch_cmrs_image.ts      # Fetches trajectory images from CMRS
│   ├── fetch_meteofrance_api.ts # Fetches cyclone data from Meteo France API
│   ├── fetch_satellite.ts       # Fetches satellite images from EUMETSAT WMS
│   └── wms-downloader/          # WMS download library
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
# World Boundaries PMTiles

Generate a lightweight PMTiles file with country boundaries, land, and water layers.

## Requirements

- [pmtiles](https://github.com/protomaps/go-pmtiles) CLI
- [tippecanoe](https://github.com/felt/tippecanoe) (for `tile-join`)

## Generate

```bash
# 1. Extract world tiles (zoom 0-5) from Protomaps source
pmtiles extract https://build.protomaps.com/20260123.pmtiles world-temp.pmtiles \
  --minzoom=0 --maxzoom=5

# 2. Filter to boundaries, earth, and water layers only
tile-join -o world-boundaries-water-z5.pmtiles \
  -l boundaries -l earth -l water \
  world-temp.pmtiles

# 3. Clean up
rm world-temp.pmtiles
```

## Output

- **File**: `world-boundaries-water-z5.pmtiles`
- **Size**: ~1.8 MB
- **Zoom**: 0-5
- **Layers**: boundaries, earth, water

## Layer Reference

See [Protomaps Basemap Layers](https://docs.protomaps.com/basemaps/layers) for layer details.
