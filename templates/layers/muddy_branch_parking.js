module.exports.default = (context) => {
  const baseStyle = {
    "id": "muddy_branch_parking",
    "type": "fill",
    "source": "muddy_branch_relation",
    "filter": ["all", ["==", "$type", "Polygon"]],
    "paint": {"fill-color": "red"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};