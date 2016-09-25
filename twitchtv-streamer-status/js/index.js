
//List of accounts used
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404","brunofin"];







//Connects to twitchAPI to return info about various streamers
function getInfo(account) {
$.getJSON('https://api.twitch.tv/kraken/channels/'+account+'?callback=?', function(data) {

  
  
  
  $.getJSON('https://api.twitch.tv/kraken/streams/' + account, function(channel) {

  
 
  
    if (channel["stream"] == null) { 
  //If Offline:
          $(".results").add('<a target = _blank href = https://twitch.tv/' + account +'> <button class = btn btn-lg col-md-4 center-block>'+"<img src = " + data.logo +">"+"</img>"+"<h3>"+data.display_name+"</h3>"+ "<p>"+"Offline"+"</p>" +"</button>" + '</a>' +"<br></br>" ).appendTo(".results"); 
      
      
      
      
    } else  {

     // If Online:
    
      
      $(".results").add('<a target = _blank href = https://twitch.tv/' + account +'> <button class = btn btn-lg col-md-4 center-block>'+"<img src = " + data.logo +">"+"</img>"+"<h3>"+data.display_name+"</h3>"+ "<p>"+data.game + "</p>"+"<p>"+data.status+"</p>" +"</button>" + '</a>' +"<br></br>" ).appendTo(".results"); 
      

      
    }
  
  
  }).fail(function(err) {
     /*The getJSON fails if 
    the account queried is either deactivated or never existed. In that case, this branch will execute.*/
    
     $(".results").add('<a target = _blank href = https://twitch.tv/' + account +'> <button class = btn btn-lg col-md-4 center-block>'+"<img src ="+"https://s32.postimg.org/brmqb5cvp/night_television_tv_theme_machines.jpg"+"</img>"+"<h3>"+account+"</h3>"+ "<p>"+"Account Deactivated or Does Not Exist"+"</p>" +"</button>" + '</a>' +"<br></br>" ).appendTo(".results"); 
    
    
   });
  
 
});

}

//Calls getInfo() for every 
//user  in the users array
var accountLength = users.length;
for (var i = 0; i < accountLength; i++) {
  getInfo(users[i]);
  
}