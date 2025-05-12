module.exports.default = (context) => {
  const baseStyle = {
    "id": "roads_labels_minor",
    "type": "symbol",
    "source": "protomaps",
    "source-layer": "roads",
    "minzoom": 15,
    "filter": ["in", "kind", "minor_road", "other", "path"],
    "layout": {
      "symbol-sort-key": ["get", "min_zoom"],
      "symbol-placement": "line",
      "text-font": ["Noto Sans Regular"],
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
      "text-size": 12
    },
    "paint": {
      "text-color": "#91888b",
      "text-halo-color": "#ffffff",
      "text-halo-width": 1
    }
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};