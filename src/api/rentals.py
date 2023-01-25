from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from ..core import Rental, book_service, rental_service, user_service

router = APIRouter(prefix='/rentals', tags=['rentals'])


@router.get('/')
def get_rentals():
    return rental_service.find_all()


# [x] Rent a book from the bookstore
class CreateRentalInput(BaseModel):
    user_id: int
    book_id: int


@router.post('/', response_model=Rental)
def create_rental(input: CreateRentalInput):
    book = book_service.find(input.book_id)
    user = user_service.find(input.user_id)
    if book is None:
        raise HTTPException(
            status_code=404,
            detail=f"Book not found",
        )
    if user is None:
        raise HTTPException(
            status_code=404,
            detail=f"User not found",
        )

    if book.available_copies <= 0:
        raise HTTPException(
            status_code=400,
            detail=f"Insufficient copies",
        )

    book.available_copies -= 1

    rental = Rental(
        user_id=input.user_id,
        book_id=input.book_id,
    )

    rental_service.save(rental)
    book_service.save(book)

    return rental


# [x] Return a book rental back to the bookstore
@router.delete('/{rental_id}', response_model=bool)
def delete_rental(rental_id: int):
    rental = rental_service.find(rental_id)
    if rental is None:
        return False

    book = book_service.find(rental.book_id)
    if book is not None:
        book.available_copies += 1
        book_service.save(book)
    else:
        print("This should not happen, but it's not client's fault.")

    rental_service.remove(rental_id)
    return True
