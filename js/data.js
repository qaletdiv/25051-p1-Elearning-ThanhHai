const courses = [
  {
    id: 1,
    title: "HTML & CSS Master",
    category: "Technology",
    level: "Beginner",
    instructor: "John Smith",
    duration: "20 Hours",
    price: "Free",
    progress: 40,
    rating: 4.8,
    students: 1250,
    image: "assets/banner.jpg",

    description:
      "Learn HTML and CSS from basic to advanced through practical projects. Build responsive websites and master modern web layouts.",

    lessons: [
      {
        title: "Introduction",
        duration: "10 min",
        status: "Completed",
      },
      {
        title: "HTML Basics",
        duration: "25 min",
        status: "Completed",
      },
      {
        title: "CSS Basics",
        duration: "30 min",
        status: "Not Started",
      },
      {
        title: "Responsive Design",
        duration: "35 min",
        status: "Not Started",
      },
    ],

    reviews: [
      {
        user: "David",
        star: 5,
        comment: "Excellent course for beginners.",
      },
      {
        user: "Emma",
        star: 4,
        comment: "Easy to understand.",
      },
    ],
  },

  {
    id: 2,
    title: "JavaScript Fundamentals",
    category: "Technology",
    level: "Intermediate",
    instructor: "David Brown",
    duration: "28 Hours",
    price: "$29",
    progress: 70,
    rating: 4.9,
    students: 1980,
    image: "assets/banner.jpg",

    description:
      "Master JavaScript fundamentals and create interactive web applications with DOM and ES6.",

    lessons: [
      {
        title: "Variables",
        duration: "15 min",
        status: "Completed",
      },
      {
        title: "Functions",
        duration: "25 min",
        status: "Completed",
      },
      {
        title: "DOM Manipulation",
        duration: "40 min",
        status: "Completed",
      },
      {
        title: "ES6 Features",
        duration: "30 min",
        status: "Not Started",
      },
    ],

    reviews: [
      {
        user: "Sophia",
        star: 5,
        comment: "Very practical course.",
      },
      {
        user: "Michael",
        star: 5,
        comment: "Loved the DOM lessons.",
      },
    ],
  },

  {
    id: 3,
    title: "Python for Beginners",
    category: "Technology",
    level: "Beginner",
    instructor: "Emily White",
    duration: "25 Hours",
    price: "Free",
    progress: 20,
    rating: 4.7,
    students: 980,
    image: "assets/banner.jpg",

    description:
      "Start programming with Python and learn variables, loops, functions, and file handling.",

    lessons: [
      {
        title: "Python Introduction",
        duration: "10 min",
        status: "Completed",
      },
      {
        title: "Variables",
        duration: "18 min",
        status: "Completed",
      },
      {
        title: "Conditions",
        duration: "22 min",
        status: "Not Started",
      },
      {
        title: "Loops",
        duration: "25 min",
        status: "Not Started",
      },
    ],

    reviews: [
      {
        user: "Anna",
        star: 5,
        comment: "Perfect for beginners.",
      },
    ],
  },

  {
    id: 4,
    title: "UI/UX Design Essentials",
    category: "Design",
    level: "Intermediate",
    instructor: "Sarah Wilson",
    duration: "18 Hours",
    price: "$19",
    progress: 90,
    rating: 4.9,
    students: 760,
    image: "assets/banner.jpg",

    description:
      "Learn UI/UX principles, wireframes, prototypes and modern design systems.",

    lessons: [
      {
        title: "Design Thinking",
        duration: "15 min",
        status: "Completed",
      },
      {
        title: "Wireframe",
        duration: "30 min",
        status: "Completed",
      },
      {
        title: "Prototype",
        duration: "35 min",
        status: "Completed",
      },
    ],

    reviews: [
      {
        user: "Lucas",
        star: 5,
        comment: "Great explanation.",
      },
    ],
  },

  {
    id: 5,
    title: "Business Communication",
    category: "Business",
    level: "Beginner",
    instructor: "Robert King",
    duration: "16 Hours",
    price: "$15",
    progress: 55,
    rating: 4.6,
    students: 430,
    image: "assets/banner.jpg",

    description:
      "Develop communication skills for presentations, teamwork and leadership.",

    lessons: [
      {
        title: "Communication Basics",
        duration: "20 min",
        status: "Completed",
      },
      {
        title: "Presentation Skills",
        duration: "25 min",
        status: "Completed",
      },
      {
        title: "Team Collaboration",
        duration: "20 min",
        status: "Not Started",
      },
    ],

    reviews: [
      {
        user: "Chris",
        star: 4,
        comment: "Useful for work.",
      },
    ],
  },

  {
    id: 6,
    title: "English for IT",
    category: "Language",
    level: "Beginner",
    instructor: "Jennifer Lee",
    duration: "22 Hours",
    price: "Free",
    progress: 10,
    rating: 4.8,
    students: 1350,
    image: "assets/banner.jpg",

    description:
      "Improve your English vocabulary and communication skills for software development and technology.",

    lessons: [
      {
        title: "IT Vocabulary",
        duration: "15 min",
        status: "Completed",
      },
      {
        title: "Reading Documents",
        duration: "20 min",
        status: "Not Started",
      },
      {
        title: "Technical Conversation",
        duration: "25 min",
        status: "Not Started",
      },
    ],

    reviews: [
      {
        user: "Kevin",
        star: 5,
        comment: "Very useful course.",
      },
    ],
  },
];