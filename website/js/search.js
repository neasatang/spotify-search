window.onload = function(){
  var username = ""
  document.getElementById('search').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      username = this.value
      alert(username);
      return false;
    }
  }
}
