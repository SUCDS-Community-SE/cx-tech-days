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

    def insert(self, suggestion):
        """
        Inserts new suggestion object into database.
        :param suggestion: suggestion object, which is to be added to the database.
        :return: suggestion object, which is to be added.
        """
        cursor = self._connection.cursor()
        query = "INSERT INTO suggestions (id, topic, type, speaker, time, date, votes ) " \
                "VALUES (%s, %s, %s, %s, %s, %s, %s)"
        data = (
                str(suggestion[0],suggestion[1],suggestion[2],suggestion[3],suggestion[4],suggestion[5],suggestion[6])
                )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return suggestion
