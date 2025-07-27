// Final Corrected Loop Comparison Table

/*
| Feature             | for-in                            | for-of                                 | forEach()                             |
|---------------------|------------------------------------|-----------------------------------------|----------------------------------------|
| ✅ Purpose          | Iterates keys / property names     | Iterates values or [key, value] pairs   | Executes a function for each item      |
| 📦 Works with       | Objects, Arrays, Strings (no Map)  | Arrays, Strings, Maps, Sets (iterables) | Arrays, Maps, Sets                     |
| ⚠️ Use with Objects?| ✅ Yes                             | ❌ No (not directly)                    | ❌ No                                  |
| 🔢 Use with Arrays? | ⚠️ Not ideal (keys only)           | ✅ Yes                                  | ✅ Yes                                 |
| 🗺️ Use with Map?    | ❌ No                              | ✅ Yes                                  | ✅ Yes                                 |
| 🔁 Use with Set?    | ❌ No                              | ✅ Yes                                  | ✅ Yes                                 |
| ❌ Break/Continue?  | ✅ Yes                             | ✅ Yes                                  | ❌ No                                  |
| ⏱️ Async support?   | Manual handling                   | ✅ Good with async/await                | ❌ Not await-friendly                  |
| 🎯 Best use case    | Object properties                 | Iterables like arrays, maps, sets       | Side effects (logging, DOM updates)   |
*/
