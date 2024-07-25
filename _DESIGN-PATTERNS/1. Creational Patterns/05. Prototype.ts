// Prototype interface with clone and performAction methods
interface Prototype {
  clone(): Prototype;
  performAction(): void;
}

// ConcretePrototype class implementing the Prototype interface
class ConcretePrototype implements Prototype {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  // Clone method to create a copy of the prototype
  clone(): Prototype {
    return new ConcretePrototype(this.data);
  }

  // Perform some action on the prototype
  performAction(): void {
    console.log(`Action performed on prototype with data: ${this.data}`);
  }
}

// Client code demonstrating the usage of the Prototype pattern
class Client {
  main() {
    // Create an instance of the prototype
    const prototype: Prototype = new ConcretePrototype("Prototype Data");

    // Clone the prototype to create a new object
    const clone: Prototype = prototype.clone();

    // Call methods on the cloned object
    clone.performAction();
  }
}

// Run the client code
const client = new Client();
client.main();
