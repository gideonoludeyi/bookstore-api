from fastapi import APIRouter
from pydantic import BaseModel

from ..core import User, user_service

router = APIRouter(prefix='/users', tags=['users'])


@router.get('/{user_id}', response_model=User)
def get_user(user_id: int):
    return user_service.find(user_id)


# [ ] Register a user account
