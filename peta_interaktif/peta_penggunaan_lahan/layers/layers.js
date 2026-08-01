var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pemukiman_DesaGemblengan_1 = new ol.format.GeoJSON();
var features_Pemukiman_DesaGemblengan_1 = format_Pemukiman_DesaGemblengan_1.readFeatures(json_Pemukiman_DesaGemblengan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_DesaGemblengan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_DesaGemblengan_1.addFeatures(features_Pemukiman_DesaGemblengan_1);
var lyr_Pemukiman_DesaGemblengan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_DesaGemblengan_1, 
                style: style_Pemukiman_DesaGemblengan_1,
                popuplayertitle: 'Pemukiman_ Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_DesaGemblengan_1.png" /> Pemukiman_ Desa Gemblengan'
            });
var format_Ladang_DesaGemblengan_2 = new ol.format.GeoJSON();
var features_Ladang_DesaGemblengan_2 = format_Ladang_DesaGemblengan_2.readFeatures(json_Ladang_DesaGemblengan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_DesaGemblengan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_DesaGemblengan_2.addFeatures(features_Ladang_DesaGemblengan_2);
var lyr_Ladang_DesaGemblengan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladang_DesaGemblengan_2, 
                style: style_Ladang_DesaGemblengan_2,
                popuplayertitle: 'Ladang_Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/Ladang_DesaGemblengan_2.png" /> Ladang_Desa Gemblengan'
            });
var format_BATASDESAKABUPATENGARUNG_3 = new ol.format.GeoJSON();
var features_BATASDESAKABUPATENGARUNG_3 = format_BATASDESAKABUPATENGARUNG_3.readFeatures(json_BATASDESAKABUPATENGARUNG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKABUPATENGARUNG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKABUPATENGARUNG_3.addFeatures(features_BATASDESAKABUPATENGARUNG_3);
var lyr_BATASDESAKABUPATENGARUNG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKABUPATENGARUNG_3, 
                style: style_BATASDESAKABUPATENGARUNG_3,
                popuplayertitle: 'BATAS DESA KABUPATEN GARUNG',
                interactive: true,
                title: '<img src="styles/legend/BATASDESAKABUPATENGARUNG_3.png" /> BATAS DESA KABUPATEN GARUNG'
            });
var format_BATASDUSUN_DESAGEMBLENGANLine_4 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANLine_4 = format_BATASDUSUN_DESAGEMBLENGANLine_4.readFeatures(json_BATASDUSUN_DESAGEMBLENGANLine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANLine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANLine_4.addFeatures(features_BATASDUSUN_DESAGEMBLENGANLine_4);
var lyr_BATASDUSUN_DESAGEMBLENGANLine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANLine_4, 
                style: style_BATASDUSUN_DESAGEMBLENGANLine_4,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN Line',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN Line<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_4_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_4_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_4_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_4_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANLine_4_4.png" /> Kasiman<br />' });
var format_SUNGAIDesaGemblengan_5 = new ol.format.GeoJSON();
var features_SUNGAIDesaGemblengan_5 = format_SUNGAIDesaGemblengan_5.readFeatures(json_SUNGAIDesaGemblengan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIDesaGemblengan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIDesaGemblengan_5.addFeatures(features_SUNGAIDesaGemblengan_5);
var lyr_SUNGAIDesaGemblengan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIDesaGemblengan_5, 
                style: style_SUNGAIDesaGemblengan_5,
                popuplayertitle: 'SUNGAI Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_5.png" /> SUNGAI Desa Gemblengan'
            });
var format_JalanDesaGemblengan_6 = new ol.format.GeoJSON();
var features_JalanDesaGemblengan_6 = format_JalanDesaGemblengan_6.readFeatures(json_JalanDesaGemblengan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaGemblengan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaGemblengan_6.addFeatures(features_JalanDesaGemblengan_6);
var lyr_JalanDesaGemblengan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaGemblengan_6, 
                style: style_JalanDesaGemblengan_6,
                popuplayertitle: 'Jalan Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/JalanDesaGemblengan_6.png" /> Jalan Desa Gemblengan'
            });
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
var group_PenggunaanLahan = new ol.layer.Group({
                                layers: [lyr_Pemukiman_DesaGemblengan_1,lyr_Ladang_DesaGemblengan_2,],
                                fold: 'close',
                                title: 'Penggunaan Lahan'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Pemukiman_DesaGemblengan_1.setVisible(true);lyr_Ladang_DesaGemblengan_2.setVisible(true);lyr_BATASDESAKABUPATENGARUNG_3.setVisible(false);lyr_BATASDUSUN_DESAGEMBLENGANLine_4.setVisible(false);lyr_SUNGAIDesaGemblengan_5.setVisible(true);lyr_JalanDesaGemblengan_6.setVisible(true);lyr_BATASDESAGEMBLENGAN_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_PenggunaanLahan,lyr_BATASDESAKABUPATENGARUNG_3,lyr_BATASDUSUN_DESAGEMBLENGANLine_4,lyr_SUNGAIDesaGemblengan_5,lyr_JalanDesaGemblengan_6,lyr_BATASDESAGEMBLENGAN_7];
lyr_Pemukiman_DesaGemblengan_1.set('fieldAliases', {'id': 'id', });
lyr_Ladang_DesaGemblengan_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'd': 'd', 'LUAS': 'LUAS', 'PJ': 'PJ', });
lyr_BATASDESAKABUPATENGARUNG_3.set('fieldAliases', {'NAMOBJ_2': 'NAMOBJ_2', 'REMARK_2': 'REMARK_2', 'LCODE_2': 'LCODE_2', 'WADMKC_2': 'WADMKC_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_SUNGAIDesaGemblengan_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanDesaGemblengan_6.set('fieldAliases', {'id': 'id', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS (HA)': 'LUAS (HA)', });
lyr_Pemukiman_DesaGemblengan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Ladang_DesaGemblengan_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'd': 'TextEdit', 'LUAS': 'TextEdit', 'PJ': 'TextEdit', });
lyr_BATASDESAKABUPATENGARUNG_3.set('fieldImages', {'NAMOBJ_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'LCODE_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_SUNGAIDesaGemblengan_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JalanDesaGemblengan_6.set('fieldImages', {'id': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS (HA)': 'TextEdit', });
lyr_Pemukiman_DesaGemblengan_1.set('fieldLabels', {'id': 'no label', });
lyr_Ladang_DesaGemblengan_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'd': 'no label', 'LUAS': 'no label', 'PJ': 'no label', });
lyr_BATASDESAKABUPATENGARUNG_3.set('fieldLabels', {'NAMOBJ_2': 'inline label - visible with data', 'REMARK_2': 'hidden field', 'LCODE_2': 'hidden field', 'WADMKC_2': 'inline label - visible with data', 'WADMKK_2': 'inline label - visible with data', 'WADMPR_2': 'inline label - visible with data', 'SHAPE_Le_1': 'hidden field', 'SHAPE_Ar_1': 'hidden field', });
lyr_BATASDUSUN_DESAGEMBLENGANLine_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'inline label - visible with data', });
lyr_SUNGAIDesaGemblengan_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanDesaGemblengan_6.set('fieldLabels', {'id': 'no label', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'hidden field', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS (HA)': 'inline label - visible with data', });
lyr_BATASDESAGEMBLENGAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});