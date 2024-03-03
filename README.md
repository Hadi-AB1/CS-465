# CS-465

Architecture: 

  For this project, I used Angular and Express as primary front-end and back architectures, utilizing HTML and JS. In order to present my information to customers, I used JavaScript to construct HTML documents that were served via Express. As the client sought pages, they were displayed one at a time using this MVC architecture. Nevertheless, I generated several components that were fetched programmatically within the same HTML document by using Angular for my admin-facing work. The fact that they were preinstalled made it easy for administrators to move around. The code had been downloaded on the client, awaiting to be run, as opposed to loading and caching a fresh page. I used MongoDB, a NoSQL database that is incredibly well-suited to Node.JS, for the backend. 

  Functionality:

  I stored and displayed information for this project using JSON. When transmitting information to or from a server, JSON is widely utilized since it formats the information into objects that are easy to use. Conversely, web developers frequently utilize JavaScript as a language to control the behavior of their websites. As was already discussed, MongoDB uses the binary JSON format known as BSON for storing information. After that, we can extract this using the MongoDB driver and convert the data to JSON. Then, we can utilize Handlebars and TypeScript to work with this information. JSON acts as a link between the frontend and backend in this manner. 

Using Handlebars to create templates in place of some of the static HTML pages is one instance of using refactoring to improve functionality. This made it possible to alter the content displayed on a page while maintaining its structural integrity. Another rewrite involves storing the material in MongoDB instead of static JSON files stored throughout the the code base, which were used to populate the templates. This makes it possible to add or modify content data while requiring the code of the website to be updated.

Testing:

Since security is crucial, we encrypted all passwords by employing hashes on the admin end instead of transferring raw credentials back and forth between the relational database and the server. Additionally, it's critical to avoid using this hash on websites like GitHub. Manufacturers can contribute to the prevention of threats like SQL Injection by developing API's for the database. Before enabling the user or admin to carry out specific activities using the API, we also need to verify their permissions. 

Reflection: 

My understanding of full stack development has grown as a result of this course, which has additionally introduced me to several new technologies, such Express. As a full-stack developer, all of my experience in the professional world has been on completed projects. I haven't got the chance to develop an entire stack of application from scratch. This made it easier for me to observe and comprehend how each component of an application works as a whole. My knowledge of Node.JS, MongoDB, Express, and the manner in which they interact to form a versatile environment for development has improved significantly as a result of this course.





  


