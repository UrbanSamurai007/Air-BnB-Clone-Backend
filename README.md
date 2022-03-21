**Individual Assignment - I** </br>
**COMP 3133 – Full Stack Development II** </br>
**Total Points (12%)** </br>
**Submission Deadline: Saturday, 26th Feb 2022 (Week07)** </br>
----------------------------------------------------------</br>
Note: All Students will maintain git repository and if choose to do a private repo,
add me as collaborator (username is pritamworld) </br>
No extension or last submission will be allowed as I have already added 1 more
week for submission. </br>
Late submission will be awarded ZERO points </br>

**Creating AirBnB GraphQL API** </br>
The main objective of this assignment is to demonstrate your knowledge about
**GraphQL** API development. Refer class and lab code for the GraphQL examples.
Create a NodeJS application and Git Repository having the name
**studentId_comp3133_assig1.**

Store all data using Mongodb atlas cloud
(Name mongodb Database as **studentId_comp3133_assig1** and think of your own
collections name for saving listing, user info and booking info (use nodeJS mongoose
module)

1. Create a new User Profile (type = admin OR type = customer) (validate that All
fields are mandatory)</br>
"username": "pritamworld",</br>
"firstname": "Pritesh”,</br>
"lastname": "Patel",</br>
"password": "test123",</br>
"email": "p@p.com",</br>
“type": "admin"</br>

• All fields are required </br>
• Username must be unique i.e., must not be same as existing user</br>
• Validate email format</br>
• Password must be min 6 characters length and can contain only
upper/lower alphabets, 0-9, #, $, &, _</br>

2. Login API – Pass the username and password to validate the user to allow
booking of any listing (both user and admin) (Optional: implement JWT token)

3. Create a new listing (Admin) (validate All fields are mandatory)
"listing_id": "L001", </br>
"listing_title": "Sea face home for rent", </br>
"description": "max 1000-character description", </br>
"street": "171 Young Street", </br>
"city": "Toronto", </br>
"postal_code": "M1X0Y5", </br>
"price": 150.00, </br>
"email": "contact@hilton.com", </br>
"username": "pritamworld" </br>

• All fields are required </br>
• Validate email format </br>

4. View all listings created by Admin 

5. Book listings as a User 
"listing_id": "L001",</br>
"booking_id": "B001",</br>
"booking_date": "01-24-2022",</br>
"booking_start": "01-25-2022",</br>
"booking_end": "01-30-2022",</br>
"username": "pritamworld"</br>

6. Search listing by
• Name </br>
• City / Postal code </br>

7. List all User bookings (Only when logged in as User)

8. View all listing added by Admin user (Only when logged in as Admin)
Evaluation
A) GraphQL end point/queries (9 points each) Total: 72
B) Validate new User and new Listings (5 points each) Total: 10
C) GitHub Repo Total: 09
D) Submitting Postman project with all endpoints Total: 09

**Submission**
A) Create the ZIP file having all your source code. Remove node_modules folder
before zip
B) Put the screenshots of all GraphQL queries and response along with
mongodb screenshots
C) Attach Postman project with GraphQL queries
D) Upload the ZIP file having name studentId_comp3133_assig1 on black
board on or before deadline.
E) Submit GitHub project link in comment
Communication
Please contact on pritesh.patel2@georgebrown.ca or SLACK channel for any
question or query.
References
- https://graphql.org/code/#javascript
- https://www.howtographql.com/
- https://www.toptal.com/api-development/graphql-vs-rest-tutorial
- https://www.guru99.com/graphql-tutorial.html
