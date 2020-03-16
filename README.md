## How to run the Projects

As usual it's necesary to install the packages of each project:

Go to the Server side project folder **~/tb_test/server** and execute: `npm install` then,
switch to the Client side project folder **~/tb_test/client** and execute: `npm install` one more time.

Once all dependencies has been installed the project is ready to go.

Go to the folder **~/tb_test/server** and execute:

                  `npm run dev`
 
In that way it will run the the client project and the server project also, due to Nodemon. 

When the Client side project and the Server side project are both running the app will be ready to test is. 

I left a few console logs to sort of see the flow of the application in the browser.

## How to run the Server side project test

Go to the folder **~/tb_test/server** and execute:
 `npm run test`

## How to run the Client side project test

Unfortunately, I wasn't able to accomplish the integration of Jest test due I was kind of confused with the Redux flow and how I'd been able to do it, but, the way the test should run is:

Go to the folder **~/tb_test/client** and execute:
 `npm test`