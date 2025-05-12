module.exports.default = (context) => {
  const baseStyle = {
    "id": "background",
    "type": "background",
    "layout": {"visibility": "none"},
    "paint": {"background-color": "#cccccc"}
  };
  let overrides = {};
  
  return {
    baseStyle,
    overrides
  };
};