from fastapi import APIRouter
from pydantic import BaseModel

from ..core import Author, author_service

router = APIRouter(prefix='/authors', tags=['authors'])


# [ ] Retrieve an author’s information

# [ ] Register an author in the bookstore

# [ ] Delete an author from the bookstore
