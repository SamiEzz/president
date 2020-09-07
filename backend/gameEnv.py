

class gameEnv():
    def __init__(self,FSparams: str):
        self.FSP=FSparams
        self.revolution = 0
        self.alivePlayers = getAlivePlayers()
        self.playersTurn = None
        self.history=[]
        self.authorizedNext=getAuthorizedNext()
        self.nextPlayer=None
        self.currentPlayer=None


    def FSgetRevolution():
        return true

    def FSgetAlivePlayers():
        return true

    def getAuthorizedNext():
        return true
    