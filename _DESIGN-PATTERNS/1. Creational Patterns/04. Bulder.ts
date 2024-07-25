// Product class
class Product {
  private parts: string[] = [];

  addPart(part: string): void {
    this.parts.push(part);
  }

  showDetails(): void {
    console.log("Product parts: " + this.parts.join(", "));
  }
}

// Builder interface
interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  getResult(): Product;
}

// ConcreteBuilder1 class
class ConcreteBuilder1 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.addPart("PartA1");
  }

  buildPartB(): void {
    this.product.addPart("PartB1");
  }

  getResult(): Product {
    return this.product;
  }
}

// ConcreteBuilder2 class
class ConcreteBuilder2 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.addPart("PartA2");
  }

  buildPartB(): void {
    this.product.addPart("PartB2");
  }

  getResult(): Product {
    return this.product;
  }
}

// Director class
class Director {
  construct(builder: Builder): void {
    builder.buildPartA();
    builder.buildPartB();
  }
}

// Client code
class Client {
  main(): void {
    const director = new Director();

    // Instantiate the first concrete builder
    const builder1 = new ConcreteBuilder1();

    // Tell the director to construct the product using the first builder
    director.construct(builder1);

    // Retrieve the constructed product from the first builder
    const product1 = builder1.getResult();

    // Call methods on the constructed product from the first builder
    product1.showDetails();

    // Instantiate the second concrete builder
    const builder2 = new ConcreteBuilder2();

    // Tell the director to construct the product using the second builder
    director.construct(builder2);

    // Retrieve the constructed product from the second builder
    const product2 = builder2.getResult();

    // Call methods on the constructed product from the second builder
    product2.showDetails();
  }
}

// Running the client code
const client = new Client();
client.main();
