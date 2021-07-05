function SolarSystem(n) {
  const planets = ["수성", "금성", "화성", "목성", "토성", "천왕성", "해왕성"];
  return planets[n - 1];
}

console.log(SolarSystem(1));
