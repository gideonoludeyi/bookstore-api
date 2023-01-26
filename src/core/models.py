from typing import Union
from datetime import date
from random import randint
from typing import Union

from pydantic import BaseModel, Field


def _random_int_id():
    return randint(1_000, 1_000_000_000)


class User(BaseModel):
    id: int = Field(default_factory=_random_int_id)
    name: str
    email: str


class Author(BaseModel):
    id: int = Field(default_factory=_random_int_id)
    name: str


class Book(BaseModel):
    id: int = Field(default_factory=_random_int_id)
    author_id: int
    title: str
    available_copies: int = 0
    published_at: Union[date, None]


class Rental(BaseModel):
    id: int = Field(default_factory=_random_int_id)
    user_id: int
    book_id: int
