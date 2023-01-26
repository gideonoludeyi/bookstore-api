from datetime import date
from typing import Union

from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Book, book_service

router = APIRouter(prefix='/books', tags=['books'])


# [ ] Retrieve all books in the bookstore

# [ ] Retrieve all books published by a specific author

# [ ] Retrieve a single book

# [ ] Add a book to the bookstore

# [ ] Update book information

# [ ] Delete a book from the bookstore
