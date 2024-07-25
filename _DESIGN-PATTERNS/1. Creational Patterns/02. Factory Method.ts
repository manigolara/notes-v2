// Abstract Creator class with the factory method
abstract class Creator {
  // Factory method to be implemented by subclasses
  abstract factoryMethod(type: string): Product;
}

// Concrete Creator class implementing the factory method
class ConcreteCreator extends Creator {
  factoryMethod(type: string): Product {
    switch (type) {
      case "A":
        return new ProductA();
      case "B":
        return new ProductB();
      default:
        throw new Error("Unknown product type: " + type);
    }
  }
}

// Product interface
interface Product {
  use(): void;
}

// Concrete ProductA class
class ProductA implements Product {
  use(): void {
    console.log("Using Product A");
  }
}

// Concrete ProductB class
class ProductB implements Product {
  use(): void {
    console.log("Using Product B");
  }
}

// Client code
class Client {
  main(): void {
    // Instantiate a ConcreteCreator which implements the factory method
    const creator: Creator = new ConcreteCreator();

    // Use the factory method to create an instance of ProductA
    const productA: Product = creator.factoryMethod("A");
    // Call a method on the created productA
    productA.use();

    // Use the factory method to create an instance of ProductB
    const productB: Product = creator.factoryMethod("B");
    // Call a method on the created productB
    productB.use();
  }
}

// Run the client code
const client = new Client();
client.main();
