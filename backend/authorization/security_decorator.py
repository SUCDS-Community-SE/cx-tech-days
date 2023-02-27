from flask import request
from google.auth.transport.requests import Request
import google.oauth2.id_token

def secured(function):

    firebase_request_adapter = Request()

    def wrapper(*args, **kwargs):

        id_token = request.headers.get("token")
        claims = None
        objects = None

        if id_token:
            try:
                claims = google.oauth2.id_token.verify_firebase_token(id_token, firebase_request_adapter)

                if claims is not None:
                    objects = function(*args, **kwargs)
                    return objects
                else:
                    return '', 401  # UNAUTHORIZED
            except ValueError as exc:
                return exc, 401  # UNAUTHORIZED

        return '', 401  # UNAUTHORIZED

    return wrapper
