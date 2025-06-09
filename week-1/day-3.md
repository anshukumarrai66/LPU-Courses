# Tuple Basics

# Introduction to Tuples

## What are Tuples?

    Tuples are an essential data structure in Python that allows you to store multiple items in a single variable. They are ordered immutable collections, typically used to group related data together.

- A simple tuple coordinates = (10.5, 20.3)
- A tuple with mixed data types student = ("Alice", 21, "Computer Science")
- Empty tuple empty_tuple = ()
- Single element tuple (note the comma) single_item = (42,)


## Key Characteristics of Tuples

- **Ordered Collection:** Items in a tuple maintain their insertion order and can be accessed by index.

- **Immutable:** Once created, the elements inside a tuple cannot be changed, added, or removed.

- **Heterogeneous:** Can store elements of different data types.

- **Nestable:** Can contain other tuples or complex data structures.

- **Hashable:** If all elelments are hashable, tuples can be used as dictionary keys or set elements.


## Basics Operations

### Creating Tuples

    # Direct assignment
    colors = ("red", "green", "blue")

    # Using the tuple() constructor
    numbers = tuple([1, 2, 3, 4, 5])

    # Tuple packing
    person = "John", 30, "Developer" # Parentheses are optional

    print(colors)
    print(numbers)
    print(person)

---
---

# Introduction to Tuples in Python

A **tuple** is one of the built-in data types in Python used to store a collection of items. Tuples are ordered, immutable, and can hold heterogeneous data types (meaning elements of different types can be stored together).

## Key Characteristics of Tuples

- **Ordered:** Tuples maintain the order of elements as they were defined.
- **Immutable:** Once created, elements of a tuple cannot be changed, added, or removed.
- **Allows duplicates:** Tuples can contain duplicate elements.
- **Heterogeneous:** Tuples can store different data types together, like integers, strings, and floats.

## Creating Tuples

Tuples are created by placing comma-seprated values inside parentheses `()`. Parentheses are optional but recommended for clarity.

    # Creating a tuple with integers
    my_tuple = (1, 2, 3, 4)

    # Tuple without parentheses
    another_tuple = 5, 6, 7

    # Tuple with mixed data types
    mixed_tuple = (10, "Hello", 3.14, True)

    # Single element tuple (note the trailing comma)
    single_element_tuple = (9,)


## Accessing Tuple Elements

Since tuples are ordered, elements can be accessed by their index using square brackets `[]` indexing starts at 0.

    my_tuple = (10, 20, 30, 40)

    print(my_tuple[0])  # First element
    print(my_tuple[2])  # Third element


## Why Use Tuples?

- **Immutability:** Guarantees the data will not be changed accidentally.

- **Faster than lists:** Tuples have a smaller memory footprint and can be processed faster.

- **Used as keys:** Tuples can be used as  keys in dictionaries because they are immutable.

## Tuple Operations

Tuples support several operations like concatenation, repetition, membership checking, and slicing.

    # Concatenation
    t1 = (1, 2)
    t2 = (3, 4)
    t3 = t1 + t2
    print(t3)

    # Repetition
    t4 = t1 * 3
    print(t4)

    # Membership
    print(2 in t1)

    # Slicing
    print(t3[1:4])

## Summary

Tuples are simple, immutable sequences that can store multiples values. Their immutabiility makes them useful when you want to ensure data integrity and optimize performance. Understanding tuples is essential for effective Python programming.