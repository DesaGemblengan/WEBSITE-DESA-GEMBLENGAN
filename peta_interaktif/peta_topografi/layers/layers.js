var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEMGemblenganHillshade_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM Gemblengan Hillshade<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMGemblenganHillshade_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12235783.983318, -817046.881182, 12239724.725076, -814850.577804]
        })
    });
var lyr_DEMGemblengan_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM Gemblengan<br />\
    <img src="styles/legend/DEMGemblengan_2_0.png" /> 917.2588<br />\
    <img src="styles/legend/DEMGemblengan_2_1.png" /> 1034.3264<br />\
    <img src="styles/legend/DEMGemblengan_2_2.png" /> 1151.3939<br />\
    <img src="styles/legend/DEMGemblengan_2_3.png" /> 1268.4615<br />\
    <img src="styles/legend/DEMGemblengan_2_4.png" /> 1385.5291<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMGemblengan_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12235783.983318, -817046.881182, 12239724.725076, -814850.577804]
        })
    });
var format_SlopeGemblengan_3 = new ol.format.GeoJSON();
var features_SlopeGemblengan_3 = format_SlopeGemblengan_3.readFeatures(json_SlopeGemblengan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlopeGemblengan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlopeGemblengan_3.addFeatures(features_SlopeGemblengan_3);
var lyr_SlopeGemblengan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SlopeGemblengan_3, 
                style: style_SlopeGemblengan_3,
                popuplayertitle: 'Slope Gemblengan',
                interactive: true,
    title: 'Slope Gemblengan<br />\
    <img src="styles/legend/SlopeGemblengan_3_0.png" /> Datar<br />\
    <img src="styles/legend/SlopeGemblengan_3_1.png" /> Landai<br />\
    <img src="styles/legend/SlopeGemblengan_3_2.png" /> Agak Curam<br />\
    <img src="styles/legend/SlopeGemblengan_3_3.png" /> Curam<br />' });
var format_Kontur_4 = new ol.format.GeoJSON();
var features_Kontur_4 = format_Kontur_4.readFeatures(json_Kontur_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_4.addFeatures(features_Kontur_4);
var lyr_Kontur_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kontur_4, 
                style: style_Kontur_4,
                popuplayertitle: 'Kontur',
                interactive: true,
    title: 'Kontur<br />\
    <img src="styles/legend/Kontur_4_0.png" /> Minor<br />\
    <img src="styles/legend/Kontur_4_1.png" /> mayor<br />' });
var format_BATASDESAKABUPATENGARUNG_5 = new ol.format.GeoJSON();
var features_BATASDESAKABUPATENGARUNG_5 = format_BATASDESAKABUPATENGARUNG_5.readFeatures(json_BATASDESAKABUPATENGARUNG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKABUPATENGARUNG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKABUPATENGARUNG_5.addFeatures(features_BATASDESAKABUPATENGARUNG_5);
var lyr_BATASDESAKABUPATENGARUNG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKABUPATENGARUNG_5, 
                style: style_BATASDESAKABUPATENGARUNG_5,
                popuplayertitle: 'BATAS DESA KABUPATEN GARUNG',
                interactive: true,
                title: '<img src="styles/legend/BATASDESAKABUPATENGARUNG_5.png" /> BATAS DESA KABUPATEN GARUNG'
            });
var format_BATASDUSUN_DESAGEMBLENGANLine_6 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANLine_6 = format_BATASDUSUN_DESAGEMBLENGANLine_6.readFeatures(json_BATASDUSUN_DESAGEMBLENGANLine_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANLine_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANLine_6.addFeatures(features_BATASDUSUN_DESAGEMBLENGANLine_6);
var lyr_BATASDUSUN_DESAGEMBLENGANLine_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANLine_6, 
                style: style_BATASDUSUN_DESAGEMBLENGANLine_6,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN Line',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN Line<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_6_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_6_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_6_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_6_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_6_4.png" /> Kasiman<br />' });
var format_BATASDESAGEMBLENGAN_7 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_7 = format_BATASDESAGEMBLENGAN_7.readFeatures(json_BATASDESAGEMBLENGAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_7.addFeatures(features_BATASDESAGEMBLENGAN_7);
var lyr_BATASDESAGEMBLENGAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_7, 
                style: style_BATASDESAGEMBLENGAN_7,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_7.png" /> BATAS DESA GEMBLENGAN'
            });
var group_TOPOGRAFI = new ol.layer.Group({
                                layers: [lyr_DEMGemblenganHillshade_1,lyr_DEMGemblengan_2,lyr_SlopeGemblengan_3,lyr_Kontur_4,],
                                fold: 'open',
                                title: 'TOPOGRAFI'});
var group_DataGemblengan = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Data Gemblengan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_DEMGemblenganHillshade_1.setVisible(true);lyr_DEMGemblengan_2.setVisible(true);lyr_SlopeGemblengan_3.setVisible(false);lyr_Kontur_4.setVisible(true);lyr_BATASDESAKABUPATENGARUNG_5.setVisible(false);lyr_BATASDUSUN_DESAGEMBLENGANLine_6.setVisible(false);lyr_BATASDESAGEMBLENGAN_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_TOPOGRAFI,lyr_BATASDESAKABUPATENGARUNG_5,lyr_BATASDUSUN_DESAGEMBLENGANLine_6,lyr_BATASDESAGEMBLENGAN_7];
lyr_SlopeGemblengan_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'KET': 'KET', });
lyr_Kontur_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_BATASDESAKABUPATENGARUNG_5.set('fieldAliases', {'NAMOBJ_2': 'NAMOBJ_2', 'REMARK_2': 'REMARK_2', 'LCODE_2': 'LCODE_2', 'WADMKC_2': 'WADMKC_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS (HA)': 'LUAS (HA)', });
lyr_SlopeGemblengan_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'KET': 'TextEdit', });
lyr_Kontur_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_BATASDESAKABUPATENGARUNG_5.set('fieldImages', {'NAMOBJ_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'LCODE_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS (HA)': 'TextEdit', });
lyr_SlopeGemblengan_3.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'KET': 'inline label - visible with data', });
lyr_Kontur_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'ELEV': 'inline label - visible with data', });
lyr_BATASDESAKABUPATENGARUNG_5.set('fieldLabels', {'NAMOBJ_2': 'inline label - visible with data', 'REMARK_2': 'hidden field', 'LCODE_2': 'hidden field', 'WADMKC_2': 'inline label - visible with data', 'WADMKK_2': 'inline label - visible with data', 'WADMPR_2': 'inline label - visible with data', 'SHAPE_Le_1': 'hidden field', 'SHAPE_Ar_1': 'hidden field', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'inline label - visible with data', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS (HA)': 'inline label - visible with data', });
lyr_BATASDESAGEMBLENGAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});