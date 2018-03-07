export const worker = "!function(I,r){if(\"object\"==typeof exports&&\"object\"==typeof module)module.exports=r();else if(\"function\"==typeof define&&define.amd)define([],r);else{var t=r();for(var e in t)(\"object\"==typeof exports?exports:I)[e]=t[e]}}(window,function(){return function(I){var r={};function t(e){if(r[e])return r[e].exports;var C=r[e]={i:e,l:!1,exports:{}};return I[e].call(C.exports,C,C.exports,t),C.l=!0,C.exports}return t.m=I,t.c=r,t.d=function(I,r,e){t.o(I,r)||Object.defineProperty(I,r,{configurable:!1,enumerable:!0,get:e})},t.r=function(I){Object.defineProperty(I,\"__esModule\",{value:!0})},t.n=function(I){var r=I&&I.__esModule?function(){return I.default}:function(){return I};return t.d(r,\"a\",r),r},t.o=function(I,r){return Object.prototype.hasOwnProperty.call(I,r)},t.p=\"\",t(t.s=5)}([function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0});var e=function(){function I(){this._buffer=null,this._view=null,this._position=0}return Object.defineProperty(I.prototype,\"Position\",{get:function(){return this._position},enumerable:!0,configurable:!0}),I.prototype.getSubReader=function(r){var t=new I,e=this._buffer.slice(this._position,this._position+r);return t.load(e,null),this._position+=r,t},I.prototype.load=function(I,r){this._position=0;var t=this;if(void 0===I||null==I)throw\"Source must be defined\";if(\"string\"==typeof I){var e=new XMLHttpRequest;e.open(\"GET\",I,!0),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var I=new FileReader;I.onloadend=function(){I.result&&(t._buffer=I.result,t._view=new DataView(t._buffer),t.onloaded&&t.onloaded(t))},I.readAsArrayBuffer(e.response)}if(4==e.readyState&&200!=e.status){var r=\"Failed to fetch binary data from server. Server code: \"+e.status+\". This might be due to CORS policy of your browser if you run this as a local file.\";throw t.onerror&&t.onerror(r),r}},e.responseType=\"blob\",void 0!==r&&Object.keys(r).forEach(function(I){var t=r[I];e.setRequestHeader(I,t)}),e.send()}else if(I instanceof Blob||I instanceof File){var C=new FileReader;C.onloadend=function(){C.result&&(t._buffer=C.result,t._view=new DataView(t._buffer),t.onloaded&&t.onloaded(t))},C.readAsArrayBuffer(I)}else I instanceof ArrayBuffer&&(this._buffer=I,this._view=new DataView(t._buffer),t.onloaded&&t.onloaded(t))},I.prototype.seek=function(I){if(I<0||I>this._buffer.byteLength)throw\"Position out of range.\";this._position=I},I.prototype.isEOF=function(){if(null==this._position)throw\"Position is not defined\";return this._position==this._buffer.byteLength},I.prototype.readArray=function(I,r,t){null==r&&(r=1);var e=I*r,C=this._position;return this._position+=e,1===r?new t(this._buffer.slice(C,C+e))[0]:new t(this._buffer.slice(C,C+e))},I.prototype.move=function(I){var r=this._position;return this._position+=I,r},I.prototype.readByte=function(){return this.readUint8()},I.prototype.readByteArray=function(I){return this.readUint8Array(I)},I.prototype.readUint8=function(){var I=this.move(1);return this._view.getUint8(I)},I.prototype.readUint8Array=function(I){return this.readArray(1,I,Uint8Array)},I.prototype.readInt16=function(){var I=this.move(2);return this._view.getInt16(I,!0)},I.prototype.readInt16Array=function(I){return this.readArray(2,I,Int16Array)},I.prototype.readUInt16=function(){var I=this.move(2);return this._view.getUint16(I,!0)},I.prototype.readUint16Array=function(I){return this.readArray(2,I,Uint16Array)},I.prototype.readInt32=function(){var I=this.move(4);return this._view.getInt32(I,!0)},I.prototype.readInt32Array=function(I){return this.readArray(4,I,Int32Array)},I.prototype.readUint32=function(){var I=this.move(4);return this._view.getUint32(I,!0)},I.prototype.readUint32Array=function(I){return this.readArray(4,I,Uint32Array)},I.prototype.readFloat32=function(){var I=this.move(4);return this._view.getFloat32(I,!0)},I.prototype.readFloat32Array=function(I){return this.readArray(4,I,Float32Array)},I.prototype.readFloat64=function(){var I=this.move(8);return this._view.getFloat64(I,!0)},I.prototype.readFloat64Array=function(I){return this.readArray(8,I,Float64Array)},I.prototype.readChar=function(I){null==I&&(I=1);var r=this.readByteArray(I),t=new Array(I);for(var e in r)t[e]=String.fromCharCode(r[e]);return 1===I?t[0]:t},I.prototype.readPoint=function(I){null==I&&(I=1);for(var r=this.readFloat32Array(3*I),t=new Array(I),e=0;e<I;e++){var C=3*e*4,E=new Float32Array(r.buffer,C,3);t[e]=E}return 1===I?t[0]:t},I.prototype.readRgba=function(I){null==I&&(I=1);for(var r=this.readByteArray(4*I),t=new Array(I),e=0;e<I;e++){var C=4*e,E=new Uint8Array(r.buffer,C,4);t[e]=E}return 1===I?t[0]:t},I.prototype.readPackedNormal=function(I){null==I&&(I=1);for(var r=this.readUint8Array(2*I),t=new Array(I),e=0;e<I;e++){var C=new Uint8Array(r.buffer,2*e,2);t[e]=C}return 1===I?t[0]:t},I.prototype.readMatrix4x4=function(I){null==I&&(I=1);for(var r=this.readFloat32Array(16*I),t=new Array(I),e=0;e<I;e++){var C=16*e*4,E=new Float32Array(r.buffer,C,16);t[e]=E}return 1===I?t[0]:t},I.prototype.readMatrix4x4_64=function(I){null==I&&(I=1);for(var r=this.readFloat64Array(16*I),t=new Array(I),e=0;e<I;e++){var C=16*e*8,E=new Float64Array(r.buffer,C,16);t[e]=E}return 1===I?t[0]:t},I.prototype.readData=function(I){var r=this.move(I);return this._buffer.slice(r,r+I)},I}();r.BinaryReader=e},function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0}),function(I){I[I.IFCPRODUCT=20]=\"IFCPRODUCT\",I[I.IFCELEMENT=19]=\"IFCELEMENT\",I[I.IFCBUILDINGELEMENT=26]=\"IFCBUILDINGELEMENT\",I[I.IFCFOOTING=120]=\"IFCFOOTING\",I[I.IFCPILE=572]=\"IFCPILE\",I[I.IFCBEAM=171]=\"IFCBEAM\",I[I.IFCBEAMSTANDARDCASE=1104]=\"IFCBEAMSTANDARDCASE\",I[I.IFCBUILDINGELEMENTPROXY=560]=\"IFCBUILDINGELEMENTPROXY\",I[I.IFCCHIMNEY=1120]=\"IFCCHIMNEY\",I[I.IFCCOLUMN=383]=\"IFCCOLUMN\",I[I.IFCCOLUMNSTANDARDCASE=1126]=\"IFCCOLUMNSTANDARDCASE\",I[I.IFCCOVERING=382]=\"IFCCOVERING\",I[I.IFCCURTAINWALL=456]=\"IFCCURTAINWALL\",I[I.IFCDOOR=213]=\"IFCDOOR\",I[I.IFCDOORSTANDARDCASE=1151]=\"IFCDOORSTANDARDCASE\",I[I.IFCMEMBER=310]=\"IFCMEMBER\",I[I.IFCMEMBERSTANDARDCASE=1214]=\"IFCMEMBERSTANDARDCASE\",I[I.IFCPLATE=351]=\"IFCPLATE\",I[I.IFCPLATESTANDARDCASE=1224]=\"IFCPLATESTANDARDCASE\",I[I.IFCRAILING=350]=\"IFCRAILING\",I[I.IFCRAMP=414]=\"IFCRAMP\",I[I.IFCRAMPFLIGHT=348]=\"IFCRAMPFLIGHT\",I[I.IFCROOF=347]=\"IFCROOF\",I[I.IFCSHADINGDEVICE=1265]=\"IFCSHADINGDEVICE\",I[I.IFCSLAB=99]=\"IFCSLAB\",I[I.IFCSLABELEMENTEDCASE=1268]=\"IFCSLABELEMENTEDCASE\",I[I.IFCSLABSTANDARDCASE=1269]=\"IFCSLABSTANDARDCASE\",I[I.IFCSTAIR=346]=\"IFCSTAIR\",I[I.IFCSTAIRFLIGHT=25]=\"IFCSTAIRFLIGHT\",I[I.IFCWALL=452]=\"IFCWALL\",I[I.IFCWALLELEMENTEDCASE=1314]=\"IFCWALLELEMENTEDCASE\",I[I.IFCWALLSTANDARDCASE=453]=\"IFCWALLSTANDARDCASE\",I[I.IFCWINDOW=667]=\"IFCWINDOW\",I[I.IFCWINDOWSTANDARDCASE=1316]=\"IFCWINDOWSTANDARDCASE\",I[I.IFCELEMENTCOMPONENT=424]=\"IFCELEMENTCOMPONENT\",I[I.IFCREINFORCINGELEMENT=262]=\"IFCREINFORCINGELEMENT\",I[I.IFCREINFORCINGBAR=571]=\"IFCREINFORCINGBAR\",I[I.IFCREINFORCINGMESH=531]=\"IFCREINFORCINGMESH\",I[I.IFCTENDON=261]=\"IFCTENDON\",I[I.IFCTENDONANCHOR=675]=\"IFCTENDONANCHOR\",I[I.IFCBUILDINGELEMENTPART=220]=\"IFCBUILDINGELEMENTPART\",I[I.IFCDISCRETEACCESSORY=423]=\"IFCDISCRETEACCESSORY\",I[I.IFCFASTENER=535]=\"IFCFASTENER\",I[I.IFCMECHANICALFASTENER=536]=\"IFCMECHANICALFASTENER\",I[I.IFCVIBRATIONISOLATOR=1312]=\"IFCVIBRATIONISOLATOR\",I[I.IFCFEATUREELEMENT=386]=\"IFCFEATUREELEMENT\",I[I.IFCSURFACEFEATURE=1287]=\"IFCSURFACEFEATURE\",I[I.IFCFEATUREELEMENTSUBTRACTION=499]=\"IFCFEATUREELEMENTSUBTRACTION\",I[I.IFCVOIDINGFEATURE=1313]=\"IFCVOIDINGFEATURE\",I[I.IFCOPENINGELEMENT=498]=\"IFCOPENINGELEMENT\",I[I.IFCOPENINGSTANDARDCASE=1217]=\"IFCOPENINGSTANDARDCASE\",I[I.IFCFEATUREELEMENTADDITION=385]=\"IFCFEATUREELEMENTADDITION\",I[I.IFCPROJECTIONELEMENT=384]=\"IFCPROJECTIONELEMENT\",I[I.IFCFURNISHINGELEMENT=253]=\"IFCFURNISHINGELEMENT\",I[I.IFCFURNITURE=1184]=\"IFCFURNITURE\",I[I.IFCSYSTEMFURNITUREELEMENT=1291]=\"IFCSYSTEMFURNITUREELEMENT\",I[I.IFCDISTRIBUTIONELEMENT=44]=\"IFCDISTRIBUTIONELEMENT\",I[I.IFCDISTRIBUTIONFLOWELEMENT=45]=\"IFCDISTRIBUTIONFLOWELEMENT\",I[I.IFCDISTRIBUTIONCHAMBERELEMENT=180]=\"IFCDISTRIBUTIONCHAMBERELEMENT\",I[I.IFCENERGYCONVERSIONDEVICE=175]=\"IFCENERGYCONVERSIONDEVICE\",I[I.IFCAIRTOAIRHEATRECOVERY=1097]=\"IFCAIRTOAIRHEATRECOVERY\",I[I.IFCBOILER=1105]=\"IFCBOILER\",I[I.IFCBURNER=1109]=\"IFCBURNER\",I[I.IFCCHILLER=1119]=\"IFCCHILLER\",I[I.IFCCOIL=1124]=\"IFCCOIL\",I[I.IFCCONDENSER=1132]=\"IFCCONDENSER\",I[I.IFCCOOLEDBEAM=1141]=\"IFCCOOLEDBEAM\",I[I.IFCCOOLINGTOWER=1142]=\"IFCCOOLINGTOWER\",I[I.IFCENGINE=1164]=\"IFCENGINE\",I[I.IFCEVAPORATIVECOOLER=1166]=\"IFCEVAPORATIVECOOLER\",I[I.IFCEVAPORATOR=1167]=\"IFCEVAPORATOR\",I[I.IFCHEATEXCHANGER=1187]=\"IFCHEATEXCHANGER\",I[I.IFCHUMIDIFIER=1188]=\"IFCHUMIDIFIER\",I[I.IFCTUBEBUNDLE=1305]=\"IFCTUBEBUNDLE\",I[I.IFCUNITARYEQUIPMENT=1310]=\"IFCUNITARYEQUIPMENT\",I[I.IFCELECTRICGENERATOR=1160]=\"IFCELECTRICGENERATOR\",I[I.IFCELECTRICMOTOR=1161]=\"IFCELECTRICMOTOR\",I[I.IFCMOTORCONNECTION=1216]=\"IFCMOTORCONNECTION\",I[I.IFCSOLARDEVICE=1270]=\"IFCSOLARDEVICE\",I[I.IFCTRANSFORMER=1303]=\"IFCTRANSFORMER\",I[I.IFCFLOWCONTROLLER=121]=\"IFCFLOWCONTROLLER\",I[I.IFCAIRTERMINALBOX=1096]=\"IFCAIRTERMINALBOX\",I[I.IFCDAMPER=1148]=\"IFCDAMPER\",I[I.IFCFLOWMETER=1182]=\"IFCFLOWMETER\",I[I.IFCVALVE=1311]=\"IFCVALVE\",I[I.IFCELECTRICDISTRIBUTIONBOARD=1157]=\"IFCELECTRICDISTRIBUTIONBOARD\",I[I.IFCELECTRICTIMECONTROL=1162]=\"IFCELECTRICTIMECONTROL\",I[I.IFCPROTECTIVEDEVICE=1235]=\"IFCPROTECTIVEDEVICE\",I[I.IFCSWITCHINGDEVICE=1290]=\"IFCSWITCHINGDEVICE\",I[I.IFCFLOWFITTING=467]=\"IFCFLOWFITTING\",I[I.IFCDUCTFITTING=1153]=\"IFCDUCTFITTING\",I[I.IFCPIPEFITTING=1222]=\"IFCPIPEFITTING\",I[I.IFCCABLECARRIERFITTING=1111]=\"IFCCABLECARRIERFITTING\",I[I.IFCCABLEFITTING=1113]=\"IFCCABLEFITTING\",I[I.IFCJUNCTIONBOX=1195]=\"IFCJUNCTIONBOX\",I[I.IFCFLOWMOVINGDEVICE=502]=\"IFCFLOWMOVINGDEVICE\",I[I.IFCCOMPRESSOR=1131]=\"IFCCOMPRESSOR\",I[I.IFCFAN=1177]=\"IFCFAN\",I[I.IFCPUMP=1238]=\"IFCPUMP\",I[I.IFCFLOWSEGMENT=574]=\"IFCFLOWSEGMENT\",I[I.IFCDUCTSEGMENT=1154]=\"IFCDUCTSEGMENT\",I[I.IFCPIPESEGMENT=1223]=\"IFCPIPESEGMENT\",I[I.IFCCABLECARRIERSEGMENT=1112]=\"IFCCABLECARRIERSEGMENT\",I[I.IFCCABLESEGMENT=1115]=\"IFCCABLESEGMENT\",I[I.IFCFLOWSTORAGEDEVICE=371]=\"IFCFLOWSTORAGEDEVICE\",I[I.IFCTANK=1293]=\"IFCTANK\",I[I.IFCELECTRICFLOWSTORAGEDEVICE=1159]=\"IFCELECTRICFLOWSTORAGEDEVICE\",I[I.IFCFLOWTERMINAL=46]=\"IFCFLOWTERMINAL\",I[I.IFCFIRESUPPRESSIONTERMINAL=1179]=\"IFCFIRESUPPRESSIONTERMINAL\",I[I.IFCSANITARYTERMINAL=1262]=\"IFCSANITARYTERMINAL\",I[I.IFCSTACKTERMINAL=1277]=\"IFCSTACKTERMINAL\",I[I.IFCWASTETERMINAL=1315]=\"IFCWASTETERMINAL\",I[I.IFCAIRTERMINAL=1095]=\"IFCAIRTERMINAL\",I[I.IFCMEDICALDEVICE=1212]=\"IFCMEDICALDEVICE\",I[I.IFCSPACEHEATER=1272]=\"IFCSPACEHEATER\",I[I.IFCAUDIOVISUALAPPLIANCE=1099]=\"IFCAUDIOVISUALAPPLIANCE\",I[I.IFCCOMMUNICATIONSAPPLIANCE=1127]=\"IFCCOMMUNICATIONSAPPLIANCE\",I[I.IFCELECTRICAPPLIANCE=1156]=\"IFCELECTRICAPPLIANCE\",I[I.IFCLAMP=1198]=\"IFCLAMP\",I[I.IFCLIGHTFIXTURE=1199]=\"IFCLIGHTFIXTURE\",I[I.IFCOUTLET=1219]=\"IFCOUTLET\",I[I.IFCFLOWTREATMENTDEVICE=425]=\"IFCFLOWTREATMENTDEVICE\",I[I.IFCINTERCEPTOR=1193]=\"IFCINTERCEPTOR\",I[I.IFCDUCTSILENCER=1155]=\"IFCDUCTSILENCER\",I[I.IFCFILTER=1178]=\"IFCFILTER\",I[I.IFCDISTRIBUTIONCONTROLELEMENT=468]=\"IFCDISTRIBUTIONCONTROLELEMENT\",I[I.IFCPROTECTIVEDEVICETRIPPINGUNIT=1236]=\"IFCPROTECTIVEDEVICETRIPPINGUNIT\",I[I.IFCACTUATOR=1091]=\"IFCACTUATOR\",I[I.IFCALARM=1098]=\"IFCALARM\",I[I.IFCCONTROLLER=1139]=\"IFCCONTROLLER\",I[I.IFCFLOWINSTRUMENT=1181]=\"IFCFLOWINSTRUMENT\",I[I.IFCSENSOR=1264]=\"IFCSENSOR\",I[I.IFCUNITARYCONTROLELEMENT=1308]=\"IFCUNITARYCONTROLELEMENT\",I[I.IFCCIVILELEMENT=1122]=\"IFCCIVILELEMENT\",I[I.IFCELEMENTASSEMBLY=18]=\"IFCELEMENTASSEMBLY\",I[I.IFCGEOGRAPHICELEMENT=1185]=\"IFCGEOGRAPHICELEMENT\",I[I.IFCTRANSPORTELEMENT=416]=\"IFCTRANSPORTELEMENT\",I[I.IFCVIRTUALELEMENT=168]=\"IFCVIRTUALELEMENT\",I[I.IFCSTRUCTURALACTIVITY=41]=\"IFCSTRUCTURALACTIVITY\",I[I.IFCSTRUCTURALACTION=40]=\"IFCSTRUCTURALACTION\",I[I.IFCSTRUCTURALCURVEACTION=1279]=\"IFCSTRUCTURALCURVEACTION\",I[I.IFCSTRUCTURALLINEARACTION=463]=\"IFCSTRUCTURALLINEARACTION\",I[I.IFCSTRUCTURALSURFACEACTION=1284]=\"IFCSTRUCTURALSURFACEACTION\",I[I.IFCSTRUCTURALPLANARACTION=39]=\"IFCSTRUCTURALPLANARACTION\",I[I.IFCSTRUCTURALPOINTACTION=356]=\"IFCSTRUCTURALPOINTACTION\",I[I.IFCSTRUCTURALREACTION=355]=\"IFCSTRUCTURALREACTION\",I[I.IFCSTRUCTURALCURVEREACTION=1280]=\"IFCSTRUCTURALCURVEREACTION\",I[I.IFCSTRUCTURALPOINTREACTION=354]=\"IFCSTRUCTURALPOINTREACTION\",I[I.IFCSTRUCTURALSURFACEREACTION=1285]=\"IFCSTRUCTURALSURFACEREACTION\",I[I.IFCSTRUCTURALITEM=226]=\"IFCSTRUCTURALITEM\",I[I.IFCSTRUCTURALCONNECTION=265]=\"IFCSTRUCTURALCONNECTION\",I[I.IFCSTRUCTURALCURVECONNECTION=534]=\"IFCSTRUCTURALCURVECONNECTION\",I[I.IFCSTRUCTURALPOINTCONNECTION=533]=\"IFCSTRUCTURALPOINTCONNECTION\",I[I.IFCSTRUCTURALSURFACECONNECTION=264]=\"IFCSTRUCTURALSURFACECONNECTION\",I[I.IFCSTRUCTURALMEMBER=225]=\"IFCSTRUCTURALMEMBER\",I[I.IFCSTRUCTURALCURVEMEMBER=224]=\"IFCSTRUCTURALCURVEMEMBER\",I[I.IFCSTRUCTURALCURVEMEMBERVARYING=227]=\"IFCSTRUCTURALCURVEMEMBERVARYING\",I[I.IFCSTRUCTURALSURFACEMEMBER=420]=\"IFCSTRUCTURALSURFACEMEMBER\",I[I.IFCSTRUCTURALSURFACEMEMBERVARYING=421]=\"IFCSTRUCTURALSURFACEMEMBERVARYING\",I[I.IFCPORT=179]=\"IFCPORT\",I[I.IFCDISTRIBUTIONPORT=178]=\"IFCDISTRIBUTIONPORT\",I[I.IFCANNOTATION=634]=\"IFCANNOTATION\",I[I.IFCSPATIALELEMENT=1273]=\"IFCSPATIALELEMENT\",I[I.IFCSPATIALSTRUCTUREELEMENT=170]=\"IFCSPATIALSTRUCTUREELEMENT\",I[I.IFCBUILDING=169]=\"IFCBUILDING\",I[I.IFCBUILDINGSTOREY=459]=\"IFCBUILDINGSTOREY\",I[I.IFCSITE=349]=\"IFCSITE\",I[I.IFCSPACE=454]=\"IFCSPACE\",I[I.IFCEXTERNALSPATIALSTRUCTUREELEMENT=1175]=\"IFCEXTERNALSPATIALSTRUCTUREELEMENT\",I[I.IFCEXTERNALSPATIALELEMENT=1174]=\"IFCEXTERNALSPATIALELEMENT\",I[I.IFCSPATIALZONE=1275]=\"IFCSPATIALZONE\",I[I.IFCGRID=564]=\"IFCGRID\",I[I.IFCPROXY=447]=\"IFCPROXY\"}(r.ProductType||(r.ProductType={}))},function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0}),function(I){I[I.UNDEFINED=255]=\"UNDEFINED\",I[I.HIDDEN=254]=\"HIDDEN\",I[I.HIGHLIGHTED=253]=\"HIGHLIGHTED\",I[I.XRAYVISIBLE=252]=\"XRAYVISIBLE\",I[I.PICKING_ONLY=251]=\"PICKING_ONLY\",I[I.UNSTYLED=225]=\"UNSTYLED\"}(r.State||(r.State={}))},function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0});var e=t(0),C=function(){function I(){this.load=function(I){var r=new e.BinaryReader,t=this;r.onloaded=function(){t.parse(r),t.onloaded&&t.onloaded(this)},r.load(I,null)}}return I.prototype.parse=function(I){I.readByte();var r=I.readInt32(),t=I.readInt32();this.vertices=I.readFloat32Array(3*r),this.indices=new Uint32Array(3*t),this.normals=new Uint8Array(6*t);var e,C=0;e=r<=255?function(r){return I.readByteArray(r)}:r<=65535?function(r){return I.readUint16Array(r)}:function(r){return I.readInt32Array(r)};var E=I.readInt32();if(0!==r&&0!==t)for(var n=0;n<E;n++){var a=I.readInt32();if(0!=a){var o=a>0;if(a=Math.abs(a),o){var T=I.readByteArray(2),i=e(3*a);this.indices.set(i,C);for(var F=0;F<3*a;F++)this.normals[2*C]=T[0],this.normals[2*C+1]=T[1],C++}else for(F=0;F<a;F++)this.indices[C]=e(),this.normals.set(I.readByteArray(2),2*C),C++,this.indices[C]=e(),this.normals.set(I.readByteArray(2),2*C),C++,this.indices[C]=e(),this.normals.set(I.readByteArray(2),2*C),C++}}},I}();r.TriangulatedShape=C},function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0});var e=t(0),C=t(3),E=t(2),n=t(1),a=function(){function I(){this.meter=1e3,this._iVertex=0,this._iIndexForward=0,this._iIndexBackward=0,this._iTransform=0,this._iMatrix=0,this.productMaps={},this._styleMap=new i}return I.prototype.parse=function(I){this._reader=I;var r=I;if(94132117!=r.readInt32())throw\"Magic number mismatch.\";var t=r.readByte(),e=r.readInt32(),E=r.readInt32(),n=r.readInt32(),a=r.readInt32(),o=r.readInt32(),i=r.readInt32();this.meter=r.readFloat32();var F=r.readInt16();this.vertices=new Float32Array(this.square(4,3*E)),this.normals=new Uint8Array(6*n),this.indices=new Float32Array(3*n),this.styleIndices=new Uint16Array(3*n),this.styles=new Uint8Array(this.square(1,4*(i+1))),this.products=new Float32Array(3*n),this.states=new Uint8Array(3*n*2),this.transformations=new Float32Array(3*n),this.matrices=new Float32Array(this.square(4,16*a)),this.productMaps={},this.regions=new Array(F),this._iVertex=0,this._iIndexForward=0,this._iIndexBackward=3*n,this._iTransform=0,this._iMatrix=0;for(var A=0;A<F;A++)(l=new T).population=r.readInt32(),l.centre=r.readFloat32Array(3),l.bbox=r.readFloat32Array(6),this.regions[A]=l;for(var R=0;R<i;R++){var N=r.readInt32(),s=255*r.readFloat32(),L=255*r.readFloat32(),O=255*r.readFloat32(),u=255*r.readFloat32();this.styles.set([s,L,O,u],4*R),this._styleMap.Add({id:N,index:R,transparent:u<254})}this.styles.set([255,255,255,255],4*R);var d={id:-1,index:R,transparent:!1};for(this._styleMap.Add(d),A=0;A<o;A++){var S=r.readInt32(),U={productID:S,type:r.readInt16(),bBox:r.readFloat32Array(6),spans:[]};this.productMaps[S]=U}if(t>=3)for(var f=0;f<F;f++)for(var l=this.regions[f],M=r.readInt32(),p=0;p<M;p++){var h=this.readShape(t),y=r.readInt32(),c=r.getSubReader(y);if((P=new C.TriangulatedShape).parse(c),!c.isEOF())throw new Error(\"Incomplete reading of geometry for shape instance \"+h[0].iLabel);this.feedDataArrays(h,P)}else for(var D=0;D<e;D++){var P,v=this.readShape(t);(P=new C.TriangulatedShape).parse(r),this.feedDataArrays(v,P)}if(!r.isEOF())throw new Error(\"Binary reader is not at the end of the file.\");this.transparentIndex=this._iIndexForward},I.prototype.square=function(I,r){if(void 0===I||void 0===r)throw new Error('Wrong arguments for \"square\" function.');if(0==r)return 0;for(var t=r*I,e=Math.ceil(Math.sqrt(t/4));4*e%I!=0;)e++;return e*e*4/I},I.prototype.feedDataArrays=function(I,r){var t=this;I.forEach(function(I){var e=0,C=e=I.transparent?t._iIndexBackward-r.indices.length:t._iIndexForward,a=t.productMaps[I.pLabel];void 0===a&&(a={productID:0,type:n.ProductType.IFCOPENINGELEMENT,bBox:new Float32Array(6),spans:[]},t.productMaps[I.pLabel]=a),t.normals.set(r.normals,2*e);for(var o=a.type==n.ProductType.IFCSPACE||a.type==n.ProductType.IFCOPENINGELEMENT?E.State.HIDDEN:255,T=0;T<r.indices.length;T++)t.indices[e]=r.indices[T]+t._iVertex/3,t.products[e]=I.pLabel,t.styleIndices[e]=I.style,t.transformations[e]=I.transform,t.states[2*e]=o,t.states[2*e+1]=255,e++;var i=e;a.spans.push(new Int32Array([C,i])),I.transparent?t._iIndexBackward-=r.indices.length:t._iIndexForward+=r.indices.length},this),this.vertices.set(r.vertices,this._iVertex),this._iVertex+=r.vertices.length},I.prototype.readShape=function(I){for(var r=this._reader,t=r.readInt32(),e=new Array,C=0;C<t;C++){var E=r.readInt32(),n=(r.readInt16(),r.readInt32()),a=r.readInt32(),o=null;t>1&&(o=1===I?r.readFloat32Array(16):r.readFloat64Array(16),this.matrices.set(o,this._iMatrix),this._iMatrix+=16);var T=this._styleMap.GetStyle(a);null===T&&(T=this._styleMap.GetStyle(-1)),e.push({pLabel:E,iLabel:n,style:T.index,transparent:T.transparent,transform:null!=o?this._iTransform++:-1})}return e},I.prototype.load=function(I,r){var t=new e.BinaryReader,C=this;t.onloaded=function(){C.parse(t),C.onloaded&&C.onloaded(this)},t.onerror=function(I){C.onerror&&C.onerror(I)},t.load(I,r)},I}();r.ModelGeometry=a;var o=function(){};r.ProductMap=o;var T=function(){function I(I){this.population=-1,this.centre=null,this.bbox=null,I&&(this.population=I.population,this.centre=new Float32Array(I.centre),this.bbox=new Float32Array(I.bbox))}return I.prototype.clone=function(){var r=new I;return r.population=this.population,r.centre=new Float32Array(this.centre),r.bbox=new Float32Array(this.bbox),r},I.prototype.merge=function(r){if(-1===this.population&&null===this.centre&&null===this.bbox)return new I(r);var t=new I;t.population=this.population+r.population;var e=Math.min(this.bbox[0],r.bbox[0]),C=Math.min(this.bbox[1],r.bbox[1]),E=Math.min(this.bbox[2],r.bbox[2]),n=Math.max(this.bbox[0]+this.bbox[3],r.bbox[0]+r.bbox[3]),a=Math.max(this.bbox[1]+this.bbox[4],r.bbox[1]+r.bbox[4]),o=Math.max(this.bbox[2]+this.bbox[5],r.bbox[2]+r.bbox[5]),T=n-e,i=a-C,F=o-E,A=(e+n)/2,R=(C+a)/2,N=(E+o)/2;return t.bbox=new Float32Array([e,C,E,T,i,F]),t.centre=new Float32Array([A,R,N]),t},I}();r.Region=T;var i=function(){function I(){this._internal={}}return I.prototype.Add=function(I){this._internal[I.id]=I},I.prototype.GetStyle=function(I){return this._internal[I]||null},I}()},function(I,r,t){\"use strict\";Object.defineProperty(r,\"__esModule\",{value:!0});var e=t(4);if(self&&self instanceof DedicatedWorkerGlobalScope){var C=self;C.onmessage=function(I){var r=I.data.model,t=I.data.headers,E=new e.ModelGeometry;E.onerror=function(I){throw I},E.onloaded=function(){try{var I={},r=[];for(var t in E)if(E.hasOwnProperty(t)){var e=E[t];\"function\"==typeof e||t.startsWith(\"_\")||(I[t]=e,ArrayBuffer.isView(e)&&r.push(e.buffer))}C.postMessage(I,r),C.close()}catch(I){throw C.close(),I}},E.load(r,t)}}}])});"