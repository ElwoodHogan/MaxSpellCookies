Game.registerMod('leon',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['leon'].addIntro();});
				},
				
				addIntro:function(text){
					var val=(Game.cookiesPs*60*30)/.15;
					var added = 'dab';
                    			var output = 'dab';
					if (val > 1000000000000000000000){
                    				added = 'Sextillion'
                        			output = val / 1000000000000000000000;
					} else if (val > 1000000000000000000){
                    				added = 'Quintillion'
                        			output = val / 1000000000000000000;
					} else if (val > 1000000000000000){
                    				added = 'Quadrillion'
                        			output = val / 1000000000000000;
					} else if (val > 1000000000000){
                    				added = 'Trillion'
                        			output = val / 1000000000000;
					} else if (val > 1000000000){
                    				added = 'Billion'
                        			output = val / 1000000000;
					} else if (val > 1000000){
                    				added = 'Million'
                        			output = val / 1000000;
					} else if (val > 1000){
                    				added = 'Thousand'
                        			output = val / 1000;
					}
                    output = output.toFixed(3);
					Game.playerIntro=output;
					if (!l('bakerySubtitle')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:-90px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle').textContent=Game.playerIntro+' '+added;
					
					if (!l('bakerySubtitle')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom:64px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle').textContent=Game.prestige+' '+added;
				},
			});
