//ADD LAYER HERE
mapbox.load(['hobbes7878.map-zypfk3ci','hobbes7878.Columbia_Stops','hobbes7878.Columbia_Black_Pop','hobbes7878.Columbia_White_Pop','hobbes7878.Black_Stops','hobbes7878.White_Stops','hobbes7878.Investigations','hobbes7878.Calls_For_Service','hobbes7878.Avg_Traffic','hobbes7878.Population' ], function(data) {
  
//ADD LEGENDS HERE  
  $('#stops_legend').hide('fast');
  $('#black_legend').hide('fast');
  $('#white_legend').hide('fast');
  $('#black_driver_legend').hide('fast');
  $('#white_driver_legend').hide('fast');
  $('#investigations_legend').hide('fast');
  $('#calls_for_service_legend').hide('fast');
  $('#traffic_legend').hide('fast');
  $('#population_legend').hide('fast');




  $('#cluster_legend').hide('fast');
  $('#instructions').show('slow');
  var map = mapbox.map('map');


 
  var layers = document.getElementById('map-ui');
//ADD LAYER HERE
  map.addLayer(data[0].layer);
  map.addLayer(data[1].layer);
  map.addLayer(data[2].layer);
  map.addLayer(data[3].layer);
  map.addLayer(data[4].layer);
  map.addLayer(data[5].layer);
  map.addLayer(data[6].layer);
  map.addLayer(data[7].layer);
  map.addLayer(data[8].layer);
  map.addLayer(data[9].layer);


  map.zoom(11.75);
  map.center({ lat: 38.950, lon: -92.345 });

//ADD LAYER HERE
  map.enableLayerAt(1);
  map.enableLayerAt(2);
  map.enableLayerAt(3);
  map.enableLayerAt(4);
  map.enableLayerAt(5);
  map.enableLayerAt(6);
  map.enableLayerAt(7);
  map.enableLayerAt(8);
  map.enableLayerAt(9);

//ADD LAYER HERE
  map.disableLayerAt(1);
  map.disableLayerAt(2);
  map.disableLayerAt(3);
  map.disableLayerAt(4);
  map.disableLayerAt(5);
  map.disableLayerAt(6);
  map.disableLayerAt(7);
  map.disableLayerAt(8);
  map.disableLayerAt(9);

  // Disable the mousewheel and doubleclick zoom
  map.eventHandlers[3].remove();
  map.eventHandlers[2].remove();
/*  var interaction = mapbox.interaction()
      .map(map)
      .auto();*/

  //Create Layers and toggle
  for (var i = 1; i < map.getLayers().length; i++) {

//ADD LAYER LABEL HERE
      var fullname = ['Traffic Stops','Black % Population','White % Population','Black Driver Stops','White Driver Stops','Investigative Stops','Calls for Service','Traffic','Population'];  
      //var n = map.getLayerAt(i).name;
      var item = document.createElement('li');
      var layer = document.createElement('a');
          layer.href = '#';
          layer.id = "layerid" + i;
          layer.className = map.getLayerAt(i).enabled ? 'active' : 'inactive';
          layer.innerHTML = fullname[i-1];

      layer.onclick = function(e) {

          e.preventDefault();

          if (map.getLayerAt(this.id.substr(-1)).enabled) {
            map.disableLayerAt(this.id.substr(-1)); 
            this.className='inactive' 
            //hide legend, show instructions
            $('#cluster_legend').hide('fast');
            $('#instructions').show('slow');

//ADD LAYER LEGEND HERE
              $('#stops_legend').hide('fast');
              $('#black_legend').hide('fast');
              $('#white_legend').hide('fast');
              $('#black_driver_legend').hide('fast');
              $('#white_driver_legend').hide('fast');
              $('#investigations_legend').hide('fast');
              $('#calls_for_service_legend').hide('fast');
              $('#traffic_legend').hide('fast');
              $('#population_legend').hide('fast');


          } else {
              //disable all layers and make inactive (except base map (0))

//ADD LAYER LEGEND HERE
              $('#stops_legend').hide('fast');
              $('#black_legend').hide('fast');
              $('#white_legend').hide('fast');
              $('#black_driver_legend').hide('fast');
              $('#white_driver_legend').hide('fast');
              $('#investigations_legend').hide('fast');
              $('#calls_for_service_legend').hide('fast');
              $('#traffic_legend').hide('fast');
              $('#population_legend').hide('fast');
                        


//ADD LAYER HERE
                map.disableLayerAt(1);
                map.disableLayerAt(2);
                map.disableLayerAt(3);
                map.disableLayerAt(4);
                map.disableLayerAt(5);
                map.disableLayerAt(6);
                map.disableLayerAt(7);
                map.disableLayerAt(8);
                map.disableLayerAt(9);

              
//ADD LAYER HERE
              layerid1.className = 'inactive'
              layerid2.className = 'inactive'
              layerid3.className = 'inactive'
              layerid4.className = 'inactive'
              layerid5.className = 'inactive'
              layerid6.className = 'inactive'
              layerid7.className = 'inactive'
              layerid8.className = 'inactive'
              layerid9.className = 'inactive'


              //enable clicked layer

              map.enableLayerAt(this.id.substr(-1));
              this.className = 'active';




              //show legend, hide instructions
              $('#cluster_legend').show('slow');
              $('#instructions').hide('fast');
          };

          if (layerid1.className == 'active') {
            $('#stops_legend').show('slow');
          };
          if (layerid2.className == 'active') {
            $('#black_legend').show('slow');
          };
          if (layerid3.className == 'active') {
            $('#white_legend').show('slow');
          };
          if (layerid4.className == 'active') {
            $('#black_driver_legend').show('slow');
          };
          if (layerid5.className == 'active') {
            $('#white_driver_legend').show('slow');
          };
          if (layerid6.className == 'active') {
            $('#investigations_legend').show('slow');
          };
          if (layerid7.className == 'active') {
            $('#calls_for_service_legend').show('slow');
          };
          if (layerid8.className == 'active') {
            $('#traffic_legend').show('slow');
          };
          if (layerid9.className == 'active') {
            $('#population_legend').show('slow');
          };






        };
        layer.addEventListener('touchstart', layer.onclick);
      item.appendChild(layer);
      layers.appendChild(item);
  }
});