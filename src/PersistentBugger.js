function persistence(num) {
  let multiplicativePersistence = 0;
  let oldProduct = num; 
  let newProduct = 1;
  while (oldProduct > 9) {
    newProduct = 1;
    oldProduct = oldProduct.toString();
    for (let i = 0; i < oldProduct.length; i++) {
      newProduct *= +oldProduct.charAt(i);
    }
    multiplicativePersistence++;
    oldProduct = newProduct;
  }
  return multiplicativePersistence;
}


console.log(persistence(39),3);
