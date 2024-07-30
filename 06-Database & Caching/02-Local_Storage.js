/*
Local Storage (Overview)

What -> Storage to Store data persistently in user's device.

How it works -> setItem(), getItem(), removeItem(), clear().

Size Limit -> 5MB per domain/Origin (significantly more than the storage capacity provided by cookies.)

Performance -> Synchronous, Each read or write operation to LocalStorage will block the execution of next line
               of JavaScript code until the operation is complete. This can potentially lead to performance issues,
               especially if large amounts of data are being accessed or if LocalStorage is being accessed frequently.

Data Persistence -> Data stored in LocalStorage is persistent and will remain even after the browser tabs or browser window is closed.

Data Structure -> {key : value} (value is always a string)

Security -> Avoid storing sensitive data (e.g., passwords, tokens) in LocalStorage as it is accessible through JavaScript
            and can be vulnerable to XSS (Cross-Site Scripting) attacks.

Practical Use Cases -
1. User Preferences: Storing user settings and preferences such as theme (dark/light mode), language selection, and layout options.
2. Session Management: Keeping track of user session data without server-side storage, useful for lightweight applications.
3. Caching: Caching data that does not change frequently, such as API responses, to improve performance and reduce server load.            
*/

// To store data in LocalStorage, you use the setItem method. This method takes two arguments: a key and a value.
localStorage.setItem('username', 'JohnDoe');

// To retrieve data from LocalStorage, you use the getItem method, which takes a key as an argument and returns the corresponding value.
let username = localStorage.getItem('username');

console.log(username); // Outputs: JohnDoe

// To remove a specific item from LocalStorage, use the removeItem method, which takes a key as an argument.
localStorage.removeItem('username');

// To clear all data from LocalStorage, use the clear method.
localStorage.clear();

/*
LocalStorage only supports storing strings. To store complex data types such as objects or arrays,
you need to serialize them to a JSON string before storing, and then deserialize them when retrieving. 
*/

// Storing an Object
let user = { name: 'John Doe', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieving an Object
let user1 = JSON.parse(localStorage.getItem('user'));
console.log(user.name); // Outputs: John Doe
