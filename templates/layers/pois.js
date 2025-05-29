module.exports.default = (context) => {
  const baseStyle = {
    "id": "pois",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "pois",
    "filter": [
      "all",
      [
        "in",
        ["get", "kind"],
        [
          "literal",
          [
            "beach",
            "forest",
            "marina",
            "park",
            "peak",
            "zoo",
            "garden",
            "bench",
            "aerodrome",
            "station",
            "bus_stop",
            "ferry_terminal",
            "stadium",
            "university",
            "library",
            "school",
            "animal",
            "toilets",
            "drinking_water"
          ]
        ]
      ],
      [">=", ["zoom"], ["+", ["get", "min_zoom"], 0]]
    ],
    "layout": {
      "text-font": ["Noto Sans Regular"],
      "text-justify": "auto",
      "text-field": [
        "coalesce",
        ["get", "name:en"],
        ["get", "name"]
      ],
      "text-size": ["interpolate", ["linear"], ["zoom"], 17, 10, 19, 16],
      "text-max-width": 8,
    },
    "paint": {
      "text-color": [
        "case",
        [
          "in",
          ["get", "kind"],
          [
            "literal",
            [
              "beach",
              "forest",
              "marina",
              "park",
              "peak",
              "zoo",
              "garden",
              "bench"
            ]
          ]
        ],
        context.colors.greenspaceLabel,
        [
          "in",
          ["get", "kind"],
          ["literal", ["aerodrome", "station", "bus_stop", "ferry_terminal"]]
        ],
        context.colors.otherLabel,
        [
          "in",
          ["get", "kind"],
          [
            "literal",
            [
              "stadium",
              "university",
              "library",
              "school",
              "animal",
              "toilets",
              "drinking_water"
            ]
          ]
        ],
        context.colors.otherLabel,
        context.colors.otherLabel
      ],
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