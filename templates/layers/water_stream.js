module.exports.default = (context) => {
  const baseStyle = {
    "id": "water_stream",
    "type": "line",
    "source": "protomaps",
    "source-layer": "water",
    "minzoom": 14,
    "filter": ["in", "kind", "stream"],
    "paint": {"line-color": "#80deea", "line-width": 0.5}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};