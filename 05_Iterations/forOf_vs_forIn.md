/*
=================== for-in vs for-of in JavaScript ===================



| Feature                  | for-in                                 | for-of                               |
|--------------------------|-----------------------------------------|--------------------------------------|
| ✅ Purpose              | Iterates keys/indexes (property names)  | Iterates values (elements/items)     |
| ✅ Works with           | Objects, Arrays, Strings (keys/indexes) | Arrays, Strings, Maps, Sets, etc.    |
| ⚠️ Not ideal for        | Arrays (includes inherited keys)        | Objects (not directly iterable)      |
| 🛠️ Use case            | Loop over object keys                   | Loop over iterable values            |
| 🔁 Works with Map?      | ❌ No                                   | ✅ Yes                               |
| 🔁 Works with Object?   | ✅ Yes                                  | ❌ No (use Object.entries())         |

======================================================================
*/

