from dbabstraction.Mapper import Mapper

class EmailMapper(Mapper):
    def __init__(self):
        super().__init__()

    def find_all(self):
        """
        Get all datasets and return them as objects.
        """
        
        cursor = self._connection.cursor()
        cursor.execute("SELECT * FROM email")
        tuples = cursor.fetchall()
        self._connection.commit()
        cursor.close()

        return tuples

    def find_by_key(self, key):
        pass
    
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

    def update(self, email):
        pass

    def delete(self, key):
        pass