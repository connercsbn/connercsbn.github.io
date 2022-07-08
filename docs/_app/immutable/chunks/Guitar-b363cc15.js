import{ad as v,ae as pe,af as T,ag as x,ah as Me,ai as $,aj as xe,ak as ee,al as te,am as Te,an as _,ao as Se,ap as Be,aq as re,ar as we,S as ye,i as Ce,s as be,as as ke,a0 as ae,a1 as ie,w as _e,t as De,x as Pe,h as Oe,y as Ee,g as Re,a2 as se,q as ze,o as Ue,B as Fe,d as je,M as p,at as Ae,au as le,av as ne,aw as Ve,ax as Ge,ay as Xe,az as F,N as y,aA as oe}from"./threlte-377a87a5.js";import{c as Qe,a as Ye,t as C}from"./clickOutside-f1e22371.js";import{a as b}from"./index-a5e2e047.js";import{L as Ne}from"./__layout-f58d4b16.js";import"./preload-helper-60cab3ee.js";class M extends pe{constructor(e,r,n,l){super(),this.renderScene=r,this.renderCamera=n,this.selectedObjects=l!==void 0?l:[],this.visibleEdgeColor=new T(1,1,1),this.hiddenEdgeColor=new T(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new v(e.x,e.y):new v(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),i=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new x(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Me,this.depthMaterial.side=$,this.depthMaterial.depthPacking=xe,this.depthMaterial.blending=ee,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=$,this.prepareMaskMaterial.fragmentShader=d(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new x(this.resolution.x,this.resolution.y),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new x(o,i),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new x(o,i),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new x(Math.round(o/2),Math.round(i/2)),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new x(o,i),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new x(Math.round(o/2),Math.round(i/2)),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const h=4,u=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(h),this.separableBlurMaterial1.uniforms.texSize.value.set(o,i),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(u),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(i/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=u,this.overlayMaterial=this.getOverlayMaterial(),te===void 0&&console.error("THREE.OutlinePass relies on CopyShader");const s=te;this.copyUniforms=Te.clone(s.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new _({uniforms:this.copyUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,blending:ee,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new T,this.oldClearAlpha=1,this.fsQuad=new Se(null),this.tempPulseColor1=new T,this.tempPulseColor2=new T,this.textureMatrix=new Be;function d(g,S){const B=S.isPerspectiveCamera?"perspective":"orthographic";return g.replace(/DEPTH_TO_VIEW_Z/g,B+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose()}setSize(e,r){this.renderTargetMaskBuffer.setSize(e,r),this.renderTargetDepthBuffer.setSize(e,r);let n=Math.round(e/this.downSampleRatio),l=Math.round(r/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,l),this.renderTargetBlurBuffer1.setSize(n,l),this.renderTargetEdgeBuffer1.setSize(n,l),this.separableBlurMaterial1.uniforms.texSize.value.set(n,l),n=Math.round(n/2),l=Math.round(l/2),this.renderTargetBlurBuffer2.setSize(n,l),this.renderTargetEdgeBuffer2.setSize(n,l),this.separableBlurMaterial2.uniforms.texSize.value.set(n,l)}changeVisibilityOfSelectedObjects(e){const r=this._visibilityCache;function n(l){l.isMesh&&(e===!0?l.visible=r.get(l):(r.set(l,l.visible),l.visible=e))}for(let l=0;l<this.selectedObjects.length;l++)this.selectedObjects[l].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const r=this._visibilityCache,n=[];function l(i){i.isMesh&&n.push(i)}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(l);function o(i){if(i.isMesh||i.isSprite){let h=!1;for(let u=0;u<n.length;u++)if(n[u].id===i.id){h=!0;break}if(h===!1){const u=i.visible;(e===!1||r.get(i)===!0)&&(i.visible=e),r.set(i,u)}}else(i.isPoints||i.isLine)&&(e===!0?i.visible=r.get(i):(r.set(i,i.visible),i.visible=e))}this.renderScene.traverse(o)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,r,n,l,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const i=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const h=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=h,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const u=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(u),this.tempPulseColor2.multiplyScalar(u)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=M.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=M.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=M.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=M.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=i}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new _({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new v(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;
					vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new _({uniforms:{maskTexture:{value:null},texSize:{value:new v(.5,.5)},visibleEdgeColor:{value:new re(1,1,1)},hiddenEdgeColor:{value:new re(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new _({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new v(.5,.5)},direction:{value:new v(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float weightSum = gaussianPdf(0.0, kernelRadius);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float w = gaussianPdf(uvOffset.x, kernelRadius);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new _({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:we,depthTest:!1,depthWrite:!1,transparent:!0})}}M.BlurDirectionX=new v(1,0);M.BlurDirectionY=new v(0,1);function We(a){let e,r,n,l,o;function i(s){a[30](s)}function h(s){a[31](s)}let u={receiveShadow:!0,url:"/models/plant_outdoors/scene.gltf",scale:a[10]||a[3],rotation:{x:a[14]||a[8],y:a[13]||a[7],z:a[12]||a[6]},position:{x:a[11]||a[5],y:a[4],z:a[9]},dracoDecoderPath:"three/examples/js/libs/draco/"};return a[0]!==void 0&&(u.gltf=a[0]),a[2]!==void 0&&(u.scene=a[2]),e=new ke({props:u}),ae.push(()=>ie(e,"gltf",i)),ae.push(()=>ie(e,"scene",h)),e.$on("load",a[32]),{c(){_e(e.$$.fragment),l=De(";")},l(s){Pe(e.$$.fragment,s),l=Oe(s,";")},m(s,d){Ee(e,s,d),Re(s,l,d),o=!0},p(s,d){const g={};d[0]&1032&&(g.scale=s[10]||s[3]),d[0]&29120&&(g.rotation={x:s[14]||s[8],y:s[13]||s[7],z:s[12]||s[6]}),d[0]&2608&&(g.position={x:s[11]||s[5],y:s[4],z:s[9]}),!r&&d[0]&1&&(r=!0,g.gltf=s[0],se(()=>r=!1)),!n&&d[0]&4&&(n=!0,g.scene=s[2],se(()=>n=!1)),e.$set(g)},i(s){o||(ze(e.$$.fragment,s),o=!0)},o(s){Ue(e.$$.fragment,s),o=!1},d(s){Fe(e,s),s&&je(l)}}}let ue=4.4,Ze=4.7,de=.2,fe=.18,Le=.023;function Ie(a,e,r){let n,l,o,i,h,u,s,d,g,S,B,j,D,P,O,E;p(a,Qe,t=>r(28,g=t)),p(a,Ye,t=>r(29,S=t));const{invalidate:he,camera:L,scene:I,size:H}=Ae();let{guitar:R}=e,{mouse:z}=e,{innerWidth:w}=e,{scrollY:k}=e,q=-1.7,K=-.16;const A=C(q,{duration:2e3,easing:b});p(a,A,t=>r(35,j=t));const V=C(de,{duration:2e3,easing:b});p(a,V,t=>r(14,E=t));const G=C(fe,{duration:2e3,easing:b});p(a,G,t=>r(13,O=t));const X=C(K,{duration:2e3,easing:b});p(a,X,t=>r(12,P=t));const Q=C(ue,{duration:2e3,easing:b});p(a,Q,t=>r(11,D=t));const Y=C(d,{duration:500,easing:b});p(a,Y,t=>r(10,B=t));let{guitarLoaded:N}=e,m;const W=le("/models/threeTone.jpg",{onError:t=>{console.warn(`An error occured loading the texture: ${t.message}`)}});W.minFilter=ne,W.magFilter=ne;const c=new Ve({gradientMap:W});c.transparent=!0,c.opacity=1,c.onBeforeCompile=function(t){t.uniforms.time={value:0},t.vertexShader=`uniform float time;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",["float theta = sin( time + position.y ) / 250.0;","float c = cos( theta );","float s = sin( theta );","mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );","vec3 transformed = vec3( position ) * m;","vNormal = vNormal * m;"].join(`
`)),r(24,c.userData.shader=t,c),r(24,c.customProgramCacheKey=function(){return 2},c)};let f,Z;Ge(()=>{console.log("rendering\u2026"),m&&m.traverse(t=>{if(t.isMesh){const U=t.material.userData.shader;U&&(U.uniforms.time.value=performance.now()/1e3)}}),ge()},{autostart:!0});const J=new Xe;function ge(){J.setFromCamera({x:500,y:500},F(L));const t=J.intersectObject(I,!0);if(t.length>0){const U=t[0].object;addSelectedObject(U),r(25,f.selectedObjects=selectedObjects,f)}}f=new M(new v(F(H).width,F(H).height),I,F(L)),f.edgeThickness=.1,f.edgeStrength=50,f.edgeGlow=0,f.visibleEdgeColor.set("blue"),f.usePatternTexture=!1,le("/tri_pattern.jpg",{onLoad:t=>{r(25,f.patternTexture=t,f),t.wrapS=oe,t.wrapT=oe}});function ce(t){R=t,r(0,R)}function me(t){m=t,r(2,m)}const ve=()=>{r(1,N=!0)};return a.$$set=t=>{"guitar"in t&&r(0,R=t.guitar),"mouse"in t&&r(21,z=t.mouse),"innerWidth"in t&&r(22,w=t.innerWidth),"scrollY"in t&&r(23,k=t.scrollY),"guitarLoaded"in t&&r(1,N=t.guitarLoaded)},a.$$.update=()=>{a.$$.dirty[0]&6291456&&r(27,i=((z.x||w/2)-.5*w)/1e4),a.$$.dirty[0]&134217728&&r(5,n=ue-i*.5),a.$$.dirty[0]&8388608&&r(4,l=q+k/3e3),a.$$.dirty[0]&6291456&&((z.y||w/2)-.5*w)/1e4,a.$$.dirty[0]&134217728&&r(8,h=de-i/15),a.$$.dirty[0]&142606336&&r(7,u=fe+k/5e4+i),a.$$.dirty[0]&134217728&&r(6,s=K-i/15),a.$$.dirty[0]&8388608&&r(3,d=Le+k/1e6),a.$$.dirty[0]&256&&y(V,E=h,E),a.$$.dirty[0]&128&&y(G,O=u,O),a.$$.dirty[0]&64&&y(X,P=s,P),a.$$.dirty[0]&32&&y(Q,D=n,D),a.$$.dirty[0]&16&&y(A,j=l,j),a.$$.dirty[0]&8&&y(Y,B=d,B),a.$$.dirty[0]&872415232&&(S&&(r(26,Z=Ne([100,92,S%360]).map(t=>Math.max(0,t))),r(24,c.color=g?new T().fromArray(Z):new T("white"),c)),he()),a.$$.dirty[0]&16777220&&m&&m.traverse(t=>{t.isMesh&&(t.material=c)}),a.$$.dirty[0]&33554436&&m&&f&&r(25,f.selectedObjects=[m],f)},r(9,o=Ze),[R,N,m,d,l,n,s,u,h,o,B,D,P,O,E,A,V,G,X,Q,Y,z,w,k,c,f,Z,i,g,S,ce,me,ve]}class et extends ye{constructor(e){super(),Ce(this,e,Ie,We,be,{guitar:0,mouse:21,innerWidth:22,scrollY:23,guitarLoaded:1},null,[-1,-1])}}export{et as default};
