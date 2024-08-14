class Singleton {
  // Private static variable of the single instance
  private static instance: Singleton;

  // Private constructor to restrict instantiation from other classes
  private constructor() {}

  // Public static method to provide access to the single instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Example method that can be called on the singleton instance
  public showMessage(): void {
    console.log("Hello from Singleton!");
  }
}

// Usage
const singleton = Singleton.getInstance();
singleton.showMessage(); // -> Hello from Singleton!
