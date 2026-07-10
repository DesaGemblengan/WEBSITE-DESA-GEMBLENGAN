var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASDUSUN_DESAGEMBLENGAN_1 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGAN_1 = format_BATASDUSUN_DESAGEMBLENGAN_1.readFeatures(json_BATASDUSUN_DESAGEMBLENGAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGAN_1.addFeatures(features_BATASDUSUN_DESAGEMBLENGAN_1);
var lyr_BATASDUSUN_DESAGEMBLENGAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGAN_1, 
                style: style_BATASDUSUN_DESAGEMBLENGAN_1,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_1_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_1_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_1_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_1_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_1_4.png" /> Kasiman<br />' });
var format_BATASDUSUN_DESAGEMBLENGANTransparan_2 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANTransparan_2 = format_BATASDUSUN_DESAGEMBLENGANTransparan_2.readFeatures(json_BATASDUSUN_DESAGEMBLENGANTransparan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_2.addFeatures(features_BATASDUSUN_DESAGEMBLENGANTransparan_2);
var lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANTransparan_2, 
                style: style_BATASDUSUN_DESAGEMBLENGANTransparan_2,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN Transparan',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN Transparan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_2_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_2_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_2_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_2_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANTransparan_2_4.png" /> Kasiman<br />' });
var format_JalanDesaGemblengan_3 = new ol.format.GeoJSON();
var features_JalanDesaGemblengan_3 = format_JalanDesaGemblengan_3.readFeatures(json_JalanDesaGemblengan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaGemblengan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaGemblengan_3.addFeatures(features_JalanDesaGemblengan_3);
var lyr_JalanDesaGemblengan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaGemblengan_3, 
                style: style_JalanDesaGemblengan_3,
                popuplayertitle: 'Jalan Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/JalanDesaGemblengan_3.png" /> Jalan Desa Gemblengan'
            });
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
                interactive: false,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_4.png" /> SUNGAI Desa Gemblengan'
            });
var format_BATASDESAGEMBLENGAN_5 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_5 = format_BATASDESAGEMBLENGAN_5.readFeatures(json_BATASDESAGEMBLENGAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_5.addFeatures(features_BATASDESAGEMBLENGAN_5);
var lyr_BATASDESAGEMBLENGAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_5, 
                style: style_BATASDESAGEMBLENGAN_5,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_5.png" /> BATAS DESA GEMBLENGAN'
            });
var group_JalanSungai = new ol.layer.Group({
                                layers: [lyr_JalanDesaGemblengan_3,lyr_SUNGAIDesaGemblengan_4,],
                                fold: 'open',
                                title: 'Jalan Sungai'});

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASDUSUN_DESAGEMBLENGAN_1.setVisible(true);lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2.setVisible(false);lyr_JalanDesaGemblengan_3.setVisible(true);lyr_SUNGAIDesaGemblengan_4.setVisible(true);lyr_BATASDESAGEMBLENGAN_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASDUSUN_DESAGEMBLENGAN_1,lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2,group_JalanSungai,lyr_BATASDESAGEMBLENGAN_5];
lyr_BATASDUSUN_DESAGEMBLENGAN_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_JalanDesaGemblengan_3.set('fieldAliases', {'id': 'id', });
lyr_SUNGAIDesaGemblengan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BATASDESAGEMBLENGAN_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'd': 'd', });
lyr_BATASDUSUN_DESAGEMBLENGAN_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_JalanDesaGemblengan_3.set('fieldImages', {'id': 'TextEdit', });
lyr_SUNGAIDesaGemblengan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'd': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGAN_1.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Nama Dusun': 'no label', 'LUAS HA': 'no label', });
lyr_BATASDUSUN_DESAGEMBLENGANTransparan_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Nama Dusun': 'no label', 'LUAS HA': 'no label', });
lyr_JalanDesaGemblengan_3.set('fieldLabels', {'id': 'no label', });
lyr_SUNGAIDesaGemblengan_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BATASDESAGEMBLENGAN_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'd': 'no label', });
lyr_BATASDESAGEMBLENGAN_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});