
# Python Set
# Set Comprehension


### Basic Syntax and Usage

	# Creating a set with comprehension
	squares = {x**2 for x in range(10)}
	print(squares)            # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

### Filtering in Set Comprehensions

	# Filtering with conditions
	even_squres = {x**2 for x in range(10) if x % 2 == 0}
	print(even_squares)       # {0, 4, 16, 36, 64}


---
***Content From PDF***
---

# Introduction to Sets in Python
A **set** is an unordered collection of unique elements in Python. Sets are useful when you want to store multiple items but automatically avoid duplicates. They support operations like union, intersection, difference, and more, similar to mathematical sets.

## Key Characteristics of Sets

- Sets are unordered - the items have no defined order.
- Each element in a set is unique - duplicates are automatically remove.
- Sets are mutable - you can add or remove elemets.
- Sets do not support indexing or slicing beacause they are unordered.


## Creating a Set

Sets can be created using curly braces `{}` or the `set()` constructor.

	# Creating a set using curly braces
	my_set = {1, 2, 3, 4}

	# Creating a set using the set() constructor from a list (remove duplicates)
	my_set2 = set([1, 2, 2, 3, 4, 4])

**Note:** To create an empty set, you must use `set()`. Using `{}` creates an empty dictionary.

	empty_set = set()   # Correct way to create an empty set
	empty_set = {}      # This creates an empty dictionary, not a set

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


## Use Case for Sets

Sets are ideal when you need to:

- Remove duplicates from a collection.
- Perform membership tests efficiently.
- Carry out mathematical set operations like union and intersection.

## Summary

Sets are a powerful and flexible data structure in Python for handling collections of unique items. Their ability to perform set operations easily makes them especially useful in many programming tasks.
