

$(function(){
  $('#addButton').click(function(){

    var input = $('#text').val();
    $('#list').append(`<li class='myLi'><button class='subButton'><span class='check'>X</span></button>${input}</li>`);
    localStorage.setItem('food', input);
    $('.subButton').click(function(){
      $(this).parent().remove();
    })
  })
  $('.column').on('click', function(){
    $('.container').css({
      'background-image':'url(/Users/user/Dev/assignments/projects/moms-list/img/rodion-kutsaev-949.jpg)'
    });
    $('.row').css({
      'background-color': 'lightyellow',

    });
    $('h1').css({
      'color': 'black',

    });
  })
});
$(function(){
  var content = 'My new awesome content';
  $('.buttonClass').on('click', function(){
    var panelId = $(this).attr('data-panelId');
    $('#'+panelId).toggle();
    $('#'+panelId).html(content);
  });
  // $('#btnId2').on('click', function(){
  //   $('#div2').slideToggle(2000);
  // });
  // $('#btnId3').on('click', function(){
  //   $('#div3').toggle(10000);
  // });
  // $('#btnId4').on('click', function(){
  //   $('#div4').fadeToggle(2000);
  // });
});
$(function(){
  var $orders = $('#orders');
  $.ajax({
    type: 'GET',//default no need to add
    url: 'http://rest.learncode.academy/api/johnbob/friends/58b9cf114b9c37010069a875',///given from backend team
    success: function(data){
      console.log("I have friends!", data);
      //waht each does goes thru each item in array and alloes to run fucntion on each of those items(array, function)
      //the functoin passes the inex i and the second argument you can call it what you want//call it order, item..etc
      // $.each(data, function(i, data){
      //   //where do you want to spit out to? in this example to the #orders
      //   //cache the selector!! var $orders = $('#orders');
      //   //this prevents jquery from making another isntance of #order very time you select it
        // $orders.append('<li>name: '+ data.name +', age: '+ data.age + '</li>');//put new li
      // })
    }
    //what url
    //how do we get that info
  })
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/johnbob/friends',
    // data: {name: 'Billy Bob', age: 27},
    data: {name: 'Jimmy', age: 500},
    success: function(data) {
    console.log("Friend added!", data); //the new item is returned with an ID
    }
  });
  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/johnbob/friends/58bcb982218312010092fc49',
    success: function(data) {
      console.log("Here's a friend!", data); //returns friend id#1
    }
  });
  // $.ajax({
  //   // type: 'PUT',
  //   // data: {name: 'Billy Bob', age: 28},
  //   url: 'json.js',
  //   success: function() {
  //     //no data...just a success (200) status code
  //     console.log('Friend Updated Successfully!');
  //   }
  // });

  // $.ajax({
  //   url:'file.txt'
  // })
})
