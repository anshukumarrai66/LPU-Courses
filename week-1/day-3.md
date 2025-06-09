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


# Python Tuple - Basic Operation

## Basic Operations

### Accessing Elements

    colors = ("red", "green", "blue")

    # Indexing (zero-based)
    first_color = colors[0]   # "red"
    last_color = colors[-1]   # "blue"


    # Slicing
    subset = colors[0:2]      # ("red", "green")

    print(first_color)
    print(last_color)
    print(subset)


### Concatenation

    tuple1 = (1, 2, 3)
    tuple2 = (4, 5, 6)

    # Using `+` Operator
    combined = tuple1 + tuple2 # (1, 2, 3, 4, 5, 6)
    print(combined)


### Repetition

    # Using `*` operator
    repeated = (1, 2) * 3  # (1, 2, 1, 2, 1, 2)
    print(repeated)

### Membership Testing

    colors = ("red", "green", "blue")

    # Using `in` operator
    is_present = "green" in colors    # True
    not_present = "yellow" in colors  # False

    print(is_present)
    print(not_present)

### Unpacking

    # Tuple unpacking
    person = ("Alice", 25, "Engineer")
    name, age, profession = person
    print(name, age, profession)

    # Extended unpacking (Python 3.x)
    numbers = (1, 2, 3, 4, 5)
    first, *middle, last = numbers  # first=1, middle=[2, 3, 4], last=5
    print(first)
    print(middle)
    print(last)

## Immutability Concept

Tuples are immutable, meaning their contents cannot be changed after creation. This fundamental property has several implications:

    colors = ("red", "green", "blue")

    # This will raise a TypeError
    colors[0] = "yellow"

    # To "modify" a tuple, you must create a new one
    colors = ("yellow",) + colors[1:]   # ("yellow", "green", "blue")
    print(colors)

### Immutability Benefits:

- **Data Integrity:** Prevents accidental modification

- **Thread Safety:** Can be shared between threads without locks

- **Hashability:** Can be used as dictionary keys or in sets

 ### Tuples offer several performance benefits compared to lists:

 - Memory Efficiency:
    - Use less memory than lists for the same elements
    - Fixed size allocation (no over-allocation)
- Speed Advantages:
    - Faster creation and access times
    - Optimized for iteration

## Performance Advantages Over Lists

    # Implementation Differences:

    import sys
    # Memory comparison
    list_ex = [1, 2, 3, 4, 5]
    tuple_ex = (1, 2, 3, 4, 5)
    print(f"List size: {sys.getsizeof(list_ex)} bytes")
    print(f"Tuple size: {sys.getsizeof(tuple_ex)} bytes")


# Python Tuple - Accessing Elements

## Positive Indexing

Positive indexing allows access to tuple elements starting from the beginning (left side) of the tuple.

    my_tuple = (10, 20, 30, 40, 50)

    # Accessing elements with positive indices

    first_element = my_tuple[0]   # 10
    second_element = my_tuple[1]  # 20
    third_element = my_tuple[2]   # 3o

    print(first_element, second_element, third_element)

- Indexing starts at 0 (zero-based indexing)
- The index value increases as we move from left to right