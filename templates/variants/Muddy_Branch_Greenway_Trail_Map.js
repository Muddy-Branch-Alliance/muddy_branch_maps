module.exports.context = {
  colors: {
    black: 'rgb(128,128,128)',
    chrome: 'rgb(218, 219, 223)',
  },
  opacity: {
    half: 0.5,
  }
};

module.exports.template = {
  "version": 8,
  "name": "Muddy_Branch_Greenway_Trail_Map",
  "sources": {
    "protomaps": {
      "attribution": "<a href=\"https://github.com/protomaps/basemaps\">Protomaps</a> © <a href=\"https://openstreetmap.org\">OpenStreetMap</a>",
      "type": "vector",
      "url": "pmtiles://assets/Muddy_Branch_Greenway_Trail_Map/muddy_branch_area.pmtiles"
    },
    "muddy_branch_relation": {
      "type": "geojson",
      "data": "assets/Muddy_Branch_Greenway_Trail_Map/muddy_branch_relation.geojson"
    },
    "montgomery_county_dem": {
      "type": "raster-dem",
      "encoding": "terrarium",
      "url": "https://tiles.stadiamaps.com/data/terrarium.json",
      "tileSize": 256
    }
  },
  "sprite": "https://protomaps.github.io/basemaps-assets/sprites/v4/light",
  "glyphs": "https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf",
  "layers": [
    "hillshade",
    "landuse_park",
    "landuse_aerodrome",
    "roads_runway",
    "roads_taxiway",
    "landuse_runway",
    "muddy_branch_parking",
    "water",
    "water_stream",
    "water_river",
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
    "muddy-branch-trail",
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
    "water_label_ocean",
    "water_label_lakes",
    "roads_labels_major",
    "pois",
    "places_subplace",
    "places_locality",
    "places_region"
  ],
  "id": "h7f7a74"
};
