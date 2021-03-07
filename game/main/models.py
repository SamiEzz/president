from django.db import models

# Create your models here.

class Player(models.Model):
    player_name = models.CharField(max_length=200)
    player_score = models.CharField(max_length=200)
    player_avatar = models.CharField(max_length=300)
    player_room = models.CharField(max_length=100,default="waitingRoom")
    player_email = models.EmailField()
    
    def __str__(self):
        return self.player_name


class Room(models.Model):
    room_name = models.CharField(max_length=200)
    room_online_players = []
    
    def __str__(self):
        return self.room_name
