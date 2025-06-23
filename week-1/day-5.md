# Python - Set: Set Introduction

## What are Sets?

### What is a Set in Python?

- A collection data types that is **unordered, mutable**, and contains **unique** elements.
- Represented by elements enclosed in curly braces {}
- Based on mathematical set theory
- Implemented using hash table

### Key characteristics

- **No duplicate elements** - duplicates are automatically eliminated
- **Unordered** - elements have no defined sequence
- **Mutable** - can add or remove elements after creation
- **Only hashable elements** - items must be immutable types (strings, numbers, tuples, frozensets)

## Basic Creation and Operations

    # Creating sets 
    empty_set = set()
    colors = {"red", "green", "blue"}

    # Basic operations
    colors.add("yellow")       # Add a single element
    colors.remove("green")     # Remove (raises error if not found)
    colors.discard("purple")   # Remove safely (no error)
    print(colors.pop())        # Remove and return arbitrary element
    colors.clear()             # Remove all elements
    print(colors)

## Mathematical Set Concept

- Python sets directly implement mathematical set theory
- Elements can appear only once (uniqueness)
- Order of elements is not sequential
- Primary operations focus on set relationships and operations

 ---
 ---

# Introduction to Sets in Python

A **set** is an unordered collection of unique elements in Python. Sets are useful when you want to store multiple items but automatically avoid duplicates. They support operations like union, intersection, difference, and more, similiar to mathematical sets.

## Key Characteristics of Sets

- Sets are unordered - the items have no defined order.
- Each element in a set is unique - duplicates are automatically removed.
- Sets are mutable - you can add or remove elements.
- Sets do not support indexing or slicing beacause they are unorderd.

## Creating a Set

Sets can be created using curly braces `{}` or the `set()` constructor.

    # Creating a set using curly braces
    my_set = {1, 2, 3, 4}

    # Creating a set using the set() constructor from a list (removes duplicates)
    my_set2 = set([1, 2, 2, 3, 4, 4])

**Note:** To create an empty set, you must use `set()`. Using `{}` creates an empty dictionary.

    empty_set = set()  # Correct way to create an empty set
    empty_dict = {}    # This creates an empty dictionary, not a set

## Common Set Operations

Here are some common operations you can perform on sets:

- `add(element)`: Adds an element to the set.
- `remove(element)`: Removes an element; raises an error if not found.
- `discard(element)`: Removes an element if present, does nothing otherwise.
- `union()`: Returns a new set with elements from both sets.
- `intersection()`: Returns a set with elements common to both sets.
- `difference()`: Returns elements in one set but not the other.
- `clear()`: Removes all elements from the set.

## Example: Basic Set Usage

    # Define two sets
    fruits = {"apple", "banana", "cherry"}
    citrus = {"orange", "lemon", "banana"}

    # Add an element
    fruits.add("mango")

    # Remove an element
    fruits.discard("apple")

    # Find common elements
    common = fruits.intersection(citrus)

    # Find all elements in either set
    all_fruits = fruits.union(citrus)

    print("Fruits:", fruits)
    print("Citrus fruits:", citrus)
    print("Common fruits:", common)
    print("All fruits:", all_fruits)

## Use Cases for Sets

Sets are ideal when you need to:

- Remove duplicates from a collection.
- Perform membership tests efficiently.
- Carry out mathematical set operations like union and intersection.

## Summary

Sets are a powerful and flexible data structure in Python for handling collections of unique items. Their ability to perform set operations easily makes them especially useful in many programming tasks.

---
---

# Python - Set: Set Operations

**Union:** Combines elements from both sets (no duplicates) 

    A = {1, 2, 3}
    B = {3, 4, 5}
    print(A | B)   # (1, 2, 3, 4, 5)
    print(A.union(B))   # Same as above

**Intersection:** Returns elements common to both sets

    A = {1, 2, 3}
    B = {3, 4, 5}
    print(A & B)  # {3}
    print(A.intersection(B)) # Same as above

**Difference:** Returns elements in first set but not in second

    A = {1, 2, 3}
    B = {3, 4, 5}
    print(A - B)    # {1, 2}
    print(A.difference(B))   # Same as above
    print(B - A)    # {4, 5} (order matters!)

**Symmetric Difference:** Returns elements in either set but not in both

    A = {1, 2, 3}
    B = {3, 4, 5}
    print(A ^ B)               # {1, 2, 4, 5} 
    print(A.symmetric_difference(B))  # Same as above
    # `^` is this known as carat symbol

### Subset and Superset Checking

    A = {1, 2, 3}
    B = {1, 2, 3, 4, 5}
    print.(A.issubset(B))      # True - all elements of A are in B
    print(A <= B)              # True
    print(A < B)               # True
    print(B.issuperset(A))     # True - B contains all elements of A
    print(B >= A)              # True - Same as above
    print(B > A)               # True - proper superset (B notequalto A)

### Disjoint Set Checking

    A = {1, 2, 3}
    C = {4, 5, 6}
    print(A.isdisjoint(C))    # True - no comman elements


---
---

# Set Operations

In Python, sets are unordered collections of unique elements. They support various operations that allow you to perform mathematical set operations such as unioun, intersection, difference, and symmetric difference. Understanding these operations is essential for working effectively with sets in Pyhton.

## Basic Set Operations

1. Union
The union of two sets return a new set containing all unique elements from both sets.

	```
	# Example of Unioun operation
	set1 = {1, 2, 3} 
	set2 = {3, 4, 5} 
	union_set = set1.union(set2)
	print(union_set)
	```

2. Intersection
The intersection of two sets returns a new set containing only the elements that are present in both sets.

	```
	# Example of Intersection operation
	set1 = {1, 2, 3}
	set2 = {2, 3, 4}
	intersection_set = set1.intersection(set2)
	print(intersection_set)
	```

3. Difference
The difference between two sets returns a new ser containing elements present in the first set but not in the second.

	```
	# Example of Difference operation
	set1 = {1, 2, 3, 4}
	set2 = {3, 4, 5}
	difference_set = set1.difference(set2)
	print(difference_set)
	```

4. Symmetric Difference
The symmetric difference of two sets returns a new set with elements in either of the sets but not in both.

	```
	# Example of symmetric Difference operation
	set1 = {1, 2, 3}
	set2 = {3, 4, 5}
	sys_diff_set = set1.symmetric_difference(set2)
	print(sys_diff_set)
	```

### Additional Set Methods

- **issubset():** Returns True if all elements of the set are in another set.

- **issuperset():** Returns True if the set contains all elements of another set.

- **copy():** Returns a shallow copy of the set.

	```
	# Example of issubset and issuperset
	a = {1, 2}
	b = {1, 2, 3, 4}
	print(a.issubset(b))      # True
	print(b.issuperset(a))    # True
	```

## Conclusion
Set operations in Python are powerful tools to handle unique collections and perform mathematical set theory operations efficiently. Using these methods can simplify your data processing tasks, especially when dealing with large datasets or when the uniqueness of elements is important.

---
---

# 
