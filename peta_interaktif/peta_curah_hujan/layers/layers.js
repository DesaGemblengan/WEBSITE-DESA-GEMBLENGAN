var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CURAHHUJANBMKG_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CURAH HUJAN BMKG<br />\
    <img src="styles/legend/CURAHHUJANBMKG_1_0.png" /> <= 3845.0000<br />\
    <img src="styles/legend/CURAHHUJANBMKG_1_1.png" /> 3845.0000 - 3865.0000<br />\
    <img src="styles/legend/CURAHHUJANBMKG_1_2.png" /> 3865.0000 - 3885.0000<br />\
    <img src="styles/legend/CURAHHUJANBMKG_1_3.png" /> 3885.0000 - 3905.0000<br />\
    <img src="styles/legend/CURAHHUJANBMKG_1_4.png" /> > 3905.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CURAHHUJANBMKG_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12235779.376004, -817051.139635, 12239731.010010, -814848.493710]
        })
    });
var format_BATASDESAKABUPATENGARUNG_2 = new ol.format.GeoJSON();
var features_BATASDESAKABUPATENGARUNG_2 = format_BATASDESAKABUPATENGARUNG_2.readFeatures(json_BATASDESAKABUPATENGARUNG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKABUPATENGARUNG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKABUPATENGARUNG_2.addFeatures(features_BATASDESAKABUPATENGARUNG_2);
var lyr_BATASDESAKABUPATENGARUNG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKABUPATENGARUNG_2, 
                style: style_BATASDESAKABUPATENGARUNG_2,
                popuplayertitle: 'BATAS DESA KABUPATEN GARUNG',
                interactive: true,
                title: '<img src="styles/legend/BATASDESAKABUPATENGARUNG_2.png" /> BATAS DESA KABUPATEN GARUNG'
            });
var format_BATASDUSUN_DESAGEMBLENGANLine_3 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANLine_3 = format_BATASDUSUN_DESAGEMBLENGANLine_3.readFeatures(json_BATASDUSUN_DESAGEMBLENGANLine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANLine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANLine_3.addFeatures(features_BATASDUSUN_DESAGEMBLENGANLine_3);
var lyr_BATASDUSUN_DESAGEMBLENGANLine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANLine_3, 
                style: style_BATASDUSUN_DESAGEMBLENGANLine_3,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN Line',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN Line<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_3_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_3_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_3_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_3_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_3_4.png" /> Kasiman<br />' });
var format_SUNGAIDesaGemblengan_4 = new ol.format.GeoJSON();
var features_SUNGAIDesaGemblengan_4 = format_SUNGAIDesaGemblengan_4.readFeatures(json_SUNGAIDesaGemblengan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIDesaGemblengan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIDesaGemblengan_4.addFeatures(features_SUNGAIDesaGemblengan_4);
var lyr_SUNGAIDesaGemblengan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIDesaGemblengan_4, 
                style: style_SUNGAIDesaGemblengan_4,
                popuplayertitle: 'SUNGAI Desa Gemblengan',
                interactive: true,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_4.png" /> SUNGAI Desa Gemblengan'
            });
var format_JalanDesaGemblengan_5 = new ol.format.GeoJSON();
var features_JalanDesaGemblengan_5 = format_JalanDesaGemblengan_5.readFeatures(json_JalanDesaGemblengan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaGemblengan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaGemblengan_5.addFeatures(features_JalanDesaGemblengan_5);
var lyr_JalanDesaGemblengan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaGemblengan_5, 
                style: style_JalanDesaGemblengan_5,
                popuplayertitle: 'Jalan Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/JalanDesaGemblengan_5.png" /> Jalan Desa Gemblengan'
            });
var format_BATASDESAGEMBLENGAN_6 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_6 = format_BATASDESAGEMBLENGAN_6.readFeatures(json_BATASDESAGEMBLENGAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_6.addFeatures(features_BATASDESAGEMBLENGAN_6);
var lyr_BATASDESAGEMBLENGAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_6, 
                style: style_BATASDESAGEMBLENGAN_6,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_6.png" /> BATAS DESA GEMBLENGAN'
            });
var group_Hujan = new ol.layer.Group({
                                layers: [lyr_CURAHHUJANBMKG_1,],
                                fold: 'open',
                                title: 'Hujan'});
var group_TOPOGRAFI = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'TOPOGRAFI'});
var group_DataGemblengan = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Data Gemblengan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_CURAHHUJANBMKG_1.setVisible(true);lyr_BATASDESAKABUPATENGARUNG_2.setVisible(false);lyr_BATASDUSUN_DESAGEMBLENGANLine_3.setVisible(false);lyr_SUNGAIDesaGemblengan_4.setVisible(false);lyr_JalanDesaGemblengan_5.setVisible(false);lyr_BATASDESAGEMBLENGAN_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Hujan,lyr_BATASDESAKABUPATENGARUNG_2,lyr_BATASDUSUN_DESAGEMBLENGANLine_3,lyr_SUNGAIDesaGemblengan_4,lyr_JalanDesaGemblengan_5,lyr_BATASDESAGEMBLENGAN_6];
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldAliases', {'NAMOBJ_2': 'NAMOBJ_2', 'REMARK_2': 'REMARK_2', 'LCODE_2': 'LCODE_2', 'WADMKC_2': 'WADMKC_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_SUNGAIDesaGemblengan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanDesaGemblengan_5.set('fieldAliases', {'id': 'id', });
lyr_BATASDESAGEMBLENGAN_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS (HA)': 'LUAS (HA)', });
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldImages', {'NAMOBJ_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'LCODE_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_SUNGAIDesaGemblengan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanDesaGemblengan_5.set('fieldImages', {'id': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS (HA)': 'TextEdit', });
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldLabels', {'NAMOBJ_2': 'inline label - visible with data', 'REMARK_2': 'hidden field', 'LCODE_2': 'hidden field', 'WADMKC_2': 'inline label - visible with data', 'WADMKK_2': 'inline label - visible with data', 'WADMPR_2': 'inline label - visible with data', 'SHAPE_Le_1': 'hidden field', 'SHAPE_Ar_1': 'hidden field', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'inline label - visible with data', });
lyr_SUNGAIDesaGemblengan_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanDesaGemblengan_5.set('fieldLabels', {'id': 'no label', });
lyr_BATASDESAGEMBLENGAN_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS (HA)': 'inline label - visible with data', });
lyr_BATASDESAGEMBLENGAN_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});