# ReactJs Front End with NodeJs Back End Sample App for Azure App Service (Linux)
This is a sample project to modify, run locally and deploy on Azure App Service for Linux using local git repository or using "az webapp up" command. The Express server has two API route: GET - /api/getexample, and POST - /api/postexample and these routes are being hit by React app.

##Running the App Locally

From the project root directory run the following :

To restore npm packages.

```console
npm install
```

To run the application locally.

```console
npm run dev
```
This will launch the React app and run the server at the same time with the help of "concurrently".

It will navigate to http://localhost:3000 and will open the React app. 
Navigate Express server routes GET - http://localhost:5000/api/getexample, and POST - http://localhost:5000/api/postexample

## How react run with node 
* [Get React app running with NodeJs & concurrently configurations](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)