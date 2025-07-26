# Python Dictionary
# Dictionary Methods

## Working with Dictionary Keys, Values, and Items

### Dictionaries provide three important methods that let you work with different parts of the dictionary structure.

- These methods return special view objects that give you access to all keys, all values, or all key-value pairs together, making it easy to examine or process the entire contents of your dictionary.
- Understanding these methods is crucial for situations where you need to analyze , display, or manipulate all the data in your dictionary at once.

	```
	# Sample dictionary for demonstration
	inventory = {
		"laptops": 25,
		"phones": 150
	}

	# Getting all keys (product names)
	all_products = inventory.keys()
	print("Products in inventory:", list(all_products))

	# Getting all values (quantities)
	all_quantities = inventory.values()
	print("Quantities in stock:", list(all_quantities))

	# Getting all key-value pairs together
	all_items = inventory.items()
	print("Complete inventory:", list(all_items))
	```

## Dictionary Methods
### Think of dictionary methods as specialized tools in a toolbox, where each tool serves a specific purpose for working with your dictionary data.

- Understanding these methods transforms you from someone who can only read dictionaries to someone who can dynamically modify, analyze, and manipulate dictionary data with confidence.
- These methods from the foundation for more advanced dictionary operations and are essential building blocks for real-world programming tasks.
- The beauty of dictionary methods lies in their intuitive naming and behavior. Most method names clearly indicate what they do, making your code more readable and self-documenting.

## Adding and Updating with update() Method

### The update() method provides a powerful way to add multiple key-value pairs to your dictionary at once, or to modify existing values efficiently.

	# Starting with our student grades
	student_grades = {"Alice": 85, "Bob": 92, "Charlie": 78}
	print(f"Initial grades: {student_grades}")

	# Adding new students and updating existing grades
	new_grades = {"Diana": 94, "Alice": 88, "Eve": 90}
	student_grades.update(new_grades)
	print(f"After update: {student_grades}")

	# You can also update with keyword arguments
	student_grades.update(Frank=87, Grace=91)
	print(f"After keyword update: {student_grades}")

	# Update with a list of tuples (useful for data processing)
	additional_students = [("Henry", 89), ("Iris", 93)]
	student_grades.update(additional_students)
	print(f"Final grades: {student_grades}")


## Removing Items with pop() Method
### The pop() method serves a dual purpose that makes it incredibly useful:

- It both removes a key-value pair from your dictionary and returns the value that was removed.
- This behaviour is like taking something out of a box and immediately handling it to you, rather than just throwing it away.
- Understanding `pop()` is crucial because it provides a safe way to remove items while still having access to their values for further processing.


## Removing items with pop() Method

	```
	# Working with our student grades dictionary
	student_grades = {"Alice": 88, "Bob": 92, "Charlie": 78, "Diana": 94}
	print(f"Before pop: {student_grades}")

	# Remove Alice and get her grade for processing
	alice_grade = student_grades.pop("Alice")
	print(f"Alice's grade was: {alice_grade}")     # Outpur: Alice's grade was: 88
	print(f"After removing Alice: {student_grades}")

	# pop() with a default value prevents KeyError for missing keys
	# This is safer than using square brackets for removal
	edward_grade = student_grades.pop("Edward",0)    # Edward dosen't exist, return 0
	print(f"Edward's grade (with default): {edward_grade}")  # Output: 0
	```


## Removing Items with popitem() Method

### The popitem() method removes and returns an arbitary key-value pair from your dictionary, which since Python 3.7 means it removes the last inserted item due to dictionaries maintaining insertion order.

- Think of this as reaching into a stack of papers and taking the one from the top.
- This method proves particularly useful when you need to process dictionary items in a last-in-first-out manner, or when you simply need to reduce the size of a dictionary without caring about which specific item gets removed.


## Removing Items with popitem() Method

	```
	# Demonstrating popitem() behaviour
	inventory = {"laptops": 25, "phones": 150, "tablets": 75}
	print(f"Initial inventory: {inventory}")

	# Remove and get the last added item
	last_item = inventory.popitem()  # Returns a tuple: (key, value)
	print(f"Removed item: {last_item}")  # Output: ('tablets', 75)
	print(f"Remaining inventory: {inventory}")

	# popitem() raises KeyError if dictionary is empty
	# Let's empty the dictionary and shows safe handling
	while inventory:
		removed_item = inventory.popitem()
		print(f"Processing: {removed_item[0]} with quantity {removed_item[1]}")
	print(f"Final inventory: {inventory}")
	```


## Removing Items with del Statement and clear() Method

### While pop() and popitem() remove items and give you their values back, sometimes you simply want to delete items without needing their values.

- The `del` statement provides direct removal of specific keys, while the `clear()` method removes everything at once, giving you a completely empty dicitionary.
- Understanding when to use each removal method depends on whether you need the removed data and how many items you want to remove.

	```
	# Starting with a comprehensive student database
	student_data = {
		"Alice": {"grade": 88, "email": "alice@school.edu"},
		"Bob": {"grade": 92, "email": "bob@school.edu"},
		"Charlie": {"grade": 78, "email": "charlie@school.edu"},
		"Diana": {"grade": 94, "email": "diana@school.edu"}
	}

	print(f"Initial data: {len(student_data)} students")

	# Using del to remove specific students (when you don't need their data)
	del student_data["Charlie"] # Charlie transferred to another class
	print(f"After removing Charlie: {len(student_data)} students")

	# del can also remove nested items
	del student_data["Alice"]["email"]  # Remove Alice's email for privacy
	print(f"Alice's remaning data: {student_data['Alice']}")
	```

## Creating Copies with copy() Method

### The copy() method creates a shallow copy of your dictionary, which means you get a new dictionary with the same key-value pairs, but the new dictionary is independent of the original for top-level changes.

- Understanding the difference between shallow and deep copying is crucial for avoiding unexpected behaviour when modifying dictionaries.
- This concept becomes particulary important when you're working with functions that modify dictionaries, or when you need to preserve an original dataset while experimenting with modifications.

	```
	# Demonstrating copy() behaviour with simple values
	original_grades = {"Alice": 85, "Bob": 92, "Charlie": 78}
	copied_graded = original_grades.copy()

	print(f"Original: {original_grades}")
	print(f"Copy: {copied_grades}")

	# Modifying the copy dosen't affect the original
	copied_grades["Alice"] = 95 # Alice got extra credit
	copied_grades["Diana"] = 88 # New student added to copy

	print(f"After modifying Copy:")
	print(f"Original: {original_grades}")  # Alice still has 85
	print(f"Copy: {copied_grades}")   # Alice now has 95, Diana added
	```

---
---

# Python Dictionary Methods

Python dictionaries come with a variety of built-in methods that allwo you to manipulate and interact with key-value pairs efficiently. These methods help you add, remove, retrive, or update data in a dictionary.

1. keys()
Returns a view object containing all the keys in the dictionary.
	```
	person = {"name": "Alice", "age": 30}
	print(person.keys())
	```

2. values()
Returns a view object conatining all the values in the dictionary.

	```
	person = {"name": "Alice", "age": 30}
	print(person.values())
	```

3. items()
Returns a view object containing the key-value pairs as tuples.

	```
	person = {"name": "Alice", "age": 30}
	print(person.items())
	```

4. get()
Returns the value for the specified key. If the key does not exist, returns `None` or a default value if provided.

	```
	person = {"name": "Alice", "age": 30}
	print(person.get("name"))
	print(person.get("email", "Not Available"))
	```

5. update()
Updates the dictionary with key-value pairs from another dictionary or iterable.

	```
	person = {"name": "Alice", "age": 30}
	person.update({"email": "alice@example.com"})
	print(person)
	```

6. pop()
Removes the item with the specified key and returns its value.

	```
	person = {"name": "Alice", "age": 30}
	age = person.pop("age")
	print(age)
	print(person)
	```

7. popitem()
Removes and returns the last inserted key-value pair.

	```
	person = {"name": "Alice", "age": 30}
	item = person.popitem()
	print(item)
	print(person)
	```

8. clear()
Removes all items from the dictionary.

	```
	person = {"name": "Alice", "age": 30}
	person.clear()
	print(person)
	```

9. copy()
Returns a shallow copy of the dictionary.

	```
	original = {"a": 1, "b": 2}
	copy_dict = original.copy()
	print(copy_dict)
	```

10. setdefault()
Returns the value of a key if it exists. If not, inserts the key with a specified default value.

	```
	settings = {}
	settings.setdefault("theme", "dark")
	print(settings)
	```

# _+_+_+_+ THE END +_+_+_+_ #
