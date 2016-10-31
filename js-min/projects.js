function ProjectsPage(){	
	this.checkFlov = "up";
	this.checkFlovProjects = "next";

	this.showProjectFromLinkId = -1;
};

ProjectsPage.prototype.startPage = function(){
	this.stagePageTitle = new lib.stage();

	DTSite.titlesStage.addChild(this.stagePageTitle);


	this.removeItemsCount = 0;
	this.selectedPage = 0;

	// NAVI PREV NEXT
	DTSite.navPrevStage.addChild(this.strzalkaPrev);
	DTSite.navNextStage.addChild(this.strzalkaNext);


	this.stagePageTitle.gotoAndStop(0);

	TweenLite.to(this.titleAnim, 2.5, {titlePosition:109, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:2.1, onComplete:function(){DTSite.updateTitleStage = false;}});

	TweenLite.to("#titlesContainer", 0, {z:0, transformPerspective:200, delay:0, overwrite:"all"});

	var tl = new TimelineLite();

	tl.to("#titlesContainer", 0, {y:70, delay:0.5});

	tl.to("#titlesContainer", 4, {y:0, ease:Expo.easeOut}, "+=1.6");

	//tl.to("#titlesContainer", 1, {y:-70, ease:Expo.easeOut}, "+=1.6");

	tl.play();

	var tl2 = new TimelineLite();

	tl2.to("#titlesContainer", 3, {z:-10, delay:2.7, ease:Expo.easeInOut});

	tl2.to("#titlesContainer", 2, {y:-DTSite.openedPage.projectHeight/2 + 100, ease:Expo.easeOut});

	tl2.play();

	TweenLite.killDelayedCallsTo(this.fillProjects);
	TweenLite.killDelayedCallsTo(this.setUpPos);

	TweenLite.delayedCall(3.7, this.fillProjects, [this]);
	TweenLite.delayedCall(0.8, this.setUpPos, [this]);

	$('#projectsStageHolder').empty()

	DTSite.titlesStage.update();
}

ProjectsPage.prototype.scrollMade = function(ref){

	var mobileCont = document.getElementById("projectsContent");

	$("#projectsStageHolder").css("width", (this.projectWidth * (this.projects.length + 1)) + (10 * (this.projects.length - 1)) + (this.fixPosXTMP - (this.projectWidth - this.fixPosXTMP)));

	DTSite.myScrollProjects = new IScroll(mobileCont,
	{
		snap: '#containerHelper>div',
		snapSpeed: 400,
		scrollY:false,
		scrollX:true,
		click:true,
		bounceTime: 800,
		deceleration: 0.01
	});

	DTSite.myScrollProjects.on('beforeScrollStart', this.scrollStart);

	DTSite.myScrollProjects.on('scrollEnd', this.scrollEnd);

	DTSite.myScrollProjects.refresh();
}


ProjectsPage.prototype.scrollStart = function (event){

	DTSite.scrollStartByTouch = true;
}

ProjectsPage.prototype.scrollEnd = function (event){

	if (DTSite.scrollStartByTouch){

		if (DTSite.loadingProject) return;
			
		var pageReal = DTSite.myScrollProjects.currentPage.pageX;


		if (DTSite.openedPage.selectedPage == pageReal) return;

		TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage)

		DTSite.openedPage.selectedPage = pageReal;

		arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

		TweenLite.delayedCall(0.3, DTSite.openedPage.selectPage)

		//DTSite.myScrollProjects.scrollTo(DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10)), 0, 1000, IScroll.utils.ease.circular);

		DTSite.openedPage.disableProjectActions(0.3);

		DTSite.scrollStartByTouch = false;




		//DTSite.myScrollProjects.scrollTo(DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10)), 0, 0, IScroll.utils.ease.circular);

	}

	/*if ( this.x < -1000 ) {
        // do something
    }*/
};

ProjectsPage.prototype.setUpProjects = function (){

	var h = 0;
	var len = this.projects.length;
	
	if (DTSite.mobileVersion == false){

		if (DTSite.openedPage.showProjectFromLink){

			var z = 0;
			var len2 = DTSite.openedPage.projectPages;

			for (z;z<len2;z++){
				if (DTSite.openedPage.showProjectFromLinkId >= (DTSite.openedPage.projectPerPage * z) && DTSite.openedPage.showProjectFromLinkId < (DTSite.openedPage.projectPerPage * z) + DTSite.openedPage.projectPerPage){

					DTSite.openedPage.selectedPage = z;

					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.openedPage.checkFlovProjects = "next";


					//if (DTSite.mobileVersion == false){
						TweenLite.set("#projectsStageHolder", {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount))});
					/*}else{
						DTSite.myScrollProjects.goToPage(DTSite.openedPage.selectedPage, 0, 0, IScroll.utils.ease.circular);
					}*/

					if (DTSite.mobileVersion) DTSite.myScrollProjects.disable();

					DTSite.openedPage.reflovProjects();

					break;
				}
			}
		}else{

			//if (DTSite.mobileVersion == false){
				TweenLite.set("#projectsStageHolder", {x:DTSite.openedPage.fixPosX});
			/*}else{
				DTSite.myScrollProjects.goToPage(0, 0, 0, IScroll.utils.ease.circular);
			}*/
		}

	}

	var whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);

	var timer = 1.2;

	var titleSize = 37 * DTSite.scale;

	if (titleSize < 30){
		titleSize = 30;
	}

	var titleClientSize = 24 * DTSite.scale;

	if (titleClientSize < 20){
		titleClientSize = 20;
	}

	var titleTypeSize = 17 * DTSite.scale;

	if (titleTypeSize < 13){
		titleTypeSize = 13;
	}

	this.projectsSplitText = [];

	var offsetTmp = [];

	var i = 0;

	for (i;i<len;i++){
		
		var arr = [];

		arr.push($(this.projects[i]).offset().left);
		arr.push(i);
		arr.push($(this.projects[i])[0]);

		offsetTmp.push(arr);
	}

	offsetTmp.sort(function(a, b)
	{
	    return a[0] - b[0];
	});

	if (DTSite.mobileVersion) {

	}

	for (h;h<len;h++){
		
		TweenLite.to($(this.projects[h])[0], 0, {y:DTSite.browser_height, ease: Expo.easeOut, delay:0});

		//console.log("DTSite.openedPage.showProjectFromLinkId", DTSite.openedPage.showProjectFromLinkId);

		//if (DTSite.openedPage.showProjectFromLinkId == -1){
			TweenLite.to(offsetTmp[h][2], 1.5, {y:0, ease: Expo.easeOut, delay:(0.15*h)});
		//}

		var projectIns = $(this.projects[h]).find(".projectMiniImgIns");


		TweenLite.to(projectIns[0], 0, {x:-parseInt(((DTSite.openedPage.projectWidth * 1.2)- DTSite.openedPage.projectWidth)/2), y:-parseInt(((DTSite.openedPage.projectHeight * 1.2) - DTSite.openedPage.projectHeight)/2), overwrite: "all"});

		TweenLite.to(projectIns[0], 0, {css:{width:parseInt(DTSite.openedPage.projectWidth* 1.2), height:parseInt(DTSite.openedPage.projectHeight * 1.2)}});


		var title = $(this.projects[h]).find(".projectTxtTitle");
		var title2 = $(this.projects[h]).find(".projectTxtTitle2");

		var title_2 = $(this.projects[h]).find(".projectTxtTitle_2");
		var title2_2 = $(this.projects[h]).find(".projectTxtTitle2_2");

		title.css("fontSize", titleSize);
		title2.css("fontSize", titleSize);

		title_2.css("fontSize", titleSize);
		title2_2.css("fontSize", titleSize);

		var titleC = $(this.projects[h]).find(".projectTxtClient");

		titleC.css("fontSize", titleClientSize);

		var titleC2 = $(this.projects[h]).find(".projectTxtType");
		titleC2.css("fontSize", titleTypeSize);


		var overlay = $(this.projects[h]).find(".projectOverlay");

		TweenLite.set(overlay, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}});


		if (h >= (whatI * DTSite.openedPage.projectPerPage) - DTSite.openedPage.removeItemsCount && h < (whatI * DTSite.openedPage.projectPerPage) + DTSite.openedPage.projectPerPage){

			this.setUpAction($(this.projects[h]));

			DTSite.openedPage.mouseOutTxt($(this.projects[h]),timer);

			timer += 0.4;
		}else{
			var txt = $(this.projects[h]).find(".txtWrapper");

			$(txt).css("display","none");

			this.disableAction($(this.projects[h]));
		}
	};

	if (DTSite.mobileVersion) {

		var klon1 = $(this.projects[0]).clone();

		klon1.css("left", $(this.projects[len-1]).position().left+(this.projectWidth + 10));

		var klon2 = $(this.projects[len-1]).clone();

		klon2.css("left", $(this.projects[0]).position().left - (this.projectWidth + 10));

		klon1.attr("id","project-1");
		klon2.attr("id","project-2");

		klon1.appendTo("#projectsStageHolder");
		klon2.appendTo("#projectsStageHolder");

		TweenLite.to(klon1, 0, {y:DTSite.browser_height, delay:0});

		TweenLite.to(klon1, 1.4, {y:0, ease: Expo.easeOut, delay:0.1});

		var projectIns = klon1.find(".projectMiniImgIns");

		TweenLite.to(projectIns[0], 0, {x:-parseInt(((DTSite.openedPage.projectWidth * 1.2)- DTSite.openedPage.projectWidth)/2), y:-parseInt(((DTSite.openedPage.projectHeight * 1.2) - DTSite.openedPage.projectHeight)/2), overwrite: "all"});
		TweenLite.to(projectIns[0], 0, {css:{width:parseInt(DTSite.openedPage.projectWidth* 1.2), height:parseInt(DTSite.openedPage.projectHeight * 1.2)}});


		TweenLite.to(klon2, 0, {y:DTSite.browser_height, ease: Expo.easeOut, delay:0});

		TweenLite.to(klon2, 1.4, {y:0, ease: Expo.easeOut, delay:0.1});

		var projectIns = klon1.find(".projectMiniImgIns");

		TweenLite.to(projectIns[0], 0, {x:-parseInt(((DTSite.openedPage.projectWidth * 1.2)- DTSite.openedPage.projectWidth)/2), y:-parseInt(((DTSite.openedPage.projectHeight * 1.2) - DTSite.openedPage.projectHeight)/2), overwrite: "all"});
		TweenLite.to(projectIns[0], 0, {css:{width:parseInt(DTSite.openedPage.projectWidth* 1.2), height:parseInt(DTSite.openedPage.projectHeight * 1.2)}});



		DTSite.openedPage.scrollMade();

		if (DTSite.openedPage.showProjectFromLink){

			var z = 0;
			var len2 = DTSite.openedPage.projectPages;

			for (z;z<len2;z++){
				if (DTSite.openedPage.showProjectFromLinkId >= (DTSite.openedPage.projectPerPage * z) && DTSite.openedPage.showProjectFromLinkId < (DTSite.openedPage.projectPerPage * z) + DTSite.openedPage.projectPerPage){

					DTSite.openedPage.selectedPage = z;

					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.myScrollProjects.goToPage(DTSite.openedPage.selectedPage, 0, 0, IScroll.utils.ease.circular);

					break;
				}
			}
		}

	}

	if (DTSite.openedPage.showProjectFromLinkId != -1){
		TweenLite.delayedCall(0.15*DTSite.openedPage.showProjectFromLinkId + 1.5, this.triggerClickProject, [this]);
	}
}

ProjectsPage.prototype.triggerClickProject = function (ref){

	ref.showProjectByID(ref.projects[DTSite.openedPage.showProjectFromLinkId]);
	DTSite.openedPage.showProjectFromLinkId = -1;
}

// TU ZMIENIAMY

ProjectsPage.prototype.reflovProjects = function (projectMotion){
	if (this.pageEndF) return;

	if (DTSite.mobileVersion) return;

	var h = 0;

	var len = this.projects.length;

	var fixPos = true;

	var selectedId = 0;
	var selectedIdF = 0;

	var lastX = 0;

	var firstX = $(this.projects[0]).offset().left

	if (projectMotion != null){
		this.projectsInMotion = projectMotion;
	}

	//console.log("$(projectsStageHolder).offset().left", $(projectsStageHolder).offset().left);


	if (DTSite.openedPage.checkFlovProjects == "prev"){
		for (h;h<len;h++){
			if ($(this.projects[h]).offset().left < 0){
				fixPos = false;
			}

			if (lastX < $(this.projects[h]).offset().left){
				lastX = $(this.projects[h]).offset().left;

				selectedId = h;
			}


			if (firstX > $(this.projects[h]).offset().left){
				firstX = $(this.projects[h]).offset().left;

				selectedIdF = h;
			}
		}

		if (fixPos == true){
			$(this.projects[selectedId]).css('left', $(this.projects[selectedIdF]).position().left-((this.projectWidth + 10) + $("#projectsStageHolder").offset().left));
		}
	}else if (DTSite.openedPage.checkFlovProjects == "next"){

		for (h;h<len;h++){

			if ($(this.projects[h]).offset().left + this.projectWidth > DTSite.browser_width){
				fixPos = false;
			}

			if (lastX < $(this.projects[h]).offset().left){
				lastX = $(this.projects[h]).offset().left;

				selectedId = h;
			}

			if (firstX > $(this.projects[h]).offset().left){
				firstX = $(this.projects[h]).offset().left;

				selectedIdF = h;
			}
		}

		if (fixPos == true){
			$(this.projects[selectedIdF]).css('left', $(this.projects[selectedId]).position().left - ($("#projectsStageHolder").offset().left) + (this.projectWidth + 10));
		}

	}else{
		for (h;h<len;h++){
			if ($(this.projects[h]).offset().left < 0){
				fixPos = false;
			}

			if (lastX < $(this.projects[h]).offset().left){
				lastX = $(this.projects[h]).offset().left;

				selectedId = h;
			}


			if (firstX > $(this.projects[h]).offset().left){
				firstX = $(this.projects[h]).offset().left;

				selectedIdF = h;
			}
		}

		if (fixPos == true){
			$(this.projects[selectedId]).css('left', $(this.projects[selectedIdF]).position().left-((this.projectWidth + 10) + $("#projectsStageHolder").offset().left));
		}

		var fixPos = true;

		var h = 0;

		for (h;h<len;h++){

			if ($(this.projects[h]).offset().left + this.projectWidth > DTSite.browser_width){
				fixPos = false;
			}

			if (lastX < $(this.projects[h]).offset().left){
				lastX = $(this.projects[h]).offset().left;

				selectedId = h;
			}

			if (firstX > $(this.projects[h]).offset().left){
				firstX = $(this.projects[h]).offset().left;

				selectedIdF = h;
			}
		}

		if (fixPos == true){
			$(this.projects[selectedIdF]).css('left', $(this.projects[selectedId]).position().left - ($("#projectsStageHolder").offset().left) + (this.projectWidth + 10));
		}
	}
}

ProjectsPage.prototype.reflovPhotosIns = function (what){
	if (DTSite.openedPage.pageEndF) return;

	if (DTSite.mobileVersion) return;

	var h = 0;

	var photos = DTSite.openedPage.selectedProjectPhotoWrapper.children(".imgProject");

	var len = photos.length;

	var fixPos = true;

	var selectedId = 0;
	var selectedIdF = 0;

	var lastY = 0;

	if (!$(photos[0])) return;
	
	var firstY = $(photos[0]).offset().top

	if (DTSite.openedPage.checkFlov == "down"){
		for (h;h<len;h++){
			if ($(photos[h]).offset().top < 0){
				fixPos = false;
			}

			if (lastY < $(photos[h]).offset().top){
				lastY = $(photos[h]).offset().top;

				selectedId = h;
			}


			if (firstY > $(photos[h]).offset().top){
				firstY = $(photos[h]).offset().top;

				selectedIdF = h;
			}
		}

		if (fixPos == true){

			TweenLite.set($(photos[selectedId]), {css:{top:$(photos[selectedIdF]).position().top - (this.projectHeightB + 10)}});
		}
	}else{

		for (h;h<len;h++){

			if ($(photos[h]).offset().top + this.projectHeightB - DTSite.openedPage.selectedProjectDiv.position().top > DTSite.browser_height){
				fixPos = false;
			}

			if (lastY < $(photos[h]).offset().top){
				lastY = $(photos[h]).offset().top;

				selectedId = h;
			}

			if (firstY > $(photos[h]).offset().top){
				firstY = $(photos[h]).offset().top;

				selectedIdF = h;
			}
		}

		//console.log("firstY ",firstY);

		//console.log("fixPos ",fixPos);

		//console.log("selectedId ", selectedId);

		if (fixPos == true){
			TweenLite.set($(photos[selectedIdF]), {css:{top:$(photos[selectedId]).position().top + this.projectHeightB + 10}});

			//$(photos[selectedIdF]).css('top', $(photos[selectedId]).position().top + this.projectHeightB + DTSite.openedPage.whereToBackY + 10);

			//$(photos[selectedIdF]).css('top', $(photos[selectedId]).position().top - (DTSite.openedPage.selectedProjectPhotoWrapper.offset().top) + (this.projectHeightB + 10) - DTSite.openedPage.selectedProjectDiv.position().top);
		}

	}
}

ProjectsPage.prototype.mouseOverStage = function(e){
	e.preventDefault();
	
	var yM = 0;

	if (DetectIt.isIE) {
       yM = e.clientX + document.body.scrollTop - $(this).offset().top;
    } else {
       yM = e.pageX - $(this).offset().top;
    }

    //$(event.target).parent().data("roll", 1);

    var ile = this.projectHeight/4;

    var whatPic = 0;

    var g = 0;

    for (g;g<4;g++){

    	if ((g+1)*ile > yM && (g)*ile <= yM){
    		whatPic = g;
    	}
    }

    var txtWrapper = $(this).find(".txtWrapper");

    txtWrapper.css("display", "block");


   // txtWrapper.style.display = "block";

    $(this).data("rollId", whatPic);

    //console.log( $(e.target).parent().data("rollId"));

	var projectIns = $(this).find(".projectMiniImgIns");

	//TweenLite.to(projectIns, 0.3, {x:0, y:0 + (this.projectHeight*-whatPic), width:this.projectWidth, height:this.projectHeight, ease:Power4.easeOut, overwrite: "all"});

	TweenLite.to(projectIns[0], 1, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, ease:Power4.easeOut, overwrite: "all"});

	TweenLite.to(projectIns[0], 1, {x:0, y:0, ease:Power4.easeOut});

	var id = $(this).data("id");

	//console.log($(e.target).parent().parent());

	if (DTSite.openedPage.projectsSplitText[id] === undefined){
		DTSite.openedPage.splitText($(this));
	}

	var mySplitText = DTSite.openedPage.projectsSplitText[id].mySplitText;
   	var mySplitText2 = DTSite.openedPage.projectsSplitText[id].mySplitText2;

   	var i = mySplitText.chars.length - 1;

   	var h = 0;

   	var rand = Math.random() * i;

   	var ile = mySplitText.chars.length - 1;

   	for (i; i > -1; i--) {
   		TweenLite.to(mySplitText.chars[i], 0.2, {y:30, ease:Power2.easeIn, delay:(rand * 0.03), overwrite: "all"});

   		//TweenLite.to(mySplitText2.chars[i], 0, {y:- 16, delay:0, overwrite: "all"});

		TweenLite.to(mySplitText2.chars[i], 0.2, {y:-60, ease:Power2.easeIn, delay:(rand * 0.03), overwrite: "all"});

		rand = Math.random() * ile;

		h+=1;
	}


	if (DTSite.openedPage.projectsSplitText[id].mySplitText_2){
   		var mySplitText_2 = DTSite.openedPage.projectsSplitText[id].mySplitText_2;
   		var mySplitText2_2 = DTSite.openedPage.projectsSplitText[id].mySplitText2_2;

   		var i2 = 0;//mySplitText.chars.length - 1;

	   	var h2 = 0;

	   	var ile2 = mySplitText_2.chars.length;

	   	var rand2 = Math.random() * (ile2 - 1);

	   	for (i2; i2 < ile2; i2++) {

	   		TweenLite.to(mySplitText_2.chars[i2], 0.2, {y:30, ease:Power2.easeIn, delay:(rand2 * 0.03), overwrite: "all"});
			TweenLite.to(mySplitText2_2.chars[i2], 0.2, {y:-60, ease:Power2.easeIn, delay:(rand2 * 0.03), overwrite: "all"});

			rand2 = Math.random() * (ile2 - 1);

			h2+=1;

		};
   	}

	
	var client = txtWrapper.find(".projectTxtClientIns");

	TweenLite.to(client, 0.2, {y:-22, ease:Power2.easeIn, delay:0.01, overwrite:"all"});


	var typeTxt = txtWrapper.find(".projectTxtTypeIns");

   	TweenLite.to(typeTxt, 0.2, {y:20, ease:Power2.easeIn, delay:0.01, overwrite:"all"});


	var overlay = $(this).find(".projectOverlay");

	TweenLite.to(overlay, 1, {autoAlpha:0, ease:Power4.easeOut});
}


ProjectsPage.prototype.animateText = function(what){
	var title = what.find(".projectTxtTitle");

	//console.log(what);
}

ProjectsPage.prototype.mouseMoveOverStage = function(e){
	e.preventDefault();
	
	/*var yM = 0;

	if (DetectIt.isIE) {
       yM = e.clientY + document.body.scrollTop - $(e.target).parent().offset().top;
    } else {
       yM = e.pageY - $(e.target).parent().offset().top;
    }

    var ile = this.projectHeight/4;

    var whatPic = 0;

    var g = 0;

    for (g;g<4;g++){

    	//if (g == 0){

    		if ((g+1)*ile > yM && (g)*ile <= yM){
    			whatPic = g;
    		}

    }

    if (parseInt($(e.target).parent().data("rollId")) != whatPic){
    	$(e.target).parent().data("rollId", whatPic);

    	var projectIns = $(e.target).parent().find(".projectMiniImgIns");

    	//console.log("mouseMOVE")

		//TweenLite.to(projectIns, 1, {x:0, y:0 + (this.projectHeight*-whatPic), width:this.projectWidth, height:this.projectHeight, ease:Power4.easeOut, overwrite: "all"});

    }*/
}

ProjectsPage.prototype.mouseOutStage = function(e){
	e.preventDefault();
	
	DTSite.openedPage.mouseOutStageF($(this), 0);
}

ProjectsPage.prototype.mouseOutTxt = function(target, timer){
	var txtWrapper = target.find(".txtWrapper");

	//console.log(txtWrapper);

	txtWrapper.css("display", "block");

	var id = target.data("id");

	if (DTSite.openedPage.projectsSplitText[id] === undefined){
		DTSite.openedPage.splitText(target);
	}

	var mySplitText = DTSite.openedPage.projectsSplitText[id].mySplitText;
   	var mySplitText2 = DTSite.openedPage.projectsSplitText[id].mySplitText2;

   	var i = 0;//mySplitText.chars.length - 1;

   	var h = 0;

   	var ile = mySplitText.chars.length;

   	var rand = Math.random() * (ile - 1);

   	for (i; i < ile; i++) {

   		TweenLite.to(mySplitText.chars[i], 0, {y:30, delay:0, overwrite: "all"});
		TweenLite.to(mySplitText.chars[i], 0.6, {y:-10, ease:Power4.easeOut, delay:(rand * 0.04)+ 0.1 + timer});

		TweenLite.to(mySplitText2.chars[i], 0, {y:-60, delay:0, overwrite: "all"});
		TweenLite.to(mySplitText2.chars[i], 0.6, {y:-26, ease:Power4.easeOut, delay:(rand * 0.04)+ 0.1 + timer});

		rand = Math.random() * (ile - 1);

		h+=1;

	};

	if (DTSite.openedPage.projectsSplitText[id].mySplitText_2){
   		var mySplitText_2 = DTSite.openedPage.projectsSplitText[id].mySplitText_2;
   		var mySplitText2_2 = DTSite.openedPage.projectsSplitText[id].mySplitText2_2;

   		var i2 = 0;//mySplitText.chars.length - 1;

	   	var h2 = 0;

	   	var ile2 = mySplitText_2.chars.length;

	   	var rand2 = Math.random() * (ile2 - 1);

	   	for (i2; i2 < ile2; i2++) {

	   		TweenLite.to(mySplitText_2.chars[i2], 0, {y:30, delay:0, overwrite: "all"});
			TweenLite.to(mySplitText_2.chars[i2], 0.6, {y:-10, ease:Power4.easeOut, delay:(rand2 * 0.04)+ 0.2 + timer});

			TweenLite.to(mySplitText2_2.chars[i2], 0, {y:-60, delay:0, overwrite: "all"});
			TweenLite.to(mySplitText2_2.chars[i2], 0.6, {y:-26, ease:Power4.easeOut, delay:(rand2 * 0.04)+ 0.2 + timer});

			rand2 = Math.random() * (ile2 - 1);

			h2+=1;

		};
   	}

	var client = txtWrapper.find(".projectTxtClientIns");
	TweenLite.to(client, 0, {y:-22, delay:0, overwrite:"all"});
   	TweenLite.to(client, 0.4, {y:0, ease:Power2.easeOut, delay:0.3 + timer});
	//console.log(client);

	var typeTxt = txtWrapper.find(".projectTxtTypeIns");
	TweenLite.to(typeTxt, 0, {y:15, delay:0, overwrite:"all"});
   	TweenLite.to(typeTxt, 0.4, {y:0, ease:Power2.easeOut, delay:0 + timer});
}


ProjectsPage.prototype.mouseOutStageF = function(target, timer){
	var projectIns = target.find(".projectMiniImgIns");

	var whatPic = 0;

    var g = 0;

	TweenLite.to(projectIns[0], 1, {css:{width:parseInt(DTSite.openedPage.projectWidth* 1.2), height:parseInt(DTSite.openedPage.projectHeight * 1.2)}, overwrite: "all"});

	TweenLite.to(projectIns[0], 1, {x:-parseInt(((DTSite.openedPage.projectWidth * 1.2)- DTSite.openedPage.projectWidth)/2), y:-parseInt(((DTSite.openedPage.projectHeight * 1.2) - DTSite.openedPage.projectHeight)/2)});

	var txtWrapper = target.find(".txtWrapper");

	//console.log(txtWrapper);

	txtWrapper.css("display", "block");

	var id = target.data("id");

	if (DTSite.openedPage.projectsSplitText[id] === undefined){
		DTSite.openedPage.splitText(target);
	}

	var mySplitText = DTSite.openedPage.projectsSplitText[id].mySplitText;
   	var mySplitText2 = DTSite.openedPage.projectsSplitText[id].mySplitText2;

   	var i = 0;//mySplitText.chars.length - 1;

   	var h = 0;

   	var ile = mySplitText.chars.length;

   	var rand = Math.random() * (ile - 1);

   	for (i; i < ile; i++) {

   		TweenLite.to(mySplitText.chars[i], 0, {y:30, delay:0, overwrite: "all"});
		TweenLite.to(mySplitText.chars[i], 0.6, {y:-10, ease:Power4.easeOut, delay:(rand * 0.04)+ 0.1 + timer});

		TweenLite.to(mySplitText2.chars[i], 0, {y:-60, delay:0, overwrite: "all"});
		TweenLite.to(mySplitText2.chars[i], 0.6, {y:-26, ease:Power4.easeOut, delay:(rand * 0.04)+ 0.1 + timer});

		rand = Math.random() * (ile - 1);

		h+=1;

	};

	if (DTSite.openedPage.projectsSplitText[id].mySplitText_2){
   		var mySplitText_2 = DTSite.openedPage.projectsSplitText[id].mySplitText_2;
   		var mySplitText2_2 = DTSite.openedPage.projectsSplitText[id].mySplitText2_2;

   		var i2 = 0;//mySplitText.chars.length - 1;

	   	var h2 = 0;

	   	var ile2 = mySplitText_2.chars.length;

	   	var rand2 = Math.random() * (ile2 - 1);

	   	for (i2; i2 < ile2; i2++) {

	   		TweenLite.to(mySplitText_2.chars[i2], 0, {y:30, delay:0, overwrite: "all"});
			TweenLite.to(mySplitText_2.chars[i2], 0.6, {y:-10, ease:Power4.easeOut, delay:(rand2 * 0.04)+ 0.2 + timer});

			TweenLite.to(mySplitText2_2.chars[i2], 0, {y:-60, delay:0, overwrite: "all"});
			TweenLite.to(mySplitText2_2.chars[i2], 0.6, {y:-26, ease:Power4.easeOut, delay:(rand2 * 0.04)+ 0.2 + timer});

			rand2 = Math.random() * (ile2 - 1);

			h2+=1;

		};
   	}

	var client = txtWrapper.find(".projectTxtClientIns");
	TweenLite.to(client, 0, {y:-22, delay:0, overwrite:"all"});
   	TweenLite.to(client, 0.4, {y:0, ease:Power2.easeOut, delay:0.3 + timer});
	//console.log(client);

	var typeTxt = txtWrapper.find(".projectTxtTypeIns");
	TweenLite.to(typeTxt, 0, {y:15, delay:0, overwrite:"all"});
   	TweenLite.to(typeTxt, 0.4, {y:0, ease:Power2.easeOut, delay:0 + timer});
   	//console.log(typeTxt);

	var overlay = target.find(".projectOverlay");

	TweenLite.to(overlay, 1, {ease:Power4.easeOut, css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}});

	TweenLite.to(overlay, 1, {ease:Power4.easeOut, autoAlpha:0.65});
	//console.log(overlay);
}

ProjectsPage.prototype.splitText = function(target){
	var title = $(target).find(".projectTxtTitle");
	var title2 = $(target).find(".projectTxtTitle2");

	var title_2 = $(target).find(".projectTxtTitle_2");
	var title2_2 = $(target).find(".projectTxtTitle2_2");

	var id = $(target).data("id");

	var splitTextObj = new Object();

	splitTextObj.mySplitText = new SplitText(title, {type:"chars"});
   	splitTextObj.mySplitText2 = new SplitText(title2, {type:"chars"});

   	if(title_2.length != 0){
   	   	splitTextObj.mySplitText_2 = new SplitText(title_2, {type:"chars"});
   		splitTextObj.mySplitText2_2 = new SplitText(title2_2, {type:"chars"});
	}

   	this.projectsSplitText[id] = splitTextObj;

   	var client = $(target).find(".projectTxtClientIns");
   	TweenLite.set(client, {y:-22});

	var typeTxt = $(target).find(".projectTxtTypeIns");
   	TweenLite.set(typeTxt, {y:15});

   	var client_ = $(target).find(".projectTxtClient");
   	TweenLite.set(client, {y:-22});

	var typeTxt_ = $(target).find(".projectTxtType");
   	TweenLite.set(typeTxt, {y:15});

   	if (title_2.length != 0){
   		typeTxt_.css("top", parseInt((DTSite.openedPage.projectHeight - 130)/2));

   		title.css("top", parseInt((DTSite.openedPage.projectHeight - 76)/2) + 10);
   		title2.css("top", parseInt((DTSite.openedPage.projectHeight - 76)/2) + 16+ 10);

   		title_2.css("top", parseInt((DTSite.openedPage.projectHeight - 76)/2) + 36+ 10);
   		title2_2.css("top", parseInt((DTSite.openedPage.projectHeight - 76)/2) + 16 + 36+ 10);

   		client_.css("top", parseInt((DTSite.openedPage.projectHeight - 120)/2) + 120);
   	}else{
   		typeTxt_.css("top", parseInt((DTSite.openedPage.projectHeight - 130)/2));

   		title.css("top", parseInt((DTSite.openedPage.projectHeight - 42)/2)+ 10);
   		title2.css("top", parseInt((DTSite.openedPage.projectHeight - 42)/2) + 16+ 10);

   		client_.css("top", parseInt((DTSite.openedPage.projectHeight - 120)/2) + 120);
   	}
}

ProjectsPage.prototype.disableNavigationAction = function (){

	//DTSite.svgElement.fillArc();

	//arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(1500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);


	var navi = $("#navigationProjects").children(".naviBtn");

	var h = 0;

	var len = navi.length;
	
	for (h;h<len;h++){
		$(navi[h]).off("click");
	};

	TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage);

	$(DTSite.navPrevB).off("mouseover", this.mousePrevOver);
	$(DTSite.navPrevB).off("mouseout", this.mousePrevOut);

	$(DTSite.navPrevB).off("click", this.clickPrev);

	$(DTSite.navNextB).off("mouseover", this.mouseNextOver);
	$(DTSite.navNextB).off("mouseout", this.mouseNextOut);

	$(DTSite.navNextB).off("click", this.clickNext);
}

ProjectsPage.prototype.disableNavigationPhotosAction = function (){

	//DTSite.svgElement.fillArc();

	//arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(1500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);


	var navi = $("#navigationPhotos").children(".naviBtn");

	var h = 0;

	var len = navi.length;
	
	for (h;h<len;h++){
		$(navi[h]).off("click");
	};

	TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage);
}

ProjectsPage.prototype.setNavigationAction = function (){

	this.disableNavigationAction();

	DTSite.svgElement.fillArc();

	//arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(1500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);


	var navi = $("#navigationProjects").children(".naviBtn");

	var h = 0;

	var len = navi.length;
	
	for (h;h<len;h++){
		
		TweenLite.to($(navi[h])[0], 0, {autoAlpha:0, overwrite: "all", delay:0});
		TweenLite.to($(navi[h])[0], 1, {autoAlpha:1, delay:(0.15*h) + 0.5});

		$(navi[h]).data("id", h);

		this.setUpActionNavi($(navi[h]));
	};

	TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage);

	$(DTSite.navPrevB).on("mouseover", this.mousePrevOver);
	$(DTSite.navPrevB).on("mouseout", this.mousePrevOut);

	$(DTSite.navPrevB).on("click", this.clickPrev);

	$(DTSite.navNextB).on("mouseover", this.mouseNextOver);
	$(DTSite.navNextB).on("mouseout", this.mouseNextOut);

	$(DTSite.navNextB).on("click", this.clickNext);
}

ProjectsPage.prototype.setPhotosNavigationAction = function (){

	DTSite.openedPage.disableNavigationPhotosAction();

	DTSite.svgElement.fillArc2();

	//arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(1500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);


	var navi = $("#navigationPhotos").children(".naviBtn");

	var h = 0;

	var len = navi.length;
	
	//console.log("/////////////////// setPhotosNavigationAction");

	for (h;h<len;h++){
		
		TweenLite.to($(navi[h])[0], 0, {autoAlpha:0, overwrite: "all", delay:0});
		TweenLite.to($(navi[h])[0], 1, {autoAlpha:1, delay:(0.15*h) + 0.5});

		$(navi[h]).data("id", h);

		DTSite.openedPage.setUpActionNaviPhoto($(navi[h]));
	};

	TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage);
}

ProjectsPage.prototype.clickPrev = function(e){
	e.preventDefault();

	if (DTSite.loadingProject) return;

	if (!DTSite.openedPage.projectVisible){
		var whatI = 0;

		if (DTSite.openedPage.selectedPage >= 0){
			whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
		}else{

			var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

			whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
		}

		var check = DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage;

		DTSite.openedPage.selectedPage -= 1;

		if (whatI != DTSite.openedPage.projectPages - 1 || check == 0){
			arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
			TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

			DTSite.openedPage.checkFlovProjects = "prev";

			TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, overwrite:"all"});

		}else{

			arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

			TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

			DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage);

			DTSite.openedPage.removeItemsCount -= DTSite.openedPage.removeItems;

			DTSite.openedPage.checkFlovProjects = "prev";

			
			TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, overwrite:"all"});
		}

		DTSite.openedPage.disableProjectActions();
	}else{

		var projectIns = $("#projectsStageHolder").find(".projectMiniImg");

		TweenLite.to(projectIns, 0.7, {ease:Power4.easeOut, y:0, delay:0.5});


		TweenLite.to(DTSite.openedPage.selectedProjectDiv, 1, {ease:Power4.easeOut, y:0, x:0, delay:0.1})

		TweenLite.to(DTSite.openedPage.selectedProjectDiv, 1, {ease:Power4.easeOut, delay:0.1, css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}})


		var photos = DTSite.openedPage.selectedProjectPhotos;

		var z = 0;
		var len = photos.length;

		DTSite.openedPage.setUpAction(DTSite.openedPage.selectedProjectDiv);

		DTSite.openedPage.mouseOutTxt(DTSite.openedPage.selectedProjectDiv, 1.5);

		DTSite.openedPage.projectVisible = false;

		TweenLite.to(DTSite.titlesContainerIns, 0.7, {y:-DTSite.openedPage.projectHeight/2 - 75 * DTSite.scale, onUpdate:DTSite.openedPage.setMcPosition, onUpdateParams:[DTSite.openedPage], delay:1.1, ease:Expo.easeOut});

		////////////

		var difference = -parseInt((DTSite.openedPage.projectHeight - DTSite.openedPage.projectHeightB)/2);
		
		var whatI = 0;

		if (DTSite.openedPage.selectedPhoto >= 0){
			whatI = DTSite.openedPage.selectedPhoto % len;
		}else{

			var whatIT = Math.abs(DTSite.openedPage.selectedPhoto);

			whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * len)) % len);
		}

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 0, {y:-whatI * (DTSite.openedPage.projectHeightB + 10), ease:Power3.easeOut});

		if (DTSite.openedPage.selectedPhoto > whatI){

			DTSite.openedPage.selectedPhoto = whatI;

			DTSite.openedPage.checkFlov = "up";

			DTSite.openedPage.reflovPhotosIns();
		}else{

			DTSite.openedPage.checkFlov = "down";

			DTSite.openedPage.selectedPhoto = whatI;

			DTSite.openedPage.reflovPhotosIns();
		}

		for (z;z<len;z++){

			var img = $(photos[z]).find(".projectMiniImgIns");

			TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidth* 1.2), height:parseInt(DTSite.openedPage.projectHeight * 1.2)}, delay:0.1, ease:Power4.easeOut, overwrite: "all"});

			TweenLite.to(img, 1, {x:-parseInt(((DTSite.openedPage.projectWidth * 1.2)- DTSite.openedPage.projectWidth)/2), y:-parseInt(((DTSite.openedPage.projectHeight * 1.2) - DTSite.openedPage.projectHeight)/2), delay:0.1, ease:Power4.easeOut});

			//TweenLite.to(img, 1, {x:parseInt((DTSite.openedPage.projectWidth-600)/2), y:parseInt((DTSite.openedPage.projectHeight-390)/2), width:600, height:390, delay:0.1, ease:Power4.easeOut});


			TweenLite.set(photos[z], {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + DTSite.openedPage.whereToBackY - difference}});

			if (z == len - 1){

				TweenLite.set(photos[z], {css:{top:DTSite.openedPage.whereToBackY - (DTSite.openedPage.projectHeightB + 10) - difference}});
			}

			TweenLite.to(photos[z], 0.5, {css:{top:0}, ease:Power4.easeOut, delay:0.1, onComplete:DTSite.openedPage.clearPhotos});

			var overlay = $(photos[z]).find(".projectOverlay");

			if (z == 0) {
				TweenLite.to(overlay, 1, {autoAlpha:0.65, delay:1, ease:Power4.easeOut, overwrite:"all"});
			}

			TweenLite.set(overlay, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, delay:1});


			if (z != 0){

				TweenLite.set(photos[z], {autoAlpha:0, delay:1, ease:Power4.easeOut});
			}else{
				TweenLite.set(photos[z], {autoAlpha:1, delay:1, ease:Power4.easeOut});
			}

		}

		//if (DTSite.openedPage.selectedPhoto > 0){

		DTSite.openedPage.selectedPhoto = 0;

		DTSite.selectedMenu = DTSite.openedPage.menuPosition;

		if (DTSite.addHistory) {
			DTSite.changePageHistory = false;
			History.pushState({state:DTSite.selectedMenu}, DTSite.siteTitles[DTSite.selectedMenu].title + " DreamTeam Katarzyna Konkowska", DTSite.adressTmp+DTSite.siteTitles[DTSite.selectedMenu].short);
		}

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:0, ease:Power3.easeOut, delay:0.1});

		/*}else{

			DTSite.openedPage.selectedPhoto = 0;

			TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 0.3, {y:DTSite.openedPage.selectedPhoto, ease:Power3.easeOut});
		}*/

		if (!DTSite.mobileVersion){
			$("#nextProjects").css("display", "block");
		}else{

			DTSite.myScrollProj.destroy();

			DTSite.myScrollProjects.enable();

			$("#nextProjects").css("display", "none");
			$("#prevProjects").css("display", "none");
		}

		TweenLite.to("#navigationPhotos", 0.5, {x:100, delay:0, ease:Power4.easeOut});

		if (DTSite.webGLReady == true){
			TweenLite.delayedCall(1.5, function(){ DTSite.selectedMenu = DTSite.openedPage.menuPosition; DTSite.bg.changeBgPrev();})
		}else{
			TweenLite.delayedCall(0.1, function(){ DTSite.selectedMenu = DTSite.openedPage.menuPosition; DTSite.bg.changeBgPrev();})
		}

		TweenLite.to("#projectDescription", 0.5, {autoAlpha:0, delay:0, ease:Power4.easeOut});

		TweenLite.to("#navigationProjects", 1, {y:0, delay:1.1, ease:Power4.easeOut});

		TweenLite.to("#prevProjectsB", 0.5, {x:-($("#prevProjectsB").width() + 20), ease:Power4.easeOut});

		TweenLite.to("#prevC", 0.5, {x:-($("#prevProjectsB").width() + 20), ease:Power4.easeOut});


		TweenLite.to("#prevProjectsB", 1, {x:0, delay:0.5});
		TweenLite.to("#prevC", 1, {x:0, delay:0.5});

		TweenLite.to("#nextProjectsB", 1, {x:0, delay:0.5});
		TweenLite.to("#nextC", 1, {x:0, delay:0.5});

		DTSite.openedPage.selectPage();

		DTSite.openedPage.disablePrevNextPhotoAction();

		TweenLite.killDelayedCallsTo(DTSite.openedPage.setPrevNextPhotoAction);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.setPhotosNavigationAction);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);

	}

}

ProjectsPage.prototype.clearPhotos = function(){
	var photos = DTSite.openedPage.selectedProjectPhotos;

	var z = 0;
	var len = photos.length;


	for (z;z<len;z++){

		if (z != 0){
			$(photos[z]).remove();
		}

	}
}

ProjectsPage.prototype.selectPhotoPage = function(){

	var whatI = 0;

	var len = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProject].pictures.length;

	if (DTSite.openedPage.selectedPhoto >= 0){
		whatI = DTSite.openedPage.selectedPhoto % len;
	}else{

		var whatIT = Math.abs(DTSite.openedPage.selectedPhoto);

		whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * len)) % len);
	}

	arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(0), 240 * (Math.PI/180), 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

	if (!DTSite.mobileVersion){
		TweenLite.delayedCall(0.1, function(){ arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 360 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos)})

		//TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);

		//TweenLite.delayedCall(3.5, DTSite.openedPage.clickNextPhotoAuto);
	}else{
		TweenLite.delayedCall(0.1, function(){ arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 360 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos)})
	}

	/*var h = 0;

	for(h;h<len;h++){

		if (h != whatI){
			TweenLite.to("#naviDot"+h, 1, {scale: 1, ease:Power4.easeOut, transformOrigin:"50% 50%", overwrite:"all"})
		}else{
			TweenLite.to("#naviDot"+whatI, 1, {scale: 1.4, ease:Power2.easeOut, transformOrigin:"50% 50%"})
		}
	}*/

	//$("#naviDot"+DTSite.openedPage.selectedPhoto)).css("top", whatI * 24);


	$("#selectedNaviArc2").css("top", whatI * 24);
}

ProjectsPage.prototype.selectPage = function(){

	var whatI = 0;

	if (DTSite.openedPage.selectedPage >= 0){
		whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
	}else{

		var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

		whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
	}

	arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(0), 240 * (Math.PI/180), 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

	/*if (!DTSite.mobileVersion){
		TweenLite.delayedCall(0.1, function(){ arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(6000), 240 * (Math.PI/180), 240 * (Math.PI/180) + 360 * (Math.PI/180), DTSite.svgElement.arcNaviProjects)})

		TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextAuto);

		TweenLite.delayedCall(5.5, DTSite.openedPage.clickNextAuto);
	}else{*/
		TweenLite.delayedCall(0.1, function(){ arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(500), 240 * (Math.PI/180), 240 * (Math.PI/180) + 360 * (Math.PI/180), DTSite.svgElement.arcNaviProjects)})
	//}

	$("#selectedNaviArc").css("left", whatI * 26);
}

ProjectsPage.prototype.clickNext = function(e){
	e.preventDefault();

	if (DTSite.loadingProject) return;

	DTSite.openedPage.selectedPage += 1;

	var whatI = 0;
	
	if (DTSite.openedPage.selectedPage >= 0){
		whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
	}else{

		var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

		whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
	}

	var check = DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage;


	DTSite.openedPage.removeItems = 0;

	TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage)

	if (whatI != DTSite.openedPage.projectPages - 1 || check == 0){
		arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

		DTSite.openedPage.checkFlovProjects = "next";

		TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, overwrite:"all", onComplete:DTSite.openedPage.projectsInMotionF});

	}else{

		arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

		DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage);

		DTSite.openedPage.removeItemsCount += DTSite.openedPage.removeItems;

		DTSite.openedPage.checkFlovProjects = "next";

		TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, overwrite:"all", onComplete:DTSite.openedPage.projectsInMotionF});

	}

	DTSite.openedPage.disableProjectActions();
}

ProjectsPage.prototype.picturesLoaded = function(){

	if (DTSite.selectedMenu != DTSite.openedPage.menuPosition) return;

	var top = DTSite.openedPage.selectedProjectDiv.find(".loaderTop");
	var bottom = DTSite.openedPage.selectedProjectDiv.find(".loaderBottom");
	var left = DTSite.openedPage.selectedProjectDiv.find(".loaderLeft");
	var right = DTSite.openedPage.selectedProjectDiv.find(".loaderRight");

	TweenLite.to(top, 0.3,{scaleX:1, transformOrigin:"0% 0%"});
	TweenLite.to(bottom, 0.3,{scaleX:1, transformOrigin:"100% 100%"});
	TweenLite.to(left, 0.3,{scaleY:1, transformOrigin:"0% 100%"});
	TweenLite.to(right, 0.3,{scaleY:1, transformOrigin:"100% 0%"});

	TweenLite.to(top, 0.3,{scaleY:0, transformOrigin:"0% 0%", delay:0.2, ease:Sine.easeIn});
	TweenLite.to(bottom, 0.3,{scaleY:0, transformOrigin:"100% 100%", delay:0.2, ease:Sine.easeIn});
	TweenLite.to(left, 0.3,{scaleX:0, transformOrigin:"0% 100%", delay:0.2, ease:Sine.easeIn});
	TweenLite.to(right, 0.3,{scaleX:0, transformOrigin:"100% 0%", delay:0.2, ease:Sine.easeIn});

	if (DTSite.addHistory) {
		DTSite.changePageHistory = false;
		History.pushState({state:DTSite.selectedMenu}, DTSite.siteTitles[DTSite.selectedMenu].title + " DreamTeam Katarzyna Konkowska", DTSite.adressTmp+DTSite.siteTitles[DTSite.selectedMenu].short+"/"+DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProjectId].uri);
	}

	TweenLite.delayedCall(0.5, this.picturesLoadedF, [this]);
}

ProjectsPage.prototype.picturesLoadedF = function(ref){

	var ref_ = this;

	if (ref){
		var ref_ = ref;
	}

	var whereToAdd = ref_.selectedProjectDiv.find(".photoWrapper");

	var z = 1;

	var il = ref_.stageProjects[DTSite.openedPage.selectedProjectId].pictures.length;

	for (z;z<il;z++){

		var txt = '<li class="imgProject" style="top:0px; z-index:'+parseInt(100 - il-z)+'; display:none;"><img id="project'+z+'" class="projectMiniImgIns" src="'+ref_.stageProjects[DTSite.openedPage.selectedProjectId].pictures[z].src+'"></img><div class="projectOverlay"></div></li>';
		
		if (z == 1 && ref_.stageProjects[DTSite.openedPage.selectedProjectId].video != ""){
			var txt = '<li class="imgProject" style="top:0px; z-index:'+parseInt(100 - il-z)+'; display:none;">';

			if (DTSite.mobileVersion){
				txt += "<video loop preload='auto' id='videoInside' class='projectMiniImgIns' poster='"+ref_.stageProjects[DTSite.openedPage.selectedProjectId].pictures[z].src+"'><<source src='"+DTSite.adressTmp+ref_.stageProjects[DTSite.openedPage.selectedProjectId].video+".mp4' type='video/mp4' />source src='"+DTSite.adressTmp+ref_.stageProjects[DTSite.openedPage.selectedProjectId].video+".webm' type='video/webm' /></video>";
				txt += '<div class="projectOverlay" style="display:none;"></div></li>';
			}else{
				txt += "<video autoPlay loop preload='auto' class='projectMiniImgIns' poster='"+ref_.stageProjects[DTSite.openedPage.selectedProjectId].pictures[z].src+"'><source src='"+DTSite.adressTmp+ref_.stageProjects[DTSite.openedPage.selectedProjectId].video+".webm' type='video/webm' /><source src='"+DTSite.adressTmp+ref_.stageProjects[DTSite.openedPage.selectedProjectId].video+".mp4' type='video/mp4' /></video>";
				txt += '<div class="projectOverlay"></div></li>';
			}
		}

		whereToAdd.append(txt)
	}

	if (DTSite.mobileVersion){
		if (ref_.stageProjects[DTSite.openedPage.selectedProjectId].video != ""){

			//alert("click ready");

			if (window.navigator.msPointerEnabled) {
			    $("#videoInside").on("click", ref_.playVideoProj.bind(ref_));
			}else{
				$("#videoInside").on("touchend", ref_.playVideoProj);
			}

		}
	}

	/*if (ref_.stageProjects[DTSite.openedPage.selectedProjectId].video != ""){
		var videoPlayer = document.createElement('video');
		videoPlayer.style.
				
		//videoPlayer.appendChild(source2);
		videoPlayer.appendChild(source);
		
		videoPlayer.loop = true;
	}*/

	//whereToAdd.append(txt)

	var where = DTSite.openedPage.selectedProjectDiv.offset().top;

	var projectIns = $("#projectsStageHolder").find(".projectMiniImg");

	TweenLite.to(projectIns, 1, {ease:Power4.easeInOut, y:DTSite.browser_height - where});

	var whereX = parseInt(-DTSite.openedPage.selectedProjectDiv.offset().left + DTSite.browser_width - DTSite.openedPage.projectWidthB - (100 * DTSite.scaleContainerW));


	DTSite.openedPage.whereToBackX = DTSite.openedPage.selectedProjectDiv.offset().left - DTSite.openedPage.fixPosX;

	DTSite.openedPage.whereToBackY = where;

	var difference = -parseInt((DTSite.openedPage.projectHeight - DTSite.openedPage.projectHeightB)/2);

	TweenLite.to(DTSite.openedPage.selectedProjectDiv, 1, {ease:Power4.easeInOut, css:{height:parseInt(DTSite.browser_height), width:parseInt(DTSite.openedPage.projectWidthB)}})

	TweenLite.to(DTSite.openedPage.selectedProjectDiv, 1, {ease:Power4.easeInOut, y:-where})

	TweenLite.to(DTSite.openedPage.selectedProjectDiv, 1, {ease:Power4.easeInOut, x:whereX, delay:0.5, onComplete: 

		function(){

			DTSite.loadingProject = false;

			DTSite.openedPage.setPrevNextPhotoAction();

		}
	});


	var where2 = parseInt((DTSite.titleContinerH/2));

	TweenLite.to(DTSite.titlesContainerIns, 0.8, {y:parseInt(DTSite.browser_height - where), z:0, delay:0, onUpdate:DTSite.openedPage.setMcPosition, onUpdateParams:[DTSite.openedPage], ease:Power4.easeInOut, overwrite:"all"});

	DTSite.openedPage.selectedProjectPhotos = DTSite.openedPage.selectedProjectDiv.find(".imgProject");

	var z = 0;
	var len = DTSite.openedPage.selectedProjectPhotos.length;


	if (DTSite.mobileVersion){
		var klon2 = $(DTSite.openedPage.selectedProjectPhotos[0]).clone();

		klon2.css("zIndex", 0);

		var klon1 = $(DTSite.openedPage.selectedProjectPhotos[len-1]).clone();

		klon1.css("zIndex", 1);

		klon1.appendTo(whereToAdd);
		klon2.appendTo(whereToAdd);

		DTSite.openedPage.fixPosY = where - (DTSite.openedPage.projectHeightB + 10) - difference;

		klon1.css("display", "block");
		klon2.css("display", "block");

		var img = klon1.find(".projectMiniImgIns");

		TweenLite.to(img, 0, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, delay:0});

		TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

		TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});

		var img2 = klon2.find(".projectMiniImgIns");

		TweenLite.to(img2, 0, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, delay:0});

		TweenLite.to(img2, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

		TweenLite.to(img2, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});

		var overlay1 = klon1.find(".projectOverlay");
		var overlay2 = klon2.find(".projectOverlay");

		TweenLite.set(overlay1, {css:{opacity:0.85, width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, delay:0});
		TweenLite.set(overlay2, {css:{opacity:0.85, width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, delay:0});

		TweenLite.set(overlay1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:1.2});
		TweenLite.set(overlay2, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:1.2});

		TweenLite.to(klon1, 1, {css:{top:where - difference}, delay:0, ease:Power4.easeInOut});
		TweenLite.to(klon2, 1, {css:{top:where - difference}, delay:0, ease:Power4.easeInOut});

		TweenLite.to(klon1, 1, {css:{top:where - (DTSite.openedPage.projectHeightB + 10) - difference}, delay:1.2, ease:Power4.easeOut});

		TweenLite.to(klon2, 0, {css:{top:((len)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:1.2, ease:Power4.easeOut});
	}


	for (z;z<len;z++){

		//var projectImgAll = $(photos[z]).find(".imgProject");

		$(DTSite.openedPage.selectedProjectPhotos[z]).css("display", "block");

		$(DTSite.openedPage.selectedProjectPhotos[z]).data("id", z);

		var img = $(DTSite.openedPage.selectedProjectPhotos[z]).find(".projectMiniImgIns");

		if (!DTSite.mobileVersion){
			if (z == len - 1){

				TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}else if (z == 1){

				TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}else if (z == 0){

				TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}else{
				TweenLite.to(img, 0, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 0, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}
		}else{

			if (z == 1){

				TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}else if (z == 0){

				TweenLite.to(img, 1, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 1, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}else{
				TweenLite.to(img, 0, {x:0, y:0, delay:0.5, ease:Power4.easeInOut});

				TweenLite.to(img, 0, {css:{width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}

		}

		TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:where - difference}, delay:0, ease:Power4.easeInOut});

		var overlay = $(DTSite.openedPage.selectedProjectPhotos[z]).find(".projectOverlay");

		if (z != 0){
			TweenLite.set(DTSite.openedPage.selectedProjectPhotos[z], {opacity:0});
			TweenLite.set(overlay, {css:{opacity:0.85, width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5});
		}else{

			if (DTSite.mobileVersion){
				TweenLite.to(overlay, 0.3, {css:{opacity:0, width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0, ease:Power4.easeInOut});
			}else{
				TweenLite.to(overlay, 1, {css:{opacity:0, width:parseInt(DTSite.openedPage.projectWidthB), height:parseInt(DTSite.openedPage.projectHeightB)}, delay:0.5, ease:Power4.easeInOut});
			}
		}

		if (!DTSite.mobileVersion){
			if (z == len - 1){

				DTSite.openedPage.fixPosY = where - (DTSite.openedPage.projectHeightB + 10) - difference;


				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:where - (DTSite.openedPage.projectHeightB + 10) - difference}, delay:1.2, ease:Power4.easeOut});
			}else if (z == 1){

				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:1.2, ease:Power4.easeOut});
			}else if (z == 0){

				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:1.2, ease:Power4.easeOut});
			}else{
				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 0, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:0.5, ease:Power4.easeOut});
			}
		}else{

			if (z == 1){

				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:1.2, ease:Power4.easeOut});
			}else if (z == 0){

				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 1, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:1.2, ease:Power4.easeOut});
			}else{
				TweenLite.to(DTSite.openedPage.selectedProjectPhotos[z], 0, {css:{top:((z)*(DTSite.openedPage.projectHeightB + 10)) + where - difference}, delay:0.5, ease:Power4.easeOut});
			}

		}

		TweenLite.set(DTSite.openedPage.selectedProjectPhotos[z], {opacity:1, delay:1.2});

		//DTSite.openedPage.setActionPictures(photos[z]);
	}

	ref_.selectedProjectDiv.find(".txtWrapper").css("display", "none");


	DTSite.openedPage.showProject(DTSite.openedPage.selectedProjectDiv.data("id"));
}

ProjectsPage.prototype.playVideoProj = function(){

	//alert("ok");

	$("#videoInside").off("click", ref_.playVideoProj);
	$("#videoInside").off("touchend", ref_.playVideoProj);

	DTSite.openedPage.videoH = document.getElementById("videoInside");

	//DTSite.openedPage.videoH.addEventListener('loadeddata', this.videoLoaded, false);
	
	var docEl = DTSite.openedPage.videoH;

  	var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

	DTSite.openedPage.videoH.play();

	requestFullScreen.call(docEl);

	//DTSite.openedPage.videoH.load();
}

ProjectsPage.prototype.videoLoaded = function(){
	/*if (siteVersion == 2){
		BMProject.videoPlayer.play();
	}else{
		BMProject.videoPlayer.play();
	}*/
	
	if (DTSite.openedPage.videoH) DTSite.openedPage.videoH.play();
}

// TUTAJ

ProjectsPage.prototype.setPrevNextPhotoAction = function(){

	if (DTSite.mobileVersion) return;

	$("#prevPhoto").css("display", "block");
	$("#nextPhoto").css("display", "block");

	$("#prevPhoto").on("mouseover", function(event){
		event.preventDefault();

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)) + 30, ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
	});

	$("#prevPhoto").on("mouseout", function(event){
		event.preventDefault();

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
	});

	$("#nextPhoto").on("mouseover", function(event){
		event.preventDefault();

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)) - 30, ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
	});

	$("#nextPhoto").on("mouseout", function(event){
		event.preventDefault();

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
	});


	$("#prevPhoto").on("click", function(event){
		event.preventDefault();

		DTSite.openedPage.checkFlov = "down";
		
		DTSite.openedPage.selectedPhoto -= 1;

		arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});

		TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage)

		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

		DTSite.openedPage.disablePhotosActions();
	});


	$("#nextPhoto").on("click", function(event){
		event.preventDefault();

		DTSite.openedPage.checkFlov = "up";

		DTSite.openedPage.selectedPhoto += 1;

		arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

		TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});

		TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage)

		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

		DTSite.openedPage.disablePhotosActions();
	});
}

ProjectsPage.prototype.clickNextPhotoAuto = function(){
	return;

	if (DTSite.openedPage.pageEndF) return;

	if (DTSite.mobileVersion) return;

	DTSite.openedPage.selectedPhoto += 1;

	DTSite.openedPage.checkFlov = "up";

	arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

	TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});

	TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage)

	TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

	DTSite.openedPage.disablePhotosActions();
}

ProjectsPage.prototype.disablePrevNextPhotoAction = function(){

	$("#prevPhoto").css("display", "none");
	$("#nextPhoto").css("display", "none");

	$("#prevPhoto").off("mouseover")
	$("#prevPhoto").off("mouseout")
	$("#prevPhoto").off("click")

	$("#nextPhoto").off("mouseover")
	$("#nextPhoto").off("mouseout")
	$("#nextPhoto").off("click")
}

ProjectsPage.prototype.progressShow = function(progress){

	var top = DTSite.openedPage.selectedProjectDiv.find(".loaderTop");
	var bottom = DTSite.openedPage.selectedProjectDiv.find(".loaderBottom");
	var left = DTSite.openedPage.selectedProjectDiv.find(".loaderLeft");
	var right = DTSite.openedPage.selectedProjectDiv.find(".loaderRight");

	TweenLite.to(top, 0.3,{scaleX:progress, transformOrigin:"0% 0%"});
	TweenLite.to(bottom, 0.3,{scaleX:progress, transformOrigin:"100% 100%"});
	TweenLite.to(left, 0.3,{scaleY:progress, transformOrigin:"100% 100%"});
	TweenLite.to(right, 0.3,{scaleY:progress, transformOrigin:"0% 0%"});
}

ProjectsPage.prototype.setActionPictures = function(photo){

	/*$(photo).on("click", function(event){
		event.preventDefault();

		//$(photo).off("click");

		//console.log($(photo));

		//console.log("id", $(photo).data("id"));

		var len = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProject].pictures.length;

		if (DTSite.openedPage.selectedPhoto >= 0){
			whatI = DTSite.openedPage.selectedPhoto % len;
		}else{

			var whatIT = Math.abs(DTSite.openedPage.selectedPhoto);

			whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * len)) % len);
		}

		if (whatI == $(photo).data("id")){

			console.log("OKEJ");


		}

	});*/
}

ProjectsPage.prototype.clickNextAuto = function(){

	return;

	DTSite.openedPage.selectedPage += 1;

	var whatI = 0;
	
	if (DTSite.openedPage.selectedPage >= 0){
		whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
	}else{

		var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

		whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
	}

	var check = DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage;

	TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage)

	//var len = DTSite.openedPage.projects.length;

	/*if (whatI == DTSite.openedPage.projectPages - 1){

		//if (whatI * DTSite.openedPage.projectPerPage)
		DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (len - (whatI * DTSite.openedPage.projectPerPage));
	}else{
		DTSite.openedPage.removeItems = 0;
	}*/

	if (whatI != DTSite.openedPage.projectPages - 1 || check == 0){
		arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

		DTSite.openedPage.checkFlovProjects = "next";

		TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeInOut, onUpdate:function(){DTSite.openedPage.reflovProjects(true)}, onComplete:DTSite.openedPage.projectsInMotionF});

	}else{

		arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

		DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage);

		DTSite.openedPage.removeItemsCount += DTSite.openedPage.removeItems;

		DTSite.openedPage.checkFlovProjects = "next";

		TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeInOut, onUpdate:function(){DTSite.openedPage.reflovProjects(true)}, onComplete:DTSite.openedPage.projectsInMotionF});
	}

	DTSite.openedPage.disableProjectActions();
}

ProjectsPage.prototype.projectsInMotionF = function(){
	DTSite.openedPage.projectsInMotion = false;
}

ProjectsPage.prototype.disablePhotosActions = function(){

	var len = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProject].pictures.length;

	var h = 0;

	var whatI = 0;

	if (DTSite.openedPage.selectedPhoto >= 0){
		whatI = DTSite.openedPage.selectedPhoto % len;
	}else{

		var whatIT = Math.abs(DTSite.openedPage.selectedPhoto);

		whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * len)) % len);
	}

	var photos = DTSite.openedPage.selectedProjectPhotos;

	var h = 0;
	var len = photos.length;

	for (h;h<len;h++){

		var overlay = $(photos[h]).find(".projectOverlay");

		if (h == whatI){
			TweenLite.to(overlay, 1, {autoAlpha:0, delay:0, ease:Power4.easeOut});
		}else{
			TweenLite.to(overlay, 0.5, {autoAlpha:0.85, delay:0, ease:Power4.easeOut});
		}
	};

}

ProjectsPage.prototype.disableProjectActions = function(timer_){

	var len = this.projects.length;

	var h = 0;

	var whatI = 0;

	var timer = 1;

	if (timer_){
		timer = timer_;
	}

	if (DTSite.openedPage.selectedPage >= 0){
		whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
	}else{

		var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

		whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
	}


	if (whatI == DTSite.openedPage.projectPages - 1){

		//if (whatI * DTSite.openedPage.projectPerPage)
		DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (len - (whatI * DTSite.openedPage.projectPerPage));
	}else{
		DTSite.openedPage.removeItems = 0;
	}

	//console.log('DTSite.openedPage.removeItems ', DTSite.openedPage.removeItems);

	//console.log('page ', whatI);

	//console.log((whatI * DTSite.openedPage.projectPerPage) - DTSite.openedPage.removeItems);

	//console.log((whatI * DTSite.openedPage.projectPerPage) + DTSite.openedPage.projectPerPage);

	for (h;h<len;h++){

		if (h >= (whatI * DTSite.openedPage.projectPerPage) - DTSite.openedPage.removeItems && h < (whatI * DTSite.openedPage.projectPerPage) + DTSite.openedPage.projectPerPage){

			var txt = $(this.projects[h]).find(".txtWrapper");

			$(txt).css("display","block");

			this.setUpAction($(this.projects[h]));

			DTSite.openedPage.mouseOutStageF($(this.projects[h]),timer);

			timer += 0.4;
		}else{
			var txt = $(this.projects[h]).find(".txtWrapper");

			$(txt).css("display","none");

			this.disableAction($(this.projects[h]));

			var overlay = $(this.projects[h]).find(".projectOverlay");
			TweenLite.to(overlay, 1, {opacity:0.65, ease:Power4.easeOut, overwrite:"all"});

		}
	};

}

ProjectsPage.prototype.mousePrevOver = function(e){
	e.preventDefault();
	
	if (DTSite.loadingProject) return;

	TweenLite.to(DTSite.openedPage.prevAnim, 0.5, {prevPosition:51, onUpdate:DTSite.openedPage.setPrevPosition, onUpdateParams:[DTSite.openedPage]});

	TweenLite.to(DTSite.navPrev, 0.4, {x:-10, ease:Power1.easeOut});

	//console.log(DTSite.openedPage.projectWidth);

	if (!DTSite.openedPage.projectVisible) {
		if (DTSite.openedPage.projectsInMotion == false) TweenLite.to("#projectsStageHolder", 1, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)) + 50, ease:Power1.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
		
	}
}

ProjectsPage.prototype.mousePrevOut = function(e){
	e.preventDefault();
	
	if (DTSite.loadingProject) return;

	TweenLite.to(DTSite.openedPage.prevAnim, 0.2, {prevPosition:29, onUpdate:DTSite.openedPage.setPrevPosition, onUpdateParams:[DTSite.openedPage], overwrite:"all"});

	TweenLite.to(DTSite.navPrev, 0.2, {x:0, ease:Power1.easeOut});

	if (!DTSite.openedPage.projectVisible) {
		if (DTSite.openedPage.projectsInMotion == false) TweenLite.to("#projectsStageHolder", 1, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power1.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
	
	}
}

ProjectsPage.prototype.mouseNextOver = function(e){
	e.preventDefault();

	if (DTSite.loadingProject) return;

	TweenLite.to(DTSite.openedPage.nextAnim, 0.5, {nextPosition:51, onUpdate:DTSite.openedPage.setNextPosition, onUpdateParams:[DTSite.openedPage]});
	
	TweenLite.to(DTSite.navNext, 0.4, {x:10, ease:Power1.easeOut});

	if (DTSite.openedPage.projectsInMotion == false) {
		TweenLite.to("#projectsStageHolder", 1, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)) - 50, ease:Power1.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
	}
}

ProjectsPage.prototype.mouseNextOut = function(e){
	e.preventDefault();

	if (DTSite.loadingProject) return;

	TweenLite.to(DTSite.openedPage.nextAnim, 0.2, {nextPosition:29, onUpdate:DTSite.openedPage.setNextPosition, onUpdateParams:[DTSite.openedPage], overwrite:"all"});

	TweenLite.to(DTSite.navNext, 0.2, {x:0, ease:Power1.easeOut});

	if (DTSite.openedPage.projectsInMotion == false) TweenLite.to("#projectsStageHolder", 1, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power1.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
}

ProjectsPage.prototype.setUpActionNavi = function(el){
		//$(el).on("mouseover", this.mouseOverStage);
		//$(el).on("mousemove", this.mouseMoveOverStage);
		//$(el).on("mouseout", this.mouseOutStage);
		
		$(el).click(function(event){
			event.preventDefault();

			if (DTSite.loadingProject) return;
			
			//console.log(DTSite.openedPage.projectPerPage);
			//console.log(parseInt($(el).data("id")) * (this.projectWidth * DTSite.openedPage.projectPerPage));

			var whatI = Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages);

			var pageReal = (whatI * DTSite.openedPage.projectPages) + parseInt($(el).data("id"));

			DTSite.openedPage.removeItems = 0;

			TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPage)

			if (DTSite.openedPage.selectedPage > pageReal){


				var whatI = 0;

				if (DTSite.openedPage.selectedPage >= 0){
					whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
				}else{

					var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

					whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
				}

				var check = DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage;

				DTSite.openedPage.selectedPage = pageReal;

				if (whatI != DTSite.openedPage.projectPages - 1 || check == 0){
					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.openedPage.checkFlovProjects = "prev";

					if (DTSite.mobileVersion == false){
						TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
					}else{
						DTSite.myScrollProjects.goToPage(pageReal, 0, 1000, IScroll.utils.ease.circular);
					}

				}else{

					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage);

					DTSite.openedPage.removeItemsCount -= DTSite.openedPage.removeItems;

					DTSite.openedPage.checkFlovProjects = "prev";

					if (DTSite.mobileVersion == false){
						TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
					}else{
						DTSite.myScrollProjects.goToPage(pageReal, 0, 1000, IScroll.utils.ease.circular);
					}
				}

			}else{
				DTSite.openedPage.selectedPage = pageReal;

				var whatI = 0;
	
				if (DTSite.openedPage.selectedPage >= 0){
					whatI = Math.floor(DTSite.openedPage.selectedPage % DTSite.openedPage.projectPages);
				}else{

					var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPage / DTSite.openedPage.projectPages));

					whatI = Math.floor((DTSite.openedPage.selectedPage + (whatIT * DTSite.openedPage.projectPages)) % DTSite.openedPage.projectPages);
				}

				var check = DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage;


				if (whatI != DTSite.openedPage.projectPages - 1 || check == 0){
					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.openedPage.checkFlovProjects = "next";

					if (DTSite.mobileVersion == false){
						TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
					}else{
						DTSite.myScrollProjects.goToPage(pageReal, 0, 1000, IScroll.utils.ease.circular);
					}
				}else{

					arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);

					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPage)

					DTSite.openedPage.removeItems = DTSite.openedPage.projectPerPage - (DTSite.openedPage.projects.length % DTSite.openedPage.projectPerPage);

					DTSite.openedPage.removeItemsCount += DTSite.openedPage.removeItems;

					DTSite.openedPage.checkFlovProjects = "next";
					if (DTSite.mobileVersion == false){
						TweenLite.to("#projectsStageHolder", 2, {x:DTSite.openedPage.fixPosX - (DTSite.openedPage.selectedPage * (DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.projectPerPage - ((DTSite.openedPage.projectWidth + 10) * DTSite.openedPage.removeItemsCount)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovProjects()}, onComplete:DTSite.openedPage.projectsInMotionF});
					}else{
						DTSite.myScrollProjects.goToPage(pageReal, 0, 1000, IScroll.utils.ease.circular);
					}
				}
			}

			DTSite.openedPage.disableProjectActions();
		});
}


ProjectsPage.prototype.setUpActionNaviPhoto = function(el){

		$(el).click(function(event){
			event.preventDefault();

			var photosLenght = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProject].pictures.length;

			var whatI = Math.floor(DTSite.openedPage.selectedPhoto / photosLenght);

			var pageReal = (whatI * photosLenght) + parseInt($(el).data("id"));

			
			//console.log("DTSite.openedPage.selectedPhoto ", DTSite.openedPage.selectedPhoto);
			//console.log("pageReal ", pageReal);

			TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);

			TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage)

			if (DTSite.openedPage.selectedPhoto > pageReal){


				var whatI = 0;

				if (DTSite.openedPage.selectedPhoto >= 0){
					whatI = Math.floor(DTSite.openedPage.selectedPhoto % photosLenght);
				}else{

					var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPhoto / photosLenght));

					whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * photosLenght)) % photosLenght);
				}

				DTSite.openedPage.selectedPhoto = pageReal;

				if (whatI != photosLenght - 1){
					arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);
					
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

					DTSite.openedPage.checkFlov = "down";

					if (!DTSite.mobileVersion){
						TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
					}else{
						DTSite.myScrollProj.goToPage(0, pageReal, 1000, IScroll.utils.ease.circular);
					}

				}else{

					arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

					DTSite.openedPage.checkFlov = "down";

					if (!DTSite.mobileVersion){
						TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
					}else{
						DTSite.myScrollProj.goToPage(0, pageReal, 1000, IScroll.utils.ease.circular);
					}
				}

			}else{
				DTSite.openedPage.selectedPhoto = pageReal;

				var whatI = 0;
	
				if (DTSite.openedPage.selectedPhoto >= 0){
					whatI = Math.floor(DTSite.openedPage.selectedPhoto % 1);
				}else{

					var whatIT = Math.abs(Math.floor(DTSite.openedPage.selectedPhoto / photosLenght));

					whatI = Math.floor((DTSite.openedPage.selectedPhoto + (whatIT * photosLenght)) % photosLenght);
				}


				if (whatI != photosLenght - 1){


					arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);
					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

					DTSite.openedPage.checkFlov = "up";

					if (!DTSite.mobileVersion){
						TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
					}else{
						DTSite.myScrollProj.goToPage(0, pageReal, 1000, IScroll.utils.ease.circular);
					}
				}else{


					arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

					TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

					DTSite.openedPage.checkFlov = "up";

					if (!DTSite.mobileVersion){
						TweenLite.to(DTSite.openedPage.selectedProjectPhotoWrapper, 1, {y:(-DTSite.openedPage.selectedPhoto * (DTSite.openedPage.projectHeightB + 10)), ease:Power3.easeOut, onUpdate:function(){DTSite.openedPage.reflovPhotosIns()}});
					}else{
						DTSite.myScrollProj.goToPage(0, pageReal, 1000, IScroll.utils.ease.circular);
					}
				}
			}

			DTSite.openedPage.disablePhotosActions();
		});
}

ProjectsPage.prototype.setNavigation = function(){

	//TweenLite.delayedCall(2, this.arcBack);

	//stageProjects

	//console.log("this.projects.length ", this.projects.length);

	var pages = 0;

	if (!DTSite.mobileVersion) {
		$('#prevProjects').css("display", "block");
		$('#nextProjects').css("display", "block");
	}

	$('#navigationProjects').empty();

	var z = 0;

	this.projectPages = Math.ceil(this.projects.length/this.projectPerPage);

	var navi = ['<div id="selectedNaviArc"></div>'];

	var helperScroll = [];

	if (DTSite.mobileVersion){
		helperScroll.push('<div id="containerHelper" style="position:absolute;">');
	}

	for (z;z<this.projectPages;z++){
		navi.push('<div class="naviBtn"><img src="'+DTSite.adressTmp+'img/dot.svg" id="naviDot" width="8px" height="8px"><div class="naviBtnIn"></div></div>');

		if (DTSite.mobileVersion){

			if(z != this.projectPages - 1){
				helperScroll.push('<div style="position:absolute; left:'+ parseInt((z*this.projectPerPage*(this.projectWidth+10))) +'px; width:1px; height:1px;"></div>');
			}else{
				helperScroll.push('<div style="position:absolute; left:'+ parseInt((this.projects.length * (this.projectWidth+10)) - (this.projectPerPage*(this.projectWidth+10))) +'px; width:1px; height:1px;"></div>');
			}
		}
	}

	if (DTSite.mobileVersion){
		helperScroll.push('</div>');
	}

	$('#projectsStageHolder').append(helperScroll.join( "" ));


	$('#navigationProjects').width(26*this.projectPages);

	$('#navigationProjects').append(navi.join( "" ));

	this.setNavigationAction();


	TweenLite.to(this.nextAnim, 0.5, {nextPosition:29, onUpdate:this.setNextPosition, onUpdateParams:[this], delay:1});

	TweenLite.to(this.prevAnim, 0.5, {prevPosition:29, onUpdate:this.setPrevPosition, onUpdateParams:[this], delay:1});

}


ProjectsPage.prototype.setPhotosNavigation = function(){

	$('#navigationPhotos').empty();


	TweenLite.set('#navigationPhotos', {x:100});

	TweenLite.to('#navigationPhotos', 2, {x:0, ease:Expo.easeOut, delay:1});

	var z = 0;

	var len = this.stageProjects[this.selectedProject].pictures.length;

	var navi = ['<div id="selectedNaviArc2"></div>'];


	var helperScroll = [];

	if (DTSite.mobileVersion){
		helperScroll.push('<div id="containerHelperIns" style="position:absolute;">');
	}


	for (z;z<len;z++){
		navi.push('<div class="naviBtn"><img src="'+DTSite.adressTmp+'img/dot.svg" class="naviDot" id="naviDot'+z+'"><div class="naviBtnIn"></div></div>');


		if (DTSite.mobileVersion){

			helperScroll.push('<div style="position:absolute; z-index:300; top:'+ parseInt((z*(this.projectHeightB+10))) +'px; width:1px; height:1px;"></div>');
		}
	}

	if (DTSite.mobileVersion){
		helperScroll.push('</div">');
	}


	$('#navigationPhotos').height(26*len);

	$('#navigationPhotos').append(navi.join( "" ));

	this.selectedProjectDiv.find(".photoWrapper").append(helperScroll.join( "" ));

	TweenLite.killDelayedCallsTo(DTSite.openedPage.setPhotosNavigationAction);

	TweenLite.delayedCall(1, DTSite.openedPage.setPhotosNavigationAction);

}


ProjectsPage.prototype.arcBack = function(){
	//arcTween(DTSite.svgElement.foregroundArcNavi.transition().duration(1500), 480 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviProjects);
}

ProjectsPage.prototype.disableAction = function(el){

	$(el).off("mouseout");

	$(el).off("click");
}

ProjectsPage.prototype.setUpAction = function(el){
		$(el).on("mouseover", this.mouseOverStage);
		//$(el).on("mousemove", this.mouseMoveOverStage);
		$(el).on("mouseout", this.mouseOutStage);

		//this.reflovProjects("prev");

		//console.log(el);

		$(el).on("click", function(event){
	$('#stageHolder .title-page').css('display','none');
	$(el).off("mouseover");
			event.preventDefault();

			if (DTSite.loadingProject) return;

			if (DTSite.mobileVersion) DTSite.myScrollProjects.disable();

			DTSite.loadingProject = true;

			$(el).off("mouseover");
			$(el).off("click");
			$(el).off("mouseout");

			TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextAuto);

			DTSite.openedPage.selectedProjectDiv = $(event.target).parent().parent();

			DTSite.openedPage.selectedProjectId = parseInt(DTSite.openedPage.selectedProjectDiv.data("id"));


			var projectIns = DTSite.openedPage.selectedProjectDiv.find(".projectMiniImgIns");

			//TweenLite.to(projectIns, 0.3, {x:0, y:0 + (this.projectHeight*-whatPic), width:this.projectWidth, height:this.projectHeight, ease:Power4.easeOut, overwrite: "all"});

			TweenLite.to(projectIns[0], 0.5, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, ease:Power4.easeOut, overwrite: "all"});

			TweenLite.to(projectIns[0], 0.5, {x:0, y:0, ease:Power4.easeOut});


			var top = DTSite.openedPage.selectedProjectDiv.find(".loaderTop");
			var bottom = DTSite.openedPage.selectedProjectDiv.find(".loaderBottom");
			var left = DTSite.openedPage.selectedProjectDiv.find(".loaderLeft");
			var right = DTSite.openedPage.selectedProjectDiv.find(".loaderRight");

			top.css("display","block");
			bottom.css("display","block");
			left.css("display","block");
			right.css("display","block");

			TweenLite.set(top, {scaleX:0, scaleY:1, transformOrigin:"0% 0%"});
			TweenLite.set(bottom, {scaleX:0, scaleY:1, transformOrigin:"100% 100%"});
			TweenLite.set(left, {scaleY:0, scaleX:1, transformOrigin:"0% 100%"});
			TweenLite.set(right, {scaleY:0, scaleX:1, transformOrigin:"100% 0%"});

			TweenLite.to(top, 0.3, {scaleY:1, transformOrigin:"0% 0%"});
			TweenLite.to(bottom, 0.3, {scaleY:1, transformOrigin:"100% 100%"});
			TweenLite.to(left, 0.3, {scaleX:1, transformOrigin:"0% 100%"});
			TweenLite.to(right, 0.3, {scaleX:1, transformOrigin:"100% 0%"});

			var tabTmp = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProjectId].pictures.slice(1);

			AssetsLoader.loadPictures(tabTmp);

			DTSite.bg.changeBg(DTSite.openedPage.menuPosition + 3);
		});
}

ProjectsPage.prototype.showProjectByID = function (ref){
	if (DTSite.loadingProject) return;

	DTSite.loadingProject = true;

	$(ref).off("mouseover");
	$(ref).off("click");
	$(ref).off("mouseout");

	TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextAuto);

	if (DTSite.mobileVersion) DTSite.myScrollProjects.disable();
	
	DTSite.openedPage.selectedProjectDiv = $(ref);

	DTSite.openedPage.selectedProjectId = parseInt(DTSite.openedPage.selectedProjectDiv.data("id"));

	var overlay = DTSite.openedPage.selectedProjectDiv.find(".projectOverlay");

	TweenLite.to(overlay, 0.3, {autoAlpha:0, ease:Power4.easeOut});

	var projectIns = DTSite.openedPage.selectedProjectDiv.find(".projectMiniImgIns");

	TweenLite.to(projectIns[0], 0.3, {css:{width:parseInt(DTSite.openedPage.projectWidth), height:parseInt(DTSite.openedPage.projectHeight)}, ease:Power4.easeOut, overwrite: "all"});

	TweenLite.to(projectIns[0], 0.3, {x:0, y:0, ease:Power4.easeOut});


	var top = DTSite.openedPage.selectedProjectDiv.find(".loaderTop");
	var bottom = DTSite.openedPage.selectedProjectDiv.find(".loaderBottom");
	var left = DTSite.openedPage.selectedProjectDiv.find(".loaderLeft");
	var right = DTSite.openedPage.selectedProjectDiv.find(".loaderRight");

	top.css("display","block");
	bottom.css("display","block");
	left.css("display","block");
	right.css("display","block");

	TweenLite.set(top, {scaleX:0, scaleY:1, transformOrigin:"0% 0%"});
	TweenLite.set(bottom, {scaleX:0, scaleY:1, transformOrigin:"100% 100%"});
	TweenLite.set(left, {scaleY:0, scaleX:1, transformOrigin:"0% 100%"});
	TweenLite.set(right, {scaleY:0, scaleX:1, transformOrigin:"100% 0%"});

	TweenLite.to(top, 0.3, {scaleY:1, transformOrigin:"0% 0%"});
	TweenLite.to(bottom, 0.3, {scaleY:1, transformOrigin:"100% 100%"});
	TweenLite.to(left, 0.3, {scaleX:1, transformOrigin:"0% 100%"});
	TweenLite.to(right, 0.3, {scaleX:1, transformOrigin:"100% 0%"});

	var tabTmp = DTSite.openedPage.stageProjects[DTSite.openedPage.selectedProjectId].pictures.slice(1);

	AssetsLoader.loadPictures(tabTmp);

	DTSite.bg.changeBg(DTSite.openedPage.menuPosition + 3);
}


ProjectsPage.prototype.showProject = function (id){

	DTSite.selectedMenu = DTSite.openedPage.menuPosition + 3;

	DTSite.openedPage.selectedPhoto = 0;

	//DTSite.bg.changeBg();

	this.selectedProject = parseInt(id);

	this.selectedProjectPhotoWrapper = $(DTSite.openedPage.selectedProjectDiv).find(".photoWrapper");

	//console.log(this.selectedProjectPhotoWrapper);
	
	this.setPhotosNavigation();

	this.projectVisible = true;

	$('#prevProjects').css("display", "block");

	var whereNavi = DTSite.browser_height/2;

	TweenLite.to("#navigationProjects", 0.8, {y:whereNavi, ease:Power1.easeOut});

	TweenLite.to("#prevProjectsB", 1, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut});

	TweenLite.to("#nextProjectsB", 1, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut});

	TweenLite.to("#prevC", 1, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut});

	TweenLite.to("#nextC", 1, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut, onComplete:function(){$("#nextProjects").css("display", "none")}});

	if (DTSite.openedPage.stageProjects[parseInt(id)].title2 != ""){
		$("#projectTxtTitleP").html(DTSite.openedPage.stageProjects[parseInt(id)].title.toUpperCase()+"<br>"+DTSite.openedPage.stageProjects[parseInt(id)].title2.toUpperCase());
	}else{
		$("#projectTxtTitleP").html(DTSite.openedPage.stageProjects[parseInt(id)].title.toUpperCase());
	}

	$("#projectTxtClientInsP").html(DTSite.openedPage.stageProjects[parseInt(id)].client.toUpperCase());

	$("#projectDesc").html(DTSite.openedPage.stageProjects[parseInt(id)].desc);

	if (DTSite.openedPage.stageProjects[id].type == 0){
		$("#projectTypeIns").html(this.txtType1);
	}else{
		$("#projectTypeIns").html(this.txtType2);
	}

	$("#projectDescription").css("display","block");


	if (DTSite.mobileVersion){

		var tabletPhotosScroller = DTSite.openedPage.selectedProjectDiv.find(".photoScroller")

		var tabletPhotosWrapper = DTSite.openedPage.selectedProjectDiv.find(".photoWrapper")


		var halfHeight = parseInt(window.innerHeight/2);

		var whereY = halfHeight + parseInt(DTSite.openedPage.projectHeight/2) + 20;

		var difference = -parseInt((DTSite.openedPage.projectHeight - DTSite.openedPage.projectHeightB)/2);

		var whereH2 = parseInt(DTSite.openedPage.projectHeightB + (DTSite.browser_height - (whereY + DTSite.openedPage.projectHeightB - 10)) - difference);

		var whereH1 = parseInt(DTSite.browser_height - (whereH2 + DTSite.openedPage.projectHeightB + 20));

		var ile = parseInt(whereH2 - DTSite.openedPage.projectHeightB + 20) + 2;

		tabletPhotosWrapper.css("height", (DTSite.openedPage.selectedProjectPhotos.length * (DTSite.openedPage.projectHeightB + 10))+ ile);

		//var mobileCont = document.getElementById("mobileContent");

		DTSite.myScrollProj = new IScroll(tabletPhotosScroller[0],
		{
			snap:'#containerHelperIns>div',
			snapSpeed:400,
			scrollY:true,
			scrollX:false,
			click:true,
			bounceTime: 800,
			deceleration: 0.001
		});

		DTSite.myScrollProj.on('beforeScrollStart', this.scrollStartPhoto);

		DTSite.myScrollProj.on('scrollEnd', this.scrollEndPhoto);

		DTSite.myScrollProj.refresh();
	}

	var whereY = parseInt((DTSite.browser_height - $("#projectDescription").height())/2);


	$("#projectDescription").css("top", whereY);


	TweenLite.to("#projectDescription", 2, {autoAlpha:1, delay:1, ease:Expo.easeOut});


	TweenLite.to("#prevProjectsB", 0, {x:0, ease:Power1.easeOut, delay:1});
	TweenLite.to("#prevC", 0, {x:0, ease:Power1.easeOut, delay:1});

	TweenLite.to(this.prevAnim, 0, {prevPosition:0, onUpdate:this.setPrevPosition, onUpdateParams:[this], delay:0.5, overwrite:"all"});

	TweenLite.to(this.prevAnim, 1, {prevPosition:29, onUpdate:this.setPrevPosition, onUpdateParams:[this], delay:2});
}	

ProjectsPage.prototype.scrollStartPhoto = function (event){

	DTSite.scrollStartPhotoByTouch = true;
}

ProjectsPage.prototype.scrollEndPhoto = function (event){

	if (DTSite.scrollStartPhotoByTouch){

		if (DTSite.loadingProject) return;
			
		DTSite.openedPage.selectedPhoto = DTSite.myScrollProj.currentPage.pageY;

		arcTween(DTSite.svgElement.foregroundArcNavi2.transition().duration(200), 240 * (Math.PI/180) + 240 * (Math.PI/180), 240 * (Math.PI/180) + 240 * (Math.PI/180), DTSite.svgElement.arcNaviPhotos);

		TweenLite.killDelayedCallsTo(DTSite.openedPage.selectPhotoPage)

		TweenLite.delayedCall(0.5, DTSite.openedPage.selectPhotoPage)

		DTSite.openedPage.disablePhotosActions();

		DTSite.scrollStartPhotoByTouch = false;


	}

}

ProjectsPage.prototype.fillProjects = function (ref){

	if (DTSite.selectedMenu != ref.menuPosition) return;

	/*$.getJSON(DTSite.adressTmp + ref.projectsSrc)
		.done(function( json ) {*/

	var items = [];

	TweenLite.set("#prevProjectsB", {x:0});

	TweenLite.set("#nextProjectsB", {x:0});

	TweenLite.set("#prevC", {x:0});

	TweenLite.set("#nextC", {x:0});


	$('#projectsStageHolder').empty()

	var h = 0;

	ref.stageProjects = [];

	if (ref.projectsSrc == DTSite.stageJSON){
		ref.stageProjects = AssetsLoader.stageItems;
	}else{
		ref.stageProjects = AssetsLoader.eventItems;
	}

	ref.showProjectFromLinkId = -1;

	
	var len = ref.stageProjects.length;

	for (h;h<len;h++) {
		
		if (!DTSite.mobileVersion){
			var txt = '<ul id="projectHolder'+h+'" class="projectMiniImg" style="left:'+ parseInt(((DTSite.openedPage.projectWidth + 10) * h) + DTSite.openedPage.fixPosXTMP) +'px;" data-id='+h+'><div class="photoWrapper">';
		}else{
			var txt = '<ul id="projectHolder'+h+'" class="projectMiniImg" style="left:'+ parseInt(((DTSite.openedPage.projectWidth + 10) * h) + DTSite.openedPage.fixPosXTMP) +'px;" data-id='+h+'><div class="photoScroller"><div class="photoWrapper">';
		}

		if (DTSite.selectedProductURL == ref.stageProjects[h].uri){
			DTSite.selectedProductURL = "";
			ref.showProjectFromLink = true;
			ref.showProjectFromLinkId = h;
		}

		txt += '<li class="imgProject" style="top:0px; z-index:'+parseInt(100 - ref.stageProjects[h].pictures.length)+'; display:block;"><img id="project0" class="projectMiniImgIns" src="'+ref.stageProjects[h].pictures[0].src+'"></img><div class="projectOverlay"></div></li>';
		
		/*for (z;z<il;z++){
			if (z == 0){
				txt += '<li class="imgProject" style="top:0px; z-index:'+parseInt(100 - il-z)+'; display:block;"><img id="project'+h+'" class="projectMiniImgIns" src="'+DTSite.adressTmp+val.pictures[z].src+'"></img><div class="projectOverlay"></div></li>';
			}

			var obj = new Object();
			obj.srcM = DTSite.adressTmp+val.pictures[z].src;
			obj.src = DTSite.adressTmp+val.pictures[z].src;

			projectObj.pictures.push(obj);
		}*/


		if (DTSite.mobileVersion){
			txt += '</div>';
		}

		if (ref.stageProjects[h].type == 0){
			txt += '</div><div class="txtWrapper"><div class="loaderTop"></div><div class="loaderLeft"></div><div class="loaderRight"></div><div class="loaderBottom"></div><div class="projectTxtType"><div class="projectTxtTypeIns">'+ref.txtType1.toUpperCase()+'</div></div>';
		}else{
			txt += '</div><div class="txtWrapper"><div class="loaderTop"></div><div class="loaderLeft"></div><div class="loaderRight"></div><div class="loaderBottom"></div><div class="projectTxtType"><div class="projectTxtTypeIns">'+ref.txtType2.toUpperCase()+'</div></div>';
		}

		if (ref.stageProjects[h].title2 == ""){
			txt += '<div class="projectTxtTitle">'+ref.stageProjects[h].title+'</div><div class="projectTxtTitle2">'+ref.stageProjects[h].title+'</div><div class="projectTxtClient"><div class="projectTxtClientIns">'+ref.stageProjects[h].client+'</div></div><div class="projectOver"></div></div></ul>';
		}else{
			txt += '<div class="projectTxtTitle">'+ref.stageProjects[h].title+'</div><div class="projectTxtTitle2">'+ref.stageProjects[h].title+'</div><div class="projectTxtTitle_2">'+ref.stageProjects[h].title2+'</div><div class="projectTxtTitle2_2">'+ref.stageProjects[h].title2+'</div><div class="projectTxtClient"><div class="projectTxtClientIns">'+ref.stageProjects[h].client+'</div></div><div class="projectOver"></div></div></ul>';
		}

		//ref.stageProjects.push(projectObj);

		items.push(txt);

		//h+=1;
	}

	if (ref.showProjectFromLinkId == -1){

		if (DTSite.addHistory) {
			DTSite.changePageHistory = false;
			History.replaceState({state:DTSite.selectedMenu}, DTSite.siteTitles[DTSite.selectedMenu].title + " Digital Ensource", DTSite.adressTmp+DTSite.siteTitles[DTSite.selectedMenu].short);
		}

	}

	$('#projectsStageHolder').append(items.join( "" ));

	ref.projects = $("#projectsStageHolder").children(".projectMiniImg");

	ref.setNavigation();

	ref.setUpPos();

	DTSite.openedPage.checkFlovProjects = "prev";

	ref.reflovProjects(false);

	ref.setUpProjects();


		
	/*	.fail(function( jqxhr, textStatus, error ) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
	});*/
}

ProjectsPage.prototype.setUpPos = function(ref){
	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	ref_.projectPerPage = 2;

	if (DTSite.browser_width > 1023 && DTSite.browser_width < 1600){
		ref_.projectPerPage = 2;
	}else if (DTSite.browser_width >= 1600){
		ref_.projectPerPage = 3;
	}else{
		ref_.projectPerPage = 1;
	}

	ref_.stagePageTitle.scaleX = 1 * DTSite.scale;
	ref_.stagePageTitle.scaleY = 1 * DTSite.scale;

	ref_.stagePageTitle.x = parseInt((DTSite.browser_width - parseInt(ref_.titleTextWidth* DTSite.scale))/2);
	ref_.stagePageTitle.y = parseInt((DTSite.browser_height - parseInt(200* DTSite.scale))/2);

	
	ref_.projectWidth = parseInt(503 * DTSite.scaleContainerW);

	ref_.projectHeight = parseInt(327 * DTSite.scaleContainerW);

	if (ref_.projectWidth < 400){
		ref_.projectWidth = 400;

		var scaleH = ref_.projectWidth / 503;

		ref_.projectHeight = 327 *scaleH;
	}


	var projectsWidthVis = (ref_.projectWidth * ref_.projectPerPage) + (10 * (ref_.projectPerPage - 1));

	ref_.fixPosX = parseInt((DTSite.browser_width - projectsWidthVis)/2);
	ref_.fixPosXTMP = 0;

	DTSite.navPrevD.style.width = parseInt(ref_.fixPosX-10) +"px";
	DTSite.navNextD.style.width = parseInt(ref_.fixPosX-10) +"px";

	if (DTSite.mobileVersion){
		ref_.fixPosX = 0;
		ref_.fixPosXTMP = parseInt((DTSite.browser_width - projectsWidthVis)/2);

		DTSite.navPrevD.style.width = parseInt(ref_.fixPosXTMP-10) +"px";
		DTSite.navNextD.style.width = parseInt(ref_.fixPosXTMP-10) +"px";
	}

	TweenLite.set("#projectsStageHolder", {x:DTSite.openedPage.fixPosX});

	var halfWidth = parseInt(window.innerWidth/2);
	var halfHeight = parseInt(window.innerHeight/2);

	ref_.projectWidthB = parseInt(halfWidth - (100 * DTSite.scaleContainerW));

	DTSite.navPrevD.style.top = halfHeight - parseInt(ref_.projectHeight/2) +"px";
	DTSite.navNextD.style.top = halfHeight - parseInt(ref_.projectHeight/2) +"px";

	DTSite.navPrevD.style.height = ref_.projectHeight +"px";
	DTSite.navNextD.style.height = ref_.projectHeight +"px";

	DTSite.navPrev.style.top = parseInt((ref_.projectHeight - 32)/2) +"px";
	DTSite.navNext.style.top = parseInt((ref_.projectHeight - 32)/2) +"px";

	/*if (ref_.projectWidthB > 653){
		ref_.projectWidthB = 653;
	}*/

	var scaleB = ref_.projectWidthB/653;

	ref_.projectHeightB = parseInt(426 * scaleB);

	//console.log("ref_.projectWidthB ", ref_.projectWidthB)

	$("#navigationProjects").css("top", halfHeight + parseInt(ref_.projectHeight/2) + 20);

	if (ref_.projects){
		var len = ref_.projects.length;
		var h = 0;

		for (h;h<len;h++){
			$(ref_.projects[h]).css("top", halfHeight - parseInt(ref_.projectHeight/2));

			$(ref_.projects[h]).css("width", parseInt(ref_.projectWidth));
			$(ref_.projects[h]).css("height", parseInt(ref_.projectHeight));

		}
	}

	$("#prevPhoto").css("width", ref_.projectWidthB);
	$("#nextPhoto").css("width", ref_.projectWidthB);


	var whereY = halfHeight + parseInt(ref_.projectHeight/2) + 20;

	var difference = -parseInt((DTSite.openedPage.projectHeight - DTSite.openedPage.projectHeightB)/2);

	var whereH2 = ref_.projectHeightB + (DTSite.browser_height - (whereY + ref_.projectHeightB - 10)) - difference;
	var tmpH2 = parseInt(whereH2);

	var whereH1 = DTSite.browser_height - (tmpH2 + ref_.projectHeightB + 20);
	var tmpH1 = parseInt(whereH1);


	var whereX = parseInt(100 * DTSite.scaleContainerW);

	$("#prevPhoto").css("height", tmpH2);

	$("#nextPhoto").css("height", tmpH1);

	$("#prevPhoto").css("right", whereX);
	$("#nextPhoto").css("right", whereX);

	$("#navigationPhotos").css("right", parseInt(31* DTSite.scaleContainerW));

	var widthDesc = parseInt(440 * DTSite.scale);

	if (widthDesc < 250){
		widthDesc = 250;
	}

	$("#projectMainTitle").css("width", widthDesc);

	var topDesc = 250 * DTSite.scaleY;

	var leftDesc = halfWidth - widthDesc - (100 * DTSite.scaleContainerW);


	//$("#projectDescription").css("top", topDesc);
	$("#projectDescription").css("left", leftDesc);


	var fontSizeType = 22 * DTSite.scale;

	$("#projectTypeIns").css("fontSize", fontSizeType);


	var fontSizeTitle = 46 * DTSite.scale;

	$("#projectTxtTitleP").css("fontSize", fontSizeTitle);

	var lineTitle = 43 * DTSite.scale;

	$("#projectTxtTitleP").css("lineHeight", lineTitle + "px");

	var fontSizeClient = 29 * DTSite.scale;

	$("#projectTxtClientInsP").css("fontSize", fontSizeClient);


	var fontSizeDesc = 16 * DTSite.scale;

	$("#projectDesc").css("fontSize", fontSizeDesc);

	var lineHeightDesc = 26 * DTSite.scale;

	$("#projectDesc").css("lineHeight", lineHeightDesc +"px");


	var topTitle = 24 * DTSite.scale;

	$("#projectTxtTitleP").css("marginTop", topTitle +"px");


	var topClient = 24 * DTSite.scale;

	$("#projectTxtClient").css("marginTop", topClient +"px");


	var topDesc = 32 * DTSite.scale;

	$("#projectDesc").css("marginTop", topDesc +"px");


	var distTitleContent = parseInt(DTSite.titleContinerH/2) + 50;

	logoResize();
}

ProjectsPage.prototype.resize = function(ref){

	if (ref){
		ref_ = ref;
	}else{
		ref_ = this;
	}

	ref_.selectedPage = 0;

	//TweenLite.to(ref_, 0.5, {titlePosition:0, onUpdate:this.setMcPosition, onUpdateParams:[ref_], overwrite:"all"});

	//var where = parseInt(DTSite.browser_height/2 - (DTSite.titleContinerH/2) - 100);

	TweenLite.to(DTSite.titlesContainerIns, 0, {y:-this.projectHeight/2 - 75 * DTSite.scale, delay:0});

	TweenLite.to("#prevProjectsB", 0, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#nextProjectsB", 0, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#prevC", 0, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#nextC", 0, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	//TweenLite.to("#titlesContainer", 0.5, {y:70, delay:0, ease:Expo.easeIn, overwrite:"all"});


	TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextAuto);

	TweenLite.to("#projectDescription", 0, {autoAlpha:0, delay:0, ease:Expo.easeOut, onComplete:this.hideDivs, overwrite:"all"});

	$("#projectsStageHolder").empty();

	//var whereNavi = DTSite.browser_height/2;
	//TweenLite.to("#navigationProjects", 0.8, {y:whereNavi, ease:Power1.easeOut, overwrite:"all"});

	ref_.setUpPos();
	ref_.fillProjects(ref_);

}

ProjectsPage.prototype.updateMcPos = function(){

	if (this.stagePageTitle == null) return;

	if (this.stagePageTitle.currentFrame >= 109){
		this.stagePageTitle.gotoAndStop(109);
	}

	this.titleAnim.titlePosition = this.stagePageTitle.currentFrame;
}

ProjectsPage.prototype.endPage = function(){

	this.pageEndF = true;

	TweenLite.to(this.titleAnim, 0.5, {titlePosition:0, onUpdate:this.setMcPosition, onUpdateParams:[this], overwrite:"all"});

	//var where = parseInt(DTSite.browser_height/2 - (DTSite.titleContinerH/2) - 100);

	TweenLite.to("#prevProjectsB", 0.5, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#nextProjectsB", 0.5, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#prevC", 0.5, {x:-($("#prevProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#nextC", 0.5, {x:($("#nextProjectsB").width() + 20), ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to(DTSite.openedPage.nextAnim, 0, {nextPosition:0, onUpdate:DTSite.openedPage.setNextPosition, onUpdateParams:[this], delay:0, overwrite:"all"});

	TweenLite.to(DTSite.openedPage.prevAnim, 0, {prevPosition:0, onUpdate:DTSite.openedPage.setPrevPosition, onUpdateParams:[this], delay:0, overwrite:"all"});

	TweenLite.to(DTSite.titlesContainerIns, 0.5, {y:70, delay:0, ease:Expo.easeIn, overwrite:"all"});

	TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextPhotoAuto);
	
	TweenLite.killDelayedCallsTo(DTSite.openedPage.clickNextAuto);

	TweenLite.to("#projectDescription", 0.5, {autoAlpha:0, delay:0, ease:Expo.easeOut, onComplete:this.hideDivs, overwrite:"all"});

	var where = $("#projectsStageHolder").offset().top;
	var projectIns = $("#projectsStageHolder").find(".projectMiniImg");
	TweenLite.to(projectIns, 0.5, {ease:Power4.easeInOut, y:DTSite.browser_height - where + 50, overwrite:"all"});

	this.projectsSplitText = [];

	var whereNavi = DTSite.browser_height/2;
	TweenLite.to("#navigationProjects", 0.8, {y:whereNavi, ease:Power1.easeOut, overwrite:"all"});

	TweenLite.to("#navigationPhotos", 0.5, {x:100, delay:0, ease:Power4.easeOut, overwrite:"all"});

	this.disablePrevNextPhotoAction();
	this.disableNavigationAction();
}

ProjectsPage.prototype.hideDivs = function(ref){
	this.stagePageTitle = null;

	delete this.stagePageTitle;

	if (DTSite.titlesContainerIns.contains(this.stagePageTitle)) DTSite.titlesContainerIns.removeChild(this.stagePageTitle);

	$("#projectsStageHolder").empty();
	$("#navigationProjects").empty();
	$("#navigationPhotos").empty();

	$("#projectDescription").css("display","none");
}

ProjectsPage.prototype.setMcPosition = function(ref){
	ref.stagePageTitle.gotoAndStop(ref.titleAnim.titlePosition);

	DTSite.updateTitleStage = true;
}

ProjectsPage.prototype.setNextPosition = function(ref){

	//console.log(ref.nextPosition);

	ref.strzalkaNext.gotoAndStop(ref.nextAnim.nextPosition);

	DTSite.updateNavNextStage = true;
}

ProjectsPage.prototype.setPrevPosition = function(ref){
	ref.strzalkaPrev.gotoAndStop(ref.prevAnim.prevPosition);

	DTSite.updateNavPrevStage = true;

	//console.log(ref.prevAnim.prevPosition);

};;StagePage.prototype = new ProjectsPage();
StagePage.prototype.constructor = StagePage;

function StagePage(){	
	this.titleAnim = new Object();

	this.titleAnim.titlePosition = 0;

	this.stageProjects = [];

	this.projectPerPage = 2;

	this.selectedPage = 0;

	this.projectWidth = 503;
	this.projectHeight = 327;

	this.projectWidthB = 653;
	this.projectHeightB = 426;

	this.fixPosX = 0;

	this.strzalkaPrev = new lib.strzalka2();
	this.strzalkaNext = new lib.strzalka2();

	this.strzalkaNext.regX = 40;
	this.strzalkaNext.scaleX = -1;

	this.prevAnim = new Object();
	this.nextAnim = new Object();

	this.prevAnim.prevPosition = 0;

	this.nextAnim.nextPosition = 0;

	this.removeItemsCount = 0;

	this.removeItems = 0;

	this.projectsSplitText = [];

	this.selectedProject = -1;

	this.projectVisible = false;

	this.whereToBackX = 0;

	this.selectedProjectDiv;

	this.selectedProjectPhotoWrapper;

	this.selectedProjectId;

	this.photosLength = 0;

	this.selectedPhoto = 0;

	this.projectsInMotion = false;

	this.projectsSrc = DTSite.stageJSON;

	this.titleTextWidth = 1220;

	this.menuPosition = 2;

	this.txtType1 = "STAGE DESIGN";

	this.txtType2 = "TV";

	this.pageEndF = false;
}

StagePage.prototype.startPage = function(){

	this.pageEndF = false;
	this.stagePageTitle = new lib.stage();

	this.stagePageTitleIns = new createjs.Container();

	this.stagePageTitleIns.addChild(this.stagePageTitle);

	DTSite.titlesContainerIns.addChild(this.stagePageTitleIns);


	this.removeItemsCount = 0;
	this.selectedPage = 0;

	// NAVI PREV NEXT
	DTSite.navPrevStage.addChild(this.strzalkaPrev);
	DTSite.navNextStage.addChild(this.strzalkaNext);


	this.stagePageTitle.gotoAndStop(0);

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		TweenLite.to(this.titleAnim, 2.0, {titlePosition:109, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:0.3});
	}else{
		TweenLite.to(this.titleAnim, 2.0, {titlePosition:109, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:2.1 - 0.7});
	}

	//TweenLite.to("#titlesContainer", 0, {z:0, transformPerspective:200, delay:0, overwrite:"all"});

	this.setUpPos();

	var tl = new TimelineLite();

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:0.5 - 0.5});

		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "+=0.3");

		tl.to(DTSite.titlesContainerIns, 3, {y:-this.projectHeight/2 - 75 * DTSite.scale, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "-=2");
	}else{
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:0.5 - 0.5});

		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "+=1.3");

		tl.to(DTSite.titlesContainerIns, 3, {y:-this.projectHeight/2 - 75 * DTSite.scale, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "-=1.3");
	}
	tl.play();

	TweenLite.killDelayedCallsTo(this.fillProjects);
	//TweenLite.killDelayedCallsTo(this.setUpPos);

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		TweenLite.delayedCall(1.4, this.fillProjects, [this]);
	}else{
		TweenLite.delayedCall(3.7 - 0.9, this.fillProjects, [this]);
	}
	//TweenLite.delayedCall(0.8, this.setUpPos, [this]);

	$('#projectsStageHolder').empty()

	DTSite.titlesStage.update();

	if (DTSite.mobileVersion){
		this.projectStageName = "#projectsStageHolderM";
	}else{
		this.projectStageName = "#projectsStageHolder";
	}

};EventsPage.prototype = new ProjectsPage();
EventsPage.prototype.constructor = EventsPage;

function EventsPage(){	
	this.titleAnim = new Object();

	this.titleAnim.titlePosition = 0;

	this.stageProjects = [];

	this.projectPerPage = 2;

	this.selectedPage = 0;

	this.projectWidth = 503;
	this.projectHeight = 327;

	this.projectWidthB = 653;
	this.projectHeightB = 426;

	this.fixPosX = 0;

	this.strzalkaPrev = new lib.strzalka2();
	this.strzalkaNext = new lib.strzalka2();

	this.strzalkaNext.regX = 40;
	this.strzalkaNext.scaleX = -1;

	this.prevAnim = new Object();
	this.nextAnim = new Object();

	this.prevAnim.prevPosition = 0;

	this.nextAnim.nextPosition = 0;

	this.removeItemsCount = 0;

	this.removeItems = 0;

	this.projectsSplitText = [];

	this.selectedProject = -1;

	this.projectVisible = false;

	this.whereToBackX = 0;

	this.selectedProjectDiv;

	this.selectedProjectPhotoWrapper;

	this.selectedProjectId;

	this.photosLength = 0;

	this.selectedPhoto = 0;

	this.projectsInMotion = false;

	this.projectsSrc = DTSite.eventsJSON;

	this.titleTextWidth = 1000;

	this.menuPosition = 3;

	this.txtType1 = "EVENTS";

	this.txtType2 = "FAIRS";

	this.pageEndF = false;
}

EventsPage.prototype.startPage = function(){
	this.pageEndF = false;
	
	this.stagePageTitle = new lib.events();

	//this.stagePageTitle.scaleX = this.stagePageTitle.scaleY = 1;

	this.stagePageTitleIns = new createjs.Container();

	this.stagePageTitleIns.addChild(this.stagePageTitle);

	DTSite.titlesContainerIns.addChild(this.stagePageTitleIns);


	this.removeItemsCount = 0;
	this.selectedPage = 0;

	// NAVI PREV NEXT
	DTSite.navPrevStage.addChild(this.strzalkaPrev);
	DTSite.navNextStage.addChild(this.strzalkaNext);


	this.stagePageTitle.gotoAndStop(0);

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		TweenLite.to(this.titleAnim, 2.0, {titlePosition:109, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:0.3});
	}else{
		TweenLite.to(this.titleAnim, 2.0, {titlePosition:109, overwrite:"all", onUpdate:this.setMcPosition, onUpdateParams:[this], delay:2.1 - 0.7});
	}
	//TweenLite.to("#titlesContainer", 0, {z:0, transformPerspective:200, delay:0, overwrite:"all"});

	this.setUpPos();

	var tl = new TimelineLite();
	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:0.5 - 0.5});

		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "+=0.3");

		tl.to(DTSite.titlesContainerIns, 3, {y:-this.projectHeight/2 - 75 * DTSite.scale, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "-=2");
	}else{
		tl.to(DTSite.titlesContainerIns, 0, {y:70, delay:0.5 - 0.5});

		tl.to(DTSite.titlesContainerIns, 4, {y:0, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "+=1.3");

		tl.to(DTSite.titlesContainerIns, 3, {y:-this.projectHeight/2 - 75 * DTSite.scale, ease:Expo.easeOut, onUpdate:this.setMcPosition, onUpdateParams:[this]}, "-=1.3");
	}
	tl.play();

	TweenLite.killDelayedCallsTo(this.fillProjects);
	

	if (DTSite.mobileSimple == true || DTSite.webGLReady == false){
		TweenLite.delayedCall(1.4, this.fillProjects, [this]);
	}else{
		TweenLite.delayedCall(3.7 - 0.9, this.fillProjects, [this]);
	}

	//TweenLite.delayedCall(0.8, this.setUpPos, [this]);

	$('#projectsStageHolder').empty()

	DTSite.titlesStage.update();

	if (DTSite.mobileVersion){
		this.projectStageName = "#projectsStageHolderM";
	}else{
		this.projectStageName = "#projectsStageHolder";
	}
};