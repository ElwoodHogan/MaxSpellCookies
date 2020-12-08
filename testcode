Game.registerMod('timer',{
				init:function(){
					Game.registerHook('draw',function(){Game.mods['timer'].addPrestigeTimer();});
				},
				
				addPrestigeTimer:function(text){
					var ascendNowToOwn=Math.floor(Game.HowMuchPrestige(Game.cookiesReset+Game.cookiesEarned));
					var time=Game.HowManyCookiesReset(ascendNowToOwn+1)-(Game.cookiesEarned+Game.cookiesReset);
					
					var days=0;
					var hours=0;
					var minutes=0;
					var seconds=0;
					
					//if (time>=Game.fps*60*60*24*30) months=(Math.floor(time/(Game.fps*60*60*24*30)));
					if (time>=Game.fps*60*60*24) days=(Math.floor(time/(Game.fps*60*60*24)));
					if (time>=Game.fps*60*60) hours=(Math.floor(time/(Game.fps*60*60)));
					if (time>=Game.fps*60) minutes=(Math.floor(time/(Game.fps*60)));
					if (time>=Game.fps) seconds=(Math.floor(time/(Game.fps)));
					
					//days-=months*30;
					hours-=days*24;
					minutes-=hours*60+days*24*60;
					seconds-=minutes*60+hours*60*60+days*24*60*60;
					
					if (days>10) {hours=0;}
					if (days) {minutes=0;seconds=0;}
					if (hours) {seconds=0;}
					var bits=[];
					
					//if (months>0) bits.push(Beautify(months)+' month'+(days==1?'':'s'));
					if (days>0) bits.push(Beautify(days)+' day'+(days==1?'':'s'));
					if (hours>0) bits.push(Beautify(hours)+' hour'+(hours==1?'':'s'));
					if (minutes>0) bits.push(Beautify(minutes)+' minute'+(minutes==1?'':'s'));
					if (seconds>0) bits.push(Beautify(seconds)+' second'+(seconds==1?'':'s'));
					if (bits.length==0) str='less than 1 second';
					else str=bits.join(', ');
			}
				
					if (!l('bakerySubtitle2')) l('bakeryName').insertAdjacentHTML('afterend','<div id="bakerySubtitle2" class="title" style="text-align:center;position:absolute;left:0px;right:0px;bottom: 40px;font-size:15px;pointer-events:none;text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;opacity:1;"></div>');
					
					l('bakerySubtitle2').textContent=str;
					Game.sayTime
				},
			});
      //cookiesToNext=Math.floor(Game.HowManyCookiesReset(Game.HowMuchPrestige(Game.cookiesReset+Game.cookiesEarned)+1)-Game.cookiesReset-Game.cookiesEarned);
