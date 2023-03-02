from flask import request
import firebase_admin
from firebase_admin import auth, credentials

cred = credentials.Certificate('./cx-tech-days-firebase-adminsdk-ftonq-9ef2551631.json')
firebase_admin.initialize_app(cred)

def secured(function):
    def wrapper(*args, **kwargs):
        id_token = request.headers.get("token")
        claims = None
        objects = None

        if id_token:
            try:
                decoded_token = auth.verify_id_token(id_token)
                uid = decoded_token['uid']
                claims = decoded_token.get('claims', {})
                if claims is not None:
                    objects = function(*args, **kwargs)
                    return objects
                else:
                    return 'UNAUTHORIZED', 401  # UNAUTHORIZED
            except ValueError as exc:
                print(exc)
                return exc, 401  # UNAUTHORIZED
        else:
            return 'UNAUTHORIZED', 401  # UNAUTHORIZED

    return wrapper
