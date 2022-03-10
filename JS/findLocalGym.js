export default class Mapp{
    constructor(){  
    this.geocoder;
    this.map;
    this.service;
    this.marker;
    this.infoWindow;
    this.html = ``;
    this.gymList = document.getElementById('gyms-info');
    
    
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
        this.html = ''
        this.inputGeoPlacesSearch();
    }
    
    buttonSearch(){
        this.html = ''
        this.currentLocation();
    }


    
    /*Google-Maps-Api-intraction*/
     
     
     /*Geolocation-And-Many-places-Api-Intraction*/
     
     inputGeoPlacesSearch(){
      /*Geolocation-to-covert-Address-input-into-Latlng*/
        geocoder.geocode({'address': document.getElementById('address').value}, (result,status)=>{
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
        
         service.nearbySearch(request, (results, status)=>{
                   
                    
                    for(let i=0;i<results.length;i++){
                        this.marker = new google.maps.Marker({
                         position: results[i].geometry.location,
                         map,
                         icon: require('/Img/Location-logo.svg')
                       });

                       this.infoWindow = new google.maps.InfoWindow({
                           content: results[i].name,
                           anchor: this.marker,map,
                         });
                         
                         this.html += `<section class="gym-list__content">
                         <p class="gym-list__heading">NAME:</p>
                         <p class="gym-list__name">${results[i].name}</p></section>
                         <p>RATING:</p>
                         <p class="gym-list__rating">${results[i].rating}</p>`
                    }
                    

                    this.gymList.innerHTML =  this.html;
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
                
                 service.nearbySearch(request, (results, status)=>{
                   
                    
                    for(let i=0;i<results.length;i++){
                        this.marker = new google.maps.Marker({
                         position: results[i].geometry.location,
                         map,
                         icon: require('/Img/Location-logo.svg')
                       });

                       this.infoWindow = new google.maps.InfoWindow({
                           content: results[i].name,
                           anchor: this.marker,map,
                         });
                         
                        

                         this.html += `<section class="gym-list__content">
                         <p class="gym-list__heading">NAME:</p>
                         <p class="gym-list__name">${results[i].name}</p></section>
                         <p>RATING:</p>
                         <p class="gym-list__rating">${results[i].rating}</p>`


                         

                     
                    }

                    this.gymList.innerHTML =  this.html;
                 });
             
                 
             },
     
             ()=>{
              alert('Please chnage broswer settings to allow browser access you location')
             }
         )
     }
    
    }

