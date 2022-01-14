const productsData = [
    {
        name: 'React - Laptop Sticker',
        image: '../../public/images/Stickerview1.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'React is a JavaScript library for creating user interfaces by Facebook and Instagram. This sticker is a must for all you React fans out there and rock star UI developers who are building reusable user interface components.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 5
    },
    {
        name: 'NodeJs - Laptop Sticker',
        image: '../../public/images/Stickerview2.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'World most popular javascript server side scripting framework. Here is a hex version sticker for NodeJS',
        countInStocks: 10,
        ratings: 4,
        numOfReviews: 5
    },
    {
        name: 'MongoDB - Laptop Sticker',
        image: '../../public/images/Stickerview3.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database is more productive to use. It is the world most popular database for modern apps.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 5
    },
    {
        name: 'Visual Studio Code - Laptop Sticker',
        image: 'https://github.com/porwalarchit/minor-project/blob/master/Backend/public/images/Stickerview1.jpg?raw=true',
        price: 29.00,
        category: 'Stickers',
        description: 'VS Code is the most famous code editor in recent times. The amount of extensions it provides is mind blowing.',
        countInStocks: 10,
        ratings: 4.9,
        numOfReviews: 25
    },
    {
        name: 'Postman - Laptop Sticker',
        image: '../../public/images/Stickerview5.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'The best tool for doing easy API Development.',
        countInStocks: 10,
        ratings: 4.4,
        numOfReviews: 6
    },
    {
        name: 'Google Chrome - Laptop Sticker',
        image: '../../public/images/Stickerview6.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Google Chrome is a cross-platform web browser developed by Google.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 32
    },
    {
        name: 'JavaScript - Laptop Sticker',
        image: '../../public/images/Stickerview7.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'JavaScript is a flexible and powerful programming language that is implemented consistently by various web browsers.',
        countInStocks: 10,
        ratings: 4.4,
        numOfReviews: 7
    },
    {
        name: 'C++ - Laptop Sticker',
        image: '../../public/images/Stickerview8.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'C++ is an object oriented language. One of the most powerful languages out there with amazing performance, efficiency and flexibility. This could be enabled due to the facility it provides for low-level memory manipulation',
        countInStocks: 10,
        ratings: 5,
        numOfReviews: 6
    },
    {
        name: 'Java - Laptop Sticker',
        image: '../../public/images/Stickerview9.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible - Wikipedia.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 6
    },
    {
        name: 'Dev - Laptop Sticker',
        image: '../../public/images/Stickerview10.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'This is a very minimalist sticker for all the developers out there! Keep it simple, keep rocking and keep creating beautiful stuff out there!',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 11
    },
    {
        name: 'CSS3 - Laptop Sticker',
        image: '../../public/images/Stickerview11.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'CSS# has the ability to do amazing things like animation, shadows, etc, adds a whole new layer to any web application.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 15
    },
    {
        name: 'HTML5 - Laptop Sticker',
        image: '../../public/images/Stickerview12.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'HTML5 is a markup language used for structuring and presenting content for the World Wide Web and a core technology of the Internet.',
        countInStocks: 10,
        ratings: 4.4,
        numOfReviews: 20
    },
    {
        name: 'GitHub - Laptop Sticker',
        image: '../../public/images/Stickerview13.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 9
    },
    {
        name: 'Stack Overflow - Laptop Sticker',
        image: '../../public/images/Stickerview14.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Stack Overflow is a question and answer website for professional and enthusiast programmers.',
        countInStocks: 10,
        ratings: 4.2,
        numOfReviews: 6
    },
    {
        name: 'Adobe Photoshop - Laptop Sticker',
        image: '../../public/images/Stickerview15.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.',
        countInStocks: 10,
        ratings: 4.8,
        numOfReviews: 20
    },
    {
        name: 'Adobe Illustrator - Laptop Sticker',
        image: '../../public/images/Stickerview16.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc.',
        countInStocks: 10,
        ratings: 4.6,
        numOfReviews: 12
    },
    {
        name: 'Python - Laptop Sticker',
        image: '../../public/images/Stickerview17.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Python is an interpreted high-level general-purpose programming language.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 10
    },
    {
        name: 'Internet Dinosaur - Laptop Sticker',
        image: '../../public/images/Stickerview18.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Dinosaur Game is an endless runner game originally built into Google Chrome.',
        countInStocks: 10,
        ratings: 3.9,
        numOfReviews: 3
    },
    {
        name: 'Android - Laptop Sticker',
        image: '../../public/images/Stickerview19.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Google actually did not start Android but acquired the company Android Inc. in 2005 at $50 million. Also, all the versions of Android are named in an alphabetical order. ',
        countInStocks: 10,
        ratings: 4.7,
        numOfReviews: 15
    },
    {
        name: 'Terminal - Laptop Sticker',
        image: '../../public/images/Stickerview20.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'Terminals, also known as command lines or consoles, allow us to accomplish and automate tasks on a computer without the use of a graphical user interface.',
        countInStocks: 10,
        ratings: 4.6,
        numOfReviews: 8
    },
    {
        name: 'HTTPS - Laptop Sticker',
        image: '../../public/images/Stickerview21.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'This is a standard everyone should comply with. Just put it on your device and make it secure.',
        countInStocks: 10,
        ratings: 4.0,
        numOfReviews: 4
    },
    {
        name: 'Google Cloud - Laptop Sticker',
        image: '../../public/images/Stickerview22.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'A suite of different cloud services provided by Google. ',
        countInStocks: 10,
        ratings: 4.1,
        numOfReviews: 9
    },
    {
        name: 'Just Do it - Laptop Sticker',
        image: '../../public/images/Stickerview23.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'When you want to do something just do it, no matter what people say because no one has the right to give you the approval to do something.',
        countInStocks: 10,
        ratings: 4.3,
        numOfReviews: 10
    },
    {
        name: 'Like - Laptop Sticker',
        image: '../../public/images/Stickerview24.jpg',
        price: 29.00,
        category: 'Stickers',
        description: 'The heart emoji is used in warm emotional contexts. It can be used to express gratitude, love, happiness, or hope.',
        countInStocks: 10,
        ratings: 4.5,
        numOfReviews: 8
    },
]

module.exports = productsData;