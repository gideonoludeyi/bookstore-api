from typing import Generic, TypeVar, Union

from .models import Author, Book, Rental, User

T = TypeVar('T')


class BaseService(Generic[T]):
    def __init__(self, items: Union[list[T], None] = None) -> None:
        self.items = items if items is not None else []

    def find_all(self) -> list[T]:
        return self.items

    def find(self, id: int) -> Union[T, None]:
        for item in self.items:
            if item.id == id:
                return item
        return None

    def remove(self, id: int) -> None:
        self.items = [
            item
            for item in self.items
            if item.id != id
        ]

    def save(self, item: T) -> None:
        self.remove(item.id)
        self.items.append(item)


class AuthorService(BaseService[Author]):
    pass


class BookService(BaseService[Book]):
    def find_match(self, title: Union[str, None] = None, author_id: Union[int, None] = None) -> Union[Book, None]:
        result = [
            book
            for book in self.find_all()
            if (author_id is None or book.author_id == author_id)
            and (title is None or book.title == title)
        ]
        return next(iter(result), None)

    def find_for_author(self, author_id: int) -> list[Book]:
        return [
            book
            for book in self.find_all()
            if book.author_id == author_id
        ]


class UserService(BaseService[User]):
    def find_by_email(self, email: str) -> Union[User, None]:
        for user in self.find_all():
            if user.email == email:
                return user
        return None


class RentalService(BaseService[Rental]):
    pass
