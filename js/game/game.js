class Game{


    load(obj,callback){
        var d = new GameData();
        d.load(obj);
        callback(d.get());
         
    }

}