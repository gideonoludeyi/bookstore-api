from typing import Union

from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Author, Book, author_service, book_service

router = APIRouter(prefix='/authors', tags=['authors'])


# [ ] Retrieve an author’s information

# [ ] Register an author in the bookstore

# [ ] Delete an author from the bookstore

# [ ] Retrieve all books published by a specific author
