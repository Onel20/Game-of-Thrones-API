let bookTemplate = Handlebars.compile(document.getElementById("bookTemplate").innerHTML);

async function fetchBook(number) {
    try {
        const response = await fetch(`https://anapioficeandfire.com/api/books/${number}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const book = await response.json();
        return {
            name: book.name,
            authors: book.authors,
            numberOfPages: book.numberOfPages
        };
    } catch (error) {
        console.log(error);
        return "A Book with that Number does not exist";
    }
}

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const number = event.target.querySelector('input[type="number"]').value;
    const bookContainer = document.querySelector('.bookContainer');
    const nameee = document.querySelector(".name");
    const authorsss = document.querySelector(".authors");
    const numberrr = document.querySelector(".number")

    const bookInfo = await fetchBook(number);
    console.log(bookInfo);
    bookContainer.innerHTML = bookTemplate(bookInfo);
    nameee.innerHTML = `Book Name = ${bookInfo.name}`;
    authorsss.innerHTML = `Authors Name = ${bookInfo.authors}`;
    numberrr.innerHTML = `Number of Pages = ${bookInfo.numberOfPages}`;

});