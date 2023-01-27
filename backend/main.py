from flask import Flask
from flask_restx import Resource, Api, fields
from flask_cors import CORS
from flask import request
import logic as logic

app = Flask("CXTechDays")

"""Enable all resources of cxtechdays for cross origin resource sharing"""
CORS(app, resources=r'*')

api = Api(app, version='1.0', title='API of the CX Tech Days', description='An API for the CX Tech Days Website.')

cxtechdays = api.namespace('CXTechDays', description='function of the Website')

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
        suggestion_list = logic.get_all_suggestions()

        return suggestion_list

#######################################################################################################################
# REGISTRATIONS API
#######################################################################################################################

# The two following lines are only executed in local environment. They have no effect in the cloud.
if __name__ == '__main__':
    app.run(debug=True)