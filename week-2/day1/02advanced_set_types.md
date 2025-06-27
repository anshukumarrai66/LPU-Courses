
# Python Set
# Advanced Set Types

## Frozenset for Immutable Sets

	# Creating a frozenset
	immutable = frozenset([1, 2, 3])

	# Cannot modify a frozenset
	#immutable.add(4)                    # This will fail

	# These will work (return new frozensets):
	combined = immutable.union({4, 5})
	difference = immutable.difference({2, 3})
	print(combined)                      # frozenset({1, 2, 3, 4,5})
	print(difference)                    # frozenset({1})


## Using Frozensets as Dictionary Keys or Set Elements

	# Regular sets can't be elements of other sets
	# But frozensets can
	set_of_frozensets = {
	   frozenset([1, 2]),
	   forzenset([3, 4])
	}

	# Similarly for dict keys
	mappings = {
	   frozenset([1, 2]): "Group A",
	   frozenset([3, 4]): "Group B"
	}
	print(mappings)


## Set Operations with Update Methods

	A = {1, 2, 3}
	B = {3, 4, 5}

	# In-place operations (modifying original set)
	A.update(B)                          # A is {1, 2, 3, 4, 5}
	print(A)
	A = {1, 2, 3}                        # Reset A
	A.intersection_update(B)             # A is now {3}
	print(A)
	A = {1, 2, 3}                        # Reset A
	A.difference_update(B)               # A is now {1, 2}
	print(A)
	A = {1, 2, 3}                        # Reset A
	A.symmetric_difference_update(B)     # A is now {1, 2, 4, 5}
	print(A)


## Performance Considerations

- Set Operations have excellent performance characteristics
- Hash-based implementation enables O(1) average case for many operations
- Space efficiency tradeoff - sets use more memory than lists
- For very small data, lists might be faster due to less overhead

---
---

# Advanced Set Types in Python

In Python, the built-in `set` type is a powerful data structure for sorting unique, unordered elements. Beyound the basic `set`and `frozenset`, Python also supports operations and behaviors that enable more advanced uses, including immutability, set algebra, and custom sets through subclassing.

1. Frozenset

A `frozenset` is an immutable version of a set. It cannot be modified after creation, making it hashable and usable as a dictionary key or set element.

	frozen = frozenset([1, 2, 3, 2])
	print(frozen)


2. Frozensets as Dictionary Keys

	fs1 = frozenset([1, 2])
	fs2 = frozenset([3, 4])
	fs_dict = {fs1: 'a', fs2: 'b'}
	print(fs_dict)

 
3. Set Operations with Frozenset

	a = frozenset([1, 2, 3])
	b = frozenset([3, 4, 5])
	print(a.union(b))
	print(a.intersection(b))


4. Custom Set Subclasses

You can extend the behaviour of sets by subclassing the `set` class. This is useful when you want to customize operations or validations.

	class PositiveSet(set):
	     def add(self, value):
	        if value > 0:
	           super().add(value)

	pset = PositiveSet()
	pset.add(1)
	pset.add(-1)
	print(pset)


5. Sets of Sets Using Frozenset

Since regular sets are unhashable, they can't be added to other sets. However, `frozenset` can be used to create a set of sets.

	set_of_sets = {frozenset([1, 2]), frozenset([3, 4])}
	print(set_of_sets)
