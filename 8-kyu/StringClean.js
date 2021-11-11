const stringClean = (s) => {
  return s.replace(/[0-9]/g, '');
}

console.log(stringClean("*"))
console.log(stringClean("! !"))
console.log(stringClean("#123456789#"))
console.log(stringClean("(E3at m2e2!!)"))
console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"))
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"))