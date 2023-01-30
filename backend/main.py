from flask import Flask
from flask_restx import Resource, Api, fields
from flask_cors import CORS
from flask import request
import logic as logic

app = Flask("CXTechDays")

"""Enable all resources of cxtechdays for cross origin resource sharing"""
CORS(app, resources=r'*')

api = Api(app, version='1.0', title='API of the CX Tech Days', description='An API for the CX Tech Days Website.')

cxtechdays = api.namespace('cxtechdays', description='function of the Website')

#######################################################################################################################
# Model declaration for serialization
#######################################################################################################################

suggestion = api.model('Suggestion', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a suggestion'),
    'topic': fields.String(required=True, description='The topic of the suggestion'),
    'type': fields.String(required=True, description='The type of the suggestion'),
    'speaker': fields.String(required=True, description='The speaker of the suggestion'),
    'time': fields.String(required=True, description='The time of the suggestion'),
    'date': fields.String(required=True, description='The date of the suggestion'),
    'votes': fields.Integer(required=True, description='The votes of the suggestion'),
})

email = api.model('Email', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a email'),
    'email': fields.String(required=True, description='The email of the user'),
})

#######################################################################################################################
# SUGGESTIONS API
#######################################################################################################################

@cxtechdays.route('/api/suggestions')
@cxtechdays.response(500, 'If there is an error from the server.')

class SuggestionsListOps(Resource):
    @cxtechdays.marshal_list_with(suggestion)
    def get(self):
        """
        Gets all suggestions objects.
        :return: suggestions objects, if there are no suggestion objects, an empty sequence will be returned
        """
        #suggestion_list = logic.get_all_suggestions()
        suggestion_list = [{'id': 1, 'topic': 'React', 'type': 'Speach', 'speaker': 'Sebastian', 'time': '12:00', 'date': '10-01-202', 'votes': 4},
        {'id': 2, 'topic': 'JavaScript', 'type': 'Speach', 'speaker': 'Anna', 'time': '13:00', 'date': '10-01-202', 'votes': 2}]
        print(suggestion_list)
        return suggestion_list

    @cxtechdays.marshal_list_with(suggestion, code=201)
    def post(self, id):
        """
        Creates and inserts a new suggestion into the database.
        :param id: identifies the data set of the suggestion
        :return: the new suggestion object
        """
        suggestion = logic.get_suggestion_by_id(id)

        if suggestion is not None:
            result = logic.insert_suggestion(suggestion)
            return result
        else:
            return "Unknown suggestion", 500

#######################################################################################################################
# REGISTRATIONS API
#######################################################################################################################
@cxtechdays.route('/api/emails')
@cxtechdays.response(500, 'If there is an error from the server.')

class EmailsListOps(Resource):
    @cxtechdays.marshal_list_with(email, code=201)
    def post(self, id):
        """
        Creates and inserts a new suggestion into the database.
        :param id: identifies the data set of the suggestion
        :return: the new suggestion object
        """
        email = logic.get_email_by_id(id)

        if email is not None:
            result = logic.insert_email(email)
            return result
        else:
            return "Unknown email", 500

# The two following lines are only executed in local environment. They have no effect in the cloud.
if __name__ == '__main__':
    app.run(debug=True)