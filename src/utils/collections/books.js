const books = [
  {
    "id": 1,
    "title": "JavaScript: The Good Parts",
    "description": "An in-depth look at the core features of JavaScript.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Douglas Crockford"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.5
  },
  {
    "id": 2,
    "title": "The Adventures of Sherlock Holmes",
    "description": "A collection of twelve short stories featuring Sherlock Holmes.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Arthur Conan Doyle"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.8
  },
  {
    "id": 3,
    "title": "Dracula",
    "description": "A Gothic horror novel about the vampire Count Dracula.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Bram Stoker"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.7
  },
  {
    "id": 4,
    "title": "Pride and Prejudice",
    "description": "A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Jane Austen"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.9
  },
  {
    "id": 5,
    "title": "Clean Code",
    "description": "A Handbook of Agile Software Craftsmanship.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Robert C. Martin"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.6
  },
  {
    "id": 6,
    "title": "The Hobbit",
    "description": "A fantasy novel and children's book by J. R. R. Tolkien.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "J. R. R. Tolkien"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.8
  },
  {
    "id": 7,
    "title": "It",
    "description": "A horror novel by American author Stephen King.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Stephen King"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.7
  },
  {
    "id": 8,
    "title": "The Fault in Our Stars",
    "description": "A novel about a teenage girl who has cancer and falls in love.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "John Green"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.5
  },
  {
    "id": 9,
    "title": "The Pragmatic Programmer",
    "description": "Your Journey to Mastery.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Andrew Hunt",
      "David Thomas"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.7
  },
  {
    "id": 10,
    "title": "Treasure Island",
    "description": "An adventure novel by Scottish author Robert Louis Stevenson.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Robert Louis Stevenson"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.6
  },
  {
    "id": 11,
    "title": "Frankenstein",
    "description": "A novel about a scientist who creates a grotesque creature.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Mary Shelley"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Wuthering Heights",
    "description": "A novel about the intense and almost demonic love between Catherine Earnshaw and Heathcliff.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Emily Brontë"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.4
  },
  {
    "id": 13,
    "title": "You Don't Know JS",
    "description": "A book series diving deep into the core mechanisms of the JavaScript language.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Kyle Simpson"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.8
  },
  {
    "id": 14,
    "title": "The Call of the Wild",
    "description": "A short adventure novel by Jack London.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Jack London"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.6
  },
  {
    "id": 15,
    "title": "The Shining",
    "description": "A horror novel by Stephen King.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Stephen King"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.7
  },
  {
    "id": 16,
    "title": "Romeo and Juliet",
    "description": "A tragedy written by William Shakespeare.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "William Shakespeare"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.8
  },
  {
    "id": 17,
    "title": "Eloquent JavaScript",
    "description": "A Modern Introduction to Programming.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Marijn Haverbeke"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.7
  },
  {
    "id": 18,
    "title": "Moby-Dick",
    "description": "A novel about the voyage of the whaling ship Pequod.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Herman Melville"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.5
  },
  {
    "id": 19,
    "title": "The Haunting of Hill House",
    "description": "A horror novel by American author Shirley Jackson.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Shirley Jackson"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.6
  },
  {
    "id": 20,
    "title": "Gone with the Wind",
    "description": "A novel about the American Civil War and Reconstruction era.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Margaret Mitchell"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.7
  },
  {
    "id": 21,
    "title": "JavaScript: The Definitive Guide",
    "description": "Master the World's Most-Used Programming Language.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "David Flanagan"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.6
  },
  {
    "id": 22,
    "title": "The Three Musketeers",
    "description": "A historical adventure novel written by Alexandre Dumas.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Alexandre Dumas"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.7
  },
  {
    "id": 23,
    "title": "Pet Sematary",
    "description": "A horror novel by American author Stephen King.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Stephen King"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.5
  },
  {
    "id": 24,
    "title": "Sense and Sensibility",
    "description": "A novel by Jane Austen, published in 1811.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Jane Austen"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.6
  },
  {
    "id": 25,
    "title": "Learning Python",
    "description": "Powerful Object-Oriented Programming.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Mark Lutz"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4.7
  },
  {
    "id": 26,
    "title": "Robinson Crusoe",
    "description": "A novel by Daniel Defoe, first published in 1719.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Daniel Defoe"
    ],
    "categories": [
      "Adventure"
    ],
    "rating": 4.5
  },
  {
    "id": 27,
    "title": "The Exorcist",
    "description": "A horror novel by William Peter Blatty.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "William Peter Blatty"
    ],
    "categories": [
      "Horror"
    ],
    "rating": 4.6
  },
  {
    "id": 28,
    "title": "Anna Karenina",
    "description": "A novel by the Russian author Leo Tolstoy.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Leo Tolstoy"
    ],
    "categories": [
      "Romance"
    ],
    "rating": 4.8
  },
  {
    "id": 29,
    "title": "Effective Java",
    "description": "A programming book by Joshua Bloch.",
    "poster": "https://d2sofvawe08yqg.cloudfront.net/100-preguntas-javascript/s_hero?1620668317",
    "banner": "https://img.freepik.com/vector-premium/codificacion-programacion-desarrollo-web-codigo-computadora-banner-futurista-computadora-portatil_3482-5582.jpg",
    "authors": [
      "Joshua Bloch"
    ],
    "categories": [
      "Technology"
    ],
    "rating": 4
  }
];

export default books;