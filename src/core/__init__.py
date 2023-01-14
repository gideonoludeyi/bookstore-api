from .models import Author, Book, Rental, User
from .repos import AuthorService, BookService, RentalService, UserService

author_service = AuthorService(items=[
    Author(
        id=1,
        name='F. Scott Fitzgerald',
    ),
    Author(
        id=2,
        name='Charles Dickens',
    ),
])

book_service = BookService(items=[
    Book(
        id=1,
        title="Oliver Twist",
        author_id=2,  # Charles Dickens
        available_copies=4,
        published_at="1838-01-01",
    ),
    Book(
        id=2,
        title="The Great Gatsby",
        author_id=1,  # F. Scott Fitzgerald
        available_copies=10,
        published_at="1925-04-10",
    ),
    Book(
        id=3,
        title="A Tale of Two Cities",
        author_id=2,  # Charles Dickens
        available_copies=15,
        published_at="1859-11-26",
    ),
])

user_service = UserService(items=[
    User(
        id=1,
        name="John Doe",
        email="john@email.com",
    ),
])

rental_service = RentalService(items=[
    Rental(
        id=552,
        user_id=1,
        book_id=1,
    )
])
