const interviewData = {
  HTML: [
    {
      question: "What is the purpose of the doctype in HTML?",
      answer: "The doctype declares the HTML version and helps browsers render the page correctly."
    },
    {
      question: "Difference between <div> and <section> tags in HTML?",
      answer: "<div>: Generic container with no semantic meaning.<section>: Denotes a thematic grouping of content, often with a headiing"
    },
    {
      question: "What is the difference between the <b> tag and the <strong> tag?",
      answer: "<b> tag is used for bold formatting, while <strong> tag is used to convey importance, typically rendered as bold but carries semantic meaning."
    },
    {
      question: "What is the purpose of the alt attribute in <img> tags?",
      answer: "The alt attribute specifies alternative text for an image if the image cannot be displayed. It is important for accessibility and SEO."
    },
    {
      question: "What are meta tags, and how do they affect a web page?",
      answer: " Provide metadata about the page. E.g., <meta charset=UTF-8> sets the character encoding."
    },
    {
      question: "Purpose of the alt attribute in images?",
      answer: "Describes the image for accessibility and is displayed if the image fails to load. "
    },
    {
      question: "What are semantic tags in HTML?",
      answer: "Semantic tags like <article>, <section>, <header>, <footer> describe the meaning of content, improving readability and accessibility."
    },
    {
      question: "What is the difference between id and class?",
      answer: "An id is unique and used to identify a single element, while a class can be used to group multiple elements."
    },
    {
      question: "What are void elements?",
      answer: "Void elements are self-closing HTML tags like <br>, <img>, <input> that do not have closing tags."
    },
    {
      question:"Explain the difference between GET and POST methods in HTML forms.",
      answer: "GET method sends data through the URL, while POST method sends data in the HTTP request body. GET is used for retrieving data, while POST is used for submitting data."
    },
    {
      question: "How do you make a hyperlink open in a new tab?",
      answer: "Use the target='_blank' attribute on the <a> tag."
    },
  ],
  
  CSS: [
    {
      question: "What is the difference between margin: auto and margin: 0 auto?",
      answer: "margin: auto centers an element horizontally within its containing element, while margin: 0 auto centers an element both horizontally and vertically within its containing element."
    },
    {
      question: "What is the purpose of the overflow property in CSS?",
      answer: "The overflow property specifies what happens if the content of an element overflows its box. Values include visible, hidden, scroll, and auto."
    },
    {
      question: "What is the purpose of the CSS filter property?",
      answer: "The filter property applies graphical effects like blur, grayscale, contrast, brightness, and more to an element's content."
    },
    {
      question: "Explain the difference between CSS transitions and CSS animations.",
      answer: "CSS transitions are used to smoothly change CSS property values over a specified duration, while CSS animations allow for more complex and customized animations by defining keyframes and animation properties."
    },
    {
      question: "What is the purpose of the CSS object-fit property?",
      answer: "The object-fit property specifies how the content of an element should be resized to fit its container. Values include fill, contain, cover, none, and scale-down."
    },
    {
      question: "What is the purpose of the CSS pseudo-elements::before and ::after?",
      answer: "The::before and::after pseudo-elements are used to insert content before and after an element's content, respectively. They are often used for decorative elements or adding content using CSS."
    },
    {
      question: "What is the difference between the display: none and visibility: hidden properties?",
      answer: "display: none hides the element completely and removes it from the document flow, while visibility: hidden hides the element but still occupies space in the document flow."
    },
    {
      question: "What is the purpose of the z-index property in CSS?",
      answer: "The z-index property specifies the stack order of an element along the z-axis (front/back). It is used to control the stacking order of positioned elements."
    },
    {
      question: "What are pseudo-classes in CSS?",
      answer: "Pseudo-classes are keywords added to selectors that specify a special state of the selected element. Examples include :hover, :active, :first-child, etc."
    },
    {
      question: "Explain the difference between margin and padding?",
      answer: "Margin is the space outside the border of an element, while padding is the space between the element's content and its border."
    },
    {
      question: "Difference between inline, block, and inline-block elements?",
      answer: "inline: No new line; width/height not respected (e.g., <span>).block: Occupies full width (e.g., <div>).inline-block: Combines properties of both."
    },
    {
      question: "Difference between id and class selectors in CSS?",
      answer: "id: Unique, applied to one element (#id).class: Reusable, applied to multiple elements (.class)."
    },
    {
      question: "What is the difference between relative and absolute positioning in CSS?",
      answer: "Relative is positioned relative to its normal position, while absolute is positioned relative to its nearest positioned ancestor."
    },
    {
      question: "What is specificity in CSS?",
      answer: "Specificity determines which CSS rule takes precedence based on its type, class, and ID usage."
    },
    {
      question: "What is the difference between em and rem units?",
      answer: "em is relative to the font-size of the parent, while rem is relative to the root element’s font-size."
    },
    {
      question: "What is the box model in CSS?",
      answer: "The box model includes content, padding, border, and margin of an element."
    },
    {
      question: "How do media queries work?",
      answer: "Media queries allow responsive design by applying styles based on device width, height, or resolution."
    },
  ],
  
  JavaScript: [
    {
      question: "What is the difference between var, let, and const?",
      answer: "`var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned."
    },
    {
      question: "What is a closure?",
      answer: "A closure is a function that retains access to its lexical scope even when executed outside of its scope."
    },
    {
      question: "What is the this keyword? How does it behave in different contexts?",
      answer: "Refers to the object calling the function.In global context: window (in browsers).In strict mode: undefined.In arrow functions: lexically bound (doesn't change based on caller)."
    },
    {
      question: "What is the difference between shallow copy and deep copy?",
      answer: "Shallow copy copies references to nested objects.Deep copy duplicates all levels of the object."
    },
    {
      question: "What is setTimeout and setInterval?",
      answer: "setTimeout runs a function once after a delay (in milliseconds). setInterval runs a function repeatedly at fixed intervals."
    },
    {
      question: "What is async/await in JavaScript?",
      answer: "sync/await is a modern syntax to handle asynchronous code in a cleaner, promise-based way.async makes a function return a Promise. await pauses the execution until the Promise resolves."
    },
    {
      question: "What is the difference between synchronous and asynchronous functions?",
      answer: "Synchronous functions block code execution until they finish. Asynchronous functions allow other code to run while waiting for a task (like a network request) to complete."
    },
    {
      question: "What is a prototype in JavaScript?",
      answer: "A prototype is an object from which other objects inherit properties. Every JavaScript object has a hidden internal property [[Prototype]] that links to another object—its prototype."
    },
    {
      question: "What are the different ways an HTML element can be accessed in a JavaScript code?",
      answer: "Here are the ways an HTML element can be accessed in a JavaScript code: getElementByClass(‘classname’): Gets all the HTML elements with the specified classname.getElementById(‘idname’): Gets an HTML element by its ID name. getElementbyTagName(‘tagname’): Gets all the HTML elements that have the specified tagname. querySelector(): Takes CSS style selector and returns the first selected HTML element."
    },
    {
      question: "What is Callback in JavaScript?",
      answer: "A callback is a JavaScript function passed to another function as an argument or a parameter. This function is to be executed whenever the function that it is passed to gets executed."
    },
    {
      question: "What are the scopes of a variable in JavaScript?",
      answer: "There are two scopes of a variable: - Global Scope: Global variables with global scope are available everywhere in JavaScript code.- Local Scope: Local variables are accessible only within the function in which they are defined."
    },
    {
      question: "What is hoisting in JavaScript?",
      answer: "Hoisting is JavaScript's behavior of moving declarations to the top of the scope before code execution."
    },
    {
      question: "What are promises in JavaScript?",
      answer: "Promises represent the eventual result of an asynchronous operation and can be in pending, fulfilled, or rejected state."
    },
    {
      question: "What is event delegation?",
      answer: "Event delegation allows handling events at a higher level by taking advantage of event bubbling."
    },
  ],
  
  React: [
    {
      question: "What is ReactJS?",
      answer: "A JavaScript library for building fast and interactive user interfaces using components and virtual DOM."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks like HTML and is used with React to describe UI structure."
    },
    {
      question: "What are hooks in React?",
      answer: "Functions (like useState, useEffect) that let functional components use state and lifecycle features."
    },
    {
      question: "What is useState in React?",
      answer: "useState is a React Hook that allows you to create reactive variables — also known as state — inside functional components.When setCount is called, React re-renders the component with the updated state."
    },
    {
      question: "What is Redux, and how does it integrate with React?",
      answer: "A state management library. React components can access/store global state via the Redux store using hooks or connect."
    },
    {
      question: "What is context in React?",
      answer: "A way to pass data deeply through the component tree without passing props at every level."
    },
    {
      question: "What is the useMemo hook?",
      answer: "Caches a computed value between renders unless dependencies change, optimizing performance."
    },
    {
      question: "What is useRef being used for?",
      answer: "useRef is a hook that allows you to create a reference to a DOM node or a JavaScript object. It can be used to access a DOM node directly, or to store a value that should not cause a re-render when it changes."
    },
    {
      question: "Difference between useEffect and useLayoutEffect?",
      answer: "useEffect runs asynchronously after rendering; useLayoutEffect runs synchronously after rendering but before the browser repaints."
    },
    {
      question: "What are the advantages of using React?",
      answer: "React offers a virtual DOM for improved performance, a component-based architecture for modular development, and a strong community support, among other advantages."
    },
    {
      question: "How do you manage global state in React?",
      answer: "With context API, Redux, MobX, Zustand, or other state management libraries?"
    },
    {
      question: "What are fragments in React?",
      answer: "A way to group multiple elements without adding an extra DOM node:<></>"
    },
    {
      question: "What is prop drilling and how do you avoid it?",
      answer: "Passing props through multiple levels of components. Avoid with Context API or state management libraries."
    },
    {
      question: "How does the virtual DOM work in React?",
      answer: "It's a lightweight replica of the actual DOM. React updates the virtual DOM first, then efficiently updates the real DOM only where changes occurred."
    },
    {
      question: "What are props in React?",
      answer: "Props are inputs passed to components to configure them."
    },
    {
      question: "What is the difference between controlled and uncontrolled components?",
      answer: "Controlled components rely on state, while uncontrolled ones access data using refs."
    },
    {
      question: "What is useEffect used for?",
      answer: "`useEffect` performs side effects like API calls or subscriptions in functional components."
    },
  ],

  Nodejs: [
    {
      question: "What is Node.js?",
      answer: "Node.js is a runtime environment that allows executing JavaScript on the server-side."
    },
    {
      question: "What is the use of middleware in Express.js?",
      answer: "Middleware functions modify request/response objects and execute any code before sending a response."
    },
    {
      question: "What is the event loop?",
      answer: "The event loop allows Node.js to perform non-blocking I/O by offloading operations and using a single-threaded event-driven model."
    },
    {
      question: "What are streams in Node.js?",
      answer: "Streams are objects that enable reading and writing data piece by piece, improving performance."
    },
    {
      question: "What is the difference between require and import?",
      answer: "`require` is used in CommonJS, `import` is used in ES Modules."
    },
  ],

  Git: [
    {
      question: "What is the difference between Git and GitHub?",
      answer: "Git is a version control system, GitHub is a remote platform to host Git repositories."
    },
    {
      question: "What does `git stash` do?",
      answer: "`git stash` temporarily saves changes that are not ready to commit."
    },
    {
      question: "What is the difference between merge and rebase?",
      answer: "`merge` preserves history, while `rebase` rewrites it for a cleaner linear flow."
    },
    {
      question: "What is a detached HEAD in Git?",
      answer: "A detached HEAD means you're not on a branch but at a commit, usually after checking out a specific commit."
    },
    {
      question: "How do you resolve conflicts in Git?",
      answer: "Conflicts are resolved manually by editing conflicting files and then committing the resolution."
    },
  ],
   Angular: [
    {
      question: "What is Angular?",
      answer: "Angular is a TypeScript-based open-source web application framework developed by Google."
    },
    {
      question: "What are components in Angular?",
      answer: "Components are the building blocks of an Angular app and consist of HTML, CSS, and TypeScript."
    },
    {
      question: "What is data binding in Angular?",
      answer: "Data binding in Angular synchronizes data between the model and the view, supporting one-way and two-way binding."
    },
    {
      question: "What are services in Angular?",
      answer: "Services are used to encapsulate business logic and can be injected into components using Angular's DI system."
    },
    {
      question: "What is the purpose of ngOnInit?",
      answer: "`ngOnInit` is a lifecycle hook called once the component is initialized."
    },
  ],

  Vuejs: [
    {
      question: "What is Vue.js?",
      answer: "Vue.js is a progressive JavaScript framework for building user interfaces."
    },
    {
      question: "What are directives in Vue.js?",
      answer: "Directives are special tokens like `v-if`, `v-model`, `v-for` that attach behavior to elements."
    },
    {
      question: "What is Vue CLI?",
      answer: "Vue CLI is a command-line tool for scaffolding and managing Vue.js projects."
    },
    {
      question: "What is the virtual DOM in Vue?",
      answer: "The virtual DOM is a lightweight copy of the real DOM that Vue updates efficiently to minimize performance costs."
    },
    {
      question: "How does Vue handle two-way data binding?",
      answer: "Vue uses `v-model` directive to create two-way binding between form inputs and data."
    },
  ],
   Python: [
    {
      question: "What are Python’s key features?",
      answer: "Python is interpreted, high-level, dynamically typed, garbage-collected, and supports multiple programming paradigms."
    },
    {
      question: "What is the difference between list and tuple?",
      answer: "Lists are mutable and tuples are immutable."
    },
    {
      question: "What are Python’s data types?",
      answer: "Common types include int, float, str, list, tuple, dict, set, and bool."
    },
    {
    question: "What is the difference between _init_ and _str_?",
    answer: "_init_ initializes objects; _str_ returns a string representation of the object."
    },
    {
    question: "How does Python manage memory?",
    answer: "Through reference counting and garbage collection."
    },
    {
    question: "What are mutable and immutable types?",
    answer: "Mutable types (like lists, dicts) can be changed; immutable types (like int, str, tuple) cannot.A function that uses yield to return an iterator one value at a time. Code: def count_up(): yield 1   yield 2"
    },
    {
    question: "What is the difference between threading and multiprocessing?",
    answer: "Threading runs multiple tasks within the same process (shared memory).Multiprocessing runs separate processes (isolated memory) for true parallelism."
    },
    {
    question: "What is the Global Interpreter Lock (GIL)?",
    answer: "A mutex that allows only one thread to execute Python bytecode at a time, affecting threading performance."
    },
    {
      question: "What is list comprehension?",
    answer: "A concise way to create lists:  CODE:- squares = [x*x for x in range(5)]"
  },
    {
      question: "What is a lambda function?",
      answer: "An anonymous, single-expression function: CODE:-  add = lambda x, y: x + y"
    },
    {
      question: "What are some popular Python libraries?",
      answer: "Data analysis: pandas, numpy. Web: Django, Flask. Scraping: requests, BeautifulSoup, SeleniumMachine. Learning: scikit-learn, TensorFlow, PyTorch"
    },
    {
      question: "What is inheritance?",
      answer: "A mechanism where a class (child) derives properties from another class (parent)."
    },
    {
      question: "What is a class in Python?",
    answer: "A blueprint for creating objects, bundling data and functions together."
    },
    {
      question: "How is a set different from a list?",
      answer: "Sets are unordered, unique collections; lists are ordered and can have duplicates."
    },
    {
      question: "What are Python decorators?",
      answer: "Decorators are functions that modify the behavior of another function or method without changing its source code."
    },
    {
      question: "What is PEP 8?",
      answer: "PEP 8 is the style guide for writing Python code, improving its readability and consistency."
    },
  ],

  PHP: [
    {
      question: "What is PHP?",
      answer: "PHP is a server-side scripting language designed for web development but also used as a general-purpose language."
    },
    {
      question: "How does PHP handle sessions?",
      answer: "PHP uses the `$_SESSION` superglobal to store session variables on the server across user requests."
    },
    {
      question: "What is the difference between GET and POST in PHP?",
      answer: "GET appends data to the URL; POST sends data in the request body, making it more secure for sensitive information."
    },
    {
      question: "What are superglobals in PHP?",
      answer: "Superglobals like `$_GET`, `$_POST`, `$_SESSION`, and `$_SERVER` are built-in arrays accessible from anywhere in the script."
    },
    {
      question: "How does error handling work in PHP?",
      answer: "PHP supports traditional error handling with `try-catch` blocks and also custom error handlers using `set_error_handler()`."
    },
  ],

  Java: [
    {
      question: "What is Java?",
      answer: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible."
    },
    {
      question: "What is JVM?",
      answer: "The Java Virtual Machine (JVM) is a runtime environment that executes Java bytecode and provides platform independence."
    },
    {
      question: "What is the difference between JDK, JRE, and JVM?",
      answer: "JDK is the development kit, JRE is the runtime environment, and JVM is the engine that runs Java bytecode."
    },
    {
      question: "What are the four pillars of OOP in Java?",
      answer: "Encapsulation, Abstraction, Inheritance, and Polymorphism."
    },
    {
      question: "What is the difference between `==` and `.equals()` in Java?",
      answer: "`==` compares references, `.equals()` compares values/content."
    },
  ],

  Laravel: [
    {
      question: "What is Laravel?",
      answer: "Laravel is a PHP framework for building modern web applications using the MVC architecture."
    },
    {
      question: "What are migrations in Laravel?",
      answer: "Migrations are version control for your database, allowing schema changes via PHP code."
    },
    {
      question: "What is Eloquent in Laravel?",
      answer: "Eloquent is Laravel’s ORM for interacting with databases using an expressive, ActiveRecord-like syntax."
    },
    {
      question: "What is the purpose of middleware in Laravel?",
      answer: "Middleware filters HTTP requests entering the application, often used for authentication and logging."
    },
    {
      question: "How do you handle authentication in Laravel?",
      answer: "Laravel provides a built-in authentication system that makes it easy to authenticate users with features like user registration, login, password reset, and session management. Developers can use Laravel's authentication scaffolding or customize it to fit their application's requirements."
    },
    {
      question: "What is Laravel Horizon?",
      answer: "Laravel Horizon is a dashboard and monitoring tool for Laravel's queue system. It provides insights into queued jobs, failed jobs, throughput, and performance metrics, allowing developers to optimize and manage their application's background processing tasks."
    },
    {
      question: "What is a Laravel Passport?",
      answer: "Laravel Passport is an OAuth2 server implementation built on top of Laravel. It provides a simple and secure way to implement authentication and authorization for APIs by issuing access tokens and managing token-based authentication."
    },
    {
      question: "Explain Laravel Cashier.",
      answer: "Laravel Cashier is a package for handling subscription billing and recurring payments in Laravel applications. It provides a fluent interface for managing subscriptions, handling subscription billing cycles, and integrating with popular payment gateways like Stripe and Braintree"
    },
    {
      question: "What is Laravel Socialite?",
      answer: "Laravel Socialite is an OAuth authentication package that simplifies the process of integrating social authentication providers like Facebook, Twitter, Google, and GitHub into Laravel applications. It provides a unified API for authenticating users via social media platforms."
    },
    {
      question: "What is Laravel Valet?",
      answer: "Laravel Valet is a development environment tool for macOS that provides a simple way to serve Laravel applications locally. It configures your system to run PHP applications using Nginx and Dnsmasq, making it easy to develop and test Laravel projects on your local machine"
    },
    {
      question: "What are service providers in Laravel?",
      answer: "Service providers in Laravel are the central place to configure and register services like bindings, event listeners, middleware, etc. They are responsible for bootstrapping the framework and registering things into the service container."
    },
    {
      question: "What is the difference between Laravel and Lumen?",
      answer: "Laravel and Lumen are both PHP frameworks created by Taylor Otwell. While Laravel is a full-featured framework suitable for building large-scale applications, Lumen is a lightweight micro-framework designed for developing fast and efficient APIs and microservices"
    },
    {
      question: "What is Laravel Artisan?",
      answer: "Artisan is a command-line interface included with Laravel that provides a variety of useful commands for tasks such as generating code, running migrations, clearing caches, and managing application assets. It simplifies common development tasks and boosts developer productivity."
    },
    {
      question: "What is a Blade templating engine?",
      answer: "Blade is Laravel's powerful templating engine that enables developers to write clean and efficient PHP code within their views. It provides features like template inheritance, control structures, and easy integration with data from controllers."
    },
    {
      question: "How do you define relationships in Eloquent ORM?",
      answer: "In Eloquent ORM, relationships between database tables are defined using methods such as hasOne, hasMany, belongsTo, belongsToMany, and morphTo. These methods establish associations between different models based on their database relationships."
    },
    {
      question: "What is Composer, and how does Laravel utilize it?",
      answer: "Composer is a dependency manager for PHP that allows developers to manage project dependencies. Laravel utilizes Composer to handle its own dependencies and streamline package management within Laravel projects."
    },
    {
      question: "What are the features of Laravel?",
      answer: "Laravel offers a plethora of features, including routing, middleware, authentication, Eloquent ORM, Blade templating engine, database migrations, and more. It also provides built-in support for caching, session management, and task scheduling."
    },
    {
      question: "What is the service container in Laravel?",
      answer: "It's a powerful dependency injection container that manages class dependencies and performs dependency resolution."
    },
  ],

  MySQL: [
  {
    "question": "What are the differences between MyISAM and InnoDB storage engines in MySQL?",
    "answer": "InnoDB supports transactions, row-level locking, and foreign keys. MyISAM does not support transactions and only provides table-level locking. InnoDB is better for high-concurrency applications."
  },
  {
    "question": "How does indexing work in MySQL and how can it affect performance?",
    "answer": "Indexes in MySQL speed up data retrieval by creating a data structure (like B-trees) for fast lookups. However, too many indexes can slow down inserts and updates due to the overhead of maintaining them."
  },
  {
    "question": "What is the purpose of a JOIN in SQL and what are the different types supported in MySQL?",
    "answer": "A JOIN combines rows from two or more tables based on a related column. MySQL supports INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN."
  },
  {
    "question": "How does MySQL handle transactions and what are the ACID properties?",
    "answer": "MySQL (with InnoDB) supports ACID properties: Atomicity, Consistency, Isolation, and Durability. Transactions ensure all-or-nothing execution and maintain data integrity."
  },
  {
    "question": "What are some ways to optimize a slow MySQL query?",
    "answer": "Use EXPLAIN to analyze queries, add appropriate indexes, avoid SELECT *, limit joins and subqueries, and normalize data where appropriate."
  }
],

  PostgreSQL:[
  {
    "question": "What are the key differences between PostgreSQL and MySQL?",
    "answer": "PostgreSQL is more feature-rich with support for advanced types, full ACID compliance, and extensibility. MySQL is often faster for read-heavy workloads but has fewer advanced features."
  },
  {
    "question": "How does PostgreSQL support advanced data types like arrays and JSON?",
    "answer": "PostgreSQL allows columns to store arrays and JSON directly. You can query these types using specialized operators and functions like ->, ->>, and JSONB indexing."
  },
  {
    "question": "Explain the concept of MVCC (Multi-Version Concurrency Control) in PostgreSQL.",
    "answer": "MVCC allows concurrent transactions by keeping multiple versions of a row. It avoids locking during reads, increasing performance and consistency in multi-user environments."
  },
  {
    "question": "What are CTEs (Common Table Expressions) and when would you use them?",
    "answer": "CTEs allow defining temporary result sets that can be referenced within a query. Useful for complex queries, recursion, or improving readability."
  },
  {
    "question": "How can you implement full-text search in PostgreSQL?",
    "answer": "Use `tsvector` and `tsquery` types along with `to_tsvector()` and `to_tsquery()` functions. PostgreSQL also supports full-text indexing for efficient search."
  }
],
 
  MongoDB: [
  {
      question: "What is MongoDB?",
      answer: "MongoDB is a type of database that uses NoSQL and stores information in a format similar to JSON called BSON."
  },
  {
      question: "How is MongoDB different from SQL databases?",
      answer: "MongoDB doesn’t need a fixed structure, uses collections instead of tables, and saves data as documents rather than rows."
  },
  {
      question: "What is a document in MongoDB?",
      answer: "A document is like a JSON object that holds data using pairs of keys and values."
  },
  {
      question: "What is a collection in MongoDB?",
      answer: "A collection is a group of documents in MongoDB, much like a table in traditional databases."
  },
  {
      question: "What is BSON?",
      answer: "BSON is a binary format that MongoDB uses to store documents, which is similar to JSON but more efficient."
  },
  {
      question: "How do you insert a document into MongoDB?",
      answer: "You can use `db. collection. insertOne()` or insertMany()."
  },
  {
      question: "How do you update a document in MongoDB?",
      answer: "You can use `db. collection. updateOne()` or updateMany() along with update operators like $set."
  },
  {
      question: "How do you delete a document in MongoDB?",
      answer: "You can use `db. collection. deleteOne()` or deleteMany()."
  },
  {
      question: "How do you query documents in MongoDB?",
      answer: "You can use `db. collection. find({ key: value })`."
  },
  {
      question: "What are the $set, $inc, and $push operators?",
      answer: "$set: changes the value of a field. $inc: increases the value of a field. $push: adds an item to an array."
  },
  {
      question: "What is an index in MongoDB?",
      answer: "An index helps speed up queries by making sure MongoDB doesn't have to check every document."
  },
  {
      question: "How do indexes improve performance?",
      answer: "They let MongoDB locate the needed data more quickly without going through all the documents."
  },
  {
      question: "What types of indexes are available in MongoDB?",
      answer: "MongoDB offers several types, including single field, compound, multikey, text, hashed, and geospatial indexes."
  },
  {
      question: "How do you view existing indexes on a collection?",
      answer: "You can use the command db. collection. getIndexes() to see the indexes that are already in place."
  },
  {
      question: "What is the aggregation pipeline in MongoDB?",
      answer: "It is a series of steps, such as $match, $group, and $project, that help transform and analyze data."
  },
  {
      question: "What do $match, $group, and $project do?",
      answer: "$match: It filters the documents to include only the ones that meet certain conditions. $group: It groups the data together based on specific fields, allowing for calculations like sums or averages. $project: It changes the structure of the documents, either by adding, removing, or renaming fields."
  },
  {
      question: "How is aggregation different from map-reduce?",
      answer: "Aggregation is quicker and easier to use, while map-reduce offers more flexibility but is slower."
  },
  {
      question: "How do you model relationships in MongoDB?",
      answer: "You can either embed documents or use references"
  },
  {
      question: "What is the difference between embedding and referencing?",
      answer: "Embedding: Keep related data in one document. Referencing: Point to another collection using an ObjectId."
  },
  {
      question: "When should you use normalized or denormalized data?",
      answer: "Use normalized data (references) when information is used in multiple places. Use denormalized data (embeddings) for quicker read operations."
  },
  {
      question: "What is sharding in MongoDB?",
      answer: "Sharding is a method where data is split across multiple servers to distribute the load."
  },
  {
      question: "What is replication?",
      answer: "Replication involves making copies of data from one MongoDB server to other servers to ensure data is backed up and available."
  },
  {
      question: "What is a replica set?",
      answer: "A replica set is a group of MongoDB servers where one server acts as the main server, and others support it by keeping copies of the data."
  },
  {
      question: "How does MongoDB ensure high availability?",
      answer: "MongoDB uses replica sets that automatically switch to a backup server if the main server stops working, ensuring the system stays operational."
  },
  {
      question: "What are capped collections?",
      answer: "Capped collections are special collections that have a fixed size, and once they reach that size, they start overwriting the oldest data."
  },
  {
      question: "How does MongoDB handle transactions?",
      answer: "MongoDB has supported multi-document ACID transactions since version 4."
  },
  {
      question: "What's the difference between MongoDB 3. x and 4. x in terms of transactions?",
      answer: "MongoDB 3. x didn't have full ACID support, but 4. x added the ability to handle multi-document transactions."
  },
  {
      question: "How do you secure a MongoDB database?",
      answer: "You can secure it by enabling authentication, using roles, setting up IP whitelisting, and using TLS/SSL encryption."
  },
  {
      question: "What is the use of ObjectId in MongoDB?",
      answer: "It uniquely identifies each document and is created automatically."
  },
  {
      question: "What are the limits of document size in MongoDB?",
      answer: "The maximum size for a BSON document is 16 MB."
  },
  {
      question: "What is Compass in MongoDB?",
      answer: "MongoDB Compass is a graphical user interface that allows you to explore and manage data visually."
  },
  {
      question: "How do you backup and restore data in MongoDB?",
      answer: "Use mongodump to back up data and mongorestore to restore it."
  },
  {
    "question": "What is the difference between document and collection in MongoDB?",
    "answer": "A document is a single JSON-like object (BSON), while a collection is a group of such documents. Collections are like tables in RDBMS."
  },
  {
    "question": "How does MongoDB handle indexing, and what are compound indexes?",
    "answer": "MongoDB supports single-field, compound, and multikey indexes. Compound indexes index multiple fields and can greatly speed up multi-condition queries."
  },
  {
    "question": "What are the benefits and drawbacks of using a schema-less (NoSQL) design?",
    "answer": "Benefits include flexibility and ease of horizontal scaling. Drawbacks include lack of enforced schema, which can lead to inconsistent data if not managed carefully."
  },
  {
    "question": "How does MongoDB handle replication and failover?",
    "answer": "MongoDB uses replica sets for replication. One node is primary and others are secondaries. If the primary fails, an automatic election picks a new one."
  },
  {
    "question": "What is the Aggregation Framework, and how does it differ from SQL GROUP BY?",
    "answer": "The Aggregation Framework allows complex data processing in stages (e.g., $match, $group, $project). It's more flexible and powerful than SQL GROUP BY, supporting pipelines for transformations."
  }
],

  Docker : [
  {
    question: "What is the difference between a Docker container and a virtual machine?",
    answer: "Containers share the host OS kernel and are more lightweight, while virtual machines include a full guest OS and are more resource-heavy."
  },
  {
    question: "How does Docker ensure isolation between containers?",
    answer: "Docker uses Linux kernel features like namespaces and cgroups to isolate processes and manage resources."
  },
  {
    question: "What is the role of a Dockerfile? Can you explain its common instructions?",
    answer: "A Dockerfile defines the steps to build a Docker image. Common instructions include FROM, RUN, COPY, CMD, and EXPOSE."
  },
  {
    question: "How do you manage persistent storage in Docker?",
    answer: "By using volumes or bind mounts to store data outside the container filesystem so it persists across container restarts."
  },
  {
    question: "What is the difference between Docker Compose and Docker Swarm?",
    answer: "Compose is used for defining and running multi-container apps locally, while Swarm is a clustering tool for deploying containers across multiple nodes."
  }
],

  AWS : [
  {
    question: "What is the difference between EC2, Lambda, and ECS?",
    answer: "EC2 provides virtual servers, Lambda runs code without servers (serverless), and ECS is used to run Docker containers at scale."
  },
  {
    question: "How does Auto Scaling work in AWS?",
    answer: "Auto Scaling automatically adjusts the number of EC2 instances based on load, using policies and CloudWatch alarms."
  },
  {
    question: "What are security groups and how are they different from NACLs?",
    answer: "Security groups act as virtual firewalls for EC2 instances (stateful), while NACLs control traffic at the subnet level (stateless)."
  },
  {
    question: "How does S3 ensure durability and availability of data?",
    answer: "S3 stores data redundantly across multiple devices and Availability Zones, ensuring 99.999999999% durability."
  },
  {
    question: "What is the Shared Responsibility Model in AWS?",
    answer: "AWS secures the cloud infrastructure, while users are responsible for securing their applications and data in the cloud."
  }
],

  Linux : [
  {
    question: "How does the Linux file permission system work (rwx)?",
    answer: "'r' is read, 'w' is write, and 'x' is execute. Permissions are set for user, group, and others."
  },
  {
    question: "What is the difference between a process and a thread in Linux?",
    answer: "A process is an independent program in execution; a thread is a lightweight subprocess that shares memory within the process."
  },
  {
    question: "How do you monitor CPU and memory usage in Linux?",
    answer: "Using commands like top, htop, free, vmstat, and ps."
  },
  {
    question: "What are symbolic links and how are they different from hard links?",
    answer: "Symbolic links point to the path of a file, while hard links point directly to the inode. Deleting the original file breaks a symlink but not a hard link."
  },
  {
    question: "How does the Linux boot process work from BIOS to shell?",
    answer: "BIOS → Bootloader (GRUB) → Kernel → init/systemd → login → Shell"
  }
],

  Android : [
  {
    question: "What is the Android Activity lifecycle?",
    answer: "The lifecycle includes: onCreate(), onStart(), onResume(), onPause(), onStop(), onDestroy(). These manage the state of an Activity."
  },
  {
    question: "What is the difference between Service and IntentService?",
    answer: "Service runs on the main thread, while IntentService handles asynchronous tasks in a background thread and stops itself when done."
  },
  {
    question: "How is data stored persistently in Android?",
    answer: "Data can be stored using SharedPreferences, SQLite, Room database, or internal/external files."
  },
  {
    question: "What are the differences between Serializable and Parcelable?",
    answer: "Parcelable is faster and optimized for Android. Serializable uses reflection and is easier to implement but slower."
  },
  {
    question: "What is ViewModel and how is it used?",
    answer: "ViewModel stores UI-related data that survives configuration changes like screen rotations. It helps in separating UI and business logic."
  }
],

  iOS : [
  {
    question: "What is the difference between frame, bounds, and center in iOS views?",
    answer: "Frame is the view’s location and size in the superview, bounds is its own coordinate space, and center is the midpoint in the superview."
  },
  {
    question: "Explain the iOS app lifecycle.",
    answer: "Key states: Not running → Inactive → Active → Background → Suspended. Managed by UIApplicationDelegate methods like applicationDidBecomeActive()."
  },
  {
    question: "What is ARC (Automatic Reference Counting)?",
    answer: "ARC is used in iOS to automatically manage memory by keeping track of strong references and deallocating objects when count reaches zero."
  },
  {
    question: "What is the difference between delegate and notification?",
    answer: "Delegates are one-to-one communication, while notifications are one-to-many using NotificationCenter."
  },
  {
    question: "What is the role of Info.plist?",
    answer: "Info.plist contains configuration metadata for the app, such as permissions, bundle identifier, and launch screen info."
  }
],

  Swift : [
  {
    question: "What is the difference between 'struct' and 'class' in Swift?",
    answer: "Structs are value types (copied when assigned), classes are reference types (shared reference)."
  },
  {
    question: "What are optionals in Swift?",
    answer: "Optionals represent a variable that can hold a value or nil. Declared using `?` and safely unwrapped using `if let`, `guard`, or optional chaining."
  },
  {
    question: "What is the difference between weak and unowned references?",
    answer: "Both prevent strong reference cycles. `weak` can be nil and is optional; `unowned` assumes the reference will never be nil."
  },
  {
    question: "What is a closure in Swift?",
    answer: "A closure is a self-contained block of functionality that can be passed around and used in your code, similar to lambdas or anonymous functions."
  },
  {
    question: "What are property observers in Swift?",
    answer: "`willSet` and `didSet` let you observe and respond to changes in a property's value."
  }
],

  DevTools : [
  {
    question: "What is Chrome DevTools and why is it used?",
    answer: "Chrome DevTools is a set of web developer tools built into Google Chrome. It’s used to inspect HTML/CSS, debug JavaScript, monitor performance, and analyze network activity."
  },
  {
    question: "How do you debug JavaScript using DevTools?",
    answer: "You can use the 'Sources' tab to set breakpoints, step through code, watch expressions, and view call stacks."
  },
  {
    question: "What can you analyze using the 'Network' tab?",
    answer: "You can monitor network requests, check request/response headers, see timing info, inspect payloads, and detect performance issues like long load times or failed requests."
  },
  {
    question: "How do you check and modify the DOM in DevTools?",
    answer: "Use the 'Elements' tab to view, edit, and manipulate the DOM. You can also apply inline CSS changes and see them in real time."
  },
  {
    question: "How can you measure website performance using DevTools?",
    answer: "Use the 'Performance' tab to record and analyze page load, scripting time, paint time, and more. 'Lighthouse' can also audit for performance, accessibility, and SEO."
  }
]


};

export default interviewData;
