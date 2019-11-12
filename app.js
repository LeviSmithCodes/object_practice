let eraser = {
  brand: "Expo",
  top: {
    color: "Dark grey",
    composition: "Styrofoam",
    percentVolume: "90%"
  },
  bottom: {
    color: "Light grey",
    composition: "Thin plastic fibers",
    percentVolume: "10%"
  },
  damage: "1 HP",
  weight: "About 1 g"
};

// console.log(eraser.bottom.composition);

// var key;
for (var key in eraser) {
  console.log(key.valueOf());
}

document.write("working");
