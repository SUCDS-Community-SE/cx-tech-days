from functools import wraps
from flask import session

def authorize(function):
    @wraps(function)
    def wrap(*args, **kwargs):
        if session["token"]:
        # verify id-token via firebase.auth api
            return function(*args, **kwargs)  
        return "NETTER VERSUCH", 403
    return wrap
