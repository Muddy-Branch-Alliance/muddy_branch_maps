module.exports.default = (context) => {
  const baseStyle = {
    "id": "landuse_school-copy",
    "type": "fill",
    "source": "protomaps",
    "source-layer": "landuse",
    "filter": ["in", "kind", "school", "university", "college"],
    "layout": {"visibility": "none"},
    "paint": {"fill-color": "#e4ded7"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};