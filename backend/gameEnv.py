

class gameEnv():
    def __init__(self,FSparams: str):
        self.revolution = FSgetRevolution()
        self.alivePlayers = FSgetAlivePlayers()
        