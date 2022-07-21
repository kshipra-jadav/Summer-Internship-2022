# Dockerizing A React - Node - Redis App

- `client` folder has the Node API in which Redis is connected.
- `server` folder has the React App.
- Each time the page loads, it sends a request to the server and fetches the number of time it has been loaded.
- The value of the total loads of the page is stored in Redis.
- The two containers now have volume support.
- This basically means that we can use hot reload in React and nodemon in Node and see the changes happening in real time.
- Still cannot communicate to the backend with the container name or anything else.
- Forced to use localhost.

## Presentation Video


https://user-images.githubusercontent.com/84441419/180285686-183b7177-58b7-4fa4-b764-7392ad4447a8.mp4

