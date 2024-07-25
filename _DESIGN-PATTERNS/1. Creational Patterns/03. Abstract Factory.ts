// AbstractFactory Interface
interface AbstractFactory {
  createProductA(name: string): ProductA;
  createProductB(name: string): ProductB;
}

// ConcreteFactory1 Class
class ConcreteFactory1 implements AbstractFactory {
  createProductA(name: string): ProductA {
    return new ConcreteProductA1(name);
  }

  createProductB(name: string): ProductB {
    return new ConcreteProductB1(name);
  }
}

// ConcreteFactory2 Class
class ConcreteFactory2 implements AbstractFactory {
  createProductA(name: string): ProductA {
    return new ConcreteProductA2(name);
  }

  createProductB(name: string): ProductB {
    return new ConcreteProductB2(name);
  }
}

// ProductA Interface
interface ProductA {
  useA(): void;
}

// ProductB Interface
interface ProductB {
  useB(): void;
}

// ConcreteProductA1 Class
class ConcreteProductA1 implements ProductA {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useA(): void {
    console.log(`Using ProductA1 with name ${this.name}`);
  }
}

// ConcreteProductB1 Class
class ConcreteProductB1 implements ProductB {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useB(): void {
    console.log(`Using ProductB1 with name ${this.name}`);
  }
}

// ConcreteProductA2 Class
class ConcreteProductA2 implements ProductA {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useA(): void {
    console.log(`Using ProductA2 with name ${this.name}`);
  }
}

// ConcreteProductB2 Class
class ConcreteProductB2 implements ProductB {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  useB(): void {
    console.log(`Using ProductB2 with name ${this.name}`);
  }
}

// Client Code
function main() {
  // Create the first factory
  const factory1: AbstractFactory = new ConcreteFactory1();

  // Use the factory to create products with arguments
  const productA1: ProductA = factory1.createProductA("A1");
  const productB1: ProductB = factory1.createProductB("B1");

  // Call methods on the created products
  productA1.useA();
  productB1.useB();

  // Create the second factory
  const factory2: AbstractFactory = new ConcreteFactory2();

  // Use the factory to create products with arguments
  const productA2: ProductA = factory2.createProductA("A2");
  const productB2: ProductB = factory2.createProductB("B2");

  // Call methods on the created products
  productA2.useA();
  productB2.useB();
}

// Run the client code
main();
