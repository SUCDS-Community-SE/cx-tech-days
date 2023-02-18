from abc import ABC, abstractmethod
import os
import mysql.connector

class Mapper(ABC):
    """Abstract Mapper class, which implements the database connection and basic methods."""

    def __init__(self):
        # initialize/open connection
        self._connection = None

    def __enter__(self):
        """Checks if we run in the cloud or local and uses corresponding credentials to connect"""
        self._connection = mysql.connector.connect(user='admin', password='adminadmin',
                                                       host='mysql-db-cx-dev-days.civwsopmd2k6.eu-central-1.rds.amazonaws.com',
                                                       database='cx_tech_days')
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """Closes the connection to the database."""
        # close connection
        self._connection.close()

    @abstractmethod
    def find_all(self):
        """
        Get all datasets and return them as objects.
        :return: all dataset objects.
        """
        pass

    @abstractmethod
    def find_by_key(self, key):
        """
        Read the data set identified by the passed key.
        :param key: Key to identify the data set.
        """
        pass

    @abstractmethod
    def insert(self, object):
        """
        Insert object as new data set.
        :param object: Object to insert.
        """
        pass

    @abstractmethod
    def update(self, object):
        """
        Update an existing data set with object.
        :param object: object to update dataset with.
        """
        pass

    @abstractmethod
    def delete(self, object):
        """
        Delete an existing data set.
        :param object: object to delete.
        """
        pass
