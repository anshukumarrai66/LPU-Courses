# Python Set
# Set Relationships

## Converting To/From Lists and Tuples

	# List to set
	my_list = [1, 2, 2, 3, 4]
	my_set = set(my_list)
	print(my_set)         # {1, 2, 3, 4}

        # Set to list
        new_list = list(my_set)
        print(new_list)        # [1, 2, 3, 4] (order may vary)

        # Tuple to set
        my_tuple = (1, 2, 2, 3)
        tuple_set = set(my_tuple)
        print(tuple_set)        # {1, 2, 3}

        # Set to sorted tuple
        sorted_tuple = tuple(sorted(tuple_set))
        print(sorted_tuple)     # (1, 2, 3)

## Relationship with Dictionaries

- Sets are implemented similarly to dictionaries
- Set elements are like dictionary keys without values
- Both require hashable elements
- Sets have O(1) average lookup time like dict keys

	# Dictionary keys as a set
	my_dict = {'a': 1, 'b': 2, 'c': 3}
	keys_set = set(my_dict)
	print(keys_set)                   # {'a', 'b', 'c'}

	# Common operations
	common_keys = set(my_dict.keys()) & {'a', 'c', 'd'}
	print(common_keys)                # {'a', 'c'}


---
---

# Set Relationships in Python

Python provides several methods and operatiors to examine relationships between sets. These relationships include subset, superset, and disjoint checks. Understanding these relationships is essential for performing logical operations and comparisons between different sets.

1. Subset

A set `A` is a subset of set `B` if all elements of `A` are in `B`.

	A = {1, 2}
	B = {1, 2, 3, 4}
	print(A.issubset(B))

2. Superset

A set `A` is a superset of set `B` if it contains all elements of `B`.

	A = {1, 2, 3, 4}
	B = {2, 3}
	print(A.issuperset(B))

3. Disjoint Sets

Two sets are disjoint if they have no elements in common.

	A = {1, 2}
	B = {3, 4}
	print(A.isdisjoint(b))

4. Using Comparison Operators

Python also supports comparison operators to check set relationships:

- `<` - proper subset
- `<=` - subset
- `>` - proper superset
- `>=` - superset

	A = {1, 2}
	B = {1, 2, 3}
	print(A < B)     # True: A is a proper subset of B
	print(B > A)     # True: B is a proper superset of A
	print(A <= B)    # True: A is a subset of B
	print(A >= B)    # False: A is not a superset of B

5.
