class VoteObject:
    def __init__(self, userid, suggestionid):
        self._userid = userid
        self._suggestionid = suggestionid

    def get_userid(self):
        return self._userid

    def get_suggestionid(self):
        return self._suggestionid

    def set_userid(self, userid):
        self._userid = userid

    def set_suggestionid(self, suggestionid):
        self._suggestionid = suggestionid

    @staticmethod
    def from_dict(dictionary=dict(), set_id=False):
    
        vote = VoteObject(dictionary["userid"], dictionary["suggestionid"])
        return vote