var wms_layers = [];


        var lyr_GoogleLabels_0 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
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
                interactive: false,
                title: '<img src="styles/legend/BATASDESAKABUPATENGARUNG_2.png" /> BATAS DESA KABUPATEN GARUNG'
            });
var format_BATASDESAGEMBLENGAN_3 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_3 = format_BATASDESAGEMBLENGAN_3.readFeatures(json_BATASDESAGEMBLENGAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_3.addFeatures(features_BATASDESAGEMBLENGAN_3);
var lyr_BATASDESAGEMBLENGAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_3, 
                style: style_BATASDESAGEMBLENGAN_3,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: true,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_3.png" /> BATAS DESA GEMBLENGAN'
            });
var format_BATASDUSUN_DESAGEMBLENGAN_4 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGAN_4 = format_BATASDUSUN_DESAGEMBLENGAN_4.readFeatures(json_BATASDUSUN_DESAGEMBLENGAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGAN_4.addFeatures(features_BATASDUSUN_DESAGEMBLENGAN_4);
var lyr_BATASDUSUN_DESAGEMBLENGAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGAN_4, 
                style: style_BATASDUSUN_DESAGEMBLENGAN_4,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN',
                interactive: true,
                title: '<img src="styles/legend/BATASDUSUN_DESAGEMBLENGAN_4.png" /> BATAS DUSUN_ DESA GEMBLENGAN'
            });
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
var format_SUNGAIDesaGemblengan_7 = new ol.format.GeoJSON();
var features_SUNGAIDesaGemblengan_7 = format_SUNGAIDesaGemblengan_7.readFeatures(json_SUNGAIDesaGemblengan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIDesaGemblengan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIDesaGemblengan_7.addFeatures(features_SUNGAIDesaGemblengan_7);
var lyr_SUNGAIDesaGemblengan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIDesaGemblengan_7, 
                style: style_SUNGAIDesaGemblengan_7,
                popuplayertitle: 'SUNGAI Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_7.png" /> SUNGAI Desa Gemblengan'
            });
var format_TtitikFasumGemblengan_8 = new ol.format.GeoJSON();
var features_TtitikFasumGemblengan_8 = format_TtitikFasumGemblengan_8.readFeatures(json_TtitikFasumGemblengan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TtitikFasumGemblengan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TtitikFasumGemblengan_8.addFeatures(features_TtitikFasumGemblengan_8);
var lyr_TtitikFasumGemblengan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TtitikFasumGemblengan_8, 
                style: style_TtitikFasumGemblengan_8,
                popuplayertitle: 'Ttitik Fasum Gemblengan',
                interactive: true,
    title: 'Ttitik Fasum Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_0.png" /> Balai Desa Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_1.png" /> GOR Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_2.png" /> Lapangan Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_3.png" /> Masjid Al Furqon<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_4.png" /> Masjid Baitul Mutaqin<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_5.png" /> Masjid Baitul Muttaqin<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_6.png" /> Masjid Baiturrohman<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_7.png" /> Masjid Bedilon<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_8.png" /> Masjid Sabilit Taqwa<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_9.png" /> MI Ma\'arif Gesing<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_10.png" /> Mushola<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_11.png" /> Mushola Al Hidayah<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_12.png" /> Mushola Al Ikhlas<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_13.png" /> Mushola Baittul Mutaqim<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_14.png" /> Puskesmas Bantu Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_15.png" /> SD N 1 Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_16.png" /> SD N 2 Gemblengan<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_17.png" /> TPQ Bidayatul Mubtadiin<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_18.png" /> Muhsola<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_19.png" /> Muhsola An Nur<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_20.png" /> Muhsola Baitul Nur<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_21.png" /> Muhsola Birrul Walidain<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_22.png" /> Mushola Ar Rahman<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_23.png" /> Paud An-Najah<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_24.png" /> TPQ<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_25.png" /> Muhsola Al Hidayah<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_26.png" /> Muhsola Baitul Muttaqin<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_27.png" /> Mushola Al Mubarok<br />\
    <img src="styles/legend/TtitikFasumGemblengan_8_28.png" /> Mushola Al-Hikmah<br />' });

lyr_GoogleLabels_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_BATASDESAKABUPATENGARUNG_2.setVisible(true);lyr_BATASDESAGEMBLENGAN_3.setVisible(true);lyr_BATASDUSUN_DESAGEMBLENGAN_4.setVisible(false);lyr_BATASRTDESAGEMBLENGAN_5.setVisible(false);lyr_JalanDesaGemblengan_6.setVisible(true);lyr_SUNGAIDesaGemblengan_7.setVisible(true);lyr_TtitikFasumGemblengan_8.setVisible(true);
var layersList = [lyr_GoogleLabels_0,lyr_GoogleSatellite_1,lyr_BATASDESAKABUPATENGARUNG_2,lyr_BATASDESAGEMBLENGAN_3,lyr_BATASDUSUN_DESAGEMBLENGAN_4,lyr_BATASRTDESAGEMBLENGAN_5,lyr_JalanDesaGemblengan_6,lyr_SUNGAIDesaGemblengan_7,lyr_TtitikFasumGemblengan_8];
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldAliases', {'NAMOBJ_2': 'NAMOBJ_2', 'REMARK_2': 'REMARK_2', 'LCODE_2': 'LCODE_2', 'WADMKC_2': 'WADMKC_2', 'WADMKK_2': 'WADMKK_2', 'WADMPR_2': 'WADMPR_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_BATASDESAGEMBLENGAN_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS (HA)': 'LUAS (HA)', });
lyr_BATASDUSUN_DESAGEMBLENGAN_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', 'RT': 'RT', 'NO': 'NO', });
lyr_JalanDesaGemblengan_6.set('fieldAliases', {'id': 'id', });
lyr_SUNGAIDesaGemblengan_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TtitikFasumGemblengan_8.set('fieldAliases', {'Nama Dusun': 'Nama Dusun', 'Fasilitas': 'Fasilitas', 'Longitude': 'Longitude', 'Laatitude': 'Laatitude', });
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldImages', {'NAMOBJ_2': 'TextEdit', 'REMARK_2': 'TextEdit', 'LCODE_2': 'TextEdit', 'WADMKC_2': 'TextEdit', 'WADMKK_2': 'TextEdit', 'WADMPR_2': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Ar_1': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS (HA)': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGAN_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', 'RT': 'TextEdit', 'NO': 'TextEdit', });
lyr_JalanDesaGemblengan_6.set('fieldImages', {'id': '', });
lyr_SUNGAIDesaGemblengan_7.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_TtitikFasumGemblengan_8.set('fieldImages', {'Nama Dusun': 'TextEdit', 'Fasilitas': 'TextEdit', 'Longitude': 'TextEdit', 'Laatitude': 'TextEdit', });
lyr_BATASDESAKABUPATENGARUNG_2.set('fieldLabels', {'NAMOBJ_2': 'hidden field', 'REMARK_2': 'no label', 'LCODE_2': 'no label', 'WADMKC_2': 'no label', 'WADMKK_2': 'no label', 'WADMPR_2': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Ar_1': 'no label', });
lyr_BATASDESAGEMBLENGAN_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'LUAS (HA)': 'inline label - visible with data', });
lyr_BATASDUSUN_DESAGEMBLENGAN_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'inline label - visible with data', });
lyr_BATASRTDESAGEMBLENGAN_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'LCODE': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Nama Dusun': 'inline label - visible with data', 'LUAS HA': 'inline label - visible with data', 'RT': 'inline label - visible with data', 'NO': 'inline label - visible with data', });
lyr_JalanDesaGemblengan_6.set('fieldLabels', {'id': 'no label', });
lyr_SUNGAIDesaGemblengan_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TtitikFasumGemblengan_8.set('fieldLabels', {'Nama Dusun': 'inline label - visible with data', 'Fasilitas': 'inline label - visible with data', 'Longitude': 'hidden field', 'Laatitude': 'hidden field', });
lyr_TtitikFasumGemblengan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});