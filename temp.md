# Factory Method
A Factory is a component responsible solely for the wholesale (not piecewise, unlike Builder) creation of objects.
### Motivation
- Object creation logic becomes too convoluted
- Constructor is not descriptive
  - Name mandated by name of containing type
  - Cannot overload with same sets of arguments with different names
  - Can turn into "overloading hell"
- Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to:
  - A separate function (Factory Method)
  - That may exist in a separate class (Factory)
  - Can create hierarchy of factories with Abstract Factory