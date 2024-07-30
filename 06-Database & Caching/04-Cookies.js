/*
Cookies (Overview)

What -> Storage to Store data persistently in user's device.

How it works -> Data can be set by client/server & cookies get transmitted via http call.

Size Limit -> 4KB per cookie, Browsers may limit the total number of cookies per domain (usually around 20-50 cookies).

Performance -> HTTP req/res time can be affected due to cookie size.

Data Persistence -> Session Cookies: These are temporary cookies that are deleted when the browser is closed.
                    Persistent Cookies: These cookies remain on the user's device for a set period specified by the 'Expires' or 'Max-Age' attribute.

Data Structure -> {key : value} (value is always a string)

Scope -> Cookies are scoped to a specific domain and path.
         They can be further restricted to specific subdomains or paths within the domain.

Secure and HttpOnly Flags ->
Secure: This flag ensures that the cookie is only sent over HTTPS.
HttpOnly: This flag makes the cookie inaccessible to JavaScript, protecting it from XSS attacks.         

SameSite Attribute ->
The SameSite attribute helps protect against CSRF (Cross-Site Request Forgery) attacks by controlling how cookies are sent with cross-site requests.
Possible values: Strict, Lax, None.

Practical Use Cases -
1. Session Management: Cookies are widely used to maintain user sessions by storing session identifiers.
2. Tracking: Used by analytics and advertising services to track user behavior across websites.
3. Personalization: Storing user preferences, such as language settings, theme choices, and other personalized settings.

*/

//Cookies can be set using the Set-Cookie header in HTTP responses from the server or through JavaScript on the client side.

//Setting Cookies via HTTP Header
//Set-Cookie: name=value; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Path=/; Domain=example.com; Secure; HttpOnly; SameSite=Strict

//Setting Cookies via JavaScript
document.cookie =
  'name=value; expires=Wed, 21 Oct 2025 07:28:00 GMT; path=/; domain=example.com; secure; httponly; samesite=strict';

//Cookies can be read from the document.cookie property in JavaScript. This property returns all cookies for the current document as a single string.
let allCookies = document.cookie;
console.log(allCookies); // Outputs: "name=value; othername=othervalue"
