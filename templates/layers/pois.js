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
      "icon-image": [
        "match",
        ["get", "kind"],
        "station",
        "train_station",
        ["get", "kind"]
      ],
      "text-font": ["Noto Sans Regular"],
      "text-justify": "auto",
      "text-field": [
        "case",
        [
          "all",
          ["any", ["has", "name"], ["has", "pgf:name"]],
          ["!", ["any", ["has", "name2"], ["has", "pgf:name2"]]],
          ["!", ["any", ["has", "name3"], ["has", "pgf:name3"]]]
        ],
        [
          "case",
          ["has", "script"],
          [
            "case",
            [
              "any",
              ["is-supported-script", ["get", "name"]],
              ["has", "pgf:name"]
            ],
            [
              "format",
              ["coalesce", ["get", "name:en"], ["get", "name:en"]],
              {},
              "\n",
              {},
              [
                "case",
                [
                  "all",
                  ["!", ["has", "name:en"]],
                  ["has", "name:en"],
                  ["!", ["has", "script"]]
                ],
                "",
                ["coalesce", ["get", "pgf:name"], ["get", "name"]]
              ],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ],
            ["get", "name:en"]
          ],
          [
            "format",
            [
              "coalesce",
              ["get", "name:en"],
              ["get", "pgf:name"],
              ["get", "name"]
            ],
            {}
          ]
        ],
        [
          "all",
          ["any", ["has", "name"], ["has", "pgf:name"]],
          ["any", ["has", "name2"], ["has", "pgf:name2"]],
          ["!", ["any", ["has", "name3"], ["has", "pgf:name3"]]]
        ],
        [
          "case",
          ["all", ["has", "script"], ["has", "script2"]],
          [
            "format",
            ["get", "name:en"],
            {},
            "\n",
            {},
            ["coalesce", ["get", "pgf:name"], ["get", "name"]],
            {
              "text-font": [
                "case",
                ["==", ["get", "script"], "Devanagari"],
                ["literal", ["Noto Sans Devanagari Regular v1"]],
                ["literal", ["Noto Sans Regular"]]
              ]
            },
            "\n",
            {},
            ["coalesce", ["get", "pgf:name2"], ["get", "name2"]],
            {
              "text-font": [
                "case",
                ["==", ["get", "script2"], "Devanagari"],
                ["literal", ["Noto Sans Devanagari Regular v1"]],
                ["literal", ["Noto Sans Regular"]]
              ]
            }
          ],
          [
            "case",
            ["has", "script2"],
            [
              "format",
              [
                "coalesce",
                ["get", "name:en"],
                ["get", "pgf:name"],
                ["get", "name"]
              ],
              {},
              "\n",
              {},
              ["coalesce", ["get", "pgf:name2"], ["get", "name2"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script2"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ],
            [
              "format",
              [
                "coalesce",
                ["get", "name:en"],
                ["get", "pgf:name2"],
                ["get", "name2"]
              ],
              {},
              "\n",
              {},
              ["coalesce", ["get", "pgf:name"], ["get", "name"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ]
          ]
        ],
        [
          "case",
          ["all", ["has", "script"], ["has", "script2"], ["has", "script3"]],
          [
            "format",
            ["get", "name:en"],
            {},
            "\n",
            {},
            ["coalesce", ["get", "pgf:name"], ["get", "name"]],
            {
              "text-font": [
                "case",
                ["==", ["get", "script"], "Devanagari"],
                ["literal", ["Noto Sans Devanagari Regular v1"]],
                ["literal", ["Noto Sans Regular"]]
              ]
            },
            "\n",
            {},
            ["coalesce", ["get", "pgf:name2"], ["get", "name2"]],
            {
              "text-font": [
                "case",
                ["==", ["get", "script2"], "Devanagari"],
                ["literal", ["Noto Sans Devanagari Regular v1"]],
                ["literal", ["Noto Sans Regular"]]
              ]
            },
            "\n",
            {},
            ["coalesce", ["get", "pgf:name3"], ["get", "name3"]],
            {
              "text-font": [
                "case",
                ["==", ["get", "script3"], "Devanagari"],
                ["literal", ["Noto Sans Devanagari Regular v1"]],
                ["literal", ["Noto Sans Regular"]]
              ]
            }
          ],
          [
            "case",
            ["!", ["has", "script"]],
            [
              "format",
              [
                "coalesce",
                ["get", "name:en"],
                ["get", "pgf:name"],
                ["get", "name"]
              ],
              {},
              "\n",
              {},
              ["coalesce", ["get", "pgf:name2"], ["get", "name2"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script2"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              },
              "\n",
              {},
              ["coalesce", ["get", "pgf:name3"], ["get", "name3"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script3"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ],
            ["!", ["has", "script2"]],
            [
              "format",
              [
                "coalesce",
                ["get", "name:en"],
                ["get", "pgf:name2"],
                ["get", "name2"]
              ],
              {},
              "\n",
              {},
              ["coalesce", ["get", "pgf:name"], ["get", "name"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              },
              "\n",
              {},
              ["coalesce", ["get", "pgf:name3"], ["get", "name3"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script3"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ],
            [
              "format",
              [
                "coalesce",
                ["get", "name:en"],
                ["get", "pgf:name3"],
                ["get", "name3"]
              ],
              {},
              "\n",
              {},
              ["coalesce", ["get", "pgf:name"], ["get", "name"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              },
              "\n",
              {},
              ["coalesce", ["get", "pgf:name2"], ["get", "name2"]],
              {
                "text-font": [
                  "case",
                  ["==", ["get", "script2"], "Devanagari"],
                  ["literal", ["Noto Sans Devanagari Regular v1"]],
                  ["literal", ["Noto Sans Regular"]]
                ]
              }
            ]
          ]
        ]
      ],
      "text-size": ["interpolate", ["linear"], ["zoom"], 17, 10, 19, 16],
      "text-max-width": 8,
      "text-offset": [1.1, 0],
      "text-variable-anchor": ["left", "right"]
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
        "#20834D",
        [
          "in",
          ["get", "kind"],
          ["literal", ["aerodrome", "station", "bus_stop", "ferry_terminal"]]
        ],
        "#315BCF",
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
        "#6A5B8F",
        "#e2dfda"
      ],
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