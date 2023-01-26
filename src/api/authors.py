from typing import Union, List

from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Author, Book, author_service, book_service

router = APIRouter(prefix='/authors', tags=['authors'])


# [x] Retrieve an author’s information
@router.get('/{author_id}', response_model=Union[Author, None])
def get_author(author_id: int):
    return author_service.find(author_id)


# [x] Register an author in the bookstore
class CreateAuthorInput(BaseModel):
    name: str


@router.post('/', response_model=Author)
def create_author(input: CreateAuthorInput):
    author = Author(name=input.name)
    author_service.save(author)
    return author


# [x] Delete an author from the bookstore
@router.delete('/{author_id}', response_model=bool)
def delete_author(author_id: int):
    author_exists = author_service.find(author_id) is not None
    if not author_exists:
        return False

    author_service.remove(author_id)
    return True

# [x] Retrieve all books published by a specific author
@router.get('/{author_id}/books', response_model=List[Book])
def get_books_by_author(author_id: int):
    return book_service.find_for_author(author_id)
