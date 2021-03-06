Game.registerMod('TimeUntilNextHeavenlyChip',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['TimeUntilNextHeavenlyChip'].addPrestigeTimer();});
				},
				
				addPrestigeTimer:function(text){
					var ascendNowToOwn=Math.floor(Game.HowMuchPrestige(Game.cookiesReset+Game.cookiesEarned));
					var ctr=Game.HowManyCookiesReset(ascendNowToOwn+1)-(Game.cookiesEarned+Game.cookiesReset);
					var time = ctr / Game.cookiesPs;
					time = time*Game.fps;
					time=Math.floor(time);
					var str='';
					var days=0;
					var hours=0;
					var minutes=0;
					var seconds=0; 
					
					if (time>=Game.fps*60*60*24) days=(Math.floor(time/(Game.fps*60*60*24)));
					if (time>=Game.fps*60*60) hours=(Math.floor(time/(Game.fps*60*60)));
					if (time>=Game.fps*60) minutes=(Math.floor(time/(Game.fps*60)));
					if (time>=Game.fps) seconds=(Math.floor(time/(Game.fps)));
					
					hours-=days*24;
					minutes-=hours*60+days*24*60;
					seconds-=minutes*60+hours*60*60+days*24*60*60;
					
					var bits=[];
					if (days>0) bits.push(Beautify(days)+' day'+(days==1?'':'s'));
					if (hours>0) bits.push(Beautify(hours)+' hour'+(hours==1?'':'s'));
					if (minutes>-1) bits.push(Beautify(minutes)+' minute'+(minutes==1?'':'s'));
					if (seconds>-1) bits.push(Beautify(seconds)+' second'+(seconds==1?'':'s'));
					if (bits.length==0) str='less than 1 second';
					else str=bits.join(', ');
					
					if (!l('bakerySubtitle2')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle2" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom: 55px;font-size:18px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					l('bakerySubtitle2').textContent=str;
				},
			});
