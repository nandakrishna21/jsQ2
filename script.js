const array = [
  { language: 'JavaScript' },
  { language: 'JavaScript' },
  { language: 'C++' },
  { language: 'TypeScript' },
];

const result = Object.values(
  array.reduce((r, e) => {
    let k = `${e.language}`;
    if (!r[k]) r[k] = { ...e, count: 1 };
    else r[k].count += 1;
    return r;
  }, [])
);

console.log(result);