module.exports.default = (context) => {
  const baseStyle = {
    "id": "places_subplace",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "minzoom": 12,
    "filter": ["==", "kind", "neighbourhood"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-font": ["Noto Sans Regular"],
      "text-max-width": 7,
      "text-letter-spacing": 0.1,
      "text-padding": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        18,
        15,
        20
      ],
      "text-size": [
        "interpolate",
        ["exponential", 1.5],
        ["zoom"],
        11,
        8,
        14,
        14,
        18,
        24
      ],
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": context.colors.neighborhoodLabel,
      "text-halo-color": context.colors.pavementMedium,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};