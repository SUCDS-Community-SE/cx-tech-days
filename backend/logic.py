from dbabstraction.SuggestionMapper import SuggestionMapper
from dbabstraction.VoteMapper import VoteMapper
from objects.suggestionObject import SuggestionObject
from objects.voteObject import VoteObject

# Suggestion Mapper

def create_suggestion(id, title, topic, type, speaker, abstract, speakerShortInfo, votes):
    """
    Creates a new person object.
    :return: the new person object
    """
    suggestion = SuggestionObject(id, title, topic, type, speaker, abstract, speakerShortInfo, votes)

    with SuggestionMapper() as mapper:
        return mapper.insert(suggestion)

def get_all_suggestions():
    """
    Requests the suggestions-mapper to return all the suggestions from the DB.
    :return: all suggestion objects from the DB.
    """
    with SuggestionMapper() as mapper:
        return mapper.find_all()

def get_suggestion_by_id(id):
    """
    Requests the suggestions-mapper to return a specific suggestion from the DB.
    :param id: identifies the data set of the suggestion
    :return: the suggestion object with the given id.
    """
    with SuggestionMapper() as mapper:
        return mapper.find_by_key(id)

def insert_suggestion(suggestion):
    """
    Requests the suggestions-mapper to create a new suggestion in the DB.
    :param suggestion: the suggestion object to be created in the DB.
    :return: the suggestion object with the given id.
    """
    with SuggestionMapper() as mapper:
        return mapper.insert(suggestion)

def update_suggestion(suggestion):
    """
    Requests the suggestions-mapper to update a suggestion in the DB.
    :param suggestion: the suggestion object to be updated in the DB.
    :return: the suggestion object with the given id.
    """
    with SuggestionMapper() as mapper:
        return mapper.update(suggestion)

def delete_suggestion(id):
    """
    Requests the suggestions-mapper to delete a suggestion in the DB.
    :param id: the suggestion object to be deleted in the DB.
    :return: the suggestion object with the given id.
    """
    with SuggestionMapper() as mapper:
        return mapper.delete(id)

# UserVote Mapper

def create_vote(userid, suggestionid):
    """
    Creates a new person object.
    :return: the new person object
    """
    vote = VoteObject(userid, suggestionid)

    with VoteMapper() as mapper:
        return mapper.insert(vote)

def get_all_votes():
    """
    Requests the suggestions-mapper to return all the suggestions from the DB.
    :return: all suggestion objects from the DB.
    """
    with VoteMapper() as mapper:
        return mapper.find_all()

def get_vote_by_id(id):
    """
    Requests the suggestions-mapper to return a specific suggestion from the DB.
    :param id: identifies the data set of the suggestion
    :return: the suggestion object with the given id.
    """
    with VoteMapper() as mapper:
        return mapper.find_by_key(id)

def insert_vote(vote):
    """
    Requests the suggestions-mapper to create a new suggestion in the DB.
    :param suggestion: the suggestion object to be created in the DB.
    :return: the suggestion object with the given id.
    """
    with VoteMapper() as mapper:
        return mapper.insert(vote)

def update_vote(vote):
    """
    Requests the suggestions-mapper to update a suggestion in the DB.
    :param suggestion: the suggestion object to be updated in the DB.
    :return: the suggestion object with the given id.
    """
    with VoteMapper() as mapper:
        return mapper.update(vote)

