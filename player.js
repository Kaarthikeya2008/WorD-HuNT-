class Player{
constructor(){
    this.name=null;
}
getPlayerName(){
    var playerNameRef = database.ref('player')
    playerNameRef.on("value",(data)=>{
        player=data.val()
    })
}

}