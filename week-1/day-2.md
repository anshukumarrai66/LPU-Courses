# Python Lists - Loop Operations

Looping through list items in Python refers to iterating over each element within a list. We do sot o perform the desired operations on each item. These operations include list modification, conditional operations, string manipulation, data analysis, etc.


## Loop Through Lists Items Method

- Loop through a Python List using For Loop
- Loop through a Python List using While Loop

## Python List - For Loop Operation

### Syntax
    ```
    for item in list:
        # Code block to execute
    ```

    ```
    fruits = ["apple", "banana", "cherry"]

    # Loop through the list items
    for fruit in fruits:
        print(fruit)
    ```

    ```
    fruits = ["apple", "banana", "cherry"]

    # Loop through indexes
    for i in range(len(fruits)):
        print(f"index{i}: {fruits[i]}")
    ```


## Python List - While Loop Operation

### Syntax

    ```
    While condition:
        # Code block to execute
    ```

    ```
    fruits = ["apple", "banana", "cherry"]

    # While loop with counter
    i = 0 
    while i < len(fruits):
        print(fruits[i])
        i += 1
    ```

# Loop Operations in List
In Python, lists are one of the most versatile and commonly used data structures. Looping through lists is a fundamental operation that allows you to process each element one by one. This chapter covers the basic techniques for performing loop operations on lists.

1. **Using for Loop to Iterate Over a List** <br>
The for loop is the simplest and most common way to iterate over the elements of a list.
    
    ```
    fruits = ['apple', 'banana', 'cherry']

    for fruit in fruits:
        print(fruit)
    ```

2. **Looping Using Indexes with range()** <br>
You can also loop through the list by index using the range() function. This is useful when you need to know the index of the current element.
    ```
    numbers = [10, 20, 30, 40]

    for i in range(len(numbers)):
        print(f"Index {i}: {numbers[i]}")
    ```

3. **Using while Loop to Traverse a List** <br>
A while loop can also be used to iterate through a list, although it is less common than a for loop.
    ```
    colors = ['red', 'green', 'blue']
    i = 0

    while i < len(colors):
        print(colors[i])
        i += 1
    ```

4. **Loop with Conditionals** <br>
You can add conditions inside loops to process only specific elements.

    ```
    numbers = [5, 10, 15, 20, 25]

    for num in numbers:
        if num % 10 == 0:
            print(num)
    ```

5. **Nested Loops with Lists** <br>
When dealing with lists of lists (2D lists), nested loops are used.

    ```
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    for row in matrix:
        for element in row:
            print(element, end=' ')
        print()
    ```

6. **Looping with `enumerate()`**
The **enumerate()** function allows you to loop through a list while having access to both the index and the element.

    ```
    animals = ['cat', 'dog', 'rabbit']

    for index, animal in enumerate(animals):
        print(f"{index}: {animal}")
    ```

### Summary

Loop operations in lists provide powerful ways to access and manipulate list elements. The for loop is the most straightforward method, while other techniques like looping with indexes, using while loops, nested loops, and enumerate() offer additional flexibility for different use cases.

---
---


# Python Lists - Comprehension

List comprehension is a concise way to create lists in Python using a single line of code.

It combines the functionality of a for loop, an optional condition (filter), and a transformation into a compact syntax.

### Syntax
    ```
    [expression for item in iterable if condition]
    ```

- **expression:** The output for each item
- **item:** The variable representing each element
- **iterable:** The sequence being precessed
- **condition:** Optional filter (only include items that match)


### Basic List Comprehension 
    ```
    # Create a list of squares from 0 to 9
    squares = [x**2 for x in range(10)]

    print(squares)
    # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
    ```

### With Conditional Filter
    ```
    # Get only even numbers from 0 to 9
    even_numbers = [x for x in range(10) if x % 2 == 0]
    print(even_numbers)
    # Output: [0, 2, 4, 6, 8]
    ```

### List Transformation
    ```
    # Convert strings to uppercse
    fruits = ["apple", "banana", "cherry"]
    uppercase_fruits = [fruit.upper() for fruit in fruits]

    print(uppercase_fruits)
    # Output: ["APPLE", "BANANA", "CHERRY"]
    ```

### Advantages

**✔️ More Concise** <br> Fewer lines of code than traditional loops <br>
**✔️ More Readable** <br> Clearly expresses intent in many cases <br>
**✔️ Better Performance** <br> Often faster than equivalent loop constructs <br>
**✔️ Pythonic** <br> Following Python's philiosophy of clean code


---

## Chapter on Comprehension in Lists

List comprehension is a concise and powerful way to create lists in Python. It allows you to generate new lists by applying an expression to each item in an existing iterable, such as a list or range, optionally including a condition to filter items.

### What is List Comprehension?
List comprehension provides a shorter syntax for creating a new list based on the values of an existing list or iterable. Instead of writing multiple lines of code with loops and conditional statements, you can write a single, readable line that builds the list.

### Basic Syntax
The basic syntax of a list comprehension is: <br>
   
    
    [ expression for item in iterable ]
    

This will create a new list by evaluating the `expression` for each `item` in the `iterable`.

### Example 1: Creating a List of Squares
Suppose you want to create a list of squares of numbers from 0 to 9. <br>
    
    
    squares = [x**2 for x in range(10)]
    print(squares)

### Adding Conditions (Filtering Items)
You can also add a condition (if statement) to include only items that satisfy a certain criterion.

### Example 2: List of Even Numbers
Create a list of even numbers between 0 and 19.
    
    evens = [x for x in range(20) if x % 2 == 0]
    print(evens)


### Using Functions or Methods in List Comprehension
You can call functions or methods within the expression.

### Example 3: Stripping Whitespace from a List of Strings

    names = ["  Alice  ", " Bob", "Charlie  "]
    clean_names = [name.strip() for name in names]
    print(clean_names)

### Nested List Comprehensions
List comprehensions can be nested to handle multi-dimensional data, such as lists of lists.

### Example 4: Flattening a List of Lists

    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    flat = [num for row in matrix for num in row]
    print(flat)

### Benefits of List Comprehension
- More concise and readable code
- Often faster than equivalent loops
- Encourages functional programming style

### Summary
List comprehension is an elegant and efficient way to create and manipulate lists in Python. By mastering this syntax, you can write cleaner and more Pythonic code.



---
---


# Python Lists - Copy Operations


Copying a list in Python refers to creating a new list that contains the same elements as the original list.

There are different methods for copying a list, includiing, using slice notation, the list() function, and using the copy() method.

### Main Issue with copy

In Python, when you assign a list to a new variable, you're creating a reference to the original list, not a copy.

    # The reference problem
    original = ["apple", "banana", "cherry"]
    reference = original

    # Modifying 'reference' also changes 'original'
    reference.append("orange")

    print(original) # ["apple", "banana", "cherry", "orange"]
    print(reference) # ["apple", "banana", "cherry", "orange"]
    

## Pyhton List - Shallow Copy

A shallow copy in Python creates a new object, but instead of copying the elements recursively, it copies only the reference to the original elements.

    # Method 1: Using the copy() method
    original = ["appple", "banana", "cherry"]
    copy1 = original.copy()

    # Method 2: Using list() constructor
    copy2 = list(original)

    # Method 3: Using slicing
    copy3 = original[:]
    # copy3 = original[0:2]   # ["apple", "banana"]

    # Now modifying the copy won't affect original
    copy1.append("orange")

    print(original)  # ["apple", "banana", "cherry"]
    print(copy1)     # ["apple", "banana", "cherry", "orange"]
    print(copy2)     # ["apple", "banana", "cherry"]
    print(copy3)     # ["apple", "banana", "cherry"]


## Python List - Deep Copy

A deep copy in Python creates a completely new object and recursively copies all the objects referenced by the original object are duplicated, resulting in a fully independent copy where changes made to the copied object do not affect the original object, and vice versa.

for nested lists, use `copy.deepcopy()` to create a completely independent copy:

    import copy

    # Deep copy creates completely independent copies
    nested = ["apple", ["banana", "cherry"]]
    deep_copy = copy.deepcopy(nested)

    # Modifying deep copy dosen't affect original
    deep_copy[1][0] = "orange"

    print(nested)  # ["apple", ["banana", "cherry"]]
    print(deep_copy)  # ["apple", ["orange", "cherry"]]



---
---

# Copy Operations in Lists

In Python, lists are mutable objects, which means their contents can be changed. Sometimes, when working with lists, you need to create a copy of a list to avoid modifying the original list unintentionally. There are several ways to copy lists in Python. This chapter explains different methods to copy lists and their characteristics.

1. Assignment Operator (=)

    - Using the assignment operator does not create a new copy of the list. Instead, it creates a new reference to the same list object. Any modification via one reference affects the other.

        ```
        original_list = [1, 2, 3]
        copied_list = original_list
        copied_list.append(4)
        ```

    - Both `original_list` and `copied_list` will reflect the change.

2. Using the `list()` Constructor

    - The `list()' function creates a shallow copy of the original list. It copies the outer list but not nested mutable objects inside it.

        ```
        original_list = [1, 2, 3]
        copied_list = list(original_list)
        copied_list.append(4)
        ```

3. Using the `copy()` Method

    - Lists in Python have a `copy()` method that returns a shallow copy of the list.

        ```
        original_list = [1, 2, 3]
        copied_list = original_list.copy()
        copied_list.append(4)
        ```


4. Using List Slicing

    - Another common way to create a shallow copy of a list is using slicing syntax.

        ```
        original_list = [1, 2, 3]
        copied_list = original_list[:]
        copied_list.append(4)
        ```
5. Deep Copying Lists

    - All the above methods create shallow copies. If the list contains nested mutable objects (like lists within lists), changes in the nested objects in the copy will reflect in the original list. To avoid this, use the `deepcopy()` function from the `copy` module.

## Summary

- Assignment (`=`) creates a reference, not a copy

- `list()`, `copy()`, and slicing create shallow copies.

- Use `copy.deepcopy()` to create deep copies of nested lists.


---
---


# Challenge on Accessing Lists

## Problem 1 - Get First and Last Elements

write a Python program that takes a list as input and returns a tuple containing the first and last elements of the list. If the list has only one elements, return that element twice. The program should handle non-empty lists only.

### Example 1

#### Input:

    list = [10, 20, 30, 40, 50]

#### Output:

    (10, 50)

#### Explanation:

The first element is `10` (at index `0`) and the last element is `50` (at index `-1`), so the program returns the tuple (`10, 50`).

### Example 2

#### Input

    list = ["apple", "orange", "banana"]

#### Output:

    ('apple', 'banana')

#### Explanation:

The list has only one element `"apple"`, so both first and last elements are the same, returning (`"apple", "apple"`)

### Constraints

- List can contain any data type
- Return type should be **tuple**
- Use **indexing** to access elements
- Time Complexity: o(1)
- Space Complexity: o(1)

    ```
    def first_and_last(input_list):
        # Code Starts

        if not input_list:
            print("List must be non-empty.")
        
        if len(input_list) == 1:
            return (input_list[0], input_list[0])
        else:
            return (input_list[0], input_list[-1])

        # Code Ends
    # Predefined inputs
    list = [10, 20, 30, 40, 50]

    # Function call
    print(first_and_last(list))  # Expected Output: (10, 50)
    ```

## Problem 2 - Get Middle Element(s) (Not Attempted)

Write a Python program that takes a list as input and return the middle element(s)

### Example 1

#### Input:

    list = [1, 2, 3, 4, 5]

#### Output:

    3

#### Explanation:

The list has 5 elements (odd), so the middle element is at index 2, which is 3.

### Example 2

#### Input:

    list = [10, 20, 30, 40]

#### Output:

    [20, 30]

#### Explanation:

The list has 4 elements (even), so the two middle elements are at indices `1` and `2`, which are `20` and `30`.

### Constraints

- Input list must not be empty
- List can contain any data type
- For **odd** length: return **single element**
- For **even** length: return **list of two elements**
- Time Complexity: o(1)
- Space Complexity: o(1)

    ```
    def get_middle(input_list):
        # Code Starts

        list_length = len(input_list)
        middle = list_length // 2

        if list_length % 2 == 1:
            # Odd length: return single middle element
            return input_list[middle]
        else:
            # Even length: return two middle elements
            return [input_list[middle - 1], input_list[middle]]

        # Code Ends

    # Predefined inputs
    list = [1, 2, 3, 4, 5]

    # Function call
    print(get_middle(list))  # Expected Output: 3
    ```

## Problem 3 - Get element at specific index

Write a Python program that takes a list and an index as input and returns the element at that specific index. If the index is out of bounds, the program should return `None`. The program should handle both positive and negative indices.

### Example 1

#### Input:

    input_list = [10, 20, 30, 40, 50]
    index = 2

#### Output:

    30

#### Explanation:

The element at index `2` is `30`, so the program return `30`.


### Example 2

#### Input:

    input_list = ["a", "b", "c"]
    index = 1

#### Output:

    "c"

#### Explanation:

The element at index `-1` (last element) is `"c"`, so the program returns `"c"`.


## Constraints

- List can be empty or contain any data type
- Index can be positive, negative, or Zero
- Return `None ` for out-of-bounds indicies
- Time Complexity: o(1)
- Space Complexity: o(1)

    ```
    # Function to return the element at a given index or None if index is out of bounds
    def get_element_at_index(input_list, index):
        # Code Starts

        if -len(input_list) <= index < len(input_list):
            return input_list[index]
        else:
            return None

        # Code Ends

    # Example 1
    input_list = [10, 20, 30, 40, 50]
    index = 2
    print(get_element_at_index(input_list, index))  # Expected Output: 30
    ```

