# Bootstrap Restyling Requirements: Team Page & Login

Project: Library GUI

Prepared By: Sovannchetra Hab

Checked By: Grace Bigwood

Status: Approved

## Team Page Requirements

Purpose: The page will provide basic information about the team. The page should present team member information in a clear, consistent layout.

Team Page Fields and Display Rules

| Field                 | Requirement                           | Validation/Display Rule                                       |
| --------------------- | ------------------------------------- | ------------------------------------------------------------- |
| Team Name             | Show team name                        | Cannot be empty                                               |
| Member Name           | Show each member name                 | Show members                                                  |
| Member Roles          | Show member role                      | Show the role next/under member name                          |
| Profile Picture       | Show member profile picture           | Show members profile picture, default if they do not have one |
| Contact Detail(Email) | Show member email                     | Show valid team member email (student email)                  |
| About me              | Show a brief summary about the worker | Show a small about section of the team member.                |
| Page Heading          | Show clear heading. E.g Our Team.     | Show page heading on top of the page.                         |

Team Page Edge Cases

| Edge Cases                           | Validation/Display Rule                            |
| ------------------------------------ | -------------------------------------------------- |
| Team members have no profile picture | Display a default avatar.                          |
| Team members have a long name/role   | Text should wrap without overlapping other content |

## Login Page Styling Requirements

Purpose: This page will provide a clear and visually consistent interface for users to enter their login credentials. This focuses on improving the page's appearance.

Scope: This page changes in this task are styling-only. Existing authentication function, login logic, credential processing and backend functionality are outside of the scope of this and must not be modified.

Login Styling Requirements

| Field                | Requirement                                                                                         | Validation/Display Rule                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username/Email field | Field should have clear styling                                                                     | Field should have a clear label.                                                                                                                                    |
| Password field       | Field styling should be consistent with user field.                                                 | Field should have a clear label and be consistent with the user field.                                                                                              |
| Login button         | The button should use the same styling as use and password field. But it should stand out the most. | Button should clearly be visible and identifiable and allow you to login after clicking it if the username/email and password field is filled in with a valid user. |
| Register button      | The button should use the same styling as the login button.                                         | The button should clearly be visible, but not standout more than the login button                                                                                   |
| Validation messages  | Validation/Error message should be display clearly                                                  | Error message should appear near the relevant field and should now break the layout/page.                                                                           |

Login Page Edge Cases

| Edge Cases                       | Validation/Display Rule                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| Validation/Error messages appear | Message remains readable and does not overlap with other content.                       |
| Long username/email entered      | Input remains inside the field                                                          |
| Multiple validation messages     | Messages should display clearly without overlapping each other and breaking the layout. |