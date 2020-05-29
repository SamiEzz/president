<?php
session_start();

include("functions.php");

if(!empty($_GET["disconnect"])){
	if($_GET["disconnect"]==1){
		$_SESSION['isConnected']=0;
		session_write_close();
	}
	
}

if(!empty($_SESSION["isConnected"])){
	if($_SESSION["isConnected"]==1){
		$_SESSION['playerId']=getPlayerId();
	}
	
}

?>
