# Python Dictionary
# Accessing Dictionary Items

## Basic Square Bracket Notation

### The most straightforward way to access dictionary values is using square bracket notation with the key you want to look up.

	# Creating a student information dictionary
	student = {
		"name": "Sarah Johnson",
		"age": 20,
		"major": "Computer Science",
		"gpa": 3.8,
		"graduation_year": 2025
	}

	# Accessing individual values using square brackets

	student_name = student["name"]
	student_age = student["age"]
	student_major = student["major"]

	print(f"Student Name: {student_name}")
	print(f"Age: {student_age}")
	print(f"Major: {student_major}")

	
## Understanding KeyError and When It Occurs

### When you try to access a key that doesn't exist in your dictionary using square bracket notation, Python raises a KeyError exception.

- This is Python's way of telling you that the key you're looking for simply isn't in the dictionary, much like trying to look up a word that doesn't exist in a physical dictionary.
- Understanding KeyError is crucial because it helps you identify typos in key names or logic errors in your code where you might be assuming a key exists when it actually doesn't.


	```
	# Using our student dictionary from before
	student = {"name": "Sarah Johnson", "age": 20, "major": "Computer Science"}

	# This works fine - the key exists
	print(student["name"])              # Output: Sarah Johnson


	# This will cause a KeyError - the key doesn't exist

	try:
		print(student["height"])     # KeyError: 'height'
	except KeyError as e:
		print(f"Error: The key {e} was not found in the dictionary")
		# Output: Error: The key 'height' was not found in the dictionary
	```

## The get() Method - Safe Access

### The get() method provides a safer way to access dictionary values beacuse it won't crash your program if the key doesn't exist.

- Instead, it returns None by default, or you can specify your own default value to return.
- Think of it as a polite way to ask for something - if it's not available, you get a gentle "sorry, we don't have that" instead of an error.
- This method is particularly useful when you're not certain whether a key exist or when you want to provide fallback values for missing information.

	```
	# Using the same student dictionary
	student = {"name": "Sarah Johnson", "age": 20, "major": "Computer Science"}

	# Safe access using get() - returns None if key doesn't exist
	height = student.get("height")
	print(f"Height: {height}")       # Output: Height: None

	# Providing a default value when key doesn't exist
	height = student.get("height", "Not specified")
	print(f"Height: {height}")      # Output: Height: Not specified

	phone = student.get("phone", "No phone number on file")
	print(f"Phone: {phone}")        # Output: Phone: No phone number on file


	# get() also works for keys that do exist
	name = student.get("name", "Unknown")
	print(f"Name: {name}")          # Output: Name: Sarah Johnson
	```

## Checking if Keys Exist with 'in' Operator

### Before trying to access a dictionary value, you might want to check whether the key actually exist.

- The `in` operator allows you to test for key existence and returns True of False, helping you write more robust code that handles both existing and missing keys gracefully.
- This approach is particularly valueable when you need different behavior depending on whether optional information is available in you dictionary.

	```
	# Our student dictionary
	student = {"name": "Sarah Johnson", "age": 20, "major": "Computer Science"}

	# Checking if keys exist before accessing them
	if "name" in student:
		print(f"Student name: {student['name']}")
	else:
		print("No name information available")

	if "height" in student:
		print(f"Height: {student['height']}")
	else:
		print("Height information not availanle")
		# Output: Height information not available

	# You can also check if a key does NOT exist
	if "phone" not in student:
		print("Phone number is missing from student record")
		# Output: Phone number is missing from student record
	```

## Accessing Nested Dictionary Values

### When dictionaries contain other dictionaries as values, you need to chain your access operations to reach the deeply nested information.

- Think of this like navigating through folders on your computer - you go through one folder to reach another folder, and so on, until you find the file you need.
- Understanding nested access is essential for working with complex data structures like JSON from web APIs, configuration files, or detailed records that contain multiple layers of information.


	```
	# Complex nested dictionary
	company = {
		"departments": {
			"engineering": {
				"manager": "Alice Smith",
				"projects": {
					"web_app": {"status": "in_progress"},
					"mobile_app": {"status": "completed"}
				}
			}
		}
	}

	# Accessing nested values step by step
	engineering_manager = company["departments"]["engineering"]["manager"]
	web_app_status = company["departments"]["engineering"]["projects"]["web_app"]["status"]

	print(f"Engineering Manager: {engineering_manager}")  # Alice Smith
	print(f"Web App Status: {web_app_status}")           # in_progress
	```

---
---
---

# Accessing Dictionary Elements in Python

In Python, dictionaries store data as key-value pairs. Accessing the values in a dictionary is straightforward using keys. You can also use methods like `get()` and access keys, values, or key-value pairs collectively using dictionary views.

1. Accessing values by key
The most common way to access a value is by using the key inside square brackets.

	student = {
		"name": "John",
		"age": 22,
		"major": "Computer Science"
	}

	print(student["name"])
	print(student["major"])


2. Using the get() Method
The `get()` method allows safe access to dictionary values. If the key doesn't exist, it returns `None` or a specified default value.

	print(student.get("age"))
	print(student.get("gpa"))   # key doesn't exist
	print(student.get("gpa", "Not Available"))

3. Accessing All Keys
The `keys()` method returns a view of all keys in the dictionary.

	print(student.keys())

4. Accessing All Values
The `values()` method return a view of all values in the dictionary.

	print(student.values())


5. Accessing All Key-Value Pairs
The `items()` method returns all key-value pairs as tuples.

	print(student.items())


6. Looping Through a Dictionary
You can loop through keys, values, or key-value pairs using a `for` loop.

	for key in student:
		print(key, "->", student[key])



