window.onload = function(){
    var map;

    function initialize(){
        var mapProp = {
            center : new google.maps.LatLng (-8.00260245587485,-34.87140928934503) ,
            scrollwheel : true , 
            zoom : 12,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }
        
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var LatLng = {'lat':lat , 'lng':long};

        var marker = new google.maps.Marker({
            position : LatLng, 
            map:map,
            icon:icon,
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOFFset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
        

    }

    initialize();

    var conteudo = '<p style="color:black; font-size:13px;padding:5px 0; font-weight: bold" >Me Vejo Aqui</p>'
    addMarker(-8.00260245587485,-34.87140928934503,'',conteudo)
}