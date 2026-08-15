Date: 15/08/2026
Created by: Grace Bigwood
## Edge cases Login -> Team and Team Page
- Tested by mocking the signin auth
- Expected:
    - Invalid login does go to site
    - Mising photos are set to a default
    - Cannot access team page with a login
    - Long blurbs wrap
- Result: Pass
    - Onvalid login displays an error and remains on login
    - Missing photos display a default
    - Accesing team page with no login redirects to signin
    - Long blurb wraps