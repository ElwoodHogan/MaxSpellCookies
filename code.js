Game.registerMod('leon',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['leon'].addIntro();});
				},
				
				addIntro:function(text){
					var val=(Game.cookiesPs*60*30)/.15;
					if (!l('bakerySubtitle')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-90px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle').textContent=Beautify(val);
					
				},
			});
