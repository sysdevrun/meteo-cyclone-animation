import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import { leafletLayer, LineSymbolizer, PolygonSymbolizer, PaintRule } from 'protomaps-leaflet';
import L from 'leaflet';

type LayerType = 'water' | 'earth' | 'boundaries';

interface PMTilesLayerProps {
  url: string;
  layers: LayerType[];
  pane: string;
  zIndex: number;
}

const layerStyles: Record<LayerType, () => PaintRule> = {
  water: () => ({
    dataLayer: 'water',
    symbolizer: new PolygonSymbolizer({
      fill: '#a4c8e0',
      stroke: 'transparent',
    }),
  }),
  earth: () => ({
    dataLayer: 'earth',
    symbolizer: new PolygonSymbolizer({
      fill: 'transparent',
      stroke: '#333333',
      width: 1,
      opacity: 1,
    }),
  }),
  boundaries: () => ({
    dataLayer: 'boundaries',
    symbolizer: new LineSymbolizer({
      color: '#333333',
      width: 1,
      opacity: 1,
    }),
  }),
};

export function PMTilesLayer({ url, layers, pane, zIndex }: PMTilesLayerProps) {
  const map = useMap();
  const layerRef = useRef<L.Layer | null>(null);

  useEffect(() => {
    if (!map.getPane(pane)) {
      const customPane = map.createPane(pane);
      customPane.style.zIndex = String(zIndex);
    }

    const paintRules: PaintRule[] = layers.map(layer => layerStyles[layer]());

    const layer = leafletLayer({
      url,
      paintRules,
      labelRules: [],
      pane,
      maxDataZoom: 5,
    }) as unknown as L.Layer;

    layer.addTo(map);
    layerRef.current = layer;

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [map, url, layers, pane, zIndex]);

  return null;
}
