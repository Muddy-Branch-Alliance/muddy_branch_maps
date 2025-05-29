module.exports.default = (context) => {
  const baseStyle = {
    "id": "places_locality",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": ["==", "kind", "locality"],
    "minzoom": 10,
    "layout": {
      "text-field": ["get", "name"],
      "text-font": ["Noto Sans Regular"],
      "text-padding": 11,
      "text-size": [
        "interpolate",
        ["exponential", 0.7],
        ["zoom"],
        10,
        [
          "case",
          ["<", ["get", "population_rank"], 7],
          11,
          ["<", ["get", "population_rank"], 8],
          13,
          ["<", ["get", "population_rank"], 9],
          16,
          [">=", ["get", "population_rank"], 9],
          20,
          0
        ],
        14,
        [
          "case",
          ["<", ["get", "population_rank"], 8],
          18,
          [">=", ["get", "population_rank"], 8],
          22,
          0
        ]
      ]
    },
    "paint": {
      "text-color": context.colors.locality,
      "text-halo-color": context.colors.halo,
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};