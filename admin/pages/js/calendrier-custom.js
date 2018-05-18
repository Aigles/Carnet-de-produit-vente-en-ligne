  //loadCalendar();
var mindate;
var datee = [];
// var myVar = setInterval(reloadCalendar ,500);
var first_event=0;

reloadCalendar();

// reloadCalendar();
function reloadCalendar() {

 window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
      loadCalendar();
      $('#calendar').fullCalendar( 'refetchEvents');

}
  
   function loadCalendar(){
   // $('#calendar').text("");
    $(function () {

    /* initialize the external events
     -----------------------------------------------------------------*/
    function init_events(ele) {
      ele.each(function () {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex        : 1070,
          revert        : true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        })

      })
    }

    init_events($('#external-events div.external-event'))

   /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    //je recupere les donnees  du planning a cette adresse http://192.168.10.103:7070/PlanningTimeSlot pour que je puisse former le json adapter au plugins Calendar


//formerjson();
    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
  //alert("fgf");
     
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()

    //var data=formerjson();
     //alert( items);
    eventCalendar();
    // var myVar = setInterval(eventCalendar ,2000);
    function eventCalendar() {
      
    $('#calendar').fullCalendar({
       schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
  //       customButtons: {
  //   myCustomButton: {
  //     text: 'custom!',
  //     click: function() {
  //       alert('clicked the custom button!');
  //     }
  //   }
  // },
      header    : {
        left  : 'prev,next today',
        center: 'title',
        right : 'month,agendaWeek,agendaDay'//listYear,
      // },
      // buttonText: {
      //   today: 'Today',
      //   month: 'month',
      //   week : 'week',
      //   day  : 'Day'
      //   //year  : 'Annee'
      }, 
        

      // resources:[{ id: 'a', title: 'Room A' }],
        

      //Random default events
      events    : function(start, end, timezone, callback) {
          // spinnerShow();
  

          //var start=dateFr(start,'L');
          
          var start=moment(start).format('YYYY-MM-DD'); 

          //var end=dateFr(end,'L');
          var end=moment(end).format('YYYY-MM-DD');

          //

            
        $.ajax({
            url: fullUrl + 'reference_livraison',
            type: 'GET',
            dataType: 'json',
            Async: false,
        
            success: function(data) {
          
                var events = [];
                var trouver=0;
              
                    // $("#afficher_heure_dispo").text("Aucun rendez-vous disponible");
                  
               $.each( data, function( key, commande ) {
        
                  var donnees={};

                      donnees.title=commande.ville + ' ,' + commande.pays ;
                    donnees.start=moment.utc(commande.date_livraison).format();
                     //donnees.resourceId='a';
                    // donnees.end=moment(commande.date_livraison).add(2,"hours").format();
                    donnees.backgroundColor= '#428bca'; //yellow
                    donnees.borderColor='#428bca'; 
                    donnees.description="";

                   // if (trouver==0) {
                   //   $("#afficher_heure_dispo").text(dateFr(donnees.start,"LLLL [GMT] Z"));
                   //    trouver++;
                   //  }
                    
                    events.push(donnees);
                });
                
        

              
                callback(events);
               // spinner(callback);
                   
                 
            },


            error : function(resultat, statut, erreur){
console.log("echec")
       }

        });

      

    },
 
      eventLimit: 1,
      eventLimitClick:'day',
      eventLimitText :'Livraison à faire',
      handleWindowResize:true,
      navLinks: true, 
      slotLabelInterval : "00:10",
      timeFormat: 'h(:mm)a',
      locale: "fr",
      editable  : false,
      droppable : false, 
      selectable  : true,
     defaultView:"month",
      slotDuration:'00:03:00',
    
      validRange: function(nowDate) {
        return {
            start: nowDate
        };
    },
      // minTime:'06:30:00',
      // scrollTime:  moment().format('H:m'),
      maxTime:'21:00:00',
      slotLabelFormat: 'h(:mm)a',
      // slotDuration: '00:30:00',
      allDaySlot: true,
      selectHelper: true, 
      allDayText:'all-day',
      themeSystem:'jquery-ui',


   select  : function (start, end, jsEvent, view) {

       $(this).qtip({
                overwrite: false,
                content: {
                    text: text
                },
               style:{
                 
                },
                position: {
                    target: [jsEvent.pageX,jsEvent.pageY]
                },
                show: {
                    ready: true,
                    solo: true
                },
                hide: 'unfocus'
            });
              


                 },
  
        
 eventClick: function(event, jsEvent, view){
    
       var service=localStorage.getItem("service");

          service = JSON.parse(service);
          

         var emplacement=localStorage.getItem("emplacement");

          emplacement = JSON.parse(emplacement);


    var prereservation={}
    event.allDay = false;
    prereservation.token=localStorage.getItem("token");
    // prereservation.id=event._id;
    prereservation.startTime=moment.utc(event.start._i).format();

    prereservation.endTime=moment.utc(event.end._i).format();
   

    prereservation.branchOfficeId=emplacement.id;

    prereservation.officeServiceId=service.officeService.id;

    datap=JSON.stringify(prereservation);

    localStorage.setItem("DateHeure",datap);

    console.log(datap);
   
    var languageId=getIdlanguage();

        // alert(FullUrl+'AppointmentBooking');
            $.ajax({
            url: FullUrl+'AppointmentBooking/Language/'+languageId,
            type: 'POST',
            dataType: 'json',
            data:datap,
            async:false,
            success: function(data) {
             localStorage.setItem("DateHeure",datap);

             $("#message_heure_M").text(data.status);

             
            },

            error : function(resultat, statut, erreur){
		$("#message_heure_M").text("erreur");
           }

        });
 
   var val = dateFr(prereservation.startTime,"LLLL [GMT] Z");
   var titre=event.title;
      if (val.length != 0) {
    


      //Create events
       $('#external-events').text("");
      var event = $('<div />')
      event.css({
        'background-color': '#428bca',
        'border-color'    : '#428bca',
        'color'           : '#fff'
      }).addClass('external-event')
      event.html(titre+' </br>'+val)

      $('#external-events').prepend(event)
      }
       $("#selectsheure").text("");
    
        $('[href=#step4]').tab('show');
           infostep();

    },

      eventRender: function(event, element) { 
      //  element.find(".fc-bg").css("pointer-events","none");
      //  //element.append("<div id='btnDelete' style='position:absolute;bottom:0px;right:0px;' ><span  class='btn-sm'>X</span></div>");
      // //element.append("<div data-loading-text='<i class='icon-spinner icon-spin icon-large'></i> @Localization.Uploading'></div>");
      //  element.qtip({
      //           overwrite: false,
      //           content: {
      //               text: event.description
      //           },
      //            style:{
             
      //           },
      //           position: {
      //               target: [event.pageX,event.pageY]
      //           },
      //           show: {
      //               ready: true,
      //               solo: true
      //           },
      //           hide: 'unfocus'
      //       });

     }
  //    viewRender: function(view){
  //     if (view.start.isBefore(moment())){  //if view start is before now
  //         $('#calendar').fullCalendar('gotoDate', moment); //go to now
  //     }
  // },

  
      })  
    }
    /* ADDING EVENTS */
    var currColor = '#3c8dbc' //Red by default
    //Color chooser button
    var colorChooser = $('#color-chooser-btn')
    $('#color-chooser > li > a').click(function (e) {
      e.preventDefault()
      //Save color
      currColor = $(this).css('color')
      //Add color effect to button
      $('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
    })
   $('#add-new-event').click(function (e) {
      e.preventDefault()
      //Get value and make sure it is not null
      var val = $('#new-event').val()
      if (val.length == 0) {
        return
      }

      //Create events
      var event = $('<div />')
      event.css({
        'background-color': currColor,
        'border-color'    : currColor,
        'color'           : '#fff'
      }).addClass('external-event')
      event.html(val)
      $('#external-events').prepend(event)

     
    })


  })
   // spinner();
}
// document.write('<div class="spinner-wrapper"><div class="spinner"></div></div>');
function spinner(){
hidePreloader();

}


function spinnerShow(){

showPreloader();

}
function showPreloader() {
var preloader = $('.spinner-wrapper');
preloader.show();
}

function hidePreloader(callback) {
var preloader = $('.spinner-wrapper');
preloader.fadeOut("slow",callback);

}

function mindat(argument) {
  mindate=argument[0];

  for (var i = argument.length - 1; i >= 0; i--) {
    if (mindate>argument[i]) {
      mindate=argument[i];
    }


    }
    return mindate;
  }
  
