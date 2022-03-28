const maps = require("@googlemaps/google-maps-services-js");

const client = new maps.Client({});

client
  .distancematrix({
    params: {
      origins: [{ lat: 42.366277, lng: -71.09169 }],
      destinations: [{ lat: 42.35096144421219, lng: -71.07782810926437 }],
      // mode: "driving",
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
  })
  .then((r) => console.log(`${r.data.rows[0].elements[0].duration.value / 60}`))
  .catch((e) => console.log(e));
