# passtoken
This example exhibits passwordless username + token based authentication.
The example is completely client-side and is not secure and is not meant to be used in production.

## Theory
Passwordless username + token based authentication replaces commonly used username + password goal being to provide more secure means of authentication. As tokens and passwords both typically consist of alphanumerics as such tokens are no more secure than passwords, therefore it is the actual implementation of the authentication that makes token based authentication more secure.

>In short: implementation matters more than what is being implemented.

Passwords based on human input through devices, such as keyboard, are susceptible to forgetting passwords and security risks such as MIM-attacks. By replacing passwords with tokens, especially with one-time tokens, not only is forgetting tokens irrelevant but MIM-attakcs, to a degree, are made harder to execute.
>Note: Tokens do not prevent MIM-attacks. Tokens only make things a bit harder.

Username + token based authentication is as secure as its implementation.

## Implementation recommendations
* Use username + token 1 + token 2.
* Use one-time tokens.
* Combine random token 1 to random token 2.
* Print tokens or use token mobile application.
* Tie tokens to a specific user, do not share them.
* Hash tokens wherever you store them.

## Example
The example showcases the theory in its simplistic form. In real life situation the example would use SSL, server-side validation and tokens would not be shown to the user.