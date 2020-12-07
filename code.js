Game.registerMod('leon',{
				/*
					what this example mod does:
					-double your CpS
					-display a little popup for half a second whenever you click the big cookie
					-add a little intro text above your bakery name, and generate that intro text at random if you don't already have one
					-save and load your intro text
				*/
				init:function(){
					//Game.registerHook('reincarnate',function(){Game.mods['test mod'].addIntro();});
					//Game.registerHook('check',function(){if (!Game.playerIntro){Game.mods['test mod'].addIntro();}});
					//Game.registerHook('click',function(){Game.Notify(choose(['A good click.','A solid click.','A mediocre click.','An excellent click!']),'',0,0.5);});
					//Game.registerHook('cps',function(cps){return cps*2;});
					Game.registerHook('draw',function(){Game.mods['leon'].addIntro();});
				},
				
				addIntro:function(text){
					//note: this is not a mod hook, just a function that's part of the mod
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
				},
			});
