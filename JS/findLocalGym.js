export default class Mapp{
    constructor(){  
    this.geocoder;
    this.map;
    this.service;
    
    /*Initialization-of-Api-objects*/
      window.initMap =  function initMap(){
        this.map = new google.maps.Map(document.getElementById("map"), {
             center: { lat: 55.378051, lng: -3.435973 },
             zoom: 5,
           });
     
           this.service = new google.maps.places.PlacesService(map);
           this.geocoder = new google.maps.Geocoder();    
           
     }
    
    }
    
    /*Click-Event*/
    
    inputSearch(){
        let address = document.getElementById('address');
        this.inputGeoPlacesSearch();
    }
    
    buttonSearch(){
        this.currentLocation();
    }
    
    /*Google-Maps-Api-intraction*/
     
     
     /*Geolocation-And-Many-places-Api-Intraction*/
     
     inputGeoPlacesSearch(){
      /*Geolocation-to-covert-Address-input-into-Latlng*/
        geocoder.geocode({'address': address.value}, function(result,status){
        if (status == google.maps.places.PlacesServiceStatus.OK){  
         map.setCenter(result[0].geometry.location);
         map.setZoom(13);}
         else alert('Please type in the correct address or postcode')
     
     /*Many-places-to-find-gyms-close-by-input-Address*/
         let request = {
             location: result[0].geometry.location,
             radius: 5000,
             type: ['gym']
         };
        
         service.nearbySearch(request, function callback(results, status) {
            
            for(let i=0;i<results.length;i++){
             window.marker = new google.maps.Marker({
                 position: results[i].geometry.location,
                 map: map,
                 icon: './Img/Location-logo.svg',
               });
               google.maps.event.addListener(marker,'click',function(){
                   console.log(results[i].name)
               })
            }
         });
     
        
         });
     }
     
     /*Get-Current-location-Api-Interaction*/
      currentLocation(){
     /*Get-Current-location*/
         navigator.geolocation.getCurrentPosition(
             (position)=>{
                 let pos = {
                     lat: position.coords.latitude,
                     lng: position.coords.longitude,
                 };
     
                 map.setCenter(pos);
                 map.setZoom(13);
     /*Many-places-to-find-gyms-close-by-Current-location*/
                 let request = {
                     location: pos,
                     radius: 5000,
                     type: ['gym']
                 };
                
                 service.nearbySearch(request, callback);
             
                 function callback(results, status) {
                    
                     for(let i=0;i<results.length;i++){
                      window.marker = new google.maps.Marker({
                          position: results[i].geometry.location,
                          map: map,
                          icon: './Img/Location-logo.svg',
                        });
                     }
                  }
             },
     
             ()=>{
              alert('Please chnage broswer settings to allow browser access you location')
             }
         )
     }
    
    }

