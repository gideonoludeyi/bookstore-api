from typing import Union

from fastapi import FastAPI

from src.api.authors import router as authors_router
from src.api.books import router as books_router
from src.api.rentals import router as rentals_router
from src.api.users import router as users_router

app = FastAPI()


@app.get("/")
def root():
    return {"name": "Bookstore API"}


app.include_router(books_router)
app.include_router(authors_router)
app.include_router(rentals_router)
app.include_router(users_router)
