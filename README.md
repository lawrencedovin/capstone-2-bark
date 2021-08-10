# **Capstone 2 Bark Proposal**

## Goals 
The goal is to inform the users who are interested in adopting a dog about    
different dog breeds. To learn what to expect in taking care of them along     
with their quirks. Which will help the user conveniently find which breed     
best suits them. Another goal is to help the users discover a dog with the     
breed of their choice in a pound closest to them to adopt.

## Demographic  
Anyone that is interested in adopting a dog.

## API 
`petfinder`       
The petfinder API will be used to display interesting facts and what to expect    
in taking care of the dogs according to their breed. As well as helping the user to       
discover dogs from pounds that are filtered by the user's chosen location (zipcode)    
and breed.

## Technologies 
Bark will be a web application that will be built using   
Front-End: `React` `Sass SCSS` `Bootstrap`    
Back-End: `Node.js` `Express.js`    
Database: `PostgreSQL`

## Details  

### Database Schema 
![ERD Diagram](database-erd.PNG?raw=true) 

### Potential API issues
The petfinder API has a vast amount of adoptable dogs with over 250 dog breeds. 
The potential challenge is to interact with the API to retrieve and display 
the individual dog's information properly. 

### Sensitive Information
password.

### Functionality

- #### Registration
  Users register with their username, password, location, and “email” for 
password reset.  

- #### Password Encryption
  Every user’s password will be encrypted by salting and then hashing the 
password storing it in the database through using `Flask-Bcrypt`.

- #### Password Reset
  If a user enters incorrect credentials for logging in a password reset
will be displayed. The user enters their email address and a password
reset link will be sent to their email.

- #### Login
  Every user that is logged in can log out of their account.

- #### Logout
  If a user enters incorrect credentials for logging in a password reset 
will be displayed. The user enters their email address and a password 
reset link will be sent to their email.

- #### Filtering
  Users can filter by breed, location, training, vocality, grooming, exercise, energy or    
  querying their search using a searchbar.

- #### Breeds
  Users can favorite or unfavorite dog breeds that will be used to help them refer to information 
  from the dog breed's detail page or to launch a search for adoption.  

- #### Likes
  Users can like or unlike a particular dog that they are considering to adopt. Which will be stored to 
  their liked dogs

### User Flow  
![User Flow Diagram](user-flow-diagram.png?raw=true) 

### Additional Features  
  The grocery list feature will temporarily store in recipes the user wants to use 
which the user can send to their phone to conveniently shop for the ingredients. 
There will be filtering options for different diet types and cuisines.

### Possible Future Features  
- Randomize Recipes feature will allow a user to swipe left or right for discovering and liking 
  their favorite recipes.  
- User may further search of the Randomize Recipe by diet and or cuisine. 
- Different language support. 
- Users can add comments on the recipes.  
- Dark and light mode.  
- Social media share.  
- Send Grocery List recipes to email.