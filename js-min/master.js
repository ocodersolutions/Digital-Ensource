function AboutPage(){	
	//this.aboutPageTitle = new lib.about();

	this.titleAnim = new Object();

	this.titleAnim.titlePosition = 0;
}

AboutPage.prototype.setUp = function(){

}

AboutPage.prototype.startPage = function(){
	var delayIt = 2.9;

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		delayIt = 0;
	}

	if (!DTSite.mobileSimple){
		this.aboutPageTitle = new lib.about();

		this.aboutPageTitleIns = new createjs.Container();

		this.aboutPageTitleIns.addChild(this.aboutPageTitle);

		DTSite.titlesContainerIns.addChild(this.aboutPageTitleIns);

		this.aboutPageTitle.gotoAndStop(0);

		TweenLite.to(this.titleAnim, 1.5, {titlePosition:55, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:0.3 + delayIt, onComplete:function(){DTSite.updateTitleStage = false;}});
	}else{

		TweenLite.to("#aboutM", 1, {autoAlpha:1, delay:0.3 + delayIt, ease:Expo.easeIn});
	}

	var where = parseInt(DTSite.browser_height/2 - (DTSite.titleContinerH/2) - 40);

	//TweenLite.to(DTSite.titlesContainer, 0, {z:0, transformPerspective:200, delay:0.5 + 1.2, overwrite:"all"});

	if (!DTSite.mobileSimple) var tl = new TimelineLite();

	if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:-1.0 + delayIt});
		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut}, "+=1.3");
	}else{
		if (!DTSite.mobileSimple){
			tl.to(DTSite.titlesContainerIns, 0, {y:40, delay:0 + delayIt});
			tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut}, "+=.3");
		}
	}

	if (!DTSite.mobileSimple) tl.play();

	//TweenLite.to("#titlesContainer", 4, {y:-where, delay:3.0, ease:Expo.easeOut});

	//$("#aboutHolder").css("display","block");

	TweenLite.to("#aboutHolder", 1, {autoAlpha:1, delay:0.3 + delayIt, ease:Expo.easeIn});


	TweenLite.delayedCall(delayIt, this.resize, [this]);

	if (!DTSite.mobileSimple) DTSite.titlesStage.update();

	if (DTSite.mobileSimple){

		TweenLite.delayedCall(1.3 + delayIt, this.scrollMade, [this]);

	}

	// $("#logoContainer").css('display', 'block');
}

AboutPage.prototype.scrollMade = function(ref){

	var mobileCont = document.getElementById("mobileContent");

	$("#scrollingSection").css("height", $("#aboutHolder").height() + 60);

	DTSite.myScroll = new IScroll(mobileCont,
	{ 
		scrollX:false,
		click:false,
		bounceTime: 800,
		deceleration: 0.001
	});

	DTSite.myScroll.refresh();
}

AboutPage.prototype.resize = function(ref){

	$("#aboutHolder").css("display","block");

	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	if (!DTSite.mobileSimple){

		var widthMin = 1300;
		var heightMin = 1100;

		var scaleX = 1;
		var scaleY = 1;

		if (widthMin > DTSite.browser_width){
			var scaleX = DTSite.browser_width/widthMin;
		}

		if (heightMin > DTSite.browser_height){
			var scaleY = DTSite.browser_height/heightMin;
		}

		var scaleTmp = (scaleX > scaleY) ? scaleY : scaleX;
	}else{
		var scaleTmp = (DTSite.browser_width - 70)/786;

		if (scaleTmp * 220 > 80){
			scaleTmp = (80)/220;
		}
	}

	if (!DTSite.mobileSimple){
		ref_.aboutPageTitle.scaleX = scaleTmp;
		ref_.aboutPageTitle.scaleY = scaleTmp;

		ref_.aboutPageTitle.x = parseInt((DTSite.browser_width - parseInt(550* scaleTmp))/2);

		if (!DTSite.mobileSimple){
			ref_.aboutPageTitle.y = parseInt((DTSite.browser_height - parseInt(220* scaleTmp))/2);
		}else{
			ref_.aboutPageTitle.y = parseInt((80 - parseInt(220* scaleTmp))/2);
		}
	}else{

		var widthT = DTSite.browser_width - 50;

		var scaleTM = widthT/234;

		var heightT = parseInt(50 * scaleTM);

		if (heightT > 60){
			heightT = 60;

			scaleTM = heightT/50;

			widthT = parseInt(234 * scaleTM);
		}

		$("#aboutM").css("width", widthT)
		$("#aboutM").css("height", heightT)

		$("#aboutM").css("left", parseInt((DTSite.browser_width - widthT)/2))

		$("#aboutM").css("top", 90);

	}

	var fontSize = 20.5 * scaleTmp;

	var lineHeight = 30 * scaleTmp;

	var letterSpacing = 1.5 * scaleTmp;

	//letter-spacing: 1.5px;
	//line-height: 30px;

	if (!DTSite.mobileSimple){
		if (fontSize < 13){
			fontSize = 13;
		}
	}else{
		if (fontSize < 17){
			fontSize = 17;
		}
	}

	if (!DTSite.mobileSimple){
		if (lineHeight < 17){
			lineHeight = 17;
		}
	}else{
		lineHeight = 25;
	}

	var fontSize2 = 36 * scaleTmp;

	if (fontSize2 < 16){
		fontSize2 = 16;
	}

	if (!DTSite.mobileSimple){
		var topPos = 50 * scaleTmp;
	}else{
		var topPos = 70 * DTSite.scale;
	}

	var titleHeight = parseInt(130 * scaleTmp);

	var letterS = 6.8 * scaleTmp;

	$("#aboutT1").css("top", topPos);
	$("#aboutT2").css("top", topPos);

	$("#aboutName").css("fontSize", fontSize2);
	$("#aboutName").css("letterSpacing", letterS);

	$("#aboutT1").css("letterSpacing", letterSpacing);
	$("#aboutT2").css("letterSpacing", letterSpacing);

	$("#aboutT1").css("fontSize", fontSize);
	$("#aboutT2").css("fontSize", fontSize);

	$("#aboutT1").css("line-height", lineHeight + "px");
	$("#aboutT2").css("line-height", lineHeight + "px");


	//var distTitleContent = parseInt((DTSite.titleContinerH - parseInt(130* DTSite.scale))/2) + parseInt(180* DTSite.scale);

	var distTitleContent = parseInt(220* scaleTmp);

	//console.log("distTitleContent ",distTitleContent);

	//console.log(parseInt(((DTSite.browser_height - $("#aboutHolder").height() - topPos + 50) / 2) - distTitleContent));

	//console.log(DTSite.browser_width);

	if (DTSite.browser_width < 1150){

		if (!DTSite.mobileSimple){
			var widthTmp = parseInt(DTSite.browser_width - 200);

		}else{
			var widthTmp = parseInt((DTSite.browser_width * 90)/100);

			$("#aboutName").css("fontSize", fontSize2);
		}

		$("#aboutT1").css("textAlign", "center");
		$("#aboutT2").css("textAlign", "center");

		$("#aboutT1").css("paddingLeft", 0);
		$("#aboutT1").css("paddingRight", 0);
		$("#aboutT2").css("paddingLeft", 0);
		$("#aboutT2").css("paddingRight", 0);

		$("#aboutT1").css("width", "100%");
		$("#aboutT2").css("width", "100%");

		$("#aboutHolder").css("width", widthTmp);
	}else{
		$("#aboutHolder").css("width", 1000);

		$("#aboutT1").css("paddingLeft", 0);
		$("#aboutT1").css("paddingRight", 15);
		$("#aboutT2").css("paddingLeft", 15);
		$("#aboutT2").css("paddingRight", 0);

		$("#aboutT1").css("width", 485);
		$("#aboutT2").css("width", 485);

		$("#aboutT1").css("textAlign", "left");
		$("#aboutT2").css("textAlign", "left");
	}

	if (!DTSite.mobileSimple){
		ref_.aboutPageTitleIns.y = - ref_.aboutPageTitle.y + parseInt(((DTSite.browser_height - $("#aboutHolder").height() - topPos + 50) / 2)) - distTitleContent;
		$("#aboutHolder").css("top", parseInt((DTSite.browser_height - $("#aboutHolder").height() - topPos + 50) / 2));
	}else{


		$("#mobileContent").css("top", 160);
		$("#mobileContent").css("height", DTSite.browser_height - 160);


		//ref_.aboutPageTitleIns.y = 80;
		$("#aboutHolder").css("top", 0);
	}

	logoResize();
}

AboutPage.prototype.updateMcPos = function(){
	if (!DTSite.mobileSimple) return;

 	if (this.aboutPageTitle == null) return;

	if (this.aboutPageTitle.currentFrame >= 55){
		this.aboutPageTitle.gotoAndStop(55);
	}

	this.titleAnim.titlePosition = this.aboutPageTitle.currentFrame;
}


AboutPage.prototype.endPage = function(){

	if (DTSite.mobileSimple){

		if(DTSite.myScroll){
			DTSite.myScroll.destroy();
			DTSite.myScroll = null;
		}
	}

	TweenLite.killDelayedCallsTo(this.resize);

	if (!DTSite.mobileSimple){
		TweenLite.to(this.titleAnim, 0.5, {titlePosition:0,onUpdate:this.setMcPosition, onUpdateParams:[this], overwrite:"all"});
	}else{
		TweenLite.to("#aboutM", 0.5, {autoAlpha:0, overwrite:"all"});
	}

	//TweenLite.to(this.titleAnim, 0.5, {titlePosition:0,onUpdate:this.setMcPosition, onUpdateParams:[this], overwrite:"all"});

	TweenLite.to("#aboutHolder", 0.5, {autoAlpha:0, delay:0, ease:Expo.easeOut, onComplete:this.hideDivs, overwrite:"all"});

	if (!DTSite.mobileSimple){
		TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:70, delay:0, ease:Expo.easeInOut, overwrite:"all"});
	}/*else{
		TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:40, delay:0, ease:Expo.easeInOut, overwrite:"all"});
	}*/
}

AboutPage.prototype.hideDivs = function(){
	if (!DTSite.mobileSimple) {
		if (DTSite.titlesContainerIns.contains(this.aboutPageTitle)) DTSite.titlesContainerIns.removeChild(this.aboutPageTitle);
	}

	this.aboutPageTitle = null;
	delete this.aboutPageTitle;

	$("#aboutHolder").css("display","none");

}

AboutPage.prototype.setMcPosition = function(ref){
	ref.aboutPageTitle.gotoAndStop(ref.titleAnim.titlePosition);
	DTSite.updateTitleStage = true;
};var AssetsLoader = new function () {

	this.loaderPictures = new createjs.LoadQueue(false, "");

	this.wwwAssets = [];
	
	this.stageItems = [];

	this.eventItems = [];

	that = this;

	this.loadPhotoStage = function(){
		//console.log(DTSite.adressTmp);

		//$.getJSON('http://brightmedia.pl/clients/dteam_dev/cms/ajax/stage')

		$.getJSON(DTSite.adressTmp+DTSite.stageJSON)
			.done(function( json ) {
				that.stageItems = [];

				$.each( json.data, function( key, val ) {
					
					var z = 0;
					var il = val.pictures.length;

					var projectObj = new Object();
				
					projectObj.title = val.name.toUpperCase();
					projectObj.title2 = val.name2.toUpperCase();
					projectObj.type = val.type;
					projectObj.client = val.client.toUpperCase();
					projectObj.desc = val.desc;
					projectObj.uri = val.uri;
					projectObj.pictures = [];
					projectObj.video = val.video;

					var key;

					for (var key in val.pictures) {

						var obj = new Object();

						if (DTSite.mobileSimple){
							obj.src = DTSite.adressTmp+"data/images/m_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
						}else{
							if (DTSite.browser_width > 1900){
								obj.src = DTSite.adressTmp+"data/images/c_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
							}else{
								obj.src = DTSite.adressTmp+"data/images/b_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
							}
						}

						//console.log(obj.src);

						projectObj.pictures.push(obj);

					 //console.log(val.pictures[key][Object.keys(val.pictures[key])[0]]); // 81.25
					}

					/*for (key in val.pictures) {
					    if (a.hasOwnProperty(key)  &&        // These are explained
					        /^0$|^[1-9]\d*$/.test(key) &&    // and then hidden
					        key <= 4294967294                // away below
					        ) {
					        console.log(a[key]);
					    }
					}

					for (z;z<il;z++){
						var obj = new Object();
						obj.srcM = DTSite.adressTmp+val.pictures[z].src;
						obj.src = DTSite.adressTmp+val.pictures[z].src;

						projectObj.pictures.push(obj);
					}*/

					// console.log(projectObj);

					that.stageItems.push(projectObj);
				});

				that.loadPhotoEvent();
			})
			
			.fail(function( jqxhr, textStatus, error ) {
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
		});
	}

	this.loadPhotoEvent = function(){
		//console.log(DTSite.adressTmp);
		
		$.getJSON(DTSite.adressTmp+DTSite.eventsJSON)
			.done(function( json ) {
				
				that.eventItems = [];

				$.each( json.data, function( key, val ) {
					
					var z = 0;
					var il = val.pictures.length;

					var projectObj = new Object();
					projectObj.title = val.name.toUpperCase();
					projectObj.title2 = val.name2.toUpperCase();
					projectObj.type = val.type;
					projectObj.client = val.client.toUpperCase();
					projectObj.desc = val.desc;
					projectObj.uri = val.uri;
					projectObj.pictures = [];
					projectObj.video = val.video;
					
					/*for (z;z<il;z++){
						var obj = new Object();
						obj.srcM = DTSite.adressTmp+val.pictures[z].src;
						obj.src = DTSite.adressTmp+val.pictures[z].src;

						projectObj.pictures.push(obj);
					}*/

					var key;

					for (var key in val.pictures) {

						var obj = new Object();

						if (DTSite.mobileSimple){
							obj.src = DTSite.adressTmp+"data/images/m_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
						}else{
							if (DTSite.browser_width > 1900){
								obj.src = DTSite.adressTmp+"data/images/c_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
							}else{
								obj.src = DTSite.adressTmp+"data/images/b_"+val.pictures[key][Object.keys(val.pictures[key])[0]];
							}
						}

						//console.log(obj.src);

						projectObj.pictures.push(obj);

					 //console.log(val.pictures[key][Object.keys(val.pictures[key])[0]]); // 81.25
					}

					that.eventItems.push(projectObj);
				});

				that.loadAudioPhoto();

			})
			
			.fail(function( jqxhr, textStatus, error ) {
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
		});
	}

	this.loadWWW = function(){
		that.loaderWWW = new createjs.LoadQueue(false, "");

		that.loaderWWW.on("complete", that.handleAllAudioComplete, that);

		if (DTSite.mobileVersion == false && DTSite.mobileSimple == false) that.loaderWWW.on("fileload", that.handleAllAudioFileLoad, that);

		that.loaderWWW.on("progress", that.handleAllAudioProgress, that);

		that.loadPhotoStage();
	}

	this.loadAudioPhoto = function(){

		that.chapterSound = [];
		that.wwwAssets = [];
	
		if (DTSite.mobileVersion == false && DTSite.mobileSimple == false){
			that.assetsArr = [
				{src:DTSite.adressTmp+"assets/dt4.ogg", id:"dtM"}
			];
		}else{
			that.assetsArr = [];
		}


		var z = 0;
		var il = that.stageItems.length;

		for (z;z<il;z++){
			that.assetsArr.push({src:that.stageItems[z].pictures[0].src, id:z+"photo_stage"});

			if (DTSite.mobileSimple) break;
		}

		var z1 = 0;
		var il2 = that.eventItems.length;

		for (z1;z1<il2;z1++){
			that.assetsArr.push({src:this.eventItems[z1].pictures[0].src, id:z1+"photo_events"});

			if (DTSite.mobileSimple) break;
		}

		if (DTSite.mobileSimple == false && DTSite.webGLReady == false){
			var z2 = 0;
			var il3 = 7;

			for (z2;z2<il3;z2++){
				that.assetsArr.push({src:DTSite.adressTmp+"assets/bgB"+z2+".jpg", id:z2+"photo_bg"});
			}
		}

		
		DTSite.progressSoundLoading = 0;
	
		//var loadSound = createjs.Sound.initializeDefaultPlugins();

		if (DTSite.mobileVersion == false && DTSite.mobileSimple == false){
			
			createjs.Sound.alternateExtensions = ["mp3"];	// add other extensions to try loading if the src file extension is not supported
			
			that.loaderWWW.installPlugin(createjs.Sound);
			
            that.loaderWWW.loadManifest(this.assetsArr);
	
			//return true;
		}else {


			that.loaderWWW.loadManifest(that.assetsArr);

			//DTSite.startSite();

			//return true;	
		}
	}

	this.handleAllAudioFileLoad = function(event) {
		that.wwwAssets.push(event);
	}
	
	this.handleAllAudioProgress = function(event) {
		//alert("event.progress",event.progress);

		DTSite.progressShow(event.progress);
	}

	this.handleAllAudioComplete = function(event) {
		var i = 0;
		var len = that.wwwAssets.length;
		
		DTSite.startSite();

		for(i;i<len;i++) {
			var item = that.wwwAssets[i]; //loader.getResult(id);
			var id = item.item.id;
			var src = item.item.src;
			var result = item.result;
			
			switch (id) {
				case "dtM":
					DTSite.dtMusic = createjs.Sound.play("dtM", {loop:-1, volume:0});

					MainNavi.startMusicIco();
				break;
				case "dtRoll":
					DTSite.dtRoll = createjs.Sound.createInstance("dtRoll");
				break;
			}
		}
	}

	this.handleComplete = function(event) {

		if (DTSite.selectedMenu == 2 || DTSite.selectedMenu == 3){
			DTSite.openedPage.picturesLoaded();
		}
	}


	this.handleProgress = function(event) {
		DTSite.openedPage.progressShow(event.progress);
	}

	this.loadPictures = function(arrToLoad){
		this.loaderPictures.loadManifest(arrToLoad);
	}

	this.loaderPictures.on("complete", this.handleComplete, this);
	this.loaderPictures.on("progress", this.handleProgress, this);
};function BgDreamTeam(){

	if (DTSite.mobileSimple == false) {

		if(DTSite.webGLReady){

			this.clock = new THREE.Clock();

			this.ileR = 0;

			this.rotationBGY = (45) *Math.PI/180;
			this.rotationBGX = (-30) *Math.PI/180;
			this.posX = 0;
			this.posY = 0;

			this.rotationObjParam = new Object();
			this.rotationObjParam.param = 0.05;

			var halfWidth = window.innerWidth / 2;
			var halfHeight = window.innerHeight / 2;

			var width = window.innerWidth;
			var height = window.innerHeight;

			this.setUpHarmony();

			this.cameraNormal = new THREE.PerspectiveCamera( 50, width / height, 1, 10000 );;//OrthographicCamera( -halfWidth, halfWidth, halfHeight, -halfHeight, -10000, 10000 );
			this.cameraNormal.position.z = 3000;


			var materialColor1 = new THREE.MeshBasicMaterial( { ambient: 0x9cd2dc, color: 0x9cd2dc, specular: 0x9cd2dc, shininess:1, shading: THREE.FlatShading});
			
			var materialColor2 = new THREE.MeshBasicMaterial( { ambient: 0x8abdd2, color: 0x8abdd2, specular: 0x8abdd2, shininess:1, shading: THREE.FlatShading} );


			this.planeBG1 = new THREE.Mesh( new THREE.BoxGeometry( 3000, 3000 , 10), materialColor1 );
			this.planeBG1.position.z = 0;
			this.planeBG1.position.x = 0;
			this.planeBG1.position.y = 0;

			this.planeBG2 = new THREE.Mesh( new THREE.BoxGeometry( 3000, 3000, 10), materialColor2 );
			this.planeBG2.position.z = 0;
			this.planeBG2.position.x = 3000;
			this.planeBG2.position.y = 0;

			var cubeMaterials4 = [ 
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xffffff, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0xc9c9c9, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xc9c9c9, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0xc9c9c9, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0xc9c9c9, shading: THREE.NoShading})
			];


			var cubeMaterials1 = [ 
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x93c6cf, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x9cd2dc, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x9cd2dc, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x9cd2dc, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x9cd2dc, shading: THREE.NoShading})
			];


			var cubeMaterials2 = [ 
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x81b5ca, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x8abdd2, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x8abdd2, shading: THREE.NoShading}),
			    new THREE.MeshBasicMaterial({color:0x8abdd2, shading: THREE.NoShading}), 
			    new THREE.MeshBasicMaterial({color:0x8abdd2, shading: THREE.NoShading})
			];

			var materialColor4 = new THREE.MeshFaceMaterial(cubeMaterials4); 

			var materialColor1 = new THREE.MeshFaceMaterial(cubeMaterials1); 
			//materialColor1.side = THREE.DoubleSide;

			var materialColor2 = new THREE.MeshFaceMaterial(cubeMaterials2); 
			//materialColor2.side = THREE.DoubleSide;

			var materialColor3 = new THREE.MeshBasicMaterial( { ambient: 0xbebebe, color: 0xbebebe, specular: 0xbebebe, shininess:1, shading: THREE.NoShading} );
			//materialColor3.side = THREE.DoubleSide;



			//var materialColor4 = new THREE.MeshBasicMaterial( { ambient: 0xdddddd, color: 0xdddddd, specular: 0xdddddd, shininess:1, shading: THREE.FlatShading} );
			//materialColor4.side = THREE.DoubleSide;

			var geom1 = new THREE.BoxGeometry( 3000, 3000 , 30);
			var geom2 = new THREE.BoxGeometry( 3000, 3000 , 30);
			var geom4 = new THREE.BoxGeometry( 3000, 3000 , 30);

			//geom1.applyMatrix( new THREE.Matrix4().makeTranslation( new THREE.Vector3(0, 0, 1) ));
			//geom2.applyMatrix( new THREE.Matrix4().makeTranslation( new THREE.Vector3(0, 0, 1) ));
			//geom4.applyMatrix( new THREE.Matrix4().makeTranslation( new THREE.Vector3(0, 0, 1) ));

			this.planeBG2 = new THREE.Mesh( geom1, materialColor2 );
			this.planeBG2.frustumCulled = false;
			this.planeBG2.position.z = 600;
			this.planeBG2.rotation.z = 45 *Math.PI/180;
			this.planeBG2.position.x = 5000;
			this.planeBG2.position.y = 0;

			this.planeBG1 = new THREE.Mesh( geom2, materialColor1 );
			this.planeBG1.position.z = 600;
			this.planeBG1.rotation.z = 45 *Math.PI/180;
			this.planeBG1.position.x = -5000;
			this.planeBG1.position.y = 0;
			this.planeBG1.frustumCulled = false;

			/*this.planeBG3 = new THREE.Mesh( new THREE.BoxGeometry( 3000, 3000, 10), materialColor3 );
			this.planeBG3.position.z = 0;
			this.planeBG3.rotation.z = 0 *Math.PI/180;
			this.planeBG3.position.x = 1500;
			this.planeBG3.position.y = -2250;*/

			this.planeBG4 = new THREE.Mesh( geom4, materialColor4 );
			this.planeBG4.position.z = 1500;
			this.planeBG4.rotation.x = 90 *Math.PI/180;
			this.planeBG4.position.x = -3000;
			this.planeBG4.position.y = 15;
			this.planeBG4.frustumCulled = false;

			this.planeBG4.scale.y = 0.01;

			this.planeBG4.scale.z = 0.3;

			var z = 0;

			for ( var face in this.planeBG4.geometry.faces ) {
				this.planeBG4.geometry.faces[ face ].materialIndex = z;
				z += 1;
			}

			var z1 = 0;

			for ( var face in this.planeBG1.geometry.faces ) {
				this.planeBG1.geometry.faces[ face ].materialIndex = z1;
				z1 += 1;
			}

			var z2 = 0;

			for ( var face in this.planeBG2.geometry.faces ) {
				this.planeBG2.geometry.faces[ face ].materialIndex = z2;
				z2 += 1;
			}

			this.scenePlanes = new THREE.Scene(); 


			/*this.directionalLight = new THREE.DirectionalLight( 0xFFFFFF, 1);
			this.directionalLight.position.set( -600, 1600, -600 );
			//directionalLight.castShadow = true;
			this.directionalLight.shadowDarkness = 0;

			this.directionalLight.shadowMapWidth = 512;
			this.directionalLight.shadowMapHeight = 512;*/

			//this.directionalLight.shadowCameraNear = 500;
			//this.directionalLight.shadowCameraFar = 2050;

			//this.directionalLight.shadowCameraFov = 50;

			//directionalLight.shadowBias = -0.001;

			//directionalLight.shadowCameraVisible = true;

			//this.scenePlanes.add( this.directionalLight );

			this.light = new THREE.AmbientLight( 0xe8e8e8 ); // soft white light
			//this.scenePlanes.add(this.light );


			this.planesObj = new THREE.Object3D();

			//this.planesObj.rotation.z = 58 *Math.PI/180;

			this.planesObj.add(this.planeBG1 );
			this.planesObj.add(this.planeBG2 );
			//this.planesObj.add(this.planeBG3 );
			this.planesObj.add(this.planeBG4 );

			//this.planesObj.position.y = -50;
			//this.planesObj.position.x = -100;

			this.scenePlanes.add(this.planesObj);

			this.renderPlane = new THREE.RenderPass( this.scenePlanes, this.cameraNormal);
			//this.renderPlane.setClearColor(0xdddddd, 0);

			this.renderH.clear = false;

			this.renderPlane.clear = true;

			this.renderPlane.renderToScreen = false;
			this.renderH.renderToScreen = false;

			this.effectCopy = new THREE.ShaderPass(THREE.CopyShader);

		    this.effectCopy.renderToScreen = true;


			this.renderer = new THREE.WebGLRenderer( { antialias: false, canvas:DTSite.threeContainer, preserveDrawingBuffer:false, alpha: false } );
		    this.renderer.setClearColor(0xbebebe, 1.0);
		    this.renderer.autoClear = false;

		    //this.renderer.shadowMapCullFace = THREE.CullFaceBack;
		    //this.renderer.shadowMapType = THREE.PCFSoftShadowMap;

		    this.renderer.setSize(window.innerWidth, window.innerHeight);
		    this.renderer.shadowMapEnabled = true;

			//DTSite.bgContainer.appendChild( this.renderer.domElement );

			this.composer = new THREE.EffectComposer(this.renderer);
		    this.composer.renderTarget1.stencilBuffer = true;
		   	this.composer.renderTarget2.stencilBuffer = true;

		    //composer.addPass(renderBackground);
		   	this.composer.addPass(this.renderPlane);
		   	this.composer.addPass(this.renderH);
		    //this.composer.addPass(this.effectCopy);



		    //var hblur = new THREE.ShaderPass( THREE.HorizontalBlurShader );

			//this.composer.addPass( hblur );

			//var vblur = new THREE.ShaderPass( THREE.VerticalBlurShader );
			// set this shader pass to render to screen so we can see the effects
			//vblur.renderToScreen = true;

			//hblur.uniforms[ 'h' ].value = 0.01 / ( DTSite.browser_width / 2 );
			//vblur.uniforms[ 'v' ].value = 0.01 / ( DTSite.browser_height / 2 );

			/*var bokehPass = new THREE.BokehPass( this.scene, this.camera, {
							focus: 		1.0,
							aperture:	0.025,
							maxblur:	1.0,

							width: DTSite.browser_width,
							height: DTSite.browser_height
						} );*/

			//this.composer.addPass( hblur );
			//this.composer.addPass( vblur );
			this.composer.addPass(this.effectCopy);

		    this.posXT = 0;
		    this.posYT = 0;

		    this.cubePlane;

		    $(window).bind( "keydown", {  foo: this}, this.checkKey );

			$(window).bind( "keyup", {  foo: this}, this.checkKeyC );

			this.upC = false;
			this.downC = false;
			this.leftC = false;

			this.rightC = false;

			this.shiftC = false;

			this.ctrlC = false;


			this.harmonyRenderIt = true;

			/*var gui = new dat.GUI();
  	gui.add(this.camera.position, 'x', -1000, 1000);
  	gui.add(this.camera.position, 'y', -1000, 1000);
  	gui.add(this.camera.position, 'z', -1000, 1000);

  	gui.add(this.cubeLookAt.position, 'x', -500, 500);
  	gui.add(this.cubeLookAt.position, 'y', -500, 500);
  	gui.add(this.cubeLookAt.position, 'z', -500, 500);*/

		}else{
			$("#threeCanvas").css("display", "none");

			var htmlAdd = '<div id="bgB0" class="bgM"></div><div id="bgB1" class="bgM"></div><div id="bgB2" class="bgM"></div><div id="bgB3" class="bgM"></div><div id="bgB4" class="bgM"></div><div id="bgB5" class="bgM"></div><div id="bgB6" class="bgM"></div>';


			$("#bgThree").html(htmlAdd);

		}

	}
}

BgDreamTeam.prototype.countElements = function(points_){

	var counter = 0;
	
	var distance = 0;

	var positionCount = 0;

	var distancePoints = [];

	var distP = 4;

	/*if (DTSite.mobileVersion){
		distP = 3;
	}*/

	while(counter<1){

		if (positionCount != 0){
			var distance = positionCount.distanceTo( points_.getPointAt(counter) );

			if (distance > distP){
				positionCount = points_.getPointAt(counter);

				var objPos = new Object();
				objPos.counter = counter;
				objPos.position = positionCount;

				distancePoints.push(objPos);
			}
		}

		if (positionCount == 0){
			positionCount = points_.getPointAt(counter);
		}

		counter += 0.001;

		//distP += 0.001;
	}

	return distancePoints;
}

/*BgDreamTeam.prototype.createDots = function(){
	this.dots1 = new THREE.Object3D();
	this.dots2 = new THREE.Object3D();
	this.dots3 = new THREE.Object3D();


	var circle = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, shininess: 0.0, shading: THREE.FlatShading}  );
	circle.side = THREE.DoubleSide;

	var h = 0;
	var ile = 20;

	for (h;h<ile;h++){

		var objH = new THREE.Object3D();

		var object = new THREE.Mesh( new THREE.CircleGeometry( 0.3, 10, 0, Math.PI * 2 ), circle );
		object.position.set( 20, 0, 0 );
		
		objH.add( object );

		objH.rotation.z = (h*2) * (Math.PI / 180);

		this.dots1.add( objH );
	}

	this.scene.add(this.dots1);
}*/

BgDreamTeam.prototype.createObjects = function(objectsArr){
	var h = 0;
	var count = objectsArr.length;

	//this.createDots();

	this.harmonyObj = new THREE.Object3D();

	var materials = [];

	var cTmp = new THREE.BoxGeometry(4, 4, 4);

	var geometry = new THREE.PlaneGeometry(7, 130,0,0);

	var cubeM = new THREE.MeshBasicMaterial( { color: 0xFF0000, shininess: 0.0, shading: THREE.FlatShading}  );
	//var materialPlane2 = new THREE.MeshPhongMaterial( { ambient: 0xf6f6f6, color: 0xf6f6f6, transparent: false, opacity: 1, specular: 0xf6f6f6, shininess: 10, shading: THREE.SmoothShading  }  );

	this.cubeLookAt = new THREE.Mesh( cTmp, cubeM );
	this.cubeLookAt.visible = false;
	this.cubeLookAt.position.x = -350;
	this.cubeLookAt.position.y = 0;
	this.cubeLookAt.position.z = 0;


	//var materialPlane2 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, shininess: 0.0, transparent: true, opacity: 0.65, shading: THREE.FlatShading}  );

	//var materialPlane2 = new THREE.MeshBasicMaterial( { color: 0xf6f6f6, transparent: true, opacity: 0.0, shading: THREE.FlatShading}  );

	//materialPlane2.side = THREE.FrontSide;
 
	//var materialPlane1 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, shininess: 0.0, transparent: true, opacity: 0.65, shading: THREE.FlatShading}  );

	if (!DTSite.mobileVersion){
		var materialPlane1 = new THREE.MeshBasicMaterial( { color: 0xeaeaea, shininess: 0.0, transparent: true, opacity: 0.0, shading: THREE.FlatShading}  );
		var materialPlane2 = new THREE.MeshBasicMaterial( { color: 0xeaeaea, shininess: 0.0, transparent: true, opacity: 0.0, shading: THREE.FlatShading}  );
	}else{
		var materialPlane1 = new THREE.MeshBasicMaterial( { color: 0xeaeaea, shininess: 0.0, transparent: false, opacity: 1, shading: THREE.FlatShading}  );
	}

	if (!DTSite.mobileVersion){
		materialPlane2.side = THREE.BackSide;
		materialPlane1.side = THREE.FrontSide;
	}else{
		materialPlane1.side = THREE.DoubleSide;
	}

	var geometry2 = new THREE.PlaneGeometry(1000, 10, count, 0);

	this.cubePlane= new THREE.Mesh( geometry2, materialPlane1 );
	this.cubePlane.castShadow = true;
	this.cubePlane.receiveShadow = true;

	this.cubePlane.frustumCulled = false;

	this.cubePlane.geometry.computeFaceNormals();
	this.cubePlane.geometry.computeVertexNormals();

	//this.cubePlane.position.z = 50;

	if (!DTSite.mobileVersion){

		this.cubePlane2= new THREE.Mesh( geometry2, materialPlane2 );
		this.cubePlane2.castShadow = true;
		this.cubePlane2.receiveShadow = true;

		this.cubePlane2.frustumCulled = true;

		//this.cubePlane2.geometry.computeFaceNormals();
		//this.cubePlane2.geometry.computeVertexNormals();
	}

	//this.cubePlane2.position.z = 50;

	var materialPlane = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, shading: THREE.NoShading}  );
	materialPlane.visible = false;

	for (h;h<count;h++){

		var pivot = new THREE.Object3D();
		pivot.frustumCulled = false;

		var cube = new THREE.Mesh( geometry, materialPlane );
		cube.castShadow = false;
		cube.receiveShadow = false;
		cube.visible = false;
		cube.frustumCulled = false;

		pivot.position.x = objectsArr[h].position.x;
		pivot.position.y = objectsArr[h].position.y;
		pivot.position.z = objectsArr[h].position.z;

		this.tangent = this.points.getTangentAt( objectsArr[h].counter ).normalize();
	    this.axis.crossVectors( this.up, this.tangent );//.normalize();
	    radians = Math.acos( this.up.dot( this.tangent ) );
	   	pivot.quaternion.setFromAxisAngle( this.axis, radians );

		pivot.scale.x = 1;
		pivot.scale.y = 1;
		pivot.scale.z = 1;

		var pivot2 = new THREE.Object3D();
		pivot2.frustumCulled = false;

		pivot2.rotation.z = h * 0.048

		pivot2.add( cube );

		pivot.add( pivot2 );


		if (h%2 == 0){
			cube.rotation.y = -30 * Math.PI/180;
		}else{
			cube.rotation.y = 30 * Math.PI/180;
		}

		cube.scale.y = 0;

		this.cubesF.push(cube);
		this.pivots.push(pivot2);
		this.cubes.push(pivot);

		this.harmonyObj.add( pivot );

	}

	//h = 0;

	/*for (h;h<count;h++){

		TweenLite.to(this.cubes[h].position, 2, {x:objectsArr[h].position.x + this.lineF.position.x, y:objectsArr[h].position.y + this.lineF.position.y, z:objectsArr[h].position.z + this.lineF.position.z, delay:(h*0.005) + 2, ease:Power3.easeOut});

	}*/

	this.changePivot = new THREE.Object3D();

	this.changePivot.position.x = 500;

	this.cubePlane.position.x = -500;
	//this.cubePlane2.position.x = -500;

	this.changePivot.position.z = 500;

	this.cubePlane.position.z = -500;
	//this.cubePlane2.position.z = -500;

	if (!DTSite.mobileVersion) {
		this.cubePlane2.position.x = -500;
		this.cubePlane2.position.z = -500;

		this.changePivot.add(this.cubePlane2);
	}
	this.changePivot.add(this.cubePlane);

	this.scene.add(this.cubeLookAt);

	this.scene.add(this.changePivot);

	this.scene.add(this.harmonyObj);
}

BgDreamTeam.prototype.connectVertex = function(){
	var h = 0;

	var count = this.cubesCount;

 	var pos = 0;

	for (h;h<count;h++){
		if (h%2 == 0){

			var cube = this.cubesF[h];

			var vector2 = cube.geometry.vertices[1].clone();
			var vector2_ = cube.localToWorld(vector2);

			var vector4 = cube.geometry.vertices[3].clone();
			var vector4_ = cube.localToWorld(vector4);


			if (h != count - 1){
				var cube = this.cubesF[h + 1];

				var vector1 = cube.geometry.vertices[0].clone();
				var vector1_ = cube.localToWorld(vector1);

				var vector3 = cube.geometry.vertices[2].clone();
				var vector3_ = cube.localToWorld(vector3);
			}else{
				var cube = this.cubesF[h];

				var vector1 = cube.geometry.vertices[1].clone();
				var vector1_ = cube.localToWorld(vector1);

				var vector3 = cube.geometry.vertices[3].clone();
				var vector3_ = cube.localToWorld(vector3);
			}

			this.cubePlane.geometry.vertices[0 + pos *2] = vector2_;
			this.cubePlane.geometry.vertices[1 + pos *2] = vector1_;


			this.cubePlane.geometry.vertices[1 + pos *2 + count] = vector4_;
			this.cubePlane.geometry.vertices[2 + pos *2 + count] = vector3_;

			if (!DTSite.mobileVersion) {
				this.cubePlane2.geometry.vertices[0 + pos *2] = vector2_;
				this.cubePlane2.geometry.vertices[1 + pos *2] = vector1_;


				this.cubePlane2.geometry.vertices[1 + pos *2 + count] = vector4_;
				this.cubePlane2.geometry.vertices[2 + pos *2 + count] = vector3_;
			}

			pos+=1;
		}
	}

	//this.cubePlane2.geometry.normalsNeedUpdate  = true;
	//this.cubePlane2.geometry.normalsNeedUpdate = true;
	//this.cubePlane.geometry.normalsNeedUpdate  = true;

	//this.cubePlane2.geometry.verticesNeedUpdate = true;

	if (!DTSite.mobileVersion) this.cubePlane2.geometry.verticesNeedUpdate = true;
	
	this.cubePlane.geometry.verticesNeedUpdate = true;

	//this.cubePlane.geometry.computeFaceNormals();
	//this.cubePlane.geometry.computeVertexNormals();

	//this.cubePlane2.geometry.computeFaceNormals();
	//this.cubePlane2.geometry.computeVertexNormals();
}

BgDreamTeam.prototype.startBG = function (){

	if (DTSite.mobileSimple == false && DTSite.webGLReady == true){

		if (DTSite.selectedMenu != 0) {
			TweenLite.to(this.planeBG4.position, 1.5, {x:0, z:0, y:-500, ease:Expo.easeInOut, delay:0.7});

			TweenLite.to(this.planeBG4.scale, 1.5, {y:1, z:3, x:1, ease:Expo.easeInOut, delay:0.7});

			//TweenLite.to(this.planeBG4.rotation, 2, {z:45 *Math.PI/180, x:0, y:0, ease:Expo.easeInOut, delay:0.7});

			if (DTSite.selectedMenu == 4){

				TweenLite.to(this.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});

				TweenLite.to(this.planeBG1.position, 0, {x:-4050, z:1000, y:15, delay:0});
				TweenLite.to(this.planeBG2.position, 0, {x:4050, z:1000, y:15, delay:0});
			}else{

				if (DTSite.selectedMenu == 1){
					TweenLite.to(this.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});
				}else{
					TweenLite.to(this.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});
				}

				TweenLite.to(this.planeBG1.position, 0, {x:0, y:4000, z:1000, delay:0});
				TweenLite.to(this.planeBG2.position, 0, {x:0, y:-4000, z:1000, delay:0});
			}

			TweenLite.to(this.planeBG1.position, 2.5, {z:1500, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG2.position, 2.5, {z:1500, ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG4.scale, 2, {x:3, y:3, z:3, ease:Expo.easeInOut, delay:2});

			TweenLite.to(this.planesObj.rotation, 1.5, {z:-90*Math.PI/180, ease:Expo.easeInOut, delay:1.5});

			TweenLite.to(this.planesObj.rotation, 2.5, {z:8*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:2});
			//TweenLite.to(this.planesObj.position, 2.5, {y:0, ease:Expo.easeInOut, delay:2});

			TweenLite.to(this.planeBG4.rotation, 1.5, {z:(-90 + 45) *Math.PI/180, x:0, y:0, ease:Expo.easeInOut, delay:1.5});

			//DTSite.bg.changeBg();

			this.cubePlane.material.opacity = 0.85;

			if (this.cubePlane2) this.cubePlane2.material.opacity = 0.85;

			return;
		}

		TweenLite.to(this.rotationObjParam, 10, {param:0.1, ease:Expo.easeInOut, delay:0});

		//TweenLite.to(this.planeBG4.scale, 1, {z:0, delay:.0, ease:Expo.easeOut});

		TweenLite.to(this.planeBG4.position, 1.5, {x:0, z:0, y:500, ease:Expo.easeInOut, delay:0.7});

		TweenLite.to(this.planeBG4.scale, 1.5, {y:1, z:3, x:1, ease:Expo.easeInOut, delay:0.7});

		//TweenLite.to(this.planeBG4.rotation, 2, {z:45 *Math.PI/180, x:0, y:0, ease:Expo.easeInOut, delay:0.7});


		TweenLite.to(this.planeBG4.scale, 3, {x:3, y:3, z:3, ease:Expo.easeInOut, delay:2});

		TweenLite.to(this.planesObj.rotation, 1.5, {z:-90*Math.PI/180, ease:Expo.easeInOut, delay:1.5});

		TweenLite.to(this.planesObj.rotation, 2.5, {z:8*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:3});
		TweenLite.to(this.planesObj.position, 2.5, {y:-150, ease:Expo.easeInOut, delay:3});

		TweenLite.to(this.planeBG4.rotation, 1.5, {z:(-90 + 45) *Math.PI/180, x:0, y:0, ease:Expo.easeInOut, delay:1.5});
		


		TweenLite.to(this.planeBG1.rotation, 0, {x:90 *Math.PI/180, ease:Expo.easeInOut, delay:0});
		TweenLite.to(this.planeBG2.rotation, 0, {x:90 *Math.PI/180, ease:Expo.easeInOut, delay:0});


		TweenLite.to(this.planeBG1.rotation, 3, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1});
		TweenLite.to(this.planeBG2.rotation, 3, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1});


		TweenLite.to(this.planeBG1.position, 0, {x:-4050, z:1000, y:15, delay:0});
		TweenLite.to(this.planeBG1.position, 3, {z:1000, x:-2121 -100, ease:Expo.easeInOut, delay:0.5});

		TweenLite.to(this.planeBG2.position, 0, {x:4050, z:1000, y:15, delay:0});
		TweenLite.to(this.planeBG2.position, 3, {z:1000, x:2121 -100, ease:Expo.easeInOut, delay:0.5});


		TweenLite.to(this.planeBG4.position, 2, {x:900, y:2400, z:-2000, ease:Expo.easeInOut, delay:3.5});


		TweenLite.to(this.planeBG1.position, 2.5, {z:1500, x:-2121 - 200, y:- 200, ease:Expo.easeInOut, delay:4});

		TweenLite.to(this.planeBG2.position, 2.5, {z:1500, x:2121 - 2121 - 200, y:-2121 - 200, ease:Expo.easeInOut, delay:4});


		var count = this.pivotsCount;

		var h = 0;

		var that = this;


		TweenLite.to(this.cubeLookAt.position,0,{x:250, z:50, y:0, overwrite:"all"});

		TweenLite.to(this.camera.position,0,{x:-380, z:-200, delay:0, delay:0, overwrite:"all"});

		TweenLite.to(this.camera.position,10,{x:-175, z:100, y:20, ease:Expo.easeOut, delay:1.5+ 1.5, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		TweenLite.to(this.camera.position,10,{z:220, delay:3+ 1.5, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});


		TweenLite.to(this.cubeLookAt.position,12,{x:250, z:120, ease:Expo.easeOut, delay:1.5+ 1.5});

		that.camera.lookAt(that.cubeLookAt.position);

		//this.camera.lookAt(this.cubeLookAt)

		for (h;h<count;h++){

			TweenLite.to(this.cubesF[h].scale, 0, {y:0, delay:0});

			TweenLite.to(this.cubesF[h].scale, 1.0, {y:1, delay:(0.019*h) + 1.7+ 1.5, ease:Back.easeOut});

			//console.lpivots[h].get
		}

		this.cubePlane.material.opacity = 0.85;

		if (this.cubePlane2) this.cubePlane2.material.opacity = 0.85;
	}else{

		var where = DTSite.selectedMenu;

		if (DTSite.mobileSimple){
			if (where == 0){

				TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg0", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}
		}else{

			if (where == 0){

				TweenLite.to("#bgB0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB1", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB2", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB3", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB4", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB5", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
				TweenLite.to("#bgB6", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});

				TweenLite.to("#bgB0", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}

		}/*else if(where == 1){
			TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});

			TweenLite.to("#bg1", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 3){
			TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});

			TweenLite.to("#bg3", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 2){
			
			TweenLite.to("#bg2", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 4){
			TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});

			TweenLite.to("#bg4", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 5){
			
			TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});

			TweenLite.to("#bg2", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 6){
			
			TweenLite.to("#bg0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg1", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg2", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg3", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});
			TweenLite.to("#bg4", 0.3, {autoAlpha:0, y:40, ease:Expo.easeOut, delay:0});

			TweenLite.to("#bg3", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}*/
	}
}

BgDreamTeam.prototype.setUpHarmony = function (){

	this.axis = new THREE.Vector3();
	this.up = new THREE.Vector3(0, 0, 1);
	this.zz = new THREE.Vector3( 0, 1, 0 );

	this.tangent = new THREE.Vector3();

	this.elementsArray = [];

	this.counterR = 0;

	var width = window.innerWidth;
	var height = window.innerHeight;

	this.camera = new THREE.PerspectiveCamera( 55, width / height, 10, 10000 );

	/*this.controls = new THREE.OrbitControls(this.camera);
	this.controls.center.set( 0, 0, 0 );
	this.controls.userPanSpeed = 100;*/


	//this.camera.position.set( 154, 36, 209 );

	this.camera.position.set( 0, 0, 500 );

	//this.camera.rotation.set( -5 * Math.PI/180, -10 * Math.PI/180, 0 * Math.PI/180);

	this.scene = new THREE.Scene();

	this.directionalLightH = new THREE.DirectionalLight( 0xFFFFFF, 0);
	this.directionalLightH.position.set( 0, 1600, -600 );
	this.directionalLightH.castShadow = true;
	this.directionalLightH.shadowDarkness = 0.06;

	this.directionalLightH.shadowBias = 0;

	if (!DTSite.mobileVersion){
		this.directionalLightH.shadowMapWidth = 512;
		this.directionalLightH.shadowMapHeight = 512;
	}else{
		this.directionalLightH.shadowMapWidth = 256;
		this.directionalLightH.shadowMapHeight = 256;
	}

	this.directionalLightH.shadowCameraNear = 500;
	this.directionalLightH.shadowCameraFar = 2050;

	this.directionalLightH.shadowCameraFov = 55;


	this.scene.add( this.directionalLightH );

	this.scene.fog = new THREE.Fog( 0xc9c9c9, 250, 550 );

	//var axisHelper = new THREE.AxisHelper( 5 );
	//this.scene.add( axisHelper );


	var light = new THREE.AmbientLight( 0xf9f9f9 ); // soft white light
	this.scene.add( light );

	this.cubes = [];

	this.cubesF = [];
	this.cubesB = [];

	this.pivots = [];

	var h = 0;

	this.closedCube = true;

	// LINIA WYGINANIE //

	//var geometryLine = new THREE.Geometry();

	/*this.points = new THREE.SplineCurve3([
			new THREE.Vector3(-400, 190, 0),
			new THREE.Vector3(-150, 20, 0),
			new THREE.Vector3(40, 0, 0),
			new THREE.Vector3(130, 0, 80),
			new THREE.Vector3(100, 0, 160),
			new THREE.Vector3(50, 0, 250)]);

	new THREE.Vector3(-300, 290, 0), 
	new THREE.Vector3(-150, 20, 0), 
	new THREE.Vector3(40, 0, 0),
	new THREE.Vector3(100, 0, 30),
	new THREE.Vector3(130, 0, 80),
	new THREE.Vector3(100, -10, 160),
	new THREE.Vector3(50, 0, 200),
	new THREE.Vector3(50, 100, 250),
	new THREE.Vector3(150, 0, 350)*/

	/*this.points = new THREE.SplineCurve3([ 
	new THREE.Vector3(-50, 0, 0),
			new THREE.Vector3(100, 0, 30),
	new THREE.Vector3(130, 0, 80),
	new THREE.Vector3(100, -10, 160),
	new THREE.Vector3(50, 0, 200),
	new THREE.Vector3(50, 50, 250),
	new THREE.Vector3(150, 0, 350)]);*/

	/*this.points = new THREE.SplineCurve3([ 
	new THREE.Vector3(-50, 0, 0),
			new THREE.Vector3(100, 0, 30),
	new THREE.Vector3(130, 0, 80),
	new THREE.Vector3(100, -50, 160),
	new THREE.Vector3(50, 0, 200),
	new THREE.Vector3(50, 50, 250),
	new THREE.Vector3(150, 0, 350)]);*/

	this.points = new THREE.SplineCurve3([ 
	new THREE.Vector3(-300, 0, 0), 
	new THREE.Vector3(-150, 0, 0),
	new THREE.Vector3(-50, 0, 0), 
	new THREE.Vector3(40, 0, 0),
	new THREE.Vector3(100, 0, 30),
	new THREE.Vector3(130, 0, 80),
	new THREE.Vector3(100, -10, 160),
	new THREE.Vector3(50, 0, 200),
	new THREE.Vector3(75, 50, 250),
	new THREE.Vector3(150, 0, 350)]);

	//geometryLine.vertices = this.points.getSpacedPoints(4);

	//this.materialLine = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.1, linewidth: 1} );

	//this.lineF = new THREE.Line( geometryLine, this.materialLine);
	//this.lineF.scale.x = this.lineF.scale.y = this.lineF.scale.z =  1;

	//console.log(geometryLine.vertices);

	//this.lineF.position.x = 0;
	//this.lineF.position.y = 0;
	//this.lineF.position.z = 0;

	this.elementsArray = this.countElements(this.points);

	//console.log(this.elementsArray);

	this.createObjects(this.elementsArray);

	//this.harmonyObj.add( this.lineF )

	this.connectVertex();

	this.renderH = new THREE.RenderPass( this.scene, this.camera);

	//this.renderH.shadowMapCullFace = THREE.CullFaceNone;

	// RENDERER
	//this.renderH.setClearColor( 0xdddddd, 0 );

	//this.renderH.gammaInput = true;
	//this.renderH.gammaOutput = true;

	//this.renderH.shadowMapEnabled = true;

	this.cubesCount = this.cubes.length;
	this.pivotsCount = this.pivots.length;

	//this.connectVertex();
}


BgDreamTeam.prototype.update = function(){


	/*if (this.shiftC){

		//console.log("steering cubelook");

		if (this.ctrlC){

			//console.log("left right back forward");

			if(this.upC){

				this.cubeLookAt.position.z += 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}

			if(this.downC){
				this.cubeLookAt.position.z -= 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}

			if(this.rightC){
				this.cubeLookAt.position.x += 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}

			if(this.leftC){
				this.cubeLookAt.position.x -= 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}
		}else{

			//console.log("up down");

			if(this.upC){

				this.cubeLookAt.position.y += 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}

			if(this.downC){
				this.cubeLookAt.position.y -= 1;
				//this.cubeLookAt.updateProjectionMatrix();
			}
		}
	}else{
		if(this.ctrlC){
			if(this.upC){

				this.camera.position.z += 1;
				this.camera.updateProjectionMatrix();
			}

			if(this.downC){
				this.camera.position.z -= 1;
				this.camera.updateProjectionMatrix();
			}

			if(this.rightC){
				this.camera.position.x += 1;
				this.camera.updateProjectionMatrix();
			}

			if(this.leftC){
				this.camera.position.x -= 1;
				this.camera.updateProjectionMatrix();
			}
		}else{
			if(this.upC){

				this.camera.position.y += 1;
				this.camera.updateProjectionMatrix();
			}

			if(this.downC){
				this.camera.position.y -= 1;
				this.camera.updateProjectionMatrix();
			}
		}
	}*/

	/*if (this.dots1){
		this.dots1.lookAt(this.camera.position);
	}*/

	this.camera.lookAt(this.cubeLookAt.position);

	//this.connectVertex();

	//console.log(this.harmonyRenderIt);

	if (this.harmonyRenderIt){

		//if (DTSite.counterRender % 2 == 0){
			this.connectVertex();

			var h = 0;

			var count = this.pivotsCount;

			for (h;h<count;h++){

				//if (DTSite.selectedMenu != 4){
					this.pivots[h].rotation.z = h * this.rotationObjParam.param + this.counterR;
				/*}else{
					this.pivots[h].rotation.z = h * this.rotationObjParam.param + this.counterR;
				}*/

				//console.lpivots[h].get
			}

			this.counterR += 0.0004	;
		//}
	}

	var delta = this.clock.getDelta();

	var posY = (window.innerWidth / 2) - DTSite.tempX;
	var posX = (window.innerHeight / 2) - DTSite.tempY;

	//if (this.planeBG1) this.planeBG1.rotation.y = this.ileR;

	this.posXT += (posX - this.posXT)/20;
	this.posYT += (posY - this.posYT)/20;

	var posXT_ = (this.posXT/500)*Math.PI/180;
	var posYT_ = (this.posYT/2000)*Math.PI/180;

	//this.directionalLightH.position.x = 600 * Math.cos( this.posYT/800 );
	//this.directionalLightH.position.z = 600 * Math.sin( this.posYT/800 ) + 200;
	//this.directionalLightH.position.y = 150 * Math.sin( this.posXT/400 );

	//this.planesObj.rotation.x = posXT_;
	this.planesObj.rotation.y = posYT_;
	//this.planesObj.rotation.z = 10 * Math.PI/180;

	var posXT2_ = -(this.posXT/2000)*Math.PI/180;
	var posYT2_ = (this.posYT/2000)*Math.PI/180;

	if (this.changePivot){
		this.changePivot.rotation.x = 0  + posXT2_;
		this.changePivot.rotation.y =  0 + posYT2_;
	}

	//this.renderer.autoClear = true;

   	this.renderer.clear();

	this.composer.render(delta);

	//this.renderer.render(this.scene, this.camera);

	if (DTSite.counterRender % 60 == 0){
		// console.log('x ', this.camera.position.x);
		// console.log('y ', this.camera.position.y);
		// console.log('z ', this.camera.position.z);

		// console.log('rx ', this.cubeLookAt.position.x);
		// console.log('ry ', this.cubeLookAt.position.y);
		// console.log('rz ', this.cubeLookAt.position.z);
	}
}

BgDreamTeam.prototype.checkKeyC = function(e) {

	e = e || window.event;
    
	e.data.foo.upC = false;
	e.data.foo.downC = false;
	e.data.foo.leftC = false;

	e.data.foo.rightC = false;

}

BgDreamTeam.prototype.checkKey = function(e) {

    e = e || window.event;

    //console.log("checkKey ", e.keyCode);

    if (e.keyCode == '38') {
        e.data.foo.upC = true;
    }
    else if (e.keyCode == '40') {
		e.data.foo.downC = true;
    }
    else if (e.keyCode == '37') {
    	e.data.foo.leftC = true;
    }
    else if (e.keyCode == '39') {
		e.data.foo.rightC = true;
    }else if (e.keyCode == '16') {
		e.data.foo.shiftC = !e.data.foo.shiftC;
    }else if (e.keyCode == '17') {
		e.data.foo.ctrlC = !e.data.foo.ctrlC;
    }

}

BgDreamTeam.prototype.gotoBg = function(ref){

	var count = ref.pivotsCount;

	var h = 0;

	//TweenLite.to(ref.materialPlane, 0.8, {opacity:1, delay:0.8, ease:Expo.easeOut});

	var tPlus = 0.3;

	if(DTSite.selectedMenu == 0){

		var that = ref;

		//TweenLite.to(that.camera.position,0,{z:220, x:-175, y:20, delay:0, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		that.counterR = 0 * Math.PI/180;

		TweenLite.to(that.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});

		//TweenLite.to(that.cubeLookAt.position,0,{x:250, z:120, y:0, ease:Expo.easeOut, delay:0});

		TweenLite.to(that.cubeLookAt.position,0,{x:250, z:50, y:0, overwrite:"all"});

		TweenLite.to(that.camera.position,0,{x:-380, z:-200, delay:0, overwrite:"all"});

		TweenLite.to(that.camera.position,10,{x:-175, z:100, y:20, ease:Expo.easeOut, delay:0.5, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		TweenLite.to(that.camera.position,10,{z:220, delay:2, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		TweenLite.to(that.cubeLookAt.position,12,{x:250, z:120, ease:Expo.easeOut, delay:0.5});


		that.camera.lookAt(that.cubeLookAt.position);

		that.harmonyRender(that, true);

		var h = 0;

		for (h;h<count;h++){

			TweenLite.to(that.cubesF[h].scale, 0, {y:0, delay:0, overwrite:"all"});

			TweenLite.to(that.cubesF[h].scale, 1, {y:1, delay:(0.019*h) + 1.7 - 1, ease:Back.easeOut});

		}

	}else if(DTSite.selectedMenu == 1){

		//TweenLite.delayedCall(1.4, function (){DTSite.sfxWind.play({interrupt:"none", volume:1, loop:0});})

		var h = 0;

		var that = ref;

		that.counterR = 140 * Math.PI/180;

		TweenLite.to(that.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});

		TweenLite.to(that.cubeLookAt.position,0,{x:-199, y:67, z:148, overwrite:"all"});

		TweenLite.to(that.camera.position,0,{x:-291, y:127, z:110, delay:0, overwrite:"all"});

		//that.camera.lookAt(that.cubeLookAt.position);
		//that.camera.updateProjectionMatrix();

		//TweenLite.to(that.camera.position,10,{x:179, y:197, z:-165, delay:0, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		that.harmonyRender(that, true);

		TweenLite.to(that.camera.position,0,{x:-291, y:127, z:110, delay:0, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		//TweenLite.to(that.cubeLookAt.position,10,{x:-250, z:300, y:-100, ease:Expo.easeOut, delay:0});

		//that.camera.lookAt(that.cubeLookAt.position);

		//this.camera.lookAt(this.cubeLookAt)

		for (h;h<count;h++){

			TweenLite.to(that.cubesF[h].scale, 0, {y:0, delay:0, overwrite:"all"});

			TweenLite.to(that.cubesF[h].scale, 0.8, {y:1, delay:(0.007*h) + 1.3, ease:Power1.easeOut});

			//console.lpivots[h].get
		}

	}else if(DTSite.selectedMenu == 2){

		/*ref.camera.position.set( 321.53, 176.06, -0.66 );
		ref.camera.rotation.set( -59.9 * Math.PI/180, 21.11 * Math.PI/180, 31.8 * Math.PI/180);

		for (h;h<count;h++){

			//TweenLite.to(ref.cubesF[h].material, 3, {opacity:0.85, delay:(0.005*h) + 1.2, ease:Expo.easeOut});

			TweenLite.to(ref.cubesF[h].scale, 2, {y:1, delay:(0.005*h), ease:Expo.easeOut});

			//console.lpivots[h].get
		}*/

	}else if(DTSite.selectedMenu == 3){

	}else if(DTSite.selectedMenu == 4){

		var h = 0;

		var that = ref;

		that.counterR = 150 * Math.PI/180;

		/*TweenLite.to(that.cubeLookAt.position,0,{x:225, y:-553, z:-205, overwrite:"all"});

		TweenLite.to(that.camera.position,0,{x:168, y:217, z:329, delay:0, overwrite:"all"});

		that.harmonyRender(that, true);

		TweenLite.to(that.camera.position,0,{x:198, y:217, z:329, delay:0, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});
*/

		that.counterR = 1.3;

		TweenLite.to(that.rotationObjParam, 1, {param:0.1, ease:Expo.easeInOut, delay:0});


		TweenLite.to(that.cubeLookAt.position,0,{x:317, y:-279, z:338, overwrite:"all"});

		TweenLite.to(that.camera.position,0,{x:245, y:234, z:-179, delay:0, overwrite:"all"});

		that.harmonyRender(that, true);

		TweenLite.to(that.camera.position,0,{x:245, y:234, z:-179, delay:0, onUpdate:function(){that.camera.lookAt(that.cubeLookAt.position); that.camera.updateProjectionMatrix()}});

		for (h;h<count;h++){

			TweenLite.to(that.cubesF[h].scale, 0, {y:0, delay:0, overwrite:"all"});

			TweenLite.to(that.cubesF[h].scale, 0.8, {y:1, delay:(0.007*h) + 1.3, ease:Power1.easeOut});

			//console.lpivots[h].get
		}


	}else if(DTSite.selectedMenu == 5){


	}
}

BgDreamTeam.prototype.updateSize = function(){
	if (this.camera){
		this.camera.aspect = DTSite.browser_width / DTSite.browser_height;
    	this.camera.updateProjectionMatrix();
	}

	if (this.cameraNormal){
		this.cameraNormal.aspect = DTSite.browser_width / DTSite.browser_height;
    	this.cameraNormal.updateProjectionMatrix();
	}

	if(this.composer){

		//console.log("composer changed");

		this.renderer.setSize( DTSite.browser_width, DTSite.browser_height );
    	this.composer.setSize(DTSite.browser_width, DTSite.browser_height);

    	this.renderer.clear();
	}
}

BgDreamTeam.prototype.harmonyRender = function(ref, what){

	ref.harmonyRenderIt = what;

}

BgDreamTeam.prototype.changeBgPrev = function(what){

	if (DTSite.mobileSimple == false && DTSite.webGLReady == true){

		var where = 0;

		if (what != undefined){
			where = what;
		}else{
			where = DTSite.selectedMenu;
		}

		if(where == 3){
		
			TweenLite.to(this.planeBG1.rotation, 1.5, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1.5, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.position, 1.5, {z:1500, x:-2121 - 200, y:- 200, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG2.position, 1.5, {z:1500, x:2121 - 2121 - 200, y:-2121 - 200, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planesObj.rotation, 1.5, {z:75*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planesObj.position, 1.5, {y:-150, ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG4.position, 1.5, {x:-500, y:2400, z:-1500, ease:Expo.easeInOut, delay:0});


		}else if(where == 2){

			TweenLite.to(this.planeBG1.rotation, 1.5, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1.5, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.position, 1.5, {z:1500, x:2121 + 200, y:- 200, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG2.position, 1.5, {z:1500, x:+ 200, y:-2121- 200, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planesObj.rotation, 1.5, {z:-75*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planesObj.position, 1.5, {y:-150, ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG4.position, 1.5, {x:500, y:2400, z:-1500, ease:Expo.easeInOut, delay:0});

		}
	}else{

		if (DTSite.mobileSimple) return;

		var where = 0;

		if (what != undefined){
			where = what;
		}else{
			where = DTSite.selectedMenu;
		}

		TweenLite.to("#bgB0", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB1", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB2", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB3", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB4", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB5", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});
		TweenLite.to("#bgB6", 0.3, {autoAlpha:0, y:0, ease:Expo.easeOut, delay:0});

		if (where == 0){

			TweenLite.to("#bgB0", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 1){

			TweenLite.to("#bgB1", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 3){

			TweenLite.to("#bgB3", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 2){

			TweenLite.to("#bgB2", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 4){

			TweenLite.to("#bgB4", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 5){

			TweenLite.to("#bgB5", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}else if(where == 6){

			TweenLite.to("#bgB6", 3, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

		}

	}

}

BgDreamTeam.prototype.changeBg = function(what){

	if (DTSite.mobileSimple != true && DTSite.webGLReady == true){
		var count = this.pivotsCount;

		var h = 0;

		//TweenLite.to(this.materialPlane, 0.8, {opacity:0, delay:0, ease:Expo.easeOut});

		for (h;h<count;h++){

			//TweenLite.to(this.cubesF[count-h-1].material, 0.4, {opacity:0, delay:0.001*h, ease:Expo.easeOut});

			TweenLite.killTweensOf(this.cubesF[count-h-1].scale);

			TweenLite.to(this.cubesF[count-h-1].scale, 0, {y:0.0000001, delay:0.001*h, ease:Expo.easeIn, overwrite:"all"});

			//TweenLite.to(this.cubesF[count-h-1].scale, 0, {y:0, delay:0.001*h, ease:Expo.easeOut, onCompleteParams:[this.cubesF[count-h-1], false], onComplete:changeHV});

			//console.lpivots[h].get
		}

		TweenLite.killDelayedCallsTo(this.gotoBg);
		TweenLite.killDelayedCallsTo(this.harmonyRender);

		TweenLite.delayedCall(0.5, this.harmonyRender, [this, false]);

		var where = 0;

		if (what != undefined){
			where = what;
		}else{
			where = DTSite.selectedMenu;
		}

		var dI = 0.0;

		//TweenLite.to(this.rotationObjParam, 1, {param:0.6, ease:Expo.easeInOut, delay:0});

		if (where == 0){

			TweenLite.to(this.planesObj.position, 1, {y:0, z:500, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:90*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {x:45 *Math.PI/180, z:45*Math.PI/180, y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {x:-45 *Math.PI/180, z:45*Math.PI/180, y:0, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG4.position, 2, {x:0, y:2121 * 2, z:-2000, ease:Expo.easeOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG2.rotation, 1, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG1.position, 0.8, {z:1000, x:-2121, y:15,ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG2.position, 0.8, {z:1000, x:2121, y:15,ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG4.position, 2, {x:900, y:2400, z:-2000, ease:Expo.easeInOut, delay:1.5});


			TweenLite.to(this.planeBG1.position, 2, {z:1500, x:-2121 - 200, y:- 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planeBG2.position, 2, {z:1500, x:2121 - 2121 - 200, y:-2121 - 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.rotation, 2, {z:8*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.position, 2, {y:-150, z:0, ease:Expo.easeInOut, delay:2.1 - 0.6});

		}else if(where == 1){

			TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:0*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {y:0, z:-2000, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG4.position, 1.5, {x:0, y:2121 * 2, z:0, ease:Expo.easeOut, delay:0});


			TweenLite.to(this.planeBG1.position, 0.8, {y:2121, x:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 0.8, {y:-2121, x:0, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:45 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:-45 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.position, 1, {y:-50 + 2*2121, ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG2.position, 1, {y:-50, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG2.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});


			TweenLite.to(this.planeBG2.position, 1, {x:1300, y:-1150, ease:Expo.easeOut, delay:2.1}); 

			TweenLite.to(this.planesObj.rotation, 1, {z:-15*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeOut, delay:2.1});
			TweenLite.to(this.planesObj.position, 1, {y:-100, ease:Expo.easeOut, delay:2.1});

			TweenLite.to(this.planeBG4.position, 1, {x:-500, y:2400, z:-1500, ease:Expo.easeOut, delay:2.1 - 0.5});

		}else if(where == 3){
			
			TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:0*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {y:0, z:-2000, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG4.position, 1.5, {x:-2121, y:1000, z:-2000, ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG1.position, 1, {y:2121, x:-500, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 1, {y:-2121, x:-500, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:-45 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:-45 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG1.position, 1, {y:-50 + 2*2121, ease:Expo.easeInOut, delay:1.1});
			//TweenLite.to(this.planeBG2.position, 1, {y:-50, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG1.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG2.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});


			TweenLite.to(this.planeBG1.position, 2, {z:1500, x:-2121 - 200, y:- 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planeBG2.position, 2, {z:1500, x:2121 - 2121 - 200, y:-2121 - 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.rotation, 2, {z:75*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.position, 2, {y:-150, ease:Expo.easeInOut, delay:2.1 - 0.6});


			TweenLite.to(this.planeBG4.position, 1, {x:-500, y:2400, z:-1500, ease:Expo.easeInOut, delay:1.1});


		}else if(where == 2){
			
			TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:0*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {y:0, z:-2000, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG4.position, 1.5, {x:2121, y:1000, z:-2000, ease:Expo.easeInOut, delay:0});


			TweenLite.to(this.planeBG1.position, 1, {y:2121, x:500, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 1, {y:-2121, x:500, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:45 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:45 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG1.position, 1, {y:-50 + 2*2121, ease:Expo.easeInOut, delay:1.1});
			//TweenLite.to(this.planeBG2.position, 1, {y:-50, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG1.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG2.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});


			TweenLite.to(this.planeBG1.position, 2, {z:1500, x:2121 + 200, y:- 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planeBG2.position, 2, {z:1500, x:+ 200, y:-2121- 200, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.rotation, 2, {z:-75*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeInOut, delay:2.1 - 0.6});

			TweenLite.to(this.planesObj.position, 2, {y:-150, ease:Expo.easeInOut, delay:2.1 - 0.6});


			TweenLite.to(this.planeBG4.position, 1, {x:500, y:2400, z:-1500, ease:Expo.easeInOut, delay:1.1});

		}else if(where == 4){
			
			TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:0*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {x:0, z:0, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG4.position, 1.5, {x:500, y:2121 * 2, z:0, ease:Expo.easeOut, delay:0});

			TweenLite.to(this.planeBG1.position, 0.8, {y:100, x:-2121, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 0.8, {y:100, x:2121, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {x:-45 *Math.PI/180, y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {x:-45 *Math.PI/180, y:0, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG2.rotation, 1, {x:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG2.position, 1, {y:0, x:0 +(2*2121), ease:Expo.easeInOut, delay:1.1});
			TweenLite.to(this.planeBG1.position, 1, {x:0, y:0, ease:Expo.easeInOut, delay:1.1});


			TweenLite.to(this.planeBG1.position, 1, {x:-1300, y:-1150, ease:Expo.easeOut, delay:2.1});


			TweenLite.to(this.planesObj.rotation, 1, {x:-10*Math.PI/180, z:15*Math.PI/180, ease:Expo.easeOut, delay:2.1});
			TweenLite.to(this.planesObj.position, 1, {y:-100, ease:Expo.easeOut, delay:2.1});

			TweenLite.to(this.planeBG4.position, 1, {x:500, y:2400, z:-1500, ease:Expo.easeOut, delay:2.1});

			/*TweenLite.to(this.planeBG1.position, 1, {y:4500, ease:Expo.easeInOut, delay:1});

			TweenLite.to(this.planeBG2.position, 1, {y:-1150, x:1300, ease:Expo.easeInOut, delay:1});

			TweenLite.to(this.planeBG1.rotation, 1, {y:45 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:45 *Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1});
			TweenLite.to(this.planeBG2.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1});


			TweenLite.to(this.planesObj.rotation, 1, {z:0*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planesObj.rotation, 1, {x:-10*Math.PI/180, z:-15*Math.PI/180, ease:Expo.easeInOut, delay:1});*/

		}else if(where == 5){
			
			//dI = -1;
			
			/*TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:-90*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {y:0, z:-2000, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG4.position, 1.5, {x:0, y:2121 * 2, z:0, ease:Expo.easeOut, delay:0});


			TweenLite.to(this.planeBG1.position, 1, {y:2121, x:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 1, {y:-2121, x:0, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:-45 *Math.PI/180, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:-45 *Math.PI/180, ease:Expo.easeInOut, delay:0});*/

			TweenLite.to(this.planeBG1.position, 1, {y:-50 + 2*2121, x:0, ease:Expo.easeInOut, delay:1.1 - 1.1});
			TweenLite.to(this.planeBG2.position, 1, {y:-50, x:0, ease:Expo.easeInOut, delay:1.1 - 1.1});

			TweenLite.to(this.planeBG2.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1 - 1.1});


			TweenLite.to(this.planeBG2.position, 1, {x:1300 - 400, y:-1150 - 200, ease:Expo.easeOut, delay:2.1 - 1.1}); 

			TweenLite.to(this.planesObj.rotation, 1, {z:-75*Math.PI/180, x:-10*Math.PI/180, ease:Expo.easeOut, delay:2.1 - 1.1});
			TweenLite.to(this.planesObj.position, 1, {y:-100, ease:Expo.easeOut, delay:2.1 - 1.1});

			TweenLite.to(this.planeBG4.position, 1, {x:-500, y:2400, z:-1500, ease:Expo.easeOut, delay:2.1 - 0.5 - 1.1});

		}else if(where == 6){
			
			/*TweenLite.to(this.planesObj.position, 1, {y:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planesObj.rotation, 1, {z:90*Math.PI/180, x:0*Math.PI/180, ease:Expo.easeInOut, delay:0});

			//TweenLite.to(this.planeBG4.position, 0, {x:0, z:0, ease:Expo.easeInOut, delay:1.1});

			TweenLite.to(this.planeBG4.position, 1.5, {x:500, y:2121 * 2, z:0, ease:Expo.easeOut, delay:0});

			TweenLite.to(this.planeBG1.position, 1, {y:2121, x:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.position, 1, {y:-2121, x:0, ease:Expo.easeInOut, delay:0});

			TweenLite.to(this.planeBG1.rotation, 1, {y:45 *Math.PI/180, x:0, ease:Expo.easeInOut, delay:0});
			TweenLite.to(this.planeBG2.rotation, 1, {y:45 *Math.PI/180, x:0, ease:Expo.easeInOut, delay:0});*/

			TweenLite.to(this.planeBG1.position, 1, {y:-50, x:0, ease:Expo.easeInOut, delay:1.1 - 1.1});
			TweenLite.to(this.planeBG2.position, 1, {y:-50 - 2*2121, x:0,ease:Expo.easeInOut, delay:1.1 - 1.1});

			TweenLite.to(this.planeBG1.rotation, 1, {y:0 *Math.PI/180, ease:Expo.easeInOut, delay:1.1 - 1.1});


			TweenLite.to(this.planeBG1.position, 1, {y:-1300 + 400, x:-1150 - 200, ease:Expo.easeOut, delay:2.1 - 1.1});


			TweenLite.to(this.planesObj.rotation, 1, {x:-10*Math.PI/180, z:(90-75)*Math.PI/180, ease:Expo.easeOut, delay:2.1 - 1.1});
			TweenLite.to(this.planesObj.position, 1, {y:-100, ease:Expo.easeOut, delay:2.1 - 1.1});

			TweenLite.to(this.planeBG4.position, 1, {x:-500, y:2400, z:-1500, ease:Expo.easeOut, delay:2.1 - 1.1});

		}

		TweenLite.delayedCall(1+dI, this.gotoBg, [this]);
	}else{

		var where = 0;

		if (what != undefined){
			where = what;
		}else{
			where = DTSite.selectedMenu;
		}

		//TweenLite.killDelayedCallsTo(this.gotoBg);
		//TweenLite.killDelayedCallsTo(this.harmonyRender);

		if (DTSite.mobileSimple){
			if (where == 0){

				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg0", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0});

			}else if(where == 1){
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg1", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 3){
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg3", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 2){
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg2", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 4){
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg4", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 5){
				
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg2", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 6){
				
				TweenLite.set("#bg0", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg1", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg2", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg3", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
				TweenLite.set("#bg4", {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

				TweenLite.to("#bg3", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}
		}else{

			TweenLite.to("#bgB0", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB1", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB2", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB3", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB4", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB5", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});
			TweenLite.to("#bgB6", 0.3, {autoAlpha:0, y:0, overwrite:"all", ease:Expo.easeOut, delay:0});

			if (where == 0){

				TweenLite.to("#bgB0", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 1){

				TweenLite.to("#bgB1", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 3){

				TweenLite.to("#bgB3", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 2){

				TweenLite.to("#bgB2", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 4){

				TweenLite.to("#bgB4", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 5){

				TweenLite.to("#bgB5", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}else if(where == 6){

				TweenLite.to("#bgB6", 2, {autoAlpha:1, y:0, ease:Expo.easeOut, delay:0.3});

			}

		}
	}
};function ContactPage(){	
	this.titleAnim = new Object();

	this.titleAnim.titlePosition = 0;

	this.splitTextObj = {};

	this.email = 'studio@dreamteam.pl';
}

ContactPage.prototype.setUp = function(){

}

ContactPage.prototype.startPage = function(){
	var delayIt = 2.9;

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		delayIt = 0;
	}

	if (!DTSite.mobileSimple){
		this.contactPageTitle = new lib.contact();

		this.contactPageTitleIns = new createjs.Container();

		this.contactPageTitleIns.addChild(this.contactPageTitle);

		DTSite.titlesContainerIns.addChild(this.contactPageTitleIns);

		this.contactPageTitle.gotoAndStop(0);

		TweenLite.to(this.titleAnim, 1.9, {titlePosition:70, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:0.3 + delayIt, onComplete:function(){DTSite.updateTitleStage = false;}});

	}else{

		TweenLite.to("#contactM", 1, {autoAlpha:1, delay:0.3 + delayIt, ease:Expo.easeIn});
	}

	var where = parseInt(DTSite.browser_height/2 - (DTSite.titleContinerH/2) - 40);

	TweenLite.to("#contactHolder", 1, {autoAlpha:1, delay:0.3 + delayIt, ease:Expo.easeIn});

	//TweenLite.to("#titlesContainer", 0, {z:0, transformPerspective:200, delay:0.5 + 1.4, overwrite:"all"});

	if (!DTSite.mobileSimple) var tl = new TimelineLite();

	//console.log("delayIt ",delayIt)


	if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:-1.0 + delayIt});
		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut}, "+=1.3");
	}else{
		if (!DTSite.mobileSimple){
			tl.to(DTSite.titlesContainerIns, 0, {y:40, delay:0.0 + delayIt});
			tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut}, "+=.3");
		}
	}
	
	if (!DTSite.mobileSimple) tl.play();

	TweenLite.delayedCall(delayIt, this.splitTextSpec, [this]);

	//TweenLite.to("#titlesContainer", 0, {y:-where + 70, delay:1});
	//TweenLite.to("#titlesContainer", 4, {y:-where, delay:3.0, ease:Expo.easeOut});

	TweenLite.delayedCall(delayIt + 0.1, this.resize, [this]);

	if (!DTSite.mobileSimple) DTSite.titlesStage.update();


	$("#contactF2_1").on("mouseover", this.mouseOver);
	$("#contactF2_1").on("mouseout", this.mouseOut);

	$("#contactF2_1").on("click", this.clickIt);

	if (DTSite.mobileSimple){
		if (window.navigator.msPointerEnabled) {
		    $("#contactF2_1").on("click", this.clickIt);
		}else{
			$("#contactF2_1").on("tap", this.clickIt);
		}
	}else{

		$("#contactF2_1").on("mouseover", this.mouseOver);
		$("#contactF2_1").on("mouseout", this.mouseOut);

		$("#contactF2_1").on("click", this.clickIt);

	}
}

ContactPage.prototype.clickIt = function (e){
	e.preventDefault();

	var mailto_link = 'mailto:' + DTSite.openedPage.email;

	document.location.href = mailto_link;

}

ContactPage.prototype.mouseOut = function (e){
	e.preventDefault();


	var i = DTSite.openedPage.splitTextObj.mySplitText.chars.length - 1;

   	var h = 0;

   	var rand = Math.random() * i;

   	var ile = DTSite.openedPage.splitTextObj.mySplitText.chars.length - 1;

   	for (i; i > -1; i--) {
   		TweenLite.to(DTSite.openedPage.splitTextObj.mySplitText.chars[i], 0.2, {y:30, ease:Power2.easeIn, delay:(rand * 0.02), overwrite: "all"});

		TweenLite.to(DTSite.openedPage.splitTextObj.mySplitText2.chars[i], 0.2, {y:-40, ease:Power2.easeIn, delay:(rand * 0.02), overwrite: "all"});

		rand = Math.random() * ile;

		h+=1;
	}

	TweenLite.to("#contactF2_2", 0.5, {opacity:1, ease:Power2.easeIn, overwrite: "all"});
}

ContactPage.prototype.mouseOver = function (e){
	e.preventDefault();

	
	var i = DTSite.openedPage.splitTextObj.mySplitText.chars.length - 1;

   	var h = 0;

   	var rand = Math.random() * i;

   	var ile = DTSite.openedPage.splitTextObj.mySplitText.chars.length - 1;

   	//console.log(DTSite.openedPage.tmpH);

   	for (i; i > -1; i--) {
   		TweenLite.to(DTSite.openedPage.splitTextObj.mySplitText.chars[i], 0.6, {y:0, ease:Power2.easeOut, delay:(rand * 0.02), overwrite: "all"});

   		//console.log(DTSite.openedPage.splitTextObj.mySplitText.chars[i]);

		TweenLite.to(DTSite.openedPage.splitTextObj.mySplitText2.chars[i], 0.6, {y:-DTSite.openedPage.tmpH, ease:Power2.easeOut, delay:(rand * 0.02), overwrite: "all"});

		rand = Math.random() * ile;

		h+=1;
	}

	TweenLite.to("#contactF2_2", 1, {opacity:0, ease:Power2.easeOut, overwrite: "all"});
}

ContactPage.prototype.splitTextSpec = function (ref){

	var ref_;

	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	var title = $("#contactF2_3");
	var title2 = $("#contactF2_4");


	ref_.splitTextObj.mySplitText = new SplitText(title, {type:"chars"});
   	ref_.splitTextObj.mySplitText2 = new SplitText(title2, {type:"chars"});

   	var i = ref_.splitTextObj.mySplitText.chars.length - 1;

   	var h = 0;

   	var rand = Math.random() * i;

   	var ile = ref_.splitTextObj.mySplitText.chars.length - 1;

   	for (i; i > -1; i--) {
   		TweenLite.set(ref_.splitTextObj.mySplitText.chars[i], {y:30, overwrite: "all"});

		TweenLite.set(ref_.splitTextObj.mySplitText2.chars[i], {y:-40, overwrite: "all"});

		rand = Math.random() * ile;

		h+=1;
	}
}

ContactPage.prototype.resize = function(ref){

	$("#contactHolder").css("display","block");

	var ref_;

	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	if (!DTSite.mobileSimple){
		var scaleTmp = DTSite.scale;
	}else{
		var scaleTmp = (DTSite.browser_width - 50)/786;

		if (scaleTmp * 220 > 80){
			scaleTmp = (80)/220;
		}
	}

	if (!DTSite.mobileSimple){
		ref_.contactPageTitle.scaleX = scaleTmp;
		ref_.contactPageTitle.scaleY = scaleTmp;

		ref_.contactPageTitle.x = parseInt((DTSite.browser_width - parseInt(786* scaleTmp))/2);
	
		ref_.contactPageTitle.y = parseInt((DTSite.browser_height - parseInt(220* scaleTmp))/2);
	}else{

		var widthT = DTSite.browser_width - 50;

		var scaleTM = widthT/234;

		var heightT = parseInt(50 * scaleTM);

		if (heightT > 60){
			heightT = 60;

			scaleTM = heightT/50;

			widthT = parseInt(234 * scaleTM);
		}

		$("#contactM").css("width", widthT)
		$("#contactM").css("height", heightT)

		$("#contactM").css("left", parseInt((DTSite.browser_width - widthT)/2))

		$("#contactM").css("top", 90);

		//ref_.contactPageTitle.y = parseInt((80 - parseInt(220* scaleTmp))/2);
	}


	var topPos = 60 * DTSite.scale;

	$("#contactLine").css("top", topPos);

	var fontSize = 30 * DTSite.scale;

	if (!DTSite.mobileSimple){
		if (fontSize < 18){
			fontSize = 18;
		}
	}else{
		if (fontSize < 24){
			fontSize = 24;
		}
	}

	var fontSize2 = 36 * DTSite.scale;

	if (fontSize2 < 16){
		fontSize2 = 16;
	}

	var topPos = 50 * DTSite.scale;

	var letterS = 6.8 * DTSite.scale;

	var titleHeight = parseInt(130 * DTSite.scale);


	$("#contactName").css("fontSize", fontSize2);

	$("#contactName").css("letterSpacing", letterS);

	$("#contactLine").css("height", 90 * DTSite.scale);

	$("#contactT1").css("fontSize", fontSize);
	$("#contactT2").css("fontSize", fontSize);

	var hTmp = $("#contactF2_2").height();
	var wTmp = $("#contactF2_2").width() + 40;

	ref_.tmpH = parseInt(hTmp/2) + 2;

	$("#contactF2_3").css("height", ref_.tmpH);
	$("#contactF2_4").css("height", ref_.tmpH);
	$("#contactF2_4").css("top", ref_.tmpH);

	$("#contactF2_3").css("width", wTmp);
	$("#contactF2_4").css("width", wTmp);

	$("#btnContact").css("height", hTmp);
	$("#btnContact").css("width", wTmp);

	//var distTitleContent = parseInt((DTSite.titleContinerH - parseInt(130* DTSite.scale))/2) + parseInt(220* DTSite.scale);

	var distTitleContent = parseInt(135* DTSite.scale) + parseInt(90* DTSite.scale);

	//console.log("DTSite.browser_width", DTSite.browser_width);

	if (!DTSite.mobileSimple){
		ref_.contactPageTitleIns.y = - ref_.contactPageTitle.y + parseInt(((DTSite.browser_height - $("#contactHolder").height()) / 2) - distTitleContent) ;//+"px";
		$("#contactHolder").css("top", parseInt((DTSite.browser_height - $("#contactHolder").height()) / 2));
	}else{

		$("#mobileContent").css("top", 160);
		$("#mobileContent").css("height", DTSite.browser_height - 160);

		//$("#contactM").css("left", )
		//$("#contactM").css("top", 80);

		//ref_.contactPageTitleIns.y = 80;
		$("#contactHolder").css("top", 0);
	}

	if (DTSite.browser_width < 1150){

		if (!DTSite.mobileSimple){
			var widthTmp = parseInt(DTSite.browser_width - 200);

			var topPos2 = 150 * DTSite.scale;

			var topPos3 = 250 * DTSite.scale;

			$("#contactT1").css("top", topPos2);
			$("#contactT2").css("top", topPos3);

			$("#contactT1").css("width", "100%");
			$("#contactT2").css("width", $("#contactF2_2").width() + $("#contactF2").width());

			$("#contactT1").css("left", 0);
			$("#contactT2").css("left", ( widthTmp - ($("#contactF2_2").width() + $("#contactF2").width()) )/2);

			$("#contactT1").css("position", "absolute");
			$("#contactT2").css("position", "absolute");

			$("#contactT2").css("right", 0);

			$("#contactT1").css("textAlign", "center");

			$("#contactHolder").css("width", widthTmp);


			$("#contactLine").css("left", parseInt((widthTmp - 40)/2));


			$("#contactLine").css("height", 2);

			$("#contactLine").css("width", 40);

			var topPos2 = parseInt((DTSite.browser_height - ($("#contactT1").height() + $("#contactT2").height()) - $("#contactHolder").offset().top - 150)/2);

			var topPos3 = parseInt(topPos2 + $("#contactT1").height() + 30);

			$("#contactLine").css("position", "absolute");

			$("#contactT1").css("top", topPos2);
			$("#contactT2").css("top", topPos3);

			$("#contactLine").css("top", topPos2 + parseInt($("#contactT1").height() + (30/2)));
		}else{
			TweenLite.set("#scrollingSection", {y:0});

			var widthTmp = parseInt((DTSite.browser_width * 90)/100);

			$("#contactT1").css("fontSize", fontSize);
			$("#contactT2").css("fontSize", fontSize);

			$("#contactT1").css("width", "100%");
			$("#contactT2").css("width", $("#contactF2_2").width() + $("#contactF2").width());

			$("#contactT1").css("left", 0);
			$("#contactT2").css("left", ( widthTmp - ($("#contactF2_2").width() + $("#contactF2").width()) )/2);

			$("#contactT1").css("position", "absolute");
			$("#contactT2").css("position", "absolute");

			$("#contactT2").css("right", 0);

			$("#contactT1").css("textAlign", "center");

			$("#contactHolder").css("width", widthTmp);

			$("#contactLine").css("left", parseInt((widthTmp - 40)/2));

			$("#contactLine").css("height", 2);

			$("#contactLine").css("width", 40);

			var topPos2 = parseInt((DTSite.browser_height - ($("#contactT1").height() + $("#contactT2").height()) - $("#mobileContent").offset().top - 100)/2);

			var topPos3 = parseInt(topPos2 + $("#contactT1").height() + 50);

			var topPos1 = parseInt(topPos2 - $("#contactName").height() - 50);

			var topPos4 = parseInt(topPos1 - heightT - 10 + $("#mobileContent").offset().top);

			$("#contactLine").css("position", "absolute");
			
			$("#contactName").css("top", topPos1);

			$("#contactM").css("top", topPos4);

			$("#contactT1").css("top", topPos2);
			$("#contactT2").css("top", topPos3);

			$("#contactLine").css("top", topPos2 + parseInt($("#contactT1").height() + (50/2)));
		}
	}else{

		var topPos2 = 90 * DTSite.scale;

		$("#contactT1").css("top", topPos2);
		$("#contactT2").css("top", topPos2);

		$("#contactT1").css("left", 70);
		$("#contactT2").css("right", 80);
		$("#contactT2").css("left", "");

		$("#contactT1").css("position", "relative");

		$("#contactT2").css("position", "relative");

		$("#contactHolder").css("width", 1000);

		$("#contactLine").css("position", "relative");

		$("#contactLine").css("height", 90* DTSite.scale);

		$("#contactLine").css("width", 1);

		$("#contactLine").css("left", 500);

		$("#contactT1").css("width", 360);
		$("#contactT2").css("width", 360);

		$("#contactT1").css("textAlign", "left");
		$("#contactT1").css("textAlign", "right");

		$("#contactLine").css("display", "block");
		$("#contactLine").css("top", 60 * DTSite.scale);
	}

	logoResize();
}

ContactPage.prototype.updateMcPos = function(){
	if (!DTSite.mobileSimple) return;
	
	if (this.contactPageTitle == null) return;

	if (this.contactPageTitle.currentFrame >= 70){
		this.contactPageTitle.gotoAndStop(70);
	}

	this.titleAnim.titlePosition = this.contactPageTitle.currentFrame;
}


ContactPage.prototype.endPage = function(){

	TweenLite.killDelayedCallsTo(this.resize);

	if (!DTSite.mobileSimple){
		TweenLite.to(this.titleAnim, 0.5, {titlePosition:0,onUpdate:this.setMcPosition, onUpdateParams:[this], overwrite:"all"});
	}else{
		TweenLite.to("#contactM", 0.5, {autoAlpha:0, overwrite:"all"});
	}

	TweenLite.to("#contactHolder", 0.5, {autoAlpha:0, delay:0, ease:Expo.easeOut, onComplete:this.hideDivs, overwrite:"all"});

	if (!DTSite.mobileSimple){
		TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:70, delay:0, ease:Expo.easeInOut, overwrite:"all"});
	}/*else{
		TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:40, delay:0, ease:Expo.easeInOut, overwrite:"all"});
	}*/
}

ContactPage.prototype.hideDivs = function(ref){
	if (!DTSite.mobileSimple) {
		if (DTSite.titlesContainerIns.contains(this.contactPageTitle)) DTSite.titlesContainerIns.removeChild(this.contactPageTitle);
	}

	this.contactPageTitle = null;
	delete this.contactPageTitle;

	$("#contactHolder").css("display","none");
}


ContactPage.prototype.setMcPosition = function(ref){
	ref.contactPageTitle.gotoAndStop(ref.titleAnim.titlePosition);
	DTSite.updateTitleStage = true;
};function HomePage(){	
	//this.homePageTitle = new lib.dtLogo();

	this.titleAnim = new Object();

	this.titleAnim.titlePosition = 0;

	this.scrollAnim = new Object();

	this.scrollAnim.scrollPosition = 0;

	this.splitText;

	this.setUp();

	this.posXT1 = 0;
	this.posXT2 = 0;
	this.posXT3 = 0;
	this.posXT4 = 0;

	this.posYT1 = 0;
	this.posYT2 = 0;
	this.posYT3 = 0;
	this.posYT4 = 0;

	this.dots1A = [];
	this.dots2A = [];
	this.dots3A = [];
	this.dots4A = [];
}

HomePage.prototype.setUp = function(){

	var scrollTxt = $("#scrTxt");

	this.splitText = new SplitText(scrollTxt, {type:"chars"});

}

HomePage.prototype.showDots = function(delay_){

	var h = 0;
	var ile = 80;

	var delayIt1 = delay_ + 6;
	var delayIt2 = delay_ + 5;
	var delayIt3 = delay_ + 4;
	var delayIt4 = delay_ + 6;

	this.dotsAll = new createjs.Container();

	this.dots1 = new createjs.Container();

	this.dots1A = [];
	this.dots2A = [];
	this.dots3A = [];
	this.dots4A = [];

	for (h;h<ile;h++){
		var cont = new createjs.Container();
		var circle = new createjs.Shape();
	    circle.graphics.beginFill("white").drawCircle(0, 0, 1);
	    
	   // circle.cache(-1, -1, 1 * 2, 1 * 2);


	    circle.x = 350;

	    cont.addChild(circle);

	    cont.rotation = h*0.8;

	    cont.alpha = 0;

	    TweenLite.to(cont, 0.5, {alpha:1, delay:delayIt1 + h*0.01, onUpdate:this.updateStage});
	    this.dots1.addChild(cont);

	    this.dots1A.push(cont)
	}

	this.dots1.rotation = -140;

	this.dots1.x = 1920/2 + 500;
	this.dots1.y = 1100/2 - 130;

	this.dotsAll.addChild(this.dots1);




	var h = 0;
	var ile = 70;

	this.dots2 = new createjs.Container();

	for (h;h<ile;h++){
		var cont = new createjs.Container();
		var circle = new createjs.Shape();
	    circle.graphics.beginFill("white").drawCircle(0, 0, 1);
	    //circle.cache(-1, -1, 1 * 2, 1 * 2);
	    circle.x = 200;

	    cont.addChild(circle);

	    cont.rotation = h*1.1;

	    cont.alpha = 0;

	    TweenLite.to(cont, 0.5, {alpha:1, delay:delayIt2 + h*0.01, onUpdate:this.updateStage});
	    this.dots2.addChild(cont);

	    this.dots2A.push(cont)
	}

	this.dots2.rotation = -60;

	this.dots2.x = 1920/2 - 900;
	this.dots2.y = 1100/2 - 100;

	this.dotsAll.addChild(this.dots2);




	var h = 0;
	var ile = 50;

	this.dots3 = new createjs.Container();

	for (h;h<ile;h++){
		var cont = new createjs.Container();
		var circle = new createjs.Shape();
	    circle.graphics.beginFill("white").drawCircle(0, 0, 1);
	    //circle.cache(-1, -1, 1 * 2, 1 * 2);
	    circle.x = 330;

	    cont.addChild(circle);

	    cont.rotation = h*0.8;

	    cont.alpha = 0;

	    TweenLite.to(cont, 0.5, {alpha:1, delay:delayIt3 + (ile-h)*0.01, onUpdate:this.updateStage});
	    this.dots3.addChild(cont);

	    this.dots3A.push(cont)
	}

	this.dots3.rotation = 0;

	this.dots3.x = 1920/2 - 70;
	this.dots3.y = 1100/2;

	this.dotsAll.addChild(this.dots3);



	var h = 0;
	var ile = 60;

	this.dots4 = new createjs.Container();

	for (h;h<ile;h++){
		var cont = new createjs.Container();
		var circle = new createjs.Shape();
	    circle.graphics.beginFill("white").drawCircle(0, 0, 1);
	    //circle.cache(-1, -1, 1 * 2, 1 * 2);
	    circle.x = 330;

	    cont.addChild(circle);

	    cont.rotation = h*0.8;

	    cont.alpha = 0;

	    TweenLite.to(cont, 0.5, {alpha:1, delay:delayIt4 + h*0.01, onUpdate:this.updateStage});
	    this.dots4.addChild(cont);

	    this.dots4A.push(cont)
	}

	this.dots4.rotation = -50;

	this.dots4.x = 1920/2 + 500;
	this.dots4.y = 1100/2 + 50;

	this.dotsAll.addChild(this.dots4);


	DTSite.titlesStage.addChild(this.dotsAll);

}

HomePage.prototype.startPage = function(delay_){

	var delayIt = 2;

	if (delay_ !== undefined){
		delayIt = delay_;
	}

	var delayIt2 = 3.9;

	var delayIt3 = 2.5;

	if (!DTSite.mobileSimple) DTSite.logoMini.gotoAndStop(0);

	if (!DTSite.mobileVersion){
		this.showDots(delay_);
	}

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		delayIt2 = 0.9;
		delayIt = 0;
		delayIt3 = 0;

		$("#logoM").css("display", "block");

		TweenLite.to("#logoM", 1, {autoAlpha:1, delay:delayIt2+ delayIt});
	}

	if (!DTSite.mobileSimple){
		TweenLite.to(this.titleAnim, 2.3, {titlePosition:84, onUpdate:this.setMcPosition, 
			onStart:function(){
				DTSite.titlesContainerIns.addChild(DTSite.logoMini)

				/*DTSite.logoMini.scaleX = 1 * DTSite.scale;
				DTSite.logoMini.scaleY = 1 * DTSite.scale;

				DTSite.logoMini.x = parseInt((DTSite.browser_width - parseInt(780* DTSite.scale))/2);
				DTSite.logoMini.y = parseInt((DTSite.browser_height - parseInt(210* DTSite.scale))/2);*/
			},

			onUpdateParams:[this], delay:delayIt2+ delayIt, onComplete:function(){DTSite.updateTitleStage = false;}});

		if (DTSite.scrollIco){
			DTSite.scrollIco.gotoAndStop(0);

			TweenLite.to(this.scrollAnim, 1, {scrollPosition:29, onUpdate:this.setScrollPosition, 
				onStart:function(){
					DTSite.scrollStage.addChild(DTSite.scrollIco);
					$(DTSite.scrollDown).css("cursor","pointer"); 
				},

				onUpdateParams:[this], delay:delayIt2 + 1.1 + delayIt,

				onComplete:function(){
					DTSite.updateScrollIco = false;

					$(DTSite.scrollDown).on("mouseover", DTSite.homePage.mouseOverScroll);
					$(DTSite.scrollDown).on("mouseout", DTSite.homePage.mouseOutScroll);
					$(DTSite.scrollDown).on("click", DTSite.homePage.clickScroll);
				}
			});
		}
	}


	if (DTSite.scrollIco){
		var ile = this.splitText.chars.length;

	   	var rand = Math.random() * (ile - 1);

	   	var i = 0;

	   	for (i; i < ile; i++) {

	   		TweenLite.to(this.splitText.chars[i], 0, {y:20, delay:0, overwrite: "all"});
			TweenLite.to(this.splitText.chars[i], 0.6, {y:0, ease:Power4.easeOut, delay:(rand * 0.04)+ delayIt2 + 0.9 + delayIt});
			rand = Math.random() * (ile - 1);
		};

		$(DTSite.scrollDown).css("display","block");
		// $('#homeHolder').css("display","block"); 
		$(DTSite.scrollDown).css("cursor","default"); 
	}else{
		$(DTSite.scrollDown).css("display","none"); 
		// $('#homeHolder').css("display","none"); 
	}

	if (!DTSite.mobileSimple) var where = parseInt(DTSite.browser_height/2 - (DTSite.titleContinerH/2));

	//TweenLite.to("#titlesContainer", 0, {z:0, transformPerspective:200, delay:1+0.5+ delayIt});
	

	//var distTitleContent = parseInt(DTSite.titleContinerH/2) + 30;//parseInt((DTSite.titleContinerH - parseInt(160* DTSite.scale))/2) + parseInt(210* DTSite.scale);

	//DTSite.titlesContainerIns.y = parseInt((DTSite.browser_height / 2) - distTitleContent);

	if (!DTSite.mobileSimple){
		var tl = new TimelineLite();

		if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
			tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:1+0.5+ delayIt});
		}else{
			tl.to(DTSite.titlesContainerIns, 0, {y:40, delay:1+ delayIt});
		}

		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut}, "+="+delayIt3);
		
		tl.play();
	}

	TweenLite.delayedCall(0.5, this.resize, [this]);

	if (!DTSite.mobileSimple) DTSite.titlesStage.update();
}

HomePage.prototype.mouseOverScroll = function(e){
	e.preventDefault();
	
	TweenLite.to(DTSite.homePage.scrollAnim, 0.4, {scrollPosition:51, onUpdate:DTSite.homePage.setScrollPosition, onUpdateParams:[DTSite.homePage], onComplete:function(){DTSite.updateScrollIco = false;}, overwrite:"all"});

	TweenLite.to("#scrTxt", 0.3, {y:5, ease:Power1.easeOut});

	TweenLite.to(DTSite.scrollIco, 0.3, {y:60, ease:Power1.easeOut});

	$("#roll1").trigger("mouseover");
}

HomePage.prototype.mouseOutScroll = function(e){
	e.preventDefault();
	
	TweenLite.to(DTSite.homePage.scrollAnim, 0.2, {scrollPosition:29, onUpdate:DTSite.homePage.setScrollPosition, onUpdateParams:[DTSite.homePage], onComplete:function(){DTSite.scrollIco.gotoAndStop(29); DTSite.updateScrollIco = false;}, overwrite:"all"});

	TweenLite.to("#scrTxt", 0.3, {y:0, ease:Power1.easeOut});

	TweenLite.to(DTSite.scrollIco, 0.2, {y:50, ease:Power1.easeOut});

	$("#roll1").trigger("mouseout");
}

HomePage.prototype.clickScroll = function(e){
	e.preventDefault();
	
	$("#roll1").trigger("click");
}

HomePage.prototype.resize = function(ref){

	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	if (!DTSite.mobileSimple){
		DTSite.logoMini.scaleX = 1 * DTSite.scale;
		DTSite.logoMini.scaleY = 1 * DTSite.scale;

		DTSite.logoMini.x = parseInt((DTSite.browser_width - parseInt(780* DTSite.scale))/2);
		DTSite.logoMini.y = parseInt((DTSite.browser_height - parseInt(210* DTSite.scale))/2);

		if (ref_.dotsAll){

			var scaleTmp = DTSite.browser_width/1920;

			var scaleTmp2 = DTSite.browser_height/1000;

			if (scaleTmp2 < scaleTmp){
				scaleTmp = scaleTmp2;
			}

			//console.log("scaleTmp ", scaleTmp);

			ref_.dotsAll.scaleX = ref_.dotsAll.scaleY = scaleTmp;

			ref_.dotsAll.x = parseInt((DTSite.browser_width - (1920*scaleTmp))/2);
			ref_.dotsAll.y = parseInt((DTSite.browser_height - (900*scaleTmp))/2);

			//console.log("x ", ref_.dotsAll.x);

			//console.log("y ", ref_.dotsAll.y);
		}
	}else{

		var width2 = DTSite.browser_width - 50;

		var scaleX = width2/402;

		var height2 = parseInt(scaleX * 87);


		var scaleTmp = (DTSite.browser_width - 50)/780;

		$("#logoM").css("width", width2);
		$("#logoM").css("height", height2);

		$("#logoM").css("left", parseInt(25));

		$("#logoM").css("top", parseInt((DTSite.browser_height - height2)/2));
	}

}

HomePage.prototype.updateMcPos = function(){
	if (!DTSite.mobileSimple) this.titlePosition = DTSite.logoMini.currentFrame;

	/*var posX = ((window.innerWidth / 2) - DTSite.tempX)/10;
	var posY = ((window.innerHeight / 2) - DTSite.tempY)/10;

	



	this.dots1.x = parseInt(DTSite.browser_width/2 + 500 + this.posXT1);
	this.dots2.x = parseInt(DTSite.browser_width/2 - 900 + this.posXT2);
	this.dots3.x = parseInt(DTSite.browser_width/2 - 70 + this.posXT3);
	this.dots4.x = parseInt(DTSite.browser_width/2 + 500 + this.posXT4);

	this.dots1.y = parseInt(DTSite.browser_height/2 - 130 + this.posYT1);
	this.dots2.y = parseInt(DTSite.browser_height/2 - 100 + this.posYT2);
	this.dots3.y = parseInt(DTSite.browser_height/2 + this.posYT3);
	this.dots4.y = parseInt(DTSite.browser_height/2 + 50 + this.posYT4);*/

	//if (DTSite.counterRender % 2 == 0)

	//DTSite.updateTitleStage = true;
}


HomePage.prototype.endPage = function(){

	var ile = this.splitText.chars.length;

   	var rand = Math.random() * (ile - 1);

   	var i = 0;

   	for (i; i < ile; i++) {

   		TweenLite.to(this.splitText.chars[i], 0.2, {y:20, delay:(rand * 0.04), overwrite: "all"});
		rand = Math.random() * (ile - 1);
	};

	var ile1 = this.dots1A.length;
	var ile2 = this.dots2A.length;
	var ile3 = this.dots3A.length;
	var ile4 = this.dots4A.length;

	var h = 0;

	for (h;h<ile1;h++){
	    TweenLite.to(this.dots1A[h], 0, {alpha:0, delay:h*0.005, overwrite:"all"});
	}

	var h = 0;
	for (h;h<ile2;h++){
	    TweenLite.to(this.dots2A[h], 0, {alpha:0, delay:h*0.005, overwrite:"all"});
	}

	var h = 0;
	for (h;h<ile3;h++){
	    TweenLite.to(this.dots3A[h], 0, {alpha:0, delay:h*0.005, overwrite:"all"});
	}

	var h = 0;
	for (h;h<ile4;h++){
	    TweenLite.to(this.dots4A[h], 0, {alpha:0, delay:h*0.005, overwrite:"all"});
	}

	if (!DTSite.mobileVersion){
		TweenLite.to(this.scrollAnim, 0.2, {scrollPosition:0, onUpdate:DTSite.homePage.setScrollPosition, onUpdateParams:[DTSite.homePage], onComplete:function(){$(DTSite.scrollDown).css("display","none"); DTSite.updateScrollIco = false;}, overwrite:"all"});
	}

	$(DTSite.scrollDown).off("mouseover");
	$(DTSite.scrollDown).off("mouseout");
	$(DTSite.scrollDown).off("click");

	TweenLite.killDelayedCallsTo(this.resize);

	TweenLite.to("#logoM", 0.3, {autoAlpha:0, overwrite:"all"});

	if (!DTSite.mobileSimple){
		TweenLite.to(this.titleAnim, 0.5, {titlePosition:0, onUpdate:this.setMcPosition, onUpdateParams:[this], overwrite:"all", onComplete:this.removeAll, onCompleteParams:[this]});

		var distTitleContent = parseInt(DTSite.titleContinerH/2) + 30;

		TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:50, delay:0, ease:Expo.easeIn, overwrite:"all"});
	}
}

HomePage.prototype.removeAll = function(ref){

	if (DTSite.titlesStage.contains(ref.dots1)) DTSite.titlesStage.removeChild(ref.dots1);
	if (DTSite.titlesStage.contains(ref.dots2)) DTSite.titlesStage.removeChild(ref.dots2);
	if (DTSite.titlesStage.contains(ref.dots3)) DTSite.titlesStage.removeChild(ref.dots3);
	if (DTSite.titlesStage.contains(ref.dots4)) DTSite.titlesStage.removeChild(ref.dots4);
}

HomePage.prototype.updateStage = function(ref){
	DTSite.updateTitleStage = true;
}

HomePage.prototype.setScrollPosition = function(ref){
	DTSite.scrollIco.gotoAndStop(ref.scrollAnim.scrollPosition);
	DTSite.updateScrollIco = true;
}

HomePage.prototype.setMcPosition = function(ref){
	DTSite.logoMini.gotoAndStop(ref.titleAnim.titlePosition);
	DTSite.updateTitleStage = true;
};var DTSite = new function () {
	this.browser_width = 0;
	this.browser_height = 0;
	this.selectedMenu = 0;

	this.musicOn = false;

	this.progressSoundLoading = 0;

	this.globalVolume = 1;

	this.titlesContainer;

	this.titlesStage;

	this.navPrevStage;

	this.navNextStage;

	this.soundStage;

	this.homePage;

	this.titleContinerH;
	this.titleContinerW;

	this.openedPage;

	this.bgContainer;

	this.tempX = 0;
	this.tempY = 0;

	this.mobileSimple;

	this.mobileVersion;

	this.updateTitleStage = false;

	this.updateNavNextStage = false;
	this.updateNavPrevStage = false;

	this.logoPosition = 0;

	this.scale = 1;
	this.scaleY = 1;

	this.scaleContainerW = 1;

	this.scaleContainerH = 1;

	this.scaleCont = 1;

	this.changePageInProgress = false;

	this.siteStarted = false;

	this.counterRender = 0;

	this.loadingProject = false;

	//this.adressTmp = "/~lukasz/dteam_dev/";

	this.stageJSON = 'stage.json';

	this.eventsJSON = 'events.json';

	//this.adressTmp = "/clients/dteam_dev/";
	this.adressTmp = "/";

	this.siteTitles = [{title:"Home", short:"", url:"home.php"},{title:"About", short:"about", url:"about.php"}, {title:"Development", short:"development", url:"development.php"}, {title:"Marketing", short:"marketing", url:"marketing.php"}, {title:"Contact", short:"contact", url:"contact.php"}];
	
	this.siteTitlesM = [{title:"Home", short:"", url:"home.php"},{title:"About", short:"about", url:"about.php"}, {title:"Development", short:"development", url:"developmentM.php"}, {title:"Marketing", short:"marketing", url:"marketingM.php"}, {title:"Contact", short:"contact", url:"contact.php"}];
	
	this.siteTitlesT = [{title:"Home", short:"", url:"home.php"},{title:"About", short:"about", url:"about.php"}, {title:"Development", short:"development", url:"developmentT.php"}, {title:"Marketing", short:"marketing", url:"marketingT.php"}, {title:"Contact", short:"contact", url:"contact.php"}];
	

	this.startSite = function(){

		//TweenLite.delayedCall(5, function (){MainNavi.setMenu();});

		showCopy();

		DTSite.siteStarted = true;

		var url = document.location.href;

		var pathArray = window.location.pathname.split( '/' );

		var section = pathArray[3];

		var product = pathArray[4];

		if (product != undefined){
			DTSite.selectedProductURL = product;
		}else{
			DTSite.selectedProductURL = "";
		}

		if (section !== undefined){


			if (section == "homepage"){
				DTSite.selectedMenu = 0;

				DTSite.openedPage = DTSite.homePage;
				DTSite.homePage.startPage(2.5);
			}else if(section == "about"){
				DTSite.openedPage = DTSite.aboutPage;
				//DTSite.aboutPage.startPage(2.5);

				DTSite.selectedMenu = 1;

				if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
					TweenLite.delayedCall(3.0, MainNavi.loadPage);
				}else{
					TweenLite.delayedCall(0.6, MainNavi.loadPage);
				}

			}else if(section == "stage_tv"){
				DTSite.openedPage = DTSite.stagePage;
				//DTSite.stagePage.startPage(2.5);

				DTSite.selectedMenu = 2;

				if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
					TweenLite.delayedCall(3.0, MainNavi.loadPage);
				}else{
					TweenLite.delayedCall(0.6, MainNavi.loadPage);
				}
			}else if(section == "events_fairs"){
				DTSite.openedPage = DTSite.eventsPage;
				//DTSite.eventsPage.startPage(2.5);

				DTSite.selectedMenu = 3;

				if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
					TweenLite.delayedCall(3.0, MainNavi.loadPage);
				}else{
					TweenLite.delayedCall(0.6, MainNavi.loadPage);
				}
			}else if(section == "contact"){
				DTSite.openedPage = DTSite.contactPage;
				//DTSite.contactPage.startPage(2.5);

				DTSite.selectedMenu = 4;

				if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
					TweenLite.delayedCall(3.0, MainNavi.loadPage);
				}else{
					TweenLite.delayedCall(0.6, MainNavi.loadPage);
				}
			}else{

				History.replaceState({state:DTSite.selectedMenu}, "DreamTeam Katarzyna Konkowska ---1---1", DTSite.adressTmp);

				DTSite.openedPage = DTSite.homePage;
				DTSite.homePage.startPage(2.5);
			}

			//MainNavi.loadPage();

		}else{
			DTSite.selectedMenu = 0;

			DTSite.openedPage = DTSite.homePage;
			DTSite.homePage.startPage(2.5);

			History.replaceState({state:DTSite.selectedMenu}, "Digital Ensource", DTSite.adressTmp);
		}


		if (DTSite.mobileSimple){
			if (DTSite.selectedMenu == 0){
				TweenLite.to("#lineNaviM", 0.5, {autoAlpha:0, delay:0, ease:Expo.easeOut, overwrite:"all"});
			}else{
				TweenLite.to("#lineNaviM", 0.5, {autoAlpha:.5, delay:0.5, ease:Expo.easeIn, overwrite:"all"});
			}
		}
		
		MainNavi.setMenu();
		
		if (DTSite.bg) DTSite.bg.startBG();
	}

	this.addHistory = true;



	this.progressShow = function(progress){
		//console.log(progress);

		if (DTSite.mobileSimple == false && DTSite.webGLReady == true) {
			TweenLite.to(DTSite.bg.planeBG4.position, 1, {x:-3150 + progress*3150});
		}else{

		}
	}
}

$(function() {

	var cookieSnd = readCookie("dt_soundOn");
	
	if (cookieSnd != "false"){
		DTSite.musicOn = true;
	}else{
		DTSite.musicOn = false;
	}

	DTSite.webGLReady = Detector.webgl;

	DTSite.mobileSimple = false;
	DTSite.mobileVersion = false;

	DTSite.bgContainer = document.getElementById('bgThree');

	DTSite.threeContainer = document.getElementById('threeCanvas');

	DTSite.titlesContainer = document.getElementById("titlesContainer");

	DTSite.logoContainer = document.getElementById("logoContainer");

	DTSite.scrollContainer = document.getElementById("scrollContainer");

	DTSite.scrollDown = document.getElementById("scrollDown");

	DTSite.navPrev = document.getElementById("prevC");
	DTSite.navNext = document.getElementById("nextC");

	DTSite.navPrevD = document.getElementById("prevProjects");
	DTSite.navNextD = document.getElementById("nextProjects");
	
	DTSite.navPrevB = document.getElementById("prevProjectsB");
	DTSite.navNextB = document.getElementById("nextProjectsB");


	if (mobile == true && tablet == true){
		DTSite.mobileSimple = false;
		DTSite.mobileVersion = true;

		DTSite.siteTitles = DTSite.siteTitlesT;

		//FastClick.attach(document.body);
	}
	
	if (mobile == true && tablet == false){
		DTSite.mobileSimple = true;
		DTSite.mobileVersion = true;

		DTSite.siteTitles = DTSite.siteTitlesM;

		//FastClick.attach(document.body);
	}
	
	deviceDetectReady();
	
	onWindowResize();
});

function disableMusic(e){
	TweenLite.to(DTSite, 2, {globalVolume:0, ease:Sine.easeIn, onUpdate:setVolumeCreateJS});
}

function enableMusic(e){
	if (DTSite.musicOn){
		TweenLite.to(DTSite, 2, {globalVolume:0.5, ease:Sine.easeOut, onUpdate:setVolumeCreateJS});
	}
}

function setVolumeCreateJS(){
	createjs.Sound.setVolume(DTSite.globalVolume);
}

function getDevicePixelRatio (){
    var pixelRatio = 1; // just for safety
    if('deviceXDPI' in screen){ // IE mobile or IE
        pixelRatio = screen.deviceXDPI / screen.logicalXDPI;
    } else if (window.hasOwnProperty('devicePixelRatio')){ // other devices
        pixelRatio = window.devicePixelRatio;
    }
    return pixelRatio ;
}

function deviceDetectReady(){
	
	DTSite.devicePixelRatio = getDevicePixelRatio();

	if (!DTSite.mobileSimple){
		DTSite.scrollStage = new createjs.Stage(DTSite.scrollContainer);

		DTSite.scrollStage.scaleX = DTSite.devicePixelRatio;
		DTSite.scrollStage.scaleY = DTSite.devicePixelRatio;

		DTSite.scrollStage.update();

		if (!DTSite.mobileVersion){
			DTSite.scrollIco = new lib.strzalka2();
			DTSite.scrollIco.scaleX = 1.45;
			DTSite.scrollIco.scaleY = 1.45;
			DTSite.scrollIco.rotation = -90;
			DTSite.scrollIco.x = 3;
			DTSite.scrollIco.y = 50;

			DTSite.scrollIco.gotoAndStop(0);
		}

		DTSite.titlesContainerIns = new createjs.Container();

		DTSite.navPrevStage = new createjs.Stage(DTSite.navPrev);
		
		DTSite.navPrevStage.scaleX = DTSite.devicePixelRatio;
		DTSite.navPrevStage.scaleY = DTSite.devicePixelRatio;

		DTSite.navPrevStage.update();


		DTSite.navNextStage = new createjs.Stage(DTSite.navNext);

		DTSite.navNextStage.scaleX = DTSite.devicePixelRatio;
		DTSite.navNextStage.scaleY = DTSite.devicePixelRatio;

		DTSite.navNextStage.update();


		DTSite.titlesStage = new createjs.Stage(DTSite.titlesContainer);
		
		DTSite.titlesStage.scaleX = DTSite.devicePixelRatio;
		DTSite.titlesStage.scaleY = DTSite.devicePixelRatio;

		DTSite.titlesStage.addChild(DTSite.titlesContainerIns)

		DTSite.titlesStage.update();

		DTSite.logoMini = new lib.dtLogo2();
		DTSite.logoMini.scaleX = 0.285;
		DTSite.logoMini.scaleY = 0.285;

		DTSite.logoMini.gotoAndStop(0);
	}

	window.addEventListener( 'resize', onWindowResize, false );
	
	if (!DTSite.mobileVersion){

			if (window.addEventListener) {
				window.addEventListener("blur", disableMusic, false);
				window.addEventListener("focus", enableMusic, false);
			}

			$("body").on("mousewheel DOMMouseScroll", onMouseWheel);
			//$("body").on("keydown", onKeyDown);

			window.addEventListener("mousemove", mouseMove, false);

			//TweenLite.ticker.fps(30);
			//TweenLite.ticker.addEventListener("tick", stageUpdateAll);

			//createjs.Ticker.setFPS(30);
			createjs.Ticker.setFPS(30);
			createjs.Ticker.addEventListener("tick", stageUpdateAll);

			History.Adapter.bind(window,'statechange', getHistory);

			setUpSite();

			//renderThree();

			AssetsLoader.loadWWW();

	}else{
		if (!DTSite.mobileSimple){
			window.addEventListener("touchmove", touchMove, false);

			//TweenLite.ticker.fps(24);
			//TweenLite.ticker.addEventListener("tick", stageUpdateAll);

			createjs.Ticker.setFPS(24);
			createjs.Ticker.addEventListener("tick", stageUpdateAll);

			History.Adapter.bind(window,'statechange', getHistory);

			setUpSite();

			//renderThree();

			AssetsLoader.loadWWW();
		}else{
			document.getElementById("naviMain").style.display = "none";
			document.getElementById("sndContainer").style.display = "none";
			document.getElementById("copyDT").style.display = "none";
			document.getElementById("clickSound").style.display = "none";
			document.getElementById("fbIco").style.display = "none";

			document.getElementById("lineNaviM").style.display = "block";

			createjs.Ticker.setFPS(20);
			createjs.Ticker.addEventListener("tick", stageUpdateAll);

			//TweenLite.ticker.fps(18);
			//TweenLite.ticker.addEventListener("tick", stageUpdateAll);

			/*createjs.Ticker.setFPS(22);
			createjs.Ticker.addEventListener("tick", stageUpdateAll);*/

			History.Adapter.bind(window,'statechange', getHistory);

			setUpSite();

			AssetsLoader.loadWWW();
		}
	}

}

function touchMove(event){

}

function getHistory() {

	if (DTSite.changePageHistory){

		var State = History.getState();

		if (State.data.state == 0){

	    	DTSite.selectedMenu = -1;
	    	$("#logoContainer").trigger("click");

	    }else if (State.data.state == 1){

	    	DTSite.selectedMenu = -1;
	    	$("#roll1").trigger("mouseover");
	    	$("#roll1").trigger("click");

	    }else if(State.data.state == 2){

	    	DTSite.selectedMenu = -1;
	    	$("#roll2").trigger("mouseover");
	    	$("#roll2").trigger("click");

	    }else if(State.data.state == 3){

	    	DTSite.selectedMenu = -1;
	    	$("#roll3").trigger("mouseover");
	    	$("#roll3").trigger("click");

	    }else if(State.data.state == 4){

	    	DTSite.selectedMenu = -1;
	    	$("#roll4").trigger("mouseover");
	    	$("#roll4").trigger("click");

	    }

	}

	DTSite.changePageHistory = true;
}

function onMouseWheel(event) {
	if (!DTSite.siteStarted) return;

	//return;

	var delta = 0;

	var event = event.originalEvent;

    if (!event) /* For IE. */
            event = window.event;
    if (event.wheelDelta) { /* IE/Opera. */
            delta = event.wheelDelta/60;
    } else if (event.detail) { /** Mozilla case. */
            /** In Mozilla, sign of delta is different than in IE.
             * Also, delta is multiple of 3.
             */
            delta = -event.detail/3;
    }

    if (Math.abs(delta) < 0.5) return;

    /** If delta is nonzero, handle it.
     * Basically, delta is now positive if wheel was scrolled up,
     * and negative, if wheel was scrolled down.
     */
    if (delta)
            handle(delta);
    /** Prevent default actions caused by mouse wheel.
     * That might be ugly, but we handle scrolls somehow
     * anyway, so don't bother here..
     */
    if (event.preventDefault)
            event.preventDefault();
	event.returnValue = false;

	/*var e = e.originalEvent;
    var delta = e.wheelDelta>0||e.detail<0?1:-1;
	
	e.preventDefault();	

	if (PWSite.activeChapter) PWSite.activeChapter.changePage(delta);*/

}

function handle(delta) {

	if (DTSite.changePageInProgress) return;

	var delta_ = delta>0?-1:1;

	//console.log("DTSite.selectedMenu ", DTSite.selectedMenu);

	if (DTSite.selectedMenu == 2 || DTSite.selectedMenu == 3 || DTSite.selectedMenu == 5 || DTSite.selectedMenu == 6){

		if (DTSite.openedPage.projectVisible){

			//console.log("OPENED PROJECT");

	    	if (delta_ > 0){
	    		$("#nextPhoto").trigger("click");
	    	}else{
	    		$("#prevPhoto").trigger("click");
	    	}

	    	DTSite.changePageInProgress = true;

	    	TweenLite.delayedCall(0.5, function(){ DTSite.changePageInProgress = false;} );

	    	return;

	    }else{

	    	if (delta_ > 0){
	    		$(DTSite.navNextB).trigger("click");
	    	}else{
	    		$(DTSite.navPrevB).trigger("click");
	    	}

	    	DTSite.changePageInProgress = true;

	    	TweenLite.delayedCall(1, function(){ DTSite.changePageInProgress = false;} );

	    	return;

	    }
    }

    if(DTSite.selectedMenu != 0){
    	DTSite.selectedMenu += delta_;
    }else{
    	if (delta_ > 0){
    		DTSite.selectedMenu += delta_;
    	}else{
    		return;
    	}
    }

    if (DTSite.selectedMenu == 0){

    	DTSite.selectedMenu = -1;
    	$("#logoContainer").trigger("click");

    }else if (DTSite.selectedMenu == 1){

    	DTSite.selectedMenu = -1;
    	$("#roll1").trigger("mouseover");
    	$("#roll1").trigger("click");

    }else if(DTSite.selectedMenu == 2){

    	DTSite.selectedMenu = -1;
    	$("#roll2").trigger("mouseover");
    	$("#roll2").trigger("click");

    }else if(DTSite.selectedMenu == 3){

    	DTSite.selectedMenu = -1;
    	$("#roll3").trigger("mouseover");
    	$("#roll3").trigger("click");

    }else if(DTSite.selectedMenu == 4){

    	DTSite.selectedMenu = -1;
    	$("#roll4").trigger("mouseover");
    	$("#roll4").trigger("click");

    }

    DTSite.changePageInProgress = true;

  // TweenLite.delayedCall(1, function(){ DTSite.changePageInProgress = false;} );
}

function mouseMove(ev) {
    if (DetectIt.isIE) {
        DTSite.tempX = ev.clientX + document.body.scrollLeft;
        DTSite.tempY = ev.clientY + document.body.scrollTop
    } else {
        DTSite.tempX = ev.pageX;
        DTSite.tempY = ev.pageY
    } if (DTSite.tempX < 0) DTSite.tempX = 0;
    if (DTSite.tempY < 0) DTSite.tempY = 0;
}

function setUpSite(){

	DTSite.svgElement = new SVGElements();

	DTSite.bg = new BgDreamTeam();

	DTSite.homePage = new HomePage();
	DTSite.aboutPage = new AboutPage();

	if (!DTSite.mobileSimple){
		DTSite.eventsPage = new EventsPage();
		DTSite.stagePage = new StagePage();
	}else{
		DTSite.eventsPage = new EventsPageM();
		DTSite.stagePage = new StagePageM();
	}

	DTSite.contactPage = new ContactPage();
}

function stageUpdateAll(){

	DTSite.counterRender += 1;

	if (DTSite.mobileSimple == false && DTSite.webGLReady == true) DTSite.bg.update();

	if (DTSite.updateTitleStage) {
		DTSite.titlesStage.update();

		DTSite.updateTitleStage = false;
	}

	if (DTSite.updateNavNextStage) {
		DTSite.navNextStage.update();

		//console.log("DTSite.navNextStage");

		DTSite.updateNavNextStage = false;
	}

	//console.log(DTSite.openedPage.nextPosition);

	if (DTSite.updateNavPrevStage) {
		DTSite.navPrevStage.update();

		//console.log("DTSite.navPrevStage");
		DTSite.updateNavPrevStage = false;
	}

	if(DTSite.openedPage){
		DTSite.openedPage.updateMcPos();

		//DTSite.openedPage = false;
	}

	if(DTSite.updateScrollIco){
		DTSite.scrollStage.update();

		DTSite.updateScrollIco = false;
	}
	//console.log(this.homePageTitle.currentframe);

	if (!DTSite.mobileVersion){
		if (DTSite.soundStage) DTSite.soundStage.update();
	}

}

function renderThree(){
	requestAnimationFrame(renderThree);

	if (DTSite.bg) DTSite.bg.update();
}

function changePage(){
	if(DTSite.openedPage){
		DTSite.openedPage.endPage();
	}

	if (DTSite.mobileSimple){
		if (DTSite.selectedMenu == 0){
			TweenLite.to("#lineNaviM", 0.5, {autoAlpha:0, delay:0, ease:Expo.easeOut, overwrite:"all"});
		}else{
			TweenLite.to("#lineNaviM", 0.5, {autoAlpha:.5, delay:0.5, ease:Expo.easeIn, overwrite:"all"});
		}
	}

	DTSite.changePageInProgress = true;

}

function startPage(){
	if (DTSite.selectedMenu == 1){
		$("#homeHolder").css("display", "none");
		$("#titlesContainer").css("display", "none");
		$("#logoContainer").css("display", "block");
		
		DTSite.aboutPage.startPage();
		DTSite.openedPage = DTSite.aboutPage;
	}else if(DTSite.selectedMenu == 2){
		$("#homeHolder").css("display", "none");
		$("#titlesContainer").css("display", "none");
		$("#logoContainer").css("display", "block");

		DTSite.stagePage.startPage();
		DTSite.openedPage = DTSite.stagePage;
	}else if(DTSite.selectedMenu == 3){
		$("#homeHolder").css("display", "none");
		$("#titlesContainer").css("display", "none");
		$("#logoContainer").css("display", "block");

		DTSite.eventsPage.startPage();
		DTSite.openedPage = DTSite.eventsPage;
	}else if(DTSite.selectedMenu == 4){
		$("#homeHolder").css("display", "none");
		$("#titlesContainer").css("display", "none");
		$("#logoContainer").css("display", "block");

		DTSite.contactPage.startPage();
		DTSite.openedPage = DTSite.contactPage;
	}else if(DTSite.selectedMenu == 0){
		$("#logoContainer").css("display", "block");
		$("#titlesContainer").css("display", "none");

		DTSite.homePage.startPage(0.3);
		DTSite.openedPage = DTSite.homePage;

		$("#homeHolder").css('display', 'block');
			var $all_msg = $('#homeHolder .title');
			  //get a list of letters from the welcome text
			  var $wordList = $('#homeHolder .title').text().split("");
			  //clear the welcome text msg
			  $('#homeHolder .title').text("");
			  //loop through the letters in the $wordList array
			  $.each($wordList, function(idx, elem) {
			    //create a span for the letter and set opacity to 0
			    var newEL = $("<span/>").text(elem).css({
			      opacity: 0
			    });
			    //append it to the welcome message
			    newEL.appendTo($all_msg);
			    //set the delay on the animation for this element
			    newEL.delay(idx * 70);
			    //animate the opacity back to full 1
			    newEL.animate({
			      opacity: 1
			    }, 1100);
			  });
	}
	TweenLite.delayedCall(1, function(){ DTSite.changePageInProgress = false;} );
}

function setLogoPosition(){
	DTSite.logoMini.gotoAndStop(DTSite.logoPosition);
	DTSite.updateTitleStage = true;
}

function showCopy(){
	if (!DTSite.mobileSimple) TweenLite.to("#copyDT", 0.5, {opacity:1, ease:Sine.easeOut, delay:1})
}

function setUpLogoMini(){
	if (DTSite.mobileSimple == false){
		DTSite.logoMini.scaleX = 0.285;
		DTSite.logoMini.scaleY = 0.285;
		DTSite.logoMini.x = 30;
		DTSite.logoMini.y = 20;


		$("#logoContainer").css("width", 225);
		$("#logoContainer").css("height", 55);

		$("#logoContainer").css("left", 30);
		$("#logoContainer").css("top", 20);

		DTSite.titlesStage.addChild(DTSite.logoMini);
	}else{

		logoResize();

	}
}

function logoResize() {
	if (DTSite.mobileSimple == true){
		var width2 = DTSite.browser_width - 150;

		var scaleX = width2/402;

		var height2 = parseInt(scaleX * 87);

		if (height2 > 45){
			height2 = 45;

			width2 = parseInt((height2/87) * 402);
		}

		$("#logoM").css("width", width2);
		$("#logoM").css("height", height2);

		$("#logoM").css("left", parseInt((DTSite.browser_width - width2)/2));

		$("#logoM").css("top", parseInt((64 - height2)/2));

		$("#logoContainer").css("width", width2);
		$("#logoContainer").css("height", height2);

		$("#logoContainer").css("left", parseInt((DTSite.browser_width - width2)/2));
		$("#logoContainer").css("top", parseInt((64 - height2)/2));
	}
}

function onWindowResize( event ) {

	DTSite.devicePixelRatio = getDevicePixelRatio();

	DTSite.browser_width = $(window).innerWidth();
	DTSite.browser_height = window.innerHeight ? window.innerHeight : $(window).height();

	var halfWidth = DTSite.browser_width / 2;
	var halfHeight = DTSite.browser_height / 2;

	naviMain.style.left = halfWidth - 415 +"px";

	naviMain.style.bottom = "63px";

	DTSite.titleContinerW = 1220;
	DTSite.titleContinerH = 250;

	DTSite.scrollContainer.width = 50 * DTSite.devicePixelRatio;
	DTSite.scrollContainer.height = 60 * DTSite.devicePixelRatio;


	DTSite.scrollContainer.style.width = 50 + "px";
	DTSite.scrollContainer.style.height = 60 + "px";

	DTSite.logoContainer.style.width = 2250 + "px";
	DTSite.logoContainer.style.height = 55 + "px";

	if (!DTSite.mobileSimple){
		var titlesCont = DTSite.titlesContainer;

		DTSite.titlesContainer.width = DTSite.browser_width * DTSite.devicePixelRatio;
		DTSite.titlesContainer.height = DTSite.browser_height * DTSite.devicePixelRatio;

		DTSite.titlesContainer.style.width = DTSite.browser_width + "px";
		DTSite.titlesContainer.style.height = DTSite.browser_height + "px";

		DTSite.titlesContainer.style.left = "0px";
		DTSite.titlesContainer.style.top = "0px";

		DTSite.navPrev.width = 40 * DTSite.devicePixelRatio;
		DTSite.navPrev.height = 32 * DTSite.devicePixelRatio;
		DTSite.navPrev.style.width = 40 + "px";
		DTSite.navPrev.style.height = 32 + "px";

		DTSite.navNext.width = 40 * DTSite.devicePixelRatio;
		DTSite.navNext.height = 32 * DTSite.devicePixelRatio;
		DTSite.navNext.style.width = 40 + "px";
		DTSite.navNext.style.height = 32 + "px";
	}

	DTSite.widthMin = 1300;
	DTSite.heightMin = 1000;

	var scaleX = 1;
	DTSite.scaleY = 1;

	var scale = 1;

	if (DTSite.widthMin > DTSite.browser_width){
		scaleX = DTSite.browser_width/DTSite.widthMin;
	}

	if (DTSite.heightMin > DTSite.browser_height){
		DTSite.scaleY = DTSite.browser_height/DTSite.heightMin;
	}

	DTSite.scale = (scaleX > DTSite.scaleY) ? DTSite.scaleY : scaleX;


	DTSite.widthMin2 = 1920;
	DTSite.heightMin2 = 1000;

	var scaleX2 = 1;
	DTSite.scaleContainerH = 1;


	DTSite.scaleContainerW = DTSite.browser_width/DTSite.widthMin2;

	DTSite.scaleContainerH = DTSite.browser_height/DTSite.heightMin2;


	$("#sndContainer").css("right", parseInt(27* DTSite.scaleContainerW));
	$("#clickSound").css("right", parseInt(27* DTSite.scaleContainerW));
	$("#fbIco").css("right", parseInt(33* DTSite.scaleContainerW));

	DTSite.scaleCont = (DTSite.scaleContainerW > DTSite.scaleContainerH) ? DTSite.scaleContainerH : DTSite.scaleContainerW;



	if (DTSite.openedPage) {
		DTSite.openedPage.resize();
	}

	if (DTSite.bg) DTSite.bg.updateSize();

	DTSite.scrollDown.style.left = parseInt((DTSite.browser_width / 2) - 60) +"px";

	if (!DTSite.mobileSimple){
		DTSite.titlesStage.update();
		//DTSite.logoStage.update();
		DTSite.navNextStage.update();
		DTSite.navPrevStage.update();
		DTSite.scrollStage.update();
	}
}

var DetectIt = new function () {
	this.msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
	this.isTouch = (( "ontouchstart" in window ) || this.msGesture || window.DocumentTouch && document instanceof DocumentTouch);
	this.isMouse = !! ("onmousemove" in window);
	this.isMobile = detectmob();
	this.landscapeOrientation = window.innerWidth / window.innerHeight > 1;
	var ua = navigator.userAgent.toLowerCase(),
		re = new RegExp("msie ([0-9]{1,}[.0-9]{0,})");
	this.isTablet = device.tablet();
	this.isIpad = device.ipad();
	this.isOpera = !! window.opera || ua.indexOf("opera") >= 0;
	this.isFirefox = typeof InstallTrigger !== "undefined";
	this.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0;
	this.isChrome = !! window.chrome;
	this.isIE = false;
	this.isTriangle = true;
	this.ieVersion = ie_ver();
	//if (re.exec(ua) != null) this.ieVersion = parseInt(RegExp.$1);
};

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
};

function ie_ver(){  
    var iev=0;
    var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
    var trident = !!navigator.userAgent.match(/Trident\/7.0/);
    var rv=navigator.userAgent.indexOf("rv:11.0");

    if (ieold) iev=new Number(RegExp.$1);
    if (navigator.appVersion.indexOf("MSIE 10") != -1) iev=10;
    if (trident&&rv!=-1) iev=11;

    return iev;         
}

function queryParameters () {
    var currUrl = document.URL,
	    newUrl;
	if (currUrl.charAt(currUrl.length - 1) === '/') {
	    newUrl = currUrl.slice(0, currUrl.lastIndexOf('/'));
	    newUrl = newUrl.slice(newUrl.lastIndexOf('/') + 1, newUrl.length);
	} else {
	    newUrl = currUrl.slice(currUrl.lastIndexOf('/') + 1, currUrl.length);
	}

    return newUrl;
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
};
var MainNavi = new function () {

	this.p1;
	this.p2;
	this.p3;
	this.p4;
	this.p5;
	this.p6;
	this.p7;
	this.p8;
	this.p9;

	this.setMenu = function() {

		this.setMainNavi();
		this.setSndIco();

		if (DTSite.mobileSimple == false && DTSite.webGLReady == true){
			TweenLite.delayedCall(4,this.animateMainNavi);

			TweenLite.delayedCall(4.0, this.addInteractive, [this]);
		}else{
			TweenLite.delayedCall(0.5,this.animateMainNavi);

			TweenLite.delayedCall(1, this.addInteractive, [this]);
		}
	}

	this.animateMainNavi = function() {

		if (!DTSite.mobileSimple){
			var l1 = document.getElementById("line1");
			var l2 = document.getElementById("line2");
			var l3 = document.getElementById("line3");

			var lineLeft = document.getElementById("lineLeft");
			var lineRight = document.getElementById("lineRight");
			var lineTop = document.getElementById("lineTop");
			var lineBottom = document.getElementById("lineBottom");

			var tN1 = document.getElementById("tN1");
			var tN2 = document.getElementById("tN2");
			var tN3 = document.getElementById("tN3");
			var tN4 = document.getElementById("tN4");

			TweenLite.to("#fbIco", 1, {autoAlpha:1, ease: Power4.easeOut, overwrite: "all"});

			TweenLite.to(tN1, 0.4, {y:0, ease:Circ.easeOut, delay:0.4});
			TweenLite.to(tN2, 0.4, {y:0, ease:Circ.easeOut, delay:0.6});
			TweenLite.to(tN3, 0.4, {y:0, ease:Circ.easeOut, delay:0.8});
			TweenLite.to(tN4, 0.4, {y:0, ease:Circ.easeOut, delay:1});

			TweenLite.to(l1, 0.8, {scaleY:1, ease:Power4.easeOut, delay:0.4, transformOrigin: "0% 100%"});
			TweenLite.to(l2, 0.8, {scaleY:1, ease:Power4.easeOut, delay:0.6, transformOrigin: "0% 100%"});
			TweenLite.to(l3, 0.8, {scaleY:1, ease:Power4.easeOut, delay:0.8, transformOrigin: "0% 100%"});

			TweenLite.to(lineLeft, 1, {scaleY:1, ease:Power4.easeOut, delay:0, transformOrigin: "0% 100%"});
			TweenLite.to(lineRight, 1, {scaleY:1, ease:Power4.easeOut, delay:0.8, transformOrigin: "0% 100%"});
			TweenLite.to(lineTop, 1, {scaleX:1, ease:Power4.easeInOut, delay:0.3, transformOrigin: "0% 0%"});
			TweenLite.to(lineBottom, 1, {scaleX:1, ease:Power4.easeInOut, delay:0, transformOrigin: "0% 0%"});

			TweenLite.to("#overBg", 0.5, {x:(DTSite.selectedMenu - 1)*207, delay:1, ease: Power4.easeOut});
			
			TweenLite.to("#txtOverN", 0.9, {x:(DTSite.selectedMenu - 1)*208, delay:1, ease: Power4.easeOut});

			TweenLite.to("#txtOverN2", 0.8, {x:-(DTSite.selectedMenu - 1)*208, y:0, z:0, transformPerspective:100, transformOrigin:"104 55% 50%", delay:1, ease: Power4.easeOut});

			// TweenLite.to("#txtOverN2123", 0.8, {x:-(DTSite.selectedMenu - 1)*208, y:0, z:0, transformPerspective:100, transformOrigin:"104 55% 50%", delay:1, ease: Power4.easeOut});
			
			$("#homeHolder").css('display', 'block');
			var $all_msg = $('#homeHolder .title');
			  //get a list of letters from the welcome text
			  var $wordList = $('#homeHolder .title').text().split("");
			  //clear the welcome text msg
			  $('#homeHolder .title').text("");
			  //loop through the letters in the $wordList array
			  $.each($wordList, function(idx, elem) {
			    //create a span for the letter and set opacity to 0
			    var newEL = $("<span/>").text(elem).css({
			      opacity: 0
			    });
			    //append it to the welcome message
			    newEL.appendTo($all_msg);
			    //set the delay on the animation for this element
			    newEL.delay(idx * 70);
			    //animate the opacity back to full 1
			    newEL.animate({
			      opacity: 1
			    }, 1100);
			  });
			// alert("test123");

			$("#logoContainer").css('display', 'block');
		}else{
			$("#mobileNaviBtn").css("display", "block");

			var mobileCont2 = document.getElementById("mobileContent2");

			$("#scrollingSection2").css("height", (4 * 100) + 100);

			DTSite.myScroll2 = new IScroll(mobileCont2,
			{ 
				scrollX:false,
				click:false,
				bounceTime: 800,
				deceleration: 0.001
			});
		}

	}

	this.setMainNavi = function() {

		//var fbIco = document.getElementById("fbIco");
		if (!DTSite.mobileSimple){
			var l1 = document.getElementById("line1");
			var l2 = document.getElementById("line2");
			var l3 = document.getElementById("line3");

			var lineLeft = document.getElementById("lineLeft");
			var lineRight = document.getElementById("lineRight");
			var lineTop = document.getElementById("lineTop");
			var lineBottom = document.getElementById("lineBottom");

			var tN1 = document.getElementById("tN1");
			var tN2 = document.getElementById("tN2");
			var tN3 = document.getElementById("tN3");
			var tN4 = document.getElementById("tN4");

			TweenLite.to(l1, 0, {scaleY:0, ease:Circ.easeOut, delay:0});
			TweenLite.to(l2, 0, {scaleY:0, ease:Circ.easeOut, delay:0});
			TweenLite.to(l3, 0, {scaleY:0, ease:Circ.easeOut, delay:0});

			TweenLite.to(lineLeft, 0, {scaleY:0, ease:Circ.easeOut, delay:0});
			TweenLite.to(lineRight, 0, {scaleY:0, ease:Circ.easeOut, delay:0});
			TweenLite.to(lineTop, 0, {scaleX:0, ease:Circ.easeOut, delay:0});
			TweenLite.to(lineBottom, 0, {scaleX:0, ease:Circ.easeOut, delay:0});

			TweenLite.to(tN1, 0, {y:20, ease:Circ.easeOut, delay:0});
			TweenLite.to(tN2, 0, {y:20, ease:Circ.easeOut, delay:0});
			TweenLite.to(tN3, 0, {y:20, ease:Circ.easeOut, delay:0});
			TweenLite.to(tN4, 0, {y:20, ease:Circ.easeOut, delay:0});

			TweenLite.to("#overBg", 0, {x:- 1*208, delay:0, ease: Power4.easeOut, overwrite: "all"});
			
			TweenLite.to("#txtOverN", 0, {x:- 1*208, delay:0, ease: Power4.easeOut, overwrite: "all"});

			TweenLite.to("#txtOverN2", 0, {x:- 1*208, y:0, z:0, transformPerspective:100, transformOrigin:"104 55% 50%", delay:0, ease: Power4.easeOut, overwrite: "all"});


			naviMain.style.visibility = "visible";
			naviMain.style.display = "block";
		}

	}

	this.addInteractive = function (ref){

		//console.log("DTSite.mobileSimple", DTSite.mobileSimple);

		if (!DTSite.mobileSimple){
			var roll1 = document.getElementById("roll1");
			var roll2 = document.getElementById("roll2");
			var roll3 = document.getElementById("roll3");
			var roll4 = document.getElementById("roll4");

			roll1.style.display = "block";
			roll2.style.display = "block";
			roll3.style.display = "block";
			roll4.style.display = "block";

			var logoContainer = document.getElementById("logoContainer");

			roll1.setAttribute("data-id", 1);
			roll2.setAttribute("data-id", 2);
			roll3.setAttribute("data-id", 3);
			roll4.setAttribute("data-id", 4);
			logoContainer.setAttribute("data-id", 0);

			if (!DTSite.mobileVersion){
				$("#roll1").on("mouseover", ref.mouseOver);
			    $("#roll2").on("mouseover", ref.mouseOver);
			    $("#roll3").on("mouseover", ref.mouseOver);
			    $("#roll4").on("mouseover", ref.mouseOver);

			    $("#roll1").on("mouseout", ref.mouseOut);
			    $("#roll2").on("mouseout", ref.mouseOut);
			    $("#roll3").on("mouseout", ref.mouseOut);
			    $("#roll4").on("mouseout", ref.mouseOut);

			    $("#roll1").on("click", ref.clickIt);
			    $("#roll2").on("click", ref.clickIt);
			    $("#roll3").on("click", ref.clickIt);
			    $("#roll4").on("click", ref.clickIt);

			    $("#logoContainer").on("click", ref.clickIt);

			    $("#fbIco").on("click", ref.clickFB);
			}else{
				$("#roll1").on("mouseover", ref.mouseOver);
			    $("#roll2").on("mouseover", ref.mouseOver);
			    $("#roll3").on("mouseover", ref.mouseOver);
			    $("#roll4").on("mouseover", ref.mouseOver);

			    $("#roll1").on("mouseout", ref.mouseOut);
			    $("#roll2").on("mouseout", ref.mouseOut);
			    $("#roll3").on("mouseout", ref.mouseOut);
			    $("#roll4").on("mouseout", ref.mouseOut);
			   

				if (window.navigator.msPointerEnabled) {
				    $("#roll1").on("click", ref.clickIt.bind(ref));
				    $("#roll2").on("click", ref.clickIt.bind(ref));
				    $("#roll3").on("click", ref.clickIt.bind(ref));
				    $("#roll4").on("click", ref.clickIt.bind(ref));

				    $("#logoContainer").on("click", ref.clickIt.bind(ref));

				    $("#fbIco").on("click", ref.clickFB.bind(ref));
				}else{
					$("#roll1").on("tap", ref.clickIt);
				    $("#roll2").on("tap", ref.clickIt);
				    $("#roll3").on("tap", ref.clickIt);
				    $("#roll4").on("tap", ref.clickIt);

				    $("#logoContainer").on("tap", ref.clickIt);

				    $("#fbIco").on("tap", ref.clickFB);
				}

			}
		}else{

			var roll1 = document.getElementById("rollM1");
			var roll2 = document.getElementById("rollM2");
			var roll3 = document.getElementById("rollM3");
			var roll4 = document.getElementById("rollM4");

			roll1.style.display = "inline-block";
			roll2.style.display = "inline-block";
			roll3.style.display = "inline-block";
			roll4.style.display = "inline-block";

			var logoContainer = document.getElementById("logoContainer");

			roll1.setAttribute("data-id", 1);
			roll2.setAttribute("data-id", 2);
			roll3.setAttribute("data-id", 3);
			roll4.setAttribute("data-id", 4);
			logoContainer.setAttribute("data-id", 0);


			if (window.navigator.msPointerEnabled) {
				$("#mobileNaviBtn").on("click", ref.clickOpenNavi.bind(ref));
			}else{

				$("#mobileNaviBtn").on("tap", ref.clickOpenNavi);
			}

			if (window.navigator.msPointerEnabled) {

			    $("#rollM1").on("click", ref.clickItM.bind(ref));
			    $("#rollM2").on("click", ref.clickItM.bind(ref));
			    $("#rollM3").on("click", ref.clickItM.bind(ref));
			    $("#rollM4").on("click", ref.clickItM.bind(ref));

			    $("#logoContainer").on("click", ref.clickItM.bind(ref));
			}else{
				$("#rollM1").on("tap", ref.clickItM);
			    $("#rollM2").on("tap", ref.clickItM);
			    $("#rollM3").on("tap", ref.clickItM);
			    $("#rollM4").on("tap", ref.clickItM);

			    $("#logoContainer").on("tap", ref.clickItM);
			}

			TweenLite.to("#mobileNaviBtn", 1.5, {opacity:1, delay:0, ease: Power4.easeInOut, overwrite: "all"});
		}

	}

	this.clickOpenNavi = function(e) {
		if (e != null) e.preventDefault();

		if (!DTSite.mobileMenuVisible){
			$("#navMobile").css("display", "block");
			DTSite.mobileMenuVisible = true;

			DTSite.myScroll2.refresh();

			TweenLite.to("#bgNaviMobile", 0.5, {opacity:1, ease: Power4.easeOut, overwrite:"all"});

			TweenLite.set("#txtM1", {opacity:0, overwrite:"all"});
			TweenLite.set("#txtM2", {opacity:0, overwrite:"all"});
			TweenLite.set("#txtM3", {opacity:0, overwrite:"all"});
			TweenLite.set("#txtM4", {opacity:0, overwrite:"all"});

			TweenLite.to("#txtM1", 1, {opacity:1, ease: Power4.easeOut, delay:0.1});
			TweenLite.to("#txtM2", 1, {opacity:1, ease: Power4.easeOut, delay:0.2});
			TweenLite.to("#txtM3", 1, {opacity:1, ease: Power4.easeOut, delay:0.3});
			TweenLite.to("#txtM4", 1, {opacity:1, ease: Power4.easeOut, delay:0.4});

			TweenLite.to("#hamb1", 1, {rotation:45, y:9, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});
			TweenLite.to("#hamb2", 1, {opacity:0, ease: Power4.easeOut, overwrite:"all"});
			TweenLite.to("#hamb3", 1, {rotation:-45, y:-9, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});

			TweenLite.to("#lineM1", 0, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all"});
			TweenLite.to("#lineM2", 0, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all"});
			TweenLite.to("#lineM3", 0, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all"});

			TweenLite.to("#lineM1", 0.5, {scaleX:1, transformOrigin:"center center", ease: Power4.easeOut, delay:0.1});
			TweenLite.to("#lineM2", 0.5, {scaleX:1, transformOrigin:"center center", ease: Power4.easeOut, delay:0.2});
			TweenLite.to("#lineM3", 0.5, {scaleX:1, transformOrigin:"center center", ease: Power4.easeOut, delay:0.3});

		}else{

			TweenLite.to("#txtM1", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.3});
			TweenLite.to("#txtM2", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.2});
			TweenLite.to("#txtM3", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.1});
			TweenLite.to("#txtM4", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0});

			TweenLite.to("#hamb1", 1, {rotation:0, y:0, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});
			TweenLite.to("#hamb2", 1, {opacity:1, ease: Power4.easeOut, overwrite:"all"});
			TweenLite.to("#hamb3", 1, {rotation:0, y:0, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});

			TweenLite.to("#lineM1", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0.2});
			TweenLite.to("#lineM2", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0.1});
			TweenLite.to("#lineM3", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0});

			DTSite.mobileMenuVisible = false;

			TweenLite.to("#bgNaviMobile", .5, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.3, onComplete:function(){$("#navMobile").css("display", "none");}});
		}
	}

	this.mouseOver = function(e) {

		if (e != null) e.preventDefault();
		var where = parseInt($(this).attr("data-id")) - 1;
		
		//DTSite.dtRoll.play({interrupt: createjs.Sound.INTERRUPT_NONE, offset:0, delay:0, volume:0.2, loop:0, pan:(where - 1.5)/1.5});

		//TweenLite.to("#overBg", 0.2, {scaleX:0.91, scaleY:0.63, opacity:1, ease: Power4.easeOut, overwrite: "all"});

		//TweenLite.to("#overBg", 0.8, {scaleX:1, scaleY:1, opacity:1, ease: Power4.easeInOut, delay:0.2});

		TweenLite.to("#overBg", 0.5, {x:where*207, ease: Power4.easeOut});
		
		TweenLite.to("#txtOverN", 0.8, {x:where*208, ease: Power4.easeOut, overwrite: "all"});

		TweenLite.to("#txtOverN2", 0.9, {x:-where*208, y:0, z:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut, overwrite: "all"});
	}


	this.mouseOut = function(e) {

		if (e != null) e.preventDefault();
		var where = DTSite.selectedMenu - 1;
		
		if (where >= 4){
			where -= 3;
		}

		TweenLite.to("#overBg", 0.5, {x:where*207, ease: Power4.easeOut});
		
		TweenLite.to("#txtOverN", 0.8, {x:where*208, ease: Power4.easeOut, overwrite: "all"});

		TweenLite.to("#txtOverN2", 0.9, {x:-where*208, y:0, z:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut, overwrite: "all"});
	}

	this.clickFB = function(e) {

		if (e != null) e.preventDefault();

		window.open("https://www.facebook.com/DreamTeamKasiaKonkowska");
	}
	
	this.clickItM = function(e) {

		if (e != null) e.preventDefault();

		if (DTSite.loadingProject) return;

		TweenLite.to("#txtM1", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.3});
		TweenLite.to("#txtM2", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.2});
		TweenLite.to("#txtM3", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.1});
		TweenLite.to("#txtM4", 0.3, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0});

		TweenLite.to("#hamb1", 1, {rotation:0, y:0, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});
		TweenLite.to("#hamb2", 1, {opacity:1, ease: Power4.easeOut, overwrite:"all"});
		TweenLite.to("#hamb3", 1, {rotation:0, y:0, ease: Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"});

		TweenLite.to("#lineM1", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0.2});
		TweenLite.to("#lineM2", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0.1});
		TweenLite.to("#lineM3", 0.3, {scaleX:0, ease: Power4.easeOut, transformOrigin:"center center", overwrite:"all", delay:0});

		DTSite.mobileMenuVisible = false;

		TweenLite.to("#bgNaviMobile", .4, {opacity:0, ease: Power4.easeOut, overwrite:"all", delay:0.2, onComplete:function(){$("#navMobile").css("display", "none");}});

		if (parseInt($(this).attr("data-id")) == DTSite.selectedMenu) return;

		DTSite.selectedMenu = parseInt($(this).attr("data-id"));

		var menuNew = DTSite.selectedMenu;
		
		if(DTSite.selectedMenu == 0){

			changePage();

			if (DTSite.selectedMenu != 0){
				setUpLogoMini();

				TweenLite.to("#logoM", 1.3, {autoAlpha:1, delay:0.5});

				//TweenLite.to(DTSite, 1.3, {logoPosition:84, onUpdate:setLogoPosition, delay:0.5, onStart:setUpLogoMini, onComplete:function(){DTSite.updateTitleStage = false;}});
			}else{

				TweenLite.to("#logoM", 0.5, {autoAlpha:0, overwrite:"all"});
				//TweenLite.to(DTSite, 0.5, {logoPosition:0, onUpdate:setLogoPosition, delay:0, onComplete:function(){DTSite.updateTitleStage = false;}});
			}

			TweenLite.killDelayedCallsTo(startPage);

			TweenLite.delayedCall(0.5, startPage);

			DTSite.bg.changeBg();

			if (DTSite.addHistory) {

				DTSite.changePageHistory = false;
				History.pushState({state:menuNew}, "Digital Ensource",  DTSite.adressTmp+DTSite.siteTitles[menuNew].short);
			}
		}else{

			changePage();

			if (menuNew != 0){
				setUpLogoMini();
				
				TweenLite.to("#logoM", 1.3, {autoAlpha:1, delay:0.5});

				//TweenLite.to(DTSite, 1.3, {logoPosition:84, onUpdate:setLogoPosition, delay:0.5, onStart:setUpLogoMini, onComplete:function(){DTSite.updateTitleStage = false;}});
			}else{

				TweenLite.to("#logoM", 0.3, {autoAlpha:0, overwrite:"all"});

				//TweenLite.to(DTSite, 0.5, {logoPosition:0, onUpdate:setLogoPosition, delay:0, onComplete:function(){DTSite.updateTitleStage = false;}});
			}
			MainNavi.loadPage();
		}
	}

	this.clickIt = function(e) {
		$('#stageHolder .title-page').css('display','none');
		if (e != null) e.preventDefault();

		if (DTSite.loadingProject) return;

		//$(this).attr("data-id")

		if (parseInt($(this).attr("data-id")) == DTSite.selectedMenu) return;

		DTSite.selectedMenu = parseInt($(this).attr("data-id"));

		var menuNew = DTSite.selectedMenu;

		if(menuNew == 0){

			changePage();

			if (DTSite.selectedMenu != 0){
				TweenLite.to(DTSite, 1.3, {logoPosition:84, onUpdate:setLogoPosition, delay:0.5, onStart:setUpLogoMini, onComplete:function(){DTSite.updateTitleStage = false;}});
			}else{
				TweenLite.to(DTSite, 0.5, {logoPosition:0, onUpdate:setLogoPosition, delay:0, onComplete:function(){DTSite.updateTitleStage = false;}});
			}

			TweenLite.killDelayedCallsTo(startPage);

			TweenLite.delayedCall(0.5, startPage);

			DTSite.bg.changeBg();

			TweenLite.to("#overBg", 0.2, {x:(menuNew-1)*207, scaleX:0.94, scaleY:0.63, opacity:1, ease: Power4.easeOut, overwrite: "all"});

			TweenLite.to("#overBg", 0.8, {x:(menuNew-1)*207, scaleX:1, scaleY:1, opacity:1, ease: Sine.easeOut, delay:0.2});

			//console.log(menuNew);

			TweenLite.to("#txtOverN", 0.8, {x:(menuNew-1)*208, ease: Power4.easeOut});

			//TweenLite.to("#txtOverN2", 0.2, {x:-(menuNew-1)*208, z:-30, y:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut, overwrite: "all"});
			TweenLite.to("#txtOverN2", 0.9, {x:-(menuNew-1)*208, z:0, y:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut});

			if (DTSite.addHistory) {

				DTSite.changePageHistory = false;
				History.pushState({state:menuNew}, "Digital Ensource",  DTSite.adressTmp+DTSite.siteTitles[menuNew].short);
			}
		}else{

			changePage();

			TweenLite.to("#overBg", 0.2, {x:(menuNew-1)*207, scaleX:0.94, scaleY:0.63, opacity:1, ease: Power4.easeOut, overwrite: "all"});

			TweenLite.to("#overBg", 0.8, {x:(menuNew-1)*207, scaleX:1, scaleY:1, opacity:1, ease: Sine.easeOut, delay:0.2});

			TweenLite.to("#txtOverN", 0.8, {x:(menuNew-1)*208, ease: Power4.easeOut});

			//TweenLite.to("#txtOverN2", 0.2, {x:-(menuNew-1)*208, z:-30, y:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut, overwrite: "all"});
			TweenLite.to("#txtOverN2", 0.9, {x:-(menuNew-1)*208, z:0, y:0, transformPerspective:100, transformOrigin:"104 55% 50%", ease: Power4.easeOut});

			MainNavi.loadPage();
		}
	}

	this.loadPage = function(){
		$.get( DTSite.adressTmp+"inc/"+DTSite.siteTitles[DTSite.selectedMenu].url , function( data ) {

			if (DTSite.mobileSimple){
				$("#scrollingSection").html(data);
			}else{
				$("#www").html(data);
			}

			if (DTSite.mobileSimple){
		        if (DTSite.selectedMenu != 0){

		        	setUpLogoMini();
		        	TweenLite.to("#logoM", 1.3, {autoAlpha:1, delay:0.5});

					//TweenLite.to(DTSite, 1.3, {logoPosition:84, onUpdate:setLogoPosition, delay:0.5, onStart:setUpLogoMini, onComplete:function(){DTSite.updateTitleStage = false;}});
				}else{
					TweenLite.to("#logoM", .5, {autoAlpha:0, delay:0});

					//TweenLite.to(DTSite, 0.5, {logoPosition:0, onUpdate:setLogoPosition, delay:0, onComplete:function(){DTSite.updateTitleStage = false;}});
				}
			}else{
				if (DTSite.selectedMenu != 0){
					TweenLite.to(DTSite, 1.3, {logoPosition:84, onUpdate:setLogoPosition, delay:0.5, onStart:setUpLogoMini, onComplete:function(){DTSite.updateTitleStage = false;}});
				}else{
					TweenLite.to(DTSite, 0.5, {logoPosition:0, onUpdate:setLogoPosition, delay:0, onComplete:function(){DTSite.updateTitleStage = false;}});
				}
			}

			TweenLite.killDelayedCallsTo(startPage);

			TweenLite.delayedCall(0.5, startPage);

			DTSite.bg.changeBg();

			if (DTSite.addHistory) {
				DTSite.changePageHistory = false;

				if (DTSite.selectedProductURL == ""){
					History.pushState({state:DTSite.selectedMenu}, DTSite.siteTitles[DTSite.selectedMenu].title + " Digital Ensource", DTSite.adressTmp+DTSite.siteTitles[DTSite.selectedMenu].short);
				}else{
					History.pushState({state:DTSite.selectedMenu}, DTSite.siteTitles[DTSite.selectedMenu].title + " Digital Ensource", DTSite.adressTmp+DTSite.siteTitles[DTSite.selectedMenu].short + "/"+ DTSite.selectedProductURL);
				}
			}
		});

	}

	this.setSndIco = function() {

		this.sndContainer = document.getElementById("sndContainer");

		var w = 37;
		var h = 20;

		if (!window.devicePixelRatio){
			window.devicePixelRatio = 1;
		}

		this.sndContainer.width = w * window.devicePixelRatio;
		this.sndContainer.height = h * window.devicePixelRatio;
		this.sndContainer.style.width = w + "px";
		this.sndContainer.style.height = h + "px";

		this.p1 = new lib.sndP();
		this.p1.y = 0;
		this.p1.x = 1;

		this.p2 = new lib.sndP();
		this.p2.y = 0;
		this.p2.x = 1*4 + 1;
		
		this.p3 = new lib.sndP();
		this.p3.y = 0;
		this.p3.x = 2*4 + 1;

		this.p4 = new lib.sndP();
		this.p4.y = 0;
		this.p4.x = 3*4 + 1;

		this.p5 = new lib.sndP();
		this.p5.y = 0;
		this.p5.x = 4*4 + 1;

		this.p6 = new lib.sndP();
		this.p6.y = 0;
		this.p6.x = 5*4 + 1;

		this.p7 = new lib.sndP();
		this.p7.y = 0;
		this.p7.x = 6*4 + 1;

		this.p8 = new lib.sndP();
		this.p8.y = 0;
		this.p8.x = 7*4 + 1;

		this.p9 = new lib.sndP();
		this.p9.y = 0;
		this.p9.x = 8*4 + 1;

		this.p1.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p2.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p3.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p4.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p5.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p6.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p7.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p8.p.gotoAndPlay(Math.floor(Math.random()*20));
		this.p9.p.gotoAndPlay(Math.floor(Math.random()*20));

		this.p1.p.scaleY = 0;
		this.p2.p.scaleY = 0;
		this.p3.p.scaleY = 0;
		this.p4.p.scaleY = 0;
		this.p5.p.scaleY = 0;
		this.p6.p.scaleY = 0;
		this.p7.p.scaleY = 0;
		this.p8.p.scaleY = 0;
		this.p9.p.scaleY = 0;


		/*TweenLite.to(p1.p, 0.5, {scaleY:0.2* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p2.p, 0.5, {scaleY:0.31* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p3.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p4.p, 0.5, {scaleY:0.5* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p5.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p6.p, 0.5, {scaleY:0.69* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p7.p, 0.5, {scaleY:0.9* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p8.p, 0.5, {scaleY:0.62* 0.8, ease:Sine.easeOut, delay:1});
		TweenLite.to(p9.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});*/

		//p1.y = 16;
		//p2.y = 16;
		//p3.y = 16;
		//p4.y = 16;
		//p5.y = 16;
		//p6.y = 16;
		//p7.y = 16;
		//p8.y = 16;
		//p9.y = 16;


		DTSite.soundStage = new createjs.Stage(this.sndContainer);

		DTSite.soundStage.addChild(this.p1);
		DTSite.soundStage.addChild(this.p2);
		DTSite.soundStage.addChild(this.p3);
		DTSite.soundStage.addChild(this.p4);
		DTSite.soundStage.addChild(this.p5);
		DTSite.soundStage.addChild(this.p6);
		DTSite.soundStage.addChild(this.p7);
		DTSite.soundStage.addChild(this.p8);
		DTSite.soundStage.addChild(this.p9);

		DTSite.soundStage.scaleX = window.devicePixelRatio;
		DTSite.soundStage.scaleY = window.devicePixelRatio;

		DTSite.soundStage.update();

		//createjs.Ticker.setFPS(30);
		//createjs.Ticker.addEventListener("tick", stage);

		$("#clickSound").on("click", this.clickSound);
	}

	this.startMusicIco = function() {
		if (DTSite.musicOn){

			MainNavi.p1.p.stopIt = false;
			MainNavi.p2.p.stopIt = false;
			MainNavi.p3.p.stopIt = false;
			MainNavi.p4.p.stopIt = false;
			MainNavi.p5.p.stopIt = false;
			MainNavi.p6.p.stopIt = false;
			MainNavi.p7.p.stopIt = false;
			MainNavi.p8.p.stopIt = false;
			MainNavi.p9.p.stopIt = false;

			TweenLite.to(this.p1.p, 0.5, {scaleY:0.2* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p2.p, 0.5, {scaleY:0.31* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p3.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p4.p, 0.5, {scaleY:0.5* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p5.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p6.p, 0.5, {scaleY:0.69* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p7.p, 0.5, {scaleY:0.9* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p8.p, 0.5, {scaleY:0.62* 0.8, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p9.p, 0.5, {scaleY:0.37* 0.8, ease:Sine.easeOut, delay:1});

			TweenLite.to(DTSite.dtMusic, 2, {volume:0.2, ease:Sine.easeOut});

			TweenLite.to(DTSite, 2, {globalVolume:0.5, ease:Sine.easeOut, onUpdate:this.setVolumeCreateJS});
		}else{

			MainNavi.p1.p.stopIt = true;
			MainNavi.p2.p.stopIt = true;
			MainNavi.p3.p.stopIt = true;
			MainNavi.p4.p.stopIt = true;
			MainNavi.p5.p.stopIt = true;
			MainNavi.p6.p.stopIt = true;
			MainNavi.p7.p.stopIt = true;
			MainNavi.p8.p.stopIt = true;
			MainNavi.p9.p.stopIt = true;

			TweenLite.to(this.p1.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p2.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p3.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p4.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p5.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p6.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p7.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p8.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});
			TweenLite.to(this.p9.p, 0.5, {scaleY:0.05, ease:Sine.easeOut, delay:1});

			TweenLite.to(DTSite.dtMusic, 2, {volume:0.2, ease:Sine.easeOut});

			TweenLite.to(DTSite, 0, {globalVolume:0, ease:Sine.easeOut, onUpdate:this.setVolumeCreateJS});
		}
	}

	this.clickSound = function(e) {
		
		if (e != null) e.preventDefault();

		DTSite.musicOn = !DTSite.musicOn;

		if(!DTSite.musicOn){

			createCookie("dt_soundOn", "false");

			MainNavi.p1.p.stopIt = true;
			MainNavi.p2.p.stopIt = true;
			MainNavi.p3.p.stopIt = true;
			MainNavi.p4.p.stopIt = true;
			MainNavi.p5.p.stopIt = true;
			MainNavi.p6.p.stopIt = true;
			MainNavi.p7.p.stopIt = true;
			MainNavi.p8.p.stopIt = true;
			MainNavi.p9.p.stopIt = true;

			TweenLite.to(MainNavi.p1.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p2.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p3.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p4.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p5.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p6.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p7.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p8.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p9.p, 0.3, {scaleY:0.05, ease:Sine.easeOut});

			TweenLite.to(DTSite, 2, {globalVolume:0, ease:Sine.easeIn, onUpdate:MainNavi.setVolumeCreateJS});

		}else{

			createCookie("dt_soundOn", "true");

			MainNavi.p1.p.stopIt = false;
			MainNavi.p2.p.stopIt = false;
			MainNavi.p3.p.stopIt = false;
			MainNavi.p4.p.stopIt = false;
			MainNavi.p5.p.stopIt = false;
			MainNavi.p6.p.stopIt = false;
			MainNavi.p7.p.stopIt = false;
			MainNavi.p8.p.stopIt = false;
			MainNavi.p9.p.stopIt = false;

			MainNavi.p1.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p2.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p3.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p4.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p5.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p6.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p7.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p8.p.gotoAndPlay(Math.floor(Math.random()*20));
			MainNavi.p9.p.gotoAndPlay(Math.floor(Math.random()*20));

			TweenLite.to(MainNavi.p1.p, 0.3, {scaleY:0.2* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p2.p, 0.3, {scaleY:0.31* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p3.p, 0.3, {scaleY:0.37* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p4.p, 0.3, {scaleY:0.5* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p5.p, 0.3, {scaleY:0.37* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p6.p, 0.3, {scaleY:0.69* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p7.p, 0.3, {scaleY:0.9* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p8.p, 0.3, {scaleY:0.62* 0.8, ease:Sine.easeOut});
			TweenLite.to(MainNavi.p9.p, 0.3, {scaleY:0.37* 0.8, ease:Sine.easeOut});

			TweenLite.to(DTSite, 2, {globalVolume:0.5, ease:Sine.easeIn, onUpdate:MainNavi.setVolumeCreateJS});
		}
	}

	this.setVolumeCreateJS = function(){
		createjs.Sound.setVolume(DTSite.globalVolume);
	}

};(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 3,
	height: 20,
	fps: 30,
	color: "#CCCCCC",
	manifest: []
};

// stage content:
(lib.sndP = function() {
	this.initialize();

	// Layer 2
	this.p = new lib.pasek_1();
	this.p.setTransform(0,20);

	this.addChild(this.p);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,10,3,20);


// symbols:
(lib.p = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBkIAAjGIAcAAIAADGg");
	this.shape.setTransform(1.5,-10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-20,3,20);


(lib.pasek_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (this.stopIt){
		
			this.stop();
		}
		
		/*js
		
		if (this.stopIt){
		
			this.stop();
		}
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.instance = new lib.p();
	this.instance.setTransform(1.5,-8,1,1,0,0,0,1.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-10,scaleY:0.99,y:-9.9},0).wait(1).to({scaleY:0.97,y:-9.7},0).wait(1).to({scaleY:0.93,y:-9.2},0).wait(1).to({scaleY:0.86,y:-8.5},0).wait(1).to({scaleY:0.77,y:-7.7},0).wait(1).to({scaleY:0.7,y:-7},0).wait(1).to({scaleY:0.66,y:-6.5},0).wait(1).to({scaleY:0.63,y:-6.3},0).wait(1).to({regY:-8,scaleY:0.63,y:-5},0).wait(1).to({regY:-10,scaleY:0.64,y:-6.3},0).wait(1).to({scaleY:0.68,y:-6.8},0).wait(1).to({scaleY:0.74,y:-7.4},0).wait(1).to({scaleY:0.82,y:-8.1},0).wait(1).to({scaleY:0.88,y:-8.8},0).wait(1).to({scaleY:0.93,y:-9.3},0).wait(1).to({scaleY:0.96,y:-9.6},0).wait(1).to({scaleY:0.99,y:-9.8},0).wait(1).to({scaleY:1,y:-9.9},0).wait(1).to({regY:-8,scaleY:1,y:-8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-20,3,20);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;// JavaScript Document

function SVGElements(){
	this.r = 2 * Math.PI;
}

SVGElements.prototype.fillArc = function(){
	this.arcNaviProjects = d3.svg.arc()
	.innerRadius(10)
	.outerRadius(12)
	//.startAngle(240 * (Math.PI/180));
	
	var svg = d3.select("#selectedNaviArc").append("svg")
	.attr("width", 24)
	.attr("height", 24)
	.append("g").attr("transform", "translate(" + 24 / 2 + "," + 24 / 2 + ")");
	
	this.foregroundArcNavi = svg.append("path")
	.datum({endAngle: 240 * (Math.PI/180), startAngle: 240 * (Math.PI/180)})
	.style("fill", "#FFFFFF")
	.attr("d", this.arcNaviProjects);
}

SVGElements.prototype.fillArc2 = function(){
	this.arcNaviPhotos = d3.svg.arc()
	.innerRadius(10)
	.outerRadius(12)
	//.startAngle(240 * (Math.PI/180));
	
	var svg = d3.select("#selectedNaviArc2").append("svg")
	.attr("width", 24)
	.attr("height", 24)
	.append("g").attr("transform", "translate(" + 24 / 2 + "," + 24 / 2 + ")");
	
	this.foregroundArcNavi2 = svg.append("path")
	.datum({endAngle: 240 * (Math.PI/180), startAngle: 240 * (Math.PI/180)})
	.style("fill", "#FFFFFF")
	.attr("d", this.arcNaviPhotos);
}

function arcTween(transition, newStartAngle, newFinishAngle, what) {

	transition.attrTween("d", function(d) {
	
		// To interpolate between the two angles, we use the default d3.interpolate.
		// (Internally, this maps to d3.interpolateNumber, since both of the
		// arguments to d3.interpolate are numbers.) The returned function takes a
		// single argument t and returns a number between the starting angle and the
		// ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
		// newAngle; and for 0 < t < 1 it returns an angle in-between.
		//var interpolate = d3.interpolate(d.endAngle, newEnd);

		var interpolateStart = d3.interpolate(d.startAngle, newStartAngle);
        var interpolateEnd = d3.interpolate(d.endAngle, newFinishAngle);

		// The return value of the attrTween is also a function: the function that
		// we want to run for each tick of the transition. Because we used
		// attrTween("d"), the return value of this last function will be set to the
		// "d" attribute at every tick. (It's also possible to use transition.tween
		// to run arbitrary code for every tick, say if you want to set multiple
		// attributes from a single function.) The argument t ranges from 0, at the
		// start of the transition, to 1, at the end.
		return function(t) {
		
			// Calculate the current arc angle based on the transition time, t. Since
			// the t for the transition and the t for the interpolate both range from
			// 0 to 1, we can pass t directly to the interpolator.
			//
			// Note that the interpolated angle is written into the element's bound
			// data object! This is important: it means that if the transition were
			// interrupted, the data bound to the element would still be consistent
			// with its appearance. Whenever we start a new arc transition, the
			// correct starting angle can be inferred from the data.
			d.startAngle = interpolateStart(t);
            d.endAngle = interpolateEnd(t);
			
			//console.log("d.startAngle ", d.startAngle);

			//console.log("d.endAngle ", d.endAngle);

			// Lastly, compute the arc path given the updated data! In effect, this
			// transition uses data-space interpolation: the data is interpolated
			// (that is, the end angle) rather than the path string itself.
			// Interpolating the angles in polar coordinates, rather than the raw path
			// string, produces valid intermediate arcs during the transition.
			return what(d);
		};
	});
};

function arcTweenR(transition, newAngle, what) {
	transition.attrTween("d", function(d) {
	
		// To interpolate between the two angles, we use the default d3.interpolate.
		// (Internally, this maps to d3.interpolateNumber, since both of the
		// arguments to d3.interpolate are numbers.) The returned function takes a
		// single argument t and returns a number between the starting angle and the
		// ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
		// newAngle; and for 0 < t < 1 it returns an angle in-between.

		//console.log(d);

		var interpolate = d3.interpolate(d.startAngle, newAngle);

		// The return value of the attrTween is also a function: the function that
		// we want to run for each tick of the transition. Because we used
		// attrTween("d"), the return value of this last function will be set to the
		// "d" attribute at every tick. (It's also possible to use transition.tween
		// to run arbitrary code for every tick, say if you want to set multiple
		// attributes from a single function.) The argument t ranges from 0, at the
		// start of the transition, to 1, at the end.
		return function(t) {
		
			// Calculate the current arc angle based on the transition time, t. Since
			// the t for the transition and the t for the interpolate both range from
			// 0 to 1, we can pass t directly to the interpolator.
			//
			// Note that the interpolated angle is written into the element's bound
			// data object! This is important: it means that if the transition were
			// interrupted, the data bound to the element would still be consistent
			// with its appearance. Whenever we start a new arc transition, the
			// correct starting angle can be inferred from the data.
			d.startAngle = interpolate(t);
			
			console.log(d.startAngle);

			// Lastly, compute the arc path given the updated data! In effect, this
			// transition uses data-space interpolation: the data is interpolated
			// (that is, the end angle) rather than the path string itself.
			// Interpolating the angles in polar coordinates, rather than the raw path
			// string, produces valid intermediate arcs during the transition.
			return what(d);
		};
	});
};
