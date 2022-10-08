window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
   // alert('Страница загружена');

   
    
    var  AppData =  {
        data : new GameData().get(),
    }
    
    console.log(game);
    var app = new Vue({
        el: '#app',
        data: AppData,
    });


    var game = new Game();
    
    game.load({
            company: {
                name: 'Моя'
            },
    },
    function(d){
          AppData.data = d;
    });
    console.log(AppData);

};