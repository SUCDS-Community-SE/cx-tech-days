import logic 
import redis
import pyrebase
import requests
import json
from flask import Flask, session
from flask_restx import Resource, Api, fields
from flask_cors import CORS
from flask import request
from flask_session import Session
from objects.suggestionObject import SuggestionObject
from objects.voteObject import VoteObject
from authorization.authorizationFilter import authorize

app = Flask("CXTechDays")

"""Enable all resources of cxtechdays for cross origin resource sharing"""
CORS(app, resources=r'*')

api = Api(app, version='1.0', title='API of the CX Tech Days', description='An API for the CX Tech Days Website.')

cxtechdays = api.namespace('cxtechdays', description='function of the Website')

SESSION_TYPE = 'redis'
SESSION_REDIS = redis.from_url('redis://localhost:6379')
PERMANENT_SESSION_LIFETIME = 60 * 20 # 20 min
app.config.from_object(__name__)
Session(app)

config = {
"apiKey": "AIzaSyA95baSAKgaRGoj8MV3iV1hpF0zpvpRYNo",
"authDomain": "cx-tech-days.firebaseapp.com",
"projectId": "cx-tech-days",
"storageBucket": "cx-tech-days.appspot.com",
"messagingSenderId": "316855049115",
"appId": "1:316855049115:web:3d221fa672bb3d3bfb1f3e",
"measurementId": "G-3GJT4D9KJL",
"databaseURL": ""
}

firebase = pyrebase.initialize_app(config)

@app.route('/authenticate', methods=["POST"])
def authenticate():
    try:
        firebase_response = firebase.auth().sign_in_with_email_and_password(request.json["email"], request.json["password"])
        session["token"] = firebase_response["localId"]
        return "ok", 200  #redirect
    except requests.exceptions.HTTPError as e:
        try:
            error_dict = json.loads(e.strerror)
            error_message = error_dict["error"]["message"]
            error_code = error_dict["error"]["code"]
            return error_message, error_code
        except json.JSONDecodeError as e:  
            return "Unbekannter Fehler", 500

@app.route('/test', methods=["GET"])
@authorize
def test():
    return "SENSITIVE DATEN 1!!!1!"

#######################################################################################################################
# Model declaration for serialization
#######################################################################################################################

suggestion = api.model('Suggestion', {
    'id': fields.String(attribute='_id', description='unique identifier for a object'),
    'title': fields.String(attribute='_title', description='The title of the suggestion'),
    'topic': fields.String(attribute='_topic', description='The topic of the suggestion'),
    'type': fields.String(attribute='_type', description='The type of the suggestion'),
    'speaker': fields.String(attribute='_speaker', description='The speaker of the suggestion'),
    'abstract': fields.String(attribute='_abstract', description='The abstract of the suggestion'),
    'speakerShortInfo': fields.String(attribute='_speakerShortInfo', description='The speakerShortInfo of the suggestion'),
    'votes': fields.Integer(attribute='_votes', description='The votes of the suggestion'),
})

vote = api.model('Suggestion', {
    'userID': fields.String(attribute='_userid', description='unique identifier for a object'),
    'suggestionID': fields.String(attribute='_suggestionid', description='The title of the suggestion'),
})
#######################################################################################################################
# SUGGESTIONS API
#######################################################################################################################

@cxtechdays.route('/api/suggestions', methods=["GET", "POST"])
@cxtechdays.response(500, 'If there is an error from the server.')
class SuggestionsListOps(Resource):
    @cxtechdays.marshal_list_with(suggestion)
    def get(self):
        """
        Gets all suggestions objects.
        :return: suggestions objects, if there are no suggestion objects, an empty sequence will be returned
        """
        suggestion_list = logic.get_all_suggestions()

        #print(suggestion_list)
        return suggestion_list

    @cxtechdays.marshal_with(suggestion, code=201)
    @cxtechdays.expect(suggestion, validate=True)
    def post(self):
        """
        Creates and inserts a new suggestion into the database.
        :param id: identifies the data set of the suggestion
        :return: the new suggestion object
        """
        suggestion = SuggestionObject.from_dict(api.payload)

        if suggestion is not None:
            logic.create_suggestion(suggestion.get_id(), suggestion.get_title(), suggestion.get_topic(), suggestion.get_type(), suggestion.get_speaker(), suggestion.get_abstract(), suggestion.get_speakerShortInfo(), suggestion.get_votes())
            return suggestion, 200
        else:
            return "", 500
    
@cxtechdays.route('/api/suggestions/<id>', methods=["GET", "PUT", "DELETE"])
@cxtechdays.response(500, 'If there is an error from the server.')
@cxtechdays.param('id', 'ID of the suggestion object')
class SuggestionOps(Resource):
    @cxtechdays.marshal_with(suggestion)
    def get(self, id):
        """
        Gets a suggestion object by its ID.
        :param id: identifies the data set of the suggestion
        :return: the suggestion object
        """
        suggestion = logic.get_suggestion_by_id(id)

        return suggestion

    @cxtechdays.marshal_with(suggestion)
    @cxtechdays.expect(suggestion, validate=True)
    def put(self, id):
        """
        Updates a suggestion in the database.
        :param id: identifies the data set of the suggestion
        :return: the updated suggestion object
        """
        suggestion = SuggestionObject.from_dict(api.payload)
        #suggestion['id'] = id
        #print(id, suggestion)

        if suggestion is not None:
            logic.update_suggestion(suggestion)
            return suggestion, 200
        else:
            return '', 500

    def delete(self, id):
        """
        Deletes a suggestion from the database.
        :param id: identifies the data set of the suggestion
        :return: an empty string
        """
        logic.delete_suggestion(id)
        return '', 200

#######################################################################################################################
# USER VOTES API
#######################################################################################################################
         
@cxtechdays.route('/api/votes', methods=["GET", "POST"])
@cxtechdays.response(500, 'If there is an error from the server.')
class VotesListOps(Resource):
    @cxtechdays.marshal_list_with(vote)
    def get(self):
        """
        Gets all user votes objects.
        :return: user votes objects, if there are no suggestion objects, an empty sequence will be returned
        """
        uservotes_list = logic.get_all_votes()

        #print(suggestion_list)
        return uservotes_list

    @cxtechdays.marshal_with(vote, code=201)
    @cxtechdays.expect(vote, validate=True)
    def post(self):
        """
        Creates and inserts a new vote into the database.
        :param id: identifies the data set of the vote
        :return: the new suggestion object
        """
        vote = VoteObject.from_dict(api.payload)

        if vote is not None:
            logic.create_vote(vote.get_userid(), vote.get_suggestionid())
            return vote, 200
        else:
            return "", 500
    
@cxtechdays.route('/api/votes/<id>', methods=["GET", "PUT"])
@cxtechdays.response(500, 'If there is an error from the server.')
@cxtechdays.param('id', 'ID of the user of the vote object')
class VoteOps(Resource):
    @cxtechdays.marshal_with(vote)
    def get(self, id):
        """
        Gets a vote object by its ID.
        :param id: identifies the data set of the vote
        :return: the vote object
        """
        vote = logic.get_vote_by_id(id)

        return vote

    @cxtechdays.marshal_with(vote)
    @cxtechdays.expect(vote, validate=True)
    def put(self, id):
        """
        Updates a vote in the database.
        :param id: identifies the data set of the vote
        :return: the updated vote object
        """
        vote = VoteObject.from_dict(api.payload)
        #vote['id'] = id
        #print(id, vote)

        if vote is not None:
            logic.update_vote(vote)
            return vote, 200
        else:
            return '', 500

if __name__ == '__main__':
    app.run(debug=True)