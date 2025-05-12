module.exports.default = (context) => {
  const baseStyle = {
    "id": "places_country",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": ["==", "kind", "country"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "text-field": [
        "format",
        ["coalesce", ["get", "name:en"], ["get", "name:en"]],
        {}
      ],
      "text-font": ["Noto Sans Medium"],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        2,
        [
          "case",
          ["<", ["get", "population_rank"], 10],
          8,
          [">=", ["get", "population_rank"], 10],
          12,
          0
        ],
        6,
        [
          "case",
          ["<", ["get", "population_rank"], 8],
          10,
          [">=", ["get", "population_rank"], 8],
          18,
          0
        ],
        8,
        [
          "case",
          ["<", ["get", "population_rank"], 7],
          11,
          [">=", ["get", "population_rank"], 7],
          20,
          0
        ]
      ],
      "icon-padding": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        2,
        14,
        2,
        16,
        20,
        17,
        2,
        22,
        2
      ],
      "text-transform": "uppercase"
    },
    "paint": {
      "text-color": "#a3a3a3",
      "text-halo-color": "#e2dfda",
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};