let a ="extravaganza";
console.log(a[8] + ''+a[9]+''+a[10]+''+a[11]);

let p="The quick fox jumped over the lazy dog";
let q ="eat";
let indexPosition=4
newstring=p.slice(0,indexPosition)+q+p.slice(indexPosition);
console.log(newstring);



let x="The quick brown fox jumps over the lazy dog";
let y="the";
let z="brown";
console.log(x.match(/the/).length);
console.log(x.match(/brown/).length);

let e="The pupils are  reading in a library";
let f="are";
let g="the child was sitting on the table before it fell";
let h="sitting";
console.log(e.includes(f));
console.log(g.includes(h));

let m= "wonderful";
console.log(m.toUpperCase());
let n="amazing"
console.log(n.toLowerCase());
let o="UndERneath"
console.log(o.toLowerCase());
function titleCase(st) {
    return st.toLowerCase().split(" ").reduce((s, c) =>
        s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}
console.log(titleCase("A wonderful world"));



