# Python Dictionary
# Introduction

## What is a Dictionary?

A dictionary in Python is a collection of key-value pairs where each key is unique and maps to a specific value.

- Think of it like a real-world dictionary where you look up a word (the key) to find its meaning (the value).

## Key characteristics:

- Stores data in key-value pairs.
- Keys must be unique.
- Values can be any data type.
- Unordered collection (though insertion order in preserved in Python 3.7+)
- Mutable (can be changed after creation).


## Dictionary Syntax and Structure

**Dictionaries use curly braces `{}` with key-value pairs separated by colons `:` and commas `,`.**

### Basic Syntax:

	dictionary_name = {
		key1: value1,
		key2: value2,
		key3: value3
	}


### Example:

	# Simple dictionary example
	student_grades = {
		"Alice": 85,
		"Bob": 92,
		"Charlie": 78
	}
	print(student_grades)


### Example2:

	# String keys with various value types
	person = {
		"name": "John",
		"age": 25
	}

	print(person)

	# Number keys

	scores = {
		1: "First Place",
		2: "Second Place",
		3: "Third Place"
	}

	print(scores)


---
---

# Why Use Dictionaries?

## Problem dictionaries solve:

- When you need to store related information and quickly find specific items without searching through everything.

## Advantages over lists:

- Fast lookup by key (no need to search through indices).
- More meaningful than numeric indices.
- Perfect for representing real-world relationship.

## Valid Keys and Values

### Valid Keys (must be immutable):

- String, numbers, booleans, tuples.
- Cannot use lists, dictionaries, or sets as keys.

### Valid Values (can be anything):

- Any Python data type including lists, other dictionaries, functions.

## Dictionary Examples

	# String keys with various value types
	person = {
		"name": "John",
		"age": 25,
	}

	print(person)

	# Number keys

        scores = {
                1: "First Place",
                2: "Second Place",
                3: "Third Place"
        }

        print(scores)


## Valid Keys and Values - Example

	# Valid keys
	valid_dict = {
		"name": "Alice",          # String key
		42: "The Answer",         # Integer key
		3.14: "Pi",               # Float key
		True: "Boolean key",      # Boolean key
		(1, 2): "Tuple key"       # Tuple key
	}


## CREATING EMPTY DICTIONARIES

###  Two ways to create empty dictionaries:

	# Method 1: Using empty curly braces
	empty_dict1 = {}

	# Method 2: Using dict() constructor
	empty_dict2 = dict()

	# Both create the same thing
	print(empty_dict1)               # Output: {}
	print(empty_dict2)               # Output: {}
	print(type(empty_dict1))

	# Adding items to empty dictionary
	empty_dict1["first_key"] = "first_value"
	print(empty_dict1)


## CREATING DICTIONARIES WITH INITIAL DATA

### Multiple ways to initialize dictionaries with data:

	# Method 1: Direct creation with literal syntax
	colors = {"red": "#FF0000", "green": "#00FF00"}

	# Method 2: Using dict() with keyword arguments
	person = dict(name="Alice", age=30, city="New York")

	print(person)

	# Method 3: Using dict() with list of tuples
	coordinates = dict([("x", 10), ("y", 20), ("z", 30)])

	print(coordinates)

	# Method 4: Using dict() with zip()
	keys = ["mon", "tue", "wed"]
	values = [1, 2, 3]

	days = dict(zip(keys, values))
	print(days)

---
---
---

# Introduction to Python Dictionaries

A dictionary in Python is an unordered collection of key-value pairs. Each key must be unique and immutable (like strings, numbers, or tuples), and each key maps to a value. Dictionaries are also known as associative arrays or hash maps in other programming languages.

1. Creating a Dictionary

	```
	person = {
		"name": "Alice",
		"age": 30,
		"city": "New York"
	}

	print(person)
	```


2. Accessing Values
	
	```
	print(person["name"])
	prin(person["age"])
	```


3. Adding and Updating Entries

	```
	person["email"] = "alice@example.com"
	person["age"] = 31
	print(person)
	```

4. Removing Entries

	```
	del person["city"]
	print(person)
	```

5. Dictionary Keys, Values, and Items

	```
	print(person.keys())
	print(person.values())
	print(person.items())
	```

6. Using the get() Method

The `get()` method is a safer way to access dictionary values, as it returns `None` (or a default value) instead of raising a `KeyError`.

	print(person.get("name"))
	print(person.get("address", "Not Available"))
