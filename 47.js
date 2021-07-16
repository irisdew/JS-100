// set 자료형의 응용

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

const a = new Set();
Object.keys(people).forEach((k) => {
  a.add(people[k]);
});
// console.log(Object.keys(people));
// console.log(a);
console.log(a.size);
