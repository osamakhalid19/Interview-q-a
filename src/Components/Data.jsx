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
      question: "What are Python decorators?",
      answer: "Decorators are functions that modify the behavior of another function or method without changing its source code."
    },
    {
      question: "What is PEP 8?",
      answer: "PEP 8 is the style guide for writing Python code, improving its readability and consistency."
    },
    {
      question: "What are Python’s data types?",
      answer: "Common types include int, float, str, list, tuple, dict, set, and bool."
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
