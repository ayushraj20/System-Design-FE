/*
Session Storage (Overview)

What -> Storage to Store data persistently in user's device.

How it works -> setItem(), getItem(), removeItem(), clear().

Size Limit -> 5MB per domain/Origin 

Performance -> Synchronous (similar to localStorage)

Data Persistence -> SessionStorage data is temporary and only available for the duration of the page session.
                    Once the browser tab or window is closed, the data is cleared.

Data Structure -> {key : value} (value is always a string)

Scope -> SessionStorage is scoped to the specific page session, meaning that data is accessible only within the
         tab or window where it was stored. Different tabs or windows have separate storage spaces.

Security -> Avoid storing sensitive data (e.g., passwords, tokens) in SessionStorage as it is accessible through JavaScript
            and can be vulnerable to XSS (Cross-Site Scripting) attacks.

Practical Use Cases -
1. Temporary Data Storage: Storing data that is only needed for the duration of the page session, such as form inputs,
                           temporary states, and session-specific configurations.

3. Multi-Tab Isolation: Ensuring that data is isolated between tabs, which can be useful for applications where multiple
                        sessions need to be managed independently in different tabs.            
*/

//To store data in SessionStorage, you use the setItem method. This method takes two arguments: a key and a value.
sessionStorage.setItem('username', 'JohnDoe');

//To retrieve data from SessionStorage, you use the getItem method, which takes a key as an argument and returns the corresponding value.
let username = sessionStorage.getItem('username');
console.log(username); // Outputs: JohnDoe

//To remove a specific item from SessionStorage, use the removeItem method, which takes a key as an argument.
sessionStorage.removeItem('username');

//To clear all data from SessionStorage, use the clear method.
sessionStorage.clear();
