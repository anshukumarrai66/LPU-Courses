# Lists: Basics & Access

## Python List - Introduction

- A list in Python is a collection of items - its like a container that can store many items. It can hold numbers, text and mix of both.

- Python Lists are one of the most versatile and frequently used data structures. They are ordered and mutable collections of items. Python Lists are one of the built-in data types.

**Think of it like:**

```
["apple", "banana", "orange"]

[1, 2, 3, 4, 5]

["a", "b", "c", "d"]

[25.50, True, -55, 1+2j]
```

---

## Python List - Key Characteristics

- Created using square brackets: my_list = [1, 2, 3, "hello", True]
- The items in a Python list need not be of the same data type.
- Access elements via zero-based indexing: my_list[0]
- Support negative indexing: my_list[-1] (last element)
- Support slicing for subsections: my_list[1:3]
- Mutable - can modify elements directly: my_list[0] = 100
- Common methods: append(), insert(), remove(), pop()
- List comprehensions for efficient creation: [x*2 for x in range(5)]
- Buit-in functions: len(), min(), max(), sum()

---

## Python List - Basic Operations
```
# Creating a Python List

fruits = ["apple", "banana", "cherry"]
print(fruits) # Output: ['apple', 'banana', 'cherry']
```

---

```
# Adding elements to a Pyhton List

fruits = ["apple", "banana", "cherry"]

fruits.append("orange") # Add to the end
print(fruits)
fruits.insert(1, "mango") # Insert at index 1
print(fruits) # Output: ['apple', 'mango', 'banana', 'cherry', 'orange']
```

---

```
# Removing elements from a Python List

fruits = ['apple', 'mango', 'banana', 'cherry', 'orange']
fruits.remove("banana") # Remove by value
removed = fruits.pop()  # Remove & return last item
print(removed)          # Output: 'orange'
print(fruits)           # Output: ['apple', 'mango', 'cherry']
```

---

```
# Concatenataing two Python Lists

fruits = ['apple', 'mango']
vegetables = ['potato', 'tomato']

final = fruits + vegetables

print(final)     # Output: ['apple', 'mango', 'potato', 'tomato']

```

---

```
# Repetition Operation in Python List

final = ['Hi!'] * 4

print(final)     # ['Hi!', 'Hi!', 'Hi!', 'Hi!']
```

---

```
# Membership Operation in Python List

result = 3 in [1, 2, 3]
print(result)   # true

result = 5 in [1, 2, 3]
print(result)   # false
```

---

## Python Lists Overview

- In Python, a ***list*** is a built-in data type used to store multiple items in a single variable. Lists are ordered, mutable (changeable), and allow duplicate values. They are defined by placing all the items (elements) inside square brackets [], separated by commas.

### Creating a List

- You can create a list by assigning it to a variable:

```
my_list = [1, 2, 3, 4, 5]
print(my_list)

# Here is the output:
# [1, 2, 3, 4, 5]
```

---

### Accessing List Items

- You can access list items by referring to their index (starting from 0):

```
fruits = ["apple", "banana", "cherry"]
print(fruits[0])
print(fruits[1])

# Here is the output:
# apple
# banana
```

---

### Negative Indexing
- Negative indexing starts from the end of the list:

```
fruits = ["apple", "banana", "cherry"]
print(fruits[-1])
print(fruits[-2])

# Here is the output:
# cherry
# banana
```

---
### List Slicing
- You can return a range of items using slicing:

```
numbers = [0, 1, 2, 3, 4, 5, 6]
print(numbers[2:5])

# Here is the output:
# [2, 3, 4]
```

---
### Modifying List Items
- Lists are mutable, so you can change their items:

```
colors = ["red", "blue", "green"]
colors[1] = "yellow"
print(colors)

# Here is the output:
# ['red', 'yellow', 'green']
```


---
### List Methods
- Python provides many built-in methods to work with lists. Some common ones include:

    - append() – Adds an element at the end of the list
    - insert() – Adds an element at the specified position
    - remove() – Removes the specified item
    - pop() – Removes the item at the specified position
    - sort() – Sorts the list
    - reverse() – Reverses the order of the list

```
names = ["Alice", "Bob", "Charlie"]
names.append("David")
names.sort()
print(names)

# Here is the output:
# ['Alice', 'Bob', 'Charlie', 'David']
```

---
### List Length
- You can find the number of items in a list using the len() function:

```
languages = ["Python", "Java", "C++"]
print(len(languages))

# Here is the output:
# 3
```


---
### Nesting Lists
- Lists can contain other lists, creating a nested list:

```
matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix[1][0])

# Here is the output:
# 3
```

---
### Summary
- Lists are one of the most versatile and frequently used data structures in Python. Understanding how to create, modify, and access list items is essential for Python programming.


---

# Python Basics
## Python List - Accessing Items

### Positive Indexing

- Use to access values using square brackets ```[]```
- index start at ```0``` for the first element
- Each subsequent element increments by one
- Last item's index is always length ```-1```

    ```
    fruits = ["apple", "banana", "cherry", "date"]

    first_fruit = fruits[0]   # "apple"
    second_fruit = fruits[1]   # "banana"
    last_fruit = fruits[3]   # "date"
    ```


---
### Negative Indexing

- Use to access elements from the end of the list
- ```-1``` refers to the last element
- ```-2``` refers to the second-to-last element
- convenient way to access end elements without knowing list length

    ```
    fruits = ["apple", "banana", "cherry", "date"]

    last_fruit = fruits[-1]   # "date"
    third_fruit = fruits[-2]   # "cherry"
    first_fruit = fruits[-4]   # "apple"
    ```




---
### Visual Representation

``` fruits = ["apple", "banana", "cherry", "date"]```

| Items          | "apple" | "banana" | "cherry" | "date" |
|----------------|---------|----------|----------|--------|
| Positive Index | 0       | 1        | 2        | 3      | 
| Positive Index | -4      | -3       | -2       | -1     | 


### Handling Index Errors

- Accessing an index outside the range causes an IndexError
- Always ensure you index is within bounds
- Use ```len(list)``` to check the list length

    ```
    fruits = ["apple", "banana", "cherry"]

    # Safe access
    if len(fruits) > 3:
        fourth_fruit = fruits[3]
    else:
        print("Index out of range")
    ```

<br>

## Accessing Items in List
- In Python, a list is an ordered collection of items which can be accessed by their index positions. Understanding how to access elements in a list is fundamental for working efficiently with data structures in Python.

### Indexing
- Each item in a list has a position number called an index. The indexing starts at 0, meaning the first item is at index 0, the second at index 1, and so on.

- To access an item, use the syntax:

    ```list_name[index]```

### Example:

```
fruits = ['apple', 'banana', 'cherry']
print(fruits[0])  # Access first item
print(fruits[2])  # Access third item
```


### Negative Indexing
- Python also supports negative indexing which allows you to access items from the end of the list. The last item is at index -1, the second last at -2, and so forth.

### Example:

```
fruits = ['apple', 'banana', 'cherry']
print(fruits[-1])  # Access last item
print(fruits[-2])  # Access second last item
```


### Slicing
- You can access a range or subset of items in a list using slicing. The syntax for slicing is:

    ```list_name[start_index:end_index]```

- This returns a new list containing items from start_index up to but not including end_index.

### Example:
```
fruits = ['apple', 'banana', 'cherry', 'date', 'fig']
print(fruits[1:4])  # Access items from index 1 to 3
print(fruits[:3])   # Access first three items
print(fruits[2:])   # Access from index 2 to the end
```

### Accessing Items in Nested Lists
- Lists can contain other lists as elements. To access items inside nested lists, use multiple indices.

### Example:

```
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
print(matrix[0][1])  # Access element in first row, second column
print(matrix[2][0])  # Access element in third row, first column
```

### Summary
- Use positive indices starting from 0 to access list elements from the front.
- Use negative indices starting from -1 to access list elements from the end.
- Use slicing to access a range of elements.
- Use multiple indices to access elements in nested lists.

---
---

# Python Basics
## Python Lists - Applications & Features

- Storing Collection of items
- Filtering and Transforming Data
- Dynamic Arrays
- A Python list is mutable
- Implementing Queues or Stacks
- Data Aggregation or Analysis

### Storing collections of Items

- Python Lists store multiple related values in a single container:
    ```
    # A collection of student names

    students = ["Alex", "Tylor", "Jordan"]

    # A collection of text scores

    scores = [95, 87, 92, 76, 88 ]
    ```

### Filtering and Transforming Data

- Lists allow powerful data manipulation:

    ```
    # Filter for scores above 90

    scores = [95, 87, 92, 76, 88]
    high_scores = [s for s in scores if s > 90]
    print(high_scores)   # [95, 92]

    # Transform all scores (add 5 bonus points)

    adjusted = [score + 5 for score in scores]
    print(adjusted)   # [100, 92, 97, 81, 93]
    ```


###  Dynamic Arrays

- Python Lists automatically resize as elements are added / removed:
    ```
    # Consider an empty list
    numbers = []

    # Dynamically add elements
    for i in range(5):
        numbers.append(i*10)
    
    print(numbers) # [0, 10, 20, 30, 40]

    # Resize by removing elements from the last
    numbers.pop()
    numbers.pop()

    print(numbers) # [0, 10, 20]
    ```


### A Python List is Mutable

- Python Lists can be modified after creation:

    ```
    colors = ["red", "green", "blue"]

    # Modify existing elements
    color[0] = "yellow"

    # Add/remove elements
    colors.append("purple")
    colors.remove("green")

    print(colors) # ['yello', 'blue', 'purple']
    ```

### Implementing Queues or Stacks

- Python Lists efficiently implement common data structures:

    ```
    # Stack implementation (LIFO)
    stack = []
    stack.append("task1") # Push
    stack.append("task2")
    stack.append("task3")
    last_task = stack.pop() # Pop
    print(last_task)  # "task3"


    # Queue implementation (FIFO)
    queue = []
    queue.append("first")
    queue.append("second")
    first_out = queue.pop(0) # First in, first out
    print(first_out)   # "first"
    ```

### Data Aggregation or Analysis

- Python List support built-in aggregation functions:

    ```
    data = [15, 8, 22, 37, 14]

    # Basic statistics
    total = sum(data) # 96
    average = sum(data)/len(data) # 19.2
    maximum = max(data) # 37
    minimum = min(data) # 8

    # Sorting for analysis
    sorted_data = sorted(data)
    print(sorted_data)   # [8, 14, 15, 22, 37]

    median = sorted_data[len(sorted_data)//2]
    print(median)  # 15
    ```


## Application and Features of Lists in Python

- Lists are one of the most versatile and widely used data structures in Python. They allow you to store multiple items in a single variable and provide powerful features that help in organizing, managing, and manipulating data efficiently. This chapter explores the key applications and features of lists to help you understand why lists are essential in Python programming.

### Features of Lists
- **Ordered:** Lists maintain the order of the elements. The position of items is preserved, and you can access elements by their index.

- **Mutable:** Lists can be modified after creation. You can add, remove, or change elements.

- **Heterogeneous:** Lists can store items of different data types like integers, strings, floats, and even other lists.

- **Dynamic Size:** Lists can grow or shrink dynamically as elements are added or removed.

- **Supports Duplicate Elements:** Lists allow duplicate values, which means the same value can appear multiple times.

- **Supports Nesting:** Lists can contain other lists as elements, enabling the creation of complex data structures like matrices.


### Applications of Lists

- Lists are used extensively in various programming scenarios. Some common applications include:

    - **Storing Collections of Items:** Lists provide a convenient way to keep track of multiple related items, such as student names, product IDs, or scores.

    - **Iteration and Processing:** You can loop through list elements to perform operations like calculations, filtering, or data transformations.

    - **Dynamic Data Storage:** When the number of elements changes frequently during program execution, lists handle the dynamic resizing efficiently.

    - **Implementing Stacks and Queues:** Lists can be used to implement stack (LIFO) and queue (FIFO) data structures using built-in methods like append(), pop(), and insert().

    - **Data Grouping and Nesting:** Lists allow nesting, making it possible to group related data together, such as matrices (list of lists) or complex hierarchical structures.

    - **Manipulating Text or Data Streams:** Lists can store sequences of characters or tokens, useful in parsing or processing textual data.


### Example: Basic List Operations

```
# Creating a list of fruits
fruits = ["apple", "banana", "cherry"]

# Adding an element to the list
fruits.append("orange")

# Removing an element
fruits.remove("banana")

# Accessing elements by index
first_fruit = fruits[0]

# Iterating over the list
for fruit in fruits:
    print(fruit)
```


### Example: Using Lists as a Stack

```
stack = []

# Adding elements (push)
stack.append(1)
stack.append(2)
stack.append(3)

# Removing elements (pop)
print(stack.pop())  # Outputs 3
print(stack.pop())  # Outputs 2
print(stack)        # Remaining elements
```


### Example: Nested Lists (Matrix Representation)

```
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing element in second row, third column
print(matrix[1][2])
```

### Summary
- Lists in Python are flexible and powerful data structures used for storing collections of items. Their ability to maintain order, support heterogeneous data, and allow dynamic resizing makes them ideal for numerous applications ranging from simple data storage to complex data manipulation and algorithms. Mastery of lists is fundamental for effective Python programming.

---
---

# Challenge on List Basics

## Assesment 1 - Create and Count List Elements

- Write a Python function that creates a list from given elements and returns the total count of elements in the list. The function should accept any number of arguments and convert them into a list, then return the length of that list.

### Example 1

#### Input:

```list = 1, 2, 3, 4, 5```

#### Output:

``` 5 ```


#### Explanation:

- The function creates a list [1, 2, 3, 4, 5] from the given arguments and returns its length, which is 5.


### Example 2

#### Input:

```list = "apple", "banana", "cherry"```

#### Output:

``` 3 ```

#### Explanation:

- The function creates a list ["apple", "banana", "cherry"] from the given arguments and returns its length, which is 3.


### Constraints

- The function should accept variable number of arguments

- Arguments can be of any data type

- Return type should be integer

- Time Complexity: `O(n)` where `n` is the number of arguments

- Space Complexity: `O(n)` where `n` is the number of arguments


```

```



---









---









---









---









---














