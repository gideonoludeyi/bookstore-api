from fastapi import APIRouter
from pydantic import BaseModel

from ..core import User, user_service

router = APIRouter(prefix='/users', tags=['users'])


@router.get('/{user_id}', response_model=User)
def get_user(user_id: int):
    return user_service.find(user_id)


# [x] Register a user account
class CreateUserInput(BaseModel):
    name: str
    email: str


@router.post('/', response_model=User)
def create_user(input: CreateUserInput):
    user = User(
        name=input.name,
        email=input.email,
    )
    user_service.save(user)
    return user
