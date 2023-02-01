class SuggestionObject:
    def __init__(self, id, topic, type, speaker, votes):
        self._id = id
        self._topic = topic
        self._type = type
        self._speaker = speaker
        self._votes = votes

    def get_id(self):
        return self._id

    def get_topic(self):
        return self._topic

    def get_type(self):
        return self._type

    def get_speaker(self):
        return self._speaker

    def get_votes(self):
        return self._votes

    def set_id(self, id):
        self._id = id

    def set_topic(self, topic):
        self._topic = topic

    def set_type(self, type):
        self._type = type

    def set_speaker(self, speaker):
        self._speaker = speaker     

    def set_votes(self, votes):
        self._votes = votes

    @staticmethod
    def from_dict(dictionary=dict(), set_id=False):
    
        suggestion = SuggestionObject(dictionary["id"], dictionary["topic"], dictionary["type"], dictionary["speaker"], dictionary["votes"])

        if set_id == True:
            suggestion.set_id(dictionary["id"])
        return suggestion
