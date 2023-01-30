from dbabstraction.Mapper import Mapper

class EmailMapper(Mapper):
    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Get all datasets and return them as objects.
        :return: all email objects.
        """
        result = []
        
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM email")
        tuples = cursor.fetchall()
        result.append(tuples)
        self._connection.commit()
        cursor.close()

        return result
    
    def insert(self, email):
        """
        Inserts new email object into database.
        :param email: email object, which is to be added to the database.
        :return: email object, which is to be added.
        """
        cursor = self._connection.cursor()
        query = "INSERT INTO email (id, email ) " \
                "VALUES (%s, %s)"
        data = (
                str(email[0],email[1])
                )
        cursor.execute(query, data)

        self._connection.commit()
        cursor.close()
        return email