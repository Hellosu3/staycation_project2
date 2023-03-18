THE STAYCATION MAVEN

Description:
Sometimes, with hectic schedules and not enough vacation hours, a quick weekend getaway, a staycation, shall suffice. While vacationing, who doesn't love a good meal. This travel blog/app will provide with location ideas (within the state of California), and highly rated restaurants that are a must try.

A full CRUD app using the 7 RESTFULL, node.js, Express, EJS, css,html, MVC file structure, and Mongoose. This site is for the tired and overworked indidual for a quick weekend getaway. It helps to plan and make a decision on which city to visit and where to eat. It allows the user to make changes on the restaurant, delete a location if they're not interested, and even add a city and restaurant of their choice.

User Stories: As a user, I would lo create a site as a tired overworked individual in need of a vacation
As a user, I would like to create a place to visit and eat.
As a user, I would like to see photos which will entice me to eat at that location
As a user, I would to know the best place to eat within that location. As a user, I would like to delete the information that's not relevant to me.

MVP goals: Full functioning site using CRUD with clickable links and images.Share cities and one restaurant to each city, which will provide ideas for user. Allow user to interact by editing, adding restaurant, and deleting a restaurant ,aiding in narrowing decision. Provide beautiful photos

Wireframes:
GET-/staycation- lists names of cities in California
GET-/staycation/:id - shows info of restaurant in the city
GET-/staycation - creating a new city
POST-/staycation/new - user adds new restaurant
GET-/staycation/:id/edit - user edits the restaurant
PUT-/staycation/:id updates
DELETE-/staycation/:id - user could delete the restaurant

index: Profile with list of cities in California
new: user adds a new restaurant
destroy: user deletes restaurant
update: updating route
create: creator add cities on server and the data
edit: user edits the restaurant example: the name of the restaurant changes.
show: top rated restaurants

![image](https://user-images.githubusercontent.com/119162007/226099181-8b1cd6aa-4cce-4c30-abce-b7d99644389a.png)

![image](https://user-images.githubusercontent.com/119162007/226099190-f12cc902-014d-4484-8ca7-ed7ba8078b12.png)
![image](https://user-images.githubusercontent.com/119162007/226099198-7297942f-88a9-4bd5-aa2c-f74674778602.png)
![image](https://user-images.githubusercontent.com/119162007/226099207-2bb9f01f-ea9a-4458-8561-ea338465c45e.png)

issues: wasnt able to redirect the newly added city/restaurnt back to index page.
