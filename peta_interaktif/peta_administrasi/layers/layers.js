var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASDESAKABUPATENGARUNG_1 = new ol.format.GeoJSON();
var features_BATASDESAKABUPATENGARUNG_1 = format_BATASDESAKABUPATENGARUNG_1.readFeatures(json_BATASDESAKABUPATENGARUNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKABUPATENGARUNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKABUPATENGARUNG_1.addFeatures(features_BATASDESAKABUPATENGARUNG_1);
var lyr_BATASDESAKABUPATENGARUNG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKABUPATENGARUNG_1, 
                style: style_BATASDESAKABUPATENGARUNG_1,
                popuplayertitle: 'BATAS DESA KABUPATEN GARUNG',
                interactive: true,
                title: '<img src="styles/legend/BATASDESAKABUPATENGARUNG_1.png" /> BATAS DESA KABUPATEN GARUNG'
            });
var format_BATASDUSUN_DESAGEMBLENGAN_2 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGAN_2 = format_BATASDUSUN_DESAGEMBLENGAN_2.readFeatures(json_BATASDUSUN_DESAGEMBLENGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGAN_2.addFeatures(features_BATASDUSUN_DESAGEMBLENGAN_2);
var lyr_BATASDUSUN_DESAGEMBLENGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGAN_2, 
                style: style_BATASDUSUN_DESAGEMBLENGAN_2,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_2_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_2_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_2_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_2_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_2_4.png" /> Kasiman<br />' });
var format_BATASDUSUN_DESAGEMBLENGANTransparan_3 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANTransparan_3 = format_BATASDUSUN_DESAGEMBLENGANTransparan_3.readFeatures(json_BATASDUSUN_DESAGEMBLENGANTransparan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_3.addFeatures(features_BATASDUSUN_DESAGEMBLENGANTransparan_3);
var lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_3, 
                style: style_BATASDUSUN_DESAGEMBLENGANTransparan_3,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN Transparan',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN Transparan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_3_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_3_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_3_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_3_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_3_4.png" /> Kasiman<br />' });
var format_BATASRTDESAGEMBLENGANTransparan_4 = new ol.format.GeoJSON();
var features_BATASRTDESAGEMBLENGANTransparan_4 = format_BATASRTDESAGEMBLENGANTransparan_4.readFeatures(json_BATASRTDESAGEMBLENGANTransparan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASRTDESAGEMBLENGANTransparan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASRTDESAGEMBLENGANTransparan_4.addFeatures(features_BATASRTDESAGEMBLENGANTransparan_4);
var lyr_BATASRTDESAGEMBLENGANTransparan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASRTDESAGEMBLENGANTransparan_4, 
                style: style_BATASRTDESAGEMBLENGANTransparan_4,
                popuplayertitle: 'BATAS RT DESA GEMBLENGAN Transparan',
                interactive: true,
    title: 'BATAS RT DESA GEMBLENGAN Transparan<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_4.png" /> Kasiman<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGANTransparan_4_5.png" /> <br />' });
var format_BATASRTDESAGEMBLENGAN_5 = new ol.format.GeoJSON();
var features_BATASRTDESAGEMBLENGAN_5 = format_BATASRTDESAGEMBLENGAN_5.readFeatures(json_BATASRTDESAGEMBLENGAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASRTDESAGEMBLENGAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASRTDESAGEMBLENGAN_5.addFeatures(features_BATASRTDESAGEMBLENGAN_5);
var lyr_BATASRTDESAGEMBLENGAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASRTDESAGEMBLENGAN_5, 
                style: style_BATASRTDESAGEMBLENGAN_5,
                popuplayertitle: 'BATAS RT DESA GEMBLENGAN',
                interactive: true,
    title: 'BATAS RT DESA GEMBLENGAN<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGAN_5_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGAN_5_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGAN_5_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGAN_5_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASRTDESAGEMBLENGAN_5_4.png" /> Kasiman<br />' });
var format_SUNGAIDesaGemblengan_6 = new ol.format.GeoJSON();
var features_SUNGAIDesaGemblengan_6 = format_SUNGAIDesaGemblengan_6.readFeatures(json_SUNGAIDesaGemblengan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIDesaGemblengan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIDesaGemblengan_6.addFeatures(features_SUNGAIDesaGemblengan_6);
var lyr_SUNGAIDesaGemblengan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIDesaGemblengan_6, 
                style: style_SUNGAIDesaGemblengan_6,
                popuplayertitle: 'SUNGAI Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_6.png" /> SUNGAI Desa Gemblengan'
            });
var format_JalanDesaGemblengan_7 = new ol.format.GeoJSON();
var features_JalanDesaGemblengan_7 = format_JalanDesaGemblengan_7.readFeatures(json_JalanDesaGemblengan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaGemblengan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaGemblengan_7.addFeatures(features_JalanDesaGemblengan_7);
var lyr_JalanDesaGemblengan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaGemblengan_7, 
                style: style_JalanDesaGemblengan_7,
                popuplayertitle: 'Jalan Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/JalanDesaGemblengan_7.png" /> Jalan Desa Gemblengan'
            });
var format_BATASDESAGEMBLENGAN_8 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_8 = format_BATASDESAGEMBLENGAN_8.readFeatures(json_BATASDESAGEMBLENGAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_8.addFeatures(features_BATASDESAGEMBLENGAN_8);
var lyr_BATASDESAGEMBLENGAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_8, 
                style: style_BATASDESAGEMBLENGAN_8,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_8.png" /> BATAS DESA GEMBLENGAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASDESAKABUPATENGARUNG_1.setVisible(false);lyr_BATASDUSUN_DESAGEMBLENGAN_2.setVisible(true);lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3.setVisible(false);lyr_BATASRTDESAGEMBLENGANTransparan_4.setVisible(false);lyr_BATASRTDESAGEMBLENGAN_5.setVisible(false);lyr_SUNGAIDesaGemblengan_6.setVisible(false);lyr_JalanDesaGemblengan_7.setVisible(false);lyr_BATASDESAGEMBLENGAN_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASDESAKABUPATENGARUNG_1,lyr_BATASDUSUN_DESAGEMBLENGAN_2,lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3,lyr_BATASRTDESAGEMBLENGANTransparan_4,lyr_BATASRTDESAGEMBLENGAN_5,lyr_SUNGAIDesaGemblengan_6,lyr_JalanDesaGemblengan_7,lyr_BATASDESAGEMBLENGAN_8];
lyr_BATASDESAKABUPATENGARUNG_1.set('fieldAliases', {'NAMOBJ_2': 'NAMOBJ_2', 'REMARK_2': 'REMARK_2', 'LCODE_2': 'LCODE_2', 'WADMKC_2': 'WADMKC_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BATASDUSUN_DESAGEMBLENGAN_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_BATASRTDESAGEMBLENGANTransparan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', 'RT': 'RT', 'NO': 'NO', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', 'RT': 'RT', 'NO': 'NO', });
lyr_SUNGAIDesaGemblengan_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanDesaGemblengan_7.set('fieldAliases', {'id': 'id', });
lyr_BATASDESAGEMBLENGAN_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS (HA)': 'LUAS (HA)', });
lyr_BATASDESAKABUPATENGARUNG_1.set('fieldImages', {'NAMOBJ_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'LCODE_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGAN_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_BATASRTDESAGEMBLENGANTransparan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', 'RT': 'TextEdit', 'NO': 'Range', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', 'RT': 'TextEdit', 'NO': 'Range', });
lyr_SUNGAIDesaGemblengan_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanDesaGemblengan_7.set('fieldImages', {'id': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS (HA)': 'TextEdit', });
lyr_BATASDESAKABUPATENGARUNG_1.set('fieldLabels', {'NAMOBJ_2': 'inline label - visible with data', 'REMARK_2': 'hidden field', 'LCODE_2': 'hidden field', 'WADMKC_2': 'inline label - visible with data', 'WADMKK_2': 'inline label - visible with data', 'WADMPR_2': 'inline label - visible with data', 'SHAPE_Le_1': 'hidden field', 'SHAPE_Ar_1': 'hidden field', });
lyr_BATASDUSUN_DESAGEMBLENGAN_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'hidden field', 'Nama Dusun': 'hidden field', 'LUAS HA': 'hidden field', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'hidden field', 'Nama Dusun': 'hidden field', 'LUAS HA': 'hidden field', });
lyr_BATASRTDESAGEMBLENGANTransparan_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'hidden field', 'RT': 'inline label - visible with data', 'NO': 'hidden field', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'hidden field', 'RT': 'inline label - visible with data', 'NO': 'hidden field', });
lyr_SUNGAIDesaGemblengan_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanDesaGemblengan_7.set('fieldLabels', {'id': 'no label', });
lyr_BATASDESAGEMBLENGAN_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS (HA)': 'inline label - visible with data', });
lyr_BATASDESAGEMBLENGAN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});