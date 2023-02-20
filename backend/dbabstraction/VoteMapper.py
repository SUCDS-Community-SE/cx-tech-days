from dbabstraction.Mapper import Mapper
from objects.voteObject import VoteObject

class VoteMapper(Mapper):

    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Get all datasets and return them as objects.
        """
        result = [] 
        cursor = self._connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM uservotes")
        tuples = cursor.fetchall()
        for (tuple) in tuples:
            vote = VoteObject(tuple['userID'], tuple['suggestionID'])
            result.append(vote.__dict__)
        self._connection.commit()
        cursor.close()
        print(result)
        return result

    def find_by_key(self, key):
        """
        Finds a vote object by its key.
        :param key: key of the vote object, which is to be found.
        :return: vote object, which is to be found.
        """
        result = []
        cursor = self._connection.cursor(dictionary=True)
        command = "SELECT * FROM uservotes WHERE userID='{}'".format(key)
        cursor.execute(command)
        tuples = cursor.fetchall()
        try:
            tuple = tuples[0]
            userID = tuple['userID']
            suggestionID = tuple['suggestionID']
            vote = VoteObject(userID, suggestionID)
            result = vote
        except IndexError:
            result = None
        
        self._connection.commit()
        cursor.close()
        print(result)
        return result

    def delete(self, key):
        """
        Deletes a vote object by its key.
        :param key: key of the vote object, which is to be deleted.
        :return: vote object, which is to be deleted.
        """
        cursor = self._connection.cursor()
        command = "DELETE FROM uservotes WHERE userID='{}'".format(key)
        cursor.execute(command)

        self._connection.commit()
        cursor.close()

    def insert(self, vote):
        """
        Inserts new vote object into database.
        :param vote: vote object, which is to be added to the database.
        :return: vote object, which is to be added.
        """
        cursor = self._connection.cursor()
        query = "INSERT INTO uservotes (userID, suggestionID) " \
                "VALUES (%s, %s)"
        data = (str(vote.get_userid()),str(vote.get_suggestionid()))
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return vote

    def update(self, vote):
        """
        Updates a vote object in the database.
        :param vote: vote object, which is to be updated.
        :return: vote object, which is to be updated.
        """
        cursor = self._connection.cursor()
        query = "UPDATE uservotes SET suggestionID=%s WHERE userID=%s"
        data = (str(vote.get_userid()),str(vote.get_suggestionid()))
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return vote