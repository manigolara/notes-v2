interface Product {
  operation(): String;
}

class ProductA implements Product {
  operation(): String {
    return "Product A";
  }
}
class ProductB implements Product {
  operation(): String {
    return "Product B";
  }
}

abstract class Creator {
  // Factory Method
  abstract createProduct(): Product;

  public execute(): String {
    const product = this.createProduct();
    return product.operation();
  }
}

class CreatorA extends Creator {
  createProduct(): Product {
    return new ProductA();
  }
}
class CreatorB extends Creator {
  createProduct(): Product {
    return new ProductB();
  }
}

const creatorA: Creator = new CreatorA();
const resultA = creatorA.execute();
console.log(resultA);

const creatorB: Creator = new CreatorB();
const resultB = creatorB.execute();
console.log(resultB);
