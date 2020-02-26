$(document).ready(function() {
   
  
   /* function myFunction(){
        if (!myFunction.didrun){ 
          //do something   
          myFunction.didrun = true;
        }
        else { ..... }
      }
      */
     
     
/*TEST image gif*/

    $("#image").delay(6500).hide(0, function() {
        
    });

     /*TEST header*/

     $(".header").hide(0, function() {
        
    });
    $(".header").delay(6700).show(0, function() {
        
    });

      /*TEST menu hover*/
     

    $(".sousmenu").hide(0, function() {
    
    });
    
    $(".liste").mouseover(function(){
        $(".sousmenu").show();
        });
        $(".liste").mouseout(function(){
        $(".sousmenu").hide();
        });


/*TEST titre*/

$(".titre").hide(0, function() {
        
});
$(".titre").delay(9000).show(0, function() {
    
});
/*TEST bouton*/
$(".boutondown1").hide(0, function() {
        
});
$(".boutondown1").delay(9000).show(0, function() {
    
});

/*TEST main*/
$("#main").hide(0, function() {
        
});
$("#main").delay(6700).show(0, function() {
    
});

});