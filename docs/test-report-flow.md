Date: 15/08/2026
Created by: Grace Bigwood
## Happy Path Login -> Team test
- Tested by mocking the signin auth
- Expected:
    - to be sent to /team instead of /dashboard with valid signin
    - display a users picture if available, otherwise a default
- Result: Pass
    - Succesful redirection
    - One profile picture is present, the others as default, matches repo