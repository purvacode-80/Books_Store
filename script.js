// script.js

document.addEventListener('DOMContentLoaded', () => {
    const books = {
        beginner: [
            { title: 'Basic Grammar', author: 'Anne Seaton <br> Y. H. Mew',  read: false },
            { title: 'Learn English - Fast and Easy', author: 'OXFORD Publication<br>', read: false },
            { title: 'Spoken_English', author: 'Arlene Miller The <br> ', read: false },
            // Add more beginner books here
        ],
        intermediate: [
            { title: 'Grammar', author: 'AMSCO SCHOOL PUBLICATIONS', read: false },
            { title: 'Reading Skills', author: 'Dr. Vandana <br>',read: false },
            { title: 'Grammer Comic ', author: 'Miss.Priti',read: false },
            { title: 'Elementary Level Grammar Book ', author: 'Herwig Rothländer', read: false },
            // Add more intermediate books here
        ],
        advanced: [
            
            { title: 'Advanced Vocabulary', author: 'Carol Davis',read: false },
            { title: 'Teachers Book', author: 'Dave Wilson', read: false },
             { title: 'Writing Skill', author: 'Roy Johnson',read: false },
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
