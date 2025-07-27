// Final Corrected Loop Comparison Table

/*
Feature              for-in                         for-of                                forEach()
---------------------------------------------------------------------------------------------------------------
✅ Purpose           Iterates keys /                Iterates values or                    Executes a function
                    property names                 [key, value] pairs                    for each item

📦 Works with        Objects, Arrays,               Arrays, Strings,                      Arrays, Maps, Sets
                    Strings (not Map)              Maps, Sets (all iterables)

⚠️ Use with Objects? ✅ Yes                         ❌ No (not directly)                   ❌ No

🔢 Use with Arrays?  ⚠️ Not ideal (keys only)       ✅ Yes                                ✅ Yes

🗺️ Use with Map?     ❌ No                          ✅ Yes                                ✅ Yes

🔁 Use with Set?     ❌ No                          ✅ Yes                                ✅ Yes

❌ Break/Continue?   ✅ Yes                         ✅ Yes                                ❌ No

⏱️ Async support?   Manual handling               ✅ Good with async/await              ❌ Not await-friendly

🎯 Best use case     Object properties              Iterables like arrays,               Side effects (logging,
                                                  maps, sets                            DOM manipulation, etc.)
*/
