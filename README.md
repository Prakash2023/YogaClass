# YogaClass
It is web app where user can register themself for yoga class
## My approach:
1. There will be sign-in and sign-up page 
2. If user is new she/he has to register themselfe by providing following details:
   name, email,password,age schedule batch,payment 
3. email should be unique as it is primary key and
   age should be between 18 to 65 , otherwise it will not register,
   schedule batch user can change schedule batch on next month,
   all the details are mandotory to get register.
3. And then user can sign-in after validation of email and password through mongodb database
4. after that user can see his/her details like:
   name,schedule bacth, change batch option etc.

## INSTRUCTIONS TO SETUP AND RUN THE PROJECT:

1. Download the file from github and extract both frontend and backend folder
2. now open the command prompt and go to the backend directory and run the command in the terminal:
   "nodemon app"
3. simillarly open another command prompt and go to the frontend directory and run the command in the terminal:
   "npm start"
4. Now, the project has been started, you can access the site on localhost:3000
5. For simple login you can use following cardentials:
   email: abc@gmail.com
   password: 12345678
   
## ER Diagram
<img width="666" alt="image" src="https://user-images.githubusercontent.com/69713210/207139549-74264ee9-3a91-470d-95b7-d7293e19efa7.png">

## Screenshots
![Screenshot (1)](https://user-images.githubusercontent.com/69713210/207139655-aed5c43e-6da0-487b-a9a3-50e002f46d12.png)
![Screenshot (4)](https://user-images.githubusercontent.com/69713210/207139744-16d2fb5b-f312-49e1-a9dd-ae96c42ff31c.png)
![Screenshot (2)](https://user-images.githubusercontent.com/69713210/207139690-39b5aa6a-2932-44ed-838e-778fcd7f17d6.png)
![Screenshot (3)](https://user-images.githubusercontent.com/69713210/207139710-4f9a8835-3849-4d5d-8b33-4874cf03771c.png)
![Screenshot (5)](https://user-images.githubusercontent.com/69713210/207139769-c194a41a-189b-47b1-856a-1fe20cc5bd82.png)

## Database schema
<img width="515" alt="Screenshot_20221212_123756" src="https://user-images.githubusercontent.com/69713210/207139890-d8dc2b92-d02f-4bb6-9744-f5bca3d3c442.png">
<img width="509" alt="Screenshot_20221212_123936" src="https://user-images.githubusercontent.com/69713210/207139915-24c02ebe-15ca-45be-ba27-c25a7edda4bc.png">

