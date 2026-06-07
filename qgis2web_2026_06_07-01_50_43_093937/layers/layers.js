var wms_layers = [];


        var lyr_EsriStreet_0 = new ol.layer.Tile({
            'title': 'Esri Street',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

lyr_EsriStreet_0.setVisible(true);
var layersList = [lyr_EsriStreet_0];
