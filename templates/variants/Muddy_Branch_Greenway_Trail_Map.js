module.exports.context = {
  colors: {
    building: 'rgb(234, 234, 234)',
    chrome: 'rgb(218, 219, 223)',
    locality: 'rgb(92, 92, 92)',
    neighborhood: 'rgb(118, 118, 118)',
    roadLabel: 'rgb(143, 143, 143)',
    roadLabelLight: 'rgb(156, 156, 156)',
    halo: 'rgb(224, 224, 224)',
    halo_light: 'rgb(244, 244, 244)',
    ground_dark: 'rgb(226, 223, 218)',
    ground_light: 'rgb(250, 252, 251)',
    irrigated: 'rgb(178, 223, 138)',
    forest: 'rgb(51, 160, 44)',
    other_vegetation: 'rgb(178, 223, 138)',
    trail_highzoom: 'rgb(213, 180, 60)',
    trail_lowzoom: 'rgb(106, 90, 30)',
    watershed_highlight: 'rgb(255, 254, 253)',
    water_light: 'rgb(148, 220, 251)',
    water_dark: 'rgb(89, 132, 151)',
    waterLabel: 'rgb(66, 99, 115)',
    trailLabel: 'rgb(24, 80, 22)',
    greenspaceLabel: 'rgb(25, 80, 22)',
    otherLabel: 'rgb(106, 91, 143)'
  },
  settings: {
    iconSizeMarkers: ["interpolate", ["linear"], ["zoom"], 11, 0.8, 16, 1], // finish flag
    iconSizeAmenities: ["interpolate", ["linear"], ["zoom"], 11, 0.5, 16, 1], // parking
    iconSizeTrail: ["interpolate", ["linear"], ["zoom"], 13, 0.7, 16, 1], // trailhead, ford
    iconSizeToilets: ["step",["zoom"], 1, 16, 1.2], // toilet
    iconLabelFont: ["Noto Sans Regular"],
    iconLabelFontSize: ["interpolate", ["exponential", 0.7], ["zoom"], 13, 11, 16, 12, 18, 14],
    iconLabelAnchors: ["left", "right", "bottom"],
    iconLabelAnchorOffsets: ["interpolate", ["linear"], ["zoom"],
        11, ["literal",["left", [0.7, 0], "right", [-0.7, 0], "bottom", [0, 0.7]]],
        16, ["literal",["left", [1.2, 0], "right", [-1.2, 0], "bottom", [0, 1.2]]]
      ],
    iconTextPadding: 2,
    iconTextHaloWidth: 1,
    iconTextHaloBlur: 0.5
  }
};

module.exports.template = {
  "version": 8,
  "name": "Muddy_Branch_Greenway_Trail_Map",
  "sources": {
    "protomaps": {
      "attribution": "<a href=\"https://github.com/protomaps/basemaps\">Protomaps</a>",
      "type": "vector",
      "url": "pmtiles://assets/Muddy_Branch_Greenway_Trail_Map/muddy_branch_area.pmtiles"
    },
    "muddy_branch_relation": {
      "type": "geojson",
      "data": "assets/Muddy_Branch_Greenway_Trail_Map/muddy_branch_relation.geojson",
      "attribution": "© <a href=\"https://openstreetmap.org\">OpenStreetMap</a>"
    },
    "hillshade": {
      "type": "raster-dem",
      "encoding": "terrarium",
      "url": "https://tiles.stadiamaps.com/data/terrarium.json",
      "tileSize": 256
    },
    "muddy_branch_watershed": {
      "type": "geojson",
      "data": "assets/Muddy_Branch_Greenway_Trail_Map/muddy_branch_watershed.geojson"
    }
  },
  "sprite": "https://mizmay.github.io/muddy_branch_maps/assets/sprites/sprites",
  "glyphs": "https://mizmay.github.io/muddy_branch_maps/assets/fonts/{fontstack}/{range}.pbf",
  "layers": [
    "background",
    "hillshade",
    "muddy_branch_watershed",
    "landuse_park",
    "landuse_aerodrome",
    "roads_runway",
    "roads_taxiway",
    "landuse_runway",
    "water",
    "water_waterway",
    "landuse_pedestrian",
    "landuse_pier",
    "roads_tunnels_other_casing",
    "roads_tunnels_minor_casing",
    "roads_tunnels_link_casing",
    "roads_tunnels_major_casing",
    "roads_tunnels_highway_casing",
    "roads_tunnels_other",
    "roads_tunnels_minor",
    "roads_tunnels_link",
    "roads_tunnels_major",
    "roads_tunnels_highway",
    "buildings",
    "roads_pier",
    "roads_minor_service_casing",
    "roads_minor_casing",
    "roads_link_casing",
    "roads_major_casing_late",
    "roads_highway_casing_late",
    "roads_other",
    "roads_link",
    "roads_minor_service",
    "roads_minor",
    "roads_major_casing_early",
    "roads_major",
    "roads_highway_casing_early",
    "roads_highway",
    "roads_rail",
    "muddy_branch_trail",
    "roads_bridges_other_casing",
    "roads_bridges_link_casing",
    "roads_bridges_minor_casing",
    "roads_bridges_major_casing",
    "roads_bridges_other",
    "roads_bridges_minor",
    "roads_bridges_link",
    "roads_bridges_major",
    "roads_bridges_highway_casing",
    "roads_bridges_highway",
    "water_waterway_label",
    "roads_labels_minor",
    "water_label_lakes",
    "roads_labels_trail",
    "roads_labels_major",
    "pois",
    "places_subplace",
    "places_locality",
    "muddy_branch_ford",
    "muddy_branch_access",
    "muddy_branch_toilet",
    "muddy_branch_parking",
    "muddy_branch_end"
  ],
  "id": "h7f7a74"
};
