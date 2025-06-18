module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_river_label",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "water",
    "minzoom": 10,
    "filter": ["in", "kind", "river"],
    "layout": {
      "symbol-placement": "line",
      "symbol-spacing": ["step", ["zoom"], 50, 10, 100, 12, 500, 16, 750],
      "text-font": ["Noto Sans Italic"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["exponential",1.6], ["zoom"], 10, 10, 12, 12, 18, 24],
      "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 10, 0.1, 13, 0.2, 15, 0.05],
    },
    "paint": {
      "text-color": context.colors.waterLabel,
      "text-halo-color": context.colors.water_light,
      "text-halo-width": 1.5,
      "text-halo-blur": 0.5
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};