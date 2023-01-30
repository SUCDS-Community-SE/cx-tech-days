from dbabstraction import SuggestionMapper

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
