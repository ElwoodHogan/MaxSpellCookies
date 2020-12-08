Game.registerMod('ConjureBakedGoodsInfo',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['ConjureBakedGoodsInfo'].addIntro();});
				},
				
				addIntro:function(text){
					var cookiesNeeded=(Game.cookiesPs*60*30)/.15;
					var expectedMax = Game.cookiesPs*60*30;
					var currentMax = Game.cookies/.15;
					if (currentMax > expectedMax){
						currentMax = expectedMax;
					}
					if (!l('bakerySubtitle11')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle11" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-90px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle11').textContent='Minimum cookies needed: '+Beautify(cookiesNeeded);
					
					if (!l('bakerySubtitle22')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle22" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-105px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle22').textContent='Maximum conjured amount: '+Beautify(expectedMax);
					
					if (!l('bakerySubtitle33')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle33" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-105px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle33').textContent='Expected conjured amount: '+Beautify(currentMax);
					
				},
			});
