<div class="fixed-bottom">
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs justify-content-center card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" id="myStack" href="#" onclick="document.getElementById('interactions').innerHTML =getMyStackHTML();">My stack</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="HistOfActions" onclick="document.getElementById('interactions').innerHTML =getHistoryOfActionsHTML();">History of actions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="chat">Chat</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="report">Report issue</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <div  id="interactions"></div>
    
  </div>
</div>
</div>