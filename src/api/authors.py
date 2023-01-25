from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Author, author_service

router = APIRouter(prefix='/authors', tags=['authors'])


# [x] Retrieve an author’s information
@router.get('/{author_id}', response_model=Author | None)
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
