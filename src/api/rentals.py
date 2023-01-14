from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from ..core import Rental, book_service, rental_service, user_service

router = APIRouter(prefix='/rentals', tags=['rentals'])


@router.get('/')
def get_rentals():
    return rental_service.find_all()


# [ ] Rent a book from the bookstore

# [ ] Return a book rental back to the bookstore
