class SuggestionObject:
    def __init__(self, id, title, topic, type, speaker, abstract, speakerShortInfo, votes):
        self._id = id
        self._title = title
        self._topic = topic
        self._type = type
        self._speaker = speaker
        self._abstract = abstract
        self._speakerShortInfo = speakerShortInfo
        self._votes = votes

    def get_id(self):
        return self._id

    def get_title(self):
        return self._title

    def get_topic(self):
        return self._topic

    def get_type(self):
        return self._type

    def get_speaker(self):
        return self._speaker
    
    def get_abstract(self):
        return self._abstract

    def get_speakerShortInfo(self):
        return self._speakerShortInfo

    def get_votes(self):
        return self._votes

    def set_id(self, id):
        self._id = id

    def set_title(self, title):
        self._title = title

    def set_topic(self, topic):
        self._topic = topic

    def set_type(self, type):
        self._type = type

    def set_speaker(self, speaker):
        self._speaker = speaker

    def set_abstract(self, abstract):
        self._abstract = abstract

    def set_speakerShortInfo(self, speakerShortInfo):
        self._speakerShortInfo = speakerShortInfo

    def set_votes(self, votes):
        self._votes = votes

    @staticmethod
    def from_dict(dictionary=dict(), set_id=False):
    
        suggestion = SuggestionObject(dictionary["id"], dictionary["title"], dictionary["topic"], dictionary["type"], dictionary["speaker"], dictionary["abstract"], dictionary["speakerShortInfo"], dictionary["votes"])
        return suggestion
