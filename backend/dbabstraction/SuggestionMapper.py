from dbabstraction.Mapper import Mapper
from objects.suggestionObject import SuggestionObject

class SuggestionMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Get all datasets and return them as objects.
        """
        result = [] 
        cursor = self._connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM suggestions")
        tuples = cursor.fetchall()
        for (tuple) in tuples:
            suggestion = SuggestionObject(tuple['id'], tuple['title'], tuple['topic'], tuple['type'], tuple['speaker'], tuple['abstract'], tuple['speakerShortInfo'], tuple['votes'])
            result.append(suggestion.__dict__)
        self._connection.commit()
        cursor.close()
        print(result)
        return result

    def find_by_key(self, key):
        """
        Finds a suggestion object by its key.
        :param key: key of the suggestion object, which is to be found.
        :return: suggestion object, which is to be found.
        """
        result = None
        cursor = self._connection.cursor()
        command = "SELECT * FROM suggestions WHERE id='{}'".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()
        try:
            (id, title, topic, type, speaker, abstract, speakerShortInfo, votes) = tuples[0]
            suggestion = SuggestionObject(tuple['id'], tuple['title'], tuple['topic'], tuple['type'], tuple['speaker'], tuple['abstract'], tuple['speakerShortInfo'], tuple['votes'])
            result = suggestion
        except IndexError:
            result = None
        
        self._connection.commit()
        cursor.close()
        print(result)
        return result

    def delete(self, key):
        """
        Deletes a suggestion object by its key.
        :param key: key of the suggestion object, which is to be deleted.
        :return: suggestion object, which is to be deleted.
        """
        cursor = self._connection.cursor()
        command = "DELETE FROM suggestions WHERE id='{}'".format(key)
        cursor.execute(command)

        self._connection.commit()
        cursor.close()

    def insert(self, suggestion):
        """
        Inserts new suggestion object into database.
        :param suggestion: suggestion object, which is to be added to the database.
        :return: suggestion object, which is to be added.
        """
        cursor = self._connection.cursor()
        query = "INSERT INTO suggestions (id, title, topic, type, speaker, abstract, speakerShortInfo, votes ) " \
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        data = (str(suggestion.get_id()),suggestion.get_title(), suggestion.get_topic(), suggestion.get_type(), suggestion.get_speaker(), suggestion.get_abstract(), suggestion.get_speakerShortInfo(), str(suggestion.get_votes()))
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return suggestion

    def update(self, suggestion):
        """
        Updates a suggestion object in the database.
        :param suggestion: suggestion object, which is to be updated.
        :return: suggestion object, which is to be updated.
        """
        cursor = self._connection.cursor()
        query = "UPDATE suggestions SET title=%s, topic=%s, type=%s, speaker=%s, abstract=%s, speakerShortInfo=%s, votes=%s WHERE id=%s"
        data = (suggestion.get_title(), suggestion.get_topic(), suggestion.get_type(), suggestion.get_speaker(), suggestion.get_abstract(), suggestion.get_speakerShortInfo(), str(suggestion.get_votes()), str(suggestion.get_id()))
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return suggestion