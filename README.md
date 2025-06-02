
Welcome! This is a work-in-progress web map of the [Muddy Branch Greenway Trail](https://muddybranch.org/maps/). Click [here](https://mizmay.github.io/muddy_branch_maps/) to see a preview of the map.

Here is a brief explanation of all of the underlying components this map relies on to render and display an intereactive map.

## Data from OpenStreetMap

The trail geometry, along with associated parking lots, trailheads, and other waypoints are all associated [with a single route relation in OpenStreetMap](https://www.openstreetmap.org/relation/18728360). To update any of those features on this map:
1. Create an account (if you don't have one already), log in, and [edit the geometries or tags via OpenStreetMap](https://www.openstreetmap.org/relation/18728360)
2. Once you are satisfied with your updates, follow the instructions below to export the whole route relation as a GeoJSON and replace the GeoJSON in this file.

Once updated, your changes will show up on the Muddy Branch Trail map automatically.

### Exporting the Muddy Branch Greenway Trail Relation

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

### Replacing the data in this Repo

1. ( Optional / Recommended ) Verify the updates in the GeoJSON make sense compared with `muddy_branch_relation.geojson`.
2. Replace `muddy_branch_relation.geojson` with the file you just downloaded.

## Icons and Fonts

[ ADD DOCUMENTATION HERE ]

### Icons

### Fonts

## Reference Layers


The _reference layers_ are everything on the map _not_ coming directly from the OpenStreetMap query above.

### Hillshade

[ REPLACE SOURCE AND DESCRIBE ]

### Protomaps

Everything else was downloaded from (Protomaps)[https://docs.protomaps.com] and saved as `muddy_branch_area.pmtiles`. Should these layers ever become out-of-date and you need a more recent version, here's how to download and replace these layers:
1. Follow the (Getting Started)[https://docs.protomaps.com/guide/getting-started] guide to install the CLI and find the latest daily planet file
2. Paste this at the command line, replacing <LATEST_PLANET_FILE> with the name of the latest daily planet file:
```
pmtiles extract https://build.protomaps.com/<LATEST_PLANET_FILE>.pmtiles muddy_branch_area.pmtiles --minzoom=10 --maxzoom=16 --bbox=-77.574463,38.934310,-76.956482,39.254056
```
3. Replace the existing file in this repo with the updated file.

## Deployment:

1. Clone this repo
2. Enable Github Pages in the new location


## Success Criteria
### Maps…
- [ ] Show full extent of the Muddy Branch Greenway Trail within the context of Muddy Branch Watershed
- [ ] Help people plan trips to hike the trail
- [ ] Can be incorporated into the existing website
### Muddy Branch Greenway Trail data…
- [ ] Is up to date and accurate
- [ ] Is findable and accurate on common platforms (AllTrails, Apple Maps, etc.)
- [ ] Is shown on Google Maps
- [ ] Can be maintained by Muddy Branch Alliance going forward (e.g. Volunteer recruited to take over maintaining in OSM)
- [ ] Sufficiently well-documented
### Internet search for Muddy Branch Greenway Trail…
- [ ] Yields up to date and accurate information about the extent of the trail and it’s purpose
- [ ] Entices locals to use it
- [ ] Usefulness to OpenStreetMap community…
- [ ] Becomes a reproducible example of how others can do a project like this
- [ ] Provides meaningful insights to broader initiatives like OpenTrailMap
