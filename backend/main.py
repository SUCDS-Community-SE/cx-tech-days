from flask import Flask, send_file
from flask_restx import Resource, Api, fields
from flask_cors import CORS
import csv
import io
import os

import logic as logic
from objects.suggestionObject import SuggestionObject
from objects.voteObject import VoteObject
from authorization.security_decorator import secured

app = Flask("CXTechDays")

"""Enable all resources of cxtechdays for cross origin resource sharing"""
CORS(app, resources=r"/*", origins="*",
     allow_headers="*", supports_credentials=True)

api = Api(app, version='1.0', title='API of the CX Tech Days',
          description='An API for the CX Tech Days Website.')

cxtechdays = api.namespace('cxtechdays', description='function of the Website')

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
    @secured
    @cxtechdays.marshal_list_with(suggestion)
    def get(self):
        """
        Gets all suggestions objects.
        :return: suggestions objects, if there are no suggestion objects, an empty sequence will be returned
        """

        suggestion_list = logic.get_all_suggestions()
        return suggestion_list, 200

    @secured
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
            logic.create_suggestion(suggestion.get_id(), suggestion.get_title(), suggestion.get_topic(), suggestion.get_type(
            ), suggestion.get_speaker(), suggestion.get_abstract(), suggestion.get_speakerShortInfo(), suggestion.get_votes())
            return suggestion, 200
        else:
            return "", 500

    # def options(self):
    #     return {'Allow': 'GET, POST, PUT, DELETE'}, 200


@cxtechdays.route('/api/suggestionsCSV', methods=["GET"])
@cxtechdays.response(500, 'If there is an error from the server.')
class SuggestionsCSVOps(Resource):
    @secured
    def get(self):
        """
        Gets all suggestions objects.
        :return: suggestions objects, if there are no suggestion objects, an empty sequence will be returned
        """
        suggestion_list = logic.get_all_suggestions()
        suggestion_csv = io.StringIO(newline='')
        fieldnames = ['id', 'title', 'topic', 'type',
                      'speaker', 'abstract', 'speakerShortInfo', 'votes']
        writer = csv.DictWriter(suggestion_csv, fieldnames=fieldnames)
        writer.writeheader()
        for suggestion in suggestion_list:
            writer.writerow({'id': suggestion['_id'], 'title': suggestion['_title'], 'topic': suggestion['_topic'], 'type': suggestion['_type'],
                            'speaker': suggestion['_speaker'], 'abstract': suggestion['_abstract'], 'speakerShortInfo': suggestion['_speakerShortInfo'], 'votes': suggestion['_votes']})
        suggestion_csv.seek(0)
        csv_dir = "./csv"
        csv_file = "suggestions.csv"
        csv_path = os.path.join(csv_dir, csv_file)
        with open(csv_path, 'w') as file:
            file.write(suggestion_csv.getvalue())
        return send_file(csv_path, as_attachment=True, download_name='suggestions.csv')


@cxtechdays.route('/api/suggestions/<id>', methods=["GET", "PUT", "DELETE"])
@cxtechdays.response(500, 'If there is an error from the server.')
@cxtechdays.param('id', 'ID of the suggestion object')
class SuggestionOps(Resource):
    @secured
    @cxtechdays.marshal_with(suggestion)
    def get(self, id):
        """
        Gets a suggestion object by its ID.
        :param id: identifies the data set of the suggestion
        :return: the suggestion object
        """
        suggestion = logic.get_suggestion_by_id(id)

        return suggestion

    @secured
    @cxtechdays.marshal_with(suggestion)
    @cxtechdays.expect(suggestion, validate=True)
    def put(self, id):
        """
        Updates a suggestion in the database.
        :param id: identifies the data set of the suggestion
        :return: the updated suggestion object
        """
        suggestion = SuggestionObject.from_dict(api.payload)
        # suggestion['id'] = id
        # print(id, suggestion)

        if suggestion is not None:
            logic.update_suggestion(suggestion)
            return suggestion, 200
        else:
            return '', 500

    @secured
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
    @secured
    @cxtechdays.marshal_list_with(vote)
    def get(self):
        """
        Gets all user votes objects.
        :return: user votes objects, if there are no suggestion objects, an empty sequence will be returned
        """
        uservotes_list = logic.get_all_votes()
        return uservotes_list

    @secured
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
    @secured
    @cxtechdays.marshal_with(vote)
    def get(self, id):
        """
        Gets a vote object by its ID.
        :param id: identifies the data set of the vote
        :return: the vote object
        """
        vote = logic.get_vote_by_id(id)

        return vote

    @secured
    @cxtechdays.marshal_with(vote)
    @cxtechdays.expect(vote, validate=True)
    def put(self, id):
        """
        Updates a vote in the database.
        :param id: identifies the data set of the vote
        :return: the updated vote object
        """
        vote = VoteObject.from_dict(api.payload)
        # vote['id'] = id
        # print(id, vote)

        if vote is not None:
            logic.update_vote(vote)
            return vote, 200
        else:
            return '', 500


if __name__ == '__main__':
    app.run(debug=True)
