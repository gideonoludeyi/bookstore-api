from datetime import date

from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Book, book_service

router = APIRouter(prefix='/books', tags=['books'])


# [x] Retrieve all books in the bookstore
# [x] Retrieve all books published by a specific author
@router.get('/')
def get_books(author_id: int | None = None):
    if author_id is not None:
        return book_service.find_for_author(author_id)
    return book_service.find_all()


# [x] Retrieve a single book
@router.get('/{book_id}', response_model=Book | None)
def get_book(book_id: int):
    return book_service.find(book_id)


# [x] Add a book to the bookstore
class CreateBookInput(BaseModel):
    title: str
    available_copies: int
    published_at: date
    author_id: int


@router.post('/', response_model=Book)
def create_book(input: CreateBookInput):
    existing_book = book_service.find_match(
        title=input.title,
        author_id=input.author_id,
    )
    if existing_book is not None:
        existing_book.available_copies += input.available_copies
        book = existing_book
    else:
        book = Book(
            title=input.title,
            available_copies=input.available_copies,
            published_at=input.published_at,
            author_id=input.author_id,
        )
    book_service.save(book)
    return book


# [x] Update book information
class UpdateBookInput(BaseModel):
    title: str | None = None
    available_copies: int | None = None
    published_at: date | None = None


@router.patch('/{book_id}', response_model=Book | None)
def update_book(book_id: int, input: UpdateBookInput):
    book = book_service.find(book_id)
    if book is None:
        return None

    book.title = input.title or book.title
    book.available_copies = input.available_copies or book.available_copies
    book.published_at = input.published_at or book.published_at

    book_service.save(book)
    return book


# [x] Delete a book from the bookstore
@router.delete('/{book_id}', response_model=bool)
def delete_book(book_id: int):
    book_exists = book_service.find(book_id) is not None
    if not book_exists:
        return False

    book_service.remove(book_id)
    return True
