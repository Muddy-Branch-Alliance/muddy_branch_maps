module.exports.default = (context) => {
  const baseStyle = {
    "id": "places_locality",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "places",
    "filter": ["==", "kind", "locality"],
    "layout": {
      "icon-image": ["step", ["zoom"], "townspot", 8, ""],
      "icon-size": 0.7,
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
      "text-font": [
        "case",
        ["<=", ["get", "min_zoom"], 5],
        ["literal", ["Noto Sans Medium"]],
        ["literal", ["Noto Sans Regular"]]
      ],
      "text-padding": ["interpolate", ["linear"], ["zoom"], 5, 3, 8, 7, 12, 11],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        2,
        [
          "case",
          ["<", ["get", "population_rank"], 13],
          8,
          [">=", ["get", "population_rank"], 13],
          13,
          0
        ],
        4,
        [
          "case",
          ["<", ["get", "population_rank"], 13],
          10,
          [">=", ["get", "population_rank"], 13],
          15,
          0
        ],
        6,
        [
          "case",
          ["<", ["get", "population_rank"], 12],
          11,
          [">=", ["get", "population_rank"], 12],
          17,
          0
        ],
        8,
        [
          "case",
          ["<", ["get", "population_rank"], 11],
          11,
          [">=", ["get", "population_rank"], 11],
          18,
          0
        ],
        10,
        [
          "case",
          ["<", ["get", "population_rank"], 9],
          12,
          [">=", ["get", "population_rank"], 9],
          20,
          0
        ],
        15,
        [
          "case",
          ["<", ["get", "population_rank"], 8],
          12,
          [">=", ["get", "population_rank"], 8],
          22,
          0
        ]
      ],
      "icon-padding": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0,
        0,
        8,
        4,
        10,
        8,
        12,
        6,
        22,
        2
      ],
      "text-justify": "auto",
      "text-anchor": ["step", ["zoom"], "left", 8, "center"],
      "text-radial-offset": 0.4
    },
    "paint": {
      "text-color": "#5c5c5c",
      "text-halo-color": "#e0e0e0",
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};