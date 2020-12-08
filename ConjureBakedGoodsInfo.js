Game.registerMod('ConjureBakedGoodsInfo',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['ConjureBakedGoodsInfo'].addIntro();});
				},
				
				addIntro:function(text){
					var cookiesNeeded=(Game.cookiesPs*60*30)/.15;
					var expectedMax = Game.cookiesPs*60*30;
					if (!l('bakerySubtitle')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-90px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle').textContent=Beautify(cookiesNeeded);
					
					if (!l('bakerySubtitle2')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle2" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-100px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle2').textContent=Beautify(expectedMax);
					
				},
			});
