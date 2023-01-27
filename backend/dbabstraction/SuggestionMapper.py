from dbabstraction.Mapper import Mapper

class SuggestionMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Get all datasets and return them as objects.
        :return: all suggestion objects.
        """
        result = []
        
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM suggestions")
        tuples = cursor.fetchall()
        result.append(tuples)
        self._connection.commit()
        cursor.close()

        return result
