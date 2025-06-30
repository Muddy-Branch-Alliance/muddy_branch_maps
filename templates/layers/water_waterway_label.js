module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_waterway_label",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "water",
    "minzoom": 12,
    "filter": ["in", "kind", "stream"],
    "layout": {
      "symbol-placement": "line",
      "text-font": ["Noto Sans Italic"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["exponential",1.6], ["zoom"], 12, 12, 14, 12, 18, 16],
      "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 13, 0.2, 15, 0.05],
    },
    "paint": {
      "text-color": context.colors.waterLabel,
      "text-halo-color": context.colors.waterZoomedIn,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};