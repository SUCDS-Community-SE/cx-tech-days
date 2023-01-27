from dbabstraction import SuggestionMapper

def get_all_suggestions():
    """
    Requests the suggestions-mapper to return all the suggestions from the DB.
    :return: all suggestion objects from the DB.
    """
    with SuggestionMapper() as mapper:
        return mapper.find_all()