/*
* This file has been generated by spacker.exe utility. Do not change this file manualy as your changes
* will get lost when the file is regenerated. Original content is located in *.c files.
*/
export var Shaders = {
    fragment_shader: ' precision mediump float; uniform vec4 uClippingPlaneA; uniform vec4 uClippingPlaneB; uniform bool uClippingA; uniform bool uClippingB; varying vec4 vFrontColor; varying vec4 vBackColor; varying vec3 vPosition; varying float vDiscard; void main(void) { if ( vDiscard > 0.5) discard; if (uClippingA) { vec4 p = uClippingPlaneA; vec3 x = vPosition; float distance = (dot(p.xyz, x) + p.w) / length(p.xyz); if (distance < 0.0){ discard; } } if (uClippingB) { vec4 p = uClippingPlaneB; vec3 x = vPosition; float distance = (dot(p.xyz, x) + p.w) / length(p.xyz); if (distance < 0.0) { discard; } } gl_FragColor = gl_FrontFacing ? vFrontColor : vBackColor; }',
    vertex_shader: ' attribute highp float aVertexIndex; attribute highp float aTransformationIndex; attribute highp float aStyleIndex; attribute highp float aProduct; attribute highp vec2 aState; attribute highp vec2 aNormal; uniform mat4 uMVMatrix; uniform mat4 uPMatrix; uniform vec4 ulightA; uniform vec4 ulightB; uniform vec4 uHighlightColour; uniform float uMeter; uniform int uColorCoding; uniform int uRenderingMode; uniform highp sampler2D uVertexSampler; uniform int uVertexTextureSize; uniform highp sampler2D uMatrixSampler; uniform int uMatrixTextureSize; uniform highp sampler2D uStyleSampler; uniform int uStyleTextureSize; uniform highp sampler2D uStateStyleSampler; varying vec4 vFrontColor; varying vec4 vBackColor; varying vec3 vPosition; varying float vDiscard; vec3 getNormal(mat4 transform) { float U = aNormal[0]; float V = aNormal[1]; float PI = 3.1415926535897932384626433832795; float lon = U / 252.0 * 2.0 * PI; float lat = V / 252.0 * PI; float x = sin(lon) * sin(lat); float z = cos(lon) * sin(lat); float y = cos(lat); vec3 normal = vec3(x, y, z); if (aTransformationIndex < 0.0) { return normalize(normal); } mat3 normTrans = mat3(transform); return normalize(vec3(normTrans * normal)); } vec4 getIdColor(float id) { float B = floor(id / (256.0*256.0)); float G = floor((id - B * 256.0*256.0) / 256.0); float R = mod(id, 256.0); return vec4(R / 255.0, G / 255.0, B / 255.0, 1.0); } vec2 getTextureCoordinates(int index, int size) { float x = float(index - (index / size) * size); float y = float(index / size); float pixelSize = 1.0 / float(size); return vec2((x + 0.5) * pixelSize, (y + 0.5) * pixelSize); } vec4 getColor() { int restyle = int(floor(aState[1] + 0.5)); if (restyle > 224) { int index = int(floor(aStyleIndex + 0.5)); vec2 coords = getTextureCoordinates(index, uStyleTextureSize); vec4 col = texture2D(uStyleSampler, coords); if (uRenderingMode == 1 ) { float intensity = (col.r + col.g + col.b) / 3.0; return vec4(intensity, intensity, intensity, col.a); } return col; } vec2 coords = getTextureCoordinates(restyle, 15); vec4 col2 = texture2D(uStateStyleSampler, coords); if (uRenderingMode == 1) { float intensity = (col2.r + col2.g + col2.b) / 3.0; return vec4(intensity, intensity, intensity, col2.a); } return col2; } vec3 getVertexPosition(mat4 transform) { int index = int(floor(aVertexIndex + 0.5)); vec2 coords = getTextureCoordinates(index, uVertexTextureSize); vec3 point = vec3(texture2D(uVertexSampler, coords)); if (aTransformationIndex < 0.0) { return point; } return vec3(transform * vec4(point, 1.0)); } mat4 getTransform() { if (aTransformationIndex < 0.0) { return mat4(1.0); } int tIndex = int(floor(aTransformationIndex + 0.5)); tIndex *= 4; return mat4( texture2D(uMatrixSampler, getTextureCoordinates(tIndex, uMatrixTextureSize)), texture2D(uMatrixSampler, getTextureCoordinates(tIndex + 1, uMatrixTextureSize)), texture2D(uMatrixSampler, getTextureCoordinates(tIndex + 2, uMatrixTextureSize)), texture2D(uMatrixSampler, getTextureCoordinates(tIndex + 3, uMatrixTextureSize)) ); } void main(void) { int state = int(floor(aState[0] + 0.5)); vDiscard = 0.0; if (state == 254 || uColorCoding == -1 && ( (uRenderingMode == 2 && state != 253 && state != 252) || (uRenderingMode == 3 && (state == 253 || state == 252))) ) { vDiscard = 1.0; vFrontColor = vec4(0.0, 0.0, 0.0, 0.0); vBackColor = vec4(0.0, 0.0, 0.0, 0.0); vPosition = vec3(0.0, 0.0, 0.0); gl_Position = vec4(0.0, 0.0, 0.0, 1.0); return; } mat4 transform = getTransform(); vec3 vertex = getVertexPosition(transform); vec3 normal = getNormal(transform); vec3 backNormal = normal * -1.0; if (uColorCoding == -2) { float id = floor(aProduct + 0.5); vec4 idColor = getIdColor(id); vFrontColor = idColor; vBackColor = idColor; } else if (uColorCoding >= 0) { float id = float(uColorCoding); vec4 idColor = getIdColor(id); vFrontColor = idColor; vBackColor = idColor; } else { float lightAIntensity = ulightA[3]; vec3 lightADirection = normalize(ulightA.xyz - vertex); float lightBIntensity = ulightB[3]; vec3 lightBDirection = normalize(ulightB.xyz - vertex); float lightWeightA = max(dot(normal, lightADirection) * lightAIntensity, 0.0); float lightWeightB = max(dot(normal, lightBDirection) * lightBIntensity, 0.0); float backLightWeightA = max(dot(backNormal, lightADirection) * lightAIntensity, 0.0); float backLightWeightB = max(dot(backNormal, lightBDirection) * lightBIntensity, 0.0); float lightWeighting = lightWeightA + lightWeightB + 0.4; float backLightWeighting = backLightWeightA + backLightWeightB + 0.4; vec4 baseColor = vec4(1.0, 1.0, 1.0, 1.0); if (state == 253) { baseColor = uHighlightColour; } else if (uRenderingMode == 2 || uRenderingMode == 3) { if (state == 252) { baseColor = getColor(); } else { baseColor = vec4(0.0, 0.0, 0.3, 0.5); } } else { baseColor = getColor(); } if (baseColor.a < 0.98 && uRenderingMode == 0) { vec3 trans = -0.002 * uMeter * normalize(normal); vertex = vertex + trans; } vFrontColor = vec4(baseColor.rgb * lightWeighting, baseColor.a); vBackColor = vec4(baseColor.rgb * backLightWeighting, baseColor.a); } vPosition = vertex; gl_Position = uPMatrix * uMVMatrix * vec4(vertex, 1.0); }'
}
