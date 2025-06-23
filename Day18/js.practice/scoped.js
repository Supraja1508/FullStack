function outer() {
  let outerVar = "I'm outside!";
  function inner() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // can access outer
  }
  inner();
  // console.log(innerVar); // ❌ Error: not accessible
}

outer();
