(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 220,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/about_1.jpg", id:"about_1"}
	]
};

// stage content:
(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stage.scaleMode = "noScale";*/
	}
	this.frame_84 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(1));

	// Layer 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAkUAN6IAA3bIMDAAIAAXbg");
	var mask_graphics_30 = new cjs.Graphics().p("EAkUAN6IAA3bIMDAAIAAXbg");
	var mask_graphics_31 = new cjs.Graphics().p("EAj3AN5IAA3aIMCAAIAAXag");
	var mask_graphics_32 = new cjs.Graphics().p("EAjaAN4IAA3aIMCAAIAAXag");
	var mask_graphics_33 = new cjs.Graphics().p("EAi/AN3IAA3aIMCAAIAAXag");
	var mask_graphics_34 = new cjs.Graphics().p("EAilAN2IAA3aIMCAAIAAXag");
	var mask_graphics_35 = new cjs.Graphics().p("EAiNAN2IAA3aIMCAAIAAXag");
	var mask_graphics_36 = new cjs.Graphics().p("EAh2AN1IAA3aIMCAAIAAXag");
	var mask_graphics_37 = new cjs.Graphics().p("EAhgAN0IAA3aIMCAAIAAXag");
	var mask_graphics_38 = new cjs.Graphics().p("EAhLAN0IAA3aIMCAAIAAXag");
	var mask_graphics_39 = new cjs.Graphics().p("EAg4ANzIAA3aIMCAAIAAXag");
	var mask_graphics_40 = new cjs.Graphics().p("EAgmANzIAA3aIMCAAIAAXag");
	var mask_graphics_41 = new cjs.Graphics().p("EAgWANyIAA3aIMCAAIAAXag");
	var mask_graphics_42 = new cjs.Graphics().p("EAgHANyIAA3aIMCAAIAAXag");
	var mask_graphics_43 = new cjs.Graphics().p("Af5NxIAA3aIMCAAIAAXag");
	var mask_graphics_44 = new cjs.Graphics().p("AfsNxIAA3aIMCAAIAAXag");
	var mask_graphics_45 = new cjs.Graphics().p("AfhNxIAA3aIMCAAIAAXag");
	var mask_graphics_46 = new cjs.Graphics().p("AfXNwIAA3aIMCAAIAAXag");
	var mask_graphics_47 = new cjs.Graphics().p("AfONwIAA3aIMCAAIAAXag");
	var mask_graphics_48 = new cjs.Graphics().p("AfHNwIAA3aIMCAAIAAXag");
	var mask_graphics_49 = new cjs.Graphics().p("AfBNwIAA3aIMCAAIAAXag");
	var mask_graphics_50 = new cjs.Graphics().p("Ae8NwIAA3aIMCAAIAAXag");
	var mask_graphics_51 = new cjs.Graphics().p("Ae5NwIAA3aIMCAAIAAXag");
	var mask_graphics_52 = new cjs.Graphics().p("Ae3NwIAA3aIMCAAIAAXag");
	var mask_graphics_53 = new cjs.Graphics().p("Ae2NwIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:309.5,y:89}).wait(30).to({graphics:mask_graphics_30,x:309.5,y:89}).wait(1).to({graphics:mask_graphics_31,x:306.5,y:88.9}).wait(1).to({graphics:mask_graphics_32,x:303.7,y:88.8}).wait(1).to({graphics:mask_graphics_33,x:301,y:88.8}).wait(1).to({graphics:mask_graphics_34,x:298.4,y:88.7}).wait(1).to({graphics:mask_graphics_35,x:295.9,y:88.6}).wait(1).to({graphics:mask_graphics_36,x:293.6,y:88.5}).wait(1).to({graphics:mask_graphics_37,x:291.4,y:88.5}).wait(1).to({graphics:mask_graphics_38,x:289.4,y:88.4}).wait(1).to({graphics:mask_graphics_39,x:287.5,y:88.4}).wait(1).to({graphics:mask_graphics_40,x:285.7,y:88.3}).wait(1).to({graphics:mask_graphics_41,x:284,y:88.3}).wait(1).to({graphics:mask_graphics_42,x:282.5,y:88.2}).wait(1).to({graphics:mask_graphics_43,x:281.1,y:88.2}).wait(1).to({graphics:mask_graphics_44,x:279.9,y:88.2}).wait(1).to({graphics:mask_graphics_45,x:278.7,y:88.1}).wait(1).to({graphics:mask_graphics_46,x:277.7,y:88.1}).wait(1).to({graphics:mask_graphics_47,x:276.9,y:88.1}).wait(1).to({graphics:mask_graphics_48,x:276.2,y:88}).wait(1).to({graphics:mask_graphics_49,x:275.6,y:88}).wait(1).to({graphics:mask_graphics_50,x:275.1,y:88}).wait(1).to({graphics:mask_graphics_51,x:274.8,y:88}).wait(1).to({graphics:mask_graphics_52,x:274.6,y:88}).wait(1).to({graphics:mask_graphics_53,x:274.5,y:88}).wait(32));

	// Layer 16
	this.instance = new lib.about_t2();
	this.instance.setTransform(507.6,107.8,1,1,0,0,0,31.9,66.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ae2LuIAA3aIMDAAIAAXag");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ae2LuIAA3bIMDAAIAAXbg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Ae2LuIAA3bIMDAAIAAXbg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Ae2LuIAA3bIMDAAIAAXbg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ae2LuIAA3bIMDAAIAAXbg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ae2LtIAA3ZIMDAAIAAXZg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ae2LtIAA3aIMDAAIAAXag");
	var mask_1_graphics_30 = new cjs.Graphics().p("Ae2LtIAA3aIMDAAIAAXag");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ae2L0IAA3aIMDAAIAAXag");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ae2MJIAA3aIMDAAIAAXag");
	var mask_1_graphics_33 = new cjs.Graphics().p("Ae2MdIAA3aIMDAAIAAXag");
	var mask_1_graphics_34 = new cjs.Graphics().p("Ae2MuIAA3aIMDAAIAAXag");
	var mask_1_graphics_35 = new cjs.Graphics().p("Ae2M9IAA3aIMDAAIAAXag");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ae2NLIAA3aIMDAAIAAXag");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ae2NWIAA3aIMDAAIAAXag");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ae2NfIAA3aIMDAAIAAXag");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ae2NmIAA3aIMDAAIAAXag");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ae2NrIAA3aIMDAAIAAXag");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ae2NuIAA3aIMDAAIAAXag");
	var mask_1_graphics_42 = new cjs.Graphics().p("Ae2NwIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:274.5,y:-37}).wait(19).to({graphics:mask_1_graphics_19,x:274.5,y:-7}).wait(1).to({graphics:mask_1_graphics_20,x:274.5,y:2.2}).wait(1).to({graphics:mask_1_graphics_21,x:274.5,y:11}).wait(1).to({graphics:mask_1_graphics_22,x:274.5,y:19.3}).wait(1).to({graphics:mask_1_graphics_23,x:274.5,y:27.3}).wait(1).to({graphics:mask_1_graphics_24,x:274.5,y:34.9}).wait(1).to({graphics:mask_1_graphics_25,x:274.5,y:42}).wait(1).to({graphics:mask_1_graphics_26,x:274.5,y:48.7}).wait(1).to({graphics:mask_1_graphics_27,x:274.5,y:55.1}).wait(1).to({graphics:mask_1_graphics_28,x:274.5,y:61}).wait(1).to({graphics:mask_1_graphics_29,x:274.5,y:66.5}).wait(1).to({graphics:mask_1_graphics_30,x:274.5,y:71.6}).wait(1).to({graphics:mask_1_graphics_31,x:274.5,y:75.6}).wait(1).to({graphics:mask_1_graphics_32,x:274.5,y:77.8}).wait(1).to({graphics:mask_1_graphics_33,x:274.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_34,x:274.5,y:81.5}).wait(1).to({graphics:mask_1_graphics_35,x:274.5,y:83}).wait(1).to({graphics:mask_1_graphics_36,x:274.5,y:84.3}).wait(1).to({graphics:mask_1_graphics_37,x:274.5,y:85.4}).wait(1).to({graphics:mask_1_graphics_38,x:274.5,y:86.4}).wait(1).to({graphics:mask_1_graphics_39,x:274.5,y:87.1}).wait(1).to({graphics:mask_1_graphics_40,x:274.5,y:87.6}).wait(1).to({graphics:mask_1_graphics_41,x:274.5,y:87.9}).wait(1).to({graphics:mask_1_graphics_42,x:274.5,y:88}).wait(43));

	// Layer 6
	this.instance_1 = new lib.about_t1();
	this.instance_1.setTransform(507.6,147.8,1,1,0,0,0,31.9,66.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:107.8},23,cjs.Ease.get(1)).wait(43));

	// Layer 24 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AVeLvIAA3aIMDAAIAAXag");
	var mask_2_graphics_27 = new cjs.Graphics().p("AVeL7IAA3aIMDAAIAAXag");
	var mask_2_graphics_28 = new cjs.Graphics().p("AVeMGIAA3aIMDAAIAAXag");
	var mask_2_graphics_29 = new cjs.Graphics().p("AVeMQIAA3aIMDAAIAAXag");
	var mask_2_graphics_30 = new cjs.Graphics().p("AVeMaIAA3aIMDAAIAAXag");
	var mask_2_graphics_31 = new cjs.Graphics().p("AVeMjIAA3aIMDAAIAAXag");
	var mask_2_graphics_32 = new cjs.Graphics().p("AVeMsIAA3aIMDAAIAAXag");
	var mask_2_graphics_33 = new cjs.Graphics().p("AVeM0IAA3aIMDAAIAAXag");
	var mask_2_graphics_34 = new cjs.Graphics().p("AVeM8IAA3aIMDAAIAAXag");
	var mask_2_graphics_35 = new cjs.Graphics().p("AVeNDIAA3aIMDAAIAAXag");
	var mask_2_graphics_36 = new cjs.Graphics().p("AVeNJIAA3aIMDAAIAAXag");
	var mask_2_graphics_37 = new cjs.Graphics().p("AVeNPIAA3aIMDAAIAAXag");
	var mask_2_graphics_38 = new cjs.Graphics().p("AVeNVIAA3aIMDAAIAAXag");
	var mask_2_graphics_39 = new cjs.Graphics().p("AVeNaIAA3aIMDAAIAAXag");
	var mask_2_graphics_40 = new cjs.Graphics().p("AVeNfIAA3aIMDAAIAAXag");
	var mask_2_graphics_41 = new cjs.Graphics().p("AVeNjIAA3aIMDAAIAAXag");
	var mask_2_graphics_42 = new cjs.Graphics().p("AVeNmIAA3aIMDAAIAAXag");
	var mask_2_graphics_43 = new cjs.Graphics().p("AVeNpIAA3aIMDAAIAAXag");
	var mask_2_graphics_44 = new cjs.Graphics().p("AVeNrIAA3aIMDAAIAAXag");
	var mask_2_graphics_45 = new cjs.Graphics().p("AVeNtIAA3aIMDAAIAAXag");
	var mask_2_graphics_46 = new cjs.Graphics().p("AVeNuIAA3aIMDAAIAAXag");
	var mask_2_graphics_47 = new cjs.Graphics().p("AVeNvIAA3aIMDAAIAAXag");
	var mask_2_graphics_48 = new cjs.Graphics().p("AVeNwIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:214.5,y:-37}).wait(25).to({graphics:mask_2_graphics_25,x:214.5,y:73}).wait(1).to({graphics:mask_2_graphics_26,x:214.5,y:75.2}).wait(1).to({graphics:mask_2_graphics_27,x:214.5,y:76.3}).wait(1).to({graphics:mask_2_graphics_28,x:214.5,y:77.4}).wait(1).to({graphics:mask_2_graphics_29,x:214.5,y:78.4}).wait(1).to({graphics:mask_2_graphics_30,x:214.5,y:79.4}).wait(1).to({graphics:mask_2_graphics_31,x:214.5,y:80.4}).wait(1).to({graphics:mask_2_graphics_32,x:214.5,y:81.2}).wait(1).to({graphics:mask_2_graphics_33,x:214.5,y:82}).wait(1).to({graphics:mask_2_graphics_34,x:214.5,y:82.8}).wait(1).to({graphics:mask_2_graphics_35,x:214.5,y:83.5}).wait(1).to({graphics:mask_2_graphics_36,x:214.5,y:84.2}).wait(1).to({graphics:mask_2_graphics_37,x:214.5,y:84.8}).wait(1).to({graphics:mask_2_graphics_38,x:214.5,y:85.4}).wait(1).to({graphics:mask_2_graphics_39,x:214.5,y:85.9}).wait(1).to({graphics:mask_2_graphics_40,x:214.5,y:86.3}).wait(1).to({graphics:mask_2_graphics_41,x:214.5,y:86.7}).wait(1).to({graphics:mask_2_graphics_42,x:214.5,y:87}).wait(1).to({graphics:mask_2_graphics_43,x:214.5,y:87.3}).wait(1).to({graphics:mask_2_graphics_44,x:214.5,y:87.6}).wait(1).to({graphics:mask_2_graphics_45,x:214.5,y:87.8}).wait(1).to({graphics:mask_2_graphics_46,x:214.5,y:87.9}).wait(1).to({graphics:mask_2_graphics_47,x:214.5,y:88}).wait(1).to({graphics:mask_2_graphics_48,x:214.5,y:88}).wait(37));

	// Layer 23
	this.instance_2 = new lib.about_u2();
	this.instance_2.setTransform(394.4,148.6,1,1,0,0,0,29.7,67.3);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({y:108.6},23,cjs.Ease.get(1)).wait(37));

	// Layer 15 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AVeLtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AVeLuIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:214.5,y:-37}).wait(14).to({graphics:mask_3_graphics_14,x:214.5,y:-17}).wait(1).to({graphics:mask_3_graphics_15,x:214.5,y:-9.9}).wait(1).to({graphics:mask_3_graphics_16,x:214.5,y:-3.2}).wait(1).to({graphics:mask_3_graphics_17,x:214.5,y:3.2}).wait(1).to({graphics:mask_3_graphics_18,x:214.5,y:9.4}).wait(1).to({graphics:mask_3_graphics_19,x:214.5,y:15.2}).wait(1).to({graphics:mask_3_graphics_20,x:214.5,y:20.7}).wait(1).to({graphics:mask_3_graphics_21,x:214.5,y:25.8}).wait(1).to({graphics:mask_3_graphics_22,x:214.5,y:30.7}).wait(1).to({graphics:mask_3_graphics_23,x:214.5,y:35.2}).wait(1).to({graphics:mask_3_graphics_24,x:214.5,y:39.5}).wait(1).to({graphics:mask_3_graphics_25,x:214.5,y:43.4}).wait(1).to({graphics:mask_3_graphics_26,x:214.5,y:47}).wait(1).to({graphics:mask_3_graphics_27,x:214.5,y:50.3}).wait(1).to({graphics:mask_3_graphics_28,x:214.5,y:53.3}).wait(1).to({graphics:mask_3_graphics_29,x:214.5,y:56}).wait(1).to({graphics:mask_3_graphics_30,x:214.5,y:58.3}).wait(1).to({graphics:mask_3_graphics_31,x:214.5,y:60.4}).wait(1).to({graphics:mask_3_graphics_32,x:214.5,y:62.1}).wait(1).to({graphics:mask_3_graphics_33,x:214.5,y:63.5}).wait(1).to({graphics:mask_3_graphics_34,x:214.5,y:64.6}).wait(1).to({graphics:mask_3_graphics_35,x:214.5,y:65.4}).wait(1).to({graphics:mask_3_graphics_36,x:214.5,y:65.8}).wait(1).to({graphics:mask_3_graphics_37,x:214.5,y:66}).wait(48));

	// Layer 5
	this.instance_3 = new lib.about_u1();
	this.instance_3.setTransform(394.4,148.6,1,1,0,0,0,29.7,67.3);

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({y:108.6},23,cjs.Ease.get(1)).wait(48));

	// Layer 21 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AMvRgIAA3bIMBAAIAAXbg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AMvRRIAA3aIMBAAIAAXag");
	var mask_4_graphics_22 = new cjs.Graphics().p("AMvRCIAA3aIMBAAIAAXag");
	var mask_4_graphics_23 = new cjs.Graphics().p("AMvQ1IAA3aIMBAAIAAXag");
	var mask_4_graphics_24 = new cjs.Graphics().p("AMvQoIAA3aIMBAAIAAXag");
	var mask_4_graphics_25 = new cjs.Graphics().p("AMvQcIAA3aIMBAAIAAXag");
	var mask_4_graphics_26 = new cjs.Graphics().p("AMvQQIAA3aIMBAAIAAXag");
	var mask_4_graphics_27 = new cjs.Graphics().p("AMvQFIAA3aIMBAAIAAXag");
	var mask_4_graphics_28 = new cjs.Graphics().p("AMvP7IAA3aIMBAAIAAXag");
	var mask_4_graphics_29 = new cjs.Graphics().p("AMvPxIAA3aIMBAAIAAXag");
	var mask_4_graphics_30 = new cjs.Graphics().p("AMvPoIAA3aIMBAAIAAXag");
	var mask_4_graphics_31 = new cjs.Graphics().p("AMvPgIAA3aIMBAAIAAXag");
	var mask_4_graphics_32 = new cjs.Graphics().p("AMvPZIAA3aIMBAAIAAXag");
	var mask_4_graphics_33 = new cjs.Graphics().p("AMvPSIAA3aIMBAAIAAXag");
	var mask_4_graphics_34 = new cjs.Graphics().p("AMvPLIAA3aIMBAAIAAXag");
	var mask_4_graphics_35 = new cjs.Graphics().p("AMvPGIAA3aIMBAAIAAXag");
	var mask_4_graphics_36 = new cjs.Graphics().p("AMvPBIAA3aIMBAAIAAXag");
	var mask_4_graphics_37 = new cjs.Graphics().p("AMvO8IAA3aIMBAAIAAXag");
	var mask_4_graphics_38 = new cjs.Graphics().p("AMvO5IAA3aIMBAAIAAXag");
	var mask_4_graphics_39 = new cjs.Graphics().p("AMvO2IAA3aIMBAAIAAXag");
	var mask_4_graphics_40 = new cjs.Graphics().p("AMvOzIAA3aIMBAAIAAXag");
	var mask_4_graphics_41 = new cjs.Graphics().p("AMvOyIAA3aIMBAAIAAXag");
	var mask_4_graphics_42 = new cjs.Graphics().p("AMvOxIAA3aIMBAAIAAXag");
	var mask_4_graphics_43 = new cjs.Graphics().p("AMvOxIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:159.5,y:-37}).wait(20).to({graphics:mask_4_graphics_20,x:158.5,y:112}).wait(1).to({graphics:mask_4_graphics_21,x:158.5,y:110.5}).wait(1).to({graphics:mask_4_graphics_22,x:158.5,y:109.1}).wait(1).to({graphics:mask_4_graphics_23,x:158.5,y:107.7}).wait(1).to({graphics:mask_4_graphics_24,x:158.5,y:106.4}).wait(1).to({graphics:mask_4_graphics_25,x:158.5,y:105.2}).wait(1).to({graphics:mask_4_graphics_26,x:158.5,y:104.1}).wait(1).to({graphics:mask_4_graphics_27,x:158.5,y:103}).wait(1).to({graphics:mask_4_graphics_28,x:158.5,y:101.9}).wait(1).to({graphics:mask_4_graphics_29,x:158.5,y:101}).wait(1).to({graphics:mask_4_graphics_30,x:158.5,y:100.1}).wait(1).to({graphics:mask_4_graphics_31,x:158.5,y:99.3}).wait(1).to({graphics:mask_4_graphics_32,x:158.5,y:98.5}).wait(1).to({graphics:mask_4_graphics_33,x:158.5,y:97.8}).wait(1).to({graphics:mask_4_graphics_34,x:158.5,y:97.2}).wait(1).to({graphics:mask_4_graphics_35,x:158.5,y:96.6}).wait(1).to({graphics:mask_4_graphics_36,x:158.5,y:96.1}).wait(1).to({graphics:mask_4_graphics_37,x:158.5,y:95.7}).wait(1).to({graphics:mask_4_graphics_38,x:158.5,y:95.3}).wait(1).to({graphics:mask_4_graphics_39,x:158.5,y:95}).wait(1).to({graphics:mask_4_graphics_40,x:158.5,y:94.8}).wait(1).to({graphics:mask_4_graphics_41,x:158.5,y:94.6}).wait(1).to({graphics:mask_4_graphics_42,x:158.5,y:94.5}).wait(1).to({graphics:mask_4_graphics_43,x:158.5,y:94.5}).wait(42));

	// Layer 22
	this.instance_4 = new lib.about_o1();
	this.instance_4.setTransform(279.6,147.8,1,1,0,0,0,30.4,67.8);

	this.instance_5 = new lib.about_o3();
	this.instance_5.setTransform(279.6,67.8,1,1,0,0,0,30.4,67.8);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},23).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({y:107.8},23,cjs.Ease.get(1)).wait(42));

	// Layer 20 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AM+LtIAA3aIMCAAIAAXag");
	var mask_5_graphics_21 = new cjs.Graphics().p("ANALuIAA3bIMCAAIAAXbg");
	var mask_5_graphics_22 = new cjs.Graphics().p("ANCLuIAA3aIMCAAIAAXag");
	var mask_5_graphics_23 = new cjs.Graphics().p("ANELtIAA3ZIMCAAIAAXZg");
	var mask_5_graphics_24 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_5_graphics_25 = new cjs.Graphics().p("ANHL1IAA3aIMCAAIAAXag");
	var mask_5_graphics_26 = new cjs.Graphics().p("ANJMCIAA3aIMCAAIAAXag");
	var mask_5_graphics_27 = new cjs.Graphics().p("ANKMPIAA3aIMCAAIAAXag");
	var mask_5_graphics_28 = new cjs.Graphics().p("ANMMaIAA3aIMCAAIAAXag");
	var mask_5_graphics_29 = new cjs.Graphics().p("ANNMlIAA3aIMCAAIAAXag");
	var mask_5_graphics_30 = new cjs.Graphics().p("ANPMwIAA3aIMCAAIAAXag");
	var mask_5_graphics_31 = new cjs.Graphics().p("ANQM5IAA3aIMCAAIAAXag");
	var mask_5_graphics_32 = new cjs.Graphics().p("ANRNCIAA3aIMCAAIAAXag");
	var mask_5_graphics_33 = new cjs.Graphics().p("ANSNKIAA3aIMCAAIAAXag");
	var mask_5_graphics_34 = new cjs.Graphics().p("ANTNRIAA3aIMCAAIAAXag");
	var mask_5_graphics_35 = new cjs.Graphics().p("ANTNXIAA3aIMCAAIAAXag");
	var mask_5_graphics_36 = new cjs.Graphics().p("ANUNdIAA3aIMCAAIAAXag");
	var mask_5_graphics_37 = new cjs.Graphics().p("ANVNiIAA3aIMCAAIAAXag");
	var mask_5_graphics_38 = new cjs.Graphics().p("ANVNmIAA3aIMCAAIAAXag");
	var mask_5_graphics_39 = new cjs.Graphics().p("ANWNpIAA3aIMCAAIAAXag");
	var mask_5_graphics_40 = new cjs.Graphics().p("ANWNsIAA3aIMCAAIAAXag");
	var mask_5_graphics_41 = new cjs.Graphics().p("ANWNuIAA3aIMCAAIAAXag");
	var mask_5_graphics_42 = new cjs.Graphics().p("ANWNvIAA3aIMCAAIAAXag");
	var mask_5_graphics_43 = new cjs.Graphics().p("ANXNwIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:159.5,y:-37}).wait(20).to({graphics:mask_5_graphics_20,x:160,y:61}).wait(1).to({graphics:mask_5_graphics_21,x:160.2,y:64.4}).wait(1).to({graphics:mask_5_graphics_22,x:160.4,y:67.7}).wait(1).to({graphics:mask_5_graphics_23,x:160.6,y:70.8}).wait(1).to({graphics:mask_5_graphics_24,x:160.8,y:73.7}).wait(1).to({graphics:mask_5_graphics_25,x:161,y:75.8}).wait(1).to({graphics:mask_5_graphics_26,x:161.1,y:77.1}).wait(1).to({graphics:mask_5_graphics_27,x:161.3,y:78.3}).wait(1).to({graphics:mask_5_graphics_28,x:161.4,y:79.5}).wait(1).to({graphics:mask_5_graphics_29,x:161.6,y:80.6}).wait(1).to({graphics:mask_5_graphics_30,x:161.7,y:81.6}).wait(1).to({graphics:mask_5_graphics_31,x:161.8,y:82.6}).wait(1).to({graphics:mask_5_graphics_32,x:161.9,y:83.4}).wait(1).to({graphics:mask_5_graphics_33,x:162,y:84.2}).wait(1).to({graphics:mask_5_graphics_34,x:162.1,y:84.9}).wait(1).to({graphics:mask_5_graphics_35,x:162.2,y:85.6}).wait(1).to({graphics:mask_5_graphics_36,x:162.3,y:86.1}).wait(1).to({graphics:mask_5_graphics_37,x:162.3,y:86.6}).wait(1).to({graphics:mask_5_graphics_38,x:162.4,y:87.1}).wait(1).to({graphics:mask_5_graphics_39,x:162.4,y:87.4}).wait(1).to({graphics:mask_5_graphics_40,x:162.5,y:87.7}).wait(1).to({graphics:mask_5_graphics_41,x:162.5,y:87.8}).wait(1).to({graphics:mask_5_graphics_42,x:162.5,y:88}).wait(1).to({graphics:mask_5_graphics_43,x:162.5,y:88}).wait(42));

	// Layer 19
	this.instance_6 = new lib.about_o1();
	this.instance_6.setTransform(279.6,147.8,1,1,0,0,0,30.4,67.8);

	this.instance_7 = new lib.about_o2();
	this.instance_7.setTransform(279.6,147.8,1,1,0,0,0,30.4,67.8);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},20).to({state:[{t:this.instance_7}]},23).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({y:107.8},23,cjs.Ease.get(1)).wait(42));

	// Layer 14 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_9 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_11 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_12 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_20 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AM5LuIAA3aIMBAAIAAXag");
	var mask_6_graphics_23 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_24 = new cjs.Graphics().p("AM5LuIAA3aIMBAAIAAXag");
	var mask_6_graphics_25 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_26 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AM5LtIAA3aIMBAAIAAXag");
	var mask_6_graphics_31 = new cjs.Graphics().p("AM5LtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AM5LuIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:159.5,y:-37}).wait(9).to({graphics:mask_6_graphics_9,x:159.5,y:-37}).wait(1).to({graphics:mask_6_graphics_10,x:159.5,y:-28.2}).wait(1).to({graphics:mask_6_graphics_11,x:159.5,y:-19.7}).wait(1).to({graphics:mask_6_graphics_12,x:159.5,y:-11.6}).wait(1).to({graphics:mask_6_graphics_13,x:159.5,y:-4}).wait(1).to({graphics:mask_6_graphics_14,x:159.5,y:3.3}).wait(1).to({graphics:mask_6_graphics_15,x:159.5,y:10.2}).wait(1).to({graphics:mask_6_graphics_16,x:159.5,y:16.7}).wait(1).to({graphics:mask_6_graphics_17,x:159.5,y:22.8}).wait(1).to({graphics:mask_6_graphics_18,x:159.5,y:28.5}).wait(1).to({graphics:mask_6_graphics_19,x:159.5,y:33.8}).wait(1).to({graphics:mask_6_graphics_20,x:159.5,y:38.7}).wait(1).to({graphics:mask_6_graphics_21,x:159.5,y:43.2}).wait(1).to({graphics:mask_6_graphics_22,x:159.5,y:47.3}).wait(1).to({graphics:mask_6_graphics_23,x:159.5,y:51.1}).wait(1).to({graphics:mask_6_graphics_24,x:159.5,y:54.4}).wait(1).to({graphics:mask_6_graphics_25,x:159.5,y:57.4}).wait(1).to({graphics:mask_6_graphics_26,x:159.5,y:59.9}).wait(1).to({graphics:mask_6_graphics_27,x:159.5,y:62.1}).wait(1).to({graphics:mask_6_graphics_28,x:159.5,y:63.9}).wait(1).to({graphics:mask_6_graphics_29,x:159.5,y:65.2}).wait(1).to({graphics:mask_6_graphics_30,x:159.5,y:66.2}).wait(1).to({graphics:mask_6_graphics_31,x:159.5,y:66.8}).wait(1).to({graphics:mask_6_graphics_32,x:159.5,y:67}).wait(53));

	// Layer 4
	this.instance_8 = new lib.about_o1();
	this.instance_8.setTransform(279.6,147.8,1,1,0,0,0,30.4,67.8);

	this.instance_8.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({y:107.8},23,cjs.Ease.get(1)).wait(53));

	// Layer 13 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("AJYQzIAA3bIMBAAIAAXbg");
	var mask_7_graphics_16 = new cjs.Graphics().p("AJYQzIAA3bIMBAAIAAXbg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AJDQmIAA3aIMCAAIAAXag");
	var mask_7_graphics_18 = new cjs.Graphics().p("AIvQaIAA3aIMCAAIAAXag");
	var mask_7_graphics_19 = new cjs.Graphics().p("AIcQOIAA3aIMCAAIAAXag");
	var mask_7_graphics_20 = new cjs.Graphics().p("AIKQDIAA3aIMCAAIAAXag");
	var mask_7_graphics_21 = new cjs.Graphics().p("AH5P4IAA3aIMCAAIAAXag");
	var mask_7_graphics_22 = new cjs.Graphics().p("AHoPuIAA3aIMCAAIAAXag");
	var mask_7_graphics_23 = new cjs.Graphics().p("AHZPlIAA3aIMCAAIAAXag");
	var mask_7_graphics_24 = new cjs.Graphics().p("AHLPcIAA3aIMCAAIAAXag");
	var mask_7_graphics_25 = new cjs.Graphics().p("AG9PUIAA3aIMCAAIAAXag");
	var mask_7_graphics_26 = new cjs.Graphics().p("AGxPMIAA3aIMCAAIAAXag");
	var mask_7_graphics_27 = new cjs.Graphics().p("AGlPFIAA3aIMCAAIAAXag");
	var mask_7_graphics_28 = new cjs.Graphics().p("AGbO/IAA3aIMCAAIAAXag");
	var mask_7_graphics_29 = new cjs.Graphics().p("AGRO5IAA3aIMCAAIAAXag");
	var mask_7_graphics_30 = new cjs.Graphics().p("AGIOzIAA3aIMCAAIAAXag");
	var mask_7_graphics_31 = new cjs.Graphics().p("AGAOvIAA3aIMCAAIAAXag");
	var mask_7_graphics_32 = new cjs.Graphics().p("AF5OqIAA3aIMCAAIAAXag");
	var mask_7_graphics_33 = new cjs.Graphics().p("AFzOnIAA3aIMCAAIAAXag");
	var mask_7_graphics_34 = new cjs.Graphics().p("AFuOkIAA3aIMCAAIAAXag");
	var mask_7_graphics_35 = new cjs.Graphics().p("AFqOhIAA3aIMCAAIAAXag");
	var mask_7_graphics_36 = new cjs.Graphics().p("AFnOfIAA3aIMCAAIAAXag");
	var mask_7_graphics_37 = new cjs.Graphics().p("AFkOeIAA3aIMCAAIAAXag");
	var mask_7_graphics_38 = new cjs.Graphics().p("AFjOdIAA3aIMCAAIAAXag");
	var mask_7_graphics_39 = new cjs.Graphics().p("AFiOdIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:137,y:107.5}).wait(16).to({graphics:mask_7_graphics_16,x:137,y:107.5}).wait(1).to({graphics:mask_7_graphics_17,x:134.9,y:106.2}).wait(1).to({graphics:mask_7_graphics_18,x:132.9,y:105}).wait(1).to({graphics:mask_7_graphics_19,x:131,y:103.8}).wait(1).to({graphics:mask_7_graphics_20,x:129.2,y:102.7}).wait(1).to({graphics:mask_7_graphics_21,x:127.5,y:101.7}).wait(1).to({graphics:mask_7_graphics_22,x:125.9,y:100.7}).wait(1).to({graphics:mask_7_graphics_23,x:124.4,y:99.8}).wait(1).to({graphics:mask_7_graphics_24,x:122.9,y:98.9}).wait(1).to({graphics:mask_7_graphics_25,x:121.6,y:98.1}).wait(1).to({graphics:mask_7_graphics_26,x:120.3,y:97.3}).wait(1).to({graphics:mask_7_graphics_27,x:119.2,y:96.6}).wait(1).to({graphics:mask_7_graphics_28,x:118.1,y:95.9}).wait(1).to({graphics:mask_7_graphics_29,x:117.1,y:95.3}).wait(1).to({graphics:mask_7_graphics_30,x:116.3,y:94.8}).wait(1).to({graphics:mask_7_graphics_31,x:115.5,y:94.3}).wait(1).to({graphics:mask_7_graphics_32,x:114.8,y:93.9}).wait(1).to({graphics:mask_7_graphics_33,x:114.2,y:93.5}).wait(1).to({graphics:mask_7_graphics_34,x:113.7,y:93.2}).wait(1).to({graphics:mask_7_graphics_35,x:113.2,y:93}).wait(1).to({graphics:mask_7_graphics_36,x:112.9,y:92.8}).wait(1).to({graphics:mask_7_graphics_37,x:112.7,y:92.6}).wait(1).to({graphics:mask_7_graphics_38,x:112.5,y:92.5}).wait(1).to({graphics:mask_7_graphics_39,x:112.5,y:92.5}).wait(46));

	// Layer 11
	this.instance_9 = new lib.about_b2();
	this.instance_9.setTransform(164.2,147.8,1,1,0,0,0,30.4,66.5);

	this.instance_9.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({y:107.8},23,cjs.Ease.get(1)).wait(46));

	// Layer 12 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AgYLtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_5 = new cjs.Graphics().p("AgYLtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_6 = new cjs.Graphics().p("AgYLtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_7 = new cjs.Graphics().p("AgYLuIAA3aIMBAAIAAXag");
	var mask_8_graphics_8 = new cjs.Graphics().p("AgYLuIAA3aIMBAAIAAXag");
	var mask_8_graphics_9 = new cjs.Graphics().p("AgYLtIAA3aIMBAAIAAXag");
	var mask_8_graphics_10 = new cjs.Graphics().p("AgYLuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_11 = new cjs.Graphics().p("AgYLtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_12 = new cjs.Graphics().p("AgYLtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_13 = new cjs.Graphics().p("AgYLuIAA3aIMBAAIAAXag");
	var mask_8_graphics_14 = new cjs.Graphics().p("AgYLuIAA3aIMBAAIAAXag");
	var mask_8_graphics_15 = new cjs.Graphics().p("AgYLuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_16 = new cjs.Graphics().p("AgYLuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_17 = new cjs.Graphics().p("AgYLtIAA3aIMBAAIAAXag");
	var mask_8_graphics_18 = new cjs.Graphics().p("AgYLuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_19 = new cjs.Graphics().p("AgYMCIAA3aIMBAAIAAXag");
	var mask_8_graphics_20 = new cjs.Graphics().p("AgYMYIAA3aIMBAAIAAXag");
	var mask_8_graphics_21 = new cjs.Graphics().p("AgYMrIAA3aIMBAAIAAXag");
	var mask_8_graphics_22 = new cjs.Graphics().p("AgYM8IAA3aIMBAAIAAXag");
	var mask_8_graphics_23 = new cjs.Graphics().p("AgYNKIAA3aIMBAAIAAXag");
	var mask_8_graphics_24 = new cjs.Graphics().p("AgYNWIAA3aIMBAAIAAXag");
	var mask_8_graphics_25 = new cjs.Graphics().p("AgYNfIAA3aIMBAAIAAXag");
	var mask_8_graphics_26 = new cjs.Graphics().p("AgYNlIAA3aIMBAAIAAXag");
	var mask_8_graphics_27 = new cjs.Graphics().p("AgYNpIAA3aIMBAAIAAXag");
	var mask_8_graphics_28 = new cjs.Graphics().p("AgYNqIAA3ZIMBAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:74.5,y:-37}).wait(5).to({graphics:mask_8_graphics_5,x:74.5,y:-37}).wait(1).to({graphics:mask_8_graphics_6,x:74.5,y:-25.3}).wait(1).to({graphics:mask_8_graphics_7,x:74.5,y:-14.2}).wait(1).to({graphics:mask_8_graphics_8,x:74.5,y:-3.6}).wait(1).to({graphics:mask_8_graphics_9,x:74.5,y:6.5}).wait(1).to({graphics:mask_8_graphics_10,x:74.5,y:16.1}).wait(1).to({graphics:mask_8_graphics_11,x:74.5,y:25.2}).wait(1).to({graphics:mask_8_graphics_12,x:74.5,y:33.7}).wait(1).to({graphics:mask_8_graphics_13,x:74.5,y:41.7}).wait(1).to({graphics:mask_8_graphics_14,x:74.5,y:49.2}).wait(1).to({graphics:mask_8_graphics_15,x:74.5,y:56.2}).wait(1).to({graphics:mask_8_graphics_16,x:74.5,y:62.7}).wait(1).to({graphics:mask_8_graphics_17,x:74.5,y:68.7}).wait(1).to({graphics:mask_8_graphics_18,x:74.5,y:74.1}).wait(1).to({graphics:mask_8_graphics_19,x:74.5,y:77}).wait(1).to({graphics:mask_8_graphics_20,x:74.5,y:79.2}).wait(1).to({graphics:mask_8_graphics_21,x:74.5,y:81.2}).wait(1).to({graphics:mask_8_graphics_22,x:74.5,y:82.8}).wait(1).to({graphics:mask_8_graphics_23,x:74.5,y:84.3}).wait(1).to({graphics:mask_8_graphics_24,x:74.5,y:85.4}).wait(1).to({graphics:mask_8_graphics_25,x:74.5,y:86.3}).wait(1).to({graphics:mask_8_graphics_26,x:74.5,y:87}).wait(1).to({graphics:mask_8_graphics_27,x:74.5,y:87.4}).wait(1).to({graphics:mask_8_graphics_28,x:74.5,y:87.5}).wait(57));

	// Layer 3
	this.instance_10 = new lib.about_b1();
	this.instance_10.setTransform(141.2,147.8,1,1,0,0,0,7.4,66.5);

	this.instance_10.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({y:107.8},23,cjs.Ease.get(1)).wait(57));

	// Layer 10 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("Ag3OSIAA3ZIMBAAIAAXZg");
	var mask_9_graphics_11 = new cjs.Graphics().p("Ag3OSIAA3ZIMBAAIAAXZg");
	var mask_9_graphics_12 = new cjs.Graphics().p("AhIOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_13 = new cjs.Graphics().p("AhZOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_14 = new cjs.Graphics().p("AhoOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_15 = new cjs.Graphics().p("Ah4OSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_16 = new cjs.Graphics().p("AiGOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_17 = new cjs.Graphics().p("AiUOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_18 = new cjs.Graphics().p("AigOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_19 = new cjs.Graphics().p("AisOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_20 = new cjs.Graphics().p("Ai4OSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_21 = new cjs.Graphics().p("AjCOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_22 = new cjs.Graphics().p("AjMOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_23 = new cjs.Graphics().p("AjVOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AjdOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_25 = new cjs.Graphics().p("AjkOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_26 = new cjs.Graphics().p("AjrOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_27 = new cjs.Graphics().p("AjxOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_28 = new cjs.Graphics().p("Aj2OSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_29 = new cjs.Graphics().p("Aj6OSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_30 = new cjs.Graphics().p("Aj9OSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_31 = new cjs.Graphics().p("AkAOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_32 = new cjs.Graphics().p("AkCOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AkDOSIAA3ZIMAAAIAAXZg");
	var mask_9_graphics_34 = new cjs.Graphics().p("AkDOSIAA3ZIL/AAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:71.4,y:91.5}).wait(11).to({graphics:mask_9_graphics_11,x:71.4,y:91.5}).wait(1).to({graphics:mask_9_graphics_12,x:69.7,y:91.5}).wait(1).to({graphics:mask_9_graphics_13,x:68,y:91.5}).wait(1).to({graphics:mask_9_graphics_14,x:66.4,y:91.5}).wait(1).to({graphics:mask_9_graphics_15,x:64.9,y:91.5}).wait(1).to({graphics:mask_9_graphics_16,x:63.5,y:91.5}).wait(1).to({graphics:mask_9_graphics_17,x:62.1,y:91.5}).wait(1).to({graphics:mask_9_graphics_18,x:60.8,y:91.5}).wait(1).to({graphics:mask_9_graphics_19,x:59.6,y:91.5}).wait(1).to({graphics:mask_9_graphics_20,x:58.5,y:91.5}).wait(1).to({graphics:mask_9_graphics_21,x:57.4,y:91.5}).wait(1).to({graphics:mask_9_graphics_22,x:56.5,y:91.5}).wait(1).to({graphics:mask_9_graphics_23,x:55.6,y:91.5}).wait(1).to({graphics:mask_9_graphics_24,x:54.8,y:91.5}).wait(1).to({graphics:mask_9_graphics_25,x:54,y:91.5}).wait(1).to({graphics:mask_9_graphics_26,x:53.4,y:91.5}).wait(1).to({graphics:mask_9_graphics_27,x:52.8,y:91.5}).wait(1).to({graphics:mask_9_graphics_28,x:52.3,y:91.5}).wait(1).to({graphics:mask_9_graphics_29,x:51.9,y:91.5}).wait(1).to({graphics:mask_9_graphics_30,x:51.5,y:91.5}).wait(1).to({graphics:mask_9_graphics_31,x:51.2,y:91.5}).wait(1).to({graphics:mask_9_graphics_32,x:51.1,y:91.5}).wait(1).to({graphics:mask_9_graphics_33,x:50.9,y:91.5}).wait(1).to({graphics:mask_9_graphics_34,x:50.9,y:91.5}).wait(51));

	// Layer 7
	this.instance_11 = new lib.about_a2();
	this.instance_11.setTransform(43.5,141.3,1,1,0,0,0,17.3,6.4);

	this.instance_11.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85));

	// Layer 8 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_10_graphics_1 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_10_graphics_3 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_10_graphics_4 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_10_graphics_5 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_10_graphics_9 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_10_graphics_10 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_10_graphics_11 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_10_graphics_12 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_10_graphics_13 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_10_graphics_14 = new cjs.Graphics().p("AloMCIAA3aIMBAAIAAXag");
	var mask_10_graphics_15 = new cjs.Graphics().p("AloMYIAA3aIMBAAIAAXag");
	var mask_10_graphics_16 = new cjs.Graphics().p("AloMrIAA3aIMBAAIAAXag");
	var mask_10_graphics_17 = new cjs.Graphics().p("AloM8IAA3aIMBAAIAAXag");
	var mask_10_graphics_18 = new cjs.Graphics().p("AloNKIAA3aIMBAAIAAXag");
	var mask_10_graphics_19 = new cjs.Graphics().p("AloNWIAA3aIMBAAIAAXag");
	var mask_10_graphics_20 = new cjs.Graphics().p("AloNfIAA3aIMBAAIAAXag");
	var mask_10_graphics_21 = new cjs.Graphics().p("AloNlIAA3aIMBAAIAAXag");
	var mask_10_graphics_22 = new cjs.Graphics().p("AloNpIAA3aIMBAAIAAXag");
	var mask_10_graphics_23 = new cjs.Graphics().p("AloNqIAA3ZIMBAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:40.9,y:-37}).wait(1).to({graphics:mask_10_graphics_1,x:40.9,y:-25.3}).wait(1).to({graphics:mask_10_graphics_2,x:40.9,y:-14.2}).wait(1).to({graphics:mask_10_graphics_3,x:40.9,y:-3.6}).wait(1).to({graphics:mask_10_graphics_4,x:40.9,y:6.5}).wait(1).to({graphics:mask_10_graphics_5,x:40.9,y:16.1}).wait(1).to({graphics:mask_10_graphics_6,x:40.9,y:25.2}).wait(1).to({graphics:mask_10_graphics_7,x:40.9,y:33.7}).wait(1).to({graphics:mask_10_graphics_8,x:40.9,y:41.7}).wait(1).to({graphics:mask_10_graphics_9,x:40.9,y:49.2}).wait(1).to({graphics:mask_10_graphics_10,x:40.9,y:56.2}).wait(1).to({graphics:mask_10_graphics_11,x:40.9,y:62.7}).wait(1).to({graphics:mask_10_graphics_12,x:40.9,y:68.7}).wait(1).to({graphics:mask_10_graphics_13,x:40.9,y:74.1}).wait(1).to({graphics:mask_10_graphics_14,x:40.9,y:77}).wait(1).to({graphics:mask_10_graphics_15,x:40.9,y:79.2}).wait(1).to({graphics:mask_10_graphics_16,x:40.9,y:81.2}).wait(1).to({graphics:mask_10_graphics_17,x:40.9,y:82.8}).wait(1).to({graphics:mask_10_graphics_18,x:40.9,y:84.3}).wait(1).to({graphics:mask_10_graphics_19,x:40.9,y:85.4}).wait(1).to({graphics:mask_10_graphics_20,x:40.9,y:86.3}).wait(1).to({graphics:mask_10_graphics_21,x:40.9,y:87}).wait(1).to({graphics:mask_10_graphics_22,x:40.9,y:87.4}).wait(1).to({graphics:mask_10_graphics_23,x:40.9,y:87.5}).wait(62));

	// Layer 2
	this.instance_12 = new lib.about_a1();
	this.instance_12.setTransform(43.9,147.8,1,1,0,0,0,36.1,66.5);

	this.instance_12.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:107.8},23,cjs.Ease.get(1)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192,-23,1500,900);


// symbols:
(lib.about_1 = function() {
	this.initialize(img.about_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.about_u2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjfBZQhJhaAAiYIAAgbICSAAIAAAiQAABcAlAzQAlAvBQAAQBQAAAlgvQAlgzAAhcIAAgiICLAAIAAAbQAACYhIBaQhJBciYAAQiYAAhHhcg");
	this.shape.setTransform(29.7,116.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,98.3,59.5,36.3);


(lib.about_u1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACeHtIAAvZICLAAIAAPZgAkoHtIAAvZICSAAIAAPZg");
	this.shape.setTransform(29.7,49.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.5,98.8);


(lib.about_t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+BDIAAiFIJ9AAIAACFg");
	this.shape.setTransform(31.9,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,13.6);


(lib.about_t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJJcIAAy3ICTAAIAAS3g");
	this.shape.setTransform(31.9,72.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.5,12.1,14.9,121);


(lib.about_o3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACbChQgChagkgvQgmgxhPAAQhQAAgnAxQgkAugDBbIiRAAQADhHASg7QATg7AigqQBLhaCaAAQCYAABMBaQBHBSAFCVg");
	this.shape.setTransform(30.5,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,60.9,32.3);


(lib.about_o2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjkBXQhLhZAAiYIAAgXICRAAIAAAeQAABbAnAzQAnAxBQAAQBQAAAmgxQAmgzAAhbIAAgeICUAAIAAAXQAACYhMBZQhMBbiYAAQiaAAhKhbg");
	this.shape.setTransform(30.5,117.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,100,61,35.7);


(lib.about_o1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACcFZIAAqlIgBgMICVAAIAAAUIAAKdgAkvFZIAAqdIAAgUICRAAIAAAMIAAKlg");
	this.shape.setTransform(30.5,66);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,31.5,61,69.1);


(lib.about_b2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkvKZIAA0xIEqAAQCZAABDBKQBDBJAACUIAAA/QAABqgiBCQgjBBhXAbQBhAbApBIQAoBKAABuIAABwQAACWhKBRQhJBRicAAgAibISICcAAQCeAAAAi1IAAh2QAAhwgtgqQgtgrhfAAIiBAAgAibhjIByAAQBXAAAtgkQAsgkAAhpIAAhOQAAhZghgqQghgrhOAAIiSAAg");
	this.shape.setTransform(30.5,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,133.1);


(lib.about_b1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJKZIAA0xICTAAIAAUxg");
	this.shape.setTransform(7.4,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,133.1);


(lib.about_a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirA/IAUh9IEvAAIAUB9g");
	this.shape.setTransform(17.3,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.6,12.7);


(lib.about_a1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADWKZIg0kMIgUh/IiVr+IiSL+IgTB/Ig0EMIiIAAID+0xIDVAAID+Uxg");
	this.shape.setTransform(36.2,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.4,133.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 786,
	height: 220,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/contact_1.jpg", id:"contact_1"}
	]
};

// stage content:
(lib.contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stage.scaleMode = "noScale";*/
	}
	this.frame_84 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(84).call(this.frame_84).wait(1));

	// Layer 49 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EA2DAN3IAA3aIMDAAIAAXag");
	var mask_graphics_33 = new cjs.Graphics().p("EA2DAN3IAA3aIMDAAIAAXag");
	var mask_graphics_44 = new cjs.Graphics().p("EA2DAN3IAA3aIMDAAIAAXag");
	var mask_graphics_45 = new cjs.Graphics().p("EA1mAN2IAA3aIMCAAIAAXag");
	var mask_graphics_46 = new cjs.Graphics().p("EA1JAN1IAA3aIMCAAIAAXag");
	var mask_graphics_47 = new cjs.Graphics().p("EA0uAN1IAA3aIMCAAIAAXag");
	var mask_graphics_48 = new cjs.Graphics().p("EA0UAN0IAA3aIMCAAIAAXag");
	var mask_graphics_49 = new cjs.Graphics().p("EAz8ANzIAA3aIMCAAIAAXag");
	var mask_graphics_50 = new cjs.Graphics().p("EAzlANyIAA3aIMCAAIAAXag");
	var mask_graphics_51 = new cjs.Graphics().p("EAzPANyIAA3aIMCAAIAAXag");
	var mask_graphics_52 = new cjs.Graphics().p("EAy6ANxIAA3aIMCAAIAAXag");
	var mask_graphics_53 = new cjs.Graphics().p("EAynANxIAA3aIMCAAIAAXag");
	var mask_graphics_54 = new cjs.Graphics().p("EAyVANwIAA3aIMCAAIAAXag");
	var mask_graphics_55 = new cjs.Graphics().p("EAyFANwIAA3aIMCAAIAAXag");
	var mask_graphics_56 = new cjs.Graphics().p("EAx2ANvIAA3aIMCAAIAAXag");
	var mask_graphics_57 = new cjs.Graphics().p("EAxoANvIAA3aIMCAAIAAXag");
	var mask_graphics_58 = new cjs.Graphics().p("EAxbANvIAA3aIMCAAIAAXag");
	var mask_graphics_59 = new cjs.Graphics().p("EAxQANuIAA3aIMCAAIAAXag");
	var mask_graphics_60 = new cjs.Graphics().p("EAxGANuIAA3aIMCAAIAAXag");
	var mask_graphics_61 = new cjs.Graphics().p("EAw9ANuIAA3aIMCAAIAAXag");
	var mask_graphics_62 = new cjs.Graphics().p("EAw2ANtIAA3aIMCAAIAAXag");
	var mask_graphics_63 = new cjs.Graphics().p("EAwwANtIAA3aIMCAAIAAXag");
	var mask_graphics_64 = new cjs.Graphics().p("EAwrANtIAA3aIMCAAIAAXag");
	var mask_graphics_65 = new cjs.Graphics().p("EAwoANtIAA3aIMCAAIAAXag");
	var mask_graphics_66 = new cjs.Graphics().p("EAwmANtIAA3aIMCAAIAAXag");
	var mask_graphics_67 = new cjs.Graphics().p("EAwmANtIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:423,y:88.8}).wait(33).to({graphics:mask_graphics_33,x:423,y:88.8}).wait(11).to({graphics:mask_graphics_44,x:423,y:88.8}).wait(1).to({graphics:mask_graphics_45,x:420,y:88.7}).wait(1).to({graphics:mask_graphics_46,x:417.2,y:88.6}).wait(1).to({graphics:mask_graphics_47,x:414.5,y:88.5}).wait(1).to({graphics:mask_graphics_48,x:411.9,y:88.4}).wait(1).to({graphics:mask_graphics_49,x:409.4,y:88.4}).wait(1).to({graphics:mask_graphics_50,x:407.1,y:88.3}).wait(1).to({graphics:mask_graphics_51,x:404.9,y:88.2}).wait(1).to({graphics:mask_graphics_52,x:402.9,y:88.2}).wait(1).to({graphics:mask_graphics_53,x:401,y:88.1}).wait(1).to({graphics:mask_graphics_54,x:399.2,y:88.1}).wait(1).to({graphics:mask_graphics_55,x:397.5,y:88}).wait(1).to({graphics:mask_graphics_56,x:396,y:88}).wait(1).to({graphics:mask_graphics_57,x:394.6,y:87.9}).wait(1).to({graphics:mask_graphics_58,x:393.4,y:87.9}).wait(1).to({graphics:mask_graphics_59,x:392.2,y:87.9}).wait(1).to({graphics:mask_graphics_60,x:391.2,y:87.8}).wait(1).to({graphics:mask_graphics_61,x:390.4,y:87.8}).wait(1).to({graphics:mask_graphics_62,x:389.7,y:87.8}).wait(1).to({graphics:mask_graphics_63,x:389.1,y:87.8}).wait(1).to({graphics:mask_graphics_64,x:388.6,y:87.8}).wait(1).to({graphics:mask_graphics_65,x:388.3,y:87.8}).wait(1).to({graphics:mask_graphics_66,x:388.1,y:87.8}).wait(1).to({graphics:mask_graphics_67,x:388,y:87.8}).wait(18));

	// Layer 48
	this.instance = new lib.contact_t2();
	this.instance.setTransform(734.6,107.3,1,1,0,0,0,31.9,66.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// Layer 47 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EAwmALtIAA3ZIMBAAIAAXZg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAwmALuIAA3aIMBAAIAAXag");
	var mask_1_graphics_38 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EAwmALtIAA3ZIMBAAIAAXZg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAwmALtIAA3ZIMBAAIAAXZg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAwmALtIAA3ZIMBAAIAAXZg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAwmALuIAA3bIMBAAIAAXbg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAwmALuIAA3aIMBAAIAAXag");
	var mask_1_graphics_44 = new cjs.Graphics().p("EAwmALuIAA3aIMBAAIAAXag");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAwmALxIAA3aIMBAAIAAXag");
	var mask_1_graphics_46 = new cjs.Graphics().p("EAwmAMHIAA3aIMBAAIAAXag");
	var mask_1_graphics_47 = new cjs.Graphics().p("EAwmAMaIAA3aIMBAAIAAXag");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAwmAMsIAA3aIMBAAIAAXag");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAwmAM7IAA3aIMBAAIAAXag");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAwmANIIAA3aIMBAAIAAXag");
	var mask_1_graphics_51 = new cjs.Graphics().p("EAwmANTIAA3aIMBAAIAAXag");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAwmANdIAA3aIMBAAIAAXag");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAwmANkIAA3aIMBAAIAAXag");
	var mask_1_graphics_54 = new cjs.Graphics().p("EAwmANpIAA3aIMBAAIAAXag");
	var mask_1_graphics_55 = new cjs.Graphics().p("EAwmANsIAA3aIMBAAIAAXag");
	var mask_1_graphics_56 = new cjs.Graphics().p("EAwmANtIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:388,y:-37.5}).wait(33).to({graphics:mask_1_graphics_33,x:388,y:-7.5}).wait(1).to({graphics:mask_1_graphics_34,x:388,y:1.7}).wait(1).to({graphics:mask_1_graphics_35,x:388,y:10.5}).wait(1).to({graphics:mask_1_graphics_36,x:388,y:18.8}).wait(1).to({graphics:mask_1_graphics_37,x:388,y:26.8}).wait(1).to({graphics:mask_1_graphics_38,x:388,y:34.4}).wait(1).to({graphics:mask_1_graphics_39,x:388,y:41.5}).wait(1).to({graphics:mask_1_graphics_40,x:388,y:48.2}).wait(1).to({graphics:mask_1_graphics_41,x:388,y:54.6}).wait(1).to({graphics:mask_1_graphics_42,x:388,y:60.5}).wait(1).to({graphics:mask_1_graphics_43,x:388,y:66}).wait(1).to({graphics:mask_1_graphics_44,x:388,y:71.1}).wait(1).to({graphics:mask_1_graphics_45,x:388,y:75.4}).wait(1).to({graphics:mask_1_graphics_46,x:388,y:77.5}).wait(1).to({graphics:mask_1_graphics_47,x:388,y:79.5}).wait(1).to({graphics:mask_1_graphics_48,x:388,y:81.2}).wait(1).to({graphics:mask_1_graphics_49,x:388,y:82.7}).wait(1).to({graphics:mask_1_graphics_50,x:388,y:84.1}).wait(1).to({graphics:mask_1_graphics_51,x:388,y:85.2}).wait(1).to({graphics:mask_1_graphics_52,x:388,y:86.1}).wait(1).to({graphics:mask_1_graphics_53,x:388,y:86.8}).wait(1).to({graphics:mask_1_graphics_54,x:388,y:87.3}).wait(1).to({graphics:mask_1_graphics_55,x:388,y:87.6}).wait(1).to({graphics:mask_1_graphics_56,x:388,y:87.8}).wait(29));

	// Layer 46
	this.instance_1 = new lib.contact_t1();
	this.instance_1.setTransform(734.6,147.3,1,1,0,0,0,31.9,66.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({y:107.3},23,cjs.Ease.get(1)).wait(29));

	// Layer 69 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EAnQAQNIAA3aIMCAAIAAXag");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAnQAQNIAA3aIMCAAIAAXag");
	var mask_2_graphics_37 = new cjs.Graphics().p("EAnQAQNIAA3aIMCAAIAAXag");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAnQAQAIAA3aIMCAAIAAXag");
	var mask_2_graphics_39 = new cjs.Graphics().p("EAnQAP0IAA3aIMCAAIAAXag");
	var mask_2_graphics_40 = new cjs.Graphics().p("EAnQAPoIAA3aIMCAAIAAXag");
	var mask_2_graphics_41 = new cjs.Graphics().p("EAnQAPdIAA3aIMCAAIAAXag");
	var mask_2_graphics_42 = new cjs.Graphics().p("EAnQAPTIAA3aIMCAAIAAXag");
	var mask_2_graphics_43 = new cjs.Graphics().p("EAnQAPJIAA3aIMCAAIAAXag");
	var mask_2_graphics_44 = new cjs.Graphics().p("EAnQAPAIAA3aIMCAAIAAXag");
	var mask_2_graphics_45 = new cjs.Graphics().p("EAnQAO3IAA3aIMCAAIAAXag");
	var mask_2_graphics_46 = new cjs.Graphics().p("EAnQAOvIAA3aIMCAAIAAXag");
	var mask_2_graphics_47 = new cjs.Graphics().p("EAnQAOnIAA3aIMCAAIAAXag");
	var mask_2_graphics_48 = new cjs.Graphics().p("EAnQAOgIAA3aIMCAAIAAXag");
	var mask_2_graphics_49 = new cjs.Graphics().p("EAnQAOZIAA3aIMCAAIAAXag");
	var mask_2_graphics_50 = new cjs.Graphics().p("EAnQAOTIAA3aIMCAAIAAXag");
	var mask_2_graphics_51 = new cjs.Graphics().p("EAnQAOOIAA3aIMCAAIAAXag");
	var mask_2_graphics_52 = new cjs.Graphics().p("EAnQAOJIAA3aIMCAAIAAXag");
	var mask_2_graphics_53 = new cjs.Graphics().p("EAnQAOFIAA3aIMCAAIAAXag");
	var mask_2_graphics_54 = new cjs.Graphics().p("EAnQAOBIAA3aIMCAAIAAXag");
	var mask_2_graphics_55 = new cjs.Graphics().p("EAnQAN+IAA3aIMCAAIAAXag");
	var mask_2_graphics_56 = new cjs.Graphics().p("EAnQAN8IAA3aIMCAAIAAXag");
	var mask_2_graphics_57 = new cjs.Graphics().p("EAnQAN6IAA3aIMCAAIAAXag");
	var mask_2_graphics_58 = new cjs.Graphics().p("EAnQAN4IAA3aIMCAAIAAXag");
	var mask_2_graphics_59 = new cjs.Graphics().p("EAnQAN3IAA3aIMCAAIAAXag");
	var mask_2_graphics_60 = new cjs.Graphics().p("EAnQAN3IAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:328.3,y:103.8}).wait(27).to({graphics:mask_2_graphics_27,x:328.3,y:103.8}).wait(10).to({graphics:mask_2_graphics_37,x:328.3,y:103.8}).wait(1).to({graphics:mask_2_graphics_38,x:328.3,y:102.5}).wait(1).to({graphics:mask_2_graphics_39,x:328.3,y:101.3}).wait(1).to({graphics:mask_2_graphics_40,x:328.3,y:100.1}).wait(1).to({graphics:mask_2_graphics_41,x:328.3,y:99}).wait(1).to({graphics:mask_2_graphics_42,x:328.3,y:97.9}).wait(1).to({graphics:mask_2_graphics_43,x:328.3,y:96.9}).wait(1).to({graphics:mask_2_graphics_44,x:328.3,y:96}).wait(1).to({graphics:mask_2_graphics_45,x:328.3,y:95.1}).wait(1).to({graphics:mask_2_graphics_46,x:328.3,y:94.3}).wait(1).to({graphics:mask_2_graphics_47,x:328.3,y:93.5}).wait(1).to({graphics:mask_2_graphics_48,x:328.3,y:92.8}).wait(1).to({graphics:mask_2_graphics_49,x:328.3,y:92.2}).wait(1).to({graphics:mask_2_graphics_50,x:328.3,y:91.6}).wait(1).to({graphics:mask_2_graphics_51,x:328.3,y:91}).wait(1).to({graphics:mask_2_graphics_52,x:328.3,y:90.6}).wait(1).to({graphics:mask_2_graphics_53,x:328.3,y:90.1}).wait(1).to({graphics:mask_2_graphics_54,x:328.3,y:89.8}).wait(1).to({graphics:mask_2_graphics_55,x:328.3,y:89.5}).wait(1).to({graphics:mask_2_graphics_56,x:328.3,y:89.2}).wait(1).to({graphics:mask_2_graphics_57,x:328.3,y:89}).wait(1).to({graphics:mask_2_graphics_58,x:328.3,y:88.9}).wait(1).to({graphics:mask_2_graphics_59,x:328.3,y:88.8}).wait(1).to({graphics:mask_2_graphics_60,x:328.3,y:88.8}).wait(25));

	// Layer 68
	this.instance_2 = new lib.contact_c3();
	this.instance_2.setTransform(622.4,67.2,1,1,0,0,0,29.9,67.8);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({y:107.2},23,cjs.Ease.get(1)).wait(25));

	// Layer 67 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EAnQAMTIAA3aIMCAAIAAXag");
	var mask_3_graphics_27 = new cjs.Graphics().p("EAnQAMTIAA3aIMCAAIAAXag");
	var mask_3_graphics_37 = new cjs.Graphics().p("EAnQAMTIAA3aIMCAAIAAXag");
	var mask_3_graphics_38 = new cjs.Graphics().p("EAnQAMcIAA3aIMCAAIAAXag");
	var mask_3_graphics_39 = new cjs.Graphics().p("EAnQAMkIAA3aIMCAAIAAXag");
	var mask_3_graphics_40 = new cjs.Graphics().p("EAnQAMrIAA3aIMCAAIAAXag");
	var mask_3_graphics_41 = new cjs.Graphics().p("EAnQAMzIAA3aIMCAAIAAXag");
	var mask_3_graphics_42 = new cjs.Graphics().p("EAnQAM6IAA3aIMCAAIAAXag");
	var mask_3_graphics_43 = new cjs.Graphics().p("EAnQANAIAA3aIMCAAIAAXag");
	var mask_3_graphics_44 = new cjs.Graphics().p("EAnQANHIAA3aIMCAAIAAXag");
	var mask_3_graphics_45 = new cjs.Graphics().p("EAnQANMIAA3aIMCAAIAAXag");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAnQANSIAA3aIMCAAIAAXag");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAnQANXIAA3aIMCAAIAAXag");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAnQANcIAA3aIMCAAIAAXag");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAnQANgIAA3aIMCAAIAAXag");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAnQANkIAA3aIMCAAIAAXag");
	var mask_3_graphics_51 = new cjs.Graphics().p("EAnQANoIAA3aIMCAAIAAXag");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAnQANrIAA3aIMCAAIAAXag");
	var mask_3_graphics_53 = new cjs.Graphics().p("EAnQANuIAA3aIMCAAIAAXag");
	var mask_3_graphics_54 = new cjs.Graphics().p("EAnQANwIAA3aIMCAAIAAXag");
	var mask_3_graphics_55 = new cjs.Graphics().p("EAnQANyIAA3aIMCAAIAAXag");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAnQAN0IAA3aIMCAAIAAXag");
	var mask_3_graphics_57 = new cjs.Graphics().p("EAnQAN1IAA3aIMCAAIAAXag");
	var mask_3_graphics_58 = new cjs.Graphics().p("EAnQAN2IAA3aIMCAAIAAXag");
	var mask_3_graphics_59 = new cjs.Graphics().p("EAnQAN3IAA3aIMCAAIAAXag");
	var mask_3_graphics_60 = new cjs.Graphics().p("EAnQAN3IAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:328.3,y:78.8}).wait(27).to({graphics:mask_3_graphics_27,x:328.3,y:78.8}).wait(10).to({graphics:mask_3_graphics_37,x:328.3,y:78.8}).wait(1).to({graphics:mask_3_graphics_38,x:328.3,y:79.6}).wait(1).to({graphics:mask_3_graphics_39,x:328.3,y:80.4}).wait(1).to({graphics:mask_3_graphics_40,x:328.3,y:81.2}).wait(1).to({graphics:mask_3_graphics_41,x:328.3,y:81.9}).wait(1).to({graphics:mask_3_graphics_42,x:328.3,y:82.6}).wait(1).to({graphics:mask_3_graphics_43,x:328.3,y:83.3}).wait(1).to({graphics:mask_3_graphics_44,x:328.3,y:83.9}).wait(1).to({graphics:mask_3_graphics_45,x:328.3,y:84.5}).wait(1).to({graphics:mask_3_graphics_46,x:328.3,y:85}).wait(1).to({graphics:mask_3_graphics_47,x:328.3,y:85.6}).wait(1).to({graphics:mask_3_graphics_48,x:328.3,y:86}).wait(1).to({graphics:mask_3_graphics_49,x:328.3,y:86.5}).wait(1).to({graphics:mask_3_graphics_50,x:328.3,y:86.9}).wait(1).to({graphics:mask_3_graphics_51,x:328.3,y:87.2}).wait(1).to({graphics:mask_3_graphics_52,x:328.3,y:87.5}).wait(1).to({graphics:mask_3_graphics_53,x:328.3,y:87.8}).wait(1).to({graphics:mask_3_graphics_54,x:328.3,y:88.1}).wait(1).to({graphics:mask_3_graphics_55,x:328.3,y:88.3}).wait(1).to({graphics:mask_3_graphics_56,x:328.3,y:88.4}).wait(1).to({graphics:mask_3_graphics_57,x:328.3,y:88.6}).wait(1).to({graphics:mask_3_graphics_58,x:328.3,y:88.7}).wait(1).to({graphics:mask_3_graphics_59,x:328.3,y:88.7}).wait(1).to({graphics:mask_3_graphics_60,x:328.3,y:88.8}).wait(25));

	// Layer 66
	this.instance_3 = new lib.contact_c2();
	this.instance_3.setTransform(622.4,147.2,1,1,0,0,0,29.9,67.8);

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({y:107.2},23,cjs.Ease.get(1)).wait(25));

	// Layer 65 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EAnQALtIAA3aIMCAAIAAXag");
	var mask_4_graphics_27 = new cjs.Graphics().p("EAnQALtIAA3aIMCAAIAAXag");
	var mask_4_graphics_28 = new cjs.Graphics().p("EAnQALtIAA3ZIMCAAIAAXZg");
	var mask_4_graphics_29 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_30 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_31 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_33 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_34 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_35 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_36 = new cjs.Graphics().p("EAnQALtIAA3ZIMCAAIAAXZg");
	var mask_4_graphics_37 = new cjs.Graphics().p("EAnQALtIAA3ZIMCAAIAAXZg");
	var mask_4_graphics_38 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_39 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_40 = new cjs.Graphics().p("EAnQALtIAA3aIMCAAIAAXag");
	var mask_4_graphics_41 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_42 = new cjs.Graphics().p("EAnQALtIAA3aIMCAAIAAXag");
	var mask_4_graphics_43 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_44 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_45 = new cjs.Graphics().p("EAnQALtIAA3ZIMCAAIAAXZg");
	var mask_4_graphics_46 = new cjs.Graphics().p("EAnQALtIAA3ZIMCAAIAAXZg");
	var mask_4_graphics_47 = new cjs.Graphics().p("EAnQALuIAA3aIMCAAIAAXag");
	var mask_4_graphics_48 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_49 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");
	var mask_4_graphics_50 = new cjs.Graphics().p("EAnQALuIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:328.3,y:2.5}).wait(27).to({graphics:mask_4_graphics_27,x:328.3,y:2.5}).wait(1).to({graphics:mask_4_graphics_28,x:328.3,y:8.5}).wait(1).to({graphics:mask_4_graphics_29,x:328.3,y:14.1}).wait(1).to({graphics:mask_4_graphics_30,x:328.3,y:19.6}).wait(1).to({graphics:mask_4_graphics_31,x:328.3,y:24.7}).wait(1).to({graphics:mask_4_graphics_32,x:328.3,y:29.6}).wait(1).to({graphics:mask_4_graphics_33,x:328.3,y:34.3}).wait(1).to({graphics:mask_4_graphics_34,x:328.3,y:38.6}).wait(1).to({graphics:mask_4_graphics_35,x:328.3,y:42.7}).wait(1).to({graphics:mask_4_graphics_36,x:328.3,y:46.6}).wait(1).to({graphics:mask_4_graphics_37,x:328.3,y:50.1}).wait(1).to({graphics:mask_4_graphics_38,x:328.3,y:53.4}).wait(1).to({graphics:mask_4_graphics_39,x:328.3,y:56.5}).wait(1).to({graphics:mask_4_graphics_40,x:328.3,y:59.3}).wait(1).to({graphics:mask_4_graphics_41,x:328.3,y:61.8}).wait(1).to({graphics:mask_4_graphics_42,x:328.3,y:64}).wait(1).to({graphics:mask_4_graphics_43,x:328.3,y:66}).wait(1).to({graphics:mask_4_graphics_44,x:328.3,y:67.7}).wait(1).to({graphics:mask_4_graphics_45,x:328.3,y:69.2}).wait(1).to({graphics:mask_4_graphics_46,x:328.3,y:70.4}).wait(1).to({graphics:mask_4_graphics_47,x:328.3,y:71.3}).wait(1).to({graphics:mask_4_graphics_48,x:328.3,y:72}).wait(1).to({graphics:mask_4_graphics_49,x:328.3,y:72.4}).wait(1).to({graphics:mask_4_graphics_50,x:328.3,y:72.5}).wait(35));

	// Layer 64
	this.instance_4 = new lib.contact_c1();
	this.instance_4.setTransform(622.4,147.2,1,1,0,0,0,29.9,67.8);

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({y:107.2},23,cjs.Ease.get(1)).wait(35));

	// Layer 54 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("EAjCAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_22 = new cjs.Graphics().p("EAjCAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_33 = new cjs.Graphics().p("EAjCAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_34 = new cjs.Graphics().p("EAixAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_35 = new cjs.Graphics().p("EAigAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_36 = new cjs.Graphics().p("EAiQAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_37 = new cjs.Graphics().p("EAiBAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_38 = new cjs.Graphics().p("EAhzAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_39 = new cjs.Graphics().p("EAhlAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_40 = new cjs.Graphics().p("EAhYAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_41 = new cjs.Graphics().p("EAhMAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_42 = new cjs.Graphics().p("EAhBAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_43 = new cjs.Graphics().p("EAg3AOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_44 = new cjs.Graphics().p("EAgtAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_45 = new cjs.Graphics().p("EAgkAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_46 = new cjs.Graphics().p("EAgcAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_47 = new cjs.Graphics().p("EAgVAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_48 = new cjs.Graphics().p("EAgOAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_49 = new cjs.Graphics().p("EAgIAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_50 = new cjs.Graphics().p("EAgDAOQIAA3aIMCAAIAAXag");
	var mask_5_graphics_51 = new cjs.Graphics().p("Af/OQIAA3aIMCAAIAAXag");
	var mask_5_graphics_52 = new cjs.Graphics().p("Af7OQIAA3aIMCAAIAAXag");
	var mask_5_graphics_53 = new cjs.Graphics().p("Af5OQIAA3aIMCAAIAAXag");
	var mask_5_graphics_54 = new cjs.Graphics().p("Af3OQIAA3aIMCAAIAAXag");
	var mask_5_graphics_55 = new cjs.Graphics().p("Af2OQIAA3aIMCAAIAAXag");
	var mask_5_graphics_56 = new cjs.Graphics().p("Af1OQIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:301.3,y:91.3}).wait(22).to({graphics:mask_5_graphics_22,x:301.3,y:91.3}).wait(11).to({graphics:mask_5_graphics_33,x:301.3,y:91.3}).wait(1).to({graphics:mask_5_graphics_34,x:299.5,y:91.3}).wait(1).to({graphics:mask_5_graphics_35,x:297.9,y:91.3}).wait(1).to({graphics:mask_5_graphics_36,x:296.3,y:91.3}).wait(1).to({graphics:mask_5_graphics_37,x:294.8,y:91.3}).wait(1).to({graphics:mask_5_graphics_38,x:293.3,y:91.3}).wait(1).to({graphics:mask_5_graphics_39,x:292,y:91.3}).wait(1).to({graphics:mask_5_graphics_40,x:290.7,y:91.3}).wait(1).to({graphics:mask_5_graphics_41,x:289.5,y:91.3}).wait(1).to({graphics:mask_5_graphics_42,x:288.4,y:91.3}).wait(1).to({graphics:mask_5_graphics_43,x:287.3,y:91.3}).wait(1).to({graphics:mask_5_graphics_44,x:286.4,y:91.3}).wait(1).to({graphics:mask_5_graphics_45,x:285.5,y:91.3}).wait(1).to({graphics:mask_5_graphics_46,x:284.7,y:91.3}).wait(1).to({graphics:mask_5_graphics_47,x:283.9,y:91.3}).wait(1).to({graphics:mask_5_graphics_48,x:283.3,y:91.3}).wait(1).to({graphics:mask_5_graphics_49,x:282.7,y:91.3}).wait(1).to({graphics:mask_5_graphics_50,x:282.2,y:91.3}).wait(1).to({graphics:mask_5_graphics_51,x:281.7,y:91.3}).wait(1).to({graphics:mask_5_graphics_52,x:281.4,y:91.3}).wait(1).to({graphics:mask_5_graphics_53,x:281.1,y:91.3}).wait(1).to({graphics:mask_5_graphics_54,x:280.9,y:91.3}).wait(1).to({graphics:mask_5_graphics_55,x:280.8,y:91.3}).wait(1).to({graphics:mask_5_graphics_56,x:280.8,y:91.3}).wait(29));

	// Layer 53
	this.instance_5 = new lib.contact_a2();
	this.instance_5.setTransform(503.2,140.8,1,1,0,0,0,17.3,6.4);

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85));

	// Layer 52 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("AeRLuIAA3bIMCAAIAAXbg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AeRLuIAA3bIMCAAIAAXbg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AeRLuIAA3aIMCAAIAAXag");
	var mask_6_graphics_24 = new cjs.Graphics().p("AeRLtIAA3aIMCAAIAAXag");
	var mask_6_graphics_25 = new cjs.Graphics().p("AeRLtIAA3aIMCAAIAAXag");
	var mask_6_graphics_26 = new cjs.Graphics().p("AeRLtIAA3ZIMCAAIAAXZg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AeRLtIAA3ZIMCAAIAAXZg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AeRLuIAA3bIMCAAIAAXbg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AeRLuIAA3bIMCAAIAAXbg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AeRLtIAA3aIMCAAIAAXag");
	var mask_6_graphics_31 = new cjs.Graphics().p("AeRLuIAA3bIMCAAIAAXbg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AeRLtIAA3ZIMCAAIAAXZg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AeRLtIAA3ZIMCAAIAAXZg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AeRLuIAA3aIMCAAIAAXag");
	var mask_6_graphics_35 = new cjs.Graphics().p("AeRLtIAA3ZIMCAAIAAXZg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AeRL/IAA3aIMCAAIAAXag");
	var mask_6_graphics_37 = new cjs.Graphics().p("AeRMVIAA3aIMCAAIAAXag");
	var mask_6_graphics_38 = new cjs.Graphics().p("AeRMpIAA3aIMCAAIAAXag");
	var mask_6_graphics_39 = new cjs.Graphics().p("AeRM5IAA3aIMCAAIAAXag");
	var mask_6_graphics_40 = new cjs.Graphics().p("AeRNIIAA3aIMCAAIAAXag");
	var mask_6_graphics_41 = new cjs.Graphics().p("AeRNTIAA3aIMCAAIAAXag");
	var mask_6_graphics_42 = new cjs.Graphics().p("AeRNcIAA3aIMCAAIAAXag");
	var mask_6_graphics_43 = new cjs.Graphics().p("AeRNjIAA3aIMCAAIAAXag");
	var mask_6_graphics_44 = new cjs.Graphics().p("AeRNnIAA3aIMCAAIAAXag");
	var mask_6_graphics_45 = new cjs.Graphics().p("AeRNoIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:270.8,y:-37.5}).wait(22).to({graphics:mask_6_graphics_22,x:270.8,y:-37.5}).wait(1).to({graphics:mask_6_graphics_23,x:270.8,y:-25.8}).wait(1).to({graphics:mask_6_graphics_24,x:270.8,y:-14.7}).wait(1).to({graphics:mask_6_graphics_25,x:270.8,y:-4.1}).wait(1).to({graphics:mask_6_graphics_26,x:270.8,y:6}).wait(1).to({graphics:mask_6_graphics_27,x:270.8,y:15.6}).wait(1).to({graphics:mask_6_graphics_28,x:270.8,y:24.7}).wait(1).to({graphics:mask_6_graphics_29,x:270.8,y:33.2}).wait(1).to({graphics:mask_6_graphics_30,x:270.8,y:41.2}).wait(1).to({graphics:mask_6_graphics_31,x:270.8,y:48.7}).wait(1).to({graphics:mask_6_graphics_32,x:270.8,y:55.7}).wait(1).to({graphics:mask_6_graphics_33,x:270.8,y:62.2}).wait(1).to({graphics:mask_6_graphics_34,x:270.8,y:68.2}).wait(1).to({graphics:mask_6_graphics_35,x:270.8,y:73.6}).wait(1).to({graphics:mask_6_graphics_36,x:270.8,y:76.8}).wait(1).to({graphics:mask_6_graphics_37,x:270.8,y:79}).wait(1).to({graphics:mask_6_graphics_38,x:270.8,y:80.9}).wait(1).to({graphics:mask_6_graphics_39,x:270.8,y:82.6}).wait(1).to({graphics:mask_6_graphics_40,x:270.8,y:84}).wait(1).to({graphics:mask_6_graphics_41,x:270.8,y:85.2}).wait(1).to({graphics:mask_6_graphics_42,x:270.8,y:86.1}).wait(1).to({graphics:mask_6_graphics_43,x:270.8,y:86.7}).wait(1).to({graphics:mask_6_graphics_44,x:270.8,y:87.1}).wait(1).to({graphics:mask_6_graphics_45,x:270.8,y:87.3}).wait(40));

	// Layer 51
	this.instance_6 = new lib.contact_a1();
	this.instance_6.setTransform(503.7,147.3,1,1,0,0,0,36.1,66.5);

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({y:107.3},23,cjs.Ease.get(1)).wait(40));

	// Layer 41 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("AbdN3IAA3aIMCAAIAAXag");
	var mask_7_graphics_16 = new cjs.Graphics().p("AbdN3IAA3aIMCAAIAAXag");
	var mask_7_graphics_27 = new cjs.Graphics().p("AbdN3IAA3aIMCAAIAAXag");
	var mask_7_graphics_28 = new cjs.Graphics().p("Aa/N2IAA3aIMCAAIAAXag");
	var mask_7_graphics_29 = new cjs.Graphics().p("AajN1IAA3aIMCAAIAAXag");
	var mask_7_graphics_30 = new cjs.Graphics().p("AaIN1IAA3aIMCAAIAAXag");
	var mask_7_graphics_31 = new cjs.Graphics().p("AZuN0IAA3aIMCAAIAAXag");
	var mask_7_graphics_32 = new cjs.Graphics().p("AZVNzIAA3aIMCAAIAAXag");
	var mask_7_graphics_33 = new cjs.Graphics().p("AY+NyIAA3aIMCAAIAAXag");
	var mask_7_graphics_34 = new cjs.Graphics().p("AYoNyIAA3aIMCAAIAAXag");
	var mask_7_graphics_35 = new cjs.Graphics().p("AYUNxIAA3aIMCAAIAAXag");
	var mask_7_graphics_36 = new cjs.Graphics().p("AYBNxIAA3aIMCAAIAAXag");
	var mask_7_graphics_37 = new cjs.Graphics().p("AXvNwIAA3aIMCAAIAAXag");
	var mask_7_graphics_38 = new cjs.Graphics().p("AXeNwIAA3aIMCAAIAAXag");
	var mask_7_graphics_39 = new cjs.Graphics().p("AXPNvIAA3aIMCAAIAAXag");
	var mask_7_graphics_40 = new cjs.Graphics().p("AXBNvIAA3aIMCAAIAAXag");
	var mask_7_graphics_41 = new cjs.Graphics().p("AW1NvIAA3aIMCAAIAAXag");
	var mask_7_graphics_42 = new cjs.Graphics().p("AWpNuIAA3aIMCAAIAAXag");
	var mask_7_graphics_43 = new cjs.Graphics().p("AWfNuIAA3aIMCAAIAAXag");
	var mask_7_graphics_44 = new cjs.Graphics().p("AWXNuIAA3aIMCAAIAAXag");
	var mask_7_graphics_45 = new cjs.Graphics().p("AWQNtIAA3aIMCAAIAAXag");
	var mask_7_graphics_46 = new cjs.Graphics().p("AWKNtIAA3aIMCAAIAAXag");
	var mask_7_graphics_47 = new cjs.Graphics().p("AWFNtIAA3aIMCAAIAAXag");
	var mask_7_graphics_48 = new cjs.Graphics().p("AWCNtIAA3aIMCAAIAAXag");
	var mask_7_graphics_49 = new cjs.Graphics().p("AWANtIAA3aIMCAAIAAXag");
	var mask_7_graphics_50 = new cjs.Graphics().p("AV/NtIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:252.8,y:88.8}).wait(16).to({graphics:mask_7_graphics_16,x:252.8,y:88.8}).wait(11).to({graphics:mask_7_graphics_27,x:252.8,y:88.8}).wait(1).to({graphics:mask_7_graphics_28,x:249.8,y:88.7}).wait(1).to({graphics:mask_7_graphics_29,x:246.9,y:88.6}).wait(1).to({graphics:mask_7_graphics_30,x:244.2,y:88.5}).wait(1).to({graphics:mask_7_graphics_31,x:241.6,y:88.4}).wait(1).to({graphics:mask_7_graphics_32,x:239.2,y:88.4}).wait(1).to({graphics:mask_7_graphics_33,x:236.9,y:88.3}).wait(1).to({graphics:mask_7_graphics_34,x:234.7,y:88.2}).wait(1).to({graphics:mask_7_graphics_35,x:232.6,y:88.2}).wait(1).to({graphics:mask_7_graphics_36,x:230.7,y:88.1}).wait(1).to({graphics:mask_7_graphics_37,x:228.9,y:88.1}).wait(1).to({graphics:mask_7_graphics_38,x:227.3,y:88}).wait(1).to({graphics:mask_7_graphics_39,x:225.8,y:88}).wait(1).to({graphics:mask_7_graphics_40,x:224.4,y:87.9}).wait(1).to({graphics:mask_7_graphics_41,x:223.1,y:87.9}).wait(1).to({graphics:mask_7_graphics_42,x:222,y:87.9}).wait(1).to({graphics:mask_7_graphics_43,x:221,y:87.8}).wait(1).to({graphics:mask_7_graphics_44,x:220.1,y:87.8}).wait(1).to({graphics:mask_7_graphics_45,x:219.4,y:87.8}).wait(1).to({graphics:mask_7_graphics_46,x:218.8,y:87.8}).wait(1).to({graphics:mask_7_graphics_47,x:218.3,y:87.8}).wait(1).to({graphics:mask_7_graphics_48,x:218,y:87.8}).wait(1).to({graphics:mask_7_graphics_49,x:217.8,y:87.8}).wait(1).to({graphics:mask_7_graphics_50,x:217.8,y:87.8}).wait(35));

	// Layer 42
	this.instance_7 = new lib.contact_t2();
	this.instance_7.setTransform(394.1,107.3,1,1,0,0,0,31.9,66.5);

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85));

	// Layer 43 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_16 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_17 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_18 = new cjs.Graphics().p("AV/LtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_19 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_20 = new cjs.Graphics().p("AV/LuIAA3aIMCAAIAAXag");
	var mask_8_graphics_21 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_22 = new cjs.Graphics().p("AV/LtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_23 = new cjs.Graphics().p("AV/LtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_24 = new cjs.Graphics().p("AV/LtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_25 = new cjs.Graphics().p("AV/LuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_26 = new cjs.Graphics().p("AV/LuIAA3aIMCAAIAAXag");
	var mask_8_graphics_27 = new cjs.Graphics().p("AV/LuIAA3aIMCAAIAAXag");
	var mask_8_graphics_28 = new cjs.Graphics().p("AV/LxIAA3aIMCAAIAAXag");
	var mask_8_graphics_29 = new cjs.Graphics().p("AV/MHIAA3aIMCAAIAAXag");
	var mask_8_graphics_30 = new cjs.Graphics().p("AV/MaIAA3aIMCAAIAAXag");
	var mask_8_graphics_31 = new cjs.Graphics().p("AV/MsIAA3aIMCAAIAAXag");
	var mask_8_graphics_32 = new cjs.Graphics().p("AV/M7IAA3aIMCAAIAAXag");
	var mask_8_graphics_33 = new cjs.Graphics().p("AV/NIIAA3aIMCAAIAAXag");
	var mask_8_graphics_34 = new cjs.Graphics().p("AV/NTIAA3aIMCAAIAAXag");
	var mask_8_graphics_35 = new cjs.Graphics().p("AV/NdIAA3aIMCAAIAAXag");
	var mask_8_graphics_36 = new cjs.Graphics().p("AV/NkIAA3aIMCAAIAAXag");
	var mask_8_graphics_37 = new cjs.Graphics().p("AV/NpIAA3aIMCAAIAAXag");
	var mask_8_graphics_38 = new cjs.Graphics().p("AV/NsIAA3aIMCAAIAAXag");
	var mask_8_graphics_39 = new cjs.Graphics().p("AV/NtIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:217.8,y:-37.5}).wait(16).to({graphics:mask_8_graphics_16,x:217.8,y:-7.5}).wait(1).to({graphics:mask_8_graphics_17,x:217.8,y:1.7}).wait(1).to({graphics:mask_8_graphics_18,x:217.8,y:10.5}).wait(1).to({graphics:mask_8_graphics_19,x:217.8,y:18.8}).wait(1).to({graphics:mask_8_graphics_20,x:217.8,y:26.8}).wait(1).to({graphics:mask_8_graphics_21,x:217.8,y:34.4}).wait(1).to({graphics:mask_8_graphics_22,x:217.8,y:41.5}).wait(1).to({graphics:mask_8_graphics_23,x:217.8,y:48.2}).wait(1).to({graphics:mask_8_graphics_24,x:217.8,y:54.6}).wait(1).to({graphics:mask_8_graphics_25,x:217.8,y:60.5}).wait(1).to({graphics:mask_8_graphics_26,x:217.8,y:66}).wait(1).to({graphics:mask_8_graphics_27,x:217.8,y:71.1}).wait(1).to({graphics:mask_8_graphics_28,x:217.8,y:75.4}).wait(1).to({graphics:mask_8_graphics_29,x:217.8,y:77.5}).wait(1).to({graphics:mask_8_graphics_30,x:217.8,y:79.5}).wait(1).to({graphics:mask_8_graphics_31,x:217.8,y:81.2}).wait(1).to({graphics:mask_8_graphics_32,x:217.8,y:82.7}).wait(1).to({graphics:mask_8_graphics_33,x:217.8,y:84.1}).wait(1).to({graphics:mask_8_graphics_34,x:217.8,y:85.2}).wait(1).to({graphics:mask_8_graphics_35,x:217.8,y:86.1}).wait(1).to({graphics:mask_8_graphics_36,x:217.8,y:86.8}).wait(1).to({graphics:mask_8_graphics_37,x:217.8,y:87.3}).wait(1).to({graphics:mask_8_graphics_38,x:217.8,y:87.6}).wait(1).to({graphics:mask_8_graphics_39,x:217.8,y:87.8}).wait(46));

	// Layer 44
	this.instance_8 = new lib.contact_t1();
	this.instance_8.setTransform(394.1,147.3,1,1,0,0,0,31.9,66.5);

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({y:107.3},23,cjs.Ease.get(1)).wait(46));

	// Layer 63 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_9_graphics_22 = new cjs.Graphics().p("ANFXPIAA3aIMCAAIAAXag");
	var mask_9_graphics_23 = new cjs.Graphics().p("ANFWhIAA3aIMCAAIAAXag");
	var mask_9_graphics_24 = new cjs.Graphics().p("ANFV1IAA3aIMCAAIAAXag");
	var mask_9_graphics_25 = new cjs.Graphics().p("ANFVLIAA3aIMCAAIAAXag");
	var mask_9_graphics_26 = new cjs.Graphics().p("ANFUkIAA3aIMCAAIAAXag");
	var mask_9_graphics_27 = new cjs.Graphics().p("ANFT+IAA3aIMCAAIAAXag");
	var mask_9_graphics_28 = new cjs.Graphics().p("ANFTaIAA3aIMCAAIAAXag");
	var mask_9_graphics_29 = new cjs.Graphics().p("ANFS4IAA3aIMCAAIAAXag");
	var mask_9_graphics_30 = new cjs.Graphics().p("ANFSZIAA3aIMCAAIAAXag");
	var mask_9_graphics_31 = new cjs.Graphics().p("ANFR7IAA3aIMCAAIAAXag");
	var mask_9_graphics_32 = new cjs.Graphics().p("ANFRgIAA3aIMCAAIAAXag");
	var mask_9_graphics_33 = new cjs.Graphics().p("ANFRGIAA3aIMCAAIAAXag");
	var mask_9_graphics_34 = new cjs.Graphics().p("ANFQvIAA3aIMCAAIAAXag");
	var mask_9_graphics_35 = new cjs.Graphics().p("ANFQZIAA3aIMCAAIAAXag");
	var mask_9_graphics_36 = new cjs.Graphics().p("ANFQGIAA3aIMCAAIAAXag");
	var mask_9_graphics_37 = new cjs.Graphics().p("ANFP0IAA3aIMCAAIAAXag");
	var mask_9_graphics_38 = new cjs.Graphics().p("ANFPlIAA3aIMCAAIAAXag");
	var mask_9_graphics_39 = new cjs.Graphics().p("ANFPYIAA3aIMCAAIAAXag");
	var mask_9_graphics_40 = new cjs.Graphics().p("ANFPNIAA3aIMCAAIAAXag");
	var mask_9_graphics_41 = new cjs.Graphics().p("ANFPDIAA3aIMCAAIAAXag");
	var mask_9_graphics_42 = new cjs.Graphics().p("ANFO8IAA3aIMCAAIAAXag");
	var mask_9_graphics_43 = new cjs.Graphics().p("ANFO3IAA3aIMCAAIAAXag");
	var mask_9_graphics_44 = new cjs.Graphics().p("ANFO0IAA3aIMCAAIAAXag");
	var mask_9_graphics_45 = new cjs.Graphics().p("ANFOzIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:160.8,y:-37.5}).wait(22).to({graphics:mask_9_graphics_22,x:160.8,y:148.8}).wait(1).to({graphics:mask_9_graphics_23,x:160.8,y:144.2}).wait(1).to({graphics:mask_9_graphics_24,x:160.8,y:139.8}).wait(1).to({graphics:mask_9_graphics_25,x:160.8,y:135.6}).wait(1).to({graphics:mask_9_graphics_26,x:160.8,y:131.6}).wait(1).to({graphics:mask_9_graphics_27,x:160.8,y:127.8}).wait(1).to({graphics:mask_9_graphics_28,x:160.8,y:124.3}).wait(1).to({graphics:mask_9_graphics_29,x:160.8,y:120.9}).wait(1).to({graphics:mask_9_graphics_30,x:160.8,y:117.7}).wait(1).to({graphics:mask_9_graphics_31,x:160.8,y:114.8}).wait(1).to({graphics:mask_9_graphics_32,x:160.8,y:112}).wait(1).to({graphics:mask_9_graphics_33,x:160.8,y:109.4}).wait(1).to({graphics:mask_9_graphics_34,x:160.8,y:107.1}).wait(1).to({graphics:mask_9_graphics_35,x:160.8,y:105}).wait(1).to({graphics:mask_9_graphics_36,x:160.8,y:103}).wait(1).to({graphics:mask_9_graphics_37,x:160.8,y:101.3}).wait(1).to({graphics:mask_9_graphics_38,x:160.8,y:99.8}).wait(1).to({graphics:mask_9_graphics_39,x:160.8,y:98.4}).wait(1).to({graphics:mask_9_graphics_40,x:160.8,y:97.3}).wait(1).to({graphics:mask_9_graphics_41,x:160.8,y:96.4}).wait(1).to({graphics:mask_9_graphics_42,x:160.8,y:95.7}).wait(1).to({graphics:mask_9_graphics_43,x:160.8,y:95.2}).wait(1).to({graphics:mask_9_graphics_44,x:160.8,y:94.9}).wait(1).to({graphics:mask_9_graphics_45,x:160.8,y:94.8}).wait(40));

	// Layer 60
	this.instance_9 = new lib.contact_n2();
	this.instance_9.setTransform(278.9,107.2,1,1,0,0,0,31.4,66.5);

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({y:77.2},0).to({y:107.2},23,cjs.Ease.get(1)).wait(40));

	// Layer 62 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_10 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_11 = new cjs.Graphics().p("ANFLtIAA3aIMCAAIAAXag");
	var mask_10_graphics_12 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_13 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_14 = new cjs.Graphics().p("ANFLtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_15 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_16 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_17 = new cjs.Graphics().p("ANFLtIAA3aIMCAAIAAXag");
	var mask_10_graphics_18 = new cjs.Graphics().p("ANFLuIAA3aIMCAAIAAXag");
	var mask_10_graphics_19 = new cjs.Graphics().p("ANFLtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_20 = new cjs.Graphics().p("ANFLtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_21 = new cjs.Graphics().p("ANFLuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_22 = new cjs.Graphics().p("ANFLuIAA3aIMCAAIAAXag");
	var mask_10_graphics_23 = new cjs.Graphics().p("ANFLtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_24 = new cjs.Graphics().p("ANFMDIAA3aIMCAAIAAXag");
	var mask_10_graphics_25 = new cjs.Graphics().p("ANFMaIAA3aIMCAAIAAXag");
	var mask_10_graphics_26 = new cjs.Graphics().p("ANFMtIAA3aIMCAAIAAXag");
	var mask_10_graphics_27 = new cjs.Graphics().p("ANFM+IAA3aIMCAAIAAXag");
	var mask_10_graphics_28 = new cjs.Graphics().p("ANFNMIAA3aIMCAAIAAXag");
	var mask_10_graphics_29 = new cjs.Graphics().p("ANFNYIAA3aIMCAAIAAXag");
	var mask_10_graphics_30 = new cjs.Graphics().p("ANFNhIAA3aIMCAAIAAXag");
	var mask_10_graphics_31 = new cjs.Graphics().p("ANFNoIAA3aIMCAAIAAXag");
	var mask_10_graphics_32 = new cjs.Graphics().p("ANFNsIAA3aIMCAAIAAXag");
	var mask_10_graphics_33 = new cjs.Graphics().p("ANFNtIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:160.8,y:-37.5}).wait(10).to({graphics:mask_10_graphics_10,x:160.8,y:-37.5}).wait(1).to({graphics:mask_10_graphics_11,x:160.8,y:-25.8}).wait(1).to({graphics:mask_10_graphics_12,x:160.8,y:-14.5}).wait(1).to({graphics:mask_10_graphics_13,x:160.8,y:-3.8}).wait(1).to({graphics:mask_10_graphics_14,x:160.8,y:6.3}).wait(1).to({graphics:mask_10_graphics_15,x:160.8,y:16}).wait(1).to({graphics:mask_10_graphics_16,x:160.8,y:25.1}).wait(1).to({graphics:mask_10_graphics_17,x:160.8,y:33.7}).wait(1).to({graphics:mask_10_graphics_18,x:160.8,y:41.8}).wait(1).to({graphics:mask_10_graphics_19,x:160.8,y:49.4}).wait(1).to({graphics:mask_10_graphics_20,x:160.8,y:56.4}).wait(1).to({graphics:mask_10_graphics_21,x:160.8,y:62.9}).wait(1).to({graphics:mask_10_graphics_22,x:160.8,y:68.9}).wait(1).to({graphics:mask_10_graphics_23,x:160.8,y:74.4}).wait(1).to({graphics:mask_10_graphics_24,x:160.8,y:77.2}).wait(1).to({graphics:mask_10_graphics_25,x:160.8,y:79.4}).wait(1).to({graphics:mask_10_graphics_26,x:160.8,y:81.4}).wait(1).to({graphics:mask_10_graphics_27,x:160.8,y:83.1}).wait(1).to({graphics:mask_10_graphics_28,x:160.8,y:84.5}).wait(1).to({graphics:mask_10_graphics_29,x:160.8,y:85.7}).wait(1).to({graphics:mask_10_graphics_30,x:160.8,y:86.6}).wait(1).to({graphics:mask_10_graphics_31,x:160.8,y:87.2}).wait(1).to({graphics:mask_10_graphics_32,x:160.8,y:87.6}).wait(1).to({graphics:mask_10_graphics_33,x:160.8,y:87.8}).wait(52));

	// Layer 30
	this.instance_10 = new lib.contact_n1();
	this.instance_10.setTransform(278.9,147.2,1,1,0,0,0,31.4,66.5);

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({y:107.2},23,cjs.Ease.get(1)).wait(52));

	// Layer 35 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("ADjRdIAA3aIMCAAIAAXag");
	var mask_11_graphics_16 = new cjs.Graphics().p("ADjRdIAA3aIMCAAIAAXag");
	var mask_11_graphics_17 = new cjs.Graphics().p("ADjROIAA3aIMCAAIAAXag");
	var mask_11_graphics_18 = new cjs.Graphics().p("ADjRAIAA3aIMCAAIAAXag");
	var mask_11_graphics_19 = new cjs.Graphics().p("ADjQyIAA3aIMCAAIAAXag");
	var mask_11_graphics_20 = new cjs.Graphics().p("ADjQlIAA3aIMCAAIAAXag");
	var mask_11_graphics_21 = new cjs.Graphics().p("ADjQZIAA3aIMCAAIAAXag");
	var mask_11_graphics_22 = new cjs.Graphics().p("ADjQOIAA3aIMCAAIAAXag");
	var mask_11_graphics_23 = new cjs.Graphics().p("ADjQDIAA3aIMCAAIAAXag");
	var mask_11_graphics_24 = new cjs.Graphics().p("ADjP4IAA3aIMCAAIAAXag");
	var mask_11_graphics_25 = new cjs.Graphics().p("ADjPvIAA3aIMCAAIAAXag");
	var mask_11_graphics_26 = new cjs.Graphics().p("ADjPmIAA3aIMCAAIAAXag");
	var mask_11_graphics_27 = new cjs.Graphics().p("ADjPeIAA3aIMCAAIAAXag");
	var mask_11_graphics_28 = new cjs.Graphics().p("ADjPWIAA3aIMCAAIAAXag");
	var mask_11_graphics_29 = new cjs.Graphics().p("ADjPPIAA3aIMCAAIAAXag");
	var mask_11_graphics_30 = new cjs.Graphics().p("ADjPJIAA3aIMCAAIAAXag");
	var mask_11_graphics_31 = new cjs.Graphics().p("ADjPDIAA3aIMCAAIAAXag");
	var mask_11_graphics_32 = new cjs.Graphics().p("ADjO+IAA3aIMCAAIAAXag");
	var mask_11_graphics_33 = new cjs.Graphics().p("ADjO6IAA3aIMCAAIAAXag");
	var mask_11_graphics_34 = new cjs.Graphics().p("ADjO2IAA3aIMCAAIAAXag");
	var mask_11_graphics_35 = new cjs.Graphics().p("ADjOzIAA3aIMCAAIAAXag");
	var mask_11_graphics_36 = new cjs.Graphics().p("ADjOxIAA3aIMCAAIAAXag");
	var mask_11_graphics_37 = new cjs.Graphics().p("ADjOvIAA3aIMCAAIAAXag");
	var mask_11_graphics_38 = new cjs.Graphics().p("ADjOuIAA3aIMCAAIAAXag");
	var mask_11_graphics_39 = new cjs.Graphics().p("ADjOuIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:99.8,y:111.8}).wait(16).to({graphics:mask_11_graphics_16,x:99.8,y:111.8}).wait(1).to({graphics:mask_11_graphics_17,x:99.8,y:110.3}).wait(1).to({graphics:mask_11_graphics_18,x:99.8,y:108.8}).wait(1).to({graphics:mask_11_graphics_19,x:99.8,y:107.5}).wait(1).to({graphics:mask_11_graphics_20,x:99.8,y:106.2}).wait(1).to({graphics:mask_11_graphics_21,x:99.8,y:105}).wait(1).to({graphics:mask_11_graphics_22,x:99.8,y:103.8}).wait(1).to({graphics:mask_11_graphics_23,x:99.8,y:102.7}).wait(1).to({graphics:mask_11_graphics_24,x:99.8,y:101.7}).wait(1).to({graphics:mask_11_graphics_25,x:99.8,y:100.7}).wait(1).to({graphics:mask_11_graphics_26,x:99.8,y:99.8}).wait(1).to({graphics:mask_11_graphics_27,x:99.8,y:99}).wait(1).to({graphics:mask_11_graphics_28,x:99.8,y:98.3}).wait(1).to({graphics:mask_11_graphics_29,x:99.8,y:97.6}).wait(1).to({graphics:mask_11_graphics_30,x:99.8,y:96.9}).wait(1).to({graphics:mask_11_graphics_31,x:99.8,y:96.4}).wait(1).to({graphics:mask_11_graphics_32,x:99.8,y:95.9}).wait(1).to({graphics:mask_11_graphics_33,x:99.8,y:95.4}).wait(1).to({graphics:mask_11_graphics_34,x:99.8,y:95.1}).wait(1).to({graphics:mask_11_graphics_35,x:99.8,y:94.8}).wait(1).to({graphics:mask_11_graphics_36,x:99.8,y:94.5}).wait(1).to({graphics:mask_11_graphics_37,x:99.8,y:94.4}).wait(1).to({graphics:mask_11_graphics_38,x:99.8,y:94.3}).wait(1).to({graphics:mask_11_graphics_39,x:99.8,y:94.3}).wait(46));

	// Layer 36
	this.instance_11 = new lib.contact_o3();
	this.instance_11.setTransform(162.1,67.3,1,1,0,0,0,30.4,67.8);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16).to({y:107.3},23,cjs.Ease.get(1)).wait(46));

	// Layer 37 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_12_graphics_16 = new cjs.Graphics().p("ADyLuIAA3aIMCAAIAAXag");
	var mask_12_graphics_17 = new cjs.Graphics().p("AD0LtIAA3ZIMCAAIAAXZg");
	var mask_12_graphics_18 = new cjs.Graphics().p("AD2LuIAA3bIMCAAIAAXbg");
	var mask_12_graphics_19 = new cjs.Graphics().p("AD4LuIAA3aIMCAAIAAXag");
	var mask_12_graphics_20 = new cjs.Graphics().p("AD6LtIAA3ZIMCAAIAAXZg");
	var mask_12_graphics_21 = new cjs.Graphics().p("AD8LzIAA3aIMCAAIAAXag");
	var mask_12_graphics_22 = new cjs.Graphics().p("AD9MAIAA3aIMCAAIAAXag");
	var mask_12_graphics_23 = new cjs.Graphics().p("AD/MMIAA3aIMCAAIAAXag");
	var mask_12_graphics_24 = new cjs.Graphics().p("AEAMYIAA3aIMCAAIAAXag");
	var mask_12_graphics_25 = new cjs.Graphics().p("AECMjIAA3aIMCAAIAAXag");
	var mask_12_graphics_26 = new cjs.Graphics().p("AEDMtIAA3aIMCAAIAAXag");
	var mask_12_graphics_27 = new cjs.Graphics().p("AEEM3IAA3aIMCAAIAAXag");
	var mask_12_graphics_28 = new cjs.Graphics().p("AEFM/IAA3aIMCAAIAAXag");
	var mask_12_graphics_29 = new cjs.Graphics().p("AEGNHIAA3aIMCAAIAAXag");
	var mask_12_graphics_30 = new cjs.Graphics().p("AEHNOIAA3aIMCAAIAAXag");
	var mask_12_graphics_31 = new cjs.Graphics().p("AEINVIAA3aIMCAAIAAXag");
	var mask_12_graphics_32 = new cjs.Graphics().p("AEJNaIAA3aIMCAAIAAXag");
	var mask_12_graphics_33 = new cjs.Graphics().p("AEJNfIAA3aIMCAAIAAXag");
	var mask_12_graphics_34 = new cjs.Graphics().p("AEKNkIAA3aIMCAAIAAXag");
	var mask_12_graphics_35 = new cjs.Graphics().p("AEKNnIAA3aIMCAAIAAXag");
	var mask_12_graphics_36 = new cjs.Graphics().p("AELNqIAA3aIMCAAIAAXag");
	var mask_12_graphics_37 = new cjs.Graphics().p("AELNrIAA3aIMCAAIAAXag");
	var mask_12_graphics_38 = new cjs.Graphics().p("AELNtIAA3aIMCAAIAAXag");
	var mask_12_graphics_39 = new cjs.Graphics().p("AELNtIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:100.8,y:-37.5}).wait(16).to({graphics:mask_12_graphics_16,x:101.3,y:60.5}).wait(1).to({graphics:mask_12_graphics_17,x:101.5,y:63.9}).wait(1).to({graphics:mask_12_graphics_18,x:101.7,y:67.2}).wait(1).to({graphics:mask_12_graphics_19,x:101.9,y:70.3}).wait(1).to({graphics:mask_12_graphics_20,x:102,y:73.2}).wait(1).to({graphics:mask_12_graphics_21,x:102.2,y:75.5}).wait(1).to({graphics:mask_12_graphics_22,x:102.4,y:76.8}).wait(1).to({graphics:mask_12_graphics_23,x:102.5,y:78.1}).wait(1).to({graphics:mask_12_graphics_24,x:102.7,y:79.2}).wait(1).to({graphics:mask_12_graphics_25,x:102.8,y:80.3}).wait(1).to({graphics:mask_12_graphics_26,x:103,y:81.4}).wait(1).to({graphics:mask_12_graphics_27,x:103.1,y:82.3}).wait(1).to({graphics:mask_12_graphics_28,x:103.2,y:83.2}).wait(1).to({graphics:mask_12_graphics_29,x:103.3,y:84}).wait(1).to({graphics:mask_12_graphics_30,x:103.4,y:84.7}).wait(1).to({graphics:mask_12_graphics_31,x:103.4,y:85.3}).wait(1).to({graphics:mask_12_graphics_32,x:103.5,y:85.9}).wait(1).to({graphics:mask_12_graphics_33,x:103.6,y:86.4}).wait(1).to({graphics:mask_12_graphics_34,x:103.6,y:86.8}).wait(1).to({graphics:mask_12_graphics_35,x:103.7,y:87.1}).wait(1).to({graphics:mask_12_graphics_36,x:103.7,y:87.4}).wait(1).to({graphics:mask_12_graphics_37,x:103.7,y:87.6}).wait(1).to({graphics:mask_12_graphics_38,x:103.7,y:87.7}).wait(1).to({graphics:mask_12_graphics_39,x:103.8,y:87.8}).wait(46));

	// Layer 38
	this.instance_12 = new lib.contact_o2();
	this.instance_12.setTransform(162.1,147.3,1,1,0,0,0,30.4,67.8);

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({y:107.3},23,cjs.Ease.get(1)).wait(46));

	// Layer 39 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_5 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_6 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_7 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_8 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_9 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_10 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_11 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_12 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_13 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_14 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_15 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_16 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_17 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_18 = new cjs.Graphics().p("ADtLtIAA3aIMCAAIAAXag");
	var mask_13_graphics_19 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_20 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_21 = new cjs.Graphics().p("ADtLuIAA3aIMCAAIAAXag");
	var mask_13_graphics_22 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_23 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_24 = new cjs.Graphics().p("ADtLtIAA3aIMCAAIAAXag");
	var mask_13_graphics_25 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_26 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");
	var mask_13_graphics_27 = new cjs.Graphics().p("ADtLuIAA3bIMCAAIAAXbg");
	var mask_13_graphics_28 = new cjs.Graphics().p("ADtLtIAA3ZIMCAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:100.8,y:-37.5}).wait(5).to({graphics:mask_13_graphics_5,x:100.8,y:-37.5}).wait(1).to({graphics:mask_13_graphics_6,x:100.8,y:-28.7}).wait(1).to({graphics:mask_13_graphics_7,x:100.8,y:-20.2}).wait(1).to({graphics:mask_13_graphics_8,x:100.8,y:-12.1}).wait(1).to({graphics:mask_13_graphics_9,x:100.8,y:-4.5}).wait(1).to({graphics:mask_13_graphics_10,x:100.8,y:2.8}).wait(1).to({graphics:mask_13_graphics_11,x:100.8,y:9.7}).wait(1).to({graphics:mask_13_graphics_12,x:100.8,y:16.2}).wait(1).to({graphics:mask_13_graphics_13,x:100.8,y:22.3}).wait(1).to({graphics:mask_13_graphics_14,x:100.8,y:28}).wait(1).to({graphics:mask_13_graphics_15,x:100.8,y:33.3}).wait(1).to({graphics:mask_13_graphics_16,x:100.8,y:38.2}).wait(1).to({graphics:mask_13_graphics_17,x:100.8,y:42.7}).wait(1).to({graphics:mask_13_graphics_18,x:100.8,y:46.8}).wait(1).to({graphics:mask_13_graphics_19,x:100.8,y:50.6}).wait(1).to({graphics:mask_13_graphics_20,x:100.8,y:53.9}).wait(1).to({graphics:mask_13_graphics_21,x:100.8,y:56.9}).wait(1).to({graphics:mask_13_graphics_22,x:100.8,y:59.4}).wait(1).to({graphics:mask_13_graphics_23,x:100.8,y:61.6}).wait(1).to({graphics:mask_13_graphics_24,x:100.8,y:63.4}).wait(1).to({graphics:mask_13_graphics_25,x:100.8,y:64.7}).wait(1).to({graphics:mask_13_graphics_26,x:100.8,y:65.7}).wait(1).to({graphics:mask_13_graphics_27,x:100.8,y:66.3}).wait(1).to({graphics:mask_13_graphics_28,x:100.8,y:66.5}).wait(57));

	// Layer 40
	this.instance_13 = new lib.contact_o1();
	this.instance_13.setTransform(162.1,147.3,1,1,0,0,0,30.4,67.8);

	this.instance_13.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({y:107.3},23,cjs.Ease.get(1)).wait(57));

	// Layer 59 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("AlpQNIAA3aIMAAAIAAXag");
	var mask_14_graphics_10 = new cjs.Graphics().p("AlpQNIAA3aIMAAAIAAXag");
	var mask_14_graphics_11 = new cjs.Graphics().p("AlpQAIAA3aIMAAAIAAXag");
	var mask_14_graphics_12 = new cjs.Graphics().p("AlpP0IAA3aIMAAAIAAXag");
	var mask_14_graphics_13 = new cjs.Graphics().p("AlpPoIAA3aIMAAAIAAXag");
	var mask_14_graphics_14 = new cjs.Graphics().p("AlpPdIAA3aIMAAAIAAXag");
	var mask_14_graphics_15 = new cjs.Graphics().p("AlpPTIAA3aIMAAAIAAXag");
	var mask_14_graphics_16 = new cjs.Graphics().p("AlpPJIAA3aIMAAAIAAXag");
	var mask_14_graphics_17 = new cjs.Graphics().p("AlpPAIAA3aIMAAAIAAXag");
	var mask_14_graphics_18 = new cjs.Graphics().p("AlpO3IAA3aIMAAAIAAXag");
	var mask_14_graphics_19 = new cjs.Graphics().p("AlpOvIAA3aIMAAAIAAXag");
	var mask_14_graphics_20 = new cjs.Graphics().p("AlpOnIAA3aIMAAAIAAXag");
	var mask_14_graphics_21 = new cjs.Graphics().p("AlpOgIAA3aIMAAAIAAXag");
	var mask_14_graphics_22 = new cjs.Graphics().p("AlpOZIAA3aIMAAAIAAXag");
	var mask_14_graphics_23 = new cjs.Graphics().p("AlpOTIAA3aIMAAAIAAXag");
	var mask_14_graphics_24 = new cjs.Graphics().p("AlpOOIAA3aIMAAAIAAXag");
	var mask_14_graphics_25 = new cjs.Graphics().p("AlpOJIAA3aIMAAAIAAXag");
	var mask_14_graphics_26 = new cjs.Graphics().p("AlpOFIAA3aIMAAAIAAXag");
	var mask_14_graphics_27 = new cjs.Graphics().p("AlpOBIAA3aIMAAAIAAXag");
	var mask_14_graphics_28 = new cjs.Graphics().p("AlpN+IAA3aIMAAAIAAXag");
	var mask_14_graphics_29 = new cjs.Graphics().p("AlpN8IAA3aIMAAAIAAXag");
	var mask_14_graphics_30 = new cjs.Graphics().p("AlpN6IAA3aIMAAAIAAXag");
	var mask_14_graphics_31 = new cjs.Graphics().p("AlpN4IAA3aIMAAAIAAXag");
	var mask_14_graphics_32 = new cjs.Graphics().p("AlpN3IAA3aIMAAAIAAXag");
	var mask_14_graphics_33 = new cjs.Graphics().p("AlpN3IAA3aIMAAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:40.8,y:103.8}).wait(10).to({graphics:mask_14_graphics_10,x:40.8,y:103.8}).wait(1).to({graphics:mask_14_graphics_11,x:40.8,y:102.5}).wait(1).to({graphics:mask_14_graphics_12,x:40.8,y:101.3}).wait(1).to({graphics:mask_14_graphics_13,x:40.8,y:100.1}).wait(1).to({graphics:mask_14_graphics_14,x:40.8,y:99}).wait(1).to({graphics:mask_14_graphics_15,x:40.8,y:97.9}).wait(1).to({graphics:mask_14_graphics_16,x:40.8,y:96.9}).wait(1).to({graphics:mask_14_graphics_17,x:40.8,y:96}).wait(1).to({graphics:mask_14_graphics_18,x:40.8,y:95.1}).wait(1).to({graphics:mask_14_graphics_19,x:40.8,y:94.3}).wait(1).to({graphics:mask_14_graphics_20,x:40.8,y:93.5}).wait(1).to({graphics:mask_14_graphics_21,x:40.8,y:92.8}).wait(1).to({graphics:mask_14_graphics_22,x:40.8,y:92.2}).wait(1).to({graphics:mask_14_graphics_23,x:40.8,y:91.6}).wait(1).to({graphics:mask_14_graphics_24,x:40.8,y:91}).wait(1).to({graphics:mask_14_graphics_25,x:40.8,y:90.6}).wait(1).to({graphics:mask_14_graphics_26,x:40.8,y:90.1}).wait(1).to({graphics:mask_14_graphics_27,x:40.8,y:89.8}).wait(1).to({graphics:mask_14_graphics_28,x:40.8,y:89.5}).wait(1).to({graphics:mask_14_graphics_29,x:40.8,y:89.2}).wait(1).to({graphics:mask_14_graphics_30,x:40.8,y:89}).wait(1).to({graphics:mask_14_graphics_31,x:40.8,y:88.9}).wait(1).to({graphics:mask_14_graphics_32,x:40.8,y:88.8}).wait(1).to({graphics:mask_14_graphics_33,x:40.8,y:88.8}).wait(52));

	// Layer 58
	this.instance_14 = new lib.contact_c3();
	this.instance_14.setTransform(47.4,67.2,1,1,0,0,0,29.9,67.8);

	this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({y:107.2},23,cjs.Ease.get(1)).wait(52));

	// Layer 57 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_0 = new cjs.Graphics().p("AlpMTIAA3aIMAAAIAAXag");
	var mask_15_graphics_10 = new cjs.Graphics().p("AlpMTIAA3aIMAAAIAAXag");
	var mask_15_graphics_11 = new cjs.Graphics().p("AlpMcIAA3aIMAAAIAAXag");
	var mask_15_graphics_12 = new cjs.Graphics().p("AlpMkIAA3aIMAAAIAAXag");
	var mask_15_graphics_13 = new cjs.Graphics().p("AlpMrIAA3aIMAAAIAAXag");
	var mask_15_graphics_14 = new cjs.Graphics().p("AlpMzIAA3aIMAAAIAAXag");
	var mask_15_graphics_15 = new cjs.Graphics().p("AlpM6IAA3aIMAAAIAAXag");
	var mask_15_graphics_16 = new cjs.Graphics().p("AlpNAIAA3aIMAAAIAAXag");
	var mask_15_graphics_17 = new cjs.Graphics().p("AlpNHIAA3aIMAAAIAAXag");
	var mask_15_graphics_18 = new cjs.Graphics().p("AlpNMIAA3aIMAAAIAAXag");
	var mask_15_graphics_19 = new cjs.Graphics().p("AlpNSIAA3aIMAAAIAAXag");
	var mask_15_graphics_20 = new cjs.Graphics().p("AlpNXIAA3aIMAAAIAAXag");
	var mask_15_graphics_21 = new cjs.Graphics().p("AlpNcIAA3aIMAAAIAAXag");
	var mask_15_graphics_22 = new cjs.Graphics().p("AlpNgIAA3aIMAAAIAAXag");
	var mask_15_graphics_23 = new cjs.Graphics().p("AlpNkIAA3aIMAAAIAAXag");
	var mask_15_graphics_24 = new cjs.Graphics().p("AlpNoIAA3aIMAAAIAAXag");
	var mask_15_graphics_25 = new cjs.Graphics().p("AlpNrIAA3aIMAAAIAAXag");
	var mask_15_graphics_26 = new cjs.Graphics().p("AlpNuIAA3aIMAAAIAAXag");
	var mask_15_graphics_27 = new cjs.Graphics().p("AlpNwIAA3aIMAAAIAAXag");
	var mask_15_graphics_28 = new cjs.Graphics().p("AlpNyIAA3aIMAAAIAAXag");
	var mask_15_graphics_29 = new cjs.Graphics().p("AlpN0IAA3aIMAAAIAAXag");
	var mask_15_graphics_30 = new cjs.Graphics().p("AlpN1IAA3aIMAAAIAAXag");
	var mask_15_graphics_31 = new cjs.Graphics().p("AlpN2IAA3aIMAAAIAAXag");
	var mask_15_graphics_32 = new cjs.Graphics().p("AlpN3IAA3aIMAAAIAAXag");
	var mask_15_graphics_33 = new cjs.Graphics().p("AlpN3IAA3aIMAAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:mask_15_graphics_0,x:40.8,y:78.8}).wait(10).to({graphics:mask_15_graphics_10,x:40.8,y:78.8}).wait(1).to({graphics:mask_15_graphics_11,x:40.8,y:79.6}).wait(1).to({graphics:mask_15_graphics_12,x:40.8,y:80.4}).wait(1).to({graphics:mask_15_graphics_13,x:40.8,y:81.2}).wait(1).to({graphics:mask_15_graphics_14,x:40.8,y:81.9}).wait(1).to({graphics:mask_15_graphics_15,x:40.8,y:82.6}).wait(1).to({graphics:mask_15_graphics_16,x:40.8,y:83.3}).wait(1).to({graphics:mask_15_graphics_17,x:40.8,y:83.9}).wait(1).to({graphics:mask_15_graphics_18,x:40.8,y:84.5}).wait(1).to({graphics:mask_15_graphics_19,x:40.8,y:85}).wait(1).to({graphics:mask_15_graphics_20,x:40.8,y:85.6}).wait(1).to({graphics:mask_15_graphics_21,x:40.8,y:86}).wait(1).to({graphics:mask_15_graphics_22,x:40.8,y:86.5}).wait(1).to({graphics:mask_15_graphics_23,x:40.8,y:86.9}).wait(1).to({graphics:mask_15_graphics_24,x:40.8,y:87.2}).wait(1).to({graphics:mask_15_graphics_25,x:40.8,y:87.5}).wait(1).to({graphics:mask_15_graphics_26,x:40.8,y:87.8}).wait(1).to({graphics:mask_15_graphics_27,x:40.8,y:88.1}).wait(1).to({graphics:mask_15_graphics_28,x:40.8,y:88.3}).wait(1).to({graphics:mask_15_graphics_29,x:40.8,y:88.4}).wait(1).to({graphics:mask_15_graphics_30,x:40.8,y:88.6}).wait(1).to({graphics:mask_15_graphics_31,x:40.8,y:88.7}).wait(1).to({graphics:mask_15_graphics_32,x:40.8,y:88.7}).wait(1).to({graphics:mask_15_graphics_33,x:40.8,y:88.8}).wait(52));

	// Layer 56
	this.instance_15 = new lib.contact_c2();
	this.instance_15.setTransform(47.4,147.2,1,1,0,0,0,29.9,67.8);

	this.instance_15.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({y:107.2},23,cjs.Ease.get(1)).wait(52));

	// Layer 55 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_0 = new cjs.Graphics().p("AlpLtIAA3aIMAAAIAAXag");
	var mask_16_graphics_1 = new cjs.Graphics().p("AlpLtIAA3ZIMAAAIAAXZg");
	var mask_16_graphics_2 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_3 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_4 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_5 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_6 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_7 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_8 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_9 = new cjs.Graphics().p("AlpLtIAA3ZIMAAAIAAXZg");
	var mask_16_graphics_10 = new cjs.Graphics().p("AlpLtIAA3ZIMAAAIAAXZg");
	var mask_16_graphics_11 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_12 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_13 = new cjs.Graphics().p("AlpLtIAA3aIMAAAIAAXag");
	var mask_16_graphics_14 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_15 = new cjs.Graphics().p("AlpLtIAA3aIMAAAIAAXag");
	var mask_16_graphics_16 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_17 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_18 = new cjs.Graphics().p("AlpLtIAA3ZIMAAAIAAXZg");
	var mask_16_graphics_19 = new cjs.Graphics().p("AlpLtIAA3ZIMAAAIAAXZg");
	var mask_16_graphics_20 = new cjs.Graphics().p("AlpLuIAA3aIMAAAIAAXag");
	var mask_16_graphics_21 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_22 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");
	var mask_16_graphics_23 = new cjs.Graphics().p("AlpLuIAA3bIMAAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:mask_16_graphics_0,x:40.8,y:2.5}).wait(1).to({graphics:mask_16_graphics_1,x:40.8,y:8.5}).wait(1).to({graphics:mask_16_graphics_2,x:40.8,y:14.1}).wait(1).to({graphics:mask_16_graphics_3,x:40.8,y:19.6}).wait(1).to({graphics:mask_16_graphics_4,x:40.8,y:24.7}).wait(1).to({graphics:mask_16_graphics_5,x:40.8,y:29.6}).wait(1).to({graphics:mask_16_graphics_6,x:40.8,y:34.3}).wait(1).to({graphics:mask_16_graphics_7,x:40.8,y:38.6}).wait(1).to({graphics:mask_16_graphics_8,x:40.8,y:42.7}).wait(1).to({graphics:mask_16_graphics_9,x:40.8,y:46.6}).wait(1).to({graphics:mask_16_graphics_10,x:40.8,y:50.1}).wait(1).to({graphics:mask_16_graphics_11,x:40.8,y:53.4}).wait(1).to({graphics:mask_16_graphics_12,x:40.8,y:56.5}).wait(1).to({graphics:mask_16_graphics_13,x:40.8,y:59.3}).wait(1).to({graphics:mask_16_graphics_14,x:40.8,y:61.8}).wait(1).to({graphics:mask_16_graphics_15,x:40.8,y:64}).wait(1).to({graphics:mask_16_graphics_16,x:40.8,y:66}).wait(1).to({graphics:mask_16_graphics_17,x:40.8,y:67.7}).wait(1).to({graphics:mask_16_graphics_18,x:40.8,y:69.2}).wait(1).to({graphics:mask_16_graphics_19,x:40.8,y:70.4}).wait(1).to({graphics:mask_16_graphics_20,x:40.8,y:71.3}).wait(1).to({graphics:mask_16_graphics_21,x:40.8,y:72}).wait(1).to({graphics:mask_16_graphics_22,x:40.8,y:72.4}).wait(1).to({graphics:mask_16_graphics_23,x:40.8,y:72.5}).wait(62));

	// Layer 28
	this.instance_16 = new lib.contact_c1();
	this.instance_16.setTransform(47.4,147.2,1,1,0,0,0,29.9,67.8);

	this.instance_16.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:107.2},23,cjs.Ease.get(1)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42,17,1500,900);


// symbols:
(lib.contact_1 = function() {
	this.initialize(img.contact_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.contact_t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+BDIAAiFIJ9AAIAACFg");
	this.shape.setTransform(31.9,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,13.6);


(lib.contact_t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJJcIAAy3ICTAAIAAS3g");
	this.shape.setTransform(31.9,72.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.5,12.1,14.9,121);


(lib.contact_o3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACbChQgChagkgvQgmgxhPAAQhQAAgnAxQgkAugDBbIiRAAQADhHASg7QATg7AigqQBLhaCaAAQCYAABMBaQBHBSAFCVg");
	this.shape.setTransform(30.5,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,60.9,32.3);


(lib.contact_o2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjkBXQhLhZAAiYIAAgXICRAAIAAAeQAABbAnAzQAnAxBQAAQBQAAAmgxQAmgzAAhbIAAgeICUAAIAAAXQAACYhMBZQhMBbiYAAQiaAAhKhbg");
	this.shape.setTransform(30.5,117.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,100,61,35.7);


(lib.contact_o1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACcFZIAAqlIgBgMICVAAIAAAUIAAKdgAkvFZIAAqdIAAgUICRAAIAAAMIAAKlg");
	this.shape.setTransform(30.5,66);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,31.5,61,69.1);


(lib.contact_n2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChKXIAAlwIAzAAIAAFwgAjSmaIAAj8IAxAAIAAD8g");
	this.shape.setTransform(32.8,66.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACfKZIlTwxIAAkAIA4AAIExPAIAAFxg");
	this.shape_1.setTransform(31.4,66.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.6,0,42.4,133.1);


(lib.contact_n1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC1KZIAA0xICEAAIAAUxgAk4KZIAA0xICFAAIAAUxg");
	this.shape.setTransform(31.4,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,133.1);


(lib.contact_c3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACeDjIAAiAIgCgfQgFhEgfgoQglgzhRAAQhOAAgmAzQggAogFBEIgBAfIAAB/IiSAAIAAh3IACgnQADg1ANgsQASg+AlgsQAlgrA4gXQA4gZBMAAQCYAABJBbQBABQAIB7IACAnIAAB4g");
	this.shape.setTransform(29.9,22.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.9,45.5);


(lib.contact_c2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhCfQg+hOgJh3IgCgoIAAgEIAAinICSAAIAACuQAAATABASQAHA/AeAoQAmAyBOAAQBRAAAlgyQAegoAGg/QACgSAAgTIAAisICNAAIAAClIAAAEIgCAoQgJB3g/BOQhJBbiYAAQiYAAhJhbg");
	this.shape.setTransform(29.9,110.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,85.6,59.9,50.1);


(lib.contact_c1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHEZIAAoxICPAAIAAIxg");
	this.shape.setTransform(7.3,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,38.4,14.6,56.2);


(lib.contact_a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirA/IAUh9IEvAAIAUB9g");
	this.shape.setTransform(17.3,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.6,12.7);


(lib.contact_a1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADWKZIg0kMIgUh/IiVr+IiSL+IgTB/Ig0EMIiIAAID+0xIDVAAID+Uxg");
	this.shape.setTransform(36.2,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.4,133.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 780,
	height: 210,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/_0.jpg", id:"_0"}
	]
};

// stage content:
(lib.dtLogo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		/* js
			this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_50 = new cjs.Graphics().p("EAwIAMqIAAshILtAAIAAMhg");
	var mask_graphics_51 = new cjs.Graphics().p("EAwIAMQIAAseILtAAIAAMeg");
	var mask_graphics_52 = new cjs.Graphics().p("EAwIAL3IAAseILtAAIAAMeg");
	var mask_graphics_53 = new cjs.Graphics().p("EAwIALgIAAseILtAAIAAMeg");
	var mask_graphics_54 = new cjs.Graphics().p("EAwIALKIAAseILuAAIAAMeg");
	var mask_graphics_55 = new cjs.Graphics().p("EAwIAK1IAAseILuAAIAAMeg");
	var mask_graphics_56 = new cjs.Graphics().p("EAwIAKhIAAseILuAAIAAMeg");
	var mask_graphics_57 = new cjs.Graphics().p("EAwIAKOIAAseILuAAIAAMeg");
	var mask_graphics_58 = new cjs.Graphics().p("EAwIAJ9IAAseILuAAIAAMeg");
	var mask_graphics_59 = new cjs.Graphics().p("EAwIAJtIAAseILtAAIAAMeg");
	var mask_graphics_60 = new cjs.Graphics().p("EAwIAJeIAAseILtAAIAAMeg");
	var mask_graphics_61 = new cjs.Graphics().p("EAwIAJQIAAseILtAAIAAMeg");
	var mask_graphics_62 = new cjs.Graphics().p("EAwIAJDIAAseILtAAIAAMeg");
	var mask_graphics_63 = new cjs.Graphics().p("EAwIAI4IAAseILtAAIAAMeg");
	var mask_graphics_64 = new cjs.Graphics().p("EAwIAIuIAAseILtAAIAAMeg");
	var mask_graphics_65 = new cjs.Graphics().p("EAwIAIlIAAseILtAAIAAMeg");
	var mask_graphics_66 = new cjs.Graphics().p("EAwIAIdIAAseILtAAIAAMeg");
	var mask_graphics_67 = new cjs.Graphics().p("EAwIAIWIAAseILtAAIAAMeg");
	var mask_graphics_68 = new cjs.Graphics().p("EAwIAIRIAAseILtAAIAAMeg");
	var mask_graphics_69 = new cjs.Graphics().p("EAwIAINIAAseILtAAIAAMeg");
	var mask_graphics_70 = new cjs.Graphics().p("EAwIAIKIAAseILtAAIAAMeg");
	var mask_graphics_71 = new cjs.Graphics().p("EAwIAIIIAAseILtAAIAAMeg");
	var mask_graphics_72 = new cjs.Graphics().p("EAwIAIIIAAseILtAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:383,y:81}).wait(1).to({graphics:mask_graphics_51,x:383,y:78.4}).wait(1).to({graphics:mask_graphics_52,x:383,y:76}).wait(1).to({graphics:mask_graphics_53,x:383,y:73.6}).wait(1).to({graphics:mask_graphics_54,x:383,y:71.4}).wait(1).to({graphics:mask_graphics_55,x:383,y:69.3}).wait(1).to({graphics:mask_graphics_56,x:383,y:67.3}).wait(1).to({graphics:mask_graphics_57,x:383,y:65.5}).wait(1).to({graphics:mask_graphics_58,x:383,y:63.7}).wait(1).to({graphics:mask_graphics_59,x:383,y:62.1}).wait(1).to({graphics:mask_graphics_60,x:383,y:60.6}).wait(1).to({graphics:mask_graphics_61,x:383,y:59.3}).wait(1).to({graphics:mask_graphics_62,x:383,y:58}).wait(1).to({graphics:mask_graphics_63,x:383,y:56.9}).wait(1).to({graphics:mask_graphics_64,x:383,y:55.8}).wait(1).to({graphics:mask_graphics_65,x:383,y:54.9}).wait(1).to({graphics:mask_graphics_66,x:383,y:54.2}).wait(1).to({graphics:mask_graphics_67,x:383,y:53.5}).wait(1).to({graphics:mask_graphics_68,x:383,y:53}).wait(1).to({graphics:mask_graphics_69,x:383,y:52.5}).wait(1).to({graphics:mask_graphics_70,x:383,y:52.2}).wait(1).to({graphics:mask_graphics_71,x:383,y:52.1}).wait(1).to({graphics:mask_graphics_72,x:383,y:52}).wait(13));

	// m
	this.instance = new lib.m23();
	this.instance.setTransform(730.7,41.3,1,1,0,0,0,32.6,36.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(13));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_39 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EA5LAGQIAAsfIC/AAIAAMfg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EA5LAGXIAAseIC/AAIAAMeg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EA5LAGmIAAseIC/AAIAAMeg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EA5LAGzIAAseIC/AAIAAMeg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EA5LAG/IAAseIC/AAIAAMeg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EA5LAHJIAAseIC/AAIAAMeg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EA5LAHRIAAseIC/AAIAAMeg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EA5LAHYIAAseIC/AAIAAMeg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EA5LAHeIAAseIC/AAIAAMeg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EA5LAHhIAAseIC/AAIAAMeg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EA5LAHkIAAseIC/AAIAAMeg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EA5LAHlIAAseIC/AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_1_graphics_39,x:385,y:-18}).wait(1).to({graphics:mask_1_graphics_40,x:385,y:-11.3}).wait(1).to({graphics:mask_1_graphics_41,x:385,y:-5}).wait(1).to({graphics:mask_1_graphics_42,x:385,y:1.1}).wait(1).to({graphics:mask_1_graphics_43,x:385,y:6.8}).wait(1).to({graphics:mask_1_graphics_44,x:385,y:12.2}).wait(1).to({graphics:mask_1_graphics_45,x:385,y:17.3}).wait(1).to({graphics:mask_1_graphics_46,x:385,y:22.1}).wait(1).to({graphics:mask_1_graphics_47,x:385,y:26.6}).wait(1).to({graphics:mask_1_graphics_48,x:385,y:30.8}).wait(1).to({graphics:mask_1_graphics_49,x:385,y:34.7}).wait(1).to({graphics:mask_1_graphics_50,x:385,y:38.3}).wait(1).to({graphics:mask_1_graphics_51,x:385,y:40.8}).wait(1).to({graphics:mask_1_graphics_52,x:385,y:42.2}).wait(1).to({graphics:mask_1_graphics_53,x:385,y:43.5}).wait(1).to({graphics:mask_1_graphics_54,x:385,y:44.7}).wait(1).to({graphics:mask_1_graphics_55,x:385,y:45.7}).wait(1).to({graphics:mask_1_graphics_56,x:385,y:46.6}).wait(1).to({graphics:mask_1_graphics_57,x:385,y:47.3}).wait(1).to({graphics:mask_1_graphics_58,x:385,y:47.8}).wait(1).to({graphics:mask_1_graphics_59,x:385,y:48.2}).wait(1).to({graphics:mask_1_graphics_60,x:385,y:48.4}).wait(1).to({graphics:mask_1_graphics_61,x:385,y:48.5}).wait(24));

	// m
	this.instance_1 = new lib.m22();
	this.instance_1.setTransform(730.7,101.3,1,1,0,0,0,32.6,36.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(24));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_39 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EA0gAGQIAAsfIC+AAIAAMfg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EA0gAGXIAAseIC+AAIAAMeg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EA0gAGmIAAseIC+AAIAAMeg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EA0gAGzIAAseIC+AAIAAMeg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EA0gAG/IAAseIC+AAIAAMeg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EA0gAHJIAAseIC+AAIAAMeg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EA0gAHRIAAseIC+AAIAAMeg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EA0gAHYIAAseIC+AAIAAMeg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EA0gAHeIAAseIC+AAIAAMeg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EA0gAHhIAAseIC+AAIAAMeg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EA0gAHkIAAseIC+AAIAAMeg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EA0gAHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_2_graphics_39,x:355,y:-18}).wait(1).to({graphics:mask_2_graphics_40,x:355,y:-11.3}).wait(1).to({graphics:mask_2_graphics_41,x:355,y:-5}).wait(1).to({graphics:mask_2_graphics_42,x:355,y:1.1}).wait(1).to({graphics:mask_2_graphics_43,x:355,y:6.8}).wait(1).to({graphics:mask_2_graphics_44,x:355,y:12.2}).wait(1).to({graphics:mask_2_graphics_45,x:355,y:17.3}).wait(1).to({graphics:mask_2_graphics_46,x:355,y:22.1}).wait(1).to({graphics:mask_2_graphics_47,x:355,y:26.6}).wait(1).to({graphics:mask_2_graphics_48,x:355,y:30.8}).wait(1).to({graphics:mask_2_graphics_49,x:355,y:34.7}).wait(1).to({graphics:mask_2_graphics_50,x:355,y:38.3}).wait(1).to({graphics:mask_2_graphics_51,x:355,y:40.8}).wait(1).to({graphics:mask_2_graphics_52,x:355,y:42.2}).wait(1).to({graphics:mask_2_graphics_53,x:355,y:43.5}).wait(1).to({graphics:mask_2_graphics_54,x:355,y:44.7}).wait(1).to({graphics:mask_2_graphics_55,x:355,y:45.7}).wait(1).to({graphics:mask_2_graphics_56,x:355,y:46.6}).wait(1).to({graphics:mask_2_graphics_57,x:355,y:47.3}).wait(1).to({graphics:mask_2_graphics_58,x:355,y:47.8}).wait(1).to({graphics:mask_2_graphics_59,x:355,y:48.2}).wait(1).to({graphics:mask_2_graphics_60,x:355,y:48.4}).wait(1).to({graphics:mask_2_graphics_61,x:355,y:48.5}).wait(24));

	// m
	this.instance_2 = new lib.m21();
	this.instance_2.setTransform(730.7,101.3,1,1,0,0,0,32.6,36.1);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(24));

	// Layer 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_43 = new cjs.Graphics().p("EAuyAIvIAAsdIJZAAIAAMdg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EAuhAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EAuQAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAuAAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAtwAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAtiAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAtUAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAtHAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EAs7AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAswAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EAsmAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EAsdAIvIAAsdIJXAAIAAMdg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EAsUAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAsMAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EAsFAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EAr/AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EAr5AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EAr1AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EArxAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EAruAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EArsAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EArrAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EArrAIvIAAsdIJXAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_3_graphics_43,x:359.5,y:56}).wait(1).to({graphics:mask_3_graphics_44,x:357.7,y:56}).wait(1).to({graphics:mask_3_graphics_45,x:356,y:56}).wait(1).to({graphics:mask_3_graphics_46,x:354.4,y:56}).wait(1).to({graphics:mask_3_graphics_47,x:352.9,y:56}).wait(1).to({graphics:mask_3_graphics_48,x:351.4,y:56}).wait(1).to({graphics:mask_3_graphics_49,x:350.1,y:56}).wait(1).to({graphics:mask_3_graphics_50,x:348.8,y:56}).wait(1).to({graphics:mask_3_graphics_51,x:347.6,y:56}).wait(1).to({graphics:mask_3_graphics_52,x:346.5,y:56}).wait(1).to({graphics:mask_3_graphics_53,x:345.5,y:56}).wait(1).to({graphics:mask_3_graphics_54,x:344.5,y:56}).wait(1).to({graphics:mask_3_graphics_55,x:343.6,y:56}).wait(1).to({graphics:mask_3_graphics_56,x:342.8,y:56}).wait(1).to({graphics:mask_3_graphics_57,x:342.1,y:56}).wait(1).to({graphics:mask_3_graphics_58,x:341.5,y:56}).wait(1).to({graphics:mask_3_graphics_59,x:341,y:56}).wait(1).to({graphics:mask_3_graphics_60,x:340.5,y:56}).wait(1).to({graphics:mask_3_graphics_61,x:340.2,y:56}).wait(1).to({graphics:mask_3_graphics_62,x:339.9,y:56}).wait(1).to({graphics:mask_3_graphics_63,x:339.7,y:56}).wait(1).to({graphics:mask_3_graphics_64,x:339.5,y:56}).wait(1).to({graphics:mask_3_graphics_65,x:339.5,y:56}).wait(20));

	// a
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(640.5,61.3,1,1,0,0,0,26.6,36.1);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(42));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_31 = new cjs.Graphics().p("EAq+AGPIAAsdIJXAAIAAMdg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EAq9AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_33 = new cjs.Graphics().p("EAq9AGPIAAsdIJYAAIAAMdg");
	var mask_4_graphics_34 = new cjs.Graphics().p("EAq8AGQIAAsfIJYAAIAAMfg");
	var mask_4_graphics_35 = new cjs.Graphics().p("EAq8AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_36 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_37 = new cjs.Graphics().p("EAq7AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_38 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_39 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_40 = new cjs.Graphics().p("EAq6AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_41 = new cjs.Graphics().p("EAq6AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_42 = new cjs.Graphics().p("EAq6AGZIAAseIJYAAIAAMeg");
	var mask_4_graphics_43 = new cjs.Graphics().p("EAq6AGrIAAseIJYAAIAAMeg");
	var mask_4_graphics_44 = new cjs.Graphics().p("EAq5AG7IAAseIJYAAIAAMeg");
	var mask_4_graphics_45 = new cjs.Graphics().p("EAq5AHJIAAseIJYAAIAAMeg");
	var mask_4_graphics_46 = new cjs.Graphics().p("EAq5AHVIAAseIJYAAIAAMeg");
	var mask_4_graphics_47 = new cjs.Graphics().p("EAq5AHgIAAseIJYAAIAAMeg");
	var mask_4_graphics_48 = new cjs.Graphics().p("EAq5AHpIAAseIJYAAIAAMeg");
	var mask_4_graphics_49 = new cjs.Graphics().p("EAq5AHwIAAseIJYAAIAAMeg");
	var mask_4_graphics_50 = new cjs.Graphics().p("EAq5AH2IAAseIJYAAIAAMeg");
	var mask_4_graphics_51 = new cjs.Graphics().p("EAq5AH6IAAseIJYAAIAAMeg");
	var mask_4_graphics_52 = new cjs.Graphics().p("EAq5AH9IAAseIJYAAIAAMeg");
	var mask_4_graphics_53 = new cjs.Graphics().p("EAq5AH9IAAseIJXAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_4_graphics_31,x:335,y:-18}).wait(1).to({graphics:mask_4_graphics_32,x:335,y:-10.9}).wait(1).to({graphics:mask_4_graphics_33,x:334.9,y:-4.1}).wait(1).to({graphics:mask_4_graphics_34,x:334.9,y:2.3}).wait(1).to({graphics:mask_4_graphics_35,x:334.8,y:8.4}).wait(1).to({graphics:mask_4_graphics_36,x:334.8,y:14.2}).wait(1).to({graphics:mask_4_graphics_37,x:334.8,y:19.7}).wait(1).to({graphics:mask_4_graphics_38,x:334.7,y:24.8}).wait(1).to({graphics:mask_4_graphics_39,x:334.7,y:29.6}).wait(1).to({graphics:mask_4_graphics_40,x:334.7,y:34.1}).wait(1).to({graphics:mask_4_graphics_41,x:334.6,y:38.2}).wait(1).to({graphics:mask_4_graphics_42,x:334.6,y:41}).wait(1).to({graphics:mask_4_graphics_43,x:334.6,y:42.7}).wait(1).to({graphics:mask_4_graphics_44,x:334.6,y:44.3}).wait(1).to({graphics:mask_4_graphics_45,x:334.6,y:45.7}).wait(1).to({graphics:mask_4_graphics_46,x:334.6,y:47}).wait(1).to({graphics:mask_4_graphics_47,x:334.5,y:48}).wait(1).to({graphics:mask_4_graphics_48,x:334.5,y:48.9}).wait(1).to({graphics:mask_4_graphics_49,x:334.5,y:49.7}).wait(1).to({graphics:mask_4_graphics_50,x:334.5,y:50.3}).wait(1).to({graphics:mask_4_graphics_51,x:334.5,y:50.7}).wait(1).to({graphics:mask_4_graphics_52,x:334.5,y:50.9}).wait(1).to({graphics:mask_4_graphics_53,x:334.5,y:51}).wait(32));

	// a
	this.instance_4 = new lib.a2();
	this.instance_4.setTransform(640.5,91.3,1,1,0,0,0,26.6,36.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(32));

	// Layer 25 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_33 = new cjs.Graphics().p("EAi6AH9IAAseIH1AAIAAMeg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EAjLAH7IAAseIH0AAIAAMeg");
	var mask_5_graphics_35 = new cjs.Graphics().p("EAjaAH5IAAseIH0AAIAAMeg");
	var mask_5_graphics_36 = new cjs.Graphics().p("EAjpAH3IAAseIH0AAIAAMeg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EAj3AH1IAAseIH0AAIAAMeg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EAkEAHzIAAseIH0AAIAAMeg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EAkQAHyIAAseIH0AAIAAMeg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EAkcAHwIAAseIH0AAIAAMeg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EAknAHvIAAseIH0AAIAAMeg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EAkxAHtIAAseIH0AAIAAMeg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EAk7AHsIAAseIH0AAIAAMeg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EAlDAHrIAAseIH0AAIAAMeg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EAlLAHqIAAseIH0AAIAAMeg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EAlSAHpIAAseIH0AAIAAMeg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EAlZAHoIAAseIH0AAIAAMeg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EAlfAHnIAAseIH0AAIAAMeg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EAljAHmIAAseIH0AAIAAMeg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EAloAHmIAAseIH0AAIAAMeg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EAlrAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EAluAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EAlvAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EAlxAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EAlxAHlIAAseIH0AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_5_graphics_33,x:273.5,y:51}).wait(1).to({graphics:mask_5_graphics_34,x:275.1,y:50.8}).wait(1).to({graphics:mask_5_graphics_35,x:276.7,y:50.6}).wait(1).to({graphics:mask_5_graphics_36,x:278.1,y:50.4}).wait(1).to({graphics:mask_5_graphics_37,x:279.5,y:50.2}).wait(1).to({graphics:mask_5_graphics_38,x:280.9,y:50}).wait(1).to({graphics:mask_5_graphics_39,x:282.1,y:49.8}).wait(1).to({graphics:mask_5_graphics_40,x:283.3,y:49.7}).wait(1).to({graphics:mask_5_graphics_41,x:284.4,y:49.5}).wait(1).to({graphics:mask_5_graphics_42,x:285.4,y:49.4}).wait(1).to({graphics:mask_5_graphics_43,x:286.3,y:49.2}).wait(1).to({graphics:mask_5_graphics_44,x:287.2,y:49.1}).wait(1).to({graphics:mask_5_graphics_45,x:288,y:49}).wait(1).to({graphics:mask_5_graphics_46,x:288.7,y:48.9}).wait(1).to({graphics:mask_5_graphics_47,x:289.3,y:48.8}).wait(1).to({graphics:mask_5_graphics_48,x:289.9,y:48.8}).wait(1).to({graphics:mask_5_graphics_49,x:290.4,y:48.7}).wait(1).to({graphics:mask_5_graphics_50,x:290.8,y:48.6}).wait(1).to({graphics:mask_5_graphics_51,x:291.1,y:48.6}).wait(1).to({graphics:mask_5_graphics_52,x:291.4,y:48.5}).wait(1).to({graphics:mask_5_graphics_53,x:291.6,y:48.5}).wait(1).to({graphics:mask_5_graphics_54,x:291.7,y:48.5}).wait(1).to({graphics:mask_5_graphics_55,x:291.7,y:48.5}).wait(30));

	// e
	this.instance_5 = new lib.e3();
	this.instance_5.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(30));

	// Layer 12 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_33 = new cjs.Graphics().p("EAp8AH9IAAseIH1AAIAAMeg");
	var mask_6_graphics_34 = new cjs.Graphics().p("EApoAH7IAAseIH0AAIAAMeg");
	var mask_6_graphics_35 = new cjs.Graphics().p("EApVAH5IAAseIH0AAIAAMeg");
	var mask_6_graphics_36 = new cjs.Graphics().p("EApCAH3IAAseIH0AAIAAMeg");
	var mask_6_graphics_37 = new cjs.Graphics().p("EAowAH1IAAseIH0AAIAAMeg");
	var mask_6_graphics_38 = new cjs.Graphics().p("EAogAHzIAAseIH0AAIAAMeg");
	var mask_6_graphics_39 = new cjs.Graphics().p("EAoQAHyIAAseIH0AAIAAMeg");
	var mask_6_graphics_40 = new cjs.Graphics().p("EAoBAHwIAAseIH0AAIAAMeg");
	var mask_6_graphics_41 = new cjs.Graphics().p("EAn0AHvIAAseIH0AAIAAMeg");
	var mask_6_graphics_42 = new cjs.Graphics().p("EAnnAHtIAAseIH0AAIAAMeg");
	var mask_6_graphics_43 = new cjs.Graphics().p("EAnbAHsIAAseIH0AAIAAMeg");
	var mask_6_graphics_44 = new cjs.Graphics().p("EAnQAHrIAAseIH0AAIAAMeg");
	var mask_6_graphics_45 = new cjs.Graphics().p("EAnGAHqIAAseIH0AAIAAMeg");
	var mask_6_graphics_46 = new cjs.Graphics().p("EAm9AHpIAAseIH0AAIAAMeg");
	var mask_6_graphics_47 = new cjs.Graphics().p("EAm1AHoIAAseIH0AAIAAMeg");
	var mask_6_graphics_48 = new cjs.Graphics().p("EAmuAHnIAAseIH0AAIAAMeg");
	var mask_6_graphics_49 = new cjs.Graphics().p("EAmoAHmIAAseIH0AAIAAMeg");
	var mask_6_graphics_50 = new cjs.Graphics().p("EAmiAHmIAAseIH0AAIAAMeg");
	var mask_6_graphics_51 = new cjs.Graphics().p("EAmeAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_52 = new cjs.Graphics().p("EAmbAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_53 = new cjs.Graphics().p("EAmYAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_54 = new cjs.Graphics().p("EAmXAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_55 = new cjs.Graphics().p("EAmWAHlIAAseIH1AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_6_graphics_33,x:318.5,y:51}).wait(1).to({graphics:mask_6_graphics_34,x:316.5,y:50.8}).wait(1).to({graphics:mask_6_graphics_35,x:314.5,y:50.6}).wait(1).to({graphics:mask_6_graphics_36,x:312.7,y:50.4}).wait(1).to({graphics:mask_6_graphics_37,x:310.9,y:50.2}).wait(1).to({graphics:mask_6_graphics_38,x:309.2,y:50}).wait(1).to({graphics:mask_6_graphics_39,x:307.7,y:49.8}).wait(1).to({graphics:mask_6_graphics_40,x:306.2,y:49.7}).wait(1).to({graphics:mask_6_graphics_41,x:304.8,y:49.5}).wait(1).to({graphics:mask_6_graphics_42,x:303.5,y:49.4}).wait(1).to({graphics:mask_6_graphics_43,x:302.3,y:49.2}).wait(1).to({graphics:mask_6_graphics_44,x:301.2,y:49.1}).wait(1).to({graphics:mask_6_graphics_45,x:300.3,y:49}).wait(1).to({graphics:mask_6_graphics_46,x:299.3,y:48.9}).wait(1).to({graphics:mask_6_graphics_47,x:298.5,y:48.8}).wait(1).to({graphics:mask_6_graphics_48,x:297.8,y:48.8}).wait(1).to({graphics:mask_6_graphics_49,x:297.2,y:48.7}).wait(1).to({graphics:mask_6_graphics_50,x:296.7,y:48.6}).wait(1).to({graphics:mask_6_graphics_51,x:296.3,y:48.6}).wait(1).to({graphics:mask_6_graphics_52,x:295.9,y:48.5}).wait(1).to({graphics:mask_6_graphics_53,x:295.7,y:48.5}).wait(1).to({graphics:mask_6_graphics_54,x:295.5,y:48.5}).wait(1).to({graphics:mask_6_graphics_55,x:295.5,y:48.5}).wait(30));

	// e
	this.instance_6 = new lib.e2();
	this.instance_6.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(30));

	// Layer 14 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_27 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_28 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_29 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_30 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_31 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_32 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_33 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_34 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_35 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_36 = new cjs.Graphics().p("EAoxAGQIAAsfIC+AAIAAMfg");
	var mask_7_graphics_37 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_38 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_39 = new cjs.Graphics().p("EAoxAGXIAAseIC+AAIAAMeg");
	var mask_7_graphics_40 = new cjs.Graphics().p("EAoxAGmIAAseIC+AAIAAMeg");
	var mask_7_graphics_41 = new cjs.Graphics().p("EAoxAGzIAAseIC+AAIAAMeg");
	var mask_7_graphics_42 = new cjs.Graphics().p("EAoxAG/IAAseIC+AAIAAMeg");
	var mask_7_graphics_43 = new cjs.Graphics().p("EAoxAHJIAAseIC+AAIAAMeg");
	var mask_7_graphics_44 = new cjs.Graphics().p("EAoxAHRIAAseIC+AAIAAMeg");
	var mask_7_graphics_45 = new cjs.Graphics().p("EAoxAHYIAAseIC+AAIAAMeg");
	var mask_7_graphics_46 = new cjs.Graphics().p("EAoxAHeIAAseIC+AAIAAMeg");
	var mask_7_graphics_47 = new cjs.Graphics().p("EAoxAHhIAAseIC+AAIAAMeg");
	var mask_7_graphics_48 = new cjs.Graphics().p("EAoxAHkIAAseIC+AAIAAMeg");
	var mask_7_graphics_49 = new cjs.Graphics().p("EAoxAHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_7_graphics_27,x:280,y:-18}).wait(1).to({graphics:mask_7_graphics_28,x:280,y:-11.3}).wait(1).to({graphics:mask_7_graphics_29,x:280,y:-5}).wait(1).to({graphics:mask_7_graphics_30,x:280,y:1.1}).wait(1).to({graphics:mask_7_graphics_31,x:280,y:6.8}).wait(1).to({graphics:mask_7_graphics_32,x:280,y:12.2}).wait(1).to({graphics:mask_7_graphics_33,x:280,y:17.3}).wait(1).to({graphics:mask_7_graphics_34,x:280,y:22.1}).wait(1).to({graphics:mask_7_graphics_35,x:280,y:26.6}).wait(1).to({graphics:mask_7_graphics_36,x:280,y:30.8}).wait(1).to({graphics:mask_7_graphics_37,x:280,y:34.7}).wait(1).to({graphics:mask_7_graphics_38,x:280,y:38.3}).wait(1).to({graphics:mask_7_graphics_39,x:280,y:40.8}).wait(1).to({graphics:mask_7_graphics_40,x:280,y:42.2}).wait(1).to({graphics:mask_7_graphics_41,x:280,y:43.5}).wait(1).to({graphics:mask_7_graphics_42,x:280,y:44.7}).wait(1).to({graphics:mask_7_graphics_43,x:280,y:45.7}).wait(1).to({graphics:mask_7_graphics_44,x:280,y:46.6}).wait(1).to({graphics:mask_7_graphics_45,x:280,y:47.3}).wait(1).to({graphics:mask_7_graphics_46,x:280,y:47.8}).wait(1).to({graphics:mask_7_graphics_47,x:280,y:48.2}).wait(1).to({graphics:mask_7_graphics_48,x:280,y:48.4}).wait(1).to({graphics:mask_7_graphics_49,x:280,y:48.5}).wait(36));

	// e
	this.instance_7 = new lib.e();
	this.instance_7.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_7._off = true;

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(36));

	// Layer 16 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_29 = new cjs.Graphics().p("EAkAAGPIAAsdIInAAIAAMdg");
	var mask_8_graphics_30 = new cjs.Graphics().p("EAjrAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_31 = new cjs.Graphics().p("EAjXAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_32 = new cjs.Graphics().p("EAjEAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_33 = new cjs.Graphics().p("EAixAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_34 = new cjs.Graphics().p("EAigAGPIAAseIImAAIAAMeg");
	var mask_8_graphics_35 = new cjs.Graphics().p("EAiPAGVIAAseIImAAIAAMeg");
	var mask_8_graphics_36 = new cjs.Graphics().p("EAiAAGfIAAseIImAAIAAMeg");
	var mask_8_graphics_37 = new cjs.Graphics().p("EAhyAGoIAAseIImAAIAAMeg");
	var mask_8_graphics_38 = new cjs.Graphics().p("EAhkAGwIAAseIImAAIAAMeg");
	var mask_8_graphics_39 = new cjs.Graphics().p("EAhYAG4IAAseIImAAIAAMeg");
	var mask_8_graphics_40 = new cjs.Graphics().p("EAhMAG/IAAseIImAAIAAMeg");
	var mask_8_graphics_41 = new cjs.Graphics().p("EAhCAHGIAAseIImAAIAAMeg");
	var mask_8_graphics_42 = new cjs.Graphics().p("EAg5AHLIAAseIImAAIAAMeg");
	var mask_8_graphics_43 = new cjs.Graphics().p("EAgwAHRIAAseIImAAIAAMeg");
	var mask_8_graphics_44 = new cjs.Graphics().p("EAgpAHVIAAseIImAAIAAMeg");
	var mask_8_graphics_45 = new cjs.Graphics().p("EAgiAHZIAAseIImAAIAAMeg");
	var mask_8_graphics_46 = new cjs.Graphics().p("EAgdAHdIAAseIImAAIAAMeg");
	var mask_8_graphics_47 = new cjs.Graphics().p("EAgYAHgIAAseIImAAIAAMeg");
	var mask_8_graphics_48 = new cjs.Graphics().p("EAgVAHiIAAseIImAAIAAMeg");
	var mask_8_graphics_49 = new cjs.Graphics().p("EAgSAHjIAAseIImAAIAAMeg");
	var mask_8_graphics_50 = new cjs.Graphics().p("EAgRAHkIAAseIImAAIAAMeg");
	var mask_8_graphics_51 = new cjs.Graphics().p("EAgRAHlIAAseIImAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_8_graphics_29,x:285.5,y:27}).wait(1).to({graphics:mask_8_graphics_30,x:283.4,y:29.7}).wait(1).to({graphics:mask_8_graphics_31,x:281.3,y:32.2}).wait(1).to({graphics:mask_8_graphics_32,x:279.4,y:34.6}).wait(1).to({graphics:mask_8_graphics_33,x:277.6,y:36.9}).wait(1).to({graphics:mask_8_graphics_34,x:275.8,y:39.1}).wait(1).to({graphics:mask_8_graphics_35,x:274.2,y:40.6}).wait(1).to({graphics:mask_8_graphics_36,x:272.7,y:41.5}).wait(1).to({graphics:mask_8_graphics_37,x:271.2,y:42.4}).wait(1).to({graphics:mask_8_graphics_38,x:269.9,y:43.3}).wait(1).to({graphics:mask_8_graphics_39,x:268.6,y:44}).wait(1).to({graphics:mask_8_graphics_40,x:267.5,y:44.8}).wait(1).to({graphics:mask_8_graphics_41,x:266.5,y:45.4}).wait(1).to({graphics:mask_8_graphics_42,x:265.5,y:46}).wait(1).to({graphics:mask_8_graphics_43,x:264.7,y:46.5}).wait(1).to({graphics:mask_8_graphics_44,x:263.9,y:47}).wait(1).to({graphics:mask_8_graphics_45,x:263.3,y:47.4}).wait(1).to({graphics:mask_8_graphics_46,x:262.7,y:47.7}).wait(1).to({graphics:mask_8_graphics_47,x:262.3,y:48}).wait(1).to({graphics:mask_8_graphics_48,x:261.9,y:48.2}).wait(1).to({graphics:mask_8_graphics_49,x:261.7,y:48.4}).wait(1).to({graphics:mask_8_graphics_50,x:261.5,y:48.5}).wait(1).to({graphics:mask_8_graphics_51,x:261.5,y:48.5}).wait(34));

	// t
	this.instance_8 = new lib.t();
	this.instance_8.setTransform(491.2,61.3,1,1,0,0,0,22.5,36.1);
	this.instance_8._off = true;

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(56));

	// Layer 18 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_22 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_23 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_24 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_25 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_26 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_27 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_28 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_29 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_30 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_31 = new cjs.Graphics().p("EAkFAGQIAAsfIC/AAIAAMfg");
	var mask_9_graphics_32 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_33 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_34 = new cjs.Graphics().p("EAkFAGXIAAseIC/AAIAAMeg");
	var mask_9_graphics_35 = new cjs.Graphics().p("EAkFAGmIAAseIC/AAIAAMeg");
	var mask_9_graphics_36 = new cjs.Graphics().p("EAkFAGzIAAseIC/AAIAAMeg");
	var mask_9_graphics_37 = new cjs.Graphics().p("EAkFAG/IAAseIC/AAIAAMeg");
	var mask_9_graphics_38 = new cjs.Graphics().p("EAkFAHJIAAseIC/AAIAAMeg");
	var mask_9_graphics_39 = new cjs.Graphics().p("EAkFAHRIAAseIC/AAIAAMeg");
	var mask_9_graphics_40 = new cjs.Graphics().p("EAkFAHYIAAseIC/AAIAAMeg");
	var mask_9_graphics_41 = new cjs.Graphics().p("EAkFAHeIAAseIC/AAIAAMeg");
	var mask_9_graphics_42 = new cjs.Graphics().p("EAkFAHhIAAseIC/AAIAAMeg");
	var mask_9_graphics_43 = new cjs.Graphics().p("EAkFAHkIAAseIC/AAIAAMeg");
	var mask_9_graphics_44 = new cjs.Graphics().p("EAkFAHlIAAseIC/AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_9_graphics_22,x:250,y:-18}).wait(1).to({graphics:mask_9_graphics_23,x:250,y:-11.3}).wait(1).to({graphics:mask_9_graphics_24,x:250,y:-5}).wait(1).to({graphics:mask_9_graphics_25,x:250,y:1.1}).wait(1).to({graphics:mask_9_graphics_26,x:250,y:6.8}).wait(1).to({graphics:mask_9_graphics_27,x:250,y:12.2}).wait(1).to({graphics:mask_9_graphics_28,x:250,y:17.3}).wait(1).to({graphics:mask_9_graphics_29,x:250,y:22.1}).wait(1).to({graphics:mask_9_graphics_30,x:250,y:26.6}).wait(1).to({graphics:mask_9_graphics_31,x:250,y:30.8}).wait(1).to({graphics:mask_9_graphics_32,x:250,y:34.7}).wait(1).to({graphics:mask_9_graphics_33,x:250,y:38.3}).wait(1).to({graphics:mask_9_graphics_34,x:250,y:40.8}).wait(1).to({graphics:mask_9_graphics_35,x:250,y:42.2}).wait(1).to({graphics:mask_9_graphics_36,x:250,y:43.5}).wait(1).to({graphics:mask_9_graphics_37,x:250,y:44.7}).wait(1).to({graphics:mask_9_graphics_38,x:250,y:45.7}).wait(1).to({graphics:mask_9_graphics_39,x:250,y:46.6}).wait(1).to({graphics:mask_9_graphics_40,x:250,y:47.3}).wait(1).to({graphics:mask_9_graphics_41,x:250,y:47.8}).wait(1).to({graphics:mask_9_graphics_42,x:250,y:48.2}).wait(1).to({graphics:mask_9_graphics_43,x:250,y:48.4}).wait(1).to({graphics:mask_9_graphics_44,x:250,y:48.5}).wait(41));

	// t
	this.instance_9 = new lib.t22();
	this.instance_9.setTransform(491.2,101.3,1,1,0,0,0,22.5,36.1);
	this.instance_9._off = true;

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(0.96)).wait(41));

	// Layer 20 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AXSONIAAsgIK8AAIAAMgg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AXSMqIAAshIK8AAIAAMhg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AXSMRIAAseIK8AAIAAMeg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AXSL5IAAseIK8AAIAAMeg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AXSLjIAAseIK8AAIAAMeg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AXSLNIAAseIK8AAIAAMeg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AXSK5IAAseIK8AAIAAMeg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AXSKmIAAseIK8AAIAAMeg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AXSKUIAAseIK8AAIAAMeg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AXSKDIAAseIK8AAIAAMeg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AXSJzIAAseIK8AAIAAMeg");
	var mask_10_graphics_37 = new cjs.Graphics().p("AXSJkIAAseIK8AAIAAMeg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AXSJWIAAseIK8AAIAAMeg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AXSJKIAAseIK8AAIAAMeg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AXSI+IAAseIK8AAIAAMeg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AXSI0IAAseIK8AAIAAMeg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AXSIrIAAseIK8AAIAAMeg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AXSIiIAAseIK8AAIAAMeg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AXSIbIAAseIK8AAIAAMeg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AXSIVIAAseIK8AAIAAMeg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AXSIQIAAseIK8AAIAAMeg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AXSIMIAAseIK8AAIAAMeg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AXSIKIAAseIK8AAIAAMeg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AXSIIIAAseIK8AAIAAMeg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AXSIIIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:219,y:91}).wait(27).to({graphics:mask_10_graphics_27,x:219,y:81}).wait(1).to({graphics:mask_10_graphics_28,x:219,y:78.5}).wait(1).to({graphics:mask_10_graphics_29,x:219,y:76.2}).wait(1).to({graphics:mask_10_graphics_30,x:219,y:73.9}).wait(1).to({graphics:mask_10_graphics_31,x:219,y:71.8}).wait(1).to({graphics:mask_10_graphics_32,x:219,y:69.8}).wait(1).to({graphics:mask_10_graphics_33,x:219,y:67.8}).wait(1).to({graphics:mask_10_graphics_34,x:219,y:66}).wait(1).to({graphics:mask_10_graphics_35,x:219,y:64.3}).wait(1).to({graphics:mask_10_graphics_36,x:219,y:62.7}).wait(1).to({graphics:mask_10_graphics_37,x:219,y:61.3}).wait(1).to({graphics:mask_10_graphics_38,x:219,y:59.9}).wait(1).to({graphics:mask_10_graphics_39,x:219,y:58.6}).wait(1).to({graphics:mask_10_graphics_40,x:219,y:57.5}).wait(1).to({graphics:mask_10_graphics_41,x:219,y:56.4}).wait(1).to({graphics:mask_10_graphics_42,x:219,y:55.5}).wait(1).to({graphics:mask_10_graphics_43,x:219,y:54.7}).wait(1).to({graphics:mask_10_graphics_44,x:219,y:54}).wait(1).to({graphics:mask_10_graphics_45,x:219,y:53.4}).wait(1).to({graphics:mask_10_graphics_46,x:219,y:52.9}).wait(1).to({graphics:mask_10_graphics_47,x:219,y:52.5}).wait(1).to({graphics:mask_10_graphics_48,x:219,y:52.2}).wait(1).to({graphics:mask_10_graphics_49,x:219,y:52.1}).wait(1).to({graphics:mask_10_graphics_50,x:219,y:52}).wait(35));

	// m
	this.instance_10 = new lib.m2();
	this.instance_10.setTransform(403.7,60.6,1,1,0,0,0,24.5,36.1);

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({y:30.6},0).to({y:60.6},23,cjs.Ease.get(1)).wait(35));

	// Layer 22 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AatGQIAAsfIC+AAIAAMfg");
	var mask_11_graphics_28 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_30 = new cjs.Graphics().p("AatGXIAAseIC+AAIAAMeg");
	var mask_11_graphics_31 = new cjs.Graphics().p("AatGmIAAseIC+AAIAAMeg");
	var mask_11_graphics_32 = new cjs.Graphics().p("AatGzIAAseIC+AAIAAMeg");
	var mask_11_graphics_33 = new cjs.Graphics().p("AatG/IAAseIC+AAIAAMeg");
	var mask_11_graphics_34 = new cjs.Graphics().p("AatHJIAAseIC+AAIAAMeg");
	var mask_11_graphics_35 = new cjs.Graphics().p("AatHRIAAseIC+AAIAAMeg");
	var mask_11_graphics_36 = new cjs.Graphics().p("AatHYIAAseIC+AAIAAMeg");
	var mask_11_graphics_37 = new cjs.Graphics().p("AatHeIAAseIC+AAIAAMeg");
	var mask_11_graphics_38 = new cjs.Graphics().p("AatHhIAAseIC+AAIAAMeg");
	var mask_11_graphics_39 = new cjs.Graphics().p("AatHkIAAseIC+AAIAAMeg");
	var mask_11_graphics_40 = new cjs.Graphics().p("AatHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:190,y:-18}).wait(18).to({graphics:mask_11_graphics_18,x:190,y:-18}).wait(1).to({graphics:mask_11_graphics_19,x:190,y:-11.3}).wait(1).to({graphics:mask_11_graphics_20,x:190,y:-5}).wait(1).to({graphics:mask_11_graphics_21,x:190,y:1.1}).wait(1).to({graphics:mask_11_graphics_22,x:190,y:6.8}).wait(1).to({graphics:mask_11_graphics_23,x:190,y:12.2}).wait(1).to({graphics:mask_11_graphics_24,x:190,y:17.3}).wait(1).to({graphics:mask_11_graphics_25,x:190,y:22.1}).wait(1).to({graphics:mask_11_graphics_26,x:190,y:26.6}).wait(1).to({graphics:mask_11_graphics_27,x:190,y:30.8}).wait(1).to({graphics:mask_11_graphics_28,x:190,y:34.7}).wait(1).to({graphics:mask_11_graphics_29,x:190,y:38.3}).wait(1).to({graphics:mask_11_graphics_30,x:190,y:40.8}).wait(1).to({graphics:mask_11_graphics_31,x:190,y:42.2}).wait(1).to({graphics:mask_11_graphics_32,x:190,y:43.5}).wait(1).to({graphics:mask_11_graphics_33,x:190,y:44.7}).wait(1).to({graphics:mask_11_graphics_34,x:190,y:45.7}).wait(1).to({graphics:mask_11_graphics_35,x:190,y:46.6}).wait(1).to({graphics:mask_11_graphics_36,x:190,y:47.3}).wait(1).to({graphics:mask_11_graphics_37,x:190,y:47.8}).wait(1).to({graphics:mask_11_graphics_38,x:190,y:48.2}).wait(1).to({graphics:mask_11_graphics_39,x:190,y:48.4}).wait(1).to({graphics:mask_11_graphics_40,x:190,y:48.5}).wait(45));

	// m
	this.instance_11 = new lib.t5();
	this.instance_11.setTransform(402.5,60.6,1,1,0,0,0,38.3,36.1);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(45));

	// Layer 24 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_18 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_19 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_20 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_21 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_22 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_23 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_24 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_25 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_26 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_27 = new cjs.Graphics().p("AftGQIAAsfIC+AAIAAMfg");
	var mask_12_graphics_28 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_29 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_30 = new cjs.Graphics().p("AftGXIAAseIC+AAIAAMeg");
	var mask_12_graphics_31 = new cjs.Graphics().p("AftGmIAAseIC+AAIAAMeg");
	var mask_12_graphics_32 = new cjs.Graphics().p("AftGzIAAseIC+AAIAAMeg");
	var mask_12_graphics_33 = new cjs.Graphics().p("AftG/IAAseIC+AAIAAMeg");
	var mask_12_graphics_34 = new cjs.Graphics().p("AftHJIAAseIC+AAIAAMeg");
	var mask_12_graphics_35 = new cjs.Graphics().p("AftHRIAAseIC+AAIAAMeg");
	var mask_12_graphics_36 = new cjs.Graphics().p("AftHYIAAseIC+AAIAAMeg");
	var mask_12_graphics_37 = new cjs.Graphics().p("AftHeIAAseIC+AAIAAMeg");
	var mask_12_graphics_38 = new cjs.Graphics().p("AftHhIAAseIC+AAIAAMeg");
	var mask_12_graphics_39 = new cjs.Graphics().p("AftHkIAAseIC+AAIAAMeg");
	var mask_12_graphics_40 = new cjs.Graphics().p("AftHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:222,y:-18}).wait(18).to({graphics:mask_12_graphics_18,x:222,y:-18}).wait(1).to({graphics:mask_12_graphics_19,x:222,y:-11.3}).wait(1).to({graphics:mask_12_graphics_20,x:222,y:-5}).wait(1).to({graphics:mask_12_graphics_21,x:222,y:1.1}).wait(1).to({graphics:mask_12_graphics_22,x:222,y:6.8}).wait(1).to({graphics:mask_12_graphics_23,x:222,y:12.2}).wait(1).to({graphics:mask_12_graphics_24,x:222,y:17.3}).wait(1).to({graphics:mask_12_graphics_25,x:222,y:22.1}).wait(1).to({graphics:mask_12_graphics_26,x:222,y:26.6}).wait(1).to({graphics:mask_12_graphics_27,x:222,y:30.8}).wait(1).to({graphics:mask_12_graphics_28,x:222,y:34.7}).wait(1).to({graphics:mask_12_graphics_29,x:222,y:38.3}).wait(1).to({graphics:mask_12_graphics_30,x:222,y:40.8}).wait(1).to({graphics:mask_12_graphics_31,x:222,y:42.2}).wait(1).to({graphics:mask_12_graphics_32,x:222,y:43.5}).wait(1).to({graphics:mask_12_graphics_33,x:222,y:44.7}).wait(1).to({graphics:mask_12_graphics_34,x:222,y:45.7}).wait(1).to({graphics:mask_12_graphics_35,x:222,y:46.6}).wait(1).to({graphics:mask_12_graphics_36,x:222,y:47.3}).wait(1).to({graphics:mask_12_graphics_37,x:222,y:47.8}).wait(1).to({graphics:mask_12_graphics_38,x:222,y:48.2}).wait(1).to({graphics:mask_12_graphics_39,x:222,y:48.4}).wait(1).to({graphics:mask_12_graphics_40,x:222,y:48.5}).wait(45));

	// m
	this.instance_12 = new lib.t5();
	this.instance_12.setTransform(402.5,60.6,1,1,0,0,0,38.3,36.1);

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(45));

	// Layer 26 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("ATXJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_25 = new cjs.Graphics().p("ATXJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_26 = new cjs.Graphics().p("ATRJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_27 = new cjs.Graphics().p("ATLJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_28 = new cjs.Graphics().p("ATFJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_29 = new cjs.Graphics().p("AS+JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_30 = new cjs.Graphics().p("AS4JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_31 = new cjs.Graphics().p("ASyJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_32 = new cjs.Graphics().p("ASrJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_33 = new cjs.Graphics().p("ASlJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_34 = new cjs.Graphics().p("ASfJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_35 = new cjs.Graphics().p("ASYJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_36 = new cjs.Graphics().p("ASSJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_37 = new cjs.Graphics().p("ASMJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_38 = new cjs.Graphics().p("ASGJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_39 = new cjs.Graphics().p("AR/JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_40 = new cjs.Graphics().p("AR5JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_41 = new cjs.Graphics().p("ARzJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_42 = new cjs.Graphics().p("ARsJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_43 = new cjs.Graphics().p("ARmJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_44 = new cjs.Graphics().p("ARgJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_45 = new cjs.Graphics().p("ARZJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_46 = new cjs.Graphics().p("ARTJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_47 = new cjs.Graphics().p("ARNJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_48 = new cjs.Graphics().p("ARGJiIAAseIK9AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:194,y:61}).wait(25).to({graphics:mask_13_graphics_25,x:194,y:61}).wait(1).to({graphics:mask_13_graphics_26,x:193.4,y:61}).wait(1).to({graphics:mask_13_graphics_27,x:192.7,y:61}).wait(1).to({graphics:mask_13_graphics_28,x:192.1,y:61}).wait(1).to({graphics:mask_13_graphics_29,x:191.5,y:61}).wait(1).to({graphics:mask_13_graphics_30,x:190.8,y:61}).wait(1).to({graphics:mask_13_graphics_31,x:190.2,y:61}).wait(1).to({graphics:mask_13_graphics_32,x:189.6,y:61}).wait(1).to({graphics:mask_13_graphics_33,x:189,y:61}).wait(1).to({graphics:mask_13_graphics_34,x:188.3,y:61}).wait(1).to({graphics:mask_13_graphics_35,x:187.7,y:61}).wait(1).to({graphics:mask_13_graphics_36,x:187.1,y:61}).wait(1).to({graphics:mask_13_graphics_37,x:186.4,y:61}).wait(1).to({graphics:mask_13_graphics_38,x:185.8,y:61}).wait(1).to({graphics:mask_13_graphics_39,x:185.2,y:61}).wait(1).to({graphics:mask_13_graphics_40,x:184.5,y:61}).wait(1).to({graphics:mask_13_graphics_41,x:183.9,y:61}).wait(1).to({graphics:mask_13_graphics_42,x:183.3,y:61}).wait(1).to({graphics:mask_13_graphics_43,x:182.7,y:61}).wait(1).to({graphics:mask_13_graphics_44,x:182,y:61}).wait(1).to({graphics:mask_13_graphics_45,x:181.4,y:61}).wait(1).to({graphics:mask_13_graphics_46,x:180.8,y:61}).wait(1).to({graphics:mask_13_graphics_47,x:180.1,y:61}).wait(1).to({graphics:mask_13_graphics_48,x:179.5,y:61}).wait(37));

	// a
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGBBIAoiBIC8AAIApCBg");
	this.shape.setTransform(302.1,81.3);

	this.shape.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// Layer 28 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("APOGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_13 = new cjs.Graphics().p("APOGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_14 = new cjs.Graphics().p("APPGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_15 = new cjs.Graphics().p("APPGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_16 = new cjs.Graphics().p("APQGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_17 = new cjs.Graphics().p("APQGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_18 = new cjs.Graphics().p("APQGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_19 = new cjs.Graphics().p("APQGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_20 = new cjs.Graphics().p("APRGPIAAsdIK8AAIAAMdg");
	var mask_14_graphics_21 = new cjs.Graphics().p("APRGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_22 = new cjs.Graphics().p("APRGPIAAsdIK8AAIAAMdg");
	var mask_14_graphics_23 = new cjs.Graphics().p("APSGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_24 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_25 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_26 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_27 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_28 = new cjs.Graphics().p("APTGRIAAseIK8AAIAAMeg");
	var mask_14_graphics_29 = new cjs.Graphics().p("APTGeIAAseIK8AAIAAMeg");
	var mask_14_graphics_30 = new cjs.Graphics().p("APTGqIAAseIK8AAIAAMeg");
	var mask_14_graphics_31 = new cjs.Graphics().p("APTG1IAAseIK8AAIAAMeg");
	var mask_14_graphics_32 = new cjs.Graphics().p("APTG/IAAseIK8AAIAAMeg");
	var mask_14_graphics_33 = new cjs.Graphics().p("APTHIIAAseIK8AAIAAMeg");
	var mask_14_graphics_34 = new cjs.Graphics().p("APTHQIAAseIK8AAIAAMeg");
	var mask_14_graphics_35 = new cjs.Graphics().p("APTHWIAAseIK8AAIAAMeg");
	var mask_14_graphics_36 = new cjs.Graphics().p("APTHbIAAseIK8AAIAAMeg");
	var mask_14_graphics_37 = new cjs.Graphics().p("APTHfIAAseIK8AAIAAMeg");
	var mask_14_graphics_38 = new cjs.Graphics().p("APTHiIAAseIK8AAIAAMeg");
	var mask_14_graphics_39 = new cjs.Graphics().p("APTHkIAAseIK8AAIAAMeg");
	var mask_14_graphics_40 = new cjs.Graphics().p("APUHlIAAseIK7AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:167.5,y:-28}).wait(13).to({graphics:mask_14_graphics_13,x:167.5,y:-28}).wait(1).to({graphics:mask_14_graphics_14,x:167.5,y:-21.8}).wait(1).to({graphics:mask_14_graphics_15,x:167.6,y:-15.9}).wait(1).to({graphics:mask_14_graphics_16,x:167.6,y:-10.2}).wait(1).to({graphics:mask_14_graphics_17,x:167.6,y:-4.7}).wait(1).to({graphics:mask_14_graphics_18,x:167.7,y:0.6}).wait(1).to({graphics:mask_14_graphics_19,x:167.7,y:5.6}).wait(1).to({graphics:mask_14_graphics_20,x:167.7,y:10.4}).wait(1).to({graphics:mask_14_graphics_21,x:167.8,y:14.9}).wait(1).to({graphics:mask_14_graphics_22,x:167.8,y:19.2}).wait(1).to({graphics:mask_14_graphics_23,x:167.8,y:23.3}).wait(1).to({graphics:mask_14_graphics_24,x:167.8,y:27.2}).wait(1).to({graphics:mask_14_graphics_25,x:167.8,y:30.8}).wait(1).to({graphics:mask_14_graphics_26,x:167.9,y:34.1}).wait(1).to({graphics:mask_14_graphics_27,x:167.9,y:37.3}).wait(1).to({graphics:mask_14_graphics_28,x:167.9,y:40.1}).wait(1).to({graphics:mask_14_graphics_29,x:167.9,y:41.4}).wait(1).to({graphics:mask_14_graphics_30,x:167.9,y:42.7}).wait(1).to({graphics:mask_14_graphics_31,x:167.9,y:43.8}).wait(1).to({graphics:mask_14_graphics_32,x:168,y:44.8}).wait(1).to({graphics:mask_14_graphics_33,x:168,y:45.6}).wait(1).to({graphics:mask_14_graphics_34,x:168,y:46.4}).wait(1).to({graphics:mask_14_graphics_35,x:168,y:47}).wait(1).to({graphics:mask_14_graphics_36,x:168,y:47.6}).wait(1).to({graphics:mask_14_graphics_37,x:168,y:48}).wait(1).to({graphics:mask_14_graphics_38,x:168,y:48.3}).wait(1).to({graphics:mask_14_graphics_39,x:168,y:48.4}).wait(1).to({graphics:mask_14_graphics_40,x:168,y:48.5}).wait(45));

	// a
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");
	this.shape_1.setTransform(302.2,60.6);

	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(302.2,100.6);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(302.2,60.6);

	this.shape_1.mask = this.instance_13.mask = this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_14}]},27).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({_off:true,y:60.6},27,cjs.Ease.get(1)).wait(45));

	// Layer 21 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_0 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_21 = new cjs.Graphics().p("AJnHlIAAseIHBAAIAAMeg");
	var mask_15_graphics_22 = new cjs.Graphics().p("AJzHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_23 = new cjs.Graphics().p("AKAHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_24 = new cjs.Graphics().p("AKLHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_25 = new cjs.Graphics().p("AKWHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_26 = new cjs.Graphics().p("AKhHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_27 = new cjs.Graphics().p("AKrHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_28 = new cjs.Graphics().p("AK0HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_29 = new cjs.Graphics().p("AK9HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_30 = new cjs.Graphics().p("ALFHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_31 = new cjs.Graphics().p("ALMHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_32 = new cjs.Graphics().p("ALTHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_33 = new cjs.Graphics().p("ALaHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_34 = new cjs.Graphics().p("ALfHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_35 = new cjs.Graphics().p("ALkHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_36 = new cjs.Graphics().p("ALpHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_37 = new cjs.Graphics().p("ALtHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_38 = new cjs.Graphics().p("ALwHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_39 = new cjs.Graphics().p("ALzHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_40 = new cjs.Graphics().p("AL1HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_41 = new cjs.Graphics().p("AL2HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_42 = new cjs.Graphics().p("AL3HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_43 = new cjs.Graphics().p("AL4HlIAAseIHCAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:mask_15_graphics_0,x:144,y:48.5}).wait(21).to({graphics:mask_15_graphics_21,x:106.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_22,x:107.8,y:48.5}).wait(1).to({graphics:mask_15_graphics_23,x:109,y:48.5}).wait(1).to({graphics:mask_15_graphics_24,x:110.2,y:48.5}).wait(1).to({graphics:mask_15_graphics_25,x:111.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_26,x:112.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_27,x:113.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_28,x:114.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_29,x:115.1,y:48.5}).wait(1).to({graphics:mask_15_graphics_30,x:115.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_31,x:116.7,y:48.5}).wait(1).to({graphics:mask_15_graphics_32,x:117.4,y:48.5}).wait(1).to({graphics:mask_15_graphics_33,x:118,y:48.5}).wait(1).to({graphics:mask_15_graphics_34,x:118.6,y:48.5}).wait(1).to({graphics:mask_15_graphics_35,x:119.1,y:48.5}).wait(1).to({graphics:mask_15_graphics_36,x:119.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_37,x:119.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_38,x:120.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_39,x:120.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_40,x:120.7,y:48.5}).wait(1).to({graphics:mask_15_graphics_41,x:120.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_42,x:121,y:48.5}).wait(1).to({graphics:mask_15_graphics_43,x:121,y:48.5}).wait(42));

	// e
	this.instance_15 = new lib.t3();
	this.instance_15.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_16 = new lib.t4();
	this.instance_16.setTransform(219,90.6,1,1,0,0,0,22,36.1);
	this.instance_16._off = true;

	this.instance_15.mask = this.instance_16.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},21).to({state:[{t:this.instance_16}]},22).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(21).to({_off:false},0).to({y:60.6},22,cjs.Ease.get(1)).wait(42));

	// Layer 30 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_0 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_21 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_22 = new cjs.Graphics().p("APQHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_23 = new cjs.Graphics().p("APDHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_24 = new cjs.Graphics().p("AO3HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_25 = new cjs.Graphics().p("AOsHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_26 = new cjs.Graphics().p("AOhHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_27 = new cjs.Graphics().p("AOXHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_28 = new cjs.Graphics().p("AONHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_29 = new cjs.Graphics().p("AOEHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_30 = new cjs.Graphics().p("AN8HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_31 = new cjs.Graphics().p("AN0HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_32 = new cjs.Graphics().p("ANtHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_33 = new cjs.Graphics().p("ANmHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_34 = new cjs.Graphics().p("ANhHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_35 = new cjs.Graphics().p("ANbHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_36 = new cjs.Graphics().p("ANXHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_37 = new cjs.Graphics().p("ANTHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_38 = new cjs.Graphics().p("ANPHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_39 = new cjs.Graphics().p("ANMHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_40 = new cjs.Graphics().p("ANKHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_41 = new cjs.Graphics().p("ANJHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_42 = new cjs.Graphics().p("ANIHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_43 = new cjs.Graphics().p("ANIHlIAAseIHBAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:mask_16_graphics_0,x:144,y:48.5}).wait(21).to({graphics:mask_16_graphics_21,x:144,y:48.5}).wait(1).to({graphics:mask_16_graphics_22,x:142.7,y:48.5}).wait(1).to({graphics:mask_16_graphics_23,x:141.4,y:48.5}).wait(1).to({graphics:mask_16_graphics_24,x:140.2,y:48.5}).wait(1).to({graphics:mask_16_graphics_25,x:139,y:48.5}).wait(1).to({graphics:mask_16_graphics_26,x:138,y:48.5}).wait(1).to({graphics:mask_16_graphics_27,x:136.9,y:48.5}).wait(1).to({graphics:mask_16_graphics_28,x:136,y:48.5}).wait(1).to({graphics:mask_16_graphics_29,x:135.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_30,x:134.2,y:48.5}).wait(1).to({graphics:mask_16_graphics_31,x:133.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_32,x:132.7,y:48.5}).wait(1).to({graphics:mask_16_graphics_33,x:132.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_34,x:131.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_35,x:131,y:48.5}).wait(1).to({graphics:mask_16_graphics_36,x:130.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_37,x:130.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_38,x:129.8,y:48.5}).wait(1).to({graphics:mask_16_graphics_39,x:129.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_40,x:129.3,y:48.5}).wait(1).to({graphics:mask_16_graphics_41,x:129.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_42,x:129,y:48.5}).wait(1).to({graphics:mask_16_graphics_43,x:129,y:48.5}).wait(42));

	// e
	this.instance_17 = new lib.t3();
	this.instance_17.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_18 = new lib.t6();
	this.instance_18.setTransform(219,90.6,1,1,0,0,0,22,36.1);
	this.instance_18._off = true;

	this.instance_17.mask = this.instance_18.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18}]},21).to({state:[{t:this.instance_18}]},22).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({_off:false},0).to({y:60.6},22,cjs.Ease.get(1)).wait(42));

	// Layer 32 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_0 = new cjs.Graphics().p("ANrGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_9 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_10 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_11 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_12 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_13 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_14 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_15 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_16 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_17 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_18 = new cjs.Graphics().p("ANwGQIAAsfIC+AAIAAMfg");
	var mask_17_graphics_19 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_20 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_21 = new cjs.Graphics().p("ANwGXIAAseIC+AAIAAMeg");
	var mask_17_graphics_22 = new cjs.Graphics().p("ANwGmIAAseIC+AAIAAMeg");
	var mask_17_graphics_23 = new cjs.Graphics().p("ANwGzIAAseIC+AAIAAMeg");
	var mask_17_graphics_24 = new cjs.Graphics().p("ANwG/IAAseIC+AAIAAMeg");
	var mask_17_graphics_25 = new cjs.Graphics().p("ANwHJIAAseIC+AAIAAMeg");
	var mask_17_graphics_26 = new cjs.Graphics().p("ANwHRIAAseIC+AAIAAMeg");
	var mask_17_graphics_27 = new cjs.Graphics().p("ANwHYIAAseIC+AAIAAMeg");
	var mask_17_graphics_28 = new cjs.Graphics().p("ANwHeIAAseIC+AAIAAMeg");
	var mask_17_graphics_29 = new cjs.Graphics().p("ANwHhIAAseIC+AAIAAMeg");
	var mask_17_graphics_30 = new cjs.Graphics().p("ANwHkIAAseIC+AAIAAMeg");
	var mask_17_graphics_31 = new cjs.Graphics().p("ANwHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:mask_17_graphics_0,x:106.5,y:-18}).wait(9).to({graphics:mask_17_graphics_9,x:107,y:-18}).wait(1).to({graphics:mask_17_graphics_10,x:107,y:-11.3}).wait(1).to({graphics:mask_17_graphics_11,x:107,y:-5}).wait(1).to({graphics:mask_17_graphics_12,x:107,y:1.1}).wait(1).to({graphics:mask_17_graphics_13,x:107,y:6.8}).wait(1).to({graphics:mask_17_graphics_14,x:107,y:12.2}).wait(1).to({graphics:mask_17_graphics_15,x:107,y:17.3}).wait(1).to({graphics:mask_17_graphics_16,x:107,y:22.1}).wait(1).to({graphics:mask_17_graphics_17,x:107,y:26.6}).wait(1).to({graphics:mask_17_graphics_18,x:107,y:30.8}).wait(1).to({graphics:mask_17_graphics_19,x:107,y:34.7}).wait(1).to({graphics:mask_17_graphics_20,x:107,y:38.3}).wait(1).to({graphics:mask_17_graphics_21,x:107,y:40.8}).wait(1).to({graphics:mask_17_graphics_22,x:107,y:42.2}).wait(1).to({graphics:mask_17_graphics_23,x:107,y:43.5}).wait(1).to({graphics:mask_17_graphics_24,x:107,y:44.7}).wait(1).to({graphics:mask_17_graphics_25,x:107,y:45.7}).wait(1).to({graphics:mask_17_graphics_26,x:107,y:46.6}).wait(1).to({graphics:mask_17_graphics_27,x:107,y:47.3}).wait(1).to({graphics:mask_17_graphics_28,x:107,y:47.8}).wait(1).to({graphics:mask_17_graphics_29,x:107,y:48.2}).wait(1).to({graphics:mask_17_graphics_30,x:107,y:48.4}).wait(1).to({graphics:mask_17_graphics_31,x:107,y:48.5}).wait(54));

	// e
	this.instance_19 = new lib.t3();
	this.instance_19.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_19.mask = mask_17;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(54));

	// Layer 34 (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_0 = new cjs.Graphics().p("ACnGQIAAsfIK8AAIAAMfg");
	var mask_18_graphics_24 = new cjs.Graphics().p("ACnGQIAAsfIK8AAIAAMfg");
	var mask_18_graphics_25 = new cjs.Graphics().p("ACwGPIAAseIK8AAIAAMeg");
	var mask_18_graphics_26 = new cjs.Graphics().p("AC4GQIAAseIK8AAIAAMeg");
	var mask_18_graphics_27 = new cjs.Graphics().p("ADAGQIAAseIK8AAIAAMeg");
	var mask_18_graphics_28 = new cjs.Graphics().p("ADIGQIAAseIK8AAIAAMeg");
	var mask_18_graphics_29 = new cjs.Graphics().p("ADPGZIAAseIK8AAIAAMeg");
	var mask_18_graphics_30 = new cjs.Graphics().p("ADWGiIAAseIK8AAIAAMeg");
	var mask_18_graphics_31 = new cjs.Graphics().p("ADdGqIAAseIK8AAIAAMeg");
	var mask_18_graphics_32 = new cjs.Graphics().p("ADjGxIAAseIK8AAIAAMeg");
	var mask_18_graphics_33 = new cjs.Graphics().p("ADoG4IAAseIK8AAIAAMeg");
	var mask_18_graphics_34 = new cjs.Graphics().p("ADtG+IAAseIK8AAIAAMeg");
	var mask_18_graphics_35 = new cjs.Graphics().p("ADyHEIAAseIK8AAIAAMeg");
	var mask_18_graphics_36 = new cjs.Graphics().p("AD2HKIAAseIK8AAIAAMeg");
	var mask_18_graphics_37 = new cjs.Graphics().p("AD6HPIAAseIK8AAIAAMeg");
	var mask_18_graphics_38 = new cjs.Graphics().p("AD+HTIAAseIK8AAIAAMeg");
	var mask_18_graphics_39 = new cjs.Graphics().p("AEBHXIAAseIK8AAIAAMeg");
	var mask_18_graphics_40 = new cjs.Graphics().p("AEEHaIAAseIK8AAIAAMeg");
	var mask_18_graphics_41 = new cjs.Graphics().p("AEGHdIAAseIK8AAIAAMeg");
	var mask_18_graphics_42 = new cjs.Graphics().p("AEIHfIAAseIK8AAIAAMeg");
	var mask_18_graphics_43 = new cjs.Graphics().p("AEJHhIAAseIK8AAIAAMeg");
	var mask_18_graphics_44 = new cjs.Graphics().p("AEKHiIAAseIK8AAIAAMeg");
	var mask_18_graphics_45 = new cjs.Graphics().p("AELHjIAAseIK8AAIAAMeg");
	var mask_18_graphics_46 = new cjs.Graphics().p("AELHjIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:mask_18_graphics_0,x:86.7,y:32}).wait(24).to({graphics:mask_18_graphics_24,x:86.7,y:32}).wait(1).to({graphics:mask_18_graphics_25,x:87.6,y:34.2}).wait(1).to({graphics:mask_18_graphics_26,x:88.5,y:36.3}).wait(1).to({graphics:mask_18_graphics_27,x:89.3,y:38.3}).wait(1).to({graphics:mask_18_graphics_28,x:90.1,y:40.1}).wait(1).to({graphics:mask_18_graphics_29,x:90.8,y:41}).wait(1).to({graphics:mask_18_graphics_30,x:91.5,y:41.8}).wait(1).to({graphics:mask_18_graphics_31,x:92.1,y:42.6}).wait(1).to({graphics:mask_18_graphics_32,x:92.7,y:43.4}).wait(1).to({graphics:mask_18_graphics_33,x:93.3,y:44.1}).wait(1).to({graphics:mask_18_graphics_34,x:93.8,y:44.7}).wait(1).to({graphics:mask_18_graphics_35,x:94.2,y:45.3}).wait(1).to({graphics:mask_18_graphics_36,x:94.7,y:45.8}).wait(1).to({graphics:mask_18_graphics_37,x:95.1,y:46.3}).wait(1).to({graphics:mask_18_graphics_38,x:95.4,y:46.7}).wait(1).to({graphics:mask_18_graphics_39,x:95.7,y:47.1}).wait(1).to({graphics:mask_18_graphics_40,x:96,y:47.5}).wait(1).to({graphics:mask_18_graphics_41,x:96.2,y:47.7}).wait(1).to({graphics:mask_18_graphics_42,x:96.4,y:48}).wait(1).to({graphics:mask_18_graphics_43,x:96.6,y:48.1}).wait(1).to({graphics:mask_18_graphics_44,x:96.7,y:48.3}).wait(1).to({graphics:mask_18_graphics_45,x:96.7,y:48.3}).wait(1).to({graphics:mask_18_graphics_46,x:96.7,y:48.4}).wait(39));

	// r
	this.instance_20 = new lib.r3();
	this.instance_20.setTransform(149.3,84.9,1,1,0,0,0,16.1,11.7);

	this.instance_20.mask = mask_18;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(85));

	// Layer 36 (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_0 = new cjs.Graphics().p("AH5GQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_15 = new cjs.Graphics().p("AH5GQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_16 = new cjs.Graphics().p("AHjGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_17 = new cjs.Graphics().p("AHPGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_18 = new cjs.Graphics().p("AG8GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_19 = new cjs.Graphics().p("AGqGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_20 = new cjs.Graphics().p("AGZGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_21 = new cjs.Graphics().p("AGJGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_22 = new cjs.Graphics().p("AF5GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_23 = new cjs.Graphics().p("AFrGPIAAsdIK8AAIAAMdg");
	var mask_19_graphics_24 = new cjs.Graphics().p("AFeGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_25 = new cjs.Graphics().p("AFSGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_26 = new cjs.Graphics().p("AFGGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_27 = new cjs.Graphics().p("AE8GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_28 = new cjs.Graphics().p("AEzGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_29 = new cjs.Graphics().p("AEqGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_30 = new cjs.Graphics().p("AEjGPIAAsdIK8AAIAAMdg");
	var mask_19_graphics_31 = new cjs.Graphics().p("AEdGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_32 = new cjs.Graphics().p("AEXGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_33 = new cjs.Graphics().p("AETGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_34 = new cjs.Graphics().p("AEPGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_35 = new cjs.Graphics().p("AENGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_36 = new cjs.Graphics().p("AELGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_37 = new cjs.Graphics().p("AELGQIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:mask_19_graphics_0,x:120.5,y:32}).wait(15).to({graphics:mask_19_graphics_15,x:120.5,y:32}).wait(1).to({graphics:mask_19_graphics_16,x:118.4,y:32.4}).wait(1).to({graphics:mask_19_graphics_17,x:116.4,y:32.8}).wait(1).to({graphics:mask_19_graphics_18,x:114.5,y:33.2}).wait(1).to({graphics:mask_19_graphics_19,x:112.6,y:33.6}).wait(1).to({graphics:mask_19_graphics_20,x:110.9,y:33.9}).wait(1).to({graphics:mask_19_graphics_21,x:109.3,y:34.2}).wait(1).to({graphics:mask_19_graphics_22,x:107.8,y:34.5}).wait(1).to({graphics:mask_19_graphics_23,x:106.4,y:34.8}).wait(1).to({graphics:mask_19_graphics_24,x:105,y:35.1}).wait(1).to({graphics:mask_19_graphics_25,x:103.8,y:35.3}).wait(1).to({graphics:mask_19_graphics_26,x:102.7,y:35.6}).wait(1).to({graphics:mask_19_graphics_27,x:101.7,y:35.8}).wait(1).to({graphics:mask_19_graphics_28,x:100.7,y:36}).wait(1).to({graphics:mask_19_graphics_29,x:99.9,y:36.1}).wait(1).to({graphics:mask_19_graphics_30,x:99.2,y:36.3}).wait(1).to({graphics:mask_19_graphics_31,x:98.5,y:36.4}).wait(1).to({graphics:mask_19_graphics_32,x:98,y:36.5}).wait(1).to({graphics:mask_19_graphics_33,x:97.5,y:36.6}).wait(1).to({graphics:mask_19_graphics_34,x:97.2,y:36.7}).wait(1).to({graphics:mask_19_graphics_35,x:96.9,y:36.7}).wait(1).to({graphics:mask_19_graphics_36,x:96.8,y:36.7}).wait(1).to({graphics:mask_19_graphics_37,x:96.7,y:36.8}).wait(48));

	// r
	this.instance_21 = new lib.t2();
	this.instance_21.setTransform(137,60.6,1,1,0,0,0,28.3,36.1);

	this.instance_21.mask = mask_19;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15).to({y:80.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(48));

	// Layer 38 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_0 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_5 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_6 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_7 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_8 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_9 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_10 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_11 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_12 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_13 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_14 = new cjs.Graphics().p("AGzGQIAAsfIC+AAIAAMfg");
	var mask_20_graphics_15 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_16 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_17 = new cjs.Graphics().p("AGzGXIAAseIC+AAIAAMeg");
	var mask_20_graphics_18 = new cjs.Graphics().p("AGzGmIAAseIC+AAIAAMeg");
	var mask_20_graphics_19 = new cjs.Graphics().p("AGzGzIAAseIC+AAIAAMeg");
	var mask_20_graphics_20 = new cjs.Graphics().p("AGzG/IAAseIC+AAIAAMeg");
	var mask_20_graphics_21 = new cjs.Graphics().p("AGzHJIAAseIC+AAIAAMeg");
	var mask_20_graphics_22 = new cjs.Graphics().p("AGzHRIAAseIC+AAIAAMeg");
	var mask_20_graphics_23 = new cjs.Graphics().p("AGzHYIAAseIC+AAIAAMeg");
	var mask_20_graphics_24 = new cjs.Graphics().p("AGzHeIAAseIC+AAIAAMeg");
	var mask_20_graphics_25 = new cjs.Graphics().p("AGzHhIAAseIC+AAIAAMeg");
	var mask_20_graphics_26 = new cjs.Graphics().p("AGzHkIAAseIC+AAIAAMeg");
	var mask_20_graphics_27 = new cjs.Graphics().p("AGzHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:mask_20_graphics_0,x:62.5,y:-18}).wait(5).to({graphics:mask_20_graphics_5,x:62.5,y:-18}).wait(1).to({graphics:mask_20_graphics_6,x:62.5,y:-11.3}).wait(1).to({graphics:mask_20_graphics_7,x:62.5,y:-5}).wait(1).to({graphics:mask_20_graphics_8,x:62.5,y:1.1}).wait(1).to({graphics:mask_20_graphics_9,x:62.5,y:6.8}).wait(1).to({graphics:mask_20_graphics_10,x:62.5,y:12.2}).wait(1).to({graphics:mask_20_graphics_11,x:62.5,y:17.3}).wait(1).to({graphics:mask_20_graphics_12,x:62.5,y:22.1}).wait(1).to({graphics:mask_20_graphics_13,x:62.5,y:26.6}).wait(1).to({graphics:mask_20_graphics_14,x:62.5,y:30.8}).wait(1).to({graphics:mask_20_graphics_15,x:62.5,y:34.7}).wait(1).to({graphics:mask_20_graphics_16,x:62.5,y:38.3}).wait(1).to({graphics:mask_20_graphics_17,x:62.5,y:40.8}).wait(1).to({graphics:mask_20_graphics_18,x:62.5,y:42.2}).wait(1).to({graphics:mask_20_graphics_19,x:62.5,y:43.5}).wait(1).to({graphics:mask_20_graphics_20,x:62.5,y:44.7}).wait(1).to({graphics:mask_20_graphics_21,x:62.5,y:45.7}).wait(1).to({graphics:mask_20_graphics_22,x:62.5,y:46.6}).wait(1).to({graphics:mask_20_graphics_23,x:62.5,y:47.3}).wait(1).to({graphics:mask_20_graphics_24,x:62.5,y:47.8}).wait(1).to({graphics:mask_20_graphics_25,x:62.5,y:48.2}).wait(1).to({graphics:mask_20_graphics_26,x:62.5,y:48.4}).wait(1).to({graphics:mask_20_graphics_27,x:62.5,y:48.5}).wait(58));

	// r
	this.instance_22 = new lib.t2();
	this.instance_22.setTransform(137,60.6,1,1,0,0,0,28.3,36.1);

	this.instance_22.mask = mask_20;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(58));

	// Layer 40 (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_0 = new cjs.Graphics().p("AA3H9IAAseIK8AAIAAMeg");
	var mask_21_graphics_11 = new cjs.Graphics().p("AA3H9IAAseIK8AAIAAMeg");
	var mask_21_graphics_12 = new cjs.Graphics().p("AAgH9IAAseIK8AAIAAMeg");
	var mask_21_graphics_13 = new cjs.Graphics().p("AALH9IAAseIK8AAIAAMeg");
	var mask_21_graphics_14 = new cjs.Graphics().p("AgHH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_15 = new cjs.Graphics().p("AgaH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_16 = new cjs.Graphics().p("AgsH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_17 = new cjs.Graphics().p("Ag9H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_18 = new cjs.Graphics().p("AhOH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_19 = new cjs.Graphics().p("AhdH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_20 = new cjs.Graphics().p("AhrH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_21 = new cjs.Graphics().p("Ah4H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_22 = new cjs.Graphics().p("AiFH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_23 = new cjs.Graphics().p("AiQH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_24 = new cjs.Graphics().p("AiaH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_25 = new cjs.Graphics().p("AikH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_26 = new cjs.Graphics().p("AisH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_27 = new cjs.Graphics().p("AizH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_28 = new cjs.Graphics().p("Ai6H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_29 = new cjs.Graphics().p("Ai/H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_30 = new cjs.Graphics().p("AjEH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_31 = new cjs.Graphics().p("AjHH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_32 = new cjs.Graphics().p("AjKH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_33 = new cjs.Graphics().p("AjLH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_34 = new cjs.Graphics().p("AjMH9IAAseIK7AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:mask_21_graphics_0,x:75.5,y:51}).wait(11).to({graphics:mask_21_graphics_11,x:75.5,y:51}).wait(1).to({graphics:mask_21_graphics_12,x:73.3,y:51}).wait(1).to({graphics:mask_21_graphics_13,x:71.2,y:51}).wait(1).to({graphics:mask_21_graphics_14,x:69.2,y:51}).wait(1).to({graphics:mask_21_graphics_15,x:67.2,y:51}).wait(1).to({graphics:mask_21_graphics_16,x:65.4,y:51}).wait(1).to({graphics:mask_21_graphics_17,x:63.7,y:51}).wait(1).to({graphics:mask_21_graphics_18,x:62.1,y:51}).wait(1).to({graphics:mask_21_graphics_19,x:60.6,y:51}).wait(1).to({graphics:mask_21_graphics_20,x:59.1,y:51}).wait(1).to({graphics:mask_21_graphics_21,x:57.8,y:51}).wait(1).to({graphics:mask_21_graphics_22,x:56.6,y:51}).wait(1).to({graphics:mask_21_graphics_23,x:55.4,y:51}).wait(1).to({graphics:mask_21_graphics_24,x:54.4,y:51}).wait(1).to({graphics:mask_21_graphics_25,x:53.5,y:51}).wait(1).to({graphics:mask_21_graphics_26,x:52.6,y:51}).wait(1).to({graphics:mask_21_graphics_27,x:51.9,y:51}).wait(1).to({graphics:mask_21_graphics_28,x:51.3,y:51}).wait(1).to({graphics:mask_21_graphics_29,x:50.7,y:51}).wait(1).to({graphics:mask_21_graphics_30,x:50.3,y:51}).wait(1).to({graphics:mask_21_graphics_31,x:49.9,y:51}).wait(1).to({graphics:mask_21_graphics_32,x:49.7,y:51}).wait(1).to({graphics:mask_21_graphics_33,x:49.5,y:51}).wait(1).to({graphics:mask_21_graphics_34,x:49.5,y:51}).wait(51));

	// d
	this.instance_23 = new lib.t1();
	this.instance_23.setTransform(45.4,70.6,1,1,0,0,0,31.9,36.1);
	this.instance_23._off = true;

	this.instance_23.mask = mask_21;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(11).to({_off:false},0).to({y:60.6},23,cjs.Ease.get(1)).wait(51));

	// Layer 42 (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_0 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_1 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_2 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_3 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_4 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_5 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_6 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_7 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_8 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_9 = new cjs.Graphics().p("AgnGQIAAsfIC8AAIAAMfg");
	var mask_22_graphics_10 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_11 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_12 = new cjs.Graphics().p("AgnGXIAAseIC8AAIAAMeg");
	var mask_22_graphics_13 = new cjs.Graphics().p("AgnGmIAAseIC8AAIAAMeg");
	var mask_22_graphics_14 = new cjs.Graphics().p("AgnGzIAAseIC8AAIAAMeg");
	var mask_22_graphics_15 = new cjs.Graphics().p("AgnG/IAAseIC8AAIAAMeg");
	var mask_22_graphics_16 = new cjs.Graphics().p("AgnHJIAAseIC8AAIAAMeg");
	var mask_22_graphics_17 = new cjs.Graphics().p("AgnHRIAAseIC8AAIAAMeg");
	var mask_22_graphics_18 = new cjs.Graphics().p("AgnHYIAAseIC8AAIAAMeg");
	var mask_22_graphics_19 = new cjs.Graphics().p("AgnHeIAAseIC8AAIAAMeg");
	var mask_22_graphics_20 = new cjs.Graphics().p("AgnHhIAAseIC8AAIAAMeg");
	var mask_22_graphics_21 = new cjs.Graphics().p("AgnHkIAAseIC8AAIAAMeg");
	var mask_22_graphics_22 = new cjs.Graphics().p("AgnHlIAAseIC8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:mask_22_graphics_0,x:15,y:-18}).wait(1).to({graphics:mask_22_graphics_1,x:15,y:-11.3}).wait(1).to({graphics:mask_22_graphics_2,x:15,y:-5}).wait(1).to({graphics:mask_22_graphics_3,x:15,y:1.1}).wait(1).to({graphics:mask_22_graphics_4,x:15,y:6.8}).wait(1).to({graphics:mask_22_graphics_5,x:15,y:12.2}).wait(1).to({graphics:mask_22_graphics_6,x:15,y:17.3}).wait(1).to({graphics:mask_22_graphics_7,x:15,y:22.1}).wait(1).to({graphics:mask_22_graphics_8,x:15,y:26.6}).wait(1).to({graphics:mask_22_graphics_9,x:15,y:30.8}).wait(1).to({graphics:mask_22_graphics_10,x:15,y:34.7}).wait(1).to({graphics:mask_22_graphics_11,x:15,y:38.3}).wait(1).to({graphics:mask_22_graphics_12,x:15,y:40.8}).wait(1).to({graphics:mask_22_graphics_13,x:15,y:42.2}).wait(1).to({graphics:mask_22_graphics_14,x:15,y:43.5}).wait(1).to({graphics:mask_22_graphics_15,x:15,y:44.7}).wait(1).to({graphics:mask_22_graphics_16,x:15,y:45.7}).wait(1).to({graphics:mask_22_graphics_17,x:15,y:46.6}).wait(1).to({graphics:mask_22_graphics_18,x:15,y:47.3}).wait(1).to({graphics:mask_22_graphics_19,x:15,y:47.8}).wait(1).to({graphics:mask_22_graphics_20,x:15,y:48.2}).wait(1).to({graphics:mask_22_graphics_21,x:15,y:48.4}).wait(1).to({graphics:mask_22_graphics_22,x:15,y:48.5}).wait(63));

	// d
	this.instance_24 = new lib.t1();
	this.instance_24.setTransform(45.4,100.6,1,1,0,0,0,31.9,36.1);

	this.instance_24.mask = mask_22;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({y:60.6},22,cjs.Ease.get(1)).wait(63));

	// maska2 (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	mask_23.graphics.p("EgiNANXIAAmQMBV7AAAIAAGQg");
	mask_23.setTransform(331,85.5);

	// a
	this.instance_25 = new lib.a_m2();
	this.instance_25.setTransform(636.7,184.3,1,1,0,0,0,9.9,12.3);
	this.instance_25._off = true;

	this.instance_25.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(58).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(5));

	// k
	this.instance_26 = new lib.k_m1();
	this.instance_26.setTransform(611.3,184.3,1,1,0,0,0,9.1,12.3);
	this.instance_26._off = true;

	this.instance_26.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(62).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(1));

	// s
	this.instance_27 = new lib.s_m1();
	this.instance_27.setTransform(583.8,184.3,1,1,0,0,0,8.4,12.9);
	this.instance_27._off = true;

	this.instance_27.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(46).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(17));

	// w
	this.instance_28 = new lib.w_m1();
	this.instance_28.setTransform(551,184.3,1,1,0,0,0,17.1,12.3);
	this.instance_28._off = true;

	this.instance_28.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(56).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(7));

	// o
	this.instance_29 = new lib.o_m1();
	this.instance_29.setTransform(514,184.3,1,1,0,0,0,12.7,12.9);
	this.instance_29._off = true;

	this.instance_29.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(52).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(11));

	// k
	this.instance_30 = new lib.k_m1();
	this.instance_30.setTransform(484.5,184.3,1,1,0,0,0,9.1,12.3);
	this.instance_30._off = true;

	this.instance_30.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(43).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(20));

	// n
	this.instance_31 = new lib.n_m();
	this.instance_31.setTransform(455.5,184.3,1,1,0,0,0,9.1,12.3);
	this.instance_31._off = true;

	this.instance_31.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(48).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(15));

	// o
	this.instance_32 = new lib.o_m1();
	this.instance_32.setTransform(424.1,184.3,1,1,0,0,0,12.7,12.9);
	this.instance_32._off = true;

	this.instance_32.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(41).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(22));

	// k
	this.instance_33 = new lib.k_m1();
	this.instance_33.setTransform(394.6,184.3,1,1,0,0,0,9.1,12.3);
	this.instance_33._off = true;

	this.instance_33.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(36).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(27));

	// maska2 (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	mask_24.graphics.p("EgiNAQeIAAmPMBV7AAAIAAGPg");
	mask_24.setTransform(331,105.5);

	// a
	this.instance_34 = new lib.a_m2();
	this.instance_34.setTransform(636.7,157.3,1,1,0,0,0,9.9,12.3);
	this.instance_34._off = true;

	this.instance_34.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(58).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(5));

	// k
	this.instance_35 = new lib.k_m1();
	this.instance_35.setTransform(611.3,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_35._off = true;

	this.instance_35.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(62).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(1));

	// s
	this.instance_36 = new lib.s_m1();
	this.instance_36.setTransform(583.8,157.3,1,1,0,0,0,8.4,12.9);
	this.instance_36._off = true;

	this.instance_36.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(46).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(17));

	// w
	this.instance_37 = new lib.w_m1();
	this.instance_37.setTransform(551,157.3,1,1,0,0,0,17.1,12.3);
	this.instance_37._off = true;

	this.instance_37.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(56).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(7));

	// o
	this.instance_38 = new lib.o_m1();
	this.instance_38.setTransform(514,157.3,1,1,0,0,0,12.7,12.9);
	this.instance_38._off = true;

	this.instance_38.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(52).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(11));

	// k
	this.instance_39 = new lib.k_m1();
	this.instance_39.setTransform(484.5,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_39._off = true;

	this.instance_39.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(43).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(20));

	// n
	this.instance_40 = new lib.n_m();
	this.instance_40.setTransform(455.5,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_40._off = true;

	this.instance_40.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(48).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(15));

	// o
	this.instance_41 = new lib.o_m1();
	this.instance_41.setTransform(424.1,157.3,1,1,0,0,0,12.7,12.9);
	this.instance_41._off = true;

	this.instance_41.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(41).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(22));

	// k
	this.instance_42 = new lib.k_m1();
	this.instance_42.setTransform(394.6,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_42._off = true;

	this.instance_42.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(36).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(27));

	// maska2 (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	mask_25.graphics.p("EgiNANXIAAmQMBV7AAAIAAGQg");
	mask_25.setTransform(331,85.5);

	// a
	this.instance_43 = new lib.a_m2();
	this.instance_43.setTransform(352.6,187.3,1,1,0,0,0,9.9,12.3);
	this.instance_43._off = true;

	this.instance_43.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(34).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(29));

	// n
	this.instance_44 = new lib.n_m();
	this.instance_44.setTransform(325.2,187.3,1,1,0,0,0,9.1,12.3);
	this.instance_44._off = true;

	this.instance_44.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// y
	this.instance_45 = new lib.y_m();
	this.instance_45.setTransform(297.2,187.3,1,1,0,0,0,10.4,12.3);
	this.instance_45._off = true;

	this.instance_45.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(42).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(21));

	// z
	this.instance_46 = new lib.z_m();
	this.instance_46.setTransform(270.6,187.3,1,1,0,0,0,9.7,12.3);
	this.instance_46._off = true;

	this.instance_46.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// r
	this.instance_47 = new lib.r_m2();
	this.instance_47.setTransform(244.6,187.3,1,1,0,0,0,8.7,12.3);
	this.instance_47._off = true;

	this.instance_47.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(37).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(26));

	// a
	this.instance_48 = new lib.a_m2();
	this.instance_48.setTransform(217.5,187.3,1,1,0,0,0,9.9,12.3);
	this.instance_48._off = true;

	this.instance_48.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// t
	this.instance_49 = new lib.t_m3();
	this.instance_49.setTransform(193.3,187.3,1,1,0,0,0,8.1,12.3);
	this.instance_49._off = true;

	this.instance_49.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(25).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(38));

	// a
	this.instance_50 = new lib.a_m2();
	this.instance_50.setTransform(169.1,187.3,1,1,0,0,0,9.9,12.3);
	this.instance_50._off = true;

	this.instance_50.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// k
	this.instance_51 = new lib.k_m1();
	this.instance_51.setTransform(143.7,187.3,1,1,0,0,0,9.1,12.3);
	this.instance_51._off = true;

	this.instance_51.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(35).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(28));

	// maska (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	mask_26.graphics.p("EgiNAQeIAAmPMBV7AAAIAAGPg");
	mask_26.setTransform(331,105.5);

	// a
	this.instance_52 = new lib.a_m2();
	this.instance_52.setTransform(352.6,157.3,1,1,0,0,0,9.9,12.3);
	this.instance_52._off = true;

	this.instance_52.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(35).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(28));

	// n
	this.instance_53 = new lib.n_m();
	this.instance_53.setTransform(325.2,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_53._off = true;

	this.instance_53.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// y
	this.instance_54 = new lib.y_m();
	this.instance_54.setTransform(297.2,157.3,1,1,0,0,0,10.4,12.3);
	this.instance_54._off = true;

	this.instance_54.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(42).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(21));

	// z
	this.instance_55 = new lib.z_m();
	this.instance_55.setTransform(270.6,157.3,1,1,0,0,0,9.7,12.3);
	this.instance_55._off = true;

	this.instance_55.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// r
	this.instance_56 = new lib.r_m2();
	this.instance_56.setTransform(244.6,157.3,1,1,0,0,0,8.7,12.3);
	this.instance_56._off = true;

	this.instance_56.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(37).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(26));

	// a
	this.instance_57 = new lib.a_m2();
	this.instance_57.setTransform(217.5,157.3,1,1,0,0,0,9.9,12.3);
	this.instance_57._off = true;

	this.instance_57.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// t
	this.instance_58 = new lib.t_m3();
	this.instance_58.setTransform(193.3,157.3,1,1,0,0,0,8.1,12.3);
	this.instance_58._off = true;

	this.instance_58.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(25).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(38));

	// a
	this.instance_59 = new lib.a_m2();
	this.instance_59.setTransform(169.1,157.3,1,1,0,0,0,9.9,12.3);
	this.instance_59._off = true;

	this.instance_59.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(30).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(33));

	// k
	this.instance_60 = new lib.k_m1();
	this.instance_60.setTransform(143.7,157.3,1,1,0,0,0,9.1,12.3);
	this.instance_60._off = true;

	this.instance_60.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(35).to({_off:false},0).to({y:171.3},22,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,-217,1500,900);


// symbols:
(lib._0 = function() {
	this.initialize(img._0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.z_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgB6IB9jPIh1AAIAAgkIC5AAIh+DPIB8AAIAAAkg");
	this.shape.setTransform(9.7,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,24.5);


(lib.y_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8B6IAxhiIhciRIAvAAIA/BpIA1hpIAsAAIh4Dzg");
	this.shape.setTransform(10.4,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,24.5);


(lib.w_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4B6Ig4itIg3CtIgdAAIhVjzIAqAAIA5CtIA5itIAbAAIA5CtIA5itIAqAAIhVDzg");
	this.shape.setTransform(17.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,24.5);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-36,67.2,72.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-36,67.2,72.1);


(lib.t22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFjIAArFIArAAIAALFg");
	this.shape.setTransform(22.5,36.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(20.2,1,4.5,71.1);


(lib.t6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjbFoIAArPIG3AAIAACGIkPAAIAAHDIEPAAIAACGg");
	this.shape.setTransform(22,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,72.1);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbFoIAAm9IibG9Ih6AAIigm9IAAG9IijAAIAArPIDAAAIC/HzIC/nzIC9AAIAALPg");
	this.shape.setTransform(38.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.6,72.1);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBBIAAiBIEeAAIAACBg");
	this.shape.setTransform(29.6,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.2,29.8,28.8,13.1);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSFoIAArPIClAAIAALPg");
	this.shape.setTransform(8.4,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,72.1);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZFoIh9jIIhPAAIAADIIinAAIAArPIEtAAQBQABA7AkQA7AjAgA7QAgA6ABBIQgBBNglA7QglA9hEAhICQDkgAhzAYIByAAQAhAAAbgRQAZgPAOgdQAOgcABghQgBgjgOgbQgOgdgZgRQgbgQghgBIhyAAg");
	this.shape.setTransform(28.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.7,72.1);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+FoIAArPIEJAAQBXABBGAeQBGAdAvAzQAxAzAYBBQAZA/AABFQAABGgYA/QgZBBgwAzQgwAzhGAeQhFAdhYABgAiXDYIBZAAQBCgCAvgeQAwgeAZgxQAZgxAAg4QAAg3gZgxQgZgxgwgfQgvgehCgBIhZAAg");
	this.shape.setTransform(32,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,72.1);


(lib.t_m3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTB6IAAjPIg9AAIAAgkICgAAIAAAkIg9AAIAADPg");
	this.shape.setTransform(8.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.2,24.5);


(lib.t = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgAVIAAgpIHBAAIAAApg");
	this.shape.setTransform(22.5,2.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,4.2);


(lib.s_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoB2QgTgKgMgTQgLgUgBgbIApAAQAAAYANANQANANATAAQASAAALgKQALgJABgSQgBgMgGgHQgGgIgJgEIgRgHQgVgIgSgJQgSgGgLgPQgLgOAAgZQAAgUAKgQQALgOARgJQARgIATAAQAWAAASAKQARAJAKASQALARAAAXIgoAAQgBgSgJgLQgKgMgRAAQgNAAgLAIQgLAHAAAQQAAAKAFAHQAFAHAIAEQAIAFAIADIAdALQAPAHAMAGQANAJAHAMQAIANAAARQgBAZgLARQgLARgTAJQgTAJgXAAQgVAAgTgKg");
	this.shape.setTransform(8.4,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,25.7);


(lib.r3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfB1IiAjGQBkgyBLAWICQDig");
	this.shape.setTransform(16.1,11.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,23.5);


(lib.r_m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmB6IgrhJIgoAAIAABJIgpAAIAAjzIBWAAQAbAAATAMQATALALAUQALATAAAYQAAARgHAQQgGANgLANQgMAMgQAGIAwBQgAgtANIAtAAQAOgBAKgGQALgGAGgKQAFgMAAgNQAAgOgFgLQgGgMgLgGQgKgHgOAAIgtAAg");
	this.shape.setTransform(8.7,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,24.5);


(lib.o_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B1QgXgKgRgSQgQgTgJgXQgIgXAAgYQAAgYAIgXQAJgWAQgSQARgTAXgKQAYgLAcAAQAdAAAXALQAYAKAQATQARASAIAWQAJAXAAAYQAAAYgJAXQgIAXgRATQgQASgYAKQgXALgdAAQgcAAgYgLgAgshOQgTANgKAWQgKAUAAAXQAAAYAKAVQAKAUATAOQATANAZAAQAZAAATgNQATgOAKgUQAKgVABgYQgBgXgKgUQgKgWgTgNQgTgNgZAAQgZAAgTANg");
	this.shape.setTransform(12.7,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,25.7);


(lib.n_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuB6IhfitIAACtIgoAAIAAjzIAsAAIBfCsIAAisIAoAAIAADzg");
	this.shape.setTransform(9.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,24.5);


(lib.m23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTFoIkyrPIAtAAIEYKOIEYqOIAuAAIk0LPg");
	this.shape.setTransform(32.6,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.3,72.1);


(lib.m22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIArAAIAALPg");
	this.shape.setTransform(63,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(60.7,0,4.6,72.1);


(lib.m21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIAqAAIABLPg");
	this.shape.setTransform(2.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,72.1);


(lib.m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3FoIilnAIAAgBIgSAAIAAkOIATAAIAhAAIC+HzIC/nzIAZAAIATAAIAAEOIgMAAIAAABIihHAg");
	this.shape.setTransform(23,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,48,72.1);


(lib.k_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoB6IhZhrIAABrIgoAAIAAjzIAoAAIAABsIBZhsIAyAAIhlB5IBlB6g");
	this.shape.setTransform(9.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,24.5);


(lib.e3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAVIAAgoIFTAAIAAAog");
	this.shape.setTransform(21.1,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,34.2,34.1,4.2);


(lib.e2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1FoIAArPIFrAAIAAAqIlNAAIAAJ7IFNAAIAAAqg");
	this.shape.setTransform(19.8,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,36.6,72.1);


(lib.e = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIArAAIAALPg");
	this.shape.setTransform(2.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,72.1);


(lib.a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbFoIjbqLIjZKLIgwAAID5rPIAjAAID3LPg");
	this.shape.setTransform(26.6,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,72.1);


(lib.a_m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4B6IgLgfIhZAAIgLAfIgrAAIBVjzIAbAAIBUDzgAAhA3IghhtIghBtIBCAAg");
	this.shape.setTransform(9.9,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,24.5);


(lib.a = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAUIAOgoIE3AAIAOAog");
	this.shape.setTransform(26.7,55.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.6,53.1,34.2,4.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 780,
	height: 210,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/_0.jpg", id:"_0"}
	]
};

// stage content:
(lib.dtLogo2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		/* js
			this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_50 = new cjs.Graphics().p("EAwIAMqIAAshILtAAIAAMhg");
	var mask_graphics_51 = new cjs.Graphics().p("EAwIAMQIAAseILtAAIAAMeg");
	var mask_graphics_52 = new cjs.Graphics().p("EAwIAL3IAAseILtAAIAAMeg");
	var mask_graphics_53 = new cjs.Graphics().p("EAwIALgIAAseILtAAIAAMeg");
	var mask_graphics_54 = new cjs.Graphics().p("EAwIALKIAAseILuAAIAAMeg");
	var mask_graphics_55 = new cjs.Graphics().p("EAwIAK1IAAseILuAAIAAMeg");
	var mask_graphics_56 = new cjs.Graphics().p("EAwIAKhIAAseILuAAIAAMeg");
	var mask_graphics_57 = new cjs.Graphics().p("EAwIAKOIAAseILuAAIAAMeg");
	var mask_graphics_58 = new cjs.Graphics().p("EAwIAJ9IAAseILuAAIAAMeg");
	var mask_graphics_59 = new cjs.Graphics().p("EAwIAJtIAAseILtAAIAAMeg");
	var mask_graphics_60 = new cjs.Graphics().p("EAwIAJeIAAseILtAAIAAMeg");
	var mask_graphics_61 = new cjs.Graphics().p("EAwIAJQIAAseILtAAIAAMeg");
	var mask_graphics_62 = new cjs.Graphics().p("EAwIAJDIAAseILtAAIAAMeg");
	var mask_graphics_63 = new cjs.Graphics().p("EAwIAI4IAAseILtAAIAAMeg");
	var mask_graphics_64 = new cjs.Graphics().p("EAwIAIuIAAseILtAAIAAMeg");
	var mask_graphics_65 = new cjs.Graphics().p("EAwIAIlIAAseILtAAIAAMeg");
	var mask_graphics_66 = new cjs.Graphics().p("EAwIAIdIAAseILtAAIAAMeg");
	var mask_graphics_67 = new cjs.Graphics().p("EAwIAIWIAAseILtAAIAAMeg");
	var mask_graphics_68 = new cjs.Graphics().p("EAwIAIRIAAseILtAAIAAMeg");
	var mask_graphics_69 = new cjs.Graphics().p("EAwIAINIAAseILtAAIAAMeg");
	var mask_graphics_70 = new cjs.Graphics().p("EAwIAIKIAAseILtAAIAAMeg");
	var mask_graphics_71 = new cjs.Graphics().p("EAwIAIIIAAseILtAAIAAMeg");
	var mask_graphics_72 = new cjs.Graphics().p("EAwIAIIIAAseILtAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:383,y:81}).wait(1).to({graphics:mask_graphics_51,x:383,y:78.4}).wait(1).to({graphics:mask_graphics_52,x:383,y:76}).wait(1).to({graphics:mask_graphics_53,x:383,y:73.6}).wait(1).to({graphics:mask_graphics_54,x:383,y:71.4}).wait(1).to({graphics:mask_graphics_55,x:383,y:69.3}).wait(1).to({graphics:mask_graphics_56,x:383,y:67.3}).wait(1).to({graphics:mask_graphics_57,x:383,y:65.5}).wait(1).to({graphics:mask_graphics_58,x:383,y:63.7}).wait(1).to({graphics:mask_graphics_59,x:383,y:62.1}).wait(1).to({graphics:mask_graphics_60,x:383,y:60.6}).wait(1).to({graphics:mask_graphics_61,x:383,y:59.3}).wait(1).to({graphics:mask_graphics_62,x:383,y:58}).wait(1).to({graphics:mask_graphics_63,x:383,y:56.9}).wait(1).to({graphics:mask_graphics_64,x:383,y:55.8}).wait(1).to({graphics:mask_graphics_65,x:383,y:54.9}).wait(1).to({graphics:mask_graphics_66,x:383,y:54.2}).wait(1).to({graphics:mask_graphics_67,x:383,y:53.5}).wait(1).to({graphics:mask_graphics_68,x:383,y:53}).wait(1).to({graphics:mask_graphics_69,x:383,y:52.5}).wait(1).to({graphics:mask_graphics_70,x:383,y:52.2}).wait(1).to({graphics:mask_graphics_71,x:383,y:52.1}).wait(1).to({graphics:mask_graphics_72,x:383,y:52}).wait(13));

	// m
	this.instance = new lib.m23();
	this.instance.setTransform(730.7,41.3,1,1,0,0,0,32.6,36.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(13));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_39 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EA5LAGQIAAseIC/AAIAAMeg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EA5LAGPIAAseIC/AAIAAMeg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EA5LAGQIAAsfIC/AAIAAMfg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EA5LAGPIAAsdIC/AAIAAMdg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EA5LAGXIAAseIC/AAIAAMeg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EA5LAGmIAAseIC/AAIAAMeg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EA5LAGzIAAseIC/AAIAAMeg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EA5LAG/IAAseIC/AAIAAMeg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EA5LAHJIAAseIC/AAIAAMeg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EA5LAHRIAAseIC/AAIAAMeg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EA5LAHYIAAseIC/AAIAAMeg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EA5LAHeIAAseIC/AAIAAMeg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EA5LAHhIAAseIC/AAIAAMeg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EA5LAHkIAAseIC/AAIAAMeg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EA5LAHlIAAseIC/AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_1_graphics_39,x:385,y:-18}).wait(1).to({graphics:mask_1_graphics_40,x:385,y:-11.3}).wait(1).to({graphics:mask_1_graphics_41,x:385,y:-5}).wait(1).to({graphics:mask_1_graphics_42,x:385,y:1.1}).wait(1).to({graphics:mask_1_graphics_43,x:385,y:6.8}).wait(1).to({graphics:mask_1_graphics_44,x:385,y:12.2}).wait(1).to({graphics:mask_1_graphics_45,x:385,y:17.3}).wait(1).to({graphics:mask_1_graphics_46,x:385,y:22.1}).wait(1).to({graphics:mask_1_graphics_47,x:385,y:26.6}).wait(1).to({graphics:mask_1_graphics_48,x:385,y:30.8}).wait(1).to({graphics:mask_1_graphics_49,x:385,y:34.7}).wait(1).to({graphics:mask_1_graphics_50,x:385,y:38.3}).wait(1).to({graphics:mask_1_graphics_51,x:385,y:40.8}).wait(1).to({graphics:mask_1_graphics_52,x:385,y:42.2}).wait(1).to({graphics:mask_1_graphics_53,x:385,y:43.5}).wait(1).to({graphics:mask_1_graphics_54,x:385,y:44.7}).wait(1).to({graphics:mask_1_graphics_55,x:385,y:45.7}).wait(1).to({graphics:mask_1_graphics_56,x:385,y:46.6}).wait(1).to({graphics:mask_1_graphics_57,x:385,y:47.3}).wait(1).to({graphics:mask_1_graphics_58,x:385,y:47.8}).wait(1).to({graphics:mask_1_graphics_59,x:385,y:48.2}).wait(1).to({graphics:mask_1_graphics_60,x:385,y:48.4}).wait(1).to({graphics:mask_1_graphics_61,x:385,y:48.5}).wait(24));

	// m
	this.instance_1 = new lib.m22();
	this.instance_1.setTransform(730.7,101.3,1,1,0,0,0,32.6,36.1);
	this.instance_1._off = true;

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(24));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_39 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EA0gAGQIAAseIC+AAIAAMeg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EA0gAGPIAAseIC+AAIAAMeg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EA0gAGQIAAsfIC+AAIAAMfg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EA0gAGPIAAsdIC+AAIAAMdg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EA0gAGXIAAseIC+AAIAAMeg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EA0gAGmIAAseIC+AAIAAMeg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EA0gAGzIAAseIC+AAIAAMeg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EA0gAG/IAAseIC+AAIAAMeg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EA0gAHJIAAseIC+AAIAAMeg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EA0gAHRIAAseIC+AAIAAMeg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EA0gAHYIAAseIC+AAIAAMeg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EA0gAHeIAAseIC+AAIAAMeg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EA0gAHhIAAseIC+AAIAAMeg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EA0gAHkIAAseIC+AAIAAMeg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EA0gAHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_2_graphics_39,x:355,y:-18}).wait(1).to({graphics:mask_2_graphics_40,x:355,y:-11.3}).wait(1).to({graphics:mask_2_graphics_41,x:355,y:-5}).wait(1).to({graphics:mask_2_graphics_42,x:355,y:1.1}).wait(1).to({graphics:mask_2_graphics_43,x:355,y:6.8}).wait(1).to({graphics:mask_2_graphics_44,x:355,y:12.2}).wait(1).to({graphics:mask_2_graphics_45,x:355,y:17.3}).wait(1).to({graphics:mask_2_graphics_46,x:355,y:22.1}).wait(1).to({graphics:mask_2_graphics_47,x:355,y:26.6}).wait(1).to({graphics:mask_2_graphics_48,x:355,y:30.8}).wait(1).to({graphics:mask_2_graphics_49,x:355,y:34.7}).wait(1).to({graphics:mask_2_graphics_50,x:355,y:38.3}).wait(1).to({graphics:mask_2_graphics_51,x:355,y:40.8}).wait(1).to({graphics:mask_2_graphics_52,x:355,y:42.2}).wait(1).to({graphics:mask_2_graphics_53,x:355,y:43.5}).wait(1).to({graphics:mask_2_graphics_54,x:355,y:44.7}).wait(1).to({graphics:mask_2_graphics_55,x:355,y:45.7}).wait(1).to({graphics:mask_2_graphics_56,x:355,y:46.6}).wait(1).to({graphics:mask_2_graphics_57,x:355,y:47.3}).wait(1).to({graphics:mask_2_graphics_58,x:355,y:47.8}).wait(1).to({graphics:mask_2_graphics_59,x:355,y:48.2}).wait(1).to({graphics:mask_2_graphics_60,x:355,y:48.4}).wait(1).to({graphics:mask_2_graphics_61,x:355,y:48.5}).wait(24));

	// m
	this.instance_2 = new lib.m21();
	this.instance_2.setTransform(730.7,101.3,1,1,0,0,0,32.6,36.1);
	this.instance_2._off = true;

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(24));

	// Layer 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_43 = new cjs.Graphics().p("EAuyAIvIAAsdIJZAAIAAMdg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EAuhAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EAuQAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAuAAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAtwAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAtiAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAtUAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAtHAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EAs7AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAswAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EAsmAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EAsdAIvIAAsdIJXAAIAAMdg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EAsUAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAsMAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EAsFAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EAr/AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EAr5AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EAr1AIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EArxAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EAruAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EArsAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EArrAIvIAAsdIJYAAIAAMdg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EArrAIvIAAsdIJXAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_3_graphics_43,x:359.5,y:56}).wait(1).to({graphics:mask_3_graphics_44,x:357.7,y:56}).wait(1).to({graphics:mask_3_graphics_45,x:356,y:56}).wait(1).to({graphics:mask_3_graphics_46,x:354.4,y:56}).wait(1).to({graphics:mask_3_graphics_47,x:352.9,y:56}).wait(1).to({graphics:mask_3_graphics_48,x:351.4,y:56}).wait(1).to({graphics:mask_3_graphics_49,x:350.1,y:56}).wait(1).to({graphics:mask_3_graphics_50,x:348.8,y:56}).wait(1).to({graphics:mask_3_graphics_51,x:347.6,y:56}).wait(1).to({graphics:mask_3_graphics_52,x:346.5,y:56}).wait(1).to({graphics:mask_3_graphics_53,x:345.5,y:56}).wait(1).to({graphics:mask_3_graphics_54,x:344.5,y:56}).wait(1).to({graphics:mask_3_graphics_55,x:343.6,y:56}).wait(1).to({graphics:mask_3_graphics_56,x:342.8,y:56}).wait(1).to({graphics:mask_3_graphics_57,x:342.1,y:56}).wait(1).to({graphics:mask_3_graphics_58,x:341.5,y:56}).wait(1).to({graphics:mask_3_graphics_59,x:341,y:56}).wait(1).to({graphics:mask_3_graphics_60,x:340.5,y:56}).wait(1).to({graphics:mask_3_graphics_61,x:340.2,y:56}).wait(1).to({graphics:mask_3_graphics_62,x:339.9,y:56}).wait(1).to({graphics:mask_3_graphics_63,x:339.7,y:56}).wait(1).to({graphics:mask_3_graphics_64,x:339.5,y:56}).wait(1).to({graphics:mask_3_graphics_65,x:339.5,y:56}).wait(20));

	// a
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(640.5,61.3,1,1,0,0,0,26.6,36.1);
	this.instance_3._off = true;

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).wait(42));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_31 = new cjs.Graphics().p("EAq+AGPIAAsdIJXAAIAAMdg");
	var mask_4_graphics_32 = new cjs.Graphics().p("EAq9AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_33 = new cjs.Graphics().p("EAq9AGPIAAsdIJYAAIAAMdg");
	var mask_4_graphics_34 = new cjs.Graphics().p("EAq8AGQIAAsfIJYAAIAAMfg");
	var mask_4_graphics_35 = new cjs.Graphics().p("EAq8AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_36 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_37 = new cjs.Graphics().p("EAq7AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_38 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_39 = new cjs.Graphics().p("EAq7AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_40 = new cjs.Graphics().p("EAq6AGQIAAseIJYAAIAAMeg");
	var mask_4_graphics_41 = new cjs.Graphics().p("EAq6AGPIAAseIJYAAIAAMeg");
	var mask_4_graphics_42 = new cjs.Graphics().p("EAq6AGZIAAseIJYAAIAAMeg");
	var mask_4_graphics_43 = new cjs.Graphics().p("EAq6AGrIAAseIJYAAIAAMeg");
	var mask_4_graphics_44 = new cjs.Graphics().p("EAq5AG7IAAseIJYAAIAAMeg");
	var mask_4_graphics_45 = new cjs.Graphics().p("EAq5AHJIAAseIJYAAIAAMeg");
	var mask_4_graphics_46 = new cjs.Graphics().p("EAq5AHVIAAseIJYAAIAAMeg");
	var mask_4_graphics_47 = new cjs.Graphics().p("EAq5AHgIAAseIJYAAIAAMeg");
	var mask_4_graphics_48 = new cjs.Graphics().p("EAq5AHpIAAseIJYAAIAAMeg");
	var mask_4_graphics_49 = new cjs.Graphics().p("EAq5AHwIAAseIJYAAIAAMeg");
	var mask_4_graphics_50 = new cjs.Graphics().p("EAq5AH2IAAseIJYAAIAAMeg");
	var mask_4_graphics_51 = new cjs.Graphics().p("EAq5AH6IAAseIJYAAIAAMeg");
	var mask_4_graphics_52 = new cjs.Graphics().p("EAq5AH9IAAseIJYAAIAAMeg");
	var mask_4_graphics_53 = new cjs.Graphics().p("EAq5AH9IAAseIJXAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_4_graphics_31,x:335,y:-18}).wait(1).to({graphics:mask_4_graphics_32,x:335,y:-10.9}).wait(1).to({graphics:mask_4_graphics_33,x:334.9,y:-4.1}).wait(1).to({graphics:mask_4_graphics_34,x:334.9,y:2.3}).wait(1).to({graphics:mask_4_graphics_35,x:334.8,y:8.4}).wait(1).to({graphics:mask_4_graphics_36,x:334.8,y:14.2}).wait(1).to({graphics:mask_4_graphics_37,x:334.8,y:19.7}).wait(1).to({graphics:mask_4_graphics_38,x:334.7,y:24.8}).wait(1).to({graphics:mask_4_graphics_39,x:334.7,y:29.6}).wait(1).to({graphics:mask_4_graphics_40,x:334.7,y:34.1}).wait(1).to({graphics:mask_4_graphics_41,x:334.6,y:38.2}).wait(1).to({graphics:mask_4_graphics_42,x:334.6,y:41}).wait(1).to({graphics:mask_4_graphics_43,x:334.6,y:42.7}).wait(1).to({graphics:mask_4_graphics_44,x:334.6,y:44.3}).wait(1).to({graphics:mask_4_graphics_45,x:334.6,y:45.7}).wait(1).to({graphics:mask_4_graphics_46,x:334.6,y:47}).wait(1).to({graphics:mask_4_graphics_47,x:334.5,y:48}).wait(1).to({graphics:mask_4_graphics_48,x:334.5,y:48.9}).wait(1).to({graphics:mask_4_graphics_49,x:334.5,y:49.7}).wait(1).to({graphics:mask_4_graphics_50,x:334.5,y:50.3}).wait(1).to({graphics:mask_4_graphics_51,x:334.5,y:50.7}).wait(1).to({graphics:mask_4_graphics_52,x:334.5,y:50.9}).wait(1).to({graphics:mask_4_graphics_53,x:334.5,y:51}).wait(32));

	// a
	this.instance_4 = new lib.a2();
	this.instance_4.setTransform(640.5,91.3,1,1,0,0,0,26.6,36.1);
	this.instance_4._off = true;

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(32));

	// Layer 25 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_33 = new cjs.Graphics().p("EAi6AH9IAAseIH1AAIAAMeg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EAjLAH7IAAseIH0AAIAAMeg");
	var mask_5_graphics_35 = new cjs.Graphics().p("EAjaAH5IAAseIH0AAIAAMeg");
	var mask_5_graphics_36 = new cjs.Graphics().p("EAjpAH3IAAseIH0AAIAAMeg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EAj3AH1IAAseIH0AAIAAMeg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EAkEAHzIAAseIH0AAIAAMeg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EAkQAHyIAAseIH0AAIAAMeg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EAkcAHwIAAseIH0AAIAAMeg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EAknAHvIAAseIH0AAIAAMeg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EAkxAHtIAAseIH0AAIAAMeg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EAk7AHsIAAseIH0AAIAAMeg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EAlDAHrIAAseIH0AAIAAMeg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EAlLAHqIAAseIH0AAIAAMeg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EAlSAHpIAAseIH0AAIAAMeg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EAlZAHoIAAseIH0AAIAAMeg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EAlfAHnIAAseIH0AAIAAMeg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EAljAHmIAAseIH0AAIAAMeg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EAloAHmIAAseIH0AAIAAMeg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EAlrAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EAluAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EAlvAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EAlxAHlIAAseIH0AAIAAMeg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EAlxAHlIAAseIH0AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_5_graphics_33,x:273.5,y:51}).wait(1).to({graphics:mask_5_graphics_34,x:275.1,y:50.8}).wait(1).to({graphics:mask_5_graphics_35,x:276.7,y:50.6}).wait(1).to({graphics:mask_5_graphics_36,x:278.1,y:50.4}).wait(1).to({graphics:mask_5_graphics_37,x:279.5,y:50.2}).wait(1).to({graphics:mask_5_graphics_38,x:280.9,y:50}).wait(1).to({graphics:mask_5_graphics_39,x:282.1,y:49.8}).wait(1).to({graphics:mask_5_graphics_40,x:283.3,y:49.7}).wait(1).to({graphics:mask_5_graphics_41,x:284.4,y:49.5}).wait(1).to({graphics:mask_5_graphics_42,x:285.4,y:49.4}).wait(1).to({graphics:mask_5_graphics_43,x:286.3,y:49.2}).wait(1).to({graphics:mask_5_graphics_44,x:287.2,y:49.1}).wait(1).to({graphics:mask_5_graphics_45,x:288,y:49}).wait(1).to({graphics:mask_5_graphics_46,x:288.7,y:48.9}).wait(1).to({graphics:mask_5_graphics_47,x:289.3,y:48.8}).wait(1).to({graphics:mask_5_graphics_48,x:289.9,y:48.8}).wait(1).to({graphics:mask_5_graphics_49,x:290.4,y:48.7}).wait(1).to({graphics:mask_5_graphics_50,x:290.8,y:48.6}).wait(1).to({graphics:mask_5_graphics_51,x:291.1,y:48.6}).wait(1).to({graphics:mask_5_graphics_52,x:291.4,y:48.5}).wait(1).to({graphics:mask_5_graphics_53,x:291.6,y:48.5}).wait(1).to({graphics:mask_5_graphics_54,x:291.7,y:48.5}).wait(1).to({graphics:mask_5_graphics_55,x:291.7,y:48.5}).wait(30));

	// e
	this.instance_5 = new lib.e3();
	this.instance_5.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_5._off = true;

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(30));

	// Layer 12 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_33 = new cjs.Graphics().p("EAp8AH9IAAseIH1AAIAAMeg");
	var mask_6_graphics_34 = new cjs.Graphics().p("EApoAH7IAAseIH0AAIAAMeg");
	var mask_6_graphics_35 = new cjs.Graphics().p("EApVAH5IAAseIH0AAIAAMeg");
	var mask_6_graphics_36 = new cjs.Graphics().p("EApCAH3IAAseIH0AAIAAMeg");
	var mask_6_graphics_37 = new cjs.Graphics().p("EAowAH1IAAseIH0AAIAAMeg");
	var mask_6_graphics_38 = new cjs.Graphics().p("EAogAHzIAAseIH0AAIAAMeg");
	var mask_6_graphics_39 = new cjs.Graphics().p("EAoQAHyIAAseIH0AAIAAMeg");
	var mask_6_graphics_40 = new cjs.Graphics().p("EAoBAHwIAAseIH0AAIAAMeg");
	var mask_6_graphics_41 = new cjs.Graphics().p("EAn0AHvIAAseIH0AAIAAMeg");
	var mask_6_graphics_42 = new cjs.Graphics().p("EAnnAHtIAAseIH0AAIAAMeg");
	var mask_6_graphics_43 = new cjs.Graphics().p("EAnbAHsIAAseIH0AAIAAMeg");
	var mask_6_graphics_44 = new cjs.Graphics().p("EAnQAHrIAAseIH0AAIAAMeg");
	var mask_6_graphics_45 = new cjs.Graphics().p("EAnGAHqIAAseIH0AAIAAMeg");
	var mask_6_graphics_46 = new cjs.Graphics().p("EAm9AHpIAAseIH0AAIAAMeg");
	var mask_6_graphics_47 = new cjs.Graphics().p("EAm1AHoIAAseIH0AAIAAMeg");
	var mask_6_graphics_48 = new cjs.Graphics().p("EAmuAHnIAAseIH0AAIAAMeg");
	var mask_6_graphics_49 = new cjs.Graphics().p("EAmoAHmIAAseIH0AAIAAMeg");
	var mask_6_graphics_50 = new cjs.Graphics().p("EAmiAHmIAAseIH0AAIAAMeg");
	var mask_6_graphics_51 = new cjs.Graphics().p("EAmeAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_52 = new cjs.Graphics().p("EAmbAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_53 = new cjs.Graphics().p("EAmYAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_54 = new cjs.Graphics().p("EAmXAHlIAAseIH0AAIAAMeg");
	var mask_6_graphics_55 = new cjs.Graphics().p("EAmWAHlIAAseIH1AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_6_graphics_33,x:318.5,y:51}).wait(1).to({graphics:mask_6_graphics_34,x:316.5,y:50.8}).wait(1).to({graphics:mask_6_graphics_35,x:314.5,y:50.6}).wait(1).to({graphics:mask_6_graphics_36,x:312.7,y:50.4}).wait(1).to({graphics:mask_6_graphics_37,x:310.9,y:50.2}).wait(1).to({graphics:mask_6_graphics_38,x:309.2,y:50}).wait(1).to({graphics:mask_6_graphics_39,x:307.7,y:49.8}).wait(1).to({graphics:mask_6_graphics_40,x:306.2,y:49.7}).wait(1).to({graphics:mask_6_graphics_41,x:304.8,y:49.5}).wait(1).to({graphics:mask_6_graphics_42,x:303.5,y:49.4}).wait(1).to({graphics:mask_6_graphics_43,x:302.3,y:49.2}).wait(1).to({graphics:mask_6_graphics_44,x:301.2,y:49.1}).wait(1).to({graphics:mask_6_graphics_45,x:300.3,y:49}).wait(1).to({graphics:mask_6_graphics_46,x:299.3,y:48.9}).wait(1).to({graphics:mask_6_graphics_47,x:298.5,y:48.8}).wait(1).to({graphics:mask_6_graphics_48,x:297.8,y:48.8}).wait(1).to({graphics:mask_6_graphics_49,x:297.2,y:48.7}).wait(1).to({graphics:mask_6_graphics_50,x:296.7,y:48.6}).wait(1).to({graphics:mask_6_graphics_51,x:296.3,y:48.6}).wait(1).to({graphics:mask_6_graphics_52,x:295.9,y:48.5}).wait(1).to({graphics:mask_6_graphics_53,x:295.7,y:48.5}).wait(1).to({graphics:mask_6_graphics_54,x:295.5,y:48.5}).wait(1).to({graphics:mask_6_graphics_55,x:295.5,y:48.5}).wait(30));

	// e
	this.instance_6 = new lib.e2();
	this.instance_6.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_6._off = true;

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(30));

	// Layer 14 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_27 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_28 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_29 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_30 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_31 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_32 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_33 = new cjs.Graphics().p("EAoxAGQIAAseIC+AAIAAMeg");
	var mask_7_graphics_34 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_35 = new cjs.Graphics().p("EAoxAGPIAAseIC+AAIAAMeg");
	var mask_7_graphics_36 = new cjs.Graphics().p("EAoxAGQIAAsfIC+AAIAAMfg");
	var mask_7_graphics_37 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_38 = new cjs.Graphics().p("EAoxAGPIAAsdIC+AAIAAMdg");
	var mask_7_graphics_39 = new cjs.Graphics().p("EAoxAGXIAAseIC+AAIAAMeg");
	var mask_7_graphics_40 = new cjs.Graphics().p("EAoxAGmIAAseIC+AAIAAMeg");
	var mask_7_graphics_41 = new cjs.Graphics().p("EAoxAGzIAAseIC+AAIAAMeg");
	var mask_7_graphics_42 = new cjs.Graphics().p("EAoxAG/IAAseIC+AAIAAMeg");
	var mask_7_graphics_43 = new cjs.Graphics().p("EAoxAHJIAAseIC+AAIAAMeg");
	var mask_7_graphics_44 = new cjs.Graphics().p("EAoxAHRIAAseIC+AAIAAMeg");
	var mask_7_graphics_45 = new cjs.Graphics().p("EAoxAHYIAAseIC+AAIAAMeg");
	var mask_7_graphics_46 = new cjs.Graphics().p("EAoxAHeIAAseIC+AAIAAMeg");
	var mask_7_graphics_47 = new cjs.Graphics().p("EAoxAHhIAAseIC+AAIAAMeg");
	var mask_7_graphics_48 = new cjs.Graphics().p("EAoxAHkIAAseIC+AAIAAMeg");
	var mask_7_graphics_49 = new cjs.Graphics().p("EAoxAHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_7_graphics_27,x:280,y:-18}).wait(1).to({graphics:mask_7_graphics_28,x:280,y:-11.3}).wait(1).to({graphics:mask_7_graphics_29,x:280,y:-5}).wait(1).to({graphics:mask_7_graphics_30,x:280,y:1.1}).wait(1).to({graphics:mask_7_graphics_31,x:280,y:6.8}).wait(1).to({graphics:mask_7_graphics_32,x:280,y:12.2}).wait(1).to({graphics:mask_7_graphics_33,x:280,y:17.3}).wait(1).to({graphics:mask_7_graphics_34,x:280,y:22.1}).wait(1).to({graphics:mask_7_graphics_35,x:280,y:26.6}).wait(1).to({graphics:mask_7_graphics_36,x:280,y:30.8}).wait(1).to({graphics:mask_7_graphics_37,x:280,y:34.7}).wait(1).to({graphics:mask_7_graphics_38,x:280,y:38.3}).wait(1).to({graphics:mask_7_graphics_39,x:280,y:40.8}).wait(1).to({graphics:mask_7_graphics_40,x:280,y:42.2}).wait(1).to({graphics:mask_7_graphics_41,x:280,y:43.5}).wait(1).to({graphics:mask_7_graphics_42,x:280,y:44.7}).wait(1).to({graphics:mask_7_graphics_43,x:280,y:45.7}).wait(1).to({graphics:mask_7_graphics_44,x:280,y:46.6}).wait(1).to({graphics:mask_7_graphics_45,x:280,y:47.3}).wait(1).to({graphics:mask_7_graphics_46,x:280,y:47.8}).wait(1).to({graphics:mask_7_graphics_47,x:280,y:48.2}).wait(1).to({graphics:mask_7_graphics_48,x:280,y:48.4}).wait(1).to({graphics:mask_7_graphics_49,x:280,y:48.5}).wait(36));

	// e
	this.instance_7 = new lib.e();
	this.instance_7.setTransform(564.5,91.3,1,1,0,0,0,19.1,36.1);
	this.instance_7._off = true;

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(1)).wait(36));

	// Layer 16 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_29 = new cjs.Graphics().p("EAkAAGPIAAsdIInAAIAAMdg");
	var mask_8_graphics_30 = new cjs.Graphics().p("EAjrAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_31 = new cjs.Graphics().p("EAjXAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_32 = new cjs.Graphics().p("EAjEAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_33 = new cjs.Graphics().p("EAixAGQIAAseIImAAIAAMeg");
	var mask_8_graphics_34 = new cjs.Graphics().p("EAigAGPIAAseIImAAIAAMeg");
	var mask_8_graphics_35 = new cjs.Graphics().p("EAiPAGVIAAseIImAAIAAMeg");
	var mask_8_graphics_36 = new cjs.Graphics().p("EAiAAGfIAAseIImAAIAAMeg");
	var mask_8_graphics_37 = new cjs.Graphics().p("EAhyAGoIAAseIImAAIAAMeg");
	var mask_8_graphics_38 = new cjs.Graphics().p("EAhkAGwIAAseIImAAIAAMeg");
	var mask_8_graphics_39 = new cjs.Graphics().p("EAhYAG4IAAseIImAAIAAMeg");
	var mask_8_graphics_40 = new cjs.Graphics().p("EAhMAG/IAAseIImAAIAAMeg");
	var mask_8_graphics_41 = new cjs.Graphics().p("EAhCAHGIAAseIImAAIAAMeg");
	var mask_8_graphics_42 = new cjs.Graphics().p("EAg5AHLIAAseIImAAIAAMeg");
	var mask_8_graphics_43 = new cjs.Graphics().p("EAgwAHRIAAseIImAAIAAMeg");
	var mask_8_graphics_44 = new cjs.Graphics().p("EAgpAHVIAAseIImAAIAAMeg");
	var mask_8_graphics_45 = new cjs.Graphics().p("EAgiAHZIAAseIImAAIAAMeg");
	var mask_8_graphics_46 = new cjs.Graphics().p("EAgdAHdIAAseIImAAIAAMeg");
	var mask_8_graphics_47 = new cjs.Graphics().p("EAgYAHgIAAseIImAAIAAMeg");
	var mask_8_graphics_48 = new cjs.Graphics().p("EAgVAHiIAAseIImAAIAAMeg");
	var mask_8_graphics_49 = new cjs.Graphics().p("EAgSAHjIAAseIImAAIAAMeg");
	var mask_8_graphics_50 = new cjs.Graphics().p("EAgRAHkIAAseIImAAIAAMeg");
	var mask_8_graphics_51 = new cjs.Graphics().p("EAgRAHlIAAseIImAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_8_graphics_29,x:285.5,y:27}).wait(1).to({graphics:mask_8_graphics_30,x:283.4,y:29.7}).wait(1).to({graphics:mask_8_graphics_31,x:281.3,y:32.2}).wait(1).to({graphics:mask_8_graphics_32,x:279.4,y:34.6}).wait(1).to({graphics:mask_8_graphics_33,x:277.6,y:36.9}).wait(1).to({graphics:mask_8_graphics_34,x:275.8,y:39.1}).wait(1).to({graphics:mask_8_graphics_35,x:274.2,y:40.6}).wait(1).to({graphics:mask_8_graphics_36,x:272.7,y:41.5}).wait(1).to({graphics:mask_8_graphics_37,x:271.2,y:42.4}).wait(1).to({graphics:mask_8_graphics_38,x:269.9,y:43.3}).wait(1).to({graphics:mask_8_graphics_39,x:268.6,y:44}).wait(1).to({graphics:mask_8_graphics_40,x:267.5,y:44.8}).wait(1).to({graphics:mask_8_graphics_41,x:266.5,y:45.4}).wait(1).to({graphics:mask_8_graphics_42,x:265.5,y:46}).wait(1).to({graphics:mask_8_graphics_43,x:264.7,y:46.5}).wait(1).to({graphics:mask_8_graphics_44,x:263.9,y:47}).wait(1).to({graphics:mask_8_graphics_45,x:263.3,y:47.4}).wait(1).to({graphics:mask_8_graphics_46,x:262.7,y:47.7}).wait(1).to({graphics:mask_8_graphics_47,x:262.3,y:48}).wait(1).to({graphics:mask_8_graphics_48,x:261.9,y:48.2}).wait(1).to({graphics:mask_8_graphics_49,x:261.7,y:48.4}).wait(1).to({graphics:mask_8_graphics_50,x:261.5,y:48.5}).wait(1).to({graphics:mask_8_graphics_51,x:261.5,y:48.5}).wait(34));

	// t
	this.instance_8 = new lib.t();
	this.instance_8.setTransform(491.2,61.3,1,1,0,0,0,22.5,36.1);
	this.instance_8._off = true;

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(56));

	// Layer 18 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_22 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_23 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_24 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_25 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_26 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_27 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_28 = new cjs.Graphics().p("EAkFAGQIAAseIC/AAIAAMeg");
	var mask_9_graphics_29 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_30 = new cjs.Graphics().p("EAkFAGPIAAseIC/AAIAAMeg");
	var mask_9_graphics_31 = new cjs.Graphics().p("EAkFAGQIAAsfIC/AAIAAMfg");
	var mask_9_graphics_32 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_33 = new cjs.Graphics().p("EAkFAGPIAAsdIC/AAIAAMdg");
	var mask_9_graphics_34 = new cjs.Graphics().p("EAkFAGXIAAseIC/AAIAAMeg");
	var mask_9_graphics_35 = new cjs.Graphics().p("EAkFAGmIAAseIC/AAIAAMeg");
	var mask_9_graphics_36 = new cjs.Graphics().p("EAkFAGzIAAseIC/AAIAAMeg");
	var mask_9_graphics_37 = new cjs.Graphics().p("EAkFAG/IAAseIC/AAIAAMeg");
	var mask_9_graphics_38 = new cjs.Graphics().p("EAkFAHJIAAseIC/AAIAAMeg");
	var mask_9_graphics_39 = new cjs.Graphics().p("EAkFAHRIAAseIC/AAIAAMeg");
	var mask_9_graphics_40 = new cjs.Graphics().p("EAkFAHYIAAseIC/AAIAAMeg");
	var mask_9_graphics_41 = new cjs.Graphics().p("EAkFAHeIAAseIC/AAIAAMeg");
	var mask_9_graphics_42 = new cjs.Graphics().p("EAkFAHhIAAseIC/AAIAAMeg");
	var mask_9_graphics_43 = new cjs.Graphics().p("EAkFAHkIAAseIC/AAIAAMeg");
	var mask_9_graphics_44 = new cjs.Graphics().p("EAkFAHlIAAseIC/AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_9_graphics_22,x:250,y:-18}).wait(1).to({graphics:mask_9_graphics_23,x:250,y:-11.3}).wait(1).to({graphics:mask_9_graphics_24,x:250,y:-5}).wait(1).to({graphics:mask_9_graphics_25,x:250,y:1.1}).wait(1).to({graphics:mask_9_graphics_26,x:250,y:6.8}).wait(1).to({graphics:mask_9_graphics_27,x:250,y:12.2}).wait(1).to({graphics:mask_9_graphics_28,x:250,y:17.3}).wait(1).to({graphics:mask_9_graphics_29,x:250,y:22.1}).wait(1).to({graphics:mask_9_graphics_30,x:250,y:26.6}).wait(1).to({graphics:mask_9_graphics_31,x:250,y:30.8}).wait(1).to({graphics:mask_9_graphics_32,x:250,y:34.7}).wait(1).to({graphics:mask_9_graphics_33,x:250,y:38.3}).wait(1).to({graphics:mask_9_graphics_34,x:250,y:40.8}).wait(1).to({graphics:mask_9_graphics_35,x:250,y:42.2}).wait(1).to({graphics:mask_9_graphics_36,x:250,y:43.5}).wait(1).to({graphics:mask_9_graphics_37,x:250,y:44.7}).wait(1).to({graphics:mask_9_graphics_38,x:250,y:45.7}).wait(1).to({graphics:mask_9_graphics_39,x:250,y:46.6}).wait(1).to({graphics:mask_9_graphics_40,x:250,y:47.3}).wait(1).to({graphics:mask_9_graphics_41,x:250,y:47.8}).wait(1).to({graphics:mask_9_graphics_42,x:250,y:48.2}).wait(1).to({graphics:mask_9_graphics_43,x:250,y:48.4}).wait(1).to({graphics:mask_9_graphics_44,x:250,y:48.5}).wait(41));

	// t
	this.instance_9 = new lib.t22();
	this.instance_9.setTransform(491.2,101.3,1,1,0,0,0,22.5,36.1);
	this.instance_9._off = true;

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({y:61.3},22,cjs.Ease.get(0.96)).wait(41));

	// Layer 20 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AXSONIAAsgIK8AAIAAMgg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AXSMqIAAshIK8AAIAAMhg");
	var mask_10_graphics_28 = new cjs.Graphics().p("AXSMRIAAseIK8AAIAAMeg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AXSL5IAAseIK8AAIAAMeg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AXSLjIAAseIK8AAIAAMeg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AXSLNIAAseIK8AAIAAMeg");
	var mask_10_graphics_32 = new cjs.Graphics().p("AXSK5IAAseIK8AAIAAMeg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AXSKmIAAseIK8AAIAAMeg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AXSKUIAAseIK8AAIAAMeg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AXSKDIAAseIK8AAIAAMeg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AXSJzIAAseIK8AAIAAMeg");
	var mask_10_graphics_37 = new cjs.Graphics().p("AXSJkIAAseIK8AAIAAMeg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AXSJWIAAseIK8AAIAAMeg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AXSJKIAAseIK8AAIAAMeg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AXSI+IAAseIK8AAIAAMeg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AXSI0IAAseIK8AAIAAMeg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AXSIrIAAseIK8AAIAAMeg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AXSIiIAAseIK8AAIAAMeg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AXSIbIAAseIK8AAIAAMeg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AXSIVIAAseIK8AAIAAMeg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AXSIQIAAseIK8AAIAAMeg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AXSIMIAAseIK8AAIAAMeg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AXSIKIAAseIK8AAIAAMeg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AXSIIIAAseIK8AAIAAMeg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AXSIIIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:219,y:91}).wait(27).to({graphics:mask_10_graphics_27,x:219,y:81}).wait(1).to({graphics:mask_10_graphics_28,x:219,y:78.5}).wait(1).to({graphics:mask_10_graphics_29,x:219,y:76.2}).wait(1).to({graphics:mask_10_graphics_30,x:219,y:73.9}).wait(1).to({graphics:mask_10_graphics_31,x:219,y:71.8}).wait(1).to({graphics:mask_10_graphics_32,x:219,y:69.8}).wait(1).to({graphics:mask_10_graphics_33,x:219,y:67.8}).wait(1).to({graphics:mask_10_graphics_34,x:219,y:66}).wait(1).to({graphics:mask_10_graphics_35,x:219,y:64.3}).wait(1).to({graphics:mask_10_graphics_36,x:219,y:62.7}).wait(1).to({graphics:mask_10_graphics_37,x:219,y:61.3}).wait(1).to({graphics:mask_10_graphics_38,x:219,y:59.9}).wait(1).to({graphics:mask_10_graphics_39,x:219,y:58.6}).wait(1).to({graphics:mask_10_graphics_40,x:219,y:57.5}).wait(1).to({graphics:mask_10_graphics_41,x:219,y:56.4}).wait(1).to({graphics:mask_10_graphics_42,x:219,y:55.5}).wait(1).to({graphics:mask_10_graphics_43,x:219,y:54.7}).wait(1).to({graphics:mask_10_graphics_44,x:219,y:54}).wait(1).to({graphics:mask_10_graphics_45,x:219,y:53.4}).wait(1).to({graphics:mask_10_graphics_46,x:219,y:52.9}).wait(1).to({graphics:mask_10_graphics_47,x:219,y:52.5}).wait(1).to({graphics:mask_10_graphics_48,x:219,y:52.2}).wait(1).to({graphics:mask_10_graphics_49,x:219,y:52.1}).wait(1).to({graphics:mask_10_graphics_50,x:219,y:52}).wait(35));

	// m
	this.instance_10 = new lib.m2();
	this.instance_10.setTransform(403.7,60.6,1,1,0,0,0,24.5,36.1);

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({y:30.6},0).to({y:60.6},23,cjs.Ease.get(1)).wait(35));

	// Layer 22 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_18 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AatGQIAAseIC+AAIAAMeg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AatGPIAAseIC+AAIAAMeg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AatGQIAAsfIC+AAIAAMfg");
	var mask_11_graphics_28 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_29 = new cjs.Graphics().p("AatGPIAAsdIC+AAIAAMdg");
	var mask_11_graphics_30 = new cjs.Graphics().p("AatGXIAAseIC+AAIAAMeg");
	var mask_11_graphics_31 = new cjs.Graphics().p("AatGmIAAseIC+AAIAAMeg");
	var mask_11_graphics_32 = new cjs.Graphics().p("AatGzIAAseIC+AAIAAMeg");
	var mask_11_graphics_33 = new cjs.Graphics().p("AatG/IAAseIC+AAIAAMeg");
	var mask_11_graphics_34 = new cjs.Graphics().p("AatHJIAAseIC+AAIAAMeg");
	var mask_11_graphics_35 = new cjs.Graphics().p("AatHRIAAseIC+AAIAAMeg");
	var mask_11_graphics_36 = new cjs.Graphics().p("AatHYIAAseIC+AAIAAMeg");
	var mask_11_graphics_37 = new cjs.Graphics().p("AatHeIAAseIC+AAIAAMeg");
	var mask_11_graphics_38 = new cjs.Graphics().p("AatHhIAAseIC+AAIAAMeg");
	var mask_11_graphics_39 = new cjs.Graphics().p("AatHkIAAseIC+AAIAAMeg");
	var mask_11_graphics_40 = new cjs.Graphics().p("AatHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:190,y:-18}).wait(18).to({graphics:mask_11_graphics_18,x:190,y:-18}).wait(1).to({graphics:mask_11_graphics_19,x:190,y:-11.3}).wait(1).to({graphics:mask_11_graphics_20,x:190,y:-5}).wait(1).to({graphics:mask_11_graphics_21,x:190,y:1.1}).wait(1).to({graphics:mask_11_graphics_22,x:190,y:6.8}).wait(1).to({graphics:mask_11_graphics_23,x:190,y:12.2}).wait(1).to({graphics:mask_11_graphics_24,x:190,y:17.3}).wait(1).to({graphics:mask_11_graphics_25,x:190,y:22.1}).wait(1).to({graphics:mask_11_graphics_26,x:190,y:26.6}).wait(1).to({graphics:mask_11_graphics_27,x:190,y:30.8}).wait(1).to({graphics:mask_11_graphics_28,x:190,y:34.7}).wait(1).to({graphics:mask_11_graphics_29,x:190,y:38.3}).wait(1).to({graphics:mask_11_graphics_30,x:190,y:40.8}).wait(1).to({graphics:mask_11_graphics_31,x:190,y:42.2}).wait(1).to({graphics:mask_11_graphics_32,x:190,y:43.5}).wait(1).to({graphics:mask_11_graphics_33,x:190,y:44.7}).wait(1).to({graphics:mask_11_graphics_34,x:190,y:45.7}).wait(1).to({graphics:mask_11_graphics_35,x:190,y:46.6}).wait(1).to({graphics:mask_11_graphics_36,x:190,y:47.3}).wait(1).to({graphics:mask_11_graphics_37,x:190,y:47.8}).wait(1).to({graphics:mask_11_graphics_38,x:190,y:48.2}).wait(1).to({graphics:mask_11_graphics_39,x:190,y:48.4}).wait(1).to({graphics:mask_11_graphics_40,x:190,y:48.5}).wait(45));

	// m
	this.instance_11 = new lib.t5();
	this.instance_11.setTransform(402.5,60.6,1,1,0,0,0,38.3,36.1);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(45));

	// Layer 24 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_18 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_19 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_20 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_21 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_22 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_23 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_24 = new cjs.Graphics().p("AftGQIAAseIC+AAIAAMeg");
	var mask_12_graphics_25 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_26 = new cjs.Graphics().p("AftGPIAAseIC+AAIAAMeg");
	var mask_12_graphics_27 = new cjs.Graphics().p("AftGQIAAsfIC+AAIAAMfg");
	var mask_12_graphics_28 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_29 = new cjs.Graphics().p("AftGPIAAsdIC+AAIAAMdg");
	var mask_12_graphics_30 = new cjs.Graphics().p("AftGXIAAseIC+AAIAAMeg");
	var mask_12_graphics_31 = new cjs.Graphics().p("AftGmIAAseIC+AAIAAMeg");
	var mask_12_graphics_32 = new cjs.Graphics().p("AftGzIAAseIC+AAIAAMeg");
	var mask_12_graphics_33 = new cjs.Graphics().p("AftG/IAAseIC+AAIAAMeg");
	var mask_12_graphics_34 = new cjs.Graphics().p("AftHJIAAseIC+AAIAAMeg");
	var mask_12_graphics_35 = new cjs.Graphics().p("AftHRIAAseIC+AAIAAMeg");
	var mask_12_graphics_36 = new cjs.Graphics().p("AftHYIAAseIC+AAIAAMeg");
	var mask_12_graphics_37 = new cjs.Graphics().p("AftHeIAAseIC+AAIAAMeg");
	var mask_12_graphics_38 = new cjs.Graphics().p("AftHhIAAseIC+AAIAAMeg");
	var mask_12_graphics_39 = new cjs.Graphics().p("AftHkIAAseIC+AAIAAMeg");
	var mask_12_graphics_40 = new cjs.Graphics().p("AftHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:222,y:-18}).wait(18).to({graphics:mask_12_graphics_18,x:222,y:-18}).wait(1).to({graphics:mask_12_graphics_19,x:222,y:-11.3}).wait(1).to({graphics:mask_12_graphics_20,x:222,y:-5}).wait(1).to({graphics:mask_12_graphics_21,x:222,y:1.1}).wait(1).to({graphics:mask_12_graphics_22,x:222,y:6.8}).wait(1).to({graphics:mask_12_graphics_23,x:222,y:12.2}).wait(1).to({graphics:mask_12_graphics_24,x:222,y:17.3}).wait(1).to({graphics:mask_12_graphics_25,x:222,y:22.1}).wait(1).to({graphics:mask_12_graphics_26,x:222,y:26.6}).wait(1).to({graphics:mask_12_graphics_27,x:222,y:30.8}).wait(1).to({graphics:mask_12_graphics_28,x:222,y:34.7}).wait(1).to({graphics:mask_12_graphics_29,x:222,y:38.3}).wait(1).to({graphics:mask_12_graphics_30,x:222,y:40.8}).wait(1).to({graphics:mask_12_graphics_31,x:222,y:42.2}).wait(1).to({graphics:mask_12_graphics_32,x:222,y:43.5}).wait(1).to({graphics:mask_12_graphics_33,x:222,y:44.7}).wait(1).to({graphics:mask_12_graphics_34,x:222,y:45.7}).wait(1).to({graphics:mask_12_graphics_35,x:222,y:46.6}).wait(1).to({graphics:mask_12_graphics_36,x:222,y:47.3}).wait(1).to({graphics:mask_12_graphics_37,x:222,y:47.8}).wait(1).to({graphics:mask_12_graphics_38,x:222,y:48.2}).wait(1).to({graphics:mask_12_graphics_39,x:222,y:48.4}).wait(1).to({graphics:mask_12_graphics_40,x:222,y:48.5}).wait(45));

	// m
	this.instance_12 = new lib.t5();
	this.instance_12.setTransform(402.5,60.6,1,1,0,0,0,38.3,36.1);

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(18).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(45));

	// Layer 26 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("ATXJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_25 = new cjs.Graphics().p("ATXJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_26 = new cjs.Graphics().p("ATRJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_27 = new cjs.Graphics().p("ATLJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_28 = new cjs.Graphics().p("ATFJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_29 = new cjs.Graphics().p("AS+JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_30 = new cjs.Graphics().p("AS4JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_31 = new cjs.Graphics().p("ASyJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_32 = new cjs.Graphics().p("ASrJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_33 = new cjs.Graphics().p("ASlJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_34 = new cjs.Graphics().p("ASfJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_35 = new cjs.Graphics().p("ASYJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_36 = new cjs.Graphics().p("ASSJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_37 = new cjs.Graphics().p("ASMJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_38 = new cjs.Graphics().p("ASGJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_39 = new cjs.Graphics().p("AR/JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_40 = new cjs.Graphics().p("AR5JiIAAseIK8AAIAAMeg");
	var mask_13_graphics_41 = new cjs.Graphics().p("ARzJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_42 = new cjs.Graphics().p("ARsJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_43 = new cjs.Graphics().p("ARmJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_44 = new cjs.Graphics().p("ARgJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_45 = new cjs.Graphics().p("ARZJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_46 = new cjs.Graphics().p("ARTJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_47 = new cjs.Graphics().p("ARNJiIAAseIK8AAIAAMeg");
	var mask_13_graphics_48 = new cjs.Graphics().p("ARGJiIAAseIK9AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:194,y:61}).wait(25).to({graphics:mask_13_graphics_25,x:194,y:61}).wait(1).to({graphics:mask_13_graphics_26,x:193.4,y:61}).wait(1).to({graphics:mask_13_graphics_27,x:192.7,y:61}).wait(1).to({graphics:mask_13_graphics_28,x:192.1,y:61}).wait(1).to({graphics:mask_13_graphics_29,x:191.5,y:61}).wait(1).to({graphics:mask_13_graphics_30,x:190.8,y:61}).wait(1).to({graphics:mask_13_graphics_31,x:190.2,y:61}).wait(1).to({graphics:mask_13_graphics_32,x:189.6,y:61}).wait(1).to({graphics:mask_13_graphics_33,x:189,y:61}).wait(1).to({graphics:mask_13_graphics_34,x:188.3,y:61}).wait(1).to({graphics:mask_13_graphics_35,x:187.7,y:61}).wait(1).to({graphics:mask_13_graphics_36,x:187.1,y:61}).wait(1).to({graphics:mask_13_graphics_37,x:186.4,y:61}).wait(1).to({graphics:mask_13_graphics_38,x:185.8,y:61}).wait(1).to({graphics:mask_13_graphics_39,x:185.2,y:61}).wait(1).to({graphics:mask_13_graphics_40,x:184.5,y:61}).wait(1).to({graphics:mask_13_graphics_41,x:183.9,y:61}).wait(1).to({graphics:mask_13_graphics_42,x:183.3,y:61}).wait(1).to({graphics:mask_13_graphics_43,x:182.7,y:61}).wait(1).to({graphics:mask_13_graphics_44,x:182,y:61}).wait(1).to({graphics:mask_13_graphics_45,x:181.4,y:61}).wait(1).to({graphics:mask_13_graphics_46,x:180.8,y:61}).wait(1).to({graphics:mask_13_graphics_47,x:180.1,y:61}).wait(1).to({graphics:mask_13_graphics_48,x:179.5,y:61}).wait(37));

	// a
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGBBIAoiBIC8AAIApCBg");
	this.shape.setTransform(302.1,81.3);

	this.shape.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// Layer 28 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("APOGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_13 = new cjs.Graphics().p("APOGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_14 = new cjs.Graphics().p("APPGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_15 = new cjs.Graphics().p("APPGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_16 = new cjs.Graphics().p("APQGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_17 = new cjs.Graphics().p("APQGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_18 = new cjs.Graphics().p("APQGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_19 = new cjs.Graphics().p("APQGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_20 = new cjs.Graphics().p("APRGPIAAsdIK8AAIAAMdg");
	var mask_14_graphics_21 = new cjs.Graphics().p("APRGQIAAsfIK8AAIAAMfg");
	var mask_14_graphics_22 = new cjs.Graphics().p("APRGPIAAsdIK8AAIAAMdg");
	var mask_14_graphics_23 = new cjs.Graphics().p("APSGQIAAseIK8AAIAAMeg");
	var mask_14_graphics_24 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_25 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_26 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_27 = new cjs.Graphics().p("APSGPIAAseIK8AAIAAMeg");
	var mask_14_graphics_28 = new cjs.Graphics().p("APTGRIAAseIK8AAIAAMeg");
	var mask_14_graphics_29 = new cjs.Graphics().p("APTGeIAAseIK8AAIAAMeg");
	var mask_14_graphics_30 = new cjs.Graphics().p("APTGqIAAseIK8AAIAAMeg");
	var mask_14_graphics_31 = new cjs.Graphics().p("APTG1IAAseIK8AAIAAMeg");
	var mask_14_graphics_32 = new cjs.Graphics().p("APTG/IAAseIK8AAIAAMeg");
	var mask_14_graphics_33 = new cjs.Graphics().p("APTHIIAAseIK8AAIAAMeg");
	var mask_14_graphics_34 = new cjs.Graphics().p("APTHQIAAseIK8AAIAAMeg");
	var mask_14_graphics_35 = new cjs.Graphics().p("APTHWIAAseIK8AAIAAMeg");
	var mask_14_graphics_36 = new cjs.Graphics().p("APTHbIAAseIK8AAIAAMeg");
	var mask_14_graphics_37 = new cjs.Graphics().p("APTHfIAAseIK8AAIAAMeg");
	var mask_14_graphics_38 = new cjs.Graphics().p("APTHiIAAseIK8AAIAAMeg");
	var mask_14_graphics_39 = new cjs.Graphics().p("APTHkIAAseIK8AAIAAMeg");
	var mask_14_graphics_40 = new cjs.Graphics().p("APUHlIAAseIK7AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:167.5,y:-28}).wait(13).to({graphics:mask_14_graphics_13,x:167.5,y:-28}).wait(1).to({graphics:mask_14_graphics_14,x:167.5,y:-21.8}).wait(1).to({graphics:mask_14_graphics_15,x:167.6,y:-15.9}).wait(1).to({graphics:mask_14_graphics_16,x:167.6,y:-10.2}).wait(1).to({graphics:mask_14_graphics_17,x:167.6,y:-4.7}).wait(1).to({graphics:mask_14_graphics_18,x:167.7,y:0.6}).wait(1).to({graphics:mask_14_graphics_19,x:167.7,y:5.6}).wait(1).to({graphics:mask_14_graphics_20,x:167.7,y:10.4}).wait(1).to({graphics:mask_14_graphics_21,x:167.8,y:14.9}).wait(1).to({graphics:mask_14_graphics_22,x:167.8,y:19.2}).wait(1).to({graphics:mask_14_graphics_23,x:167.8,y:23.3}).wait(1).to({graphics:mask_14_graphics_24,x:167.8,y:27.2}).wait(1).to({graphics:mask_14_graphics_25,x:167.8,y:30.8}).wait(1).to({graphics:mask_14_graphics_26,x:167.9,y:34.1}).wait(1).to({graphics:mask_14_graphics_27,x:167.9,y:37.3}).wait(1).to({graphics:mask_14_graphics_28,x:167.9,y:40.1}).wait(1).to({graphics:mask_14_graphics_29,x:167.9,y:41.4}).wait(1).to({graphics:mask_14_graphics_30,x:167.9,y:42.7}).wait(1).to({graphics:mask_14_graphics_31,x:167.9,y:43.8}).wait(1).to({graphics:mask_14_graphics_32,x:168,y:44.8}).wait(1).to({graphics:mask_14_graphics_33,x:168,y:45.6}).wait(1).to({graphics:mask_14_graphics_34,x:168,y:46.4}).wait(1).to({graphics:mask_14_graphics_35,x:168,y:47}).wait(1).to({graphics:mask_14_graphics_36,x:168,y:47.6}).wait(1).to({graphics:mask_14_graphics_37,x:168,y:48}).wait(1).to({graphics:mask_14_graphics_38,x:168,y:48.3}).wait(1).to({graphics:mask_14_graphics_39,x:168,y:48.4}).wait(1).to({graphics:mask_14_graphics_40,x:168,y:48.5}).wait(45));

	// a
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");
	this.shape_1.setTransform(302.2,60.6);

	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(302.2,100.6);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(302.2,60.6);

	this.shape_1.mask = this.instance_13.mask = this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_14}]},27).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({_off:true,y:60.6},27,cjs.Ease.get(1)).wait(45));

	// Layer 21 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_0 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_21 = new cjs.Graphics().p("AJnHlIAAseIHBAAIAAMeg");
	var mask_15_graphics_22 = new cjs.Graphics().p("AJzHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_23 = new cjs.Graphics().p("AKAHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_24 = new cjs.Graphics().p("AKLHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_25 = new cjs.Graphics().p("AKWHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_26 = new cjs.Graphics().p("AKhHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_27 = new cjs.Graphics().p("AKrHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_28 = new cjs.Graphics().p("AK0HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_29 = new cjs.Graphics().p("AK9HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_30 = new cjs.Graphics().p("ALFHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_31 = new cjs.Graphics().p("ALMHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_32 = new cjs.Graphics().p("ALTHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_33 = new cjs.Graphics().p("ALaHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_34 = new cjs.Graphics().p("ALfHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_35 = new cjs.Graphics().p("ALkHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_36 = new cjs.Graphics().p("ALpHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_37 = new cjs.Graphics().p("ALtHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_38 = new cjs.Graphics().p("ALwHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_39 = new cjs.Graphics().p("ALzHlIAAseIHCAAIAAMeg");
	var mask_15_graphics_40 = new cjs.Graphics().p("AL1HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_41 = new cjs.Graphics().p("AL2HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_42 = new cjs.Graphics().p("AL3HlIAAseIHCAAIAAMeg");
	var mask_15_graphics_43 = new cjs.Graphics().p("AL4HlIAAseIHCAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:mask_15_graphics_0,x:144,y:48.5}).wait(21).to({graphics:mask_15_graphics_21,x:106.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_22,x:107.8,y:48.5}).wait(1).to({graphics:mask_15_graphics_23,x:109,y:48.5}).wait(1).to({graphics:mask_15_graphics_24,x:110.2,y:48.5}).wait(1).to({graphics:mask_15_graphics_25,x:111.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_26,x:112.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_27,x:113.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_28,x:114.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_29,x:115.1,y:48.5}).wait(1).to({graphics:mask_15_graphics_30,x:115.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_31,x:116.7,y:48.5}).wait(1).to({graphics:mask_15_graphics_32,x:117.4,y:48.5}).wait(1).to({graphics:mask_15_graphics_33,x:118,y:48.5}).wait(1).to({graphics:mask_15_graphics_34,x:118.6,y:48.5}).wait(1).to({graphics:mask_15_graphics_35,x:119.1,y:48.5}).wait(1).to({graphics:mask_15_graphics_36,x:119.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_37,x:119.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_38,x:120.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_39,x:120.5,y:48.5}).wait(1).to({graphics:mask_15_graphics_40,x:120.7,y:48.5}).wait(1).to({graphics:mask_15_graphics_41,x:120.9,y:48.5}).wait(1).to({graphics:mask_15_graphics_42,x:121,y:48.5}).wait(1).to({graphics:mask_15_graphics_43,x:121,y:48.5}).wait(42));

	// e
	this.instance_15 = new lib.t3();
	this.instance_15.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_16 = new lib.t4();
	this.instance_16.setTransform(219,90.6,1,1,0,0,0,22,36.1);
	this.instance_16._off = true;

	this.instance_15.mask = this.instance_16.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},21).to({state:[{t:this.instance_16}]},22).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(21).to({_off:false},0).to({y:60.6},22,cjs.Ease.get(1)).wait(42));

	// Layer 30 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_0 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_21 = new cjs.Graphics().p("APeHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_22 = new cjs.Graphics().p("APQHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_23 = new cjs.Graphics().p("APDHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_24 = new cjs.Graphics().p("AO3HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_25 = new cjs.Graphics().p("AOsHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_26 = new cjs.Graphics().p("AOhHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_27 = new cjs.Graphics().p("AOXHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_28 = new cjs.Graphics().p("AONHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_29 = new cjs.Graphics().p("AOEHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_30 = new cjs.Graphics().p("AN8HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_31 = new cjs.Graphics().p("AN0HlIAAseIHCAAIAAMeg");
	var mask_16_graphics_32 = new cjs.Graphics().p("ANtHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_33 = new cjs.Graphics().p("ANmHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_34 = new cjs.Graphics().p("ANhHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_35 = new cjs.Graphics().p("ANbHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_36 = new cjs.Graphics().p("ANXHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_37 = new cjs.Graphics().p("ANTHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_38 = new cjs.Graphics().p("ANPHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_39 = new cjs.Graphics().p("ANMHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_40 = new cjs.Graphics().p("ANKHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_41 = new cjs.Graphics().p("ANJHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_42 = new cjs.Graphics().p("ANIHlIAAseIHCAAIAAMeg");
	var mask_16_graphics_43 = new cjs.Graphics().p("ANIHlIAAseIHBAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:mask_16_graphics_0,x:144,y:48.5}).wait(21).to({graphics:mask_16_graphics_21,x:144,y:48.5}).wait(1).to({graphics:mask_16_graphics_22,x:142.7,y:48.5}).wait(1).to({graphics:mask_16_graphics_23,x:141.4,y:48.5}).wait(1).to({graphics:mask_16_graphics_24,x:140.2,y:48.5}).wait(1).to({graphics:mask_16_graphics_25,x:139,y:48.5}).wait(1).to({graphics:mask_16_graphics_26,x:138,y:48.5}).wait(1).to({graphics:mask_16_graphics_27,x:136.9,y:48.5}).wait(1).to({graphics:mask_16_graphics_28,x:136,y:48.5}).wait(1).to({graphics:mask_16_graphics_29,x:135.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_30,x:134.2,y:48.5}).wait(1).to({graphics:mask_16_graphics_31,x:133.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_32,x:132.7,y:48.5}).wait(1).to({graphics:mask_16_graphics_33,x:132.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_34,x:131.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_35,x:131,y:48.5}).wait(1).to({graphics:mask_16_graphics_36,x:130.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_37,x:130.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_38,x:129.8,y:48.5}).wait(1).to({graphics:mask_16_graphics_39,x:129.5,y:48.5}).wait(1).to({graphics:mask_16_graphics_40,x:129.3,y:48.5}).wait(1).to({graphics:mask_16_graphics_41,x:129.1,y:48.5}).wait(1).to({graphics:mask_16_graphics_42,x:129,y:48.5}).wait(1).to({graphics:mask_16_graphics_43,x:129,y:48.5}).wait(42));

	// e
	this.instance_17 = new lib.t3();
	this.instance_17.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_18 = new lib.t6();
	this.instance_18.setTransform(219,90.6,1,1,0,0,0,22,36.1);
	this.instance_18._off = true;

	this.instance_17.mask = this.instance_18.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18}]},21).to({state:[{t:this.instance_18}]},22).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({_off:false},0).to({y:60.6},22,cjs.Ease.get(1)).wait(42));

	// Layer 32 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_0 = new cjs.Graphics().p("ANrGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_9 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_10 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_11 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_12 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_13 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_14 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_15 = new cjs.Graphics().p("ANwGQIAAseIC+AAIAAMeg");
	var mask_17_graphics_16 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_17 = new cjs.Graphics().p("ANwGPIAAseIC+AAIAAMeg");
	var mask_17_graphics_18 = new cjs.Graphics().p("ANwGQIAAsfIC+AAIAAMfg");
	var mask_17_graphics_19 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_20 = new cjs.Graphics().p("ANwGPIAAsdIC+AAIAAMdg");
	var mask_17_graphics_21 = new cjs.Graphics().p("ANwGXIAAseIC+AAIAAMeg");
	var mask_17_graphics_22 = new cjs.Graphics().p("ANwGmIAAseIC+AAIAAMeg");
	var mask_17_graphics_23 = new cjs.Graphics().p("ANwGzIAAseIC+AAIAAMeg");
	var mask_17_graphics_24 = new cjs.Graphics().p("ANwG/IAAseIC+AAIAAMeg");
	var mask_17_graphics_25 = new cjs.Graphics().p("ANwHJIAAseIC+AAIAAMeg");
	var mask_17_graphics_26 = new cjs.Graphics().p("ANwHRIAAseIC+AAIAAMeg");
	var mask_17_graphics_27 = new cjs.Graphics().p("ANwHYIAAseIC+AAIAAMeg");
	var mask_17_graphics_28 = new cjs.Graphics().p("ANwHeIAAseIC+AAIAAMeg");
	var mask_17_graphics_29 = new cjs.Graphics().p("ANwHhIAAseIC+AAIAAMeg");
	var mask_17_graphics_30 = new cjs.Graphics().p("ANwHkIAAseIC+AAIAAMeg");
	var mask_17_graphics_31 = new cjs.Graphics().p("ANwHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:mask_17_graphics_0,x:106.5,y:-18}).wait(9).to({graphics:mask_17_graphics_9,x:107,y:-18}).wait(1).to({graphics:mask_17_graphics_10,x:107,y:-11.3}).wait(1).to({graphics:mask_17_graphics_11,x:107,y:-5}).wait(1).to({graphics:mask_17_graphics_12,x:107,y:1.1}).wait(1).to({graphics:mask_17_graphics_13,x:107,y:6.8}).wait(1).to({graphics:mask_17_graphics_14,x:107,y:12.2}).wait(1).to({graphics:mask_17_graphics_15,x:107,y:17.3}).wait(1).to({graphics:mask_17_graphics_16,x:107,y:22.1}).wait(1).to({graphics:mask_17_graphics_17,x:107,y:26.6}).wait(1).to({graphics:mask_17_graphics_18,x:107,y:30.8}).wait(1).to({graphics:mask_17_graphics_19,x:107,y:34.7}).wait(1).to({graphics:mask_17_graphics_20,x:107,y:38.3}).wait(1).to({graphics:mask_17_graphics_21,x:107,y:40.8}).wait(1).to({graphics:mask_17_graphics_22,x:107,y:42.2}).wait(1).to({graphics:mask_17_graphics_23,x:107,y:43.5}).wait(1).to({graphics:mask_17_graphics_24,x:107,y:44.7}).wait(1).to({graphics:mask_17_graphics_25,x:107,y:45.7}).wait(1).to({graphics:mask_17_graphics_26,x:107,y:46.6}).wait(1).to({graphics:mask_17_graphics_27,x:107,y:47.3}).wait(1).to({graphics:mask_17_graphics_28,x:107,y:47.8}).wait(1).to({graphics:mask_17_graphics_29,x:107,y:48.2}).wait(1).to({graphics:mask_17_graphics_30,x:107,y:48.4}).wait(1).to({graphics:mask_17_graphics_31,x:107,y:48.5}).wait(54));

	// e
	this.instance_19 = new lib.t3();
	this.instance_19.setTransform(219,60.6,1,1,0,0,0,22,36.1);

	this.instance_19.mask = mask_17;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(54));

	// Layer 34 (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_0 = new cjs.Graphics().p("ACnGQIAAsfIK8AAIAAMfg");
	var mask_18_graphics_24 = new cjs.Graphics().p("ACnGQIAAsfIK8AAIAAMfg");
	var mask_18_graphics_25 = new cjs.Graphics().p("ACwGPIAAseIK8AAIAAMeg");
	var mask_18_graphics_26 = new cjs.Graphics().p("AC4GQIAAseIK8AAIAAMeg");
	var mask_18_graphics_27 = new cjs.Graphics().p("ADAGQIAAseIK8AAIAAMeg");
	var mask_18_graphics_28 = new cjs.Graphics().p("ADIGQIAAseIK8AAIAAMeg");
	var mask_18_graphics_29 = new cjs.Graphics().p("ADPGZIAAseIK8AAIAAMeg");
	var mask_18_graphics_30 = new cjs.Graphics().p("ADWGiIAAseIK8AAIAAMeg");
	var mask_18_graphics_31 = new cjs.Graphics().p("ADdGqIAAseIK8AAIAAMeg");
	var mask_18_graphics_32 = new cjs.Graphics().p("ADjGxIAAseIK8AAIAAMeg");
	var mask_18_graphics_33 = new cjs.Graphics().p("ADoG4IAAseIK8AAIAAMeg");
	var mask_18_graphics_34 = new cjs.Graphics().p("ADtG+IAAseIK8AAIAAMeg");
	var mask_18_graphics_35 = new cjs.Graphics().p("ADyHEIAAseIK8AAIAAMeg");
	var mask_18_graphics_36 = new cjs.Graphics().p("AD2HKIAAseIK8AAIAAMeg");
	var mask_18_graphics_37 = new cjs.Graphics().p("AD6HPIAAseIK8AAIAAMeg");
	var mask_18_graphics_38 = new cjs.Graphics().p("AD+HTIAAseIK8AAIAAMeg");
	var mask_18_graphics_39 = new cjs.Graphics().p("AEBHXIAAseIK8AAIAAMeg");
	var mask_18_graphics_40 = new cjs.Graphics().p("AEEHaIAAseIK8AAIAAMeg");
	var mask_18_graphics_41 = new cjs.Graphics().p("AEGHdIAAseIK8AAIAAMeg");
	var mask_18_graphics_42 = new cjs.Graphics().p("AEIHfIAAseIK8AAIAAMeg");
	var mask_18_graphics_43 = new cjs.Graphics().p("AEJHhIAAseIK8AAIAAMeg");
	var mask_18_graphics_44 = new cjs.Graphics().p("AEKHiIAAseIK8AAIAAMeg");
	var mask_18_graphics_45 = new cjs.Graphics().p("AELHjIAAseIK8AAIAAMeg");
	var mask_18_graphics_46 = new cjs.Graphics().p("AELHjIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:mask_18_graphics_0,x:86.7,y:32}).wait(24).to({graphics:mask_18_graphics_24,x:86.7,y:32}).wait(1).to({graphics:mask_18_graphics_25,x:87.6,y:34.2}).wait(1).to({graphics:mask_18_graphics_26,x:88.5,y:36.3}).wait(1).to({graphics:mask_18_graphics_27,x:89.3,y:38.3}).wait(1).to({graphics:mask_18_graphics_28,x:90.1,y:40.1}).wait(1).to({graphics:mask_18_graphics_29,x:90.8,y:41}).wait(1).to({graphics:mask_18_graphics_30,x:91.5,y:41.8}).wait(1).to({graphics:mask_18_graphics_31,x:92.1,y:42.6}).wait(1).to({graphics:mask_18_graphics_32,x:92.7,y:43.4}).wait(1).to({graphics:mask_18_graphics_33,x:93.3,y:44.1}).wait(1).to({graphics:mask_18_graphics_34,x:93.8,y:44.7}).wait(1).to({graphics:mask_18_graphics_35,x:94.2,y:45.3}).wait(1).to({graphics:mask_18_graphics_36,x:94.7,y:45.8}).wait(1).to({graphics:mask_18_graphics_37,x:95.1,y:46.3}).wait(1).to({graphics:mask_18_graphics_38,x:95.4,y:46.7}).wait(1).to({graphics:mask_18_graphics_39,x:95.7,y:47.1}).wait(1).to({graphics:mask_18_graphics_40,x:96,y:47.5}).wait(1).to({graphics:mask_18_graphics_41,x:96.2,y:47.7}).wait(1).to({graphics:mask_18_graphics_42,x:96.4,y:48}).wait(1).to({graphics:mask_18_graphics_43,x:96.6,y:48.1}).wait(1).to({graphics:mask_18_graphics_44,x:96.7,y:48.3}).wait(1).to({graphics:mask_18_graphics_45,x:96.7,y:48.3}).wait(1).to({graphics:mask_18_graphics_46,x:96.7,y:48.4}).wait(39));

	// r
	this.instance_20 = new lib.r3();
	this.instance_20.setTransform(149.3,84.9,1,1,0,0,0,16.1,11.7);

	this.instance_20.mask = mask_18;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(85));

	// Layer 36 (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_0 = new cjs.Graphics().p("AH5GQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_15 = new cjs.Graphics().p("AH5GQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_16 = new cjs.Graphics().p("AHjGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_17 = new cjs.Graphics().p("AHPGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_18 = new cjs.Graphics().p("AG8GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_19 = new cjs.Graphics().p("AGqGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_20 = new cjs.Graphics().p("AGZGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_21 = new cjs.Graphics().p("AGJGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_22 = new cjs.Graphics().p("AF5GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_23 = new cjs.Graphics().p("AFrGPIAAsdIK8AAIAAMdg");
	var mask_19_graphics_24 = new cjs.Graphics().p("AFeGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_25 = new cjs.Graphics().p("AFSGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_26 = new cjs.Graphics().p("AFGGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_27 = new cjs.Graphics().p("AE8GPIAAseIK8AAIAAMeg");
	var mask_19_graphics_28 = new cjs.Graphics().p("AEzGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_29 = new cjs.Graphics().p("AEqGQIAAsfIK8AAIAAMfg");
	var mask_19_graphics_30 = new cjs.Graphics().p("AEjGPIAAsdIK8AAIAAMdg");
	var mask_19_graphics_31 = new cjs.Graphics().p("AEdGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_32 = new cjs.Graphics().p("AEXGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_33 = new cjs.Graphics().p("AETGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_34 = new cjs.Graphics().p("AEPGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_35 = new cjs.Graphics().p("AENGPIAAseIK8AAIAAMeg");
	var mask_19_graphics_36 = new cjs.Graphics().p("AELGQIAAseIK8AAIAAMeg");
	var mask_19_graphics_37 = new cjs.Graphics().p("AELGQIAAseIK8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:mask_19_graphics_0,x:120.5,y:32}).wait(15).to({graphics:mask_19_graphics_15,x:120.5,y:32}).wait(1).to({graphics:mask_19_graphics_16,x:118.4,y:32.4}).wait(1).to({graphics:mask_19_graphics_17,x:116.4,y:32.8}).wait(1).to({graphics:mask_19_graphics_18,x:114.5,y:33.2}).wait(1).to({graphics:mask_19_graphics_19,x:112.6,y:33.6}).wait(1).to({graphics:mask_19_graphics_20,x:110.9,y:33.9}).wait(1).to({graphics:mask_19_graphics_21,x:109.3,y:34.2}).wait(1).to({graphics:mask_19_graphics_22,x:107.8,y:34.5}).wait(1).to({graphics:mask_19_graphics_23,x:106.4,y:34.8}).wait(1).to({graphics:mask_19_graphics_24,x:105,y:35.1}).wait(1).to({graphics:mask_19_graphics_25,x:103.8,y:35.3}).wait(1).to({graphics:mask_19_graphics_26,x:102.7,y:35.6}).wait(1).to({graphics:mask_19_graphics_27,x:101.7,y:35.8}).wait(1).to({graphics:mask_19_graphics_28,x:100.7,y:36}).wait(1).to({graphics:mask_19_graphics_29,x:99.9,y:36.1}).wait(1).to({graphics:mask_19_graphics_30,x:99.2,y:36.3}).wait(1).to({graphics:mask_19_graphics_31,x:98.5,y:36.4}).wait(1).to({graphics:mask_19_graphics_32,x:98,y:36.5}).wait(1).to({graphics:mask_19_graphics_33,x:97.5,y:36.6}).wait(1).to({graphics:mask_19_graphics_34,x:97.2,y:36.7}).wait(1).to({graphics:mask_19_graphics_35,x:96.9,y:36.7}).wait(1).to({graphics:mask_19_graphics_36,x:96.8,y:36.7}).wait(1).to({graphics:mask_19_graphics_37,x:96.7,y:36.8}).wait(48));

	// r
	this.instance_21 = new lib.t2();
	this.instance_21.setTransform(137,60.6,1,1,0,0,0,28.3,36.1);

	this.instance_21.mask = mask_19;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(15).to({y:80.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(48));

	// Layer 38 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_0 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_5 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_6 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_7 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_8 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_9 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_10 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_11 = new cjs.Graphics().p("AGzGQIAAseIC+AAIAAMeg");
	var mask_20_graphics_12 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_13 = new cjs.Graphics().p("AGzGPIAAseIC+AAIAAMeg");
	var mask_20_graphics_14 = new cjs.Graphics().p("AGzGQIAAsfIC+AAIAAMfg");
	var mask_20_graphics_15 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_16 = new cjs.Graphics().p("AGzGPIAAsdIC+AAIAAMdg");
	var mask_20_graphics_17 = new cjs.Graphics().p("AGzGXIAAseIC+AAIAAMeg");
	var mask_20_graphics_18 = new cjs.Graphics().p("AGzGmIAAseIC+AAIAAMeg");
	var mask_20_graphics_19 = new cjs.Graphics().p("AGzGzIAAseIC+AAIAAMeg");
	var mask_20_graphics_20 = new cjs.Graphics().p("AGzG/IAAseIC+AAIAAMeg");
	var mask_20_graphics_21 = new cjs.Graphics().p("AGzHJIAAseIC+AAIAAMeg");
	var mask_20_graphics_22 = new cjs.Graphics().p("AGzHRIAAseIC+AAIAAMeg");
	var mask_20_graphics_23 = new cjs.Graphics().p("AGzHYIAAseIC+AAIAAMeg");
	var mask_20_graphics_24 = new cjs.Graphics().p("AGzHeIAAseIC+AAIAAMeg");
	var mask_20_graphics_25 = new cjs.Graphics().p("AGzHhIAAseIC+AAIAAMeg");
	var mask_20_graphics_26 = new cjs.Graphics().p("AGzHkIAAseIC+AAIAAMeg");
	var mask_20_graphics_27 = new cjs.Graphics().p("AGzHlIAAseIC+AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:mask_20_graphics_0,x:62.5,y:-18}).wait(5).to({graphics:mask_20_graphics_5,x:62.5,y:-18}).wait(1).to({graphics:mask_20_graphics_6,x:62.5,y:-11.3}).wait(1).to({graphics:mask_20_graphics_7,x:62.5,y:-5}).wait(1).to({graphics:mask_20_graphics_8,x:62.5,y:1.1}).wait(1).to({graphics:mask_20_graphics_9,x:62.5,y:6.8}).wait(1).to({graphics:mask_20_graphics_10,x:62.5,y:12.2}).wait(1).to({graphics:mask_20_graphics_11,x:62.5,y:17.3}).wait(1).to({graphics:mask_20_graphics_12,x:62.5,y:22.1}).wait(1).to({graphics:mask_20_graphics_13,x:62.5,y:26.6}).wait(1).to({graphics:mask_20_graphics_14,x:62.5,y:30.8}).wait(1).to({graphics:mask_20_graphics_15,x:62.5,y:34.7}).wait(1).to({graphics:mask_20_graphics_16,x:62.5,y:38.3}).wait(1).to({graphics:mask_20_graphics_17,x:62.5,y:40.8}).wait(1).to({graphics:mask_20_graphics_18,x:62.5,y:42.2}).wait(1).to({graphics:mask_20_graphics_19,x:62.5,y:43.5}).wait(1).to({graphics:mask_20_graphics_20,x:62.5,y:44.7}).wait(1).to({graphics:mask_20_graphics_21,x:62.5,y:45.7}).wait(1).to({graphics:mask_20_graphics_22,x:62.5,y:46.6}).wait(1).to({graphics:mask_20_graphics_23,x:62.5,y:47.3}).wait(1).to({graphics:mask_20_graphics_24,x:62.5,y:47.8}).wait(1).to({graphics:mask_20_graphics_25,x:62.5,y:48.2}).wait(1).to({graphics:mask_20_graphics_26,x:62.5,y:48.4}).wait(1).to({graphics:mask_20_graphics_27,x:62.5,y:48.5}).wait(58));

	// r
	this.instance_22 = new lib.t2();
	this.instance_22.setTransform(137,60.6,1,1,0,0,0,28.3,36.1);

	this.instance_22.mask = mask_20;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(5).to({y:90.6},0).to({y:60.6},22,cjs.Ease.get(1)).wait(58));

	// Layer 40 (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_0 = new cjs.Graphics().p("AA3H9IAAseIK8AAIAAMeg");
	var mask_21_graphics_11 = new cjs.Graphics().p("AA3H9IAAseIK8AAIAAMeg");
	var mask_21_graphics_12 = new cjs.Graphics().p("AAgH9IAAseIK8AAIAAMeg");
	var mask_21_graphics_13 = new cjs.Graphics().p("AALH9IAAseIK8AAIAAMeg");
	var mask_21_graphics_14 = new cjs.Graphics().p("AgHH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_15 = new cjs.Graphics().p("AgaH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_16 = new cjs.Graphics().p("AgsH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_17 = new cjs.Graphics().p("Ag9H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_18 = new cjs.Graphics().p("AhOH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_19 = new cjs.Graphics().p("AhdH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_20 = new cjs.Graphics().p("AhrH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_21 = new cjs.Graphics().p("Ah4H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_22 = new cjs.Graphics().p("AiFH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_23 = new cjs.Graphics().p("AiQH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_24 = new cjs.Graphics().p("AiaH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_25 = new cjs.Graphics().p("AikH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_26 = new cjs.Graphics().p("AisH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_27 = new cjs.Graphics().p("AizH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_28 = new cjs.Graphics().p("Ai6H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_29 = new cjs.Graphics().p("Ai/H9IAAseIK6AAIAAMeg");
	var mask_21_graphics_30 = new cjs.Graphics().p("AjEH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_31 = new cjs.Graphics().p("AjHH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_32 = new cjs.Graphics().p("AjKH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_33 = new cjs.Graphics().p("AjLH9IAAseIK6AAIAAMeg");
	var mask_21_graphics_34 = new cjs.Graphics().p("AjMH9IAAseIK7AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:mask_21_graphics_0,x:75.5,y:51}).wait(11).to({graphics:mask_21_graphics_11,x:75.5,y:51}).wait(1).to({graphics:mask_21_graphics_12,x:73.3,y:51}).wait(1).to({graphics:mask_21_graphics_13,x:71.2,y:51}).wait(1).to({graphics:mask_21_graphics_14,x:69.2,y:51}).wait(1).to({graphics:mask_21_graphics_15,x:67.2,y:51}).wait(1).to({graphics:mask_21_graphics_16,x:65.4,y:51}).wait(1).to({graphics:mask_21_graphics_17,x:63.7,y:51}).wait(1).to({graphics:mask_21_graphics_18,x:62.1,y:51}).wait(1).to({graphics:mask_21_graphics_19,x:60.6,y:51}).wait(1).to({graphics:mask_21_graphics_20,x:59.1,y:51}).wait(1).to({graphics:mask_21_graphics_21,x:57.8,y:51}).wait(1).to({graphics:mask_21_graphics_22,x:56.6,y:51}).wait(1).to({graphics:mask_21_graphics_23,x:55.4,y:51}).wait(1).to({graphics:mask_21_graphics_24,x:54.4,y:51}).wait(1).to({graphics:mask_21_graphics_25,x:53.5,y:51}).wait(1).to({graphics:mask_21_graphics_26,x:52.6,y:51}).wait(1).to({graphics:mask_21_graphics_27,x:51.9,y:51}).wait(1).to({graphics:mask_21_graphics_28,x:51.3,y:51}).wait(1).to({graphics:mask_21_graphics_29,x:50.7,y:51}).wait(1).to({graphics:mask_21_graphics_30,x:50.3,y:51}).wait(1).to({graphics:mask_21_graphics_31,x:49.9,y:51}).wait(1).to({graphics:mask_21_graphics_32,x:49.7,y:51}).wait(1).to({graphics:mask_21_graphics_33,x:49.5,y:51}).wait(1).to({graphics:mask_21_graphics_34,x:49.5,y:51}).wait(51));

	// d
	this.instance_23 = new lib.t1();
	this.instance_23.setTransform(45.4,70.6,1,1,0,0,0,31.9,36.1);
	this.instance_23._off = true;

	this.instance_23.mask = mask_21;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(11).to({_off:false},0).to({y:60.6},23,cjs.Ease.get(1)).wait(51));

	// Layer 42 (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_0 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_1 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_2 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_3 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_4 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_5 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_6 = new cjs.Graphics().p("AgnGQIAAseIC8AAIAAMeg");
	var mask_22_graphics_7 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_8 = new cjs.Graphics().p("AgnGPIAAseIC8AAIAAMeg");
	var mask_22_graphics_9 = new cjs.Graphics().p("AgnGQIAAsfIC8AAIAAMfg");
	var mask_22_graphics_10 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_11 = new cjs.Graphics().p("AgnGPIAAsdIC8AAIAAMdg");
	var mask_22_graphics_12 = new cjs.Graphics().p("AgnGXIAAseIC8AAIAAMeg");
	var mask_22_graphics_13 = new cjs.Graphics().p("AgnGmIAAseIC8AAIAAMeg");
	var mask_22_graphics_14 = new cjs.Graphics().p("AgnGzIAAseIC8AAIAAMeg");
	var mask_22_graphics_15 = new cjs.Graphics().p("AgnG/IAAseIC8AAIAAMeg");
	var mask_22_graphics_16 = new cjs.Graphics().p("AgnHJIAAseIC8AAIAAMeg");
	var mask_22_graphics_17 = new cjs.Graphics().p("AgnHRIAAseIC8AAIAAMeg");
	var mask_22_graphics_18 = new cjs.Graphics().p("AgnHYIAAseIC8AAIAAMeg");
	var mask_22_graphics_19 = new cjs.Graphics().p("AgnHeIAAseIC8AAIAAMeg");
	var mask_22_graphics_20 = new cjs.Graphics().p("AgnHhIAAseIC8AAIAAMeg");
	var mask_22_graphics_21 = new cjs.Graphics().p("AgnHkIAAseIC8AAIAAMeg");
	var mask_22_graphics_22 = new cjs.Graphics().p("AgnHlIAAseIC8AAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:mask_22_graphics_0,x:15,y:-18}).wait(1).to({graphics:mask_22_graphics_1,x:15,y:-11.3}).wait(1).to({graphics:mask_22_graphics_2,x:15,y:-5}).wait(1).to({graphics:mask_22_graphics_3,x:15,y:1.1}).wait(1).to({graphics:mask_22_graphics_4,x:15,y:6.8}).wait(1).to({graphics:mask_22_graphics_5,x:15,y:12.2}).wait(1).to({graphics:mask_22_graphics_6,x:15,y:17.3}).wait(1).to({graphics:mask_22_graphics_7,x:15,y:22.1}).wait(1).to({graphics:mask_22_graphics_8,x:15,y:26.6}).wait(1).to({graphics:mask_22_graphics_9,x:15,y:30.8}).wait(1).to({graphics:mask_22_graphics_10,x:15,y:34.7}).wait(1).to({graphics:mask_22_graphics_11,x:15,y:38.3}).wait(1).to({graphics:mask_22_graphics_12,x:15,y:40.8}).wait(1).to({graphics:mask_22_graphics_13,x:15,y:42.2}).wait(1).to({graphics:mask_22_graphics_14,x:15,y:43.5}).wait(1).to({graphics:mask_22_graphics_15,x:15,y:44.7}).wait(1).to({graphics:mask_22_graphics_16,x:15,y:45.7}).wait(1).to({graphics:mask_22_graphics_17,x:15,y:46.6}).wait(1).to({graphics:mask_22_graphics_18,x:15,y:47.3}).wait(1).to({graphics:mask_22_graphics_19,x:15,y:47.8}).wait(1).to({graphics:mask_22_graphics_20,x:15,y:48.2}).wait(1).to({graphics:mask_22_graphics_21,x:15,y:48.4}).wait(1).to({graphics:mask_22_graphics_22,x:15,y:48.5}).wait(63));

	// d
	this.instance_24 = new lib.t1();
	this.instance_24.setTransform(45.4,100.6,1,1,0,0,0,31.9,36.1);

	this.instance_24.mask = mask_22;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({y:60.6},22,cjs.Ease.get(1)).wait(63));

	// maska2 (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	mask_23.graphics.p("Eg8UAMqIAAmMMB4pAAAIAAGMg");
	mask_23.setTransform(380,81);

	// a
	this.instance_25 = new lib.a_m2();
	this.instance_25.setTransform(674.9,177.1,1.152,1.152,0,0,0,9.8,12.3);
	this.instance_25._off = true;

	this.instance_25.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(58).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(5));

	// k
	this.instance_26 = new lib.k_m1();
	this.instance_26.setTransform(645.8,177.1,1.152,1.152,0,0,0,9.1,12.3);
	this.instance_26._off = true;

	this.instance_26.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(62).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(1));

	// s
	this.instance_27 = new lib.s_m1();
	this.instance_27.setTransform(614.1,177.1,1.152,1.152,0,0,0,8.4,12.9);
	this.instance_27._off = true;

	this.instance_27.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(46).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(17));

	// w
	this.instance_28 = new lib.w_m1();
	this.instance_28.setTransform(576.2,177.1,1.152,1.152,0,0,0,17.1,12.3);
	this.instance_28._off = true;

	this.instance_28.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(56).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(7));

	// o
	this.instance_29 = new lib.o_m1();
	this.instance_29.setTransform(533.7,177.1,1.152,1.152,0,0,0,12.7,12.9);
	this.instance_29._off = true;

	this.instance_29.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(52).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(11));

	// k
	this.instance_30 = new lib.k_m1();
	this.instance_30.setTransform(499.7,177.1,1.152,1.152,0,0,0,9.1,12.3);
	this.instance_30._off = true;

	this.instance_30.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(43).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(20));

	// n
	this.instance_31 = new lib.n_m();
	this.instance_31.setTransform(466.2,177.1,1.152,1.152,0,0,0,9,12.3);
	this.instance_31._off = true;

	this.instance_31.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(48).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(15));

	// o
	this.instance_32 = new lib.o_m1();
	this.instance_32.setTransform(430.1,177.1,1.152,1.152,0,0,0,12.7,12.9);
	this.instance_32._off = true;

	this.instance_32.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(41).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(22));

	// k
	this.instance_33 = new lib.k_m1();
	this.instance_33.setTransform(396.1,177.1,1.152,1.152,0,0,0,9,12.3);
	this.instance_33._off = true;

	this.instance_33.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(36).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(27));

	// maska2 (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	mask_24.graphics.p("Eg8TAPwIAAmMMB4nAAAIAAGMg");
	mask_24.setTransform(380,100.8);

	// a
	this.instance_34 = new lib.a_m2();
	this.instance_34.setTransform(674.9,145.9,1.152,1.152,0,0,0,9.8,12.2);
	this.instance_34._off = true;

	this.instance_34.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(58).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(5));

	// k
	this.instance_35 = new lib.k_m1();
	this.instance_35.setTransform(645.8,145.9,1.152,1.152,0,0,0,9.1,12.2);
	this.instance_35._off = true;

	this.instance_35.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(62).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(1));

	// s
	this.instance_36 = new lib.s_m1();
	this.instance_36.setTransform(614.1,145.9,1.152,1.152,0,0,0,8.4,12.8);
	this.instance_36._off = true;

	this.instance_36.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(46).to({_off:false},0).to({regY:12.9,y:162.1},22,cjs.Ease.get(1)).wait(17));

	// w
	this.instance_37 = new lib.w_m1();
	this.instance_37.setTransform(576.2,145.9,1.152,1.152,0,0,0,17.1,12.2);
	this.instance_37._off = true;

	this.instance_37.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(56).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(7));

	// o
	this.instance_38 = new lib.o_m1();
	this.instance_38.setTransform(533.7,145.9,1.152,1.152,0,0,0,12.7,12.8);
	this.instance_38._off = true;

	this.instance_38.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(52).to({_off:false},0).to({regY:12.9,y:162.1},22,cjs.Ease.get(1)).wait(11));

	// k
	this.instance_39 = new lib.k_m1();
	this.instance_39.setTransform(499.7,145.9,1.152,1.152,0,0,0,9.1,12.2);
	this.instance_39._off = true;

	this.instance_39.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(43).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(20));

	// n
	this.instance_40 = new lib.n_m();
	this.instance_40.setTransform(466.2,145.9,1.152,1.152,0,0,0,9,12.2);
	this.instance_40._off = true;

	this.instance_40.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(48).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(15));

	// o
	this.instance_41 = new lib.o_m1();
	this.instance_41.setTransform(430.1,145.9,1.152,1.152,0,0,0,12.7,12.8);
	this.instance_41._off = true;

	this.instance_41.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(41).to({_off:false},0).to({regY:12.9,y:162.1},22,cjs.Ease.get(1)).wait(22));

	// k
	this.instance_42 = new lib.k_m1();
	this.instance_42.setTransform(396.1,145.9,1.152,1.152,0,0,0,9,12.2);
	this.instance_42._off = true;

	this.instance_42.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(36).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(27));

	// maska2 (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	mask_25.graphics.p("Eg8UAMqIAAmMMB4oAAAIAAGMg");
	mask_25.setTransform(380,81);

	// a
	this.instance_43 = new lib.a_m2();
	this.instance_43.setTransform(347.7,180.6,1.152,1.152,0,0,0,9.8,12.3);
	this.instance_43._off = true;

	this.instance_43.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(34).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(29));

	// n
	this.instance_44 = new lib.n_m();
	this.instance_44.setTransform(316.2,180.6,1.152,1.152,0,0,0,9.1,12.3);
	this.instance_44._off = true;

	this.instance_44.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(30).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(33));

	// y
	this.instance_45 = new lib.y_m();
	this.instance_45.setTransform(283.9,180.6,1.152,1.152,0,0,0,10.4,12.3);
	this.instance_45._off = true;

	this.instance_45.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(42).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(21));

	// z
	this.instance_46 = new lib.z_m();
	this.instance_46.setTransform(253.3,180.6,1.152,1.152,0,0,0,9.7,12.3);
	this.instance_46._off = true;

	this.instance_46.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(30).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(33));

	// r
	this.instance_47 = new lib.r_m2();
	this.instance_47.setTransform(223.3,180.6,1.152,1.152,0,0,0,8.7,12.3);
	this.instance_47._off = true;

	this.instance_47.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(37).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(26));

	// a
	this.instance_48 = new lib.a_m2();
	this.instance_48.setTransform(192.2,180.6,1.152,1.152,0,0,0,10,12.3);
	this.instance_48._off = true;

	this.instance_48.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(30).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(33));

	// t
	this.instance_49 = new lib.t_m3();
	this.instance_49.setTransform(164.3,180.6,1.152,1.152,0,0,0,8.2,12.3);
	this.instance_49._off = true;

	this.instance_49.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(25).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(38));

	// a
	this.instance_50 = new lib.a_m2();
	this.instance_50.setTransform(136.2,180.6,1.152,1.152,0,0,0,9.8,12.3);
	this.instance_50._off = true;

	this.instance_50.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(30).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(33));

	// k
	this.instance_51 = new lib.k_m1();
	this.instance_51.setTransform(107,180.6,1.152,1.152,0,0,0,9.1,12.3);
	this.instance_51._off = true;

	this.instance_51.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(35).to({_off:false},0).to({y:162.1},22,cjs.Ease.get(1)).wait(28));

	// maska (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	mask_26.graphics.p("Eg8UAPwIAAmMMB4oAAAIAAGMg");
	mask_26.setTransform(380,100.8);

	// a
	this.instance_52 = new lib.a_m2();
	this.instance_52.setTransform(347.7,145.9,1.152,1.152,0,0,0,9.8,12.2);
	this.instance_52._off = true;

	this.instance_52.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(35).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(28));

	// n
	this.instance_53 = new lib.n_m();
	this.instance_53.setTransform(316.2,145.9,1.152,1.152,0,0,0,9.1,12.2);
	this.instance_53._off = true;

	this.instance_53.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(30).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(33));

	// y
	this.instance_54 = new lib.y_m();
	this.instance_54.setTransform(283.9,145.9,1.152,1.152,0,0,0,10.4,12.2);
	this.instance_54._off = true;

	this.instance_54.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(42).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(21));

	// z
	this.instance_55 = new lib.z_m();
	this.instance_55.setTransform(253.3,145.9,1.152,1.152,0,0,0,9.7,12.2);
	this.instance_55._off = true;

	this.instance_55.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(30).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(33));

	// r
	this.instance_56 = new lib.r_m2();
	this.instance_56.setTransform(223.3,145.9,1.152,1.152,0,0,0,8.7,12.2);
	this.instance_56._off = true;

	this.instance_56.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(37).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(26));

	// a
	this.instance_57 = new lib.a_m2();
	this.instance_57.setTransform(192.2,145.9,1.152,1.152,0,0,0,10,12.2);
	this.instance_57._off = true;

	this.instance_57.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(30).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(33));

	// t
	this.instance_58 = new lib.t_m3();
	this.instance_58.setTransform(164.3,145.9,1.152,1.152,0,0,0,8.2,12.2);
	this.instance_58._off = true;

	this.instance_58.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(25).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(38));

	// a
	this.instance_59 = new lib.a_m2();
	this.instance_59.setTransform(136.2,145.9,1.152,1.152,0,0,0,9.8,12.2);
	this.instance_59._off = true;

	this.instance_59.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(30).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(33));

	// k
	this.instance_60 = new lib.k_m1();
	this.instance_60.setTransform(107,145.9,1.152,1.152,0,0,0,9.1,12.2);
	this.instance_60._off = true;

	this.instance_60.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(35).to({_off:false},0).to({regY:12.3,y:162.1},22,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,-217,1500,900);


// symbols:
(lib._0 = function() {
	this.initialize(img._0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.z_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgB6IB9jPIh1AAIAAgkIC5AAIh+DPIB8AAIAAAkg");
	this.shape.setTransform(9.7,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,24.5);


(lib.y_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8B6IAxhiIhciRIAvAAIA/BpIA1hpIAsAAIh4Dzg");
	this.shape.setTransform(10.4,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,24.5);


(lib.w_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4B6Ig4itIg3CtIgdAAIhVjzIAqAAIA5CtIA5itIAbAAIA5CtIA5itIAqAAIhVDzg");
	this.shape.setTransform(17.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,24.5);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-36,67.2,72.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaFoIiaoBIicIBIiyAAIEBrPICYAAIEELPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.5,-36,67.2,72.1);


(lib.t22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFjIAArFIArAAIAALFg");
	this.shape.setTransform(22.5,36.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(20.2,1,4.5,71.1);


(lib.t6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjbFoIAArPIG3AAIAACGIkPAAIAAHDIEPAAIAACGg");
	this.shape.setTransform(22,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,72.1);


(lib.t5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbFoIAAm9IibG9Ih6AAIigm9IAAG9IijAAIAArPIDAAAIC/HzIC/nzIC9AAIAALPg");
	this.shape.setTransform(38.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.6,72.1);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOBBIAAiBIEeAAIAACBg");
	this.shape.setTransform(29.6,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.2,29.8,28.8,13.1);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSFoIAArPIClAAIAALPg");
	this.shape.setTransform(8.4,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,72.1);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABZFoIh9jIIhPAAIAADIIinAAIAArPIEtAAQBQABA7AkQA7AjAgA7QAgA6ABBIQgBBNglA7QglA9hEAhICQDkgAhzAYIByAAQAhAAAbgRQAZgPAOgdQAOgcABghQgBgjgOgbQgOgdgZgRQgbgQghgBIhyAAg");
	this.shape.setTransform(28.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.7,72.1);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak+FoIAArPIEJAAQBXABBGAeQBGAdAvAzQAxAzAYBBQAZA/AABFQAABGgYA/QgZBBgwAzQgwAzhGAeQhFAdhYABgAiXDYIBZAAQBCgCAvgeQAwgeAZgxQAZgxAAg4QAAg3gZgxQgZgxgwgfQgvgehCgBIhZAAg");
	this.shape.setTransform(32,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,72.1);


(lib.t_m3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTB6IAAjPIg9AAIAAgkICgAAIAAAkIg9AAIAADPg");
	this.shape.setTransform(8.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.2,24.5);


(lib.t = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgAVIAAgpIHBAAIAAApg");
	this.shape.setTransform(22.5,2.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,4.2);


(lib.s_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoB2QgTgKgMgTQgLgUgBgbIApAAQAAAYANANQANANATAAQASAAALgKQALgJABgSQgBgMgGgHQgGgIgJgEIgRgHQgVgIgSgJQgSgGgLgPQgLgOAAgZQAAgUAKgQQALgOARgJQARgIATAAQAWAAASAKQARAJAKASQALARAAAXIgoAAQgBgSgJgLQgKgMgRAAQgNAAgLAIQgLAHAAAQQAAAKAFAHQAFAHAIAEQAIAFAIADIAdALQAPAHAMAGQANAJAHAMQAIANAAARQgBAZgLARQgLARgTAJQgTAJgXAAQgVAAgTgKg");
	this.shape.setTransform(8.4,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,25.7);


(lib.r3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfB1IiAjGQBkgyBLAWICQDig");
	this.shape.setTransform(16.1,11.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,23.5);


(lib.r_m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmB6IgrhJIgoAAIAABJIgpAAIAAjzIBWAAQAbAAATAMQATALALAUQALATAAAYQAAARgHAQQgGANgLANQgMAMgQAGIAwBQgAgtANIAtAAQAOgBAKgGQALgGAGgKQAFgMAAgNQAAgOgFgLQgGgMgLgGQgKgHgOAAIgtAAg");
	this.shape.setTransform(8.7,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,24.5);


(lib.o_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0B1QgXgKgRgSQgQgTgJgXQgIgXAAgYQAAgYAIgXQAJgWAQgSQARgTAXgKQAYgLAcAAQAdAAAXALQAYAKAQATQARASAIAWQAJAXAAAYQAAAYgJAXQgIAXgRATQgQASgYAKQgXALgdAAQgcAAgYgLgAgshOQgTANgKAWQgKAUAAAXQAAAYAKAVQAKAUATAOQATANAZAAQAZAAATgNQATgOAKgUQAKgVABgYQgBgXgKgUQgKgWgTgNQgTgNgZAAQgZAAgTANg");
	this.shape.setTransform(12.7,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,25.7);


(lib.n_m = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuB6IhfitIAACtIgoAAIAAjzIAsAAIBfCsIAAisIAoAAIAADzg");
	this.shape.setTransform(9.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,24.5);


(lib.m23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTFoIkyrPIAtAAIEYKOIEYqOIAuAAIk0LPg");
	this.shape.setTransform(32.6,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.3,72.1);


(lib.m22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIArAAIAALPg");
	this.shape.setTransform(63,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(60.7,0,4.6,72.1);


(lib.m21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIAqAAIABLPg");
	this.shape.setTransform(2.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,72.1);


(lib.m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3FoIilnAIAAgBIgSAAIAAkOIATAAIAhAAIC+HzIC/nzIAZAAIATAAIAAEOIgMAAIAAABIihHAg");
	this.shape.setTransform(23,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,48,72.1);


(lib.k_m1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoB6IhZhrIAABrIgoAAIAAjzIAoAAIAABsIBZhsIAyAAIhlB5IBlB6g");
	this.shape.setTransform(9.1,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,24.5);


(lib.e3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAVIAAgoIFTAAIAAAog");
	this.shape.setTransform(21.1,36.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,34.2,34.1,4.2);


(lib.e2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1FoIAArPIFrAAIAAAqIlNAAIAAJ7IFNAAIAAAqg");
	this.shape.setTransform(19.8,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,36.6,72.1);


(lib.e = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVFoIAArPIArAAIAALPg");
	this.shape.setTransform(2.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,72.1);


(lib.a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADbFoIjbqLIjZKLIgwAAID5rPIAjAAID3LPg");
	this.shape.setTransform(26.6,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,72.1);


(lib.a_m2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4B6IgLgfIhZAAIgLAfIgrAAIBVjzIAbAAIBUDzgAAhA3IghhtIghBtIBCAAg");
	this.shape.setTransform(9.9,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,24.5);


(lib.a = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAUIAOgoIE3AAIAOAog");
	this.shape.setTransform(26.7,55.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.6,53.1,34.2,4.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 200,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/events_1.jpg", id:"events_1"},
		{src:"images/stage.jpg", id:"stage"}
	]
};

// stage content:
(lib.events = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stage.scaleMode = "noScale";*/
	}
	this.frame_144 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(1));

	// Layer 121 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EBCJARzIAA3ZIMCAAIAAXZg");
	var mask_graphics_71 = new cjs.Graphics().p("EBCJARzIAA3ZIMCAAIAAXZg");
	var mask_graphics_72 = new cjs.Graphics().p("EBCJARnIAA3aIMCAAIAAXag");
	var mask_graphics_73 = new cjs.Graphics().p("EBCJARbIAA3aIMCAAIAAXag");
	var mask_graphics_74 = new cjs.Graphics().p("EBCJARPIAA3aIMCAAIAAXag");
	var mask_graphics_75 = new cjs.Graphics().p("EBCJAREIAA3aIMCAAIAAXag");
	var mask_graphics_76 = new cjs.Graphics().p("EBCJAQ5IAA3aIMCAAIAAXag");
	var mask_graphics_77 = new cjs.Graphics().p("EBCJAQvIAA3aIMCAAIAAXag");
	var mask_graphics_78 = new cjs.Graphics().p("EBCJAQmIAA3aIMCAAIAAXag");
	var mask_graphics_79 = new cjs.Graphics().p("EBCJAQdIAA3aIMCAAIAAXag");
	var mask_graphics_80 = new cjs.Graphics().p("EBCJAQVIAA3aIMCAAIAAXag");
	var mask_graphics_81 = new cjs.Graphics().p("EBCJAQNIAA3aIMCAAIAAXag");
	var mask_graphics_82 = new cjs.Graphics().p("EBCJAQGIAA3aIMCAAIAAXag");
	var mask_graphics_83 = new cjs.Graphics().p("EBCJAQAIAA3aIMCAAIAAXag");
	var mask_graphics_84 = new cjs.Graphics().p("EBCJAP6IAA3aIMCAAIAAXag");
	var mask_graphics_85 = new cjs.Graphics().p("EBCJAP0IAA3aIMCAAIAAXag");
	var mask_graphics_86 = new cjs.Graphics().p("EBCJAPwIAA3aIMCAAIAAXag");
	var mask_graphics_87 = new cjs.Graphics().p("EBCJAPrIAA3aIMCAAIAAXag");
	var mask_graphics_88 = new cjs.Graphics().p("EBCJAPoIAA3aIMCAAIAAXag");
	var mask_graphics_89 = new cjs.Graphics().p("EBCJAPlIAA3aIMCAAIAAXag");
	var mask_graphics_90 = new cjs.Graphics().p("EBCJAPiIAA3aIMCAAIAAXag");
	var mask_graphics_91 = new cjs.Graphics().p("EBCJAPgIAA3aIMCAAIAAXag");
	var mask_graphics_92 = new cjs.Graphics().p("EBCJAPfIAA3aIMCAAIAAXag");
	var mask_graphics_93 = new cjs.Graphics().p("EBCJAPeIAA3aIMCAAIAAXag");
	var mask_graphics_94 = new cjs.Graphics().p("EBCJAPeIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:500.4,y:114}).wait(71).to({graphics:mask_graphics_71,x:500.4,y:114}).wait(1).to({graphics:mask_graphics_72,x:500.4,y:112.7}).wait(1).to({graphics:mask_graphics_73,x:500.4,y:111.5}).wait(1).to({graphics:mask_graphics_74,x:500.4,y:110.3}).wait(1).to({graphics:mask_graphics_75,x:500.4,y:109.2}).wait(1).to({graphics:mask_graphics_76,x:500.4,y:108.2}).wait(1).to({graphics:mask_graphics_77,x:500.4,y:107.2}).wait(1).to({graphics:mask_graphics_78,x:500.4,y:106.3}).wait(1).to({graphics:mask_graphics_79,x:500.4,y:105.4}).wait(1).to({graphics:mask_graphics_80,x:500.4,y:104.6}).wait(1).to({graphics:mask_graphics_81,x:500.4,y:103.8}).wait(1).to({graphics:mask_graphics_82,x:500.4,y:103.1}).wait(1).to({graphics:mask_graphics_83,x:500.4,y:102.4}).wait(1).to({graphics:mask_graphics_84,x:500.4,y:101.8}).wait(1).to({graphics:mask_graphics_85,x:500.4,y:101.3}).wait(1).to({graphics:mask_graphics_86,x:500.4,y:100.8}).wait(1).to({graphics:mask_graphics_87,x:500.4,y:100.4}).wait(1).to({graphics:mask_graphics_88,x:500.4,y:100}).wait(1).to({graphics:mask_graphics_89,x:500.4,y:99.7}).wait(1).to({graphics:mask_graphics_90,x:500.4,y:99.5}).wait(1).to({graphics:mask_graphics_91,x:500.4,y:99.3}).wait(1).to({graphics:mask_graphics_92,x:500.4,y:99.1}).wait(1).to({graphics:mask_graphics_93,x:500.4,y:99}).wait(1).to({graphics:mask_graphics_94,x:500.4,y:99}).wait(51));

	// Layer 120
	this.instance = new lib.events_s2();
	this.instance.setTransform(957.7,70.3,1,1,0,0,0,22.6,51.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({y:100.3},23,cjs.Ease.get(1)).wait(51));

	// Layer 119 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_71 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_72 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_75 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_79 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_89 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_91 = new cjs.Graphics().p("EBCJALwIAA3aIMCAAIAAXag");
	var mask_1_graphics_92 = new cjs.Graphics().p("EBCJALxIAA3aIMCAAIAAXag");
	var mask_1_graphics_93 = new cjs.Graphics().p("EBCJALyIAA3aIMCAAIAAXag");
	var mask_1_graphics_94 = new cjs.Graphics().p("EBCJALzIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:500.4,y:43}).wait(71).to({graphics:mask_1_graphics_71,x:500.4,y:43}).wait(1).to({graphics:mask_1_graphics_72,x:500.4,y:45.8}).wait(1).to({graphics:mask_1_graphics_73,x:500.4,y:48.5}).wait(1).to({graphics:mask_1_graphics_74,x:500.4,y:51}).wait(1).to({graphics:mask_1_graphics_75,x:500.4,y:53.5}).wait(1).to({graphics:mask_1_graphics_76,x:500.4,y:55.8}).wait(1).to({graphics:mask_1_graphics_77,x:500.4,y:58}).wait(1).to({graphics:mask_1_graphics_78,x:500.4,y:60}).wait(1).to({graphics:mask_1_graphics_79,x:500.4,y:62}).wait(1).to({graphics:mask_1_graphics_80,x:500.4,y:63.8}).wait(1).to({graphics:mask_1_graphics_81,x:500.4,y:65.5}).wait(1).to({graphics:mask_1_graphics_82,x:500.4,y:67}).wait(1).to({graphics:mask_1_graphics_83,x:500.4,y:68.5}).wait(1).to({graphics:mask_1_graphics_84,x:500.4,y:69.8}).wait(1).to({graphics:mask_1_graphics_85,x:500.4,y:70.9}).wait(1).to({graphics:mask_1_graphics_86,x:500.4,y:72}).wait(1).to({graphics:mask_1_graphics_87,x:500.4,y:72.9}).wait(1).to({graphics:mask_1_graphics_88,x:500.4,y:73.8}).wait(1).to({graphics:mask_1_graphics_89,x:500.4,y:74.4}).wait(1).to({graphics:mask_1_graphics_90,x:500.4,y:75}).wait(1).to({graphics:mask_1_graphics_91,x:500.4,y:75.2}).wait(1).to({graphics:mask_1_graphics_92,x:500.4,y:75.4}).wait(1).to({graphics:mask_1_graphics_93,x:500.4,y:75.5}).wait(1).to({graphics:mask_1_graphics_94,x:500.4,y:75.5}).wait(51));

	// Layer 118
	this.instance_1 = new lib.events_s3();
	this.instance_1.setTransform(957.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({y:100.3},23,cjs.Ease.get(1)).wait(51));

	// Layer 117 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_2_graphics_63 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_2_graphics_68 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EBCJALtIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_2_graphics_73 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_2_graphics_74 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_2_graphics_76 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");
	var mask_2_graphics_77 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_2_graphics_78 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_80 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_81 = new cjs.Graphics().p("EBCJALuIAA3bIMCAAIAAXbg");
	var mask_2_graphics_82 = new cjs.Graphics().p("EBCJALtIAA3aIMCAAIAAXag");
	var mask_2_graphics_83 = new cjs.Graphics().p("EBCJALuIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:500.4,y:-27}).wait(60).to({graphics:mask_2_graphics_60,x:500.4,y:-27}).wait(1).to({graphics:mask_2_graphics_61,x:500.4,y:-20.7}).wait(1).to({graphics:mask_2_graphics_62,x:500.4,y:-14.7}).wait(1).to({graphics:mask_2_graphics_63,x:500.4,y:-9}).wait(1).to({graphics:mask_2_graphics_64,x:500.4,y:-3.5}).wait(1).to({graphics:mask_2_graphics_65,x:500.4,y:1.7}).wait(1).to({graphics:mask_2_graphics_66,x:500.4,y:6.6}).wait(1).to({graphics:mask_2_graphics_67,x:500.4,y:11.2}).wait(1).to({graphics:mask_2_graphics_68,x:500.4,y:15.5}).wait(1).to({graphics:mask_2_graphics_69,x:500.4,y:19.6}).wait(1).to({graphics:mask_2_graphics_70,x:500.4,y:23.4}).wait(1).to({graphics:mask_2_graphics_71,x:500.4,y:26.9}).wait(1).to({graphics:mask_2_graphics_72,x:500.4,y:30.1}).wait(1).to({graphics:mask_2_graphics_73,x:500.4,y:33}).wait(1).to({graphics:mask_2_graphics_74,x:500.4,y:35.7}).wait(1).to({graphics:mask_2_graphics_75,x:500.4,y:38}).wait(1).to({graphics:mask_2_graphics_76,x:500.4,y:40.1}).wait(1).to({graphics:mask_2_graphics_77,x:500.4,y:42}).wait(1).to({graphics:mask_2_graphics_78,x:500.4,y:43.5}).wait(1).to({graphics:mask_2_graphics_79,x:500.4,y:44.8}).wait(1).to({graphics:mask_2_graphics_80,x:500.4,y:45.7}).wait(1).to({graphics:mask_2_graphics_81,x:500.4,y:46.4}).wait(1).to({graphics:mask_2_graphics_82,x:500.4,y:46.9}).wait(1).to({graphics:mask_2_graphics_83,x:500.4,y:47}).wait(62));

	// Layer 116
	this.instance_2 = new lib.events_s1();
	this.instance_2.setTransform(957.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({y:100.3},23,cjs.Ease.get(1)).wait(62));

	// Layer 65 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EA8BALtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EA8BALtIAA3ZIMDAAIAAXZg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EA7/ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EA78ALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_69 = new cjs.Graphics().p("EA75ALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_70 = new cjs.Graphics().p("EA72ALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_71 = new cjs.Graphics().p("EA70ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EA7yALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EA7vALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EA7tALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_75 = new cjs.Graphics().p("EA7rALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EA7qALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EA7oALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EA7nALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EA7lALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_80 = new cjs.Graphics().p("EA7kALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EA7jALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_82 = new cjs.Graphics().p("EA7iALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_83 = new cjs.Graphics().p("EA7hALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EA7gALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_85 = new cjs.Graphics().p("EA7gALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EA7fALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_87 = new cjs.Graphics().p("EA7fALwIAA3aIMCAAIAAXag");
	var mask_3_graphics_88 = new cjs.Graphics().p("EA7fALxIAA3aIMCAAIAAXag");
	var mask_3_graphics_89 = new cjs.Graphics().p("EA7fALyIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:461.2,y:26}).wait(66).to({graphics:mask_3_graphics_66,x:461.2,y:26}).wait(1).to({graphics:mask_3_graphics_67,x:460.9,y:30.2}).wait(1).to({graphics:mask_3_graphics_68,x:460.6,y:34.3}).wait(1).to({graphics:mask_3_graphics_69,x:460.3,y:38.1}).wait(1).to({graphics:mask_3_graphics_70,x:460.1,y:41.8}).wait(1).to({graphics:mask_3_graphics_71,x:459.8,y:45.3}).wait(1).to({graphics:mask_3_graphics_72,x:459.6,y:48.6}).wait(1).to({graphics:mask_3_graphics_73,x:459.4,y:51.7}).wait(1).to({graphics:mask_3_graphics_74,x:459.2,y:54.6}).wait(1).to({graphics:mask_3_graphics_75,x:459,y:57.3}).wait(1).to({graphics:mask_3_graphics_76,x:458.8,y:59.9}).wait(1).to({graphics:mask_3_graphics_77,x:458.7,y:62.2}).wait(1).to({graphics:mask_3_graphics_78,x:458.5,y:64.4}).wait(1).to({graphics:mask_3_graphics_79,x:458.4,y:66.4}).wait(1).to({graphics:mask_3_graphics_80,x:458.2,y:68.2}).wait(1).to({graphics:mask_3_graphics_81,x:458.1,y:69.8}).wait(1).to({graphics:mask_3_graphics_82,x:458,y:71.2}).wait(1).to({graphics:mask_3_graphics_83,x:457.9,y:72.4}).wait(1).to({graphics:mask_3_graphics_84,x:457.9,y:73.4}).wait(1).to({graphics:mask_3_graphics_85,x:457.8,y:74.3}).wait(1).to({graphics:mask_3_graphics_86,x:457.8,y:75}).wait(1).to({graphics:mask_3_graphics_87,x:457.7,y:75.2}).wait(1).to({graphics:mask_3_graphics_88,x:457.7,y:75.4}).wait(1).to({graphics:mask_3_graphics_89,x:457.7,y:75.4}).wait(56));

	// Layer 59
	this.instance_3 = new lib.events_r3();
	this.instance_3.setTransform(872.1,100.2,1,1,0,0,0,23.4,50.1);

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({y:140.2},0).to({y:100.2},23,cjs.Ease.get(1)).wait(56));

	// Layer 64 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EA/8ALzIAA3bIMBAAIAAXbg");
	var mask_4_graphics_66 = new cjs.Graphics().p("EA/8ALzIAA3bIMBAAIAAXbg");
	var mask_4_graphics_67 = new cjs.Graphics().p("EA/rALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_68 = new cjs.Graphics().p("EA/cALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_69 = new cjs.Graphics().p("EA/NALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_70 = new cjs.Graphics().p("EA+/ALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_71 = new cjs.Graphics().p("EA+yALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_72 = new cjs.Graphics().p("EA+lALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_73 = new cjs.Graphics().p("EA+ZALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_74 = new cjs.Graphics().p("EA+OALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_75 = new cjs.Graphics().p("EA+EALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_76 = new cjs.Graphics().p("EA96ALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_77 = new cjs.Graphics().p("EA9xALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_78 = new cjs.Graphics().p("EA9pALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_79 = new cjs.Graphics().p("EA9hALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_80 = new cjs.Graphics().p("EA9bALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_81 = new cjs.Graphics().p("EA9UALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_82 = new cjs.Graphics().p("EA9PALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_83 = new cjs.Graphics().p("EA9KALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_84 = new cjs.Graphics().p("EA9GALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_85 = new cjs.Graphics().p("EA9DALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_86 = new cjs.Graphics().p("EA9BALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_87 = new cjs.Graphics().p("EA8/ALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_88 = new cjs.Graphics().p("EA8+ALzIAA3bIMCAAIAAXbg");
	var mask_4_graphics_89 = new cjs.Graphics().p("EA8+ALzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:486.2,y:75.5}).wait(66).to({graphics:mask_4_graphics_66,x:486.2,y:75.5}).wait(1).to({graphics:mask_4_graphics_67,x:484.6,y:75.5}).wait(1).to({graphics:mask_4_graphics_68,x:483,y:75.5}).wait(1).to({graphics:mask_4_graphics_69,x:481.6,y:75.5}).wait(1).to({graphics:mask_4_graphics_70,x:480.2,y:75.5}).wait(1).to({graphics:mask_4_graphics_71,x:478.8,y:75.5}).wait(1).to({graphics:mask_4_graphics_72,x:477.6,y:75.5}).wait(1).to({graphics:mask_4_graphics_73,x:476.4,y:75.5}).wait(1).to({graphics:mask_4_graphics_74,x:475.3,y:75.5}).wait(1).to({graphics:mask_4_graphics_75,x:474.2,y:75.5}).wait(1).to({graphics:mask_4_graphics_76,x:473.3,y:75.5}).wait(1).to({graphics:mask_4_graphics_77,x:472.4,y:75.5}).wait(1).to({graphics:mask_4_graphics_78,x:471.5,y:75.5}).wait(1).to({graphics:mask_4_graphics_79,x:470.8,y:75.5}).wait(1).to({graphics:mask_4_graphics_80,x:470.1,y:75.5}).wait(1).to({graphics:mask_4_graphics_81,x:469.5,y:75.5}).wait(1).to({graphics:mask_4_graphics_82,x:469,y:75.5}).wait(1).to({graphics:mask_4_graphics_83,x:468.5,y:75.5}).wait(1).to({graphics:mask_4_graphics_84,x:468.1,y:75.5}).wait(1).to({graphics:mask_4_graphics_85,x:467.8,y:75.5}).wait(1).to({graphics:mask_4_graphics_86,x:467.5,y:75.5}).wait(1).to({graphics:mask_4_graphics_87,x:467.3,y:75.5}).wait(1).to({graphics:mask_4_graphics_88,x:467.2,y:75.5}).wait(1).to({graphics:mask_4_graphics_89,x:467.2,y:75.5}).wait(56));

	// Layer 58
	this.instance_4 = new lib.events_r2();
	this.instance_4.setTransform(872.1,140.2,1,1,0,0,0,23.4,50.1);

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({y:100.2},23,cjs.Ease.get(1)).wait(56));

	// Layer 63 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EA5wALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_59 = new cjs.Graphics().p("EA5wALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_60 = new cjs.Graphics().p("EA5wALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_61 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EA5wALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_65 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EA5wALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_68 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EA5wALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_71 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EA5wALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_74 = new cjs.Graphics().p("EA5wALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_75 = new cjs.Graphics().p("EA5wALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_76 = new cjs.Graphics().p("EA5wALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_77 = new cjs.Graphics().p("EA5wALxIAA3aIMDAAIAAXag");
	var mask_5_graphics_78 = new cjs.Graphics().p("EA5wALyIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:446.7,y:-27}).wait(55).to({graphics:mask_5_graphics_55,x:446.7,y:-27}).wait(1).to({graphics:mask_5_graphics_56,x:446.7,y:-18.3}).wait(1).to({graphics:mask_5_graphics_57,x:446.7,y:-9.9}).wait(1).to({graphics:mask_5_graphics_58,x:446.7,y:-1.9}).wait(1).to({graphics:mask_5_graphics_59,x:446.7,y:5.6}).wait(1).to({graphics:mask_5_graphics_60,x:446.7,y:12.8}).wait(1).to({graphics:mask_5_graphics_61,x:446.7,y:19.6}).wait(1).to({graphics:mask_5_graphics_62,x:446.7,y:26.1}).wait(1).to({graphics:mask_5_graphics_63,x:446.7,y:32.1}).wait(1).to({graphics:mask_5_graphics_64,x:446.7,y:37.7}).wait(1).to({graphics:mask_5_graphics_65,x:446.7,y:43}).wait(1).to({graphics:mask_5_graphics_66,x:446.7,y:47.8}).wait(1).to({graphics:mask_5_graphics_67,x:446.7,y:52.3}).wait(1).to({graphics:mask_5_graphics_68,x:446.7,y:56.4}).wait(1).to({graphics:mask_5_graphics_69,x:446.7,y:60.1}).wait(1).to({graphics:mask_5_graphics_70,x:446.7,y:63.4}).wait(1).to({graphics:mask_5_graphics_71,x:446.7,y:66.3}).wait(1).to({graphics:mask_5_graphics_72,x:446.7,y:68.8}).wait(1).to({graphics:mask_5_graphics_73,x:446.7,y:70.9}).wait(1).to({graphics:mask_5_graphics_74,x:446.7,y:72.7}).wait(1).to({graphics:mask_5_graphics_75,x:446.7,y:74.1}).wait(1).to({graphics:mask_5_graphics_76,x:446.7,y:75}).wait(1).to({graphics:mask_5_graphics_77,x:446.7,y:75.3}).wait(1).to({graphics:mask_5_graphics_78,x:446.7,y:75.4}).wait(67));

	// Layer 62
	this.instance_5 = new lib.events_r1();
	this.instance_5.setTransform(872.1,140.2,1,1,0,0,0,23.4,50.1);

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({y:100.2},23,cjs.Ease.get(1)).wait(67));

	// Layer 122 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_47 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_48 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_49 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_50 = new cjs.Graphics().p("EA2pALtIAA3aIMBAAIAAXag");
	var mask_6_graphics_51 = new cjs.Graphics().p("EA2pALtIAA3aIMBAAIAAXag");
	var mask_6_graphics_52 = new cjs.Graphics().p("EA2pALtIAA3aIMBAAIAAXag");
	var mask_6_graphics_53 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_54 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_55 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_56 = new cjs.Graphics().p("EA2pALtIAA3aIMBAAIAAXag");
	var mask_6_graphics_57 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_58 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_59 = new cjs.Graphics().p("EA2pALtIAA3aIMBAAIAAXag");
	var mask_6_graphics_60 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_61 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_62 = new cjs.Graphics().p("EA2pALuIAA3aIMBAAIAAXag");
	var mask_6_graphics_63 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_64 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_65 = new cjs.Graphics().p("EA2pALuIAA3aIMBAAIAAXag");
	var mask_6_graphics_66 = new cjs.Graphics().p("EA2pALuIAA3bIMBAAIAAXbg");
	var mask_6_graphics_67 = new cjs.Graphics().p("EA2pALtIAA3ZIMBAAIAAXZg");
	var mask_6_graphics_68 = new cjs.Graphics().p("EA2pALuIAA3aIMBAAIAAXag");
	var mask_6_graphics_69 = new cjs.Graphics().p("EA2pALxIAA3aIMBAAIAAXag");
	var mask_6_graphics_70 = new cjs.Graphics().p("EA2pALyIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:426.7,y:-27}).wait(47).to({graphics:mask_6_graphics_47,x:426.7,y:-27}).wait(1).to({graphics:mask_6_graphics_48,x:426.7,y:-18.3}).wait(1).to({graphics:mask_6_graphics_49,x:426.7,y:-9.9}).wait(1).to({graphics:mask_6_graphics_50,x:426.7,y:-1.9}).wait(1).to({graphics:mask_6_graphics_51,x:426.7,y:5.6}).wait(1).to({graphics:mask_6_graphics_52,x:426.7,y:12.8}).wait(1).to({graphics:mask_6_graphics_53,x:426.7,y:19.6}).wait(1).to({graphics:mask_6_graphics_54,x:426.7,y:26.1}).wait(1).to({graphics:mask_6_graphics_55,x:426.7,y:32.1}).wait(1).to({graphics:mask_6_graphics_56,x:426.7,y:37.7}).wait(1).to({graphics:mask_6_graphics_57,x:426.7,y:43}).wait(1).to({graphics:mask_6_graphics_58,x:426.7,y:47.8}).wait(1).to({graphics:mask_6_graphics_59,x:426.7,y:52.3}).wait(1).to({graphics:mask_6_graphics_60,x:426.7,y:56.4}).wait(1).to({graphics:mask_6_graphics_61,x:426.7,y:60.1}).wait(1).to({graphics:mask_6_graphics_62,x:426.7,y:63.4}).wait(1).to({graphics:mask_6_graphics_63,x:426.7,y:66.3}).wait(1).to({graphics:mask_6_graphics_64,x:426.7,y:68.8}).wait(1).to({graphics:mask_6_graphics_65,x:426.7,y:70.9}).wait(1).to({graphics:mask_6_graphics_66,x:426.7,y:72.7}).wait(1).to({graphics:mask_6_graphics_67,x:426.7,y:74.1}).wait(1).to({graphics:mask_6_graphics_68,x:426.7,y:75}).wait(1).to({graphics:mask_6_graphics_69,x:426.7,y:75.3}).wait(1).to({graphics:mask_6_graphics_70,x:426.7,y:75.4}).wait(75));

	// Layer 79
	this.instance_6 = new lib.events_i();
	this.instance_6.setTransform(800.1,140.2,1,1,0,0,0,5.5,50.1);

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({y:100.2},23,cjs.Ease.get(1)).wait(75));

	// Layer 95 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("EA0SANSIAA3bIMDAAIAAXbg");
	var mask_7_graphics_51 = new cjs.Graphics().p("EA0SANSIAA3bIMDAAIAAXbg");
	var mask_7_graphics_52 = new cjs.Graphics().p("EA0EANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_53 = new cjs.Graphics().p("EAz1ANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_54 = new cjs.Graphics().p("EAzoANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_55 = new cjs.Graphics().p("EAzbANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_56 = new cjs.Graphics().p("EAzPANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_57 = new cjs.Graphics().p("EAzDANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_58 = new cjs.Graphics().p("EAy4ANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_59 = new cjs.Graphics().p("EAyuANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_60 = new cjs.Graphics().p("EAykANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_61 = new cjs.Graphics().p("EAybANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_62 = new cjs.Graphics().p("EAyTANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_63 = new cjs.Graphics().p("EAyMANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_64 = new cjs.Graphics().p("EAyFANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_65 = new cjs.Graphics().p("EAx+ANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_66 = new cjs.Graphics().p("EAx5ANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_67 = new cjs.Graphics().p("EAx0ANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_68 = new cjs.Graphics().p("EAxvANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_69 = new cjs.Graphics().p("EAxsANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_70 = new cjs.Graphics().p("EAxpANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_71 = new cjs.Graphics().p("EAxmANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_72 = new cjs.Graphics().p("EAxlANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_73 = new cjs.Graphics().p("EAxkANSIAA3bIMCAAIAAXbg");
	var mask_7_graphics_74 = new cjs.Graphics().p("EAxjANSIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:411.7,y:85}).wait(51).to({graphics:mask_7_graphics_51,x:411.7,y:85}).wait(1).to({graphics:mask_7_graphics_52,x:410.2,y:85}).wait(1).to({graphics:mask_7_graphics_53,x:408.8,y:85}).wait(1).to({graphics:mask_7_graphics_54,x:407.4,y:85}).wait(1).to({graphics:mask_7_graphics_55,x:406.1,y:85}).wait(1).to({graphics:mask_7_graphics_56,x:404.9,y:85}).wait(1).to({graphics:mask_7_graphics_57,x:403.8,y:85}).wait(1).to({graphics:mask_7_graphics_58,x:402.7,y:85}).wait(1).to({graphics:mask_7_graphics_59,x:401.6,y:85}).wait(1).to({graphics:mask_7_graphics_60,x:400.7,y:85}).wait(1).to({graphics:mask_7_graphics_61,x:399.8,y:85}).wait(1).to({graphics:mask_7_graphics_62,x:399,y:85}).wait(1).to({graphics:mask_7_graphics_63,x:398.2,y:85}).wait(1).to({graphics:mask_7_graphics_64,x:397.5,y:85}).wait(1).to({graphics:mask_7_graphics_65,x:396.9,y:85}).wait(1).to({graphics:mask_7_graphics_66,x:396.3,y:85}).wait(1).to({graphics:mask_7_graphics_67,x:395.8,y:85}).wait(1).to({graphics:mask_7_graphics_68,x:395.4,y:85}).wait(1).to({graphics:mask_7_graphics_69,x:395,y:85}).wait(1).to({graphics:mask_7_graphics_70,x:394.7,y:85}).wait(1).to({graphics:mask_7_graphics_71,x:394.5,y:85}).wait(1).to({graphics:mask_7_graphics_72,x:394.3,y:85}).wait(1).to({graphics:mask_7_graphics_73,x:394.2,y:85}).wait(1).to({graphics:mask_7_graphics_74,x:394.2,y:85}).wait(71));

	// Layer 93
	this.instance_7 = new lib.events_a2();
	this.instance_7.setTransform(726.9,100.2,1,1,0,0,0,27.3,50.1);

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(145));

	// Layer 94 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_41 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_42 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_43 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_44 = new cjs.Graphics().p("EAvnALtIAA3aIMBAAIAAXag");
	var mask_8_graphics_45 = new cjs.Graphics().p("EAvnALtIAA3aIMBAAIAAXag");
	var mask_8_graphics_46 = new cjs.Graphics().p("EAvnALtIAA3aIMBAAIAAXag");
	var mask_8_graphics_47 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_48 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_49 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_50 = new cjs.Graphics().p("EAvnALtIAA3aIMBAAIAAXag");
	var mask_8_graphics_51 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_52 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_53 = new cjs.Graphics().p("EAvnALtIAA3aIMBAAIAAXag");
	var mask_8_graphics_54 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_55 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_56 = new cjs.Graphics().p("EAvnALuIAA3aIMBAAIAAXag");
	var mask_8_graphics_57 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_58 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_59 = new cjs.Graphics().p("EAvnALuIAA3aIMBAAIAAXag");
	var mask_8_graphics_60 = new cjs.Graphics().p("EAvnALuIAA3bIMBAAIAAXbg");
	var mask_8_graphics_61 = new cjs.Graphics().p("EAvnALtIAA3ZIMBAAIAAXZg");
	var mask_8_graphics_62 = new cjs.Graphics().p("EAvnALuIAA3aIMBAAIAAXag");
	var mask_8_graphics_63 = new cjs.Graphics().p("EAvnALxIAA3aIMBAAIAAXag");
	var mask_8_graphics_64 = new cjs.Graphics().p("EAvnALyIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:381.7,y:-27}).wait(41).to({graphics:mask_8_graphics_41,x:381.7,y:-27}).wait(1).to({graphics:mask_8_graphics_42,x:381.7,y:-18.3}).wait(1).to({graphics:mask_8_graphics_43,x:381.7,y:-9.9}).wait(1).to({graphics:mask_8_graphics_44,x:381.7,y:-1.9}).wait(1).to({graphics:mask_8_graphics_45,x:381.7,y:5.6}).wait(1).to({graphics:mask_8_graphics_46,x:381.7,y:12.8}).wait(1).to({graphics:mask_8_graphics_47,x:381.7,y:19.6}).wait(1).to({graphics:mask_8_graphics_48,x:381.7,y:26.1}).wait(1).to({graphics:mask_8_graphics_49,x:381.7,y:32.1}).wait(1).to({graphics:mask_8_graphics_50,x:381.7,y:37.7}).wait(1).to({graphics:mask_8_graphics_51,x:381.7,y:43}).wait(1).to({graphics:mask_8_graphics_52,x:381.7,y:47.8}).wait(1).to({graphics:mask_8_graphics_53,x:381.7,y:52.3}).wait(1).to({graphics:mask_8_graphics_54,x:381.7,y:56.4}).wait(1).to({graphics:mask_8_graphics_55,x:381.7,y:60.1}).wait(1).to({graphics:mask_8_graphics_56,x:381.7,y:63.4}).wait(1).to({graphics:mask_8_graphics_57,x:381.7,y:66.3}).wait(1).to({graphics:mask_8_graphics_58,x:381.7,y:68.8}).wait(1).to({graphics:mask_8_graphics_59,x:381.7,y:70.9}).wait(1).to({graphics:mask_8_graphics_60,x:381.7,y:72.7}).wait(1).to({graphics:mask_8_graphics_61,x:381.7,y:74.1}).wait(1).to({graphics:mask_8_graphics_62,x:381.7,y:75}).wait(1).to({graphics:mask_8_graphics_63,x:381.7,y:75.3}).wait(1).to({graphics:mask_8_graphics_64,x:381.7,y:75.4}).wait(81));

	// Layer 73
	this.instance_8 = new lib.events_a1();
	this.instance_8.setTransform(726.9,140.2,1,1,0,0,0,27.3,50.1);

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({y:100.2},23,cjs.Ease.get(1)).wait(81));

	// Layer 54 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("EAlSANIIAA3bIMDAAIAAXbg");
	var mask_9_graphics_47 = new cjs.Graphics().p("EAlSANIIAA3bIMDAAIAAXbg");
	var mask_9_graphics_48 = new cjs.Graphics().p("EAlfANJIAA3aIMCAAIAAXag");
	var mask_9_graphics_49 = new cjs.Graphics().p("EAlrANKIAA3aIMCAAIAAXag");
	var mask_9_graphics_50 = new cjs.Graphics().p("EAl2ANLIAA3aIMCAAIAAXag");
	var mask_9_graphics_51 = new cjs.Graphics().p("EAmBANMIAA3aIMCAAIAAXag");
	var mask_9_graphics_52 = new cjs.Graphics().p("EAmLANNIAA3aIMCAAIAAXag");
	var mask_9_graphics_53 = new cjs.Graphics().p("EAmUANOIAA3aIMCAAIAAXag");
	var mask_9_graphics_54 = new cjs.Graphics().p("EAmdANPIAA3aIMCAAIAAXag");
	var mask_9_graphics_55 = new cjs.Graphics().p("EAmmANQIAA3aIMCAAIAAXag");
	var mask_9_graphics_56 = new cjs.Graphics().p("EAmuANRIAA3aIMCAAIAAXag");
	var mask_9_graphics_57 = new cjs.Graphics().p("EAm1ANSIAA3aIMCAAIAAXag");
	var mask_9_graphics_58 = new cjs.Graphics().p("EAm8ANSIAA3aIMCAAIAAXag");
	var mask_9_graphics_59 = new cjs.Graphics().p("EAnCANTIAA3aIMCAAIAAXag");
	var mask_9_graphics_60 = new cjs.Graphics().p("EAnIANUIAA3aIMCAAIAAXag");
	var mask_9_graphics_61 = new cjs.Graphics().p("EAnNANUIAA3aIMCAAIAAXag");
	var mask_9_graphics_62 = new cjs.Graphics().p("EAnSANVIAA3aIMCAAIAAXag");
	var mask_9_graphics_63 = new cjs.Graphics().p("EAnWANVIAA3aIMCAAIAAXag");
	var mask_9_graphics_64 = new cjs.Graphics().p("EAnaANVIAA3aIMCAAIAAXag");
	var mask_9_graphics_65 = new cjs.Graphics().p("EAndANWIAA3aIMCAAIAAXag");
	var mask_9_graphics_66 = new cjs.Graphics().p("EAnfANWIAA3aIMCAAIAAXag");
	var mask_9_graphics_67 = new cjs.Graphics().p("EAnhANWIAA3aIMCAAIAAXag");
	var mask_9_graphics_68 = new cjs.Graphics().p("EAniANWIAA3aIMCAAIAAXag");
	var mask_9_graphics_69 = new cjs.Graphics().p("EAnjANWIAA3aIMCAAIAAXag");
	var mask_9_graphics_70 = new cjs.Graphics().p("EAnjANXIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:315.7,y:84}).wait(47).to({graphics:mask_9_graphics_47,x:315.7,y:84}).wait(1).to({graphics:mask_9_graphics_48,x:316.9,y:84.1}).wait(1).to({graphics:mask_9_graphics_49,x:318.1,y:84.2}).wait(1).to({graphics:mask_9_graphics_50,x:319.2,y:84.4}).wait(1).to({graphics:mask_9_graphics_51,x:320.3,y:84.5}).wait(1).to({graphics:mask_9_graphics_52,x:321.3,y:84.6}).wait(1).to({graphics:mask_9_graphics_53,x:322.3,y:84.7}).wait(1).to({graphics:mask_9_graphics_54,x:323.2,y:84.8}).wait(1).to({graphics:mask_9_graphics_55,x:324,y:84.9}).wait(1).to({graphics:mask_9_graphics_56,x:324.8,y:84.9}).wait(1).to({graphics:mask_9_graphics_57,x:325.6,y:85}).wait(1).to({graphics:mask_9_graphics_58,x:326.3,y:85.1}).wait(1).to({graphics:mask_9_graphics_59,x:326.9,y:85.2}).wait(1).to({graphics:mask_9_graphics_60,x:327.5,y:85.2}).wait(1).to({graphics:mask_9_graphics_61,x:328,y:85.3}).wait(1).to({graphics:mask_9_graphics_62,x:328.4,y:85.3}).wait(1).to({graphics:mask_9_graphics_63,x:328.9,y:85.4}).wait(1).to({graphics:mask_9_graphics_64,x:329.2,y:85.4}).wait(1).to({graphics:mask_9_graphics_65,x:329.5,y:85.4}).wait(1).to({graphics:mask_9_graphics_66,x:329.8,y:85.5}).wait(1).to({graphics:mask_9_graphics_67,x:330,y:85.5}).wait(1).to({graphics:mask_9_graphics_68,x:330.1,y:85.5}).wait(1).to({graphics:mask_9_graphics_69,x:330.2,y:85.5}).wait(1).to({graphics:mask_9_graphics_70,x:330.2,y:85.5}).wait(75));

	// Layer 53
	this.instance_9 = new lib.events_f3();
	this.instance_9.setTransform(644.2,100.2,1,1,0,0,0,20.6,50.1);

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(145));

	// Layer 52 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("EAvEANIIAA3bIMBAAIAAXbg");
	var mask_10_graphics_47 = new cjs.Graphics().p("EAuSALzIAA3bIMBAAIAAXbg");
	var mask_10_graphics_48 = new cjs.Graphics().p("EAuCALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_49 = new cjs.Graphics().p("EAt0ALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_50 = new cjs.Graphics().p("EAtmALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_51 = new cjs.Graphics().p("EAtYALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_52 = new cjs.Graphics().p("EAtMALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_53 = new cjs.Graphics().p("EAtAALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_54 = new cjs.Graphics().p("EAs1ALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_55 = new cjs.Graphics().p("EAsqALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_56 = new cjs.Graphics().p("EAsgALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_57 = new cjs.Graphics().p("EAsXALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_58 = new cjs.Graphics().p("EAsOALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_59 = new cjs.Graphics().p("EAsHALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_60 = new cjs.Graphics().p("EAsAALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_61 = new cjs.Graphics().p("EAr5ALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_62 = new cjs.Graphics().p("EArzALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_63 = new cjs.Graphics().p("EAruALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_64 = new cjs.Graphics().p("EArqALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_65 = new cjs.Graphics().p("EArmALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_66 = new cjs.Graphics().p("EArjALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_67 = new cjs.Graphics().p("EArhALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_68 = new cjs.Graphics().p("EArfALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_69 = new cjs.Graphics().p("EAreALzIAA3bIMCAAIAAXbg");
	var mask_10_graphics_70 = new cjs.Graphics().p("EAreALzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:378.2,y:84}).wait(47).to({graphics:mask_10_graphics_47,x:373.2,y:75.5}).wait(1).to({graphics:mask_10_graphics_48,x:371.7,y:75.5}).wait(1).to({graphics:mask_10_graphics_49,x:370.2,y:75.5}).wait(1).to({graphics:mask_10_graphics_50,x:368.8,y:75.5}).wait(1).to({graphics:mask_10_graphics_51,x:367.5,y:75.5}).wait(1).to({graphics:mask_10_graphics_52,x:366.2,y:75.5}).wait(1).to({graphics:mask_10_graphics_53,x:365,y:75.5}).wait(1).to({graphics:mask_10_graphics_54,x:363.9,y:75.5}).wait(1).to({graphics:mask_10_graphics_55,x:362.9,y:75.5}).wait(1).to({graphics:mask_10_graphics_56,x:361.9,y:75.5}).wait(1).to({graphics:mask_10_graphics_57,x:361,y:75.5}).wait(1).to({graphics:mask_10_graphics_58,x:360.1,y:75.5}).wait(1).to({graphics:mask_10_graphics_59,x:359.3,y:75.5}).wait(1).to({graphics:mask_10_graphics_60,x:358.6,y:75.5}).wait(1).to({graphics:mask_10_graphics_61,x:358,y:75.5}).wait(1).to({graphics:mask_10_graphics_62,x:357.4,y:75.5}).wait(1).to({graphics:mask_10_graphics_63,x:356.9,y:75.5}).wait(1).to({graphics:mask_10_graphics_64,x:356.4,y:75.5}).wait(1).to({graphics:mask_10_graphics_65,x:356.1,y:75.5}).wait(1).to({graphics:mask_10_graphics_66,x:355.7,y:75.5}).wait(1).to({graphics:mask_10_graphics_67,x:355.5,y:75.5}).wait(1).to({graphics:mask_10_graphics_68,x:355.3,y:75.5}).wait(1).to({graphics:mask_10_graphics_69,x:355.2,y:75.5}).wait(1).to({graphics:mask_10_graphics_70,x:355.2,y:75.5}).wait(75));

	// Layer 51
	this.instance_10 = new lib.events_f2();
	this.instance_10.setTransform(644.2,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({y:100.2},23,cjs.Ease.get(1)).wait(75));

	// Layer 50 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_37 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_38 = new cjs.Graphics().p("EAplALuIAA3bIMDAAIAAXbg");
	var mask_11_graphics_39 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_40 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_41 = new cjs.Graphics().p("EAplALuIAA3aIMDAAIAAXag");
	var mask_11_graphics_42 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_43 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_44 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_45 = new cjs.Graphics().p("EAplALtIAA3aIMDAAIAAXag");
	var mask_11_graphics_46 = new cjs.Graphics().p("EAplALuIAA3bIMDAAIAAXbg");
	var mask_11_graphics_47 = new cjs.Graphics().p("EAplALtIAA3aIMDAAIAAXag");
	var mask_11_graphics_48 = new cjs.Graphics().p("EAplALuIAA3aIMDAAIAAXag");
	var mask_11_graphics_49 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_50 = new cjs.Graphics().p("EAplALuIAA3bIMDAAIAAXbg");
	var mask_11_graphics_51 = new cjs.Graphics().p("EAplALtIAA3aIMDAAIAAXag");
	var mask_11_graphics_52 = new cjs.Graphics().p("EAplALuIAA3bIMDAAIAAXbg");
	var mask_11_graphics_53 = new cjs.Graphics().p("EAplALtIAA3aIMDAAIAAXag");
	var mask_11_graphics_54 = new cjs.Graphics().p("EAplALuIAA3aIMDAAIAAXag");
	var mask_11_graphics_55 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_56 = new cjs.Graphics().p("EAplALtIAA3ZIMDAAIAAXZg");
	var mask_11_graphics_57 = new cjs.Graphics().p("EAplALuIAA3bIMDAAIAAXbg");
	var mask_11_graphics_58 = new cjs.Graphics().p("EAplALvIAA3aIMDAAIAAXag");
	var mask_11_graphics_59 = new cjs.Graphics().p("EAplALyIAA3aIMDAAIAAXag");
	var mask_11_graphics_60 = new cjs.Graphics().p("EAplALzIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:343.2,y:-27}).wait(37).to({graphics:mask_11_graphics_37,x:343.2,y:-27}).wait(1).to({graphics:mask_11_graphics_38,x:343.2,y:-18.2}).wait(1).to({graphics:mask_11_graphics_39,x:343.2,y:-9.9}).wait(1).to({graphics:mask_11_graphics_40,x:343.2,y:-1.9}).wait(1).to({graphics:mask_11_graphics_41,x:343.2,y:5.7}).wait(1).to({graphics:mask_11_graphics_42,x:343.2,y:12.9}).wait(1).to({graphics:mask_11_graphics_43,x:343.2,y:19.7}).wait(1).to({graphics:mask_11_graphics_44,x:343.2,y:26.2}).wait(1).to({graphics:mask_11_graphics_45,x:343.2,y:32.2}).wait(1).to({graphics:mask_11_graphics_46,x:343.2,y:37.8}).wait(1).to({graphics:mask_11_graphics_47,x:343.2,y:43.1}).wait(1).to({graphics:mask_11_graphics_48,x:343.2,y:48}).wait(1).to({graphics:mask_11_graphics_49,x:343.2,y:52.4}).wait(1).to({graphics:mask_11_graphics_50,x:343.2,y:56.5}).wait(1).to({graphics:mask_11_graphics_51,x:343.2,y:60.2}).wait(1).to({graphics:mask_11_graphics_52,x:343.2,y:63.5}).wait(1).to({graphics:mask_11_graphics_53,x:343.2,y:66.5}).wait(1).to({graphics:mask_11_graphics_54,x:343.2,y:69}).wait(1).to({graphics:mask_11_graphics_55,x:343.2,y:71.1}).wait(1).to({graphics:mask_11_graphics_56,x:343.2,y:72.9}).wait(1).to({graphics:mask_11_graphics_57,x:343.2,y:74.2}).wait(1).to({graphics:mask_11_graphics_58,x:343.2,y:75.1}).wait(1).to({graphics:mask_11_graphics_59,x:343.2,y:75.4}).wait(1).to({graphics:mask_11_graphics_60,x:343.2,y:75.5}).wait(85));

	// Layer 49
	this.instance_11 = new lib.events_f1();
	this.instance_11.setTransform(644.2,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37).to({y:100.2},23,cjs.Ease.get(1)).wait(85));

	// Layer 46 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("EAnwAN6IAA3bIMDAAIAAXbg");
	var mask_12_graphics_41 = new cjs.Graphics().p("EAnwAN6IAA3bIMDAAIAAXbg");
	var mask_12_graphics_42 = new cjs.Graphics().p("EAnaAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_43 = new cjs.Graphics().p("EAnEAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_44 = new cjs.Graphics().p("EAmwAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_45 = new cjs.Graphics().p("EAmcAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_46 = new cjs.Graphics().p("EAmKAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_47 = new cjs.Graphics().p("EAl4AN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_48 = new cjs.Graphics().p("EAloAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_49 = new cjs.Graphics().p("EAlYAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_50 = new cjs.Graphics().p("EAlKAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_51 = new cjs.Graphics().p("EAk8AN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_52 = new cjs.Graphics().p("EAkwAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_53 = new cjs.Graphics().p("EAkkAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_54 = new cjs.Graphics().p("EAkaAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_55 = new cjs.Graphics().p("EAkQAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_56 = new cjs.Graphics().p("EAkIAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_57 = new cjs.Graphics().p("EAkAAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_58 = new cjs.Graphics().p("EAj6AN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_59 = new cjs.Graphics().p("EAj0AN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_60 = new cjs.Graphics().p("EAjwAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_61 = new cjs.Graphics().p("EAjsAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_62 = new cjs.Graphics().p("EAjpAN6IAA3bIMDAAIAAXbg");
	var mask_12_graphics_63 = new cjs.Graphics().p("EAjoAN6IAA3bIMCAAIAAXbg");
	var mask_12_graphics_64 = new cjs.Graphics().p("EAjnAN6IAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:331.5,y:89}).wait(41).to({graphics:mask_12_graphics_41,x:331.5,y:89}).wait(1).to({graphics:mask_12_graphics_42,x:329.2,y:89}).wait(1).to({graphics:mask_12_graphics_43,x:327.1,y:89}).wait(1).to({graphics:mask_12_graphics_44,x:325,y:89}).wait(1).to({graphics:mask_12_graphics_45,x:323.1,y:89}).wait(1).to({graphics:mask_12_graphics_46,x:321.2,y:89}).wait(1).to({graphics:mask_12_graphics_47,x:319.5,y:89}).wait(1).to({graphics:mask_12_graphics_48,x:317.8,y:89}).wait(1).to({graphics:mask_12_graphics_49,x:316.3,y:89}).wait(1).to({graphics:mask_12_graphics_50,x:314.8,y:89}).wait(1).to({graphics:mask_12_graphics_51,x:313.5,y:89}).wait(1).to({graphics:mask_12_graphics_52,x:312.2,y:89}).wait(1).to({graphics:mask_12_graphics_53,x:311.1,y:89}).wait(1).to({graphics:mask_12_graphics_54,x:310,y:89}).wait(1).to({graphics:mask_12_graphics_55,x:309.1,y:89}).wait(1).to({graphics:mask_12_graphics_56,x:308.2,y:89}).wait(1).to({graphics:mask_12_graphics_57,x:307.5,y:89}).wait(1).to({graphics:mask_12_graphics_58,x:306.8,y:89}).wait(1).to({graphics:mask_12_graphics_59,x:306.3,y:89}).wait(1).to({graphics:mask_12_graphics_60,x:305.8,y:89}).wait(1).to({graphics:mask_12_graphics_61,x:305.5,y:89}).wait(1).to({graphics:mask_12_graphics_62,x:305.2,y:89}).wait(1).to({graphics:mask_12_graphics_63,x:305.1,y:89}).wait(1).to({graphics:mask_12_graphics_64,x:305,y:89}).wait(81));

	// Layer 45
	this.instance_12 = new lib.events_plus2();
	this.instance_12.setTransform(558.5,100.3,1,1,0,0,0,23.8,24);

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(145));

	// Layer 44 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_31 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_32 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_33 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_34 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_35 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_36 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_37 = new cjs.Graphics().p("EAiSALuIAA3aIMDAAIAAXag");
	var mask_13_graphics_38 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_39 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");
	var mask_13_graphics_40 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_41 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_42 = new cjs.Graphics().p("EAiSALtIAA3aIMDAAIAAXag");
	var mask_13_graphics_43 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_44 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_45 = new cjs.Graphics().p("EAiSALuIAA3aIMDAAIAAXag");
	var mask_13_graphics_46 = new cjs.Graphics().p("EAiSALuIAA3aIMDAAIAAXag");
	var mask_13_graphics_47 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_48 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_49 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_50 = new cjs.Graphics().p("EAiSALuIAA3aIMDAAIAAXag");
	var mask_13_graphics_51 = new cjs.Graphics().p("EAiSALuIAA3aIMDAAIAAXag");
	var mask_13_graphics_52 = new cjs.Graphics().p("EAiSALtIAA3aIMDAAIAAXag");
	var mask_13_graphics_53 = new cjs.Graphics().p("EAiSALtIAA3ZIMDAAIAAXZg");
	var mask_13_graphics_54 = new cjs.Graphics().p("EAiSALuIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:296.5,y:13}).wait(31).to({graphics:mask_13_graphics_31,x:296.5,y:33}).wait(1).to({graphics:mask_13_graphics_32,x:296.5,y:34.4}).wait(1).to({graphics:mask_13_graphics_33,x:296.5,y:35.8}).wait(1).to({graphics:mask_13_graphics_34,x:296.5,y:37.1}).wait(1).to({graphics:mask_13_graphics_35,x:296.5,y:38.4}).wait(1).to({graphics:mask_13_graphics_36,x:296.5,y:39.6}).wait(1).to({graphics:mask_13_graphics_37,x:296.5,y:40.7}).wait(1).to({graphics:mask_13_graphics_38,x:296.5,y:41.8}).wait(1).to({graphics:mask_13_graphics_39,x:296.5,y:42.8}).wait(1).to({graphics:mask_13_graphics_40,x:296.5,y:43.7}).wait(1).to({graphics:mask_13_graphics_41,x:296.5,y:44.6}).wait(1).to({graphics:mask_13_graphics_42,x:296.5,y:45.4}).wait(1).to({graphics:mask_13_graphics_43,x:296.5,y:46.1}).wait(1).to({graphics:mask_13_graphics_44,x:296.5,y:46.8}).wait(1).to({graphics:mask_13_graphics_45,x:296.5,y:47.4}).wait(1).to({graphics:mask_13_graphics_46,x:296.5,y:47.9}).wait(1).to({graphics:mask_13_graphics_47,x:296.5,y:48.4}).wait(1).to({graphics:mask_13_graphics_48,x:296.5,y:48.8}).wait(1).to({graphics:mask_13_graphics_49,x:296.5,y:49.2}).wait(1).to({graphics:mask_13_graphics_50,x:296.5,y:49.5}).wait(1).to({graphics:mask_13_graphics_51,x:296.5,y:49.7}).wait(1).to({graphics:mask_13_graphics_52,x:296.5,y:49.9}).wait(1).to({graphics:mask_13_graphics_53,x:296.5,y:50}).wait(1).to({graphics:mask_13_graphics_54,x:296.5,y:50}).wait(91));

	// Layer 43
	this.instance_13 = new lib.events_plus1();
	this.instance_13.setTransform(558.5,140.3,1,1,0,0,0,23.8,24);

	this.instance_13.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({y:100.3},23,cjs.Ease.get(1)).wait(91));

	// Layer 89 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("AcKRzIAA3ZIMDAAIAAXZg");
	var mask_14_graphics_37 = new cjs.Graphics().p("AcKRzIAA3ZIMDAAIAAXZg");
	var mask_14_graphics_38 = new cjs.Graphics().p("AcKRnIAA3aIMDAAIAAXag");
	var mask_14_graphics_39 = new cjs.Graphics().p("AcKRbIAA3aIMDAAIAAXag");
	var mask_14_graphics_40 = new cjs.Graphics().p("AcKRPIAA3aIMDAAIAAXag");
	var mask_14_graphics_41 = new cjs.Graphics().p("AcKREIAA3aIMDAAIAAXag");
	var mask_14_graphics_42 = new cjs.Graphics().p("AcKQ5IAA3aIMDAAIAAXag");
	var mask_14_graphics_43 = new cjs.Graphics().p("AcKQvIAA3aIMDAAIAAXag");
	var mask_14_graphics_44 = new cjs.Graphics().p("AcKQmIAA3aIMDAAIAAXag");
	var mask_14_graphics_45 = new cjs.Graphics().p("AcKQdIAA3aIMDAAIAAXag");
	var mask_14_graphics_46 = new cjs.Graphics().p("AcKQVIAA3aIMDAAIAAXag");
	var mask_14_graphics_47 = new cjs.Graphics().p("AcKQNIAA3aIMDAAIAAXag");
	var mask_14_graphics_48 = new cjs.Graphics().p("AcKQGIAA3aIMDAAIAAXag");
	var mask_14_graphics_49 = new cjs.Graphics().p("AcKQAIAA3aIMDAAIAAXag");
	var mask_14_graphics_50 = new cjs.Graphics().p("AcKP6IAA3aIMDAAIAAXag");
	var mask_14_graphics_51 = new cjs.Graphics().p("AcKP0IAA3aIMDAAIAAXag");
	var mask_14_graphics_52 = new cjs.Graphics().p("AcKPwIAA3aIMDAAIAAXag");
	var mask_14_graphics_53 = new cjs.Graphics().p("AcKPrIAA3aIMDAAIAAXag");
	var mask_14_graphics_54 = new cjs.Graphics().p("AcKPoIAA3aIMDAAIAAXag");
	var mask_14_graphics_55 = new cjs.Graphics().p("AcKPlIAA3aIMDAAIAAXag");
	var mask_14_graphics_56 = new cjs.Graphics().p("AcKPiIAA3aIMDAAIAAXag");
	var mask_14_graphics_57 = new cjs.Graphics().p("AcKPgIAA3aIMDAAIAAXag");
	var mask_14_graphics_58 = new cjs.Graphics().p("AcKPfIAA3aIMDAAIAAXag");
	var mask_14_graphics_59 = new cjs.Graphics().p("AcKPeIAA3aIMDAAIAAXag");
	var mask_14_graphics_60 = new cjs.Graphics().p("AcKPeIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:257.3,y:114}).wait(37).to({graphics:mask_14_graphics_37,x:257.3,y:114}).wait(1).to({graphics:mask_14_graphics_38,x:257.3,y:112.7}).wait(1).to({graphics:mask_14_graphics_39,x:257.3,y:111.5}).wait(1).to({graphics:mask_14_graphics_40,x:257.3,y:110.3}).wait(1).to({graphics:mask_14_graphics_41,x:257.3,y:109.2}).wait(1).to({graphics:mask_14_graphics_42,x:257.3,y:108.2}).wait(1).to({graphics:mask_14_graphics_43,x:257.3,y:107.2}).wait(1).to({graphics:mask_14_graphics_44,x:257.3,y:106.3}).wait(1).to({graphics:mask_14_graphics_45,x:257.3,y:105.4}).wait(1).to({graphics:mask_14_graphics_46,x:257.3,y:104.6}).wait(1).to({graphics:mask_14_graphics_47,x:257.3,y:103.8}).wait(1).to({graphics:mask_14_graphics_48,x:257.3,y:103.1}).wait(1).to({graphics:mask_14_graphics_49,x:257.3,y:102.4}).wait(1).to({graphics:mask_14_graphics_50,x:257.3,y:101.8}).wait(1).to({graphics:mask_14_graphics_51,x:257.3,y:101.3}).wait(1).to({graphics:mask_14_graphics_52,x:257.3,y:100.8}).wait(1).to({graphics:mask_14_graphics_53,x:257.3,y:100.4}).wait(1).to({graphics:mask_14_graphics_54,x:257.3,y:100}).wait(1).to({graphics:mask_14_graphics_55,x:257.3,y:99.7}).wait(1).to({graphics:mask_14_graphics_56,x:257.3,y:99.5}).wait(1).to({graphics:mask_14_graphics_57,x:257.3,y:99.3}).wait(1).to({graphics:mask_14_graphics_58,x:257.3,y:99.1}).wait(1).to({graphics:mask_14_graphics_59,x:257.3,y:99}).wait(1).to({graphics:mask_14_graphics_60,x:257.3,y:99}).wait(85));

	// Layer 87
	this.instance_14 = new lib.events_s2();
	this.instance_14.setTransform(471.5,70.3,1,1,0,0,0,22.6,51.1);

	this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(37).to({y:100.3},23,cjs.Ease.get(1)).wait(85));

	// Layer 88 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_0 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_15_graphics_37 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_15_graphics_38 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_39 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_40 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_15_graphics_41 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_42 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_43 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_44 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_15_graphics_45 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_46 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_47 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_48 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_49 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_50 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_51 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_52 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_53 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_15_graphics_54 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_15_graphics_55 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_15_graphics_56 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_15_graphics_57 = new cjs.Graphics().p("AcKLwIAA3aIMDAAIAAXag");
	var mask_15_graphics_58 = new cjs.Graphics().p("AcKLxIAA3aIMDAAIAAXag");
	var mask_15_graphics_59 = new cjs.Graphics().p("AcKLyIAA3aIMDAAIAAXag");
	var mask_15_graphics_60 = new cjs.Graphics().p("AcKLzIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:mask_15_graphics_0,x:257.3,y:43}).wait(37).to({graphics:mask_15_graphics_37,x:257.3,y:43}).wait(1).to({graphics:mask_15_graphics_38,x:257.3,y:45.8}).wait(1).to({graphics:mask_15_graphics_39,x:257.3,y:48.5}).wait(1).to({graphics:mask_15_graphics_40,x:257.3,y:51}).wait(1).to({graphics:mask_15_graphics_41,x:257.3,y:53.5}).wait(1).to({graphics:mask_15_graphics_42,x:257.3,y:55.8}).wait(1).to({graphics:mask_15_graphics_43,x:257.3,y:58}).wait(1).to({graphics:mask_15_graphics_44,x:257.3,y:60}).wait(1).to({graphics:mask_15_graphics_45,x:257.3,y:62}).wait(1).to({graphics:mask_15_graphics_46,x:257.3,y:63.8}).wait(1).to({graphics:mask_15_graphics_47,x:257.3,y:65.5}).wait(1).to({graphics:mask_15_graphics_48,x:257.3,y:67}).wait(1).to({graphics:mask_15_graphics_49,x:257.3,y:68.5}).wait(1).to({graphics:mask_15_graphics_50,x:257.3,y:69.8}).wait(1).to({graphics:mask_15_graphics_51,x:257.3,y:70.9}).wait(1).to({graphics:mask_15_graphics_52,x:257.3,y:72}).wait(1).to({graphics:mask_15_graphics_53,x:257.3,y:72.9}).wait(1).to({graphics:mask_15_graphics_54,x:257.3,y:73.8}).wait(1).to({graphics:mask_15_graphics_55,x:257.3,y:74.4}).wait(1).to({graphics:mask_15_graphics_56,x:257.3,y:75}).wait(1).to({graphics:mask_15_graphics_57,x:257.3,y:75.2}).wait(1).to({graphics:mask_15_graphics_58,x:257.3,y:75.4}).wait(1).to({graphics:mask_15_graphics_59,x:257.3,y:75.5}).wait(1).to({graphics:mask_15_graphics_60,x:257.3,y:75.5}).wait(85));

	// Layer 86
	this.instance_15 = new lib.events_s3();
	this.instance_15.setTransform(471.5,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_15.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(37).to({y:100.3},23,cjs.Ease.get(1)).wait(85));

	// Layer 85 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_0 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_26 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_27 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_28 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_16_graphics_29 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_30 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_31 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_32 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_33 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_16_graphics_34 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_35 = new cjs.Graphics().p("AcKLtIAA3ZIMDAAIAAXZg");
	var mask_16_graphics_36 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_37 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_38 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_16_graphics_39 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_16_graphics_40 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_41 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_16_graphics_42 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");
	var mask_16_graphics_43 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_16_graphics_44 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_45 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_46 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_47 = new cjs.Graphics().p("AcKLuIAA3bIMDAAIAAXbg");
	var mask_16_graphics_48 = new cjs.Graphics().p("AcKLtIAA3aIMDAAIAAXag");
	var mask_16_graphics_49 = new cjs.Graphics().p("AcKLuIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:mask_16_graphics_0,x:257.3,y:-27}).wait(26).to({graphics:mask_16_graphics_26,x:257.3,y:-27}).wait(1).to({graphics:mask_16_graphics_27,x:257.3,y:-20.7}).wait(1).to({graphics:mask_16_graphics_28,x:257.3,y:-14.7}).wait(1).to({graphics:mask_16_graphics_29,x:257.3,y:-9}).wait(1).to({graphics:mask_16_graphics_30,x:257.3,y:-3.5}).wait(1).to({graphics:mask_16_graphics_31,x:257.3,y:1.7}).wait(1).to({graphics:mask_16_graphics_32,x:257.3,y:6.6}).wait(1).to({graphics:mask_16_graphics_33,x:257.3,y:11.2}).wait(1).to({graphics:mask_16_graphics_34,x:257.3,y:15.5}).wait(1).to({graphics:mask_16_graphics_35,x:257.3,y:19.6}).wait(1).to({graphics:mask_16_graphics_36,x:257.3,y:23.4}).wait(1).to({graphics:mask_16_graphics_37,x:257.3,y:26.9}).wait(1).to({graphics:mask_16_graphics_38,x:257.3,y:30.1}).wait(1).to({graphics:mask_16_graphics_39,x:257.3,y:33}).wait(1).to({graphics:mask_16_graphics_40,x:257.3,y:35.7}).wait(1).to({graphics:mask_16_graphics_41,x:257.3,y:38}).wait(1).to({graphics:mask_16_graphics_42,x:257.3,y:40.1}).wait(1).to({graphics:mask_16_graphics_43,x:257.3,y:42}).wait(1).to({graphics:mask_16_graphics_44,x:257.3,y:43.5}).wait(1).to({graphics:mask_16_graphics_45,x:257.3,y:44.8}).wait(1).to({graphics:mask_16_graphics_46,x:257.3,y:45.7}).wait(1).to({graphics:mask_16_graphics_47,x:257.3,y:46.4}).wait(1).to({graphics:mask_16_graphics_48,x:257.3,y:46.9}).wait(1).to({graphics:mask_16_graphics_49,x:257.3,y:47}).wait(96));

	// Layer 71
	this.instance_16 = new lib.events_s1();
	this.instance_16.setTransform(471.5,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_16.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(26).to({y:100.3},23,cjs.Ease.get(1)).wait(96));

	// Layer 26 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_0 = new cjs.Graphics().p("AaQOXIAA3ZIMDAAIAAXZg");
	var mask_17_graphics_31 = new cjs.Graphics().p("AaQOXIAA3ZIMDAAIAAXZg");
	var mask_17_graphics_32 = new cjs.Graphics().p("AZ7OXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_33 = new cjs.Graphics().p("AZnOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_34 = new cjs.Graphics().p("AZUOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_35 = new cjs.Graphics().p("AZCOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_36 = new cjs.Graphics().p("AYwOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_37 = new cjs.Graphics().p("AYgOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_38 = new cjs.Graphics().p("AYROXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_39 = new cjs.Graphics().p("AYCOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_40 = new cjs.Graphics().p("AX0OXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_41 = new cjs.Graphics().p("AXoOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_42 = new cjs.Graphics().p("AXcOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_43 = new cjs.Graphics().p("AXROXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_44 = new cjs.Graphics().p("AXHOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_45 = new cjs.Graphics().p("AW+OXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_46 = new cjs.Graphics().p("AW3OXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_47 = new cjs.Graphics().p("AWvOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_48 = new cjs.Graphics().p("AWpOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_49 = new cjs.Graphics().p("AWkOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_50 = new cjs.Graphics().p("AWgOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_51 = new cjs.Graphics().p("AWdOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_52 = new cjs.Graphics().p("AWaOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_53 = new cjs.Graphics().p("AWZOXIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_54 = new cjs.Graphics().p("AWZOXIAA3ZIMCAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:mask_17_graphics_0,x:245.1,y:92}).wait(31).to({graphics:mask_17_graphics_31,x:245.1,y:92}).wait(1).to({graphics:mask_17_graphics_32,x:243,y:92}).wait(1).to({graphics:mask_17_graphics_33,x:241,y:92}).wait(1).to({graphics:mask_17_graphics_34,x:239.1,y:92}).wait(1).to({graphics:mask_17_graphics_35,x:237.2,y:92}).wait(1).to({graphics:mask_17_graphics_36,x:235.5,y:92}).wait(1).to({graphics:mask_17_graphics_37,x:233.8,y:92}).wait(1).to({graphics:mask_17_graphics_38,x:232.3,y:92}).wait(1).to({graphics:mask_17_graphics_39,x:230.8,y:92}).wait(1).to({graphics:mask_17_graphics_40,x:229.5,y:92}).wait(1).to({graphics:mask_17_graphics_41,x:228.2,y:92}).wait(1).to({graphics:mask_17_graphics_42,x:227.1,y:92}).wait(1).to({graphics:mask_17_graphics_43,x:226,y:92}).wait(1).to({graphics:mask_17_graphics_44,x:225,y:92}).wait(1).to({graphics:mask_17_graphics_45,x:224.1,y:92}).wait(1).to({graphics:mask_17_graphics_46,x:223.3,y:92}).wait(1).to({graphics:mask_17_graphics_47,x:222.6,y:92}).wait(1).to({graphics:mask_17_graphics_48,x:222,y:92}).wait(1).to({graphics:mask_17_graphics_49,x:221.5,y:92}).wait(1).to({graphics:mask_17_graphics_50,x:221.1,y:92}).wait(1).to({graphics:mask_17_graphics_51,x:220.7,y:92}).wait(1).to({graphics:mask_17_graphics_52,x:220.5,y:92}).wait(1).to({graphics:mask_17_graphics_53,x:220.3,y:92}).wait(1).to({graphics:mask_17_graphics_54,x:220.3,y:92}).wait(91));

	// Layer 40
	this.instance_17 = new lib.events_t2();
	this.instance_17.setTransform(387.5,100.2,1,1,0,0,0,24,50.1);

	this.instance_17.mask = mask_17;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(145));

	// Layer 39 (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_0 = new cjs.Graphics().p("AVQLtIAA3ZIMDAAIAAXZg");
	var mask_18_graphics_20 = new cjs.Graphics().p("AVQLtIAA3ZIMDAAIAAXZg");
	var mask_18_graphics_21 = new cjs.Graphics().p("AVULuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_22 = new cjs.Graphics().p("AVXLtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_23 = new cjs.Graphics().p("AVaLtIAA3aIMCAAIAAXag");
	var mask_18_graphics_24 = new cjs.Graphics().p("AVdLtIAA3aIMCAAIAAXag");
	var mask_18_graphics_25 = new cjs.Graphics().p("AVgLtIAA3aIMCAAIAAXag");
	var mask_18_graphics_26 = new cjs.Graphics().p("AVjLtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_27 = new cjs.Graphics().p("AVlLuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_28 = new cjs.Graphics().p("AVnLtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_29 = new cjs.Graphics().p("AVqLtIAA3aIMCAAIAAXag");
	var mask_18_graphics_30 = new cjs.Graphics().p("AVsLuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_31 = new cjs.Graphics().p("AVuLuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_32 = new cjs.Graphics().p("AVvLtIAA3aIMCAAIAAXag");
	var mask_18_graphics_33 = new cjs.Graphics().p("AVxLtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_34 = new cjs.Graphics().p("AVyLuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_35 = new cjs.Graphics().p("AV0LuIAA3aIMCAAIAAXag");
	var mask_18_graphics_36 = new cjs.Graphics().p("AV1LtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_37 = new cjs.Graphics().p("AV2LtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_38 = new cjs.Graphics().p("AV3LuIAA3aIMCAAIAAXag");
	var mask_18_graphics_39 = new cjs.Graphics().p("AV3LuIAA3bIMCAAIAAXbg");
	var mask_18_graphics_40 = new cjs.Graphics().p("AV4LtIAA3ZIMCAAIAAXZg");
	var mask_18_graphics_41 = new cjs.Graphics().p("AV4LuIAA3aIMCAAIAAXag");
	var mask_18_graphics_42 = new cjs.Graphics().p("AV4LxIAA3aIMCAAIAAXag");
	var mask_18_graphics_43 = new cjs.Graphics().p("AV5LyIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:mask_18_graphics_0,x:213.1,y:-27}).wait(20).to({graphics:mask_18_graphics_20,x:213.1,y:-27}).wait(1).to({graphics:mask_18_graphics_21,x:213.4,y:-18.3}).wait(1).to({graphics:mask_18_graphics_22,x:213.8,y:-9.9}).wait(1).to({graphics:mask_18_graphics_23,x:214.1,y:-1.9}).wait(1).to({graphics:mask_18_graphics_24,x:214.4,y:5.6}).wait(1).to({graphics:mask_18_graphics_25,x:214.7,y:12.8}).wait(1).to({graphics:mask_18_graphics_26,x:214.9,y:19.6}).wait(1).to({graphics:mask_18_graphics_27,x:215.2,y:26.1}).wait(1).to({graphics:mask_18_graphics_28,x:215.4,y:32.1}).wait(1).to({graphics:mask_18_graphics_29,x:215.6,y:37.7}).wait(1).to({graphics:mask_18_graphics_30,x:215.8,y:43}).wait(1).to({graphics:mask_18_graphics_31,x:216,y:47.8}).wait(1).to({graphics:mask_18_graphics_32,x:216.2,y:52.3}).wait(1).to({graphics:mask_18_graphics_33,x:216.3,y:56.4}).wait(1).to({graphics:mask_18_graphics_34,x:216.5,y:60.1}).wait(1).to({graphics:mask_18_graphics_35,x:216.6,y:63.4}).wait(1).to({graphics:mask_18_graphics_36,x:216.7,y:66.3}).wait(1).to({graphics:mask_18_graphics_37,x:216.8,y:68.8}).wait(1).to({graphics:mask_18_graphics_38,x:216.9,y:70.9}).wait(1).to({graphics:mask_18_graphics_39,x:217,y:72.7}).wait(1).to({graphics:mask_18_graphics_40,x:217,y:74.1}).wait(1).to({graphics:mask_18_graphics_41,x:217.1,y:75}).wait(1).to({graphics:mask_18_graphics_42,x:217.1,y:75.3}).wait(1).to({graphics:mask_18_graphics_43,x:217.1,y:75.4}).wait(102));

	// Layer 38
	this.instance_18 = new lib.events_t1();
	this.instance_18.setTransform(387.5,132.2,1,1,0,0,0,24,50.1);

	this.instance_18.mask = mask_18;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20).to({y:100.2},23,cjs.Ease.get(1)).wait(102));

	// Layer 36 (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_0 = new cjs.Graphics().p("AOTVuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_26 = new cjs.Graphics().p("AOTVuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_27 = new cjs.Graphics().p("AOTVMIAA3aIMBAAIAAXag");
	var mask_19_graphics_28 = new cjs.Graphics().p("AOTUsIAA3aIMBAAIAAXag");
	var mask_19_graphics_29 = new cjs.Graphics().p("AOTUNIAA3aIMBAAIAAXag");
	var mask_19_graphics_30 = new cjs.Graphics().p("AOTTwIAA3aIMBAAIAAXag");
	var mask_19_graphics_31 = new cjs.Graphics().p("AOTTUIAA3aIMBAAIAAXag");
	var mask_19_graphics_32 = new cjs.Graphics().p("AOTS6IAA3aIMBAAIAAXag");
	var mask_19_graphics_33 = new cjs.Graphics().p("AOTSiIAA3aIMBAAIAAXag");
	var mask_19_graphics_34 = new cjs.Graphics().p("AOTSLIAA3aIMBAAIAAXag");
	var mask_19_graphics_35 = new cjs.Graphics().p("AOTR1IAA3aIMBAAIAAXag");
	var mask_19_graphics_36 = new cjs.Graphics().p("AOTRhIAA3aIMBAAIAAXag");
	var mask_19_graphics_37 = new cjs.Graphics().p("AOTROIAA3aIMBAAIAAXag");
	var mask_19_graphics_38 = new cjs.Graphics().p("AOTQ9IAA3aIMBAAIAAXag");
	var mask_19_graphics_39 = new cjs.Graphics().p("AOTQtIAA3aIMBAAIAAXag");
	var mask_19_graphics_40 = new cjs.Graphics().p("AOTQfIAA3aIMBAAIAAXag");
	var mask_19_graphics_41 = new cjs.Graphics().p("AOTQSIAA3aIMBAAIAAXag");
	var mask_19_graphics_42 = new cjs.Graphics().p("AOTQHIAA3aIMBAAIAAXag");
	var mask_19_graphics_43 = new cjs.Graphics().p("AOTP9IAA3aIMBAAIAAXag");
	var mask_19_graphics_44 = new cjs.Graphics().p("AOTP1IAA3aIMBAAIAAXag");
	var mask_19_graphics_45 = new cjs.Graphics().p("AOTPuIAA3aIMBAAIAAXag");
	var mask_19_graphics_46 = new cjs.Graphics().p("AOTPpIAA3aIMBAAIAAXag");
	var mask_19_graphics_47 = new cjs.Graphics().p("AOTPlIAA3aIMBAAIAAXag");
	var mask_19_graphics_48 = new cjs.Graphics().p("AOTPjIAA3aIMBAAIAAXag");
	var mask_19_graphics_49 = new cjs.Graphics().p("AOTPiIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:mask_19_graphics_0,x:168.5,y:139}).wait(26).to({graphics:mask_19_graphics_26,x:168.5,y:139}).wait(1).to({graphics:mask_19_graphics_27,x:168.5,y:135.6}).wait(1).to({graphics:mask_19_graphics_28,x:168.5,y:132.4}).wait(1).to({graphics:mask_19_graphics_29,x:168.5,y:129.4}).wait(1).to({graphics:mask_19_graphics_30,x:168.5,y:126.5}).wait(1).to({graphics:mask_19_graphics_31,x:168.5,y:123.7}).wait(1).to({graphics:mask_19_graphics_32,x:168.5,y:121.1}).wait(1).to({graphics:mask_19_graphics_33,x:168.5,y:118.6}).wait(1).to({graphics:mask_19_graphics_34,x:168.5,y:116.3}).wait(1).to({graphics:mask_19_graphics_35,x:168.5,y:114.1}).wait(1).to({graphics:mask_19_graphics_36,x:168.5,y:112.1}).wait(1).to({graphics:mask_19_graphics_37,x:168.5,y:110.3}).wait(1).to({graphics:mask_19_graphics_38,x:168.5,y:108.5}).wait(1).to({graphics:mask_19_graphics_39,x:168.5,y:107}).wait(1).to({graphics:mask_19_graphics_40,x:168.5,y:105.5}).wait(1).to({graphics:mask_19_graphics_41,x:168.5,y:104.3}).wait(1).to({graphics:mask_19_graphics_42,x:168.5,y:103.2}).wait(1).to({graphics:mask_19_graphics_43,x:168.5,y:102.2}).wait(1).to({graphics:mask_19_graphics_44,x:168.5,y:101.4}).wait(1).to({graphics:mask_19_graphics_45,x:168.5,y:100.7}).wait(1).to({graphics:mask_19_graphics_46,x:168.5,y:100.2}).wait(1).to({graphics:mask_19_graphics_47,x:168.5,y:99.8}).wait(1).to({graphics:mask_19_graphics_48,x:168.5,y:99.6}).wait(1).to({graphics:mask_19_graphics_49,x:168.5,y:99.5}).wait(96));

	// Layer 35
	this.instance_19 = new lib.events_n2();
	this.instance_19.setTransform(301,70.2,1,1,0,0,0,23.6,50.1);

	this.instance_19.mask = mask_19;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(26).to({y:100.2},23,cjs.Ease.get(1)).wait(96));

	// Layer 34 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_0 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_15 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_16 = new cjs.Graphics().p("AOTLuIAA3bIMBAAIAAXbg");
	var mask_20_graphics_17 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_18 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_19 = new cjs.Graphics().p("AOTLuIAA3aIMBAAIAAXag");
	var mask_20_graphics_20 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_21 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_22 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_23 = new cjs.Graphics().p("AOTLtIAA3aIMBAAIAAXag");
	var mask_20_graphics_24 = new cjs.Graphics().p("AOTLuIAA3bIMBAAIAAXbg");
	var mask_20_graphics_25 = new cjs.Graphics().p("AOTLtIAA3aIMBAAIAAXag");
	var mask_20_graphics_26 = new cjs.Graphics().p("AOTLuIAA3aIMBAAIAAXag");
	var mask_20_graphics_27 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_28 = new cjs.Graphics().p("AOTLuIAA3bIMBAAIAAXbg");
	var mask_20_graphics_29 = new cjs.Graphics().p("AOTLtIAA3aIMBAAIAAXag");
	var mask_20_graphics_30 = new cjs.Graphics().p("AOTLuIAA3bIMBAAIAAXbg");
	var mask_20_graphics_31 = new cjs.Graphics().p("AOTLtIAA3aIMBAAIAAXag");
	var mask_20_graphics_32 = new cjs.Graphics().p("AOTLuIAA3aIMBAAIAAXag");
	var mask_20_graphics_33 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_34 = new cjs.Graphics().p("AOTLtIAA3ZIMBAAIAAXZg");
	var mask_20_graphics_35 = new cjs.Graphics().p("AOTLuIAA3bIMBAAIAAXbg");
	var mask_20_graphics_36 = new cjs.Graphics().p("AOTLvIAA3aIMBAAIAAXag");
	var mask_20_graphics_37 = new cjs.Graphics().p("AOTLyIAA3aIMBAAIAAXag");
	var mask_20_graphics_38 = new cjs.Graphics().p("AOTLzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:mask_20_graphics_0,x:168.5,y:-27}).wait(15).to({graphics:mask_20_graphics_15,x:168.5,y:-27}).wait(1).to({graphics:mask_20_graphics_16,x:168.5,y:-18.2}).wait(1).to({graphics:mask_20_graphics_17,x:168.5,y:-9.9}).wait(1).to({graphics:mask_20_graphics_18,x:168.5,y:-1.9}).wait(1).to({graphics:mask_20_graphics_19,x:168.5,y:5.7}).wait(1).to({graphics:mask_20_graphics_20,x:168.5,y:12.9}).wait(1).to({graphics:mask_20_graphics_21,x:168.5,y:19.7}).wait(1).to({graphics:mask_20_graphics_22,x:168.5,y:26.2}).wait(1).to({graphics:mask_20_graphics_23,x:168.5,y:32.2}).wait(1).to({graphics:mask_20_graphics_24,x:168.5,y:37.8}).wait(1).to({graphics:mask_20_graphics_25,x:168.5,y:43.1}).wait(1).to({graphics:mask_20_graphics_26,x:168.5,y:48}).wait(1).to({graphics:mask_20_graphics_27,x:168.5,y:52.4}).wait(1).to({graphics:mask_20_graphics_28,x:168.5,y:56.5}).wait(1).to({graphics:mask_20_graphics_29,x:168.5,y:60.2}).wait(1).to({graphics:mask_20_graphics_30,x:168.5,y:63.5}).wait(1).to({graphics:mask_20_graphics_31,x:168.5,y:66.5}).wait(1).to({graphics:mask_20_graphics_32,x:168.5,y:69}).wait(1).to({graphics:mask_20_graphics_33,x:168.5,y:71.1}).wait(1).to({graphics:mask_20_graphics_34,x:168.5,y:72.9}).wait(1).to({graphics:mask_20_graphics_35,x:168.5,y:74.2}).wait(1).to({graphics:mask_20_graphics_36,x:168.5,y:75.1}).wait(1).to({graphics:mask_20_graphics_37,x:168.5,y:75.4}).wait(1).to({graphics:mask_20_graphics_38,x:168.5,y:75.5}).wait(107));

	// Layer 25
	this.instance_20 = new lib.events_n1();
	this.instance_20.setTransform(301,140.2,1,1,0,0,0,23.6,50.1);

	this.instance_20.mask = mask_20;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15).to({y:100.2},23,cjs.Ease.get(1)).wait(107));

	// Layer 32 (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_0 = new cjs.Graphics().p("ADrNIIAA3bIMCAAIAAXbg");
	var mask_21_graphics_20 = new cjs.Graphics().p("ADrNIIAA3bIMCAAIAAXbg");
	var mask_21_graphics_21 = new cjs.Graphics().p("AD3NJIAA3aIMCAAIAAXag");
	var mask_21_graphics_22 = new cjs.Graphics().p("AEDNKIAA3aIMCAAIAAXag");
	var mask_21_graphics_23 = new cjs.Graphics().p("AEONLIAA3aIMCAAIAAXag");
	var mask_21_graphics_24 = new cjs.Graphics().p("AEZNMIAA3aIMCAAIAAXag");
	var mask_21_graphics_25 = new cjs.Graphics().p("AEjNNIAA3aIMCAAIAAXag");
	var mask_21_graphics_26 = new cjs.Graphics().p("AEtNOIAA3aIMCAAIAAXag");
	var mask_21_graphics_27 = new cjs.Graphics().p("AE2NPIAA3aIMCAAIAAXag");
	var mask_21_graphics_28 = new cjs.Graphics().p("AE+NQIAA3aIMCAAIAAXag");
	var mask_21_graphics_29 = new cjs.Graphics().p("AFGNRIAA3aIMCAAIAAXag");
	var mask_21_graphics_30 = new cjs.Graphics().p("AFONSIAA3aIMCAAIAAXag");
	var mask_21_graphics_31 = new cjs.Graphics().p("AFVNSIAA3aIMCAAIAAXag");
	var mask_21_graphics_32 = new cjs.Graphics().p("AFbNTIAA3aIMCAAIAAXag");
	var mask_21_graphics_33 = new cjs.Graphics().p("AFhNUIAA3aIMCAAIAAXag");
	var mask_21_graphics_34 = new cjs.Graphics().p("AFmNUIAA3aIMCAAIAAXag");
	var mask_21_graphics_35 = new cjs.Graphics().p("AFqNVIAA3aIMCAAIAAXag");
	var mask_21_graphics_36 = new cjs.Graphics().p("AFvNVIAA3aIMCAAIAAXag");
	var mask_21_graphics_37 = new cjs.Graphics().p("AFyNVIAA3aIMCAAIAAXag");
	var mask_21_graphics_38 = new cjs.Graphics().p("AF1NWIAA3aIMCAAIAAXag");
	var mask_21_graphics_39 = new cjs.Graphics().p("AF4NWIAA3aIMCAAIAAXag");
	var mask_21_graphics_40 = new cjs.Graphics().p("AF6NWIAA3aIMCAAIAAXag");
	var mask_21_graphics_41 = new cjs.Graphics().p("AF7NWIAA3aIMCAAIAAXag");
	var mask_21_graphics_42 = new cjs.Graphics().p("AF8NWIAA3aIMCAAIAAXag");
	var mask_21_graphics_43 = new cjs.Graphics().p("AF8NXIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:mask_21_graphics_0,x:100.6,y:84}).wait(20).to({graphics:mask_21_graphics_20,x:100.6,y:84}).wait(1).to({graphics:mask_21_graphics_21,x:101.8,y:84.1}).wait(1).to({graphics:mask_21_graphics_22,x:103,y:84.2}).wait(1).to({graphics:mask_21_graphics_23,x:104.1,y:84.4}).wait(1).to({graphics:mask_21_graphics_24,x:105.2,y:84.5}).wait(1).to({graphics:mask_21_graphics_25,x:106.2,y:84.6}).wait(1).to({graphics:mask_21_graphics_26,x:107.1,y:84.7}).wait(1).to({graphics:mask_21_graphics_27,x:108,y:84.8}).wait(1).to({graphics:mask_21_graphics_28,x:108.9,y:84.9}).wait(1).to({graphics:mask_21_graphics_29,x:109.7,y:84.9}).wait(1).to({graphics:mask_21_graphics_30,x:110.4,y:85}).wait(1).to({graphics:mask_21_graphics_31,x:111.1,y:85.1}).wait(1).to({graphics:mask_21_graphics_32,x:111.7,y:85.2}).wait(1).to({graphics:mask_21_graphics_33,x:112.3,y:85.2}).wait(1).to({graphics:mask_21_graphics_34,x:112.8,y:85.3}).wait(1).to({graphics:mask_21_graphics_35,x:113.3,y:85.3}).wait(1).to({graphics:mask_21_graphics_36,x:113.7,y:85.4}).wait(1).to({graphics:mask_21_graphics_37,x:114.1,y:85.4}).wait(1).to({graphics:mask_21_graphics_38,x:114.4,y:85.4}).wait(1).to({graphics:mask_21_graphics_39,x:114.6,y:85.5}).wait(1).to({graphics:mask_21_graphics_40,x:114.8,y:85.5}).wait(1).to({graphics:mask_21_graphics_41,x:114.9,y:85.5}).wait(1).to({graphics:mask_21_graphics_42,x:115,y:85.5}).wait(1).to({graphics:mask_21_graphics_43,x:115.1,y:85.5}).wait(102));

	// Layer 31
	this.instance_21 = new lib.events_e3();
	this.instance_21.setTransform(213.9,100.2,1,1,0,0,0,20.6,50.1);

	this.instance_21.mask = mask_21;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(145));

	// Layer 30 (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_0 = new cjs.Graphics().p("ANcNIIAA3bIMCAAIAAXbg");
	var mask_22_graphics_20 = new cjs.Graphics().p("AMqLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_21 = new cjs.Graphics().p("AMbLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_22 = new cjs.Graphics().p("AMMLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_23 = new cjs.Graphics().p("AL+LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_24 = new cjs.Graphics().p("ALxLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_25 = new cjs.Graphics().p("ALkLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_26 = new cjs.Graphics().p("ALYLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_27 = new cjs.Graphics().p("ALNLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_28 = new cjs.Graphics().p("ALDLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_29 = new cjs.Graphics().p("AK5LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_30 = new cjs.Graphics().p("AKwLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_31 = new cjs.Graphics().p("AKnLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_32 = new cjs.Graphics().p("AKfLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_33 = new cjs.Graphics().p("AKYLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_34 = new cjs.Graphics().p("AKSLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_35 = new cjs.Graphics().p("AKMLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_36 = new cjs.Graphics().p("AKHLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_37 = new cjs.Graphics().p("AKCLzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_38 = new cjs.Graphics().p("AJ/LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_39 = new cjs.Graphics().p("AJ7LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_40 = new cjs.Graphics().p("AJ5LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_41 = new cjs.Graphics().p("AJ3LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_42 = new cjs.Graphics().p("AJ2LzIAA3bIMCAAIAAXbg");
	var mask_22_graphics_43 = new cjs.Graphics().p("AJ2LzIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:mask_22_graphics_0,x:163.1,y:84}).wait(20).to({graphics:mask_22_graphics_20,x:158.1,y:75.5}).wait(1).to({graphics:mask_22_graphics_21,x:156.5,y:75.5}).wait(1).to({graphics:mask_22_graphics_22,x:155.1,y:75.5}).wait(1).to({graphics:mask_22_graphics_23,x:153.7,y:75.5}).wait(1).to({graphics:mask_22_graphics_24,x:152.3,y:75.5}).wait(1).to({graphics:mask_22_graphics_25,x:151.1,y:75.5}).wait(1).to({graphics:mask_22_graphics_26,x:149.9,y:75.5}).wait(1).to({graphics:mask_22_graphics_27,x:148.8,y:75.5}).wait(1).to({graphics:mask_22_graphics_28,x:147.7,y:75.5}).wait(1).to({graphics:mask_22_graphics_29,x:146.7,y:75.5}).wait(1).to({graphics:mask_22_graphics_30,x:145.8,y:75.5}).wait(1).to({graphics:mask_22_graphics_31,x:144.9,y:75.5}).wait(1).to({graphics:mask_22_graphics_32,x:144.2,y:75.5}).wait(1).to({graphics:mask_22_graphics_33,x:143.5,y:75.5}).wait(1).to({graphics:mask_22_graphics_34,x:142.8,y:75.5}).wait(1).to({graphics:mask_22_graphics_35,x:142.2,y:75.5}).wait(1).to({graphics:mask_22_graphics_36,x:141.7,y:75.5}).wait(1).to({graphics:mask_22_graphics_37,x:141.3,y:75.5}).wait(1).to({graphics:mask_22_graphics_38,x:140.9,y:75.5}).wait(1).to({graphics:mask_22_graphics_39,x:140.6,y:75.5}).wait(1).to({graphics:mask_22_graphics_40,x:140.4,y:75.5}).wait(1).to({graphics:mask_22_graphics_41,x:140.2,y:75.5}).wait(1).to({graphics:mask_22_graphics_42,x:140.1,y:75.5}).wait(1).to({graphics:mask_22_graphics_43,x:140.1,y:75.5}).wait(102));

	// Layer 29
	this.instance_22 = new lib.events_e2();
	this.instance_22.setTransform(213.9,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_22.mask = mask_22;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20).to({y:100.2},23,cjs.Ease.get(1)).wait(102));

	// Layer 28 (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	var mask_23_graphics_0 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_10 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_11 = new cjs.Graphics().p("AH+LuIAA3bIMCAAIAAXbg");
	var mask_23_graphics_12 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_13 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_14 = new cjs.Graphics().p("AH+LuIAA3aIMCAAIAAXag");
	var mask_23_graphics_15 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_16 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_17 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_18 = new cjs.Graphics().p("AH+LtIAA3aIMCAAIAAXag");
	var mask_23_graphics_19 = new cjs.Graphics().p("AH+LuIAA3bIMCAAIAAXbg");
	var mask_23_graphics_20 = new cjs.Graphics().p("AH+LtIAA3aIMCAAIAAXag");
	var mask_23_graphics_21 = new cjs.Graphics().p("AH+LuIAA3aIMCAAIAAXag");
	var mask_23_graphics_22 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_23 = new cjs.Graphics().p("AH+LuIAA3bIMCAAIAAXbg");
	var mask_23_graphics_24 = new cjs.Graphics().p("AH+LtIAA3aIMCAAIAAXag");
	var mask_23_graphics_25 = new cjs.Graphics().p("AH+LuIAA3bIMCAAIAAXbg");
	var mask_23_graphics_26 = new cjs.Graphics().p("AH+LtIAA3aIMCAAIAAXag");
	var mask_23_graphics_27 = new cjs.Graphics().p("AH+LuIAA3aIMCAAIAAXag");
	var mask_23_graphics_28 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_29 = new cjs.Graphics().p("AH+LtIAA3ZIMCAAIAAXZg");
	var mask_23_graphics_30 = new cjs.Graphics().p("AH+LuIAA3bIMCAAIAAXbg");
	var mask_23_graphics_31 = new cjs.Graphics().p("AH+LvIAA3aIMCAAIAAXag");
	var mask_23_graphics_32 = new cjs.Graphics().p("AH+LyIAA3aIMCAAIAAXag");
	var mask_23_graphics_33 = new cjs.Graphics().p("AH+LzIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_23).to({graphics:mask_23_graphics_0,x:128.1,y:-27}).wait(10).to({graphics:mask_23_graphics_10,x:128.1,y:-27}).wait(1).to({graphics:mask_23_graphics_11,x:128.1,y:-18.2}).wait(1).to({graphics:mask_23_graphics_12,x:128.1,y:-9.9}).wait(1).to({graphics:mask_23_graphics_13,x:128.1,y:-1.9}).wait(1).to({graphics:mask_23_graphics_14,x:128.1,y:5.7}).wait(1).to({graphics:mask_23_graphics_15,x:128.1,y:12.9}).wait(1).to({graphics:mask_23_graphics_16,x:128.1,y:19.7}).wait(1).to({graphics:mask_23_graphics_17,x:128.1,y:26.2}).wait(1).to({graphics:mask_23_graphics_18,x:128.1,y:32.2}).wait(1).to({graphics:mask_23_graphics_19,x:128.1,y:37.8}).wait(1).to({graphics:mask_23_graphics_20,x:128.1,y:43.1}).wait(1).to({graphics:mask_23_graphics_21,x:128.1,y:48}).wait(1).to({graphics:mask_23_graphics_22,x:128.1,y:52.4}).wait(1).to({graphics:mask_23_graphics_23,x:128.1,y:56.5}).wait(1).to({graphics:mask_23_graphics_24,x:128.1,y:60.2}).wait(1).to({graphics:mask_23_graphics_25,x:128.1,y:63.5}).wait(1).to({graphics:mask_23_graphics_26,x:128.1,y:66.5}).wait(1).to({graphics:mask_23_graphics_27,x:128.1,y:69}).wait(1).to({graphics:mask_23_graphics_28,x:128.1,y:71.1}).wait(1).to({graphics:mask_23_graphics_29,x:128.1,y:72.9}).wait(1).to({graphics:mask_23_graphics_30,x:128.1,y:74.2}).wait(1).to({graphics:mask_23_graphics_31,x:128.1,y:75.1}).wait(1).to({graphics:mask_23_graphics_32,x:128.1,y:75.4}).wait(1).to({graphics:mask_23_graphics_33,x:128.1,y:75.5}).wait(112));

	// Layer 27
	this.instance_23 = new lib.events_e1();
	this.instance_23.setTransform(213.9,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_23.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10).to({y:100.2},23,cjs.Ease.get(1)).wait(112));

	// Layer 23 (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	var mask_24_graphics_0 = new cjs.Graphics().p("AAVYYIAA3cIMCAAIAAXcg");
	var mask_24_graphics_25 = new cjs.Graphics().p("AAVXwIAA3dIMCAAIAAXdg");
	var mask_24_graphics_26 = new cjs.Graphics().p("AAYXDIAA3aIMCAAIAAXag");
	var mask_24_graphics_27 = new cjs.Graphics().p("AAbWZIAA3aIMCAAIAAXag");
	var mask_24_graphics_28 = new cjs.Graphics().p("AAfVwIAA3aIMCAAIAAXag");
	var mask_24_graphics_29 = new cjs.Graphics().p("AAhVKIAA3aIMCAAIAAXag");
	var mask_24_graphics_30 = new cjs.Graphics().p("AAkUlIAA3aIMCAAIAAXag");
	var mask_24_graphics_31 = new cjs.Graphics().p("AAnUDIAA3aIMCAAIAAXag");
	var mask_24_graphics_32 = new cjs.Graphics().p("AApTiIAA3aIMCAAIAAXag");
	var mask_24_graphics_33 = new cjs.Graphics().p("AAsTEIAA3aIMCAAIAAXag");
	var mask_24_graphics_34 = new cjs.Graphics().p("AAuSnIAA3aIMCAAIAAXag");
	var mask_24_graphics_35 = new cjs.Graphics().p("AAwSMIAA3aIMCAAIAAXag");
	var mask_24_graphics_36 = new cjs.Graphics().p("AAyR0IAA3aIMCAAIAAXag");
	var mask_24_graphics_37 = new cjs.Graphics().p("AA0RdIAA3aIMCAAIAAXag");
	var mask_24_graphics_38 = new cjs.Graphics().p("AA1RIIAA3aIMCAAIAAXag");
	var mask_24_graphics_39 = new cjs.Graphics().p("AA3Q1IAA3aIMCAAIAAXag");
	var mask_24_graphics_40 = new cjs.Graphics().p("AA4QlIAA3aIMCAAIAAXag");
	var mask_24_graphics_41 = new cjs.Graphics().p("AA5QWIAA3aIMCAAIAAXag");
	var mask_24_graphics_42 = new cjs.Graphics().p("AA6QJIAA3aIMCAAIAAXag");
	var mask_24_graphics_43 = new cjs.Graphics().p("AA7P+IAA3aIMCAAIAAXag");
	var mask_24_graphics_44 = new cjs.Graphics().p("AA8P1IAA3aIMCAAIAAXag");
	var mask_24_graphics_45 = new cjs.Graphics().p("AA8PuIAA3aIMCAAIAAXag");
	var mask_24_graphics_46 = new cjs.Graphics().p("AA8PpIAA3aIMCAAIAAXag");
	var mask_24_graphics_47 = new cjs.Graphics().p("AA9PmIAA3aIMCAAIAAXag");
	var mask_24_graphics_48 = new cjs.Graphics().p("AA9PmIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_24).to({graphics:mask_24_graphics_0,x:79.1,y:156}).wait(25).to({graphics:mask_24_graphics_25,x:79.1,y:152}).wait(1).to({graphics:mask_24_graphics_26,x:79.5,y:147.6}).wait(1).to({graphics:mask_24_graphics_27,x:79.8,y:143.3}).wait(1).to({graphics:mask_24_graphics_28,x:80.1,y:139.3}).wait(1).to({graphics:mask_24_graphics_29,x:80.4,y:135.4}).wait(1).to({graphics:mask_24_graphics_30,x:80.7,y:131.8}).wait(1).to({graphics:mask_24_graphics_31,x:80.9,y:128.3}).wait(1).to({graphics:mask_24_graphics_32,x:81.2,y:125.1}).wait(1).to({graphics:mask_24_graphics_33,x:81.4,y:122}).wait(1).to({graphics:mask_24_graphics_34,x:81.6,y:119.1}).wait(1).to({graphics:mask_24_graphics_35,x:81.8,y:116.5}).wait(1).to({graphics:mask_24_graphics_36,x:82,y:114}).wait(1).to({graphics:mask_24_graphics_37,x:82.2,y:111.7}).wait(1).to({graphics:mask_24_graphics_38,x:82.4,y:109.7}).wait(1).to({graphics:mask_24_graphics_39,x:82.5,y:107.8}).wait(1).to({graphics:mask_24_graphics_40,x:82.6,y:106.1}).wait(1).to({graphics:mask_24_graphics_41,x:82.8,y:104.6}).wait(1).to({graphics:mask_24_graphics_42,x:82.9,y:103.4}).wait(1).to({graphics:mask_24_graphics_43,x:82.9,y:102.3}).wait(1).to({graphics:mask_24_graphics_44,x:83,y:101.4}).wait(1).to({graphics:mask_24_graphics_45,x:83.1,y:100.7}).wait(1).to({graphics:mask_24_graphics_46,x:83.1,y:100.2}).wait(1).to({graphics:mask_24_graphics_47,x:83.1,y:99.9}).wait(1).to({graphics:mask_24_graphics_48,x:83.1,y:99.8}).wait(97));

	// Layer 22
	this.instance_24 = new lib.events_v2();
	this.instance_24.setTransform(126.4,76.2,1,1,0,0,0,27,50.1);

	this.instance_24.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(25).to({y:100.2},0).wait(120));

	// Layer 21 (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	var mask_25_graphics_0 = new cjs.Graphics().p("AAVLtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_5 = new cjs.Graphics().p("AAVLtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_6 = new cjs.Graphics().p("AAYLuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_7 = new cjs.Graphics().p("AAbLtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_8 = new cjs.Graphics().p("AAfLtIAA3aIMCAAIAAXag");
	var mask_25_graphics_9 = new cjs.Graphics().p("AAhLtIAA3aIMCAAIAAXag");
	var mask_25_graphics_10 = new cjs.Graphics().p("AAkLtIAA3aIMCAAIAAXag");
	var mask_25_graphics_11 = new cjs.Graphics().p("AAnLtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_12 = new cjs.Graphics().p("AApLuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_13 = new cjs.Graphics().p("AAsLtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_14 = new cjs.Graphics().p("AAuLtIAA3aIMCAAIAAXag");
	var mask_25_graphics_15 = new cjs.Graphics().p("AAwLuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_16 = new cjs.Graphics().p("AAyLuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_17 = new cjs.Graphics().p("AA0LtIAA3aIMCAAIAAXag");
	var mask_25_graphics_18 = new cjs.Graphics().p("AA1LtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_19 = new cjs.Graphics().p("AA3LuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_20 = new cjs.Graphics().p("AA4LuIAA3aIMCAAIAAXag");
	var mask_25_graphics_21 = new cjs.Graphics().p("AA5LtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_22 = new cjs.Graphics().p("AA6LtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_23 = new cjs.Graphics().p("AA7LuIAA3aIMCAAIAAXag");
	var mask_25_graphics_24 = new cjs.Graphics().p("AA8LuIAA3bIMCAAIAAXbg");
	var mask_25_graphics_25 = new cjs.Graphics().p("AA8LtIAA3ZIMCAAIAAXZg");
	var mask_25_graphics_26 = new cjs.Graphics().p("AA8LuIAA3aIMCAAIAAXag");
	var mask_25_graphics_27 = new cjs.Graphics().p("AA9LxIAA3aIMCAAIAAXag");
	var mask_25_graphics_28 = new cjs.Graphics().p("AA9LyIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_25).to({graphics:mask_25_graphics_0,x:79.1,y:-27}).wait(5).to({graphics:mask_25_graphics_5,x:79.1,y:-27}).wait(1).to({graphics:mask_25_graphics_6,x:79.5,y:-18.3}).wait(1).to({graphics:mask_25_graphics_7,x:79.8,y:-9.9}).wait(1).to({graphics:mask_25_graphics_8,x:80.1,y:-1.9}).wait(1).to({graphics:mask_25_graphics_9,x:80.4,y:5.6}).wait(1).to({graphics:mask_25_graphics_10,x:80.7,y:12.8}).wait(1).to({graphics:mask_25_graphics_11,x:80.9,y:19.6}).wait(1).to({graphics:mask_25_graphics_12,x:81.2,y:26.1}).wait(1).to({graphics:mask_25_graphics_13,x:81.4,y:32.1}).wait(1).to({graphics:mask_25_graphics_14,x:81.6,y:37.7}).wait(1).to({graphics:mask_25_graphics_15,x:81.8,y:43}).wait(1).to({graphics:mask_25_graphics_16,x:82,y:47.8}).wait(1).to({graphics:mask_25_graphics_17,x:82.2,y:52.3}).wait(1).to({graphics:mask_25_graphics_18,x:82.4,y:56.4}).wait(1).to({graphics:mask_25_graphics_19,x:82.5,y:60.1}).wait(1).to({graphics:mask_25_graphics_20,x:82.6,y:63.4}).wait(1).to({graphics:mask_25_graphics_21,x:82.8,y:66.3}).wait(1).to({graphics:mask_25_graphics_22,x:82.9,y:68.8}).wait(1).to({graphics:mask_25_graphics_23,x:82.9,y:70.9}).wait(1).to({graphics:mask_25_graphics_24,x:83,y:72.7}).wait(1).to({graphics:mask_25_graphics_25,x:83.1,y:74.1}).wait(1).to({graphics:mask_25_graphics_26,x:83.1,y:75}).wait(1).to({graphics:mask_25_graphics_27,x:83.1,y:75.3}).wait(1).to({graphics:mask_25_graphics_28,x:83.1,y:75.4}).wait(117));

	// Layer 20
	this.instance_25 = new lib.events_v1();
	this.instance_25.setTransform(126.4,132.2,1,1,0,0,0,27,50.1);

	this.instance_25.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(5).to({y:100.2},23,cjs.Ease.get(1)).wait(117));

	// Layer 18 (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	var mask_26_graphics_0 = new cjs.Graphics().p("AmANIIAA3bIMBAAIAAXbg");
	var mask_26_graphics_10 = new cjs.Graphics().p("AmANIIAA3bIMBAAIAAXbg");
	var mask_26_graphics_11 = new cjs.Graphics().p("AmANJIAA3aIMBAAIAAXag");
	var mask_26_graphics_12 = new cjs.Graphics().p("AmANKIAA3aIMBAAIAAXag");
	var mask_26_graphics_13 = new cjs.Graphics().p("Al/NLIAA3aIL/AAIAAXag");
	var mask_26_graphics_14 = new cjs.Graphics().p("AmANMIAA3aIMBAAIAAXag");
	var mask_26_graphics_15 = new cjs.Graphics().p("AmANNIAA3aIMBAAIAAXag");
	var mask_26_graphics_16 = new cjs.Graphics().p("AmANOIAA3aIMBAAIAAXag");
	var mask_26_graphics_17 = new cjs.Graphics().p("AmANPIAA3aIMBAAIAAXag");
	var mask_26_graphics_18 = new cjs.Graphics().p("AmANQIAA3aIMBAAIAAXag");
	var mask_26_graphics_19 = new cjs.Graphics().p("Al/NRIAA3aIL/AAIAAXag");
	var mask_26_graphics_20 = new cjs.Graphics().p("AmANSIAA3aIMBAAIAAXag");
	var mask_26_graphics_21 = new cjs.Graphics().p("AmANSIAA3aIMBAAIAAXag");
	var mask_26_graphics_22 = new cjs.Graphics().p("AmANTIAA3aIMBAAIAAXag");
	var mask_26_graphics_23 = new cjs.Graphics().p("AmANUIAA3aIMBAAIAAXag");
	var mask_26_graphics_24 = new cjs.Graphics().p("Al/NUIAA3aIL/AAIAAXag");
	var mask_26_graphics_25 = new cjs.Graphics().p("AmANVIAA3aIMBAAIAAXag");
	var mask_26_graphics_26 = new cjs.Graphics().p("Al/NVIAA3aIL/AAIAAXag");
	var mask_26_graphics_27 = new cjs.Graphics().p("Al/NVIAA3aIL/AAIAAXag");
	var mask_26_graphics_28 = new cjs.Graphics().p("Al/NWIAA3aIL/AAIAAXag");
	var mask_26_graphics_29 = new cjs.Graphics().p("Al/NWIAA3aIL/AAIAAXag");
	var mask_26_graphics_30 = new cjs.Graphics().p("AmANWIAA3aIMBAAIAAXag");
	var mask_26_graphics_31 = new cjs.Graphics().p("Al/NWIAA3aIL/AAIAAXag");
	var mask_26_graphics_32 = new cjs.Graphics().p("Al/NWIAA3aIL/AAIAAXag");
	var mask_26_graphics_33 = new cjs.Graphics().p("AmANXIAA3bIMAAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_26).to({graphics:mask_26_graphics_0,x:-11.7,y:84}).wait(10).to({graphics:mask_26_graphics_10,x:-11.7,y:84}).wait(1).to({graphics:mask_26_graphics_11,x:-9.2,y:84.1}).wait(1).to({graphics:mask_26_graphics_12,x:-6.9,y:84.2}).wait(1).to({graphics:mask_26_graphics_13,x:-4.6,y:84.4}).wait(1).to({graphics:mask_26_graphics_14,x:-2.5,y:84.5}).wait(1).to({graphics:mask_26_graphics_15,x:-0.5,y:84.6}).wait(1).to({graphics:mask_26_graphics_16,x:1.5,y:84.7}).wait(1).to({graphics:mask_26_graphics_17,x:3.3,y:84.8}).wait(1).to({graphics:mask_26_graphics_18,x:5,y:84.9}).wait(1).to({graphics:mask_26_graphics_19,x:6.6,y:84.9}).wait(1).to({graphics:mask_26_graphics_20,x:8,y:85}).wait(1).to({graphics:mask_26_graphics_21,x:9.4,y:85.1}).wait(1).to({graphics:mask_26_graphics_22,x:10.7,y:85.2}).wait(1).to({graphics:mask_26_graphics_23,x:11.8,y:85.2}).wait(1).to({graphics:mask_26_graphics_24,x:12.9,y:85.3}).wait(1).to({graphics:mask_26_graphics_25,x:13.8,y:85.3}).wait(1).to({graphics:mask_26_graphics_26,x:14.6,y:85.4}).wait(1).to({graphics:mask_26_graphics_27,x:15.3,y:85.4}).wait(1).to({graphics:mask_26_graphics_28,x:15.9,y:85.4}).wait(1).to({graphics:mask_26_graphics_29,x:16.4,y:85.5}).wait(1).to({graphics:mask_26_graphics_30,x:16.8,y:85.5}).wait(1).to({graphics:mask_26_graphics_31,x:17.1,y:85.5}).wait(1).to({graphics:mask_26_graphics_32,x:17.2,y:85.5}).wait(1).to({graphics:mask_26_graphics_33,x:17.3,y:85.5}).wait(112));

	// Layer 17
	this.instance_26 = new lib.events_e3();
	this.instance_26.setTransform(39.6,100.2,1,1,0,0,0,20.6,50.1);

	this.instance_26.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(145));

	// Layer 16 (mask)
	var mask_27 = new cjs.Shape();
	mask_27._off = true;
	var mask_27_graphics_0 = new cjs.Graphics().p("AgKNIIAA3bIMBAAIAAXbg");
	var mask_27_graphics_10 = new cjs.Graphics().p("Ag8LzIAA3bIMBAAIAAXbg");
	var mask_27_graphics_11 = new cjs.Graphics().p("AhLLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_12 = new cjs.Graphics().p("AhZLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_13 = new cjs.Graphics().p("AhnLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_14 = new cjs.Graphics().p("Ah1LzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_15 = new cjs.Graphics().p("AiBLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_16 = new cjs.Graphics().p("AiNLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_17 = new cjs.Graphics().p("AiYLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_18 = new cjs.Graphics().p("AijLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_19 = new cjs.Graphics().p("AitLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_20 = new cjs.Graphics().p("Ai2LzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_21 = new cjs.Graphics().p("Ai/LzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_22 = new cjs.Graphics().p("AjGLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_23 = new cjs.Graphics().p("AjNLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_24 = new cjs.Graphics().p("AjULzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_25 = new cjs.Graphics().p("AjaLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_26 = new cjs.Graphics().p("AjfLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_27 = new cjs.Graphics().p("AjjLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_28 = new cjs.Graphics().p("AjnLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_29 = new cjs.Graphics().p("AjqLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_30 = new cjs.Graphics().p("AjsLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_31 = new cjs.Graphics().p("AjuLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_32 = new cjs.Graphics().p("AjvLzIAA3bIMAAAIAAXbg");
	var mask_27_graphics_33 = new cjs.Graphics().p("AjwLzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_27).to({graphics:mask_27_graphics_0,x:75.9,y:84}).wait(10).to({graphics:mask_27_graphics_10,x:70.9,y:75.5}).wait(1).to({graphics:mask_27_graphics_11,x:69.4,y:75.5}).wait(1).to({graphics:mask_27_graphics_12,x:67.9,y:75.5}).wait(1).to({graphics:mask_27_graphics_13,x:66.5,y:75.5}).wait(1).to({graphics:mask_27_graphics_14,x:65.2,y:75.5}).wait(1).to({graphics:mask_27_graphics_15,x:63.9,y:75.5}).wait(1).to({graphics:mask_27_graphics_16,x:62.7,y:75.5}).wait(1).to({graphics:mask_27_graphics_17,x:61.6,y:75.5}).wait(1).to({graphics:mask_27_graphics_18,x:60.6,y:75.5}).wait(1).to({graphics:mask_27_graphics_19,x:59.6,y:75.5}).wait(1).to({graphics:mask_27_graphics_20,x:58.7,y:75.5}).wait(1).to({graphics:mask_27_graphics_21,x:57.8,y:75.5}).wait(1).to({graphics:mask_27_graphics_22,x:57,y:75.5}).wait(1).to({graphics:mask_27_graphics_23,x:56.3,y:75.5}).wait(1).to({graphics:mask_27_graphics_24,x:55.7,y:75.5}).wait(1).to({graphics:mask_27_graphics_25,x:55.1,y:75.5}).wait(1).to({graphics:mask_27_graphics_26,x:54.6,y:75.5}).wait(1).to({graphics:mask_27_graphics_27,x:54.1,y:75.5}).wait(1).to({graphics:mask_27_graphics_28,x:53.8,y:75.5}).wait(1).to({graphics:mask_27_graphics_29,x:53.4,y:75.5}).wait(1).to({graphics:mask_27_graphics_30,x:53.2,y:75.5}).wait(1).to({graphics:mask_27_graphics_31,x:53,y:75.5}).wait(1).to({graphics:mask_27_graphics_32,x:52.9,y:75.5}).wait(1).to({graphics:mask_27_graphics_33,x:52.9,y:75.5}).wait(112));

	// Layer 15
	this.instance_27 = new lib.events_e2();
	this.instance_27.setTransform(39.6,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_27.mask = mask_27;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(10).to({y:100.2},23,cjs.Ease.get(1)).wait(112));

	// Layer 14 (mask)
	var mask_28 = new cjs.Shape();
	mask_28._off = true;
	var mask_28_graphics_0 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_1 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_28_graphics_2 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_3 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_4 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_28_graphics_5 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_6 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_7 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_8 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_28_graphics_9 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_28_graphics_10 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_28_graphics_11 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_28_graphics_12 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_13 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_28_graphics_14 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_28_graphics_15 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_28_graphics_16 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_28_graphics_17 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_28_graphics_18 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_19 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_28_graphics_20 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_28_graphics_21 = new cjs.Graphics().p("AloLvIAA3aIMBAAIAAXag");
	var mask_28_graphics_22 = new cjs.Graphics().p("AloLyIAA3aIMBAAIAAXag");
	var mask_28_graphics_23 = new cjs.Graphics().p("AloLzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_28).to({graphics:mask_28_graphics_0,x:40.9,y:-27}).wait(1).to({graphics:mask_28_graphics_1,x:40.9,y:-18.2}).wait(1).to({graphics:mask_28_graphics_2,x:40.9,y:-9.9}).wait(1).to({graphics:mask_28_graphics_3,x:40.9,y:-1.9}).wait(1).to({graphics:mask_28_graphics_4,x:40.9,y:5.7}).wait(1).to({graphics:mask_28_graphics_5,x:40.9,y:12.9}).wait(1).to({graphics:mask_28_graphics_6,x:40.9,y:19.7}).wait(1).to({graphics:mask_28_graphics_7,x:40.9,y:26.2}).wait(1).to({graphics:mask_28_graphics_8,x:40.9,y:32.2}).wait(1).to({graphics:mask_28_graphics_9,x:40.9,y:37.8}).wait(1).to({graphics:mask_28_graphics_10,x:40.9,y:43.1}).wait(1).to({graphics:mask_28_graphics_11,x:40.9,y:48}).wait(1).to({graphics:mask_28_graphics_12,x:40.9,y:52.4}).wait(1).to({graphics:mask_28_graphics_13,x:40.9,y:56.5}).wait(1).to({graphics:mask_28_graphics_14,x:40.9,y:60.2}).wait(1).to({graphics:mask_28_graphics_15,x:40.9,y:63.5}).wait(1).to({graphics:mask_28_graphics_16,x:40.9,y:66.5}).wait(1).to({graphics:mask_28_graphics_17,x:40.9,y:69}).wait(1).to({graphics:mask_28_graphics_18,x:40.9,y:71.1}).wait(1).to({graphics:mask_28_graphics_19,x:40.9,y:72.9}).wait(1).to({graphics:mask_28_graphics_20,x:40.9,y:74.2}).wait(1).to({graphics:mask_28_graphics_21,x:40.9,y:75.1}).wait(1).to({graphics:mask_28_graphics_22,x:40.9,y:75.4}).wait(1).to({graphics:mask_28_graphics_23,x:40.9,y:75.5}).wait(122));

	// Layer 13
	this.instance_28 = new lib.events_e1();
	this.instance_28.setTransform(39.6,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_28.mask = mask_28;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({y:100.2},23,cjs.Ease.get(1)).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266,-210,1500,900);


// symbols:
(lib.events_1 = function() {
	this.initialize(img.events_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.stage = function() {
	this.initialize(img.stage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.events_v2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPH0IC5vnIBmAAIi5Png");
	this.shape.setTransform(39.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.2,0,28.9,100.2);


(lib.events_v1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmH0Ii7vnIBxAAIC6Png");
	this.shape.setTransform(15,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,100.2);


(lib.events_t2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvAyIAAhkIHeAAIAABkg");
	this.shape.setTransform(24,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,10.2);


(lib.events_t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3HEIAAuHIBvAAIAAOHg");
	this.shape.setTransform(24,54.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.4,9.7,11.2,90.5);


(lib.events_s3 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqBWQg1hDgBhuIAAgDIAAg6IBpAAIAAA/QAABFAcAjQAdAlA8AAQA6AAAdglQAcgjAAhFQAAgjgJgdIB0AAQAFAcAAAfQAABwg3BEQg3BEhzAAQhzAAg3hEg");
	this.shape.setTransform(22.6,86.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,71.3,45.2,30.8);


(lib.events_s2 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB0CKIAAggIAAgIQgCg/gZgjQgbgkg9AAQg5AAgbAkQgcAlAABDQAAARACAQIhuAAIgBgaQAAhyA2hDQA2hDBwAAQBxAAA3BDQAyBBADBnIABANIAAAbg");
	this.shape.setTransform(22.7,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,44.4,27.7);


(lib.events_s1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoDjIgBgGQgGgRgKgPQgZgpglgjQgjgjgrgiQgrghgmgmQglgpgZgyQgUgpgDg2IAAgNIBuAAIABANQAFAkASAcQAZAqAlAjQAjAiAsAiQArAfAmApQAlAoAZAzQAOAcAGAiIABAGg");
	this.shape.setTransform(22.7,49.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,26.4,44.2,45.4);


(lib.events_r3 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfDyQgLgWgEgZQgEgYAAgzIAAibQAAhUgkggQgmghhGAAIgLAAICPg5QBCAUAdA1QAdA2AABSIAACaQAAAgACAfQADAfAPAag");
	this.shape.setTransform(32.3,75.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.9,51.7,28.9,48.5);


(lib.events_r2 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWEfIgIAAIhLAAIAAhnIBaAAQBDAAAjgbQAlgcAAhRIAAheQAAhFgbgiQgagjg9AAIhzAAIAAhmIB2AAQB0AAA1A8QA1A6AABvIAABRQgBBTgeAyQgdA0hBAUQAEARiFApg");
	this.shape.setTransform(27.5,28.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.4,0,34.2,57.4);


(lib.events_r1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.events_plus2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjsAoIAAhPIHZAAIAABPg");
	this.shape.setTransform(23.8,23.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,19.9,47.5,8.1);


(lib.events_plus1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnDwIAAnfIBPAAIAAHfg");
	this.shape.setTransform(23.8,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19.8,0,8.1,48.1);


(lib.events_n2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1H0Ij+snIAAAAIAAABIgIAAIAAjBIAyAAIDlLSIAAgBIAMAAIAAEWg");
	this.shape.setTransform(23.8,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.2,0,29.3,100.2);


(lib.events_n1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACIH0IAAvnIBjAAIAAPngAjrH0IAAvnIBkAAIAAPng");
	this.shape.setTransform(23.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.2,100.2);


(lib.events_i = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.events_f3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5AyIAAhjIDzAAIAABjg");
	this.shape.setTransform(21.9,51.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.7,46.6,24.6,10.1);


(lib.events_f2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiRAyIAAhkIEjAAIAABkg");
	this.shape.setTransform(25.1,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.4,0,29.4,10.2);


(lib.events_f1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.events_e3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiAAyIAAhjIEBAAIAABjg");
	this.shape.setTransform(22.6,49.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.7,44.4,26,10);


(lib.events_e2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYH0IAAhlIExAAIAABlgAiYmNIAAhmIExAAIAABmg");
	this.shape.setTransform(25.8,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.4,0,30.8,100.2);


(lib.events_e1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.events_a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFAvIAPhdIDsAAIAQBdg");
	this.shape.setTransform(26.9,75.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.5,70.4,27,9.5);


(lib.events_a1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChH0Ig2kpIhwpAIhuJAIgOBfIgnDKIhnAAIDAvnICgAAIC/Png");
	this.shape.setTransform(27.3,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,100.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1220,
	height: 200,
	fps: 40,
	color: "#CCCCCC",
	manifest: [
		{src:"images/stage_1.jpg", id:"stage_1"}
	]
};

// stage content:
(lib.stage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stage.scaleMode = "noScale";*/
	}
	this.frame_144 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(144).call(this.frame_144).wait(1));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EBSlAYYIAA3cIMCAAIAAXcg");
	var mask_graphics_84 = new cjs.Graphics().p("EBSlAXwIAA3dIMCAAIAAXdg");
	var mask_graphics_85 = new cjs.Graphics().p("EBSoAXDIAA3aIMCAAIAAXag");
	var mask_graphics_86 = new cjs.Graphics().p("EBSrAWZIAA3aIMCAAIAAXag");
	var mask_graphics_87 = new cjs.Graphics().p("EBSvAVwIAA3aIMCAAIAAXag");
	var mask_graphics_88 = new cjs.Graphics().p("EBSxAVKIAA3aIMCAAIAAXag");
	var mask_graphics_89 = new cjs.Graphics().p("EBS0AUlIAA3aIMCAAIAAXag");
	var mask_graphics_90 = new cjs.Graphics().p("EBS3AUDIAA3aIMCAAIAAXag");
	var mask_graphics_91 = new cjs.Graphics().p("EBS5ATiIAA3aIMCAAIAAXag");
	var mask_graphics_92 = new cjs.Graphics().p("EBS8ATEIAA3aIMCAAIAAXag");
	var mask_graphics_93 = new cjs.Graphics().p("EBS+ASnIAA3aIMCAAIAAXag");
	var mask_graphics_94 = new cjs.Graphics().p("EBTAASMIAA3aIMCAAIAAXag");
	var mask_graphics_95 = new cjs.Graphics().p("EBTCAR0IAA3aIMCAAIAAXag");
	var mask_graphics_96 = new cjs.Graphics().p("EBTEARdIAA3aIMCAAIAAXag");
	var mask_graphics_97 = new cjs.Graphics().p("EBTFARIIAA3aIMCAAIAAXag");
	var mask_graphics_98 = new cjs.Graphics().p("EBTHAQ1IAA3aIMCAAIAAXag");
	var mask_graphics_99 = new cjs.Graphics().p("EBTIAQlIAA3aIMCAAIAAXag");
	var mask_graphics_100 = new cjs.Graphics().p("EBTJAQWIAA3aIMCAAIAAXag");
	var mask_graphics_101 = new cjs.Graphics().p("EBTKAQJIAA3aIMCAAIAAXag");
	var mask_graphics_102 = new cjs.Graphics().p("EBTLAP+IAA3aIMCAAIAAXag");
	var mask_graphics_103 = new cjs.Graphics().p("EBTMAP1IAA3aIMCAAIAAXag");
	var mask_graphics_104 = new cjs.Graphics().p("EBTMAPuIAA3aIMCAAIAAXag");
	var mask_graphics_105 = new cjs.Graphics().p("EBTMAPpIAA3aIMCAAIAAXag");
	var mask_graphics_106 = new cjs.Graphics().p("EBTNAPmIAA3aIMCAAIAAXag");
	var mask_graphics_107 = new cjs.Graphics().p("EBTNAPmIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:605.5,y:156}).wait(84).to({graphics:mask_graphics_84,x:605.5,y:152}).wait(1).to({graphics:mask_graphics_85,x:605.9,y:147.6}).wait(1).to({graphics:mask_graphics_86,x:606.2,y:143.3}).wait(1).to({graphics:mask_graphics_87,x:606.5,y:139.3}).wait(1).to({graphics:mask_graphics_88,x:606.8,y:135.4}).wait(1).to({graphics:mask_graphics_89,x:607.1,y:131.8}).wait(1).to({graphics:mask_graphics_90,x:607.3,y:128.3}).wait(1).to({graphics:mask_graphics_91,x:607.6,y:125.1}).wait(1).to({graphics:mask_graphics_92,x:607.8,y:122}).wait(1).to({graphics:mask_graphics_93,x:608,y:119.1}).wait(1).to({graphics:mask_graphics_94,x:608.2,y:116.5}).wait(1).to({graphics:mask_graphics_95,x:608.4,y:114}).wait(1).to({graphics:mask_graphics_96,x:608.6,y:111.7}).wait(1).to({graphics:mask_graphics_97,x:608.8,y:109.7}).wait(1).to({graphics:mask_graphics_98,x:608.9,y:107.8}).wait(1).to({graphics:mask_graphics_99,x:609,y:106.1}).wait(1).to({graphics:mask_graphics_100,x:609.2,y:104.6}).wait(1).to({graphics:mask_graphics_101,x:609.3,y:103.4}).wait(1).to({graphics:mask_graphics_102,x:609.3,y:102.3}).wait(1).to({graphics:mask_graphics_103,x:609.4,y:101.4}).wait(1).to({graphics:mask_graphics_104,x:609.5,y:100.7}).wait(1).to({graphics:mask_graphics_105,x:609.5,y:100.2}).wait(1).to({graphics:mask_graphics_106,x:609.5,y:99.9}).wait(1).to({graphics:mask_graphics_107,x:609.5,y:99.8}).wait(38));

	// Layer 8
	this.instance = new lib.stage_v2();
	this.instance.setTransform(1179.2,76.2,1,1,0,0,0,27,50.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({y:100.2},0).wait(61));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EBSlALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EBSlALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EBSoALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EBSrALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EBSvALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_68 = new cjs.Graphics().p("EBSxALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_69 = new cjs.Graphics().p("EBS0ALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_70 = new cjs.Graphics().p("EBS3ALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EBS5ALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EBS8ALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EBS+ALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_74 = new cjs.Graphics().p("EBTAALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EBTCALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EBTEALtIAA3aIMCAAIAAXag");
	var mask_1_graphics_77 = new cjs.Graphics().p("EBTFALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EBTHALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EBTIALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_80 = new cjs.Graphics().p("EBTJALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EBTKALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EBTLALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_83 = new cjs.Graphics().p("EBTMALuIAA3bIMCAAIAAXbg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EBTMALtIAA3ZIMCAAIAAXZg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EBTMALuIAA3aIMCAAIAAXag");
	var mask_1_graphics_86 = new cjs.Graphics().p("EBTNALxIAA3aIMCAAIAAXag");
	var mask_1_graphics_87 = new cjs.Graphics().p("EBTNALyIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:605.5,y:-27}).wait(64).to({graphics:mask_1_graphics_64,x:605.5,y:-27}).wait(1).to({graphics:mask_1_graphics_65,x:605.9,y:-18.3}).wait(1).to({graphics:mask_1_graphics_66,x:606.2,y:-9.9}).wait(1).to({graphics:mask_1_graphics_67,x:606.5,y:-1.9}).wait(1).to({graphics:mask_1_graphics_68,x:606.8,y:5.6}).wait(1).to({graphics:mask_1_graphics_69,x:607.1,y:12.8}).wait(1).to({graphics:mask_1_graphics_70,x:607.3,y:19.6}).wait(1).to({graphics:mask_1_graphics_71,x:607.6,y:26.1}).wait(1).to({graphics:mask_1_graphics_72,x:607.8,y:32.1}).wait(1).to({graphics:mask_1_graphics_73,x:608,y:37.7}).wait(1).to({graphics:mask_1_graphics_74,x:608.2,y:43}).wait(1).to({graphics:mask_1_graphics_75,x:608.4,y:47.8}).wait(1).to({graphics:mask_1_graphics_76,x:608.6,y:52.3}).wait(1).to({graphics:mask_1_graphics_77,x:608.8,y:56.4}).wait(1).to({graphics:mask_1_graphics_78,x:608.9,y:60.1}).wait(1).to({graphics:mask_1_graphics_79,x:609,y:63.4}).wait(1).to({graphics:mask_1_graphics_80,x:609.2,y:66.3}).wait(1).to({graphics:mask_1_graphics_81,x:609.3,y:68.8}).wait(1).to({graphics:mask_1_graphics_82,x:609.3,y:70.9}).wait(1).to({graphics:mask_1_graphics_83,x:609.4,y:72.7}).wait(1).to({graphics:mask_1_graphics_84,x:609.5,y:74.1}).wait(1).to({graphics:mask_1_graphics_85,x:609.5,y:75}).wait(1).to({graphics:mask_1_graphics_86,x:609.5,y:75.3}).wait(1).to({graphics:mask_1_graphics_87,x:609.5,y:75.4}).wait(58));

	// Layer 84
	this.instance_1 = new lib.stage_v1();
	this.instance_1.setTransform(1179.2,132.2,1,1,0,0,0,27,50.1);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({y:100.2},23,cjs.Ease.get(1)).wait(58));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EBRVAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EBRVAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EBRAAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_72 = new cjs.Graphics().p("EBQrAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EBQYAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EBQGAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EBP1AOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_76 = new cjs.Graphics().p("EBPkAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_77 = new cjs.Graphics().p("EBPVAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EBPGAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EBO5AOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_80 = new cjs.Graphics().p("EBOsAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_81 = new cjs.Graphics().p("EBOgAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_82 = new cjs.Graphics().p("EBOVAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_83 = new cjs.Graphics().p("EBOMAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EBODAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_85 = new cjs.Graphics().p("EBN7AOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_86 = new cjs.Graphics().p("EBN0AOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_87 = new cjs.Graphics().p("EBNuAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_88 = new cjs.Graphics().p("EBNoAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_89 = new cjs.Graphics().p("EBNkAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_90 = new cjs.Graphics().p("EBNhAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_91 = new cjs.Graphics().p("EBNfAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EBNdAOXIAA3ZIMCAAIAAXZg");
	var mask_2_graphics_93 = new cjs.Graphics().p("EBNdAOXIAA3ZIMCAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:597.5,y:92}).wait(70).to({graphics:mask_2_graphics_70,x:597.5,y:92}).wait(1).to({graphics:mask_2_graphics_71,x:595.4,y:92}).wait(1).to({graphics:mask_2_graphics_72,x:593.4,y:92}).wait(1).to({graphics:mask_2_graphics_73,x:591.5,y:92}).wait(1).to({graphics:mask_2_graphics_74,x:589.6,y:92}).wait(1).to({graphics:mask_2_graphics_75,x:587.9,y:92}).wait(1).to({graphics:mask_2_graphics_76,x:586.3,y:92}).wait(1).to({graphics:mask_2_graphics_77,x:584.7,y:92}).wait(1).to({graphics:mask_2_graphics_78,x:583.3,y:92}).wait(1).to({graphics:mask_2_graphics_79,x:581.9,y:92}).wait(1).to({graphics:mask_2_graphics_80,x:580.6,y:92}).wait(1).to({graphics:mask_2_graphics_81,x:579.5,y:92}).wait(1).to({graphics:mask_2_graphics_82,x:578.4,y:92}).wait(1).to({graphics:mask_2_graphics_83,x:577.4,y:92}).wait(1).to({graphics:mask_2_graphics_84,x:576.5,y:92}).wait(1).to({graphics:mask_2_graphics_85,x:575.7,y:92}).wait(1).to({graphics:mask_2_graphics_86,x:575,y:92}).wait(1).to({graphics:mask_2_graphics_87,x:574.4,y:92}).wait(1).to({graphics:mask_2_graphics_88,x:573.9,y:92}).wait(1).to({graphics:mask_2_graphics_89,x:573.5,y:92}).wait(1).to({graphics:mask_2_graphics_90,x:573.1,y:92}).wait(1).to({graphics:mask_2_graphics_91,x:572.9,y:92}).wait(1).to({graphics:mask_2_graphics_92,x:572.8,y:92}).wait(1).to({graphics:mask_2_graphics_93,x:572.7,y:92}).wait(52));

	// Layer 6
	this.instance_2 = new lib.stage_t2();
	this.instance_2.setTransform(1092.4,100.2,1,1,0,0,0,24,50.1);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EBMVALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EBMVALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EBMYALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EBMbALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EBMfALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_63 = new cjs.Graphics().p("EBMhALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_64 = new cjs.Graphics().p("EBMkALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_65 = new cjs.Graphics().p("EBMnALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EBMpALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EBMsALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EBMuALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_69 = new cjs.Graphics().p("EBMwALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EBMyALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EBM0ALtIAA3aIMCAAIAAXag");
	var mask_3_graphics_72 = new cjs.Graphics().p("EBM1ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EBM3ALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EBM4ALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_75 = new cjs.Graphics().p("EBM5ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EBM6ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EBM7ALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_78 = new cjs.Graphics().p("EBM8ALuIAA3bIMCAAIAAXbg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EBM8ALtIAA3ZIMCAAIAAXZg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EBM8ALuIAA3aIMCAAIAAXag");
	var mask_3_graphics_81 = new cjs.Graphics().p("EBM9ALxIAA3aIMCAAIAAXag");
	var mask_3_graphics_82 = new cjs.Graphics().p("EBM9ALyIAA3aIMCAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:565.5,y:-27}).wait(59).to({graphics:mask_3_graphics_59,x:565.5,y:-27}).wait(1).to({graphics:mask_3_graphics_60,x:565.9,y:-18.3}).wait(1).to({graphics:mask_3_graphics_61,x:566.2,y:-9.9}).wait(1).to({graphics:mask_3_graphics_62,x:566.5,y:-1.9}).wait(1).to({graphics:mask_3_graphics_63,x:566.8,y:5.6}).wait(1).to({graphics:mask_3_graphics_64,x:567.1,y:12.8}).wait(1).to({graphics:mask_3_graphics_65,x:567.3,y:19.6}).wait(1).to({graphics:mask_3_graphics_66,x:567.6,y:26.1}).wait(1).to({graphics:mask_3_graphics_67,x:567.8,y:32.1}).wait(1).to({graphics:mask_3_graphics_68,x:568,y:37.7}).wait(1).to({graphics:mask_3_graphics_69,x:568.2,y:43}).wait(1).to({graphics:mask_3_graphics_70,x:568.4,y:47.8}).wait(1).to({graphics:mask_3_graphics_71,x:568.6,y:52.3}).wait(1).to({graphics:mask_3_graphics_72,x:568.8,y:56.4}).wait(1).to({graphics:mask_3_graphics_73,x:568.9,y:60.1}).wait(1).to({graphics:mask_3_graphics_74,x:569,y:63.4}).wait(1).to({graphics:mask_3_graphics_75,x:569.2,y:66.3}).wait(1).to({graphics:mask_3_graphics_76,x:569.3,y:68.8}).wait(1).to({graphics:mask_3_graphics_77,x:569.3,y:70.9}).wait(1).to({graphics:mask_3_graphics_78,x:569.4,y:72.7}).wait(1).to({graphics:mask_3_graphics_79,x:569.5,y:74.1}).wait(1).to({graphics:mask_3_graphics_80,x:569.5,y:75}).wait(1).to({graphics:mask_3_graphics_81,x:569.5,y:75.3}).wait(1).to({graphics:mask_3_graphics_82,x:569.5,y:75.4}).wait(63));

	// Layer 4
	this.instance_3 = new lib.stage_t1();
	this.instance_3.setTransform(1092.4,132.2,1,1,0,0,0,24,50.1);

	this.instance_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({y:100.2},23,cjs.Ease.get(1)).wait(63));

	// Layer 3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("EBK1AN6IAA3bIMBAAIAAXbg");
	var mask_4_graphics_64 = new cjs.Graphics().p("EBK1AN6IAA3bIMBAAIAAXbg");
	var mask_4_graphics_65 = new cjs.Graphics().p("EBKeAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_66 = new cjs.Graphics().p("EBKIAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_67 = new cjs.Graphics().p("EBJ0AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_68 = new cjs.Graphics().p("EBJgAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_69 = new cjs.Graphics().p("EBJOAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_70 = new cjs.Graphics().p("EBI8AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_71 = new cjs.Graphics().p("EBIsAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_72 = new cjs.Graphics().p("EBIcAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_73 = new cjs.Graphics().p("EBIOAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_74 = new cjs.Graphics().p("EBIAAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_75 = new cjs.Graphics().p("EBH0AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_76 = new cjs.Graphics().p("EBHoAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_77 = new cjs.Graphics().p("EBHeAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_78 = new cjs.Graphics().p("EBHUAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_79 = new cjs.Graphics().p("EBHMAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_80 = new cjs.Graphics().p("EBHEAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_81 = new cjs.Graphics().p("EBG+AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_82 = new cjs.Graphics().p("EBG4AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_83 = new cjs.Graphics().p("EBG0AN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_84 = new cjs.Graphics().p("EBGwAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_85 = new cjs.Graphics().p("EBGuAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_86 = new cjs.Graphics().p("EBGsAN6IAA3bIMCAAIAAXbg");
	var mask_4_graphics_87 = new cjs.Graphics().p("EBGsAN6IAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:555.9,y:89}).wait(64).to({graphics:mask_4_graphics_64,x:555.9,y:89}).wait(1).to({graphics:mask_4_graphics_65,x:553.6,y:89}).wait(1).to({graphics:mask_4_graphics_66,x:551.5,y:89}).wait(1).to({graphics:mask_4_graphics_67,x:549.4,y:89}).wait(1).to({graphics:mask_4_graphics_68,x:547.5,y:89}).wait(1).to({graphics:mask_4_graphics_69,x:545.6,y:89}).wait(1).to({graphics:mask_4_graphics_70,x:543.9,y:89}).wait(1).to({graphics:mask_4_graphics_71,x:542.2,y:89}).wait(1).to({graphics:mask_4_graphics_72,x:540.7,y:89}).wait(1).to({graphics:mask_4_graphics_73,x:539.2,y:89}).wait(1).to({graphics:mask_4_graphics_74,x:537.9,y:89}).wait(1).to({graphics:mask_4_graphics_75,x:536.6,y:89}).wait(1).to({graphics:mask_4_graphics_76,x:535.5,y:89}).wait(1).to({graphics:mask_4_graphics_77,x:534.4,y:89}).wait(1).to({graphics:mask_4_graphics_78,x:533.5,y:89}).wait(1).to({graphics:mask_4_graphics_79,x:532.6,y:89}).wait(1).to({graphics:mask_4_graphics_80,x:531.9,y:89}).wait(1).to({graphics:mask_4_graphics_81,x:531.2,y:89}).wait(1).to({graphics:mask_4_graphics_82,x:530.7,y:89}).wait(1).to({graphics:mask_4_graphics_83,x:530.2,y:89}).wait(1).to({graphics:mask_4_graphics_84,x:529.9,y:89}).wait(1).to({graphics:mask_4_graphics_85,x:529.6,y:89}).wait(1).to({graphics:mask_4_graphics_86,x:529.5,y:89}).wait(1).to({graphics:mask_4_graphics_87,x:529.4,y:89}).wait(58));

	// Layer 115
	this.instance_4 = new lib.stage_plus2();
	this.instance_4.setTransform(1007.3,100.3,1,1,0,0,0,23.8,24);

	this.instance_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145));

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_59 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_60 = new cjs.Graphics().p("EBFWALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_61 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_65 = new cjs.Graphics().p("EBFWALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_66 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EBFWALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_69 = new cjs.Graphics().p("EBFWALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_70 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_71 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_72 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_73 = new cjs.Graphics().p("EBFWALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_74 = new cjs.Graphics().p("EBFWALuIAA3aIMDAAIAAXag");
	var mask_5_graphics_75 = new cjs.Graphics().p("EBFWALtIAA3aIMDAAIAAXag");
	var mask_5_graphics_76 = new cjs.Graphics().p("EBFWALtIAA3ZIMDAAIAAXZg");
	var mask_5_graphics_77 = new cjs.Graphics().p("EBFWALuIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:520.9,y:13}).wait(54).to({graphics:mask_5_graphics_54,x:520.9,y:33}).wait(1).to({graphics:mask_5_graphics_55,x:520.9,y:34.4}).wait(1).to({graphics:mask_5_graphics_56,x:520.9,y:35.8}).wait(1).to({graphics:mask_5_graphics_57,x:520.9,y:37.1}).wait(1).to({graphics:mask_5_graphics_58,x:520.9,y:38.4}).wait(1).to({graphics:mask_5_graphics_59,x:520.9,y:39.6}).wait(1).to({graphics:mask_5_graphics_60,x:520.9,y:40.7}).wait(1).to({graphics:mask_5_graphics_61,x:520.9,y:41.8}).wait(1).to({graphics:mask_5_graphics_62,x:520.9,y:42.8}).wait(1).to({graphics:mask_5_graphics_63,x:520.9,y:43.7}).wait(1).to({graphics:mask_5_graphics_64,x:520.9,y:44.6}).wait(1).to({graphics:mask_5_graphics_65,x:520.9,y:45.4}).wait(1).to({graphics:mask_5_graphics_66,x:520.9,y:46.1}).wait(1).to({graphics:mask_5_graphics_67,x:520.9,y:46.8}).wait(1).to({graphics:mask_5_graphics_68,x:520.9,y:47.4}).wait(1).to({graphics:mask_5_graphics_69,x:520.9,y:47.9}).wait(1).to({graphics:mask_5_graphics_70,x:520.9,y:48.4}).wait(1).to({graphics:mask_5_graphics_71,x:520.9,y:48.8}).wait(1).to({graphics:mask_5_graphics_72,x:520.9,y:49.2}).wait(1).to({graphics:mask_5_graphics_73,x:520.9,y:49.5}).wait(1).to({graphics:mask_5_graphics_74,x:520.9,y:49.7}).wait(1).to({graphics:mask_5_graphics_75,x:520.9,y:49.9}).wait(1).to({graphics:mask_5_graphics_76,x:520.9,y:50}).wait(1).to({graphics:mask_5_graphics_77,x:520.9,y:50}).wait(68));

	// Layer 82
	this.instance_5 = new lib.stage_plus1();
	this.instance_5.setTransform(1007.3,140.3,1,1,0,0,0,23.8,24);

	this.instance_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({y:100.3},23,cjs.Ease.get(1)).wait(68));

	// Layer 132 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("EA+UAVuIAA3bIMDAAIAAXbg");
	var mask_6_graphics_61 = new cjs.Graphics().p("EA+UAVuIAA3bIMDAAIAAXbg");
	var mask_6_graphics_62 = new cjs.Graphics().p("EA+UAVMIAA3aIMDAAIAAXag");
	var mask_6_graphics_63 = new cjs.Graphics().p("EA+UAUsIAA3aIMDAAIAAXag");
	var mask_6_graphics_64 = new cjs.Graphics().p("EA+UAUNIAA3aIMDAAIAAXag");
	var mask_6_graphics_65 = new cjs.Graphics().p("EA+UATwIAA3aIMDAAIAAXag");
	var mask_6_graphics_66 = new cjs.Graphics().p("EA+UATUIAA3aIMDAAIAAXag");
	var mask_6_graphics_67 = new cjs.Graphics().p("EA+UAS6IAA3aIMDAAIAAXag");
	var mask_6_graphics_68 = new cjs.Graphics().p("EA+UASiIAA3aIMDAAIAAXag");
	var mask_6_graphics_69 = new cjs.Graphics().p("EA+UASLIAA3aIMDAAIAAXag");
	var mask_6_graphics_70 = new cjs.Graphics().p("EA+UAR1IAA3aIMDAAIAAXag");
	var mask_6_graphics_71 = new cjs.Graphics().p("EA+UARhIAA3aIMDAAIAAXag");
	var mask_6_graphics_72 = new cjs.Graphics().p("EA+UAROIAA3aIMDAAIAAXag");
	var mask_6_graphics_73 = new cjs.Graphics().p("EA+UAQ9IAA3aIMDAAIAAXag");
	var mask_6_graphics_74 = new cjs.Graphics().p("EA+UAQtIAA3aIMDAAIAAXag");
	var mask_6_graphics_75 = new cjs.Graphics().p("EA+UAQfIAA3aIMDAAIAAXag");
	var mask_6_graphics_76 = new cjs.Graphics().p("EA+UAQSIAA3aIMDAAIAAXag");
	var mask_6_graphics_77 = new cjs.Graphics().p("EA+UAQHIAA3aIMDAAIAAXag");
	var mask_6_graphics_78 = new cjs.Graphics().p("EA+UAP9IAA3aIMDAAIAAXag");
	var mask_6_graphics_79 = new cjs.Graphics().p("EA+UAP1IAA3aIMDAAIAAXag");
	var mask_6_graphics_80 = new cjs.Graphics().p("EA+UAPuIAA3aIMDAAIAAXag");
	var mask_6_graphics_81 = new cjs.Graphics().p("EA+UAPpIAA3aIMDAAIAAXag");
	var mask_6_graphics_82 = new cjs.Graphics().p("EA+UAPlIAA3aIMDAAIAAXag");
	var mask_6_graphics_83 = new cjs.Graphics().p("EA+UAPjIAA3aIMDAAIAAXag");
	var mask_6_graphics_84 = new cjs.Graphics().p("EA+UAPiIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:475.9,y:139}).wait(61).to({graphics:mask_6_graphics_61,x:475.9,y:139}).wait(1).to({graphics:mask_6_graphics_62,x:475.9,y:135.6}).wait(1).to({graphics:mask_6_graphics_63,x:475.9,y:132.4}).wait(1).to({graphics:mask_6_graphics_64,x:475.9,y:129.4}).wait(1).to({graphics:mask_6_graphics_65,x:475.9,y:126.5}).wait(1).to({graphics:mask_6_graphics_66,x:475.9,y:123.7}).wait(1).to({graphics:mask_6_graphics_67,x:475.9,y:121.1}).wait(1).to({graphics:mask_6_graphics_68,x:475.9,y:118.6}).wait(1).to({graphics:mask_6_graphics_69,x:475.9,y:116.3}).wait(1).to({graphics:mask_6_graphics_70,x:475.9,y:114.1}).wait(1).to({graphics:mask_6_graphics_71,x:475.9,y:112.1}).wait(1).to({graphics:mask_6_graphics_72,x:475.9,y:110.3}).wait(1).to({graphics:mask_6_graphics_73,x:475.9,y:108.5}).wait(1).to({graphics:mask_6_graphics_74,x:475.9,y:107}).wait(1).to({graphics:mask_6_graphics_75,x:475.9,y:105.5}).wait(1).to({graphics:mask_6_graphics_76,x:475.9,y:104.3}).wait(1).to({graphics:mask_6_graphics_77,x:475.9,y:103.2}).wait(1).to({graphics:mask_6_graphics_78,x:475.9,y:102.2}).wait(1).to({graphics:mask_6_graphics_79,x:475.9,y:101.4}).wait(1).to({graphics:mask_6_graphics_80,x:475.9,y:100.7}).wait(1).to({graphics:mask_6_graphics_81,x:475.9,y:100.2}).wait(1).to({graphics:mask_6_graphics_82,x:475.9,y:99.8}).wait(1).to({graphics:mask_6_graphics_83,x:475.9,y:99.6}).wait(1).to({graphics:mask_6_graphics_84,x:475.9,y:99.5}).wait(61));

	// Layer 130
	this.instance_6 = new lib.stage_n2();
	this.instance_6.setTransform(915.8,70.2,1,1,0,0,0,23.6,50.1);

	this.instance_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({y:100.2},23,cjs.Ease.get(1)).wait(61));

	// Layer 131 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_50 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_51 = new cjs.Graphics().p("EA+UALuIAA3bIMDAAIAAXbg");
	var mask_7_graphics_52 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_53 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_54 = new cjs.Graphics().p("EA+UALuIAA3aIMDAAIAAXag");
	var mask_7_graphics_55 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_56 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_57 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_58 = new cjs.Graphics().p("EA+UALtIAA3aIMDAAIAAXag");
	var mask_7_graphics_59 = new cjs.Graphics().p("EA+UALuIAA3bIMDAAIAAXbg");
	var mask_7_graphics_60 = new cjs.Graphics().p("EA+UALtIAA3aIMDAAIAAXag");
	var mask_7_graphics_61 = new cjs.Graphics().p("EA+UALuIAA3aIMDAAIAAXag");
	var mask_7_graphics_62 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_63 = new cjs.Graphics().p("EA+UALuIAA3bIMDAAIAAXbg");
	var mask_7_graphics_64 = new cjs.Graphics().p("EA+UALtIAA3aIMDAAIAAXag");
	var mask_7_graphics_65 = new cjs.Graphics().p("EA+UALuIAA3bIMDAAIAAXbg");
	var mask_7_graphics_66 = new cjs.Graphics().p("EA+UALtIAA3aIMDAAIAAXag");
	var mask_7_graphics_67 = new cjs.Graphics().p("EA+UALuIAA3aIMDAAIAAXag");
	var mask_7_graphics_68 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_69 = new cjs.Graphics().p("EA+UALtIAA3ZIMDAAIAAXZg");
	var mask_7_graphics_70 = new cjs.Graphics().p("EA+UALuIAA3bIMDAAIAAXbg");
	var mask_7_graphics_71 = new cjs.Graphics().p("EA+UALvIAA3aIMDAAIAAXag");
	var mask_7_graphics_72 = new cjs.Graphics().p("EA+UALyIAA3aIMDAAIAAXag");
	var mask_7_graphics_73 = new cjs.Graphics().p("EA+UALzIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:475.9,y:-27}).wait(50).to({graphics:mask_7_graphics_50,x:475.9,y:-27}).wait(1).to({graphics:mask_7_graphics_51,x:475.9,y:-18.2}).wait(1).to({graphics:mask_7_graphics_52,x:475.9,y:-9.9}).wait(1).to({graphics:mask_7_graphics_53,x:475.9,y:-1.9}).wait(1).to({graphics:mask_7_graphics_54,x:475.9,y:5.7}).wait(1).to({graphics:mask_7_graphics_55,x:475.9,y:12.9}).wait(1).to({graphics:mask_7_graphics_56,x:475.9,y:19.7}).wait(1).to({graphics:mask_7_graphics_57,x:475.9,y:26.2}).wait(1).to({graphics:mask_7_graphics_58,x:475.9,y:32.2}).wait(1).to({graphics:mask_7_graphics_59,x:475.9,y:37.8}).wait(1).to({graphics:mask_7_graphics_60,x:475.9,y:43.1}).wait(1).to({graphics:mask_7_graphics_61,x:475.9,y:48}).wait(1).to({graphics:mask_7_graphics_62,x:475.9,y:52.4}).wait(1).to({graphics:mask_7_graphics_63,x:475.9,y:56.5}).wait(1).to({graphics:mask_7_graphics_64,x:475.9,y:60.2}).wait(1).to({graphics:mask_7_graphics_65,x:475.9,y:63.5}).wait(1).to({graphics:mask_7_graphics_66,x:475.9,y:66.5}).wait(1).to({graphics:mask_7_graphics_67,x:475.9,y:69}).wait(1).to({graphics:mask_7_graphics_68,x:475.9,y:71.1}).wait(1).to({graphics:mask_7_graphics_69,x:475.9,y:72.9}).wait(1).to({graphics:mask_7_graphics_70,x:475.9,y:74.2}).wait(1).to({graphics:mask_7_graphics_71,x:475.9,y:75.1}).wait(1).to({graphics:mask_7_graphics_72,x:475.9,y:75.4}).wait(1).to({graphics:mask_7_graphics_73,x:475.9,y:75.5}).wait(72));

	// Layer 129
	this.instance_7 = new lib.stage_n1();
	this.instance_7.setTransform(915.8,140.2,1,1,0,0,0,23.6,50.1);

	this.instance_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({y:100.2},23,cjs.Ease.get(1)).wait(72));

	// Layer 128 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_56 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_57 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_8_graphics_58 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_59 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_8_graphics_60 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_61 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_62 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_63 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_64 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_8_graphics_65 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_66 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_67 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_68 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_8_graphics_69 = new cjs.Graphics().p("EA3mALtIAA3aIMCAAIAAXag");
	var mask_8_graphics_70 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_8_graphics_71 = new cjs.Graphics().p("EA3mALwIAA3aIMCAAIAAXag");
	var mask_8_graphics_72 = new cjs.Graphics().p("EA3mALzIAA3aIMCAAIAAXag");
	var mask_8_graphics_73 = new cjs.Graphics().p("EA3mAL1IAA3aIMCAAIAAXag");
	var mask_8_graphics_74 = new cjs.Graphics().p("EA3mAL4IAA3aIMCAAIAAXag");
	var mask_8_graphics_75 = new cjs.Graphics().p("EA3mAL5IAA3aIMCAAIAAXag");
	var mask_8_graphics_76 = new cjs.Graphics().p("EA3mAL7IAA3aIMCAAIAAXag");
	var mask_8_graphics_77 = new cjs.Graphics().p("EA3mAL8IAA3aIMCAAIAAXag");
	var mask_8_graphics_78 = new cjs.Graphics().p("EA3mAL8IAA3aIMCAAIAAXag");
	var mask_8_graphics_79 = new cjs.Graphics().p("EA3mAL9IAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:432.9,y:57}).wait(56).to({graphics:mask_8_graphics_56,x:432.9,y:57}).wait(1).to({graphics:mask_8_graphics_57,x:432.9,y:58.8}).wait(1).to({graphics:mask_8_graphics_58,x:432.9,y:60.5}).wait(1).to({graphics:mask_8_graphics_59,x:432.9,y:62.1}).wait(1).to({graphics:mask_8_graphics_60,x:432.9,y:63.7}).wait(1).to({graphics:mask_8_graphics_61,x:432.9,y:65.1}).wait(1).to({graphics:mask_8_graphics_62,x:432.9,y:66.5}).wait(1).to({graphics:mask_8_graphics_63,x:432.9,y:67.8}).wait(1).to({graphics:mask_8_graphics_64,x:432.9,y:69.1}).wait(1).to({graphics:mask_8_graphics_65,x:432.9,y:70.2}).wait(1).to({graphics:mask_8_graphics_66,x:432.9,y:71.3}).wait(1).to({graphics:mask_8_graphics_67,x:432.9,y:72.3}).wait(1).to({graphics:mask_8_graphics_68,x:432.9,y:73.2}).wait(1).to({graphics:mask_8_graphics_69,x:432.9,y:74}).wait(1).to({graphics:mask_8_graphics_70,x:432.9,y:74.8}).wait(1).to({graphics:mask_8_graphics_71,x:432.9,y:75.2}).wait(1).to({graphics:mask_8_graphics_72,x:432.9,y:75.5}).wait(1).to({graphics:mask_8_graphics_73,x:432.9,y:75.8}).wait(1).to({graphics:mask_8_graphics_74,x:432.9,y:76}).wait(1).to({graphics:mask_8_graphics_75,x:432.9,y:76.2}).wait(1).to({graphics:mask_8_graphics_76,x:432.9,y:76.3}).wait(1).to({graphics:mask_8_graphics_77,x:432.9,y:76.4}).wait(1).to({graphics:mask_8_graphics_78,x:432.9,y:76.5}).wait(1).to({graphics:mask_8_graphics_79,x:432.9,y:76.5}).wait(66));

	// Layer 127
	this.instance_8 = new lib.stage_g3();
	this.instance_8.setTransform(828.9,140.3,1,1,0,0,0,22.5,51.1);

	this.instance_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({y:100.3},23,cjs.Ease.get(1)).wait(66));

	// Layer 126 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("EA3mARzIAA3ZIMCAAIAAXZg");
	var mask_9_graphics_56 = new cjs.Graphics().p("EA3mARzIAA3ZIMCAAIAAXZg");
	var mask_9_graphics_57 = new cjs.Graphics().p("EA3mARnIAA3aIMCAAIAAXag");
	var mask_9_graphics_58 = new cjs.Graphics().p("EA3mARbIAA3aIMCAAIAAXag");
	var mask_9_graphics_59 = new cjs.Graphics().p("EA3mARPIAA3aIMCAAIAAXag");
	var mask_9_graphics_60 = new cjs.Graphics().p("EA3mAREIAA3aIMCAAIAAXag");
	var mask_9_graphics_61 = new cjs.Graphics().p("EA3mAQ5IAA3aIMCAAIAAXag");
	var mask_9_graphics_62 = new cjs.Graphics().p("EA3mAQvIAA3aIMCAAIAAXag");
	var mask_9_graphics_63 = new cjs.Graphics().p("EA3mAQmIAA3aIMCAAIAAXag");
	var mask_9_graphics_64 = new cjs.Graphics().p("EA3mAQdIAA3aIMCAAIAAXag");
	var mask_9_graphics_65 = new cjs.Graphics().p("EA3mAQVIAA3aIMCAAIAAXag");
	var mask_9_graphics_66 = new cjs.Graphics().p("EA3mAQNIAA3aIMCAAIAAXag");
	var mask_9_graphics_67 = new cjs.Graphics().p("EA3mAQGIAA3aIMCAAIAAXag");
	var mask_9_graphics_68 = new cjs.Graphics().p("EA3mAQAIAA3aIMCAAIAAXag");
	var mask_9_graphics_69 = new cjs.Graphics().p("EA3mAP6IAA3aIMCAAIAAXag");
	var mask_9_graphics_70 = new cjs.Graphics().p("EA3mAP0IAA3aIMCAAIAAXag");
	var mask_9_graphics_71 = new cjs.Graphics().p("EA3mAPwIAA3aIMCAAIAAXag");
	var mask_9_graphics_72 = new cjs.Graphics().p("EA3mAPrIAA3aIMCAAIAAXag");
	var mask_9_graphics_73 = new cjs.Graphics().p("EA3mAPoIAA3aIMCAAIAAXag");
	var mask_9_graphics_74 = new cjs.Graphics().p("EA3mAPlIAA3aIMCAAIAAXag");
	var mask_9_graphics_75 = new cjs.Graphics().p("EA3mAPiIAA3aIMCAAIAAXag");
	var mask_9_graphics_76 = new cjs.Graphics().p("EA3mAPgIAA3aIMCAAIAAXag");
	var mask_9_graphics_77 = new cjs.Graphics().p("EA3mAPfIAA3aIMCAAIAAXag");
	var mask_9_graphics_78 = new cjs.Graphics().p("EA3mAPeIAA3aIMCAAIAAXag");
	var mask_9_graphics_79 = new cjs.Graphics().p("EA3mAPeIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:432.9,y:114}).wait(56).to({graphics:mask_9_graphics_56,x:432.9,y:114}).wait(1).to({graphics:mask_9_graphics_57,x:432.9,y:112.7}).wait(1).to({graphics:mask_9_graphics_58,x:432.9,y:111.5}).wait(1).to({graphics:mask_9_graphics_59,x:432.9,y:110.3}).wait(1).to({graphics:mask_9_graphics_60,x:432.9,y:109.2}).wait(1).to({graphics:mask_9_graphics_61,x:432.9,y:108.2}).wait(1).to({graphics:mask_9_graphics_62,x:432.9,y:107.2}).wait(1).to({graphics:mask_9_graphics_63,x:432.9,y:106.3}).wait(1).to({graphics:mask_9_graphics_64,x:432.9,y:105.4}).wait(1).to({graphics:mask_9_graphics_65,x:432.9,y:104.6}).wait(1).to({graphics:mask_9_graphics_66,x:432.9,y:103.8}).wait(1).to({graphics:mask_9_graphics_67,x:432.9,y:103.1}).wait(1).to({graphics:mask_9_graphics_68,x:432.9,y:102.4}).wait(1).to({graphics:mask_9_graphics_69,x:432.9,y:101.8}).wait(1).to({graphics:mask_9_graphics_70,x:432.9,y:101.3}).wait(1).to({graphics:mask_9_graphics_71,x:432.9,y:100.8}).wait(1).to({graphics:mask_9_graphics_72,x:432.9,y:100.4}).wait(1).to({graphics:mask_9_graphics_73,x:432.9,y:100}).wait(1).to({graphics:mask_9_graphics_74,x:432.9,y:99.7}).wait(1).to({graphics:mask_9_graphics_75,x:432.9,y:99.5}).wait(1).to({graphics:mask_9_graphics_76,x:432.9,y:99.3}).wait(1).to({graphics:mask_9_graphics_77,x:432.9,y:99.1}).wait(1).to({graphics:mask_9_graphics_78,x:432.9,y:99}).wait(1).to({graphics:mask_9_graphics_79,x:432.9,y:99}).wait(66));

	// Layer 125
	this.instance_9 = new lib.stage_g2();
	this.instance_9.setTransform(828.9,70.3,1,1,0,0,0,22.5,51.1);

	this.instance_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(56).to({y:100.3},23,cjs.Ease.get(1)).wait(66));

	// Layer 124 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_46 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_47 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_10_graphics_48 = new cjs.Graphics().p("EA3mALtIAA3aIMCAAIAAXag");
	var mask_10_graphics_49 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_50 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_10_graphics_51 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_10_graphics_52 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_53 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_54 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_55 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_56 = new cjs.Graphics().p("EA3mALuIAA3aIMCAAIAAXag");
	var mask_10_graphics_57 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_58 = new cjs.Graphics().p("EA3mALtIAA3aIMCAAIAAXag");
	var mask_10_graphics_59 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_60 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_61 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_62 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_63 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_64 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");
	var mask_10_graphics_65 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_66 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_67 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_68 = new cjs.Graphics().p("EA3mALuIAA3bIMCAAIAAXbg");
	var mask_10_graphics_69 = new cjs.Graphics().p("EA3mALtIAA3ZIMCAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:432.9,y:-27}).wait(46).to({graphics:mask_10_graphics_46,x:432.9,y:-27}).wait(1).to({graphics:mask_10_graphics_47,x:432.9,y:-20.3}).wait(1).to({graphics:mask_10_graphics_48,x:432.9,y:-13.9}).wait(1).to({graphics:mask_10_graphics_49,x:432.9,y:-7.8}).wait(1).to({graphics:mask_10_graphics_50,x:432.9,y:-2}).wait(1).to({graphics:mask_10_graphics_51,x:432.9,y:3.5}).wait(1).to({graphics:mask_10_graphics_52,x:432.9,y:8.7}).wait(1).to({graphics:mask_10_graphics_53,x:432.9,y:13.6}).wait(1).to({graphics:mask_10_graphics_54,x:432.9,y:18.3}).wait(1).to({graphics:mask_10_graphics_55,x:432.9,y:22.6}).wait(1).to({graphics:mask_10_graphics_56,x:432.9,y:26.6}).wait(1).to({graphics:mask_10_graphics_57,x:432.9,y:30.3}).wait(1).to({graphics:mask_10_graphics_58,x:432.9,y:33.7}).wait(1).to({graphics:mask_10_graphics_59,x:432.9,y:36.9}).wait(1).to({graphics:mask_10_graphics_60,x:432.9,y:39.7}).wait(1).to({graphics:mask_10_graphics_61,x:432.9,y:42.2}).wait(1).to({graphics:mask_10_graphics_62,x:432.9,y:44.5}).wait(1).to({graphics:mask_10_graphics_63,x:432.9,y:46.4}).wait(1).to({graphics:mask_10_graphics_64,x:432.9,y:48}).wait(1).to({graphics:mask_10_graphics_65,x:432.9,y:49.4}).wait(1).to({graphics:mask_10_graphics_66,x:432.9,y:50.4}).wait(1).to({graphics:mask_10_graphics_67,x:432.9,y:51.2}).wait(1).to({graphics:mask_10_graphics_68,x:432.9,y:51.6}).wait(1).to({graphics:mask_10_graphics_69,x:432.9,y:51.8}).wait(76));

	// Layer 123
	this.instance_10 = new lib.stage_g1();
	this.instance_10.setTransform(828.9,140.3,1,1,0,0,0,22.5,51.1);

	this.instance_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46).to({y:100.3},23,cjs.Ease.get(1)).wait(76));

	// Layer 122 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_40 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_41 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_42 = new cjs.Graphics().p("EAzYALuIAA3aIMCAAIAAXag");
	var mask_11_graphics_43 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_44 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_45 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_46 = new cjs.Graphics().p("EAzYALtIAA3aIMCAAIAAXag");
	var mask_11_graphics_47 = new cjs.Graphics().p("EAzYALtIAA3aIMCAAIAAXag");
	var mask_11_graphics_48 = new cjs.Graphics().p("EAzYALuIAA3aIMCAAIAAXag");
	var mask_11_graphics_49 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_50 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_51 = new cjs.Graphics().p("EAzYALtIAA3aIMCAAIAAXag");
	var mask_11_graphics_52 = new cjs.Graphics().p("EAzYALuIAA3aIMCAAIAAXag");
	var mask_11_graphics_53 = new cjs.Graphics().p("EAzYALuIAA3aIMCAAIAAXag");
	var mask_11_graphics_54 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_55 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_56 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_57 = new cjs.Graphics().p("EAzYALtIAA3aIMCAAIAAXag");
	var mask_11_graphics_58 = new cjs.Graphics().p("EAzYALuIAA3aIMCAAIAAXag");
	var mask_11_graphics_59 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_60 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_61 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");
	var mask_11_graphics_62 = new cjs.Graphics().p("EAzYALtIAA3ZIMCAAIAAXZg");
	var mask_11_graphics_63 = new cjs.Graphics().p("EAzYALuIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:405.9,y:-27}).wait(40).to({graphics:mask_11_graphics_40,x:405.9,y:-27}).wait(1).to({graphics:mask_11_graphics_41,x:405.9,y:-18.3}).wait(1).to({graphics:mask_11_graphics_42,x:405.9,y:-10}).wait(1).to({graphics:mask_11_graphics_43,x:405.9,y:-2.1}).wait(1).to({graphics:mask_11_graphics_44,x:405.9,y:5.4}).wait(1).to({graphics:mask_11_graphics_45,x:405.9,y:12.5}).wait(1).to({graphics:mask_11_graphics_46,x:405.9,y:19.3}).wait(1).to({graphics:mask_11_graphics_47,x:405.9,y:25.6}).wait(1).to({graphics:mask_11_graphics_48,x:405.9,y:31.6}).wait(1).to({graphics:mask_11_graphics_49,x:405.9,y:37.2}).wait(1).to({graphics:mask_11_graphics_50,x:405.9,y:42.4}).wait(1).to({graphics:mask_11_graphics_51,x:405.9,y:47.2}).wait(1).to({graphics:mask_11_graphics_52,x:405.9,y:51.7}).wait(1).to({graphics:mask_11_graphics_53,x:405.9,y:55.7}).wait(1).to({graphics:mask_11_graphics_54,x:405.9,y:59.4}).wait(1).to({graphics:mask_11_graphics_55,x:405.9,y:62.7}).wait(1).to({graphics:mask_11_graphics_56,x:405.9,y:65.6}).wait(1).to({graphics:mask_11_graphics_57,x:405.9,y:68.1}).wait(1).to({graphics:mask_11_graphics_58,x:405.9,y:70.2}).wait(1).to({graphics:mask_11_graphics_59,x:405.9,y:71.9}).wait(1).to({graphics:mask_11_graphics_60,x:405.9,y:73.3}).wait(1).to({graphics:mask_11_graphics_61,x:405.9,y:74.2}).wait(1).to({graphics:mask_11_graphics_62,x:405.9,y:74.8}).wait(1).to({graphics:mask_11_graphics_63,x:405.9,y:75}).wait(82));

	// Layer 79
	this.instance_11 = new lib.stage_i();
	this.instance_11.setTransform(758.5,140.2,1,1,0,0,0,5.5,50.1);

	this.instance_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({y:100.2},23,cjs.Ease.get(1)).wait(82));

	// Layer 121 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("EAtOARzIAA3ZIMBAAIAAXZg");
	var mask_12_graphics_46 = new cjs.Graphics().p("EAtOARzIAA3ZIMBAAIAAXZg");
	var mask_12_graphics_47 = new cjs.Graphics().p("EAtOARnIAA3aIMBAAIAAXag");
	var mask_12_graphics_48 = new cjs.Graphics().p("EAtOARbIAA3aIMBAAIAAXag");
	var mask_12_graphics_49 = new cjs.Graphics().p("EAtOARPIAA3aIMBAAIAAXag");
	var mask_12_graphics_50 = new cjs.Graphics().p("EAtOAREIAA3aIMBAAIAAXag");
	var mask_12_graphics_51 = new cjs.Graphics().p("EAtOAQ5IAA3aIMBAAIAAXag");
	var mask_12_graphics_52 = new cjs.Graphics().p("EAtOAQvIAA3aIMBAAIAAXag");
	var mask_12_graphics_53 = new cjs.Graphics().p("EAtOAQmIAA3aIMBAAIAAXag");
	var mask_12_graphics_54 = new cjs.Graphics().p("EAtOAQdIAA3aIMBAAIAAXag");
	var mask_12_graphics_55 = new cjs.Graphics().p("EAtOAQVIAA3aIMBAAIAAXag");
	var mask_12_graphics_56 = new cjs.Graphics().p("EAtOAQNIAA3aIMBAAIAAXag");
	var mask_12_graphics_57 = new cjs.Graphics().p("EAtOAQGIAA3aIMBAAIAAXag");
	var mask_12_graphics_58 = new cjs.Graphics().p("EAtOAQAIAA3aIMBAAIAAXag");
	var mask_12_graphics_59 = new cjs.Graphics().p("EAtOAP6IAA3aIMBAAIAAXag");
	var mask_12_graphics_60 = new cjs.Graphics().p("EAtOAP0IAA3aIMBAAIAAXag");
	var mask_12_graphics_61 = new cjs.Graphics().p("EAtOAPwIAA3aIMBAAIAAXag");
	var mask_12_graphics_62 = new cjs.Graphics().p("EAtOAPrIAA3aIMBAAIAAXag");
	var mask_12_graphics_63 = new cjs.Graphics().p("EAtOAPoIAA3aIMBAAIAAXag");
	var mask_12_graphics_64 = new cjs.Graphics().p("EAtOAPlIAA3aIMBAAIAAXag");
	var mask_12_graphics_65 = new cjs.Graphics().p("EAtOAPiIAA3aIMBAAIAAXag");
	var mask_12_graphics_66 = new cjs.Graphics().p("EAtOAPgIAA3aIMBAAIAAXag");
	var mask_12_graphics_67 = new cjs.Graphics().p("EAtOAPfIAA3aIMBAAIAAXag");
	var mask_12_graphics_68 = new cjs.Graphics().p("EAtOAPeIAA3aIMBAAIAAXag");
	var mask_12_graphics_69 = new cjs.Graphics().p("EAtOAPeIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:366.4,y:114}).wait(46).to({graphics:mask_12_graphics_46,x:366.4,y:114}).wait(1).to({graphics:mask_12_graphics_47,x:366.4,y:112.7}).wait(1).to({graphics:mask_12_graphics_48,x:366.4,y:111.5}).wait(1).to({graphics:mask_12_graphics_49,x:366.4,y:110.3}).wait(1).to({graphics:mask_12_graphics_50,x:366.4,y:109.2}).wait(1).to({graphics:mask_12_graphics_51,x:366.4,y:108.2}).wait(1).to({graphics:mask_12_graphics_52,x:366.4,y:107.2}).wait(1).to({graphics:mask_12_graphics_53,x:366.4,y:106.3}).wait(1).to({graphics:mask_12_graphics_54,x:366.4,y:105.4}).wait(1).to({graphics:mask_12_graphics_55,x:366.4,y:104.6}).wait(1).to({graphics:mask_12_graphics_56,x:366.4,y:103.8}).wait(1).to({graphics:mask_12_graphics_57,x:366.4,y:103.1}).wait(1).to({graphics:mask_12_graphics_58,x:366.4,y:102.4}).wait(1).to({graphics:mask_12_graphics_59,x:366.4,y:101.8}).wait(1).to({graphics:mask_12_graphics_60,x:366.4,y:101.3}).wait(1).to({graphics:mask_12_graphics_61,x:366.4,y:100.8}).wait(1).to({graphics:mask_12_graphics_62,x:366.4,y:100.4}).wait(1).to({graphics:mask_12_graphics_63,x:366.4,y:100}).wait(1).to({graphics:mask_12_graphics_64,x:366.4,y:99.7}).wait(1).to({graphics:mask_12_graphics_65,x:366.4,y:99.5}).wait(1).to({graphics:mask_12_graphics_66,x:366.4,y:99.3}).wait(1).to({graphics:mask_12_graphics_67,x:366.4,y:99.1}).wait(1).to({graphics:mask_12_graphics_68,x:366.4,y:99}).wait(1).to({graphics:mask_12_graphics_69,x:366.4,y:99}).wait(76));

	// Layer 120
	this.instance_12 = new lib.stage_s2();
	this.instance_12.setTransform(689.7,70.3,1,1,0,0,0,22.6,51.1);

	this.instance_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(46).to({y:100.3},23,cjs.Ease.get(1)).wait(76));

	// Layer 119 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_13_graphics_46 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_13_graphics_47 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_48 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_49 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_13_graphics_50 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_51 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_52 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_53 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_13_graphics_54 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_55 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_56 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_57 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_58 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_59 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_60 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_61 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_62 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_13_graphics_63 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_13_graphics_64 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_13_graphics_65 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_13_graphics_66 = new cjs.Graphics().p("EAtOALwIAA3aIMBAAIAAXag");
	var mask_13_graphics_67 = new cjs.Graphics().p("EAtOALxIAA3aIMBAAIAAXag");
	var mask_13_graphics_68 = new cjs.Graphics().p("EAtOALyIAA3aIMBAAIAAXag");
	var mask_13_graphics_69 = new cjs.Graphics().p("EAtOALzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:366.4,y:43}).wait(46).to({graphics:mask_13_graphics_46,x:366.4,y:43}).wait(1).to({graphics:mask_13_graphics_47,x:366.4,y:45.8}).wait(1).to({graphics:mask_13_graphics_48,x:366.4,y:48.5}).wait(1).to({graphics:mask_13_graphics_49,x:366.4,y:51}).wait(1).to({graphics:mask_13_graphics_50,x:366.4,y:53.5}).wait(1).to({graphics:mask_13_graphics_51,x:366.4,y:55.8}).wait(1).to({graphics:mask_13_graphics_52,x:366.4,y:58}).wait(1).to({graphics:mask_13_graphics_53,x:366.4,y:60}).wait(1).to({graphics:mask_13_graphics_54,x:366.4,y:62}).wait(1).to({graphics:mask_13_graphics_55,x:366.4,y:63.8}).wait(1).to({graphics:mask_13_graphics_56,x:366.4,y:65.5}).wait(1).to({graphics:mask_13_graphics_57,x:366.4,y:67}).wait(1).to({graphics:mask_13_graphics_58,x:366.4,y:68.5}).wait(1).to({graphics:mask_13_graphics_59,x:366.4,y:69.8}).wait(1).to({graphics:mask_13_graphics_60,x:366.4,y:70.9}).wait(1).to({graphics:mask_13_graphics_61,x:366.4,y:72}).wait(1).to({graphics:mask_13_graphics_62,x:366.4,y:72.9}).wait(1).to({graphics:mask_13_graphics_63,x:366.4,y:73.8}).wait(1).to({graphics:mask_13_graphics_64,x:366.4,y:74.4}).wait(1).to({graphics:mask_13_graphics_65,x:366.4,y:75}).wait(1).to({graphics:mask_13_graphics_66,x:366.4,y:75.2}).wait(1).to({graphics:mask_13_graphics_67,x:366.4,y:75.4}).wait(1).to({graphics:mask_13_graphics_68,x:366.4,y:75.5}).wait(1).to({graphics:mask_13_graphics_69,x:366.4,y:75.5}).wait(76));

	// Layer 118
	this.instance_13 = new lib.stage_s3();
	this.instance_13.setTransform(689.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_13.mask = mask_13;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(46).to({y:100.3},23,cjs.Ease.get(1)).wait(76));

	// Layer 117 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_0 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_35 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_36 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_37 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_14_graphics_38 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_39 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_40 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_41 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_42 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_14_graphics_43 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_44 = new cjs.Graphics().p("EAtOALtIAA3ZIMBAAIAAXZg");
	var mask_14_graphics_45 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_46 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_47 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_14_graphics_48 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_14_graphics_49 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_50 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_14_graphics_51 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");
	var mask_14_graphics_52 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_14_graphics_53 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_54 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_55 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_56 = new cjs.Graphics().p("EAtOALuIAA3bIMBAAIAAXbg");
	var mask_14_graphics_57 = new cjs.Graphics().p("EAtOALtIAA3aIMBAAIAAXag");
	var mask_14_graphics_58 = new cjs.Graphics().p("EAtOALuIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:mask_14_graphics_0,x:366.4,y:-27}).wait(35).to({graphics:mask_14_graphics_35,x:366.4,y:-27}).wait(1).to({graphics:mask_14_graphics_36,x:366.4,y:-20.7}).wait(1).to({graphics:mask_14_graphics_37,x:366.4,y:-14.7}).wait(1).to({graphics:mask_14_graphics_38,x:366.4,y:-9}).wait(1).to({graphics:mask_14_graphics_39,x:366.4,y:-3.5}).wait(1).to({graphics:mask_14_graphics_40,x:366.4,y:1.7}).wait(1).to({graphics:mask_14_graphics_41,x:366.4,y:6.6}).wait(1).to({graphics:mask_14_graphics_42,x:366.4,y:11.2}).wait(1).to({graphics:mask_14_graphics_43,x:366.4,y:15.5}).wait(1).to({graphics:mask_14_graphics_44,x:366.4,y:19.6}).wait(1).to({graphics:mask_14_graphics_45,x:366.4,y:23.4}).wait(1).to({graphics:mask_14_graphics_46,x:366.4,y:26.9}).wait(1).to({graphics:mask_14_graphics_47,x:366.4,y:30.1}).wait(1).to({graphics:mask_14_graphics_48,x:366.4,y:33}).wait(1).to({graphics:mask_14_graphics_49,x:366.4,y:35.7}).wait(1).to({graphics:mask_14_graphics_50,x:366.4,y:38}).wait(1).to({graphics:mask_14_graphics_51,x:366.4,y:40.1}).wait(1).to({graphics:mask_14_graphics_52,x:366.4,y:42}).wait(1).to({graphics:mask_14_graphics_53,x:366.4,y:43.5}).wait(1).to({graphics:mask_14_graphics_54,x:366.4,y:44.8}).wait(1).to({graphics:mask_14_graphics_55,x:366.4,y:45.7}).wait(1).to({graphics:mask_14_graphics_56,x:366.4,y:46.4}).wait(1).to({graphics:mask_14_graphics_57,x:366.4,y:46.9}).wait(1).to({graphics:mask_14_graphics_58,x:366.4,y:47}).wait(87));

	// Layer 116
	this.instance_14 = new lib.stage_s1();
	this.instance_14.setTransform(689.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_14.mask = mask_14;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(35).to({y:100.3},23,cjs.Ease.get(1)).wait(87));

	// Layer 114 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_0 = new cjs.Graphics().p("EAiTANIIAA3bIMCAAIAAXbg");
	var mask_15_graphics_40 = new cjs.Graphics().p("EAiTANIIAA3bIMCAAIAAXbg");
	var mask_15_graphics_41 = new cjs.Graphics().p("EAifANJIAA3aIMCAAIAAXag");
	var mask_15_graphics_42 = new cjs.Graphics().p("EAirANKIAA3aIMCAAIAAXag");
	var mask_15_graphics_43 = new cjs.Graphics().p("EAi2ANLIAA3aIMCAAIAAXag");
	var mask_15_graphics_44 = new cjs.Graphics().p("EAjBANMIAA3aIMCAAIAAXag");
	var mask_15_graphics_45 = new cjs.Graphics().p("EAjLANNIAA3aIMCAAIAAXag");
	var mask_15_graphics_46 = new cjs.Graphics().p("EAjVANOIAA3aIMCAAIAAXag");
	var mask_15_graphics_47 = new cjs.Graphics().p("EAjeANPIAA3aIMCAAIAAXag");
	var mask_15_graphics_48 = new cjs.Graphics().p("EAjmANQIAA3aIMCAAIAAXag");
	var mask_15_graphics_49 = new cjs.Graphics().p("EAjuANRIAA3aIMCAAIAAXag");
	var mask_15_graphics_50 = new cjs.Graphics().p("EAj2ANSIAA3aIMCAAIAAXag");
	var mask_15_graphics_51 = new cjs.Graphics().p("EAj9ANSIAA3aIMCAAIAAXag");
	var mask_15_graphics_52 = new cjs.Graphics().p("EAkDANTIAA3aIMCAAIAAXag");
	var mask_15_graphics_53 = new cjs.Graphics().p("EAkJANUIAA3aIMCAAIAAXag");
	var mask_15_graphics_54 = new cjs.Graphics().p("EAkOANUIAA3aIMCAAIAAXag");
	var mask_15_graphics_55 = new cjs.Graphics().p("EAkSANVIAA3aIMCAAIAAXag");
	var mask_15_graphics_56 = new cjs.Graphics().p("EAkXANVIAA3aIMCAAIAAXag");
	var mask_15_graphics_57 = new cjs.Graphics().p("EAkaANVIAA3aIMCAAIAAXag");
	var mask_15_graphics_58 = new cjs.Graphics().p("EAkdANWIAA3aIMCAAIAAXag");
	var mask_15_graphics_59 = new cjs.Graphics().p("EAkgANWIAA3aIMCAAIAAXag");
	var mask_15_graphics_60 = new cjs.Graphics().p("EAkiANWIAA3aIMCAAIAAXag");
	var mask_15_graphics_61 = new cjs.Graphics().p("EAkjANWIAA3aIMCAAIAAXag");
	var mask_15_graphics_62 = new cjs.Graphics().p("EAkkANWIAA3aIMCAAIAAXag");
	var mask_15_graphics_63 = new cjs.Graphics().p("EAkkANXIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:mask_15_graphics_0,x:296.6,y:84}).wait(40).to({graphics:mask_15_graphics_40,x:296.6,y:84}).wait(1).to({graphics:mask_15_graphics_41,x:297.8,y:84.1}).wait(1).to({graphics:mask_15_graphics_42,x:299,y:84.2}).wait(1).to({graphics:mask_15_graphics_43,x:300.1,y:84.4}).wait(1).to({graphics:mask_15_graphics_44,x:301.2,y:84.5}).wait(1).to({graphics:mask_15_graphics_45,x:302.2,y:84.6}).wait(1).to({graphics:mask_15_graphics_46,x:303.1,y:84.7}).wait(1).to({graphics:mask_15_graphics_47,x:304,y:84.8}).wait(1).to({graphics:mask_15_graphics_48,x:304.9,y:84.9}).wait(1).to({graphics:mask_15_graphics_49,x:305.7,y:84.9}).wait(1).to({graphics:mask_15_graphics_50,x:306.4,y:85}).wait(1).to({graphics:mask_15_graphics_51,x:307.1,y:85.1}).wait(1).to({graphics:mask_15_graphics_52,x:307.7,y:85.2}).wait(1).to({graphics:mask_15_graphics_53,x:308.3,y:85.2}).wait(1).to({graphics:mask_15_graphics_54,x:308.8,y:85.3}).wait(1).to({graphics:mask_15_graphics_55,x:309.3,y:85.3}).wait(1).to({graphics:mask_15_graphics_56,x:309.7,y:85.4}).wait(1).to({graphics:mask_15_graphics_57,x:310.1,y:85.4}).wait(1).to({graphics:mask_15_graphics_58,x:310.4,y:85.4}).wait(1).to({graphics:mask_15_graphics_59,x:310.6,y:85.5}).wait(1).to({graphics:mask_15_graphics_60,x:310.8,y:85.5}).wait(1).to({graphics:mask_15_graphics_61,x:310.9,y:85.5}).wait(1).to({graphics:mask_15_graphics_62,x:311,y:85.5}).wait(1).to({graphics:mask_15_graphics_63,x:311.1,y:85.5}).wait(82));

	// Layer 113
	this.instance_15 = new lib.stage_e3();
	this.instance_15.setTransform(605.9,100.2,1,1,0,0,0,20.6,50.1);

	this.instance_15.mask = mask_15;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(145));

	// Layer 112 (mask)
	var mask_16 = new cjs.Shape();
	mask_16._off = true;
	var mask_16_graphics_0 = new cjs.Graphics().p("EAsEANIIAA3bIMCAAIAAXbg");
	var mask_16_graphics_40 = new cjs.Graphics().p("EArSALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_41 = new cjs.Graphics().p("EArDALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_42 = new cjs.Graphics().p("EAq0ALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_43 = new cjs.Graphics().p("EAqmALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_44 = new cjs.Graphics().p("EAqZALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_45 = new cjs.Graphics().p("EAqMALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_46 = new cjs.Graphics().p("EAqAALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_47 = new cjs.Graphics().p("EAp1ALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_48 = new cjs.Graphics().p("EAprALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_49 = new cjs.Graphics().p("EAphALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_50 = new cjs.Graphics().p("EApYALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_51 = new cjs.Graphics().p("EApPALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_52 = new cjs.Graphics().p("EApHALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_53 = new cjs.Graphics().p("EApAALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_54 = new cjs.Graphics().p("EAo6ALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_55 = new cjs.Graphics().p("EAo0ALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_56 = new cjs.Graphics().p("EAovALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_57 = new cjs.Graphics().p("EAoqALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_58 = new cjs.Graphics().p("EAonALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_59 = new cjs.Graphics().p("EAojALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_60 = new cjs.Graphics().p("EAohALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_61 = new cjs.Graphics().p("EAofALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_62 = new cjs.Graphics().p("EAoeALzIAA3bIMCAAIAAXbg");
	var mask_16_graphics_63 = new cjs.Graphics().p("EAoeALzIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_16).to({graphics:mask_16_graphics_0,x:359.1,y:84}).wait(40).to({graphics:mask_16_graphics_40,x:354.1,y:75.5}).wait(1).to({graphics:mask_16_graphics_41,x:352.5,y:75.5}).wait(1).to({graphics:mask_16_graphics_42,x:351.1,y:75.5}).wait(1).to({graphics:mask_16_graphics_43,x:349.7,y:75.5}).wait(1).to({graphics:mask_16_graphics_44,x:348.3,y:75.5}).wait(1).to({graphics:mask_16_graphics_45,x:347.1,y:75.5}).wait(1).to({graphics:mask_16_graphics_46,x:345.9,y:75.5}).wait(1).to({graphics:mask_16_graphics_47,x:344.8,y:75.5}).wait(1).to({graphics:mask_16_graphics_48,x:343.7,y:75.5}).wait(1).to({graphics:mask_16_graphics_49,x:342.7,y:75.5}).wait(1).to({graphics:mask_16_graphics_50,x:341.8,y:75.5}).wait(1).to({graphics:mask_16_graphics_51,x:340.9,y:75.5}).wait(1).to({graphics:mask_16_graphics_52,x:340.2,y:75.5}).wait(1).to({graphics:mask_16_graphics_53,x:339.5,y:75.5}).wait(1).to({graphics:mask_16_graphics_54,x:338.8,y:75.5}).wait(1).to({graphics:mask_16_graphics_55,x:338.2,y:75.5}).wait(1).to({graphics:mask_16_graphics_56,x:337.7,y:75.5}).wait(1).to({graphics:mask_16_graphics_57,x:337.3,y:75.5}).wait(1).to({graphics:mask_16_graphics_58,x:336.9,y:75.5}).wait(1).to({graphics:mask_16_graphics_59,x:336.6,y:75.5}).wait(1).to({graphics:mask_16_graphics_60,x:336.4,y:75.5}).wait(1).to({graphics:mask_16_graphics_61,x:336.2,y:75.5}).wait(1).to({graphics:mask_16_graphics_62,x:336.1,y:75.5}).wait(1).to({graphics:mask_16_graphics_63,x:336.1,y:75.5}).wait(82));

	// Layer 111
	this.instance_16 = new lib.stage_e2();
	this.instance_16.setTransform(605.9,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_16.mask = mask_16;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({y:100.2},23,cjs.Ease.get(1)).wait(82));

	// Layer 110 (mask)
	var mask_17 = new cjs.Shape();
	mask_17._off = true;
	var mask_17_graphics_0 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_30 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_31 = new cjs.Graphics().p("EAmmALuIAA3bIMCAAIAAXbg");
	var mask_17_graphics_32 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_33 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_34 = new cjs.Graphics().p("EAmmALuIAA3aIMCAAIAAXag");
	var mask_17_graphics_35 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_36 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_37 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_38 = new cjs.Graphics().p("EAmmALtIAA3aIMCAAIAAXag");
	var mask_17_graphics_39 = new cjs.Graphics().p("EAmmALuIAA3bIMCAAIAAXbg");
	var mask_17_graphics_40 = new cjs.Graphics().p("EAmmALtIAA3aIMCAAIAAXag");
	var mask_17_graphics_41 = new cjs.Graphics().p("EAmmALuIAA3aIMCAAIAAXag");
	var mask_17_graphics_42 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_43 = new cjs.Graphics().p("EAmmALuIAA3bIMCAAIAAXbg");
	var mask_17_graphics_44 = new cjs.Graphics().p("EAmmALtIAA3aIMCAAIAAXag");
	var mask_17_graphics_45 = new cjs.Graphics().p("EAmmALuIAA3bIMCAAIAAXbg");
	var mask_17_graphics_46 = new cjs.Graphics().p("EAmmALtIAA3aIMCAAIAAXag");
	var mask_17_graphics_47 = new cjs.Graphics().p("EAmmALuIAA3aIMCAAIAAXag");
	var mask_17_graphics_48 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_49 = new cjs.Graphics().p("EAmmALtIAA3ZIMCAAIAAXZg");
	var mask_17_graphics_50 = new cjs.Graphics().p("EAmmALuIAA3bIMCAAIAAXbg");
	var mask_17_graphics_51 = new cjs.Graphics().p("EAmmALvIAA3aIMCAAIAAXag");
	var mask_17_graphics_52 = new cjs.Graphics().p("EAmmALyIAA3aIMCAAIAAXag");
	var mask_17_graphics_53 = new cjs.Graphics().p("EAmmALzIAA3bIMCAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_17).to({graphics:mask_17_graphics_0,x:324.1,y:-27}).wait(30).to({graphics:mask_17_graphics_30,x:324.1,y:-27}).wait(1).to({graphics:mask_17_graphics_31,x:324.1,y:-18.2}).wait(1).to({graphics:mask_17_graphics_32,x:324.1,y:-9.9}).wait(1).to({graphics:mask_17_graphics_33,x:324.1,y:-1.9}).wait(1).to({graphics:mask_17_graphics_34,x:324.1,y:5.7}).wait(1).to({graphics:mask_17_graphics_35,x:324.1,y:12.9}).wait(1).to({graphics:mask_17_graphics_36,x:324.1,y:19.7}).wait(1).to({graphics:mask_17_graphics_37,x:324.1,y:26.2}).wait(1).to({graphics:mask_17_graphics_38,x:324.1,y:32.2}).wait(1).to({graphics:mask_17_graphics_39,x:324.1,y:37.8}).wait(1).to({graphics:mask_17_graphics_40,x:324.1,y:43.1}).wait(1).to({graphics:mask_17_graphics_41,x:324.1,y:48}).wait(1).to({graphics:mask_17_graphics_42,x:324.1,y:52.4}).wait(1).to({graphics:mask_17_graphics_43,x:324.1,y:56.5}).wait(1).to({graphics:mask_17_graphics_44,x:324.1,y:60.2}).wait(1).to({graphics:mask_17_graphics_45,x:324.1,y:63.5}).wait(1).to({graphics:mask_17_graphics_46,x:324.1,y:66.5}).wait(1).to({graphics:mask_17_graphics_47,x:324.1,y:69}).wait(1).to({graphics:mask_17_graphics_48,x:324.1,y:71.1}).wait(1).to({graphics:mask_17_graphics_49,x:324.1,y:72.9}).wait(1).to({graphics:mask_17_graphics_50,x:324.1,y:74.2}).wait(1).to({graphics:mask_17_graphics_51,x:324.1,y:75.1}).wait(1).to({graphics:mask_17_graphics_52,x:324.1,y:75.4}).wait(1).to({graphics:mask_17_graphics_53,x:324.1,y:75.5}).wait(92));

	// Layer 109
	this.instance_17 = new lib.stage_e1();
	this.instance_17.setTransform(605.9,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_17.mask = mask_17;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(30).to({y:100.2},23,cjs.Ease.get(1)).wait(92));

	// Layer 108 (mask)
	var mask_18 = new cjs.Shape();
	mask_18._off = true;
	var mask_18_graphics_0 = new cjs.Graphics().p("EAkiANbIAA3aIMDAAIAAXag");
	var mask_18_graphics_35 = new cjs.Graphics().p("EAkiANbIAA3aIMDAAIAAXag");
	var mask_18_graphics_36 = new cjs.Graphics().p("EAkSANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_37 = new cjs.Graphics().p("EAkCANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_38 = new cjs.Graphics().p("EAjzANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_39 = new cjs.Graphics().p("EAjlANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_40 = new cjs.Graphics().p("EAjXANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_41 = new cjs.Graphics().p("EAjKANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_42 = new cjs.Graphics().p("EAi+ANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_43 = new cjs.Graphics().p("EAizANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_44 = new cjs.Graphics().p("EAioANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_45 = new cjs.Graphics().p("EAieANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_46 = new cjs.Graphics().p("EAiVANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_47 = new cjs.Graphics().p("EAiNANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_48 = new cjs.Graphics().p("EAiFANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_49 = new cjs.Graphics().p("EAh+ANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_50 = new cjs.Graphics().p("EAh4ANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_51 = new cjs.Graphics().p("EAhyANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_52 = new cjs.Graphics().p("EAhuANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_53 = new cjs.Graphics().p("EAhqANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_54 = new cjs.Graphics().p("EAhmANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_55 = new cjs.Graphics().p("EAhkANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_56 = new cjs.Graphics().p("EAhiANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_57 = new cjs.Graphics().p("EAhhANbIAA3aIMCAAIAAXag");
	var mask_18_graphics_58 = new cjs.Graphics().p("EAhgANbIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_18).to({graphics:mask_18_graphics_0,x:310.9,y:86}).wait(35).to({graphics:mask_18_graphics_35,x:310.9,y:86}).wait(1).to({graphics:mask_18_graphics_36,x:309.2,y:86}).wait(1).to({graphics:mask_18_graphics_37,x:307.7,y:86}).wait(1).to({graphics:mask_18_graphics_38,x:306.2,y:86}).wait(1).to({graphics:mask_18_graphics_39,x:304.7,y:86}).wait(1).to({graphics:mask_18_graphics_40,x:303.4,y:86}).wait(1).to({graphics:mask_18_graphics_41,x:302.1,y:86}).wait(1).to({graphics:mask_18_graphics_42,x:300.9,y:86}).wait(1).to({graphics:mask_18_graphics_43,x:299.8,y:86}).wait(1).to({graphics:mask_18_graphics_44,x:298.7,y:86}).wait(1).to({graphics:mask_18_graphics_45,x:297.7,y:86}).wait(1).to({graphics:mask_18_graphics_46,x:296.8,y:86}).wait(1).to({graphics:mask_18_graphics_47,x:295.9,y:86}).wait(1).to({graphics:mask_18_graphics_48,x:295.2,y:86}).wait(1).to({graphics:mask_18_graphics_49,x:294.5,y:86}).wait(1).to({graphics:mask_18_graphics_50,x:293.8,y:86}).wait(1).to({graphics:mask_18_graphics_51,x:293.3,y:86}).wait(1).to({graphics:mask_18_graphics_52,x:292.8,y:86}).wait(1).to({graphics:mask_18_graphics_53,x:292.4,y:86}).wait(1).to({graphics:mask_18_graphics_54,x:292.1,y:86}).wait(1).to({graphics:mask_18_graphics_55,x:291.8,y:86}).wait(1).to({graphics:mask_18_graphics_56,x:291.6,y:86}).wait(1).to({graphics:mask_18_graphics_57,x:291.5,y:86}).wait(1).to({graphics:mask_18_graphics_58,x:291.5,y:86}).wait(87));

	// Layer 106
	this.instance_18 = new lib.stage_d2();
	this.instance_18.setTransform(519.7,110.2,1,1,0,0,0,23.1,50.1);

	this.instance_18.mask = mask_18;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({y:100.2},23,cjs.Ease.get(1)).wait(87));

	// Layer 107 (mask)
	var mask_19 = new cjs.Shape();
	mask_19._off = true;
	var mask_19_graphics_0 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_24 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_25 = new cjs.Graphics().p("Af3LuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_26 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_27 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_28 = new cjs.Graphics().p("Af3LuIAA3aIMBAAIAAXag");
	var mask_19_graphics_29 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_30 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_31 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_32 = new cjs.Graphics().p("Af3LtIAA3aIMBAAIAAXag");
	var mask_19_graphics_33 = new cjs.Graphics().p("Af3LuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_34 = new cjs.Graphics().p("Af3LtIAA3aIMBAAIAAXag");
	var mask_19_graphics_35 = new cjs.Graphics().p("Af3LuIAA3aIMBAAIAAXag");
	var mask_19_graphics_36 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_37 = new cjs.Graphics().p("Af3LuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_38 = new cjs.Graphics().p("Af3LtIAA3aIMBAAIAAXag");
	var mask_19_graphics_39 = new cjs.Graphics().p("Af3LuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_40 = new cjs.Graphics().p("Af3LtIAA3aIMBAAIAAXag");
	var mask_19_graphics_41 = new cjs.Graphics().p("Af3LuIAA3aIMBAAIAAXag");
	var mask_19_graphics_42 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_43 = new cjs.Graphics().p("Af3LtIAA3ZIMBAAIAAXZg");
	var mask_19_graphics_44 = new cjs.Graphics().p("Af3LuIAA3bIMBAAIAAXbg");
	var mask_19_graphics_45 = new cjs.Graphics().p("Af3LvIAA3aIMBAAIAAXag");
	var mask_19_graphics_46 = new cjs.Graphics().p("Af3LyIAA3aIMBAAIAAXag");
	var mask_19_graphics_47 = new cjs.Graphics().p("Af3LzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_19).to({graphics:mask_19_graphics_0,x:280.9,y:-27}).wait(24).to({graphics:mask_19_graphics_24,x:280.9,y:-27}).wait(1).to({graphics:mask_19_graphics_25,x:280.9,y:-18.2}).wait(1).to({graphics:mask_19_graphics_26,x:280.9,y:-9.9}).wait(1).to({graphics:mask_19_graphics_27,x:280.9,y:-1.9}).wait(1).to({graphics:mask_19_graphics_28,x:280.9,y:5.7}).wait(1).to({graphics:mask_19_graphics_29,x:280.9,y:12.9}).wait(1).to({graphics:mask_19_graphics_30,x:280.9,y:19.7}).wait(1).to({graphics:mask_19_graphics_31,x:280.9,y:26.2}).wait(1).to({graphics:mask_19_graphics_32,x:280.9,y:32.2}).wait(1).to({graphics:mask_19_graphics_33,x:280.9,y:37.8}).wait(1).to({graphics:mask_19_graphics_34,x:280.9,y:43.1}).wait(1).to({graphics:mask_19_graphics_35,x:280.9,y:48}).wait(1).to({graphics:mask_19_graphics_36,x:280.9,y:52.4}).wait(1).to({graphics:mask_19_graphics_37,x:280.9,y:56.5}).wait(1).to({graphics:mask_19_graphics_38,x:280.9,y:60.2}).wait(1).to({graphics:mask_19_graphics_39,x:280.9,y:63.5}).wait(1).to({graphics:mask_19_graphics_40,x:280.9,y:66.5}).wait(1).to({graphics:mask_19_graphics_41,x:280.9,y:69}).wait(1).to({graphics:mask_19_graphics_42,x:280.9,y:71.1}).wait(1).to({graphics:mask_19_graphics_43,x:280.9,y:72.9}).wait(1).to({graphics:mask_19_graphics_44,x:280.9,y:74.2}).wait(1).to({graphics:mask_19_graphics_45,x:280.9,y:75.1}).wait(1).to({graphics:mask_19_graphics_46,x:280.9,y:75.4}).wait(1).to({graphics:mask_19_graphics_47,x:280.9,y:75.5}).wait(98));

	// Layer 76
	this.instance_19 = new lib.stage_d1();
	this.instance_19.setTransform(519.7,140.2,1,1,0,0,0,23.1,50.1);

	this.instance_19.mask = mask_19;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({y:100.2},23,cjs.Ease.get(1)).wait(98));

	// Layer 105 (mask)
	var mask_20 = new cjs.Shape();
	mask_20._off = true;
	var mask_20_graphics_0 = new cjs.Graphics().p("AQnNIIAA3bIMDAAIAAXbg");
	var mask_20_graphics_30 = new cjs.Graphics().p("AQnNIIAA3bIMDAAIAAXbg");
	var mask_20_graphics_31 = new cjs.Graphics().p("AQ0NJIAA3aIMCAAIAAXag");
	var mask_20_graphics_32 = new cjs.Graphics().p("ARANKIAA3aIMCAAIAAXag");
	var mask_20_graphics_33 = new cjs.Graphics().p("ARLNLIAA3aIMCAAIAAXag");
	var mask_20_graphics_34 = new cjs.Graphics().p("ARWNMIAA3aIMCAAIAAXag");
	var mask_20_graphics_35 = new cjs.Graphics().p("ARgNNIAA3aIMCAAIAAXag");
	var mask_20_graphics_36 = new cjs.Graphics().p("ARpNOIAA3aIMCAAIAAXag");
	var mask_20_graphics_37 = new cjs.Graphics().p("ARyNPIAA3aIMCAAIAAXag");
	var mask_20_graphics_38 = new cjs.Graphics().p("AR7NQIAA3aIMCAAIAAXag");
	var mask_20_graphics_39 = new cjs.Graphics().p("ASDNRIAA3aIMCAAIAAXag");
	var mask_20_graphics_40 = new cjs.Graphics().p("ASKNSIAA3aIMCAAIAAXag");
	var mask_20_graphics_41 = new cjs.Graphics().p("ASRNSIAA3aIMCAAIAAXag");
	var mask_20_graphics_42 = new cjs.Graphics().p("ASXNTIAA3aIMCAAIAAXag");
	var mask_20_graphics_43 = new cjs.Graphics().p("ASdNUIAA3aIMCAAIAAXag");
	var mask_20_graphics_44 = new cjs.Graphics().p("ASiNUIAA3aIMCAAIAAXag");
	var mask_20_graphics_45 = new cjs.Graphics().p("ASnNVIAA3aIMCAAIAAXag");
	var mask_20_graphics_46 = new cjs.Graphics().p("ASrNVIAA3aIMCAAIAAXag");
	var mask_20_graphics_47 = new cjs.Graphics().p("ASvNVIAA3aIMCAAIAAXag");
	var mask_20_graphics_48 = new cjs.Graphics().p("ASyNWIAA3aIMCAAIAAXag");
	var mask_20_graphics_49 = new cjs.Graphics().p("AS0NWIAA3aIMCAAIAAXag");
	var mask_20_graphics_50 = new cjs.Graphics().p("AS2NWIAA3aIMCAAIAAXag");
	var mask_20_graphics_51 = new cjs.Graphics().p("AS3NWIAA3aIMCAAIAAXag");
	var mask_20_graphics_52 = new cjs.Graphics().p("AS4NWIAA3aIMCAAIAAXag");
	var mask_20_graphics_53 = new cjs.Graphics().p("AS4NXIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_20).to({graphics:mask_20_graphics_0,x:183.4,y:84}).wait(30).to({graphics:mask_20_graphics_30,x:183.4,y:84}).wait(1).to({graphics:mask_20_graphics_31,x:184.6,y:84.1}).wait(1).to({graphics:mask_20_graphics_32,x:185.8,y:84.2}).wait(1).to({graphics:mask_20_graphics_33,x:186.9,y:84.4}).wait(1).to({graphics:mask_20_graphics_34,x:188,y:84.5}).wait(1).to({graphics:mask_20_graphics_35,x:189,y:84.6}).wait(1).to({graphics:mask_20_graphics_36,x:190,y:84.7}).wait(1).to({graphics:mask_20_graphics_37,x:190.9,y:84.8}).wait(1).to({graphics:mask_20_graphics_38,x:191.7,y:84.9}).wait(1).to({graphics:mask_20_graphics_39,x:192.5,y:84.9}).wait(1).to({graphics:mask_20_graphics_40,x:193.3,y:85}).wait(1).to({graphics:mask_20_graphics_41,x:194,y:85.1}).wait(1).to({graphics:mask_20_graphics_42,x:194.6,y:85.2}).wait(1).to({graphics:mask_20_graphics_43,x:195.2,y:85.2}).wait(1).to({graphics:mask_20_graphics_44,x:195.7,y:85.3}).wait(1).to({graphics:mask_20_graphics_45,x:196.1,y:85.3}).wait(1).to({graphics:mask_20_graphics_46,x:196.6,y:85.4}).wait(1).to({graphics:mask_20_graphics_47,x:196.9,y:85.4}).wait(1).to({graphics:mask_20_graphics_48,x:197.2,y:85.4}).wait(1).to({graphics:mask_20_graphics_49,x:197.5,y:85.5}).wait(1).to({graphics:mask_20_graphics_50,x:197.7,y:85.5}).wait(1).to({graphics:mask_20_graphics_51,x:197.8,y:85.5}).wait(1).to({graphics:mask_20_graphics_52,x:197.9,y:85.5}).wait(1).to({graphics:mask_20_graphics_53,x:197.9,y:85.5}).wait(92));

	// Layer 102
	this.instance_20 = new lib.stage_e3();
	this.instance_20.setTransform(379.6,100.2,1,1,0,0,0,20.6,50.1);

	this.instance_20.mask = mask_20;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(145));

	// Layer 104 (mask)
	var mask_21 = new cjs.Shape();
	mask_21._off = true;
	var mask_21_graphics_0 = new cjs.Graphics().p("AaZNIIAA3bIMBAAIAAXbg");
	var mask_21_graphics_30 = new cjs.Graphics().p("AZnLzIAA3bIMBAAIAAXbg");
	var mask_21_graphics_31 = new cjs.Graphics().p("AZXLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_32 = new cjs.Graphics().p("AZJLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_33 = new cjs.Graphics().p("AY7LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_34 = new cjs.Graphics().p("AYtLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_35 = new cjs.Graphics().p("AYhLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_36 = new cjs.Graphics().p("AYVLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_37 = new cjs.Graphics().p("AYKLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_38 = new cjs.Graphics().p("AX/LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_39 = new cjs.Graphics().p("AX1LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_40 = new cjs.Graphics().p("AXsLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_41 = new cjs.Graphics().p("AXjLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_42 = new cjs.Graphics().p("AXcLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_43 = new cjs.Graphics().p("AXVLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_44 = new cjs.Graphics().p("AXOLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_45 = new cjs.Graphics().p("AXILzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_46 = new cjs.Graphics().p("AXDLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_47 = new cjs.Graphics().p("AW/LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_48 = new cjs.Graphics().p("AW7LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_49 = new cjs.Graphics().p("AW4LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_50 = new cjs.Graphics().p("AW2LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_51 = new cjs.Graphics().p("AW0LzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_52 = new cjs.Graphics().p("AWzLzIAA3bIMCAAIAAXbg");
	var mask_21_graphics_53 = new cjs.Graphics().p("AWzLzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_21).to({graphics:mask_21_graphics_0,x:245.9,y:84}).wait(30).to({graphics:mask_21_graphics_30,x:240.9,y:75.5}).wait(1).to({graphics:mask_21_graphics_31,x:239.4,y:75.5}).wait(1).to({graphics:mask_21_graphics_32,x:237.9,y:75.5}).wait(1).to({graphics:mask_21_graphics_33,x:236.5,y:75.5}).wait(1).to({graphics:mask_21_graphics_34,x:235.2,y:75.5}).wait(1).to({graphics:mask_21_graphics_35,x:233.9,y:75.5}).wait(1).to({graphics:mask_21_graphics_36,x:232.7,y:75.5}).wait(1).to({graphics:mask_21_graphics_37,x:231.6,y:75.5}).wait(1).to({graphics:mask_21_graphics_38,x:230.6,y:75.5}).wait(1).to({graphics:mask_21_graphics_39,x:229.6,y:75.5}).wait(1).to({graphics:mask_21_graphics_40,x:228.7,y:75.5}).wait(1).to({graphics:mask_21_graphics_41,x:227.8,y:75.5}).wait(1).to({graphics:mask_21_graphics_42,x:227,y:75.5}).wait(1).to({graphics:mask_21_graphics_43,x:226.3,y:75.5}).wait(1).to({graphics:mask_21_graphics_44,x:225.7,y:75.5}).wait(1).to({graphics:mask_21_graphics_45,x:225.1,y:75.5}).wait(1).to({graphics:mask_21_graphics_46,x:224.6,y:75.5}).wait(1).to({graphics:mask_21_graphics_47,x:224.1,y:75.5}).wait(1).to({graphics:mask_21_graphics_48,x:223.8,y:75.5}).wait(1).to({graphics:mask_21_graphics_49,x:223.4,y:75.5}).wait(1).to({graphics:mask_21_graphics_50,x:223.2,y:75.5}).wait(1).to({graphics:mask_21_graphics_51,x:223,y:75.5}).wait(1).to({graphics:mask_21_graphics_52,x:222.9,y:75.5}).wait(1).to({graphics:mask_21_graphics_53,x:222.9,y:75.5}).wait(92));

	// Layer 101
	this.instance_21 = new lib.stage_e2();
	this.instance_21.setTransform(379.6,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_21.mask = mask_21;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(30).to({y:100.2},23,cjs.Ease.get(1)).wait(92));

	// Layer 103 (mask)
	var mask_22 = new cjs.Shape();
	mask_22._off = true;
	var mask_22_graphics_0 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_20 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_21 = new cjs.Graphics().p("AU6LuIAA3bIMDAAIAAXbg");
	var mask_22_graphics_22 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_23 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_24 = new cjs.Graphics().p("AU6LuIAA3aIMDAAIAAXag");
	var mask_22_graphics_25 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_26 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_27 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_28 = new cjs.Graphics().p("AU6LtIAA3aIMDAAIAAXag");
	var mask_22_graphics_29 = new cjs.Graphics().p("AU6LuIAA3bIMDAAIAAXbg");
	var mask_22_graphics_30 = new cjs.Graphics().p("AU6LtIAA3aIMDAAIAAXag");
	var mask_22_graphics_31 = new cjs.Graphics().p("AU6LuIAA3aIMDAAIAAXag");
	var mask_22_graphics_32 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_33 = new cjs.Graphics().p("AU6LuIAA3bIMDAAIAAXbg");
	var mask_22_graphics_34 = new cjs.Graphics().p("AU6LtIAA3aIMDAAIAAXag");
	var mask_22_graphics_35 = new cjs.Graphics().p("AU6LuIAA3bIMDAAIAAXbg");
	var mask_22_graphics_36 = new cjs.Graphics().p("AU6LtIAA3aIMDAAIAAXag");
	var mask_22_graphics_37 = new cjs.Graphics().p("AU6LuIAA3aIMDAAIAAXag");
	var mask_22_graphics_38 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_39 = new cjs.Graphics().p("AU6LtIAA3ZIMDAAIAAXZg");
	var mask_22_graphics_40 = new cjs.Graphics().p("AU6LuIAA3bIMDAAIAAXbg");
	var mask_22_graphics_41 = new cjs.Graphics().p("AU6LvIAA3aIMDAAIAAXag");
	var mask_22_graphics_42 = new cjs.Graphics().p("AU6LyIAA3aIMDAAIAAXag");
	var mask_22_graphics_43 = new cjs.Graphics().p("AU6LzIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_22).to({graphics:mask_22_graphics_0,x:210.9,y:-27}).wait(20).to({graphics:mask_22_graphics_20,x:210.9,y:-27}).wait(1).to({graphics:mask_22_graphics_21,x:210.9,y:-18.2}).wait(1).to({graphics:mask_22_graphics_22,x:210.9,y:-9.9}).wait(1).to({graphics:mask_22_graphics_23,x:210.9,y:-1.9}).wait(1).to({graphics:mask_22_graphics_24,x:210.9,y:5.7}).wait(1).to({graphics:mask_22_graphics_25,x:210.9,y:12.9}).wait(1).to({graphics:mask_22_graphics_26,x:210.9,y:19.7}).wait(1).to({graphics:mask_22_graphics_27,x:210.9,y:26.2}).wait(1).to({graphics:mask_22_graphics_28,x:210.9,y:32.2}).wait(1).to({graphics:mask_22_graphics_29,x:210.9,y:37.8}).wait(1).to({graphics:mask_22_graphics_30,x:210.9,y:43.1}).wait(1).to({graphics:mask_22_graphics_31,x:210.9,y:48}).wait(1).to({graphics:mask_22_graphics_32,x:210.9,y:52.4}).wait(1).to({graphics:mask_22_graphics_33,x:210.9,y:56.5}).wait(1).to({graphics:mask_22_graphics_34,x:210.9,y:60.2}).wait(1).to({graphics:mask_22_graphics_35,x:210.9,y:63.5}).wait(1).to({graphics:mask_22_graphics_36,x:210.9,y:66.5}).wait(1).to({graphics:mask_22_graphics_37,x:210.9,y:69}).wait(1).to({graphics:mask_22_graphics_38,x:210.9,y:71.1}).wait(1).to({graphics:mask_22_graphics_39,x:210.9,y:72.9}).wait(1).to({graphics:mask_22_graphics_40,x:210.9,y:74.2}).wait(1).to({graphics:mask_22_graphics_41,x:210.9,y:75.1}).wait(1).to({graphics:mask_22_graphics_42,x:210.9,y:75.4}).wait(1).to({graphics:mask_22_graphics_43,x:210.9,y:75.5}).wait(102));

	// Layer 75
	this.instance_22 = new lib.stage_e1();
	this.instance_22.setTransform(379.6,140.2,1,1,0,0,0,20.6,50.1);

	this.instance_22.mask = mask_22;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20).to({y:100.2},23,cjs.Ease.get(1)).wait(102));

	// Layer 100 (mask)
	var mask_23 = new cjs.Shape();
	mask_23._off = true;
	var mask_23_graphics_0 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_25 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_26 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_23_graphics_27 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_23_graphics_28 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_23_graphics_29 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_30 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_31 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_32 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_23_graphics_33 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_23_graphics_34 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_35 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_36 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_23_graphics_37 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_23_graphics_38 = new cjs.Graphics().p("AN4LtIAA3aIMDAAIAAXag");
	var mask_23_graphics_39 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_23_graphics_40 = new cjs.Graphics().p("AN4LwIAA3aIMDAAIAAXag");
	var mask_23_graphics_41 = new cjs.Graphics().p("AN4LzIAA3aIMDAAIAAXag");
	var mask_23_graphics_42 = new cjs.Graphics().p("AN4L1IAA3aIMDAAIAAXag");
	var mask_23_graphics_43 = new cjs.Graphics().p("AN4L4IAA3aIMDAAIAAXag");
	var mask_23_graphics_44 = new cjs.Graphics().p("AN4L5IAA3aIMDAAIAAXag");
	var mask_23_graphics_45 = new cjs.Graphics().p("AN4L7IAA3aIMDAAIAAXag");
	var mask_23_graphics_46 = new cjs.Graphics().p("AN4L8IAA3aIMDAAIAAXag");
	var mask_23_graphics_47 = new cjs.Graphics().p("AN4L8IAA3aIMDAAIAAXag");
	var mask_23_graphics_48 = new cjs.Graphics().p("AN4L9IAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_23).to({graphics:mask_23_graphics_0,x:165.9,y:57}).wait(25).to({graphics:mask_23_graphics_25,x:165.9,y:57}).wait(1).to({graphics:mask_23_graphics_26,x:165.9,y:58.8}).wait(1).to({graphics:mask_23_graphics_27,x:165.9,y:60.5}).wait(1).to({graphics:mask_23_graphics_28,x:165.9,y:62.1}).wait(1).to({graphics:mask_23_graphics_29,x:165.9,y:63.7}).wait(1).to({graphics:mask_23_graphics_30,x:165.9,y:65.1}).wait(1).to({graphics:mask_23_graphics_31,x:165.9,y:66.5}).wait(1).to({graphics:mask_23_graphics_32,x:165.9,y:67.8}).wait(1).to({graphics:mask_23_graphics_33,x:165.9,y:69.1}).wait(1).to({graphics:mask_23_graphics_34,x:165.9,y:70.2}).wait(1).to({graphics:mask_23_graphics_35,x:165.9,y:71.3}).wait(1).to({graphics:mask_23_graphics_36,x:165.9,y:72.3}).wait(1).to({graphics:mask_23_graphics_37,x:165.9,y:73.2}).wait(1).to({graphics:mask_23_graphics_38,x:165.9,y:74}).wait(1).to({graphics:mask_23_graphics_39,x:165.9,y:74.8}).wait(1).to({graphics:mask_23_graphics_40,x:165.9,y:75.2}).wait(1).to({graphics:mask_23_graphics_41,x:165.9,y:75.5}).wait(1).to({graphics:mask_23_graphics_42,x:165.9,y:75.8}).wait(1).to({graphics:mask_23_graphics_43,x:165.9,y:76}).wait(1).to({graphics:mask_23_graphics_44,x:165.9,y:76.2}).wait(1).to({graphics:mask_23_graphics_45,x:165.9,y:76.3}).wait(1).to({graphics:mask_23_graphics_46,x:165.9,y:76.4}).wait(1).to({graphics:mask_23_graphics_47,x:165.9,y:76.5}).wait(1).to({graphics:mask_23_graphics_48,x:165.9,y:76.5}).wait(97));

	// Layer 97
	this.instance_23 = new lib.stage_g3();
	this.instance_23.setTransform(294.9,140.3,1,1,0,0,0,22.5,51.1);

	this.instance_23.mask = mask_23;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(25).to({y:100.3},23,cjs.Ease.get(1)).wait(97));

	// Layer 99 (mask)
	var mask_24 = new cjs.Shape();
	mask_24._off = true;
	var mask_24_graphics_0 = new cjs.Graphics().p("AN4RzIAA3ZIMDAAIAAXZg");
	var mask_24_graphics_25 = new cjs.Graphics().p("AN4RzIAA3ZIMDAAIAAXZg");
	var mask_24_graphics_26 = new cjs.Graphics().p("AN4RnIAA3aIMDAAIAAXag");
	var mask_24_graphics_27 = new cjs.Graphics().p("AN4RbIAA3aIMDAAIAAXag");
	var mask_24_graphics_28 = new cjs.Graphics().p("AN4RPIAA3aIMDAAIAAXag");
	var mask_24_graphics_29 = new cjs.Graphics().p("AN4REIAA3aIMDAAIAAXag");
	var mask_24_graphics_30 = new cjs.Graphics().p("AN4Q5IAA3aIMDAAIAAXag");
	var mask_24_graphics_31 = new cjs.Graphics().p("AN4QvIAA3aIMDAAIAAXag");
	var mask_24_graphics_32 = new cjs.Graphics().p("AN4QmIAA3aIMDAAIAAXag");
	var mask_24_graphics_33 = new cjs.Graphics().p("AN4QdIAA3aIMDAAIAAXag");
	var mask_24_graphics_34 = new cjs.Graphics().p("AN4QVIAA3aIMDAAIAAXag");
	var mask_24_graphics_35 = new cjs.Graphics().p("AN4QNIAA3aIMDAAIAAXag");
	var mask_24_graphics_36 = new cjs.Graphics().p("AN4QGIAA3aIMDAAIAAXag");
	var mask_24_graphics_37 = new cjs.Graphics().p("AN4QAIAA3aIMDAAIAAXag");
	var mask_24_graphics_38 = new cjs.Graphics().p("AN4P6IAA3aIMDAAIAAXag");
	var mask_24_graphics_39 = new cjs.Graphics().p("AN4P0IAA3aIMDAAIAAXag");
	var mask_24_graphics_40 = new cjs.Graphics().p("AN4PwIAA3aIMDAAIAAXag");
	var mask_24_graphics_41 = new cjs.Graphics().p("AN4PrIAA3aIMDAAIAAXag");
	var mask_24_graphics_42 = new cjs.Graphics().p("AN4PoIAA3aIMDAAIAAXag");
	var mask_24_graphics_43 = new cjs.Graphics().p("AN4PlIAA3aIMDAAIAAXag");
	var mask_24_graphics_44 = new cjs.Graphics().p("AN4PiIAA3aIMDAAIAAXag");
	var mask_24_graphics_45 = new cjs.Graphics().p("AN4PgIAA3aIMDAAIAAXag");
	var mask_24_graphics_46 = new cjs.Graphics().p("AN4PfIAA3aIMDAAIAAXag");
	var mask_24_graphics_47 = new cjs.Graphics().p("AN4PeIAA3aIMDAAIAAXag");
	var mask_24_graphics_48 = new cjs.Graphics().p("AN4PeIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_24).to({graphics:mask_24_graphics_0,x:165.9,y:114}).wait(25).to({graphics:mask_24_graphics_25,x:165.9,y:114}).wait(1).to({graphics:mask_24_graphics_26,x:165.9,y:112.7}).wait(1).to({graphics:mask_24_graphics_27,x:165.9,y:111.5}).wait(1).to({graphics:mask_24_graphics_28,x:165.9,y:110.3}).wait(1).to({graphics:mask_24_graphics_29,x:165.9,y:109.2}).wait(1).to({graphics:mask_24_graphics_30,x:165.9,y:108.2}).wait(1).to({graphics:mask_24_graphics_31,x:165.9,y:107.2}).wait(1).to({graphics:mask_24_graphics_32,x:165.9,y:106.3}).wait(1).to({graphics:mask_24_graphics_33,x:165.9,y:105.4}).wait(1).to({graphics:mask_24_graphics_34,x:165.9,y:104.6}).wait(1).to({graphics:mask_24_graphics_35,x:165.9,y:103.8}).wait(1).to({graphics:mask_24_graphics_36,x:165.9,y:103.1}).wait(1).to({graphics:mask_24_graphics_37,x:165.9,y:102.4}).wait(1).to({graphics:mask_24_graphics_38,x:165.9,y:101.8}).wait(1).to({graphics:mask_24_graphics_39,x:165.9,y:101.3}).wait(1).to({graphics:mask_24_graphics_40,x:165.9,y:100.8}).wait(1).to({graphics:mask_24_graphics_41,x:165.9,y:100.4}).wait(1).to({graphics:mask_24_graphics_42,x:165.9,y:100}).wait(1).to({graphics:mask_24_graphics_43,x:165.9,y:99.7}).wait(1).to({graphics:mask_24_graphics_44,x:165.9,y:99.5}).wait(1).to({graphics:mask_24_graphics_45,x:165.9,y:99.3}).wait(1).to({graphics:mask_24_graphics_46,x:165.9,y:99.1}).wait(1).to({graphics:mask_24_graphics_47,x:165.9,y:99}).wait(1).to({graphics:mask_24_graphics_48,x:165.9,y:99}).wait(97));

	// Layer 96
	this.instance_24 = new lib.stage_g2();
	this.instance_24.setTransform(294.9,70.3,1,1,0,0,0,22.5,51.1);

	this.instance_24.mask = mask_24;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(25).to({y:100.3},23,cjs.Ease.get(1)).wait(97));

	// Layer 98 (mask)
	var mask_25 = new cjs.Shape();
	mask_25._off = true;
	var mask_25_graphics_0 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_15 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_16 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_25_graphics_17 = new cjs.Graphics().p("AN4LtIAA3aIMDAAIAAXag");
	var mask_25_graphics_18 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_19 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_25_graphics_20 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_25_graphics_21 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_22 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_23 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_24 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_25 = new cjs.Graphics().p("AN4LuIAA3aIMDAAIAAXag");
	var mask_25_graphics_26 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_27 = new cjs.Graphics().p("AN4LtIAA3aIMDAAIAAXag");
	var mask_25_graphics_28 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_29 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_30 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_31 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_32 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_33 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");
	var mask_25_graphics_34 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_35 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_36 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_37 = new cjs.Graphics().p("AN4LuIAA3bIMDAAIAAXbg");
	var mask_25_graphics_38 = new cjs.Graphics().p("AN4LtIAA3ZIMDAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_25).to({graphics:mask_25_graphics_0,x:165.9,y:-27}).wait(15).to({graphics:mask_25_graphics_15,x:165.9,y:-27}).wait(1).to({graphics:mask_25_graphics_16,x:165.9,y:-20.3}).wait(1).to({graphics:mask_25_graphics_17,x:165.9,y:-13.9}).wait(1).to({graphics:mask_25_graphics_18,x:165.9,y:-7.8}).wait(1).to({graphics:mask_25_graphics_19,x:165.9,y:-2}).wait(1).to({graphics:mask_25_graphics_20,x:165.9,y:3.5}).wait(1).to({graphics:mask_25_graphics_21,x:165.9,y:8.7}).wait(1).to({graphics:mask_25_graphics_22,x:165.9,y:13.6}).wait(1).to({graphics:mask_25_graphics_23,x:165.9,y:18.3}).wait(1).to({graphics:mask_25_graphics_24,x:165.9,y:22.6}).wait(1).to({graphics:mask_25_graphics_25,x:165.9,y:26.6}).wait(1).to({graphics:mask_25_graphics_26,x:165.9,y:30.3}).wait(1).to({graphics:mask_25_graphics_27,x:165.9,y:33.7}).wait(1).to({graphics:mask_25_graphics_28,x:165.9,y:36.9}).wait(1).to({graphics:mask_25_graphics_29,x:165.9,y:39.7}).wait(1).to({graphics:mask_25_graphics_30,x:165.9,y:42.2}).wait(1).to({graphics:mask_25_graphics_31,x:165.9,y:44.5}).wait(1).to({graphics:mask_25_graphics_32,x:165.9,y:46.4}).wait(1).to({graphics:mask_25_graphics_33,x:165.9,y:48}).wait(1).to({graphics:mask_25_graphics_34,x:165.9,y:49.4}).wait(1).to({graphics:mask_25_graphics_35,x:165.9,y:50.4}).wait(1).to({graphics:mask_25_graphics_36,x:165.9,y:51.2}).wait(1).to({graphics:mask_25_graphics_37,x:165.9,y:51.6}).wait(1).to({graphics:mask_25_graphics_38,x:165.9,y:51.8}).wait(107));

	// Layer 74
	this.instance_25 = new lib.stage_g1();
	this.instance_25.setTransform(294.9,140.3,1,1,0,0,0,22.5,51.1);

	this.instance_25.mask = mask_25;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(15).to({y:100.3},23,cjs.Ease.get(1)).wait(107));

	// Layer 95 (mask)
	var mask_26 = new cjs.Shape();
	mask_26._off = true;
	var mask_26_graphics_0 = new cjs.Graphics().p("ALjNSIAA3bIMBAAIAAXbg");
	var mask_26_graphics_20 = new cjs.Graphics().p("ALjNSIAA3bIMBAAIAAXbg");
	var mask_26_graphics_21 = new cjs.Graphics().p("ALUNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_22 = new cjs.Graphics().p("ALFNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_23 = new cjs.Graphics().p("AK4NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_24 = new cjs.Graphics().p("AKrNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_25 = new cjs.Graphics().p("AKfNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_26 = new cjs.Graphics().p("AKTNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_27 = new cjs.Graphics().p("AKINSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_28 = new cjs.Graphics().p("AJ+NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_29 = new cjs.Graphics().p("AJ0NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_30 = new cjs.Graphics().p("AJrNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_31 = new cjs.Graphics().p("AJjNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_32 = new cjs.Graphics().p("AJcNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_33 = new cjs.Graphics().p("AJVNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_34 = new cjs.Graphics().p("AJONSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_35 = new cjs.Graphics().p("AJJNSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_36 = new cjs.Graphics().p("AJENSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_37 = new cjs.Graphics().p("AI/NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_38 = new cjs.Graphics().p("AI8NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_39 = new cjs.Graphics().p("AI5NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_40 = new cjs.Graphics().p("AI2NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_41 = new cjs.Graphics().p("AI1NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_42 = new cjs.Graphics().p("AI0NSIAA3bIMCAAIAAXbg");
	var mask_26_graphics_43 = new cjs.Graphics().p("AI0NSIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_26).to({graphics:mask_26_graphics_0,x:150.9,y:85}).wait(20).to({graphics:mask_26_graphics_20,x:150.9,y:85}).wait(1).to({graphics:mask_26_graphics_21,x:149.4,y:85}).wait(1).to({graphics:mask_26_graphics_22,x:148,y:85}).wait(1).to({graphics:mask_26_graphics_23,x:146.6,y:85}).wait(1).to({graphics:mask_26_graphics_24,x:145.3,y:85}).wait(1).to({graphics:mask_26_graphics_25,x:144.1,y:85}).wait(1).to({graphics:mask_26_graphics_26,x:143,y:85}).wait(1).to({graphics:mask_26_graphics_27,x:141.9,y:85}).wait(1).to({graphics:mask_26_graphics_28,x:140.8,y:85}).wait(1).to({graphics:mask_26_graphics_29,x:139.9,y:85}).wait(1).to({graphics:mask_26_graphics_30,x:139,y:85}).wait(1).to({graphics:mask_26_graphics_31,x:138.2,y:85}).wait(1).to({graphics:mask_26_graphics_32,x:137.4,y:85}).wait(1).to({graphics:mask_26_graphics_33,x:136.7,y:85}).wait(1).to({graphics:mask_26_graphics_34,x:136.1,y:85}).wait(1).to({graphics:mask_26_graphics_35,x:135.5,y:85}).wait(1).to({graphics:mask_26_graphics_36,x:135,y:85}).wait(1).to({graphics:mask_26_graphics_37,x:134.6,y:85}).wait(1).to({graphics:mask_26_graphics_38,x:134.2,y:85}).wait(1).to({graphics:mask_26_graphics_39,x:133.9,y:85}).wait(1).to({graphics:mask_26_graphics_40,x:133.7,y:85}).wait(1).to({graphics:mask_26_graphics_41,x:133.5,y:85}).wait(1).to({graphics:mask_26_graphics_42,x:133.4,y:85}).wait(1).to({graphics:mask_26_graphics_43,x:133.4,y:85}).wait(102));

	// Layer 93
	this.instance_26 = new lib.stage_a2();
	this.instance_26.setTransform(205.3,100.2,1,1,0,0,0,27.3,50.1);

	this.instance_26.mask = mask_26;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(145));

	// Layer 94 (mask)
	var mask_27 = new cjs.Shape();
	mask_27._off = true;
	var mask_27_graphics_0 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_10 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_11 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_12 = new cjs.Graphics().p("AG2LuIAA3aIMDAAIAAXag");
	var mask_27_graphics_13 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_14 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_15 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_16 = new cjs.Graphics().p("AG2LtIAA3aIMDAAIAAXag");
	var mask_27_graphics_17 = new cjs.Graphics().p("AG2LtIAA3aIMDAAIAAXag");
	var mask_27_graphics_18 = new cjs.Graphics().p("AG2LuIAA3aIMDAAIAAXag");
	var mask_27_graphics_19 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_20 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_21 = new cjs.Graphics().p("AG2LtIAA3aIMDAAIAAXag");
	var mask_27_graphics_22 = new cjs.Graphics().p("AG2LuIAA3aIMDAAIAAXag");
	var mask_27_graphics_23 = new cjs.Graphics().p("AG2LuIAA3aIMDAAIAAXag");
	var mask_27_graphics_24 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_25 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_26 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_27 = new cjs.Graphics().p("AG2LtIAA3aIMDAAIAAXag");
	var mask_27_graphics_28 = new cjs.Graphics().p("AG2LuIAA3aIMDAAIAAXag");
	var mask_27_graphics_29 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_30 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_31 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");
	var mask_27_graphics_32 = new cjs.Graphics().p("AG2LtIAA3ZIMDAAIAAXZg");
	var mask_27_graphics_33 = new cjs.Graphics().p("AG2LuIAA3bIMDAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_27).to({graphics:mask_27_graphics_0,x:120.9,y:-27}).wait(10).to({graphics:mask_27_graphics_10,x:120.9,y:-27}).wait(1).to({graphics:mask_27_graphics_11,x:120.9,y:-18.3}).wait(1).to({graphics:mask_27_graphics_12,x:120.9,y:-10}).wait(1).to({graphics:mask_27_graphics_13,x:120.9,y:-2.1}).wait(1).to({graphics:mask_27_graphics_14,x:120.9,y:5.4}).wait(1).to({graphics:mask_27_graphics_15,x:120.9,y:12.5}).wait(1).to({graphics:mask_27_graphics_16,x:120.9,y:19.3}).wait(1).to({graphics:mask_27_graphics_17,x:120.9,y:25.6}).wait(1).to({graphics:mask_27_graphics_18,x:120.9,y:31.6}).wait(1).to({graphics:mask_27_graphics_19,x:120.9,y:37.2}).wait(1).to({graphics:mask_27_graphics_20,x:120.9,y:42.4}).wait(1).to({graphics:mask_27_graphics_21,x:120.9,y:47.2}).wait(1).to({graphics:mask_27_graphics_22,x:120.9,y:51.7}).wait(1).to({graphics:mask_27_graphics_23,x:120.9,y:55.7}).wait(1).to({graphics:mask_27_graphics_24,x:120.9,y:59.4}).wait(1).to({graphics:mask_27_graphics_25,x:120.9,y:62.7}).wait(1).to({graphics:mask_27_graphics_26,x:120.9,y:65.6}).wait(1).to({graphics:mask_27_graphics_27,x:120.9,y:68.1}).wait(1).to({graphics:mask_27_graphics_28,x:120.9,y:70.2}).wait(1).to({graphics:mask_27_graphics_29,x:120.9,y:71.9}).wait(1).to({graphics:mask_27_graphics_30,x:120.9,y:73.3}).wait(1).to({graphics:mask_27_graphics_31,x:120.9,y:74.2}).wait(1).to({graphics:mask_27_graphics_32,x:120.9,y:74.8}).wait(1).to({graphics:mask_27_graphics_33,x:120.9,y:75}).wait(112));

	// Layer 73
	this.instance_27 = new lib.stage_a1();
	this.instance_27.setTransform(205.3,140.2,1,1,0,0,0,27.3,50.1);

	this.instance_27.mask = mask_27;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(10).to({y:100.2},23,cjs.Ease.get(1)).wait(112));

	// Layer 92 (mask)
	var mask_28 = new cjs.Shape();
	mask_28._off = true;
	var mask_28_graphics_0 = new cjs.Graphics().p("AFmOXIAA3ZIMDAAIAAXZg");
	var mask_28_graphics_16 = new cjs.Graphics().p("AFmOXIAA3ZIMDAAIAAXZg");
	var mask_28_graphics_17 = new cjs.Graphics().p("AFROXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_18 = new cjs.Graphics().p("AE9OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_19 = new cjs.Graphics().p("AEqOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_20 = new cjs.Graphics().p("AEYOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_21 = new cjs.Graphics().p("AEGOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_22 = new cjs.Graphics().p("AD2OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_23 = new cjs.Graphics().p("ADnOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_24 = new cjs.Graphics().p("ADYOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_25 = new cjs.Graphics().p("ADKOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_26 = new cjs.Graphics().p("AC+OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_27 = new cjs.Graphics().p("ACyOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_28 = new cjs.Graphics().p("ACnOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_29 = new cjs.Graphics().p("ACdOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_30 = new cjs.Graphics().p("ACUOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_31 = new cjs.Graphics().p("ACNOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_32 = new cjs.Graphics().p("ACFOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_33 = new cjs.Graphics().p("AB/OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_34 = new cjs.Graphics().p("AB6OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_35 = new cjs.Graphics().p("AB2OXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_36 = new cjs.Graphics().p("ABzOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_37 = new cjs.Graphics().p("ABwOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_38 = new cjs.Graphics().p("ABvOXIAA3ZIMCAAIAAXZg");
	var mask_28_graphics_39 = new cjs.Graphics().p("ABuOXIAA3ZIMDAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(mask_28).to({graphics:mask_28_graphics_0,x:112.9,y:92}).wait(16).to({graphics:mask_28_graphics_16,x:112.9,y:92}).wait(1).to({graphics:mask_28_graphics_17,x:110.8,y:92}).wait(1).to({graphics:mask_28_graphics_18,x:108.8,y:92}).wait(1).to({graphics:mask_28_graphics_19,x:106.9,y:92}).wait(1).to({graphics:mask_28_graphics_20,x:105,y:92}).wait(1).to({graphics:mask_28_graphics_21,x:103.3,y:92}).wait(1).to({graphics:mask_28_graphics_22,x:101.6,y:92}).wait(1).to({graphics:mask_28_graphics_23,x:100.1,y:92}).wait(1).to({graphics:mask_28_graphics_24,x:98.6,y:92}).wait(1).to({graphics:mask_28_graphics_25,x:97.3,y:92}).wait(1).to({graphics:mask_28_graphics_26,x:96,y:92}).wait(1).to({graphics:mask_28_graphics_27,x:94.9,y:92}).wait(1).to({graphics:mask_28_graphics_28,x:93.8,y:92}).wait(1).to({graphics:mask_28_graphics_29,x:92.8,y:92}).wait(1).to({graphics:mask_28_graphics_30,x:91.9,y:92}).wait(1).to({graphics:mask_28_graphics_31,x:91.1,y:92}).wait(1).to({graphics:mask_28_graphics_32,x:90.4,y:92}).wait(1).to({graphics:mask_28_graphics_33,x:89.8,y:92}).wait(1).to({graphics:mask_28_graphics_34,x:89.3,y:92}).wait(1).to({graphics:mask_28_graphics_35,x:88.9,y:92}).wait(1).to({graphics:mask_28_graphics_36,x:88.5,y:92}).wait(1).to({graphics:mask_28_graphics_37,x:88.3,y:92}).wait(1).to({graphics:mask_28_graphics_38,x:88.1,y:92}).wait(1).to({graphics:mask_28_graphics_39,x:88.1,y:92}).wait(106));

	// Layer 90
	this.instance_28 = new lib.stage_t2();
	this.instance_28.setTransform(123.1,100.2,1,1,0,0,0,24,50.1);

	this.instance_28.mask = mask_28;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(145));

	// Layer 91 (mask)
	var mask_29 = new cjs.Shape();
	mask_29._off = true;
	var mask_29_graphics_0 = new cjs.Graphics().p("AAmLtIAA3ZIMDAAIAAXZg");
	var mask_29_graphics_5 = new cjs.Graphics().p("AAmLtIAA3ZIMDAAIAAXZg");
	var mask_29_graphics_6 = new cjs.Graphics().p("AAqLuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_7 = new cjs.Graphics().p("AAtLtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_8 = new cjs.Graphics().p("AAwLtIAA3aIMCAAIAAXag");
	var mask_29_graphics_9 = new cjs.Graphics().p("AAzLtIAA3aIMCAAIAAXag");
	var mask_29_graphics_10 = new cjs.Graphics().p("AA2LtIAA3aIMCAAIAAXag");
	var mask_29_graphics_11 = new cjs.Graphics().p("AA5LtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_12 = new cjs.Graphics().p("AA7LuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_13 = new cjs.Graphics().p("AA9LtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_14 = new cjs.Graphics().p("ABALtIAA3aIMCAAIAAXag");
	var mask_29_graphics_15 = new cjs.Graphics().p("ABCLuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_16 = new cjs.Graphics().p("ABELuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_17 = new cjs.Graphics().p("ABFLtIAA3aIMCAAIAAXag");
	var mask_29_graphics_18 = new cjs.Graphics().p("ABHLtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_19 = new cjs.Graphics().p("ABILuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_20 = new cjs.Graphics().p("ABKLuIAA3aIMCAAIAAXag");
	var mask_29_graphics_21 = new cjs.Graphics().p("ABLLtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_22 = new cjs.Graphics().p("ABMLtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_23 = new cjs.Graphics().p("ABNLuIAA3aIMCAAIAAXag");
	var mask_29_graphics_24 = new cjs.Graphics().p("ABNLuIAA3bIMCAAIAAXbg");
	var mask_29_graphics_25 = new cjs.Graphics().p("ABOLtIAA3ZIMCAAIAAXZg");
	var mask_29_graphics_26 = new cjs.Graphics().p("ABOLuIAA3aIMCAAIAAXag");
	var mask_29_graphics_27 = new cjs.Graphics().p("ABOLxIAA3aIMCAAIAAXag");
	var mask_29_graphics_28 = new cjs.Graphics().p("ABOLyIAA3aIMDAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_29).to({graphics:mask_29_graphics_0,x:80.9,y:-27}).wait(5).to({graphics:mask_29_graphics_5,x:80.9,y:-27}).wait(1).to({graphics:mask_29_graphics_6,x:81.2,y:-18.3}).wait(1).to({graphics:mask_29_graphics_7,x:81.6,y:-9.9}).wait(1).to({graphics:mask_29_graphics_8,x:81.9,y:-1.9}).wait(1).to({graphics:mask_29_graphics_9,x:82.2,y:5.6}).wait(1).to({graphics:mask_29_graphics_10,x:82.5,y:12.8}).wait(1).to({graphics:mask_29_graphics_11,x:82.7,y:19.6}).wait(1).to({graphics:mask_29_graphics_12,x:83,y:26.1}).wait(1).to({graphics:mask_29_graphics_13,x:83.2,y:32.1}).wait(1).to({graphics:mask_29_graphics_14,x:83.4,y:37.7}).wait(1).to({graphics:mask_29_graphics_15,x:83.6,y:43}).wait(1).to({graphics:mask_29_graphics_16,x:83.8,y:47.8}).wait(1).to({graphics:mask_29_graphics_17,x:84,y:52.3}).wait(1).to({graphics:mask_29_graphics_18,x:84.1,y:56.4}).wait(1).to({graphics:mask_29_graphics_19,x:84.3,y:60.1}).wait(1).to({graphics:mask_29_graphics_20,x:84.4,y:63.4}).wait(1).to({graphics:mask_29_graphics_21,x:84.5,y:66.3}).wait(1).to({graphics:mask_29_graphics_22,x:84.6,y:68.8}).wait(1).to({graphics:mask_29_graphics_23,x:84.7,y:70.9}).wait(1).to({graphics:mask_29_graphics_24,x:84.8,y:72.7}).wait(1).to({graphics:mask_29_graphics_25,x:84.8,y:74.1}).wait(1).to({graphics:mask_29_graphics_26,x:84.9,y:75}).wait(1).to({graphics:mask_29_graphics_27,x:84.9,y:75.3}).wait(1).to({graphics:mask_29_graphics_28,x:84.9,y:75.4}).wait(117));

	// Layer 72
	this.instance_29 = new lib.stage_t1();
	this.instance_29.setTransform(123.1,132.2,1,1,0,0,0,24,50.1);

	this.instance_29.mask = mask_29;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(5).to({y:100.2},23,cjs.Ease.get(1)).wait(117));

	// Layer 89 (mask)
	var mask_30 = new cjs.Shape();
	mask_30._off = true;
	var mask_30_graphics_0 = new cjs.Graphics().p("AloRzIAA3ZIMBAAIAAXZg");
	var mask_30_graphics_11 = new cjs.Graphics().p("AloRzIAA3ZIMBAAIAAXZg");
	var mask_30_graphics_12 = new cjs.Graphics().p("AloRnIAA3aIMBAAIAAXag");
	var mask_30_graphics_13 = new cjs.Graphics().p("AloRbIAA3aIMBAAIAAXag");
	var mask_30_graphics_14 = new cjs.Graphics().p("AloRPIAA3aIMBAAIAAXag");
	var mask_30_graphics_15 = new cjs.Graphics().p("AloREIAA3aIMBAAIAAXag");
	var mask_30_graphics_16 = new cjs.Graphics().p("AloQ5IAA3aIMBAAIAAXag");
	var mask_30_graphics_17 = new cjs.Graphics().p("AloQvIAA3aIMBAAIAAXag");
	var mask_30_graphics_18 = new cjs.Graphics().p("AloQmIAA3aIMBAAIAAXag");
	var mask_30_graphics_19 = new cjs.Graphics().p("AloQdIAA3aIMBAAIAAXag");
	var mask_30_graphics_20 = new cjs.Graphics().p("AloQVIAA3aIMBAAIAAXag");
	var mask_30_graphics_21 = new cjs.Graphics().p("AloQNIAA3aIMBAAIAAXag");
	var mask_30_graphics_22 = new cjs.Graphics().p("AloQGIAA3aIMBAAIAAXag");
	var mask_30_graphics_23 = new cjs.Graphics().p("AloQAIAA3aIMBAAIAAXag");
	var mask_30_graphics_24 = new cjs.Graphics().p("AloP6IAA3aIMBAAIAAXag");
	var mask_30_graphics_25 = new cjs.Graphics().p("AloP0IAA3aIMBAAIAAXag");
	var mask_30_graphics_26 = new cjs.Graphics().p("AloPwIAA3aIMBAAIAAXag");
	var mask_30_graphics_27 = new cjs.Graphics().p("AloPrIAA3aIMBAAIAAXag");
	var mask_30_graphics_28 = new cjs.Graphics().p("AloPoIAA3aIMBAAIAAXag");
	var mask_30_graphics_29 = new cjs.Graphics().p("AloPlIAA3aIMBAAIAAXag");
	var mask_30_graphics_30 = new cjs.Graphics().p("AloPiIAA3aIMBAAIAAXag");
	var mask_30_graphics_31 = new cjs.Graphics().p("AloPgIAA3aIMBAAIAAXag");
	var mask_30_graphics_32 = new cjs.Graphics().p("AloPfIAA3aIMBAAIAAXag");
	var mask_30_graphics_33 = new cjs.Graphics().p("AloPeIAA3aIMBAAIAAXag");
	var mask_30_graphics_34 = new cjs.Graphics().p("AloPeIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_30).to({graphics:mask_30_graphics_0,x:40.9,y:114}).wait(11).to({graphics:mask_30_graphics_11,x:40.9,y:114}).wait(1).to({graphics:mask_30_graphics_12,x:40.9,y:112.7}).wait(1).to({graphics:mask_30_graphics_13,x:40.9,y:111.5}).wait(1).to({graphics:mask_30_graphics_14,x:40.9,y:110.3}).wait(1).to({graphics:mask_30_graphics_15,x:40.9,y:109.2}).wait(1).to({graphics:mask_30_graphics_16,x:40.9,y:108.2}).wait(1).to({graphics:mask_30_graphics_17,x:40.9,y:107.2}).wait(1).to({graphics:mask_30_graphics_18,x:40.9,y:106.3}).wait(1).to({graphics:mask_30_graphics_19,x:40.9,y:105.4}).wait(1).to({graphics:mask_30_graphics_20,x:40.9,y:104.6}).wait(1).to({graphics:mask_30_graphics_21,x:40.9,y:103.8}).wait(1).to({graphics:mask_30_graphics_22,x:40.9,y:103.1}).wait(1).to({graphics:mask_30_graphics_23,x:40.9,y:102.4}).wait(1).to({graphics:mask_30_graphics_24,x:40.9,y:101.8}).wait(1).to({graphics:mask_30_graphics_25,x:40.9,y:101.3}).wait(1).to({graphics:mask_30_graphics_26,x:40.9,y:100.8}).wait(1).to({graphics:mask_30_graphics_27,x:40.9,y:100.4}).wait(1).to({graphics:mask_30_graphics_28,x:40.9,y:100}).wait(1).to({graphics:mask_30_graphics_29,x:40.9,y:99.7}).wait(1).to({graphics:mask_30_graphics_30,x:40.9,y:99.5}).wait(1).to({graphics:mask_30_graphics_31,x:40.9,y:99.3}).wait(1).to({graphics:mask_30_graphics_32,x:40.9,y:99.1}).wait(1).to({graphics:mask_30_graphics_33,x:40.9,y:99}).wait(1).to({graphics:mask_30_graphics_34,x:40.9,y:99}).wait(111));

	// Layer 87
	this.instance_30 = new lib.stage_s2();
	this.instance_30.setTransform(38.7,70.3,1,1,0,0,0,22.6,51.1);

	this.instance_30.mask = mask_30;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(11).to({y:100.3},23,cjs.Ease.get(1)).wait(111));

	// Layer 88 (mask)
	var mask_31 = new cjs.Shape();
	mask_31._off = true;
	var mask_31_graphics_0 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_31_graphics_11 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_31_graphics_12 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_13 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_14 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_31_graphics_15 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_16 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_17 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_18 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_31_graphics_19 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_20 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_21 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_22 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_23 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_24 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_25 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_26 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_27 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_31_graphics_28 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_31_graphics_29 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_31_graphics_30 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_31_graphics_31 = new cjs.Graphics().p("AloLwIAA3aIMBAAIAAXag");
	var mask_31_graphics_32 = new cjs.Graphics().p("AloLxIAA3aIMBAAIAAXag");
	var mask_31_graphics_33 = new cjs.Graphics().p("AloLyIAA3aIMBAAIAAXag");
	var mask_31_graphics_34 = new cjs.Graphics().p("AloLzIAA3bIMBAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask_31).to({graphics:mask_31_graphics_0,x:40.9,y:43}).wait(11).to({graphics:mask_31_graphics_11,x:40.9,y:43}).wait(1).to({graphics:mask_31_graphics_12,x:40.9,y:45.8}).wait(1).to({graphics:mask_31_graphics_13,x:40.9,y:48.5}).wait(1).to({graphics:mask_31_graphics_14,x:40.9,y:51}).wait(1).to({graphics:mask_31_graphics_15,x:40.9,y:53.5}).wait(1).to({graphics:mask_31_graphics_16,x:40.9,y:55.8}).wait(1).to({graphics:mask_31_graphics_17,x:40.9,y:58}).wait(1).to({graphics:mask_31_graphics_18,x:40.9,y:60}).wait(1).to({graphics:mask_31_graphics_19,x:40.9,y:62}).wait(1).to({graphics:mask_31_graphics_20,x:40.9,y:63.8}).wait(1).to({graphics:mask_31_graphics_21,x:40.9,y:65.5}).wait(1).to({graphics:mask_31_graphics_22,x:40.9,y:67}).wait(1).to({graphics:mask_31_graphics_23,x:40.9,y:68.5}).wait(1).to({graphics:mask_31_graphics_24,x:40.9,y:69.8}).wait(1).to({graphics:mask_31_graphics_25,x:40.9,y:70.9}).wait(1).to({graphics:mask_31_graphics_26,x:40.9,y:72}).wait(1).to({graphics:mask_31_graphics_27,x:40.9,y:72.9}).wait(1).to({graphics:mask_31_graphics_28,x:40.9,y:73.8}).wait(1).to({graphics:mask_31_graphics_29,x:40.9,y:74.4}).wait(1).to({graphics:mask_31_graphics_30,x:40.9,y:75}).wait(1).to({graphics:mask_31_graphics_31,x:40.9,y:75.2}).wait(1).to({graphics:mask_31_graphics_32,x:40.9,y:75.4}).wait(1).to({graphics:mask_31_graphics_33,x:40.9,y:75.5}).wait(1).to({graphics:mask_31_graphics_34,x:40.9,y:75.5}).wait(111));

	// Layer 86
	this.instance_31 = new lib.stage_s3();
	this.instance_31.setTransform(38.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_31.mask = mask_31;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(11).to({y:100.3},23,cjs.Ease.get(1)).wait(111));

	// Layer 85 (mask)
	var mask_32 = new cjs.Shape();
	mask_32._off = true;
	var mask_32_graphics_0 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_32_graphics_1 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_2 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_32_graphics_3 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_4 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_32_graphics_5 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_32_graphics_6 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_32_graphics_7 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_32_graphics_8 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_9 = new cjs.Graphics().p("AloLtIAA3ZIMBAAIAAXZg");
	var mask_32_graphics_10 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_11 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_12 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_32_graphics_13 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_32_graphics_14 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_15 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_32_graphics_16 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");
	var mask_32_graphics_17 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_32_graphics_18 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_19 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_20 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_21 = new cjs.Graphics().p("AloLuIAA3bIMBAAIAAXbg");
	var mask_32_graphics_22 = new cjs.Graphics().p("AloLtIAA3aIMBAAIAAXag");
	var mask_32_graphics_23 = new cjs.Graphics().p("AloLuIAA3aIMBAAIAAXag");

	this.timeline.addTween(cjs.Tween.get(mask_32).to({graphics:mask_32_graphics_0,x:40.9,y:-27}).wait(1).to({graphics:mask_32_graphics_1,x:40.9,y:-20.7}).wait(1).to({graphics:mask_32_graphics_2,x:40.9,y:-14.7}).wait(1).to({graphics:mask_32_graphics_3,x:40.9,y:-9}).wait(1).to({graphics:mask_32_graphics_4,x:40.9,y:-3.5}).wait(1).to({graphics:mask_32_graphics_5,x:40.9,y:1.7}).wait(1).to({graphics:mask_32_graphics_6,x:40.9,y:6.6}).wait(1).to({graphics:mask_32_graphics_7,x:40.9,y:11.2}).wait(1).to({graphics:mask_32_graphics_8,x:40.9,y:15.5}).wait(1).to({graphics:mask_32_graphics_9,x:40.9,y:19.6}).wait(1).to({graphics:mask_32_graphics_10,x:40.9,y:23.4}).wait(1).to({graphics:mask_32_graphics_11,x:40.9,y:26.9}).wait(1).to({graphics:mask_32_graphics_12,x:40.9,y:30.1}).wait(1).to({graphics:mask_32_graphics_13,x:40.9,y:33}).wait(1).to({graphics:mask_32_graphics_14,x:40.9,y:35.7}).wait(1).to({graphics:mask_32_graphics_15,x:40.9,y:38}).wait(1).to({graphics:mask_32_graphics_16,x:40.9,y:40.1}).wait(1).to({graphics:mask_32_graphics_17,x:40.9,y:42}).wait(1).to({graphics:mask_32_graphics_18,x:40.9,y:43.5}).wait(1).to({graphics:mask_32_graphics_19,x:40.9,y:44.8}).wait(1).to({graphics:mask_32_graphics_20,x:40.9,y:45.7}).wait(1).to({graphics:mask_32_graphics_21,x:40.9,y:46.4}).wait(1).to({graphics:mask_32_graphics_22,x:40.9,y:46.9}).wait(1).to({graphics:mask_32_graphics_23,x:40.9,y:47}).wait(122));

	// Layer 71
	this.instance_32 = new lib.stage_s1();
	this.instance_32.setTransform(38.7,140.3,1,1,0,0,0,22.6,51.1);

	this.instance_32.mask = mask_32;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({y:100.3},23,cjs.Ease.get(1)).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(488,-210,1500,900);


// symbols:
(lib.stage_1 = function() {
	this.initialize(img.stage_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.stage_v2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPH0IC5vnIBmAAIi5Png");
	this.shape.setTransform(39.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.2,0,28.9,100.2);


(lib.stage_v1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmH0Ii7vnIBxAAIC6Png");
	this.shape.setTransform(15,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.1,100.2);


(lib.stage_t2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvAyIAAhkIHeAAIAABkg");
	this.shape.setTransform(24,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,10.2);


(lib.stage_t1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3HEIAAuHIBvAAIAAOHg");
	this.shape.setTransform(24,54.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.4,9.7,11.2,90.5);


(lib.stage_s3 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiqBWQg1hDgBhuIAAgDIAAg6IBpAAIAAA/QAABFAcAjQAdAlA8AAQA6AAAdglQAcgjAAhFQAAgjgJgdIB0AAQAFAcAAAfQAABwg3BEQg3BEhzAAQhzAAg3hEg");
	this.shape.setTransform(22.6,86.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,71.3,45.2,30.8);


(lib.stage_s2 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB0CKIAAggIAAgIQgCg/gZgjQgbgkg9AAQg5AAgbAkQgcAlAABDQAAARACAQIhuAAIgBgaQAAhyA2hDQA2hDBwAAQBxAAA3BDQAyBBADBnIABANIAAAbg");
	this.shape.setTransform(22.7,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,44.4,27.7);


(lib.stage_s1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoDjIgBgGQgGgRgKgPQgZgpglgjQgjgjgrgiQgrghgmgmQglgpgZgyQgUgpgDg2IAAgNIBuAAIABANQAFAkASAcQAZAqAlAjQAjAiAsAiQArAfAmApQAlAoAZAzQAOAcAGAiIABAGg");
	this.shape.setTransform(22.7,49.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,26.4,44.2,45.4);


(lib.stage_plus2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjsAoIAAhPIHZAAIAABPg");
	this.shape.setTransform(23.8,23.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,19.9,47.5,8.1);


(lib.stage_plus1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnDwIAAnfIBPAAIAAHfg");
	this.shape.setTransform(23.8,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19.8,0,8.1,48.1);


(lib.stage_n2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB1H0Ij+snIAAAAIAAABIgIAAIAAjBIAyAAIDlLSIAAgBIAMAAIAAEWg");
	this.shape.setTransform(23.8,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.2,0,29.3,100.2);


(lib.stage_n1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACIH0IAAvnIBjAAIAAPngAjrH0IAAvnIBkAAIAAPng");
	this.shape.setTransform(23.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.2,100.2);


(lib.stage_i = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.stage_g3 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipDMQgaghgOg0QgOgwgBg6IBuAAIAAAEQAAAjAHAeQAHAhAOASQAdAmA6AAQA+AAAbgmQAVgbAFgsQADgQgBgUIAAjGIhmAAIAAhjIDRAAIAAEkIAAACQgBAUgBATQgJBWgsA4Qg4BEhyAAQhyAAg3hEg");
	this.shape.setTransform(22.5,74.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,47.5,45,54.6);


(lib.stage_g2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjgCpIAAhXQAAg4ANguQAOguAcghQAcghArgSQAqgRA4gBQByAAA4BFQA2BFABBwIAABVIhrAAIAAhbQAAhEgcgkQgbgng+AAQg6AAgdAnQgcAkAABEIAABdg");
	this.shape.setTransform(22.5,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,33.8);


(lib.stage_g1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1D0IAAgCIAAnlIBrAAIAAHng");
	this.shape.setTransform(5.5,52.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,28.3,11,48.8);


(lib.stage_e3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiAAyIAAhjIEBAAIAABjg");
	this.shape.setTransform(22.6,49.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.7,44.4,26,10);


(lib.stage_e2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYH0IAAhlIExAAIAABlgAiYmNIAAhmIExAAIAABmg");
	this.shape.setTransform(25.8,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.4,0,30.8,100.2);


(lib.stage_e1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.stage_d2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiyH0IAAhlICDAAQA6AAAdglQAdgkABhFIAAoAQgBhFgdglQgdgkg8AAIiBAAIAAhmICFAAQByAAA4BDQA2BCABB0IAAH3QgBB0g2BCQg4BBhyAAg");
	this.shape.setTransform(28.2,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.2,0,36,100.2);


(lib.stage_d1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2H0IAAvnIBtAAIAAPng");
	this.shape.setTransform(5.6,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,100.2);


(lib.stage_a2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFAvIAPhdIDsAAIAQBdg");
	this.shape.setTransform(26.9,75.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.5,70.4,27,9.5);


(lib.stage_a1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChH0Ig2kpIhwpAIhuJAIgOBfIgnDKIhnAAIDAvnICgAAIC/Png");
	this.shape.setTransform(27.3,50.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,100.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 40,
	height: 30,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/_6.jpg", id:"_6"},
		{src:"images/_7.jpg", id:"_7"}
	]
};

// stage content:
(lib.strzalka2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* js
			this.stop();
		*/
	}
	this.frame_69 = function() {
		/* js
			this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(40).call(this.frame_69).wait(1));

	// Layer 12
	this.instance = new lib.strzalka2_1();
	this.instance.setTransform(14.5,15,0.055,0.039);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:14},20,cjs.Ease.get(1)).wait(20));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_1 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_2 = new cjs.Graphics().p("AlmCVIAAkqILNAAIAAEqg");
	var mask_graphics_3 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_4 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_5 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_6 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_7 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_8 = new cjs.Graphics().p("AlmCVIAAkqILNAAIAAEqg");
	var mask_graphics_9 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_10 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_11 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_12 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_13 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_14 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_15 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_16 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_17 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_18 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_19 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_20 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_21 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_22 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_23 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");
	var mask_graphics_24 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_25 = new cjs.Graphics().p("AlmCVIAAkqILNAAIAAEqg");
	var mask_graphics_26 = new cjs.Graphics().p("AlmCVIAAkqILNAAIAAEqg");
	var mask_graphics_27 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_28 = new cjs.Graphics().p("AlmCVIAAkqILOAAIAAEqg");
	var mask_graphics_29 = new cjs.Graphics().p("AlnCVIAAkqILOAAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-21.5,y:15}).wait(1).to({graphics:mask_graphics_1,x:-20.1,y:15}).wait(1).to({graphics:mask_graphics_2,x:-18.8,y:15}).wait(1).to({graphics:mask_graphics_3,x:-17.6,y:15}).wait(1).to({graphics:mask_graphics_4,x:-16.4,y:15}).wait(1).to({graphics:mask_graphics_5,x:-15.2,y:15}).wait(1).to({graphics:mask_graphics_6,x:-14.1,y:15}).wait(1).to({graphics:mask_graphics_7,x:-13,y:15}).wait(1).to({graphics:mask_graphics_8,x:-12,y:15}).wait(1).to({graphics:mask_graphics_9,x:-11,y:15}).wait(1).to({graphics:mask_graphics_10,x:-10.1,y:15}).wait(1).to({graphics:mask_graphics_11,x:-9.2,y:15}).wait(1).to({graphics:mask_graphics_12,x:-8.4,y:15}).wait(1).to({graphics:mask_graphics_13,x:-7.6,y:15}).wait(1).to({graphics:mask_graphics_14,x:-6.9,y:15}).wait(1).to({graphics:mask_graphics_15,x:-6.2,y:15}).wait(1).to({graphics:mask_graphics_16,x:-5.5,y:15}).wait(1).to({graphics:mask_graphics_17,x:-4.9,y:15}).wait(1).to({graphics:mask_graphics_18,x:-4.4,y:15}).wait(1).to({graphics:mask_graphics_19,x:-3.9,y:15}).wait(1).to({graphics:mask_graphics_20,x:-3.4,y:15}).wait(1).to({graphics:mask_graphics_21,x:-3,y:15}).wait(1).to({graphics:mask_graphics_22,x:-2.7,y:15}).wait(1).to({graphics:mask_graphics_23,x:-2.4,y:15}).wait(1).to({graphics:mask_graphics_24,x:-2.1,y:15}).wait(1).to({graphics:mask_graphics_25,x:-1.9,y:15}).wait(1).to({graphics:mask_graphics_26,x:-1.7,y:15}).wait(1).to({graphics:mask_graphics_27,x:-1.6,y:15}).wait(1).to({graphics:mask_graphics_28,x:-1.5,y:15}).wait(1).to({graphics:mask_graphics_29,x:-1.5,y:15}).wait(41));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(31,15);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiUCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiKCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiBCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ah3CVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhyCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AhyCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhyCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AhxCVIAAkqIDjAAIAAEqg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AhyCVIAAkqIDkAAIAAEqg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-15,y:15}).wait(1).to({graphics:mask_1_graphics_1,x:-14,y:15}).wait(1).to({graphics:mask_1_graphics_2,x:-13,y:15}).wait(1).to({graphics:mask_1_graphics_3,x:-12.1,y:15}).wait(1).to({graphics:mask_1_graphics_4,x:-10.8,y:15}).wait(1).to({graphics:mask_1_graphics_5,x:-9,y:15}).wait(1).to({graphics:mask_1_graphics_6,x:-7.4,y:15}).wait(1).to({graphics:mask_1_graphics_7,x:-5.8,y:15}).wait(1).to({graphics:mask_1_graphics_8,x:-4.2,y:15}).wait(1).to({graphics:mask_1_graphics_9,x:-2.8,y:15}).wait(1).to({graphics:mask_1_graphics_10,x:-1.4,y:15}).wait(1).to({graphics:mask_1_graphics_11,x:-0.1,y:15}).wait(1).to({graphics:mask_1_graphics_12,x:1.2,y:15}).wait(1).to({graphics:mask_1_graphics_13,x:2.4,y:15}).wait(1).to({graphics:mask_1_graphics_14,x:3.5,y:15}).wait(1).to({graphics:mask_1_graphics_15,x:4.5,y:15}).wait(1).to({graphics:mask_1_graphics_16,x:5.5,y:15}).wait(1).to({graphics:mask_1_graphics_17,x:6.4,y:15}).wait(1).to({graphics:mask_1_graphics_18,x:7.2,y:15}).wait(1).to({graphics:mask_1_graphics_19,x:7.9,y:15}).wait(1).to({graphics:mask_1_graphics_20,x:8.6,y:15}).wait(1).to({graphics:mask_1_graphics_21,x:9.2,y:15}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:15}).wait(1).to({graphics:mask_1_graphics_23,x:10.2,y:15}).wait(1).to({graphics:mask_1_graphics_24,x:10.6,y:15}).wait(1).to({graphics:mask_1_graphics_25,x:10.9,y:15}).wait(1).to({graphics:mask_1_graphics_26,x:11.2,y:15}).wait(1).to({graphics:mask_1_graphics_27,x:11.4,y:15}).wait(1).to({graphics:mask_1_graphics_28,x:11.5,y:15}).wait(1).to({graphics:mask_1_graphics_29,x:11.5,y:15}).wait(41));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhgAAIDBiLIAAAmIiOBlICOBlIAAAmg");
	this.shape_1.setTransform(10.8,15);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(70));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AhyCWIAAkqIDlAAIAAEqg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AhyCVIAAkpIDlAAIAAEpg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AhyCWIAAkrIDlAAIAAErg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AhyCVIAAkqIDlAAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:11.5,y:-15}).wait(1).to({graphics:mask_2_graphics_1,x:11.5,y:-13}).wait(1).to({graphics:mask_2_graphics_2,x:11.5,y:-11}).wait(1).to({graphics:mask_2_graphics_3,x:11.5,y:-9.1}).wait(1).to({graphics:mask_2_graphics_4,x:11.5,y:-7.3}).wait(1).to({graphics:mask_2_graphics_5,x:11.5,y:-5.5}).wait(1).to({graphics:mask_2_graphics_6,x:11.5,y:-3.9}).wait(1).to({graphics:mask_2_graphics_7,x:11.5,y:-2.3}).wait(1).to({graphics:mask_2_graphics_8,x:11.5,y:-0.7}).wait(1).to({graphics:mask_2_graphics_9,x:11.5,y:0.7}).wait(1).to({graphics:mask_2_graphics_10,x:11.5,y:2.1}).wait(1).to({graphics:mask_2_graphics_11,x:11.5,y:3.4}).wait(1).to({graphics:mask_2_graphics_12,x:11.5,y:4.7}).wait(1).to({graphics:mask_2_graphics_13,x:11.5,y:5.9}).wait(1).to({graphics:mask_2_graphics_14,x:11.5,y:7}).wait(1).to({graphics:mask_2_graphics_15,x:11.5,y:8}).wait(1).to({graphics:mask_2_graphics_16,x:11.5,y:9}).wait(1).to({graphics:mask_2_graphics_17,x:11.5,y:9.9}).wait(1).to({graphics:mask_2_graphics_18,x:11.5,y:10.7}).wait(1).to({graphics:mask_2_graphics_19,x:11.5,y:11.4}).wait(1).to({graphics:mask_2_graphics_20,x:11.5,y:12.1}).wait(1).to({graphics:mask_2_graphics_21,x:11.5,y:12.7}).wait(1).to({graphics:mask_2_graphics_22,x:11.5,y:13.3}).wait(1).to({graphics:mask_2_graphics_23,x:11.5,y:13.7}).wait(1).to({graphics:mask_2_graphics_24,x:11.5,y:14.1}).wait(1).to({graphics:mask_2_graphics_25,x:11.5,y:14.4}).wait(1).to({graphics:mask_2_graphics_26,x:11.5,y:14.7}).wait(1).to({graphics:mask_2_graphics_27,x:11.5,y:14.9}).wait(1).to({graphics:mask_2_graphics_28,x:11.5,y:15}).wait(1).to({graphics:mask_2_graphics_29,x:11.5,y:15}).wait(41));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNCBIAAkCIAagUIAAEqg");
	this.shape_2.setTransform(20.6,15);

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-395,1500,900);


// symbols:
(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib._7 = function() {
	this.initialize(img._7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,900);


(lib.strzalka2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPAAICfhuIAADdg");
	this.shape.setTransform(-1.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-11.1,16,22.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;