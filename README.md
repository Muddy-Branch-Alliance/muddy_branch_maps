
Welcome! This is a work-in-progress web map of the [Muddy Branch Greenway Trail](https://muddybranch.org/maps/). Click [here](https://mizmay.github.io/muddy_branch_maps/) to see a preview of the map.

## Extracting (Updating) Data from OpenStreetMap

### Muddy Branch Trail
1. Go to [Overpass Turbo](https://overpass-turbo.eu/#) and paste in this query to select the trail rail, parking polygons, and points of interest:
```
/* Muddy Branch Greenway Trail */
[out:json][timeout:25];

// Select relation
relation(18728360);

// Recursively fetch all nodes and ways (including nested relations)
(
  way(r);
);

// Output all data with tags and geometry
(._;>;);
out body;
>;
out skel qt;
```

2. Hit download, select GeoJSON, and save to your local drive.
3. ( Optional / Recommended ) Verify the updates in the GeoJSON make sense compared with `muddy_branch_relation.geojson`.
4. Replace `muddy_branch_relation.geojson` with the file you just downloaded.

## Extracting / Updating Base Map Sources

[ to do ]

### Protomaps

### Hillshade

## Deployment:
1. Clone this repo
2. Enable Github Pages in the new location