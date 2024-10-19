// script.js

document.addEventListener('DOMContentLoaded', () => {
    const books = {
        beginner: [
            { title: 'English for Beginners', author: 'Anne Seaton <br> Y. H. Mew', image: 'https://example.com/beginner1.jpg', read: false },
            { title: 'Grammar', author: 'AMSCO SCHOOL PUBLICATIONS', image: 'https://example.com/beginner2.jpg', read: false },
            { title: 'Basic Grammar', author: 'Anne Seaton <br> Y. H. Mew', image: 'https://example.com/beginner1.jpg', read: false },
            { title: 'Dictionary', author: 'OXFORD Publication<br>', image: 'https://example.com/beginner1.jpg', read: false },
            { title: 'Grammar Workbook', author: 'Arlene Miller The <br> ', image: 'https://example.com/beginner1.jpg', read: false },
            { title: 'Conversion Stories', author: 'Dr. Vandana <br>', image: 'https://example.com/beginner1.jpg', read: false },
            // Add more beginner books here
        ],
        intermediate: [
            { title: 'Intermediate English Vocabulary', author: 'Cambridge University', image: 'https://example.com/intermediate1.jpg', read: false },
            { title: 'English Conversation Skills', author: 'Roy Johnson', image: 'https://example.com/intermediate2.jpg', read: false },
            { title: 'Grammer Comic ', author: 'Miss.Priti', image: 'https://example.com/intermediate1.jpg', read: false },
            { title: 'Elementary Level Grammar Book ', author: 'Herwig Rothländer', image: 'https://example.com/intermediate1.jpg', read: false },
            // Add more intermediate books here
        ],
        advanced: [
            
            { title: 'Advanced GRAMMAR', author: 'Carol Davis', image: 'https://example.com/advanced1.jpg', read: false },
            { title: 'EXPERT_LEARNING', author: 'Dave Wilson', image: 'https://example.com/advanced2.jpg', read: false },
            { title: 'Advanced_English_GRAMMER', author: 'Carol Davis', image: 'https://example.com/advanced1.jpg', read: false },
            { title: 'Advanced Grammer Use', author: 'University Press', image: 'https://example.com/advanced2.jpg', read: false },
            { title: 'Writing Skill', author: ' Wilcox Peterson', image: 'https://example.com/advanced1.jpg', read: false },

            // Add more advanced books here
        ]
    };

    const bookSections = {
        beginner: document.getElementById('beginner-list'),
        intermediate: document.getElementById('intermediate-list'),
        advanced: document.getElementById('advanced-list')
    };

    function displayBooks(level, books) {
        const container = bookSections[level];
        container.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <button class="${book.read ? 'read' : ''}" onclick="toggleRead('${level}', '${book.title}')">
                    ${book.read ? 'Read' : 'Mark as Read'}
                </button>
                ${book.read ? '<p class="mark-read">Read</p>' : ''}
            `;
            container.appendChild(bookItem);
        });
    }

    function filterBooks(query) {
        Object.keys(bookSections).forEach(level => {
            const filteredBooks = books[level].filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
            displayBooks(level, filteredBooks);
        });
    }

    window.toggleRead = function(level, title) {
        location=title+".pdf";
        window.open(location, "_blank");
        const book = books[level].find(b => b.title === title);
        if (book) {
            book.read = !book.read;
            displayBooks(level, books[level]); // Re-display to update status
        }
    }

    document.getElementById('search').addEventListener('input', () => {
        filterBooks(document.getElementById('search').value);
    });

    // Initially display all books
    Object.keys(books).forEach(level => {
        displayBooks(level, books[level]);
    });
});
