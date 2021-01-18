var pos = 0;

$(document).ready(function() {

$( "#ip" ).click(function(){
      $( ".hidden_1" ).switchClass( "hidden_1", "selected_1",10 );     
      $( ".selected_1" ).switchClass( "selected_1", "hidden_1",10);
      $("#ip").toggleClass( "highlight" );   

    });

$( "#ph" ).click(function(){
      $( ".hidden_2" ).switchClass( "hidden_2", "selected_2",10 );
      $("#ph").toggleClass( "highlight" );      
      $( ".selected_2" ).switchClass( "selected_2", "hidden_2",10);
    });

$( "#ad" ).click(function(){
      $( ".hidden_3" ).switchClass( "hidden_3", "selected_3",10 );
      $("#ad").toggleClass( "highlight" );      
      $( ".selected_3" ).switchClass( "selected_3", "hidden_3",10);
    });
});


function moveRight(){
	pos += 1000;
	document.getElementById('content_wrap').scrollLeft = pos;
}

function moveLeft(){
	if(pos <= 1000){
		pos = 0;
	}
	else{
		pos -= 1000;
	}

	document.getElementById('content_wrap').scrollLeft = pos;
}