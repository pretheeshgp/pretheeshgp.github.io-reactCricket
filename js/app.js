class Cricket extends React.Component{
	



constructor(props){


super(props);

let inning1 = ["G.Gambir","Sehwag","Sachin","M.Dhoni","Y.Singh","Robin.S","R.Jadeja","Kumble","B.Kumar","J.Bumrah","Prasad"];

let bowling1 =  ["C.Vaas","G.Mcgrath","C.Vaas","G.Mcgrath","S.Pollock", "A.Flintoff","S.Pollock", "A.Flintoff","M.Muralitharan","C.Harris","M.Muralitharan","C.Harris","M.Muralitharan","S.Jayasurya","M.Bevan","C.Vaas","M.Bevan","A.Flintoff","S.Pollock","G.Mcgrath"];

let inning2 = 	["S.Jayasurya", "S.Anwar", "S.ChanderPaul", "A.Flower", "M.Bevan", "C.Harris", "A.Flintoff", "S.Pollock", "C.Vaas", "M.Muralitharan", "G.Mcgrath"];

let bowling2 =  ["Prasad","J.Bumrah","Prasad","J.Bumrah","Prasad","B.Kumar","J.Bumrah", "A.Kumble", "B.Kumar", "A.Kumble", "R.Singh", "A.Kumble", "R.Singh", "Y.Singh", "R.Jadeja", "Y.Singh", "R.Jadeja", "B.Kumar", "V.Sehwag", "J.Bumrah"];


let bowlingLoop1 =  ["C.Vaas","G.Mcgrath","S.Pollock","C.Harris","M.Muralitharan","M.Bevan","A.Flintoff","S.Jayasurya"];
let overLoop1 =  ["0","0","0","0","0","0","0"];
let runsLoop1 =  ["0","0","0","0","0","0","0"];
let wicketLoop1 =  ["0","0","0","0","0","0","0"];

let bowlingLoop2 =  ["Prasad","J.Bumrah","A.Kumble","B.Kumar","R.Jadeja","V.Sehwag","R.Singh","Y.Singh"];
let overLoop2 =  ["0","0","0","0","0","0","0"];
let runsLoop2 =  ["0","0","0","0","0","0","0"];
let wicketLoop2 =  ["0","0","0","0","0","0","0"];

this.state = {pair: [0,0], position: [1,2], batOrder: [inning1,inning2], bowlOrder: [bowling1,bowling2], bowlingSpell: [bowlingLoop1,bowlingLoop2], batting: 0, balls: 0, runs: 0, totalruns: 0,  batsment1runs: 0, batsment2runs: 0, wickets: 0, overs: 0, target: 0, innings: 1};
this.ballClick = this.ballClick.bind(this);
this.sweepShot = this.sweepShot.bind(this);




}



ballClick(event){

//team details
let inng = this.state.innings;
let prevTotalRuns = 0;
let theinning = [0, this.state.batOrder[0], this.state.batOrder[1]];
let thebowling = [0, this.state.bowlOrder[0], this.state.bowlOrder[1]];

let bowlingTeam = Number(inng)-Number(1);
let bowlerKey;

//balls , ballCounter
let balls = this.state.balls;
let currentBalls = Number(balls) + Number(1);

//battingPosition array 1,2
let pos = this.state.position;

let towin = '-';

//runs, currentBall Runs Random Generated, total runs calculation
let myArray = ["0","1","2","OUT","1","0","1","1","3","0","3","4","1","0","0","1","0","0","1","0","1","4","6","OUT"];
let currentruns = myArray[Math.floor(Math.random() * myArray.length)];
let fall = currentruns;
if(currentruns == "OUT") { currentruns = 0; }

this.setState({runs: currentruns});

let totruns = Number(this.state.totalruns) + Number(currentruns);

this.setState({totalruns: totruns});


//runs and balls display updates
document.getElementById('nowruns').innerHTML=fall;
document.getElementById('ball'+currentBalls).innerHTML=fall;

if(currentBalls!=6){  document.getElementById("ball6").innerHTML='';  }

document.getElementById('totalruns').innerHTML=totruns;



//default battingValue is 0, battingPosition values 1,2, current striker bat 0 ,pos 1

		let bat = this.state.batting;
		let mypos = pos[bat];


//target achieved or not, game status 
if(this.state.innings==2 && Number(totruns)>Number(this.state.target)) { 


					  $.alert.open('info', '<b>Rest Of World</b>', 'Won the Match by x pqr');


														   this.setState({innings: 1});  



															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[0].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[0][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = '<div class="col" id="bc">bowler</div><div class="col" id="bc">overs</div><div class="col" id="bc">runs</div><div class="col" id="bc">wickets</div>';
															$('.bowlingcard').html(bowlingDiv+ballLoop);




															



															this.setState({target: '-'});

															document.getElementById('tar').innerHTML='Target: '+'-';
															document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

															$('.number').html(0);
															$('.ball').html('');
															$('.runbyrun').html(0);


															this.setState({pair: [0,0]});
															this.setState({position: [1,2]});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({runs: 0});
															this.setState({balls: 0});
															this.setState({totalruns: 0});
															this.setState({batsment1runs: 0});
															this.setState({batsment2runs: 0});
															this.setState({wickets: 0});
															this.setState({overs: 0});


						// openers names set for inning 1 
															$('#allbat0').html(this.state.batOrder[0][0]);
															$('#allbat1').html(this.state.batOrder[0][1]);


						// all players batting order display for inning 2 set
															for(let i=1; i<=11; i++){

																		let j = Number(i)-Number(1);				

																		$('.allbatsmenName'+i).html(this.state.batOrder[0][j]);


															}




							}




//overs, current blowler name update, over change, blowler change
let totovers = this.state.overs;
document.getElementById('bowler').innerHTML = thebowling[this.state.innings][totovers];

	if(Number(currentBalls)%Number(6) == 0){ 



							//currentBowler, currentRuns

							let currentOverScore = totruns - prevTotalRuns;
							prevTotalRuns += currentOverScore;
							let currentBowler = thebowling[this.state.innings][totovers];


							//Step1: find key from bowlingLoop Array where value = currentBowler


let bowlTeamArray=this.state.bowlingSpell[bowlingTeam];

for (let k=0;k<bowlTeamArray.length;k++){


						if(bowlTeamArray[k]==currentBowler){

								bowlerKey = k;
								break;
						}

}

console.log('key: '+bowlerKey+' bowler: '+currentBowler);


							//Step2: let that key=0 (key could be 0,1,2,3,4,5 or 6, depending on key found using prev step (1))
							//Step3: then change value of overLoop[0]=overLoop[0]+1;
							//Step4: then change value of runLoop[0]=runLoop[0]+currentOverScore
							//Step5: then change value of wicketLoop[0]=wicketLoop[0]+1;


							let over = Number(totovers) + Number(1); 

							this.setState({overs: over});  
							document.getElementById('overs').innerHTML=over;

							currentBalls=0;
							let loop;

							for(loop=1;loop<6;loop++){
							document.getElementById("ball"+loop).innerHTML='';
							}







// if innings over due to over/ball completions

							if(over==20){


											if(this.state.innings==2 && Number(totruns)>Number(this.state.target)) { 

											 $.alert.open('info', '<b>Rest Of World</b>', 'Won the Match by x pqr');

														   this.setState({innings: 1});  



															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[0].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[0][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = '<div class="col" id="bc">bowler</div><div class="col" id="bc">overs</div><div class="col" id="bc">runs</div><div class="col" id="bc">wickets</div>';
															$('.bowlingcard').html(bowlingDiv+ballLoop);




															



															this.setState({target: '-'});

															document.getElementById('tar').innerHTML='Target: '+'-';
															document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

															$('.number').html(0);
															$('.ball').html('');
															$('.runbyrun').html(0);


															this.setState({pair: [0,0]});
															this.setState({position: [1,2]});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({runs: 0});
															this.setState({balls: 0});
															this.setState({totalruns: 0});
															this.setState({batsment1runs: 0});
															this.setState({batsment2runs: 0});
															this.setState({wickets: 0});
															this.setState({overs: 0});


						// openers names set for inning 1 

															$('#allbat0').html(this.state.batOrder[0][0]);
															$('#allbat1').html(this.state.batOrder[0][1]);


						// all players batting order display for inning 2 set
															for(let i=1; i<=11; i++){

																		let j = Number(i)-Number(1);				

																		$('.allbatsmenName'+i).html(this.state.batOrder[0][j]);


															}




											  }

											if(this.state.innings==2 && Number(totruns)<Number(this.state.target)) { 


																  $.alert.open('info', '<b>India</b>', 'Won the Match by x pqr');

														   this.setState({innings: 1});  



															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[0].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[0][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = '<div class="col" id="bc">bowler</div><div class="col" id="bc">overs</div><div class="col" id="bc">runs</div><div class="col" id="bc">wickets</div>';
															$('.bowlingcard').html(bowlingDiv+ballLoop);




															



															this.setState({target: '-'});

															document.getElementById('tar').innerHTML='Target: '+'-';
															document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

															$('.number').html(0);
															$('.ball').html('');
															$('.runbyrun').html(0);


															this.setState({pair: [0,0]});
															this.setState({position: [1,2]});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({runs: 0});
															this.setState({balls: 0});
															this.setState({totalruns: 0});
															this.setState({batsment1runs: 0});
															this.setState({batsment2runs: 0});
															this.setState({wickets: 0});
															this.setState({overs: 0});



						// openers names set for inning 1 

															$('#allbat0').html(this.state.batOrder[0][0]);
															$('#allbat1').html(this.state.batOrder[0][1]);

						// all players batting order display for inning 2 set
															for(let i=1; i<=11; i++){

																		let j = Number(i)-Number(1);				

																		$('.allbatsmenName'+i).html(this.state.batOrder[0][j]);


															}

											


											  }

			//target calculation of innings =2

												if(this.state.innings==1){

													alert('2nd Innings')
													 towin = Number(totruns)+Number(1);


															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[1].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[1][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = '<div class="col" id="bc">bowler</div><div class="col" id="bc">overs</div><div class="col" id="bc">runs</div><div class="col" id="bc">wickets</div>';
															$('.bowlingcard').html(bowlingDiv+ballLoop);




												}



												this.setState({innings: 2});
												this.setState({target: towin});

												document.getElementById('tar').innerHTML='Target: '+towin;
												document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

												$('.number').html(0);
												$('.ball').html('');
												$('.runbyrun').html(0);


												this.setState({pair: [0,0]});
												this.setState({position: [1,2]});
												this.setState({batting: 0});
												this.setState({balls: 0});
												this.setState({batting: 0});
												this.setState({balls: 0});
												this.setState({runs: 0});
												this.setState({balls: 0});
												this.setState({totalruns: 0});
												this.setState({batsment1runs: 0});
												this.setState({batsment2runs: 0});
												this.setState({wickets: 0});
												this.setState({overs: 0});


			// openers names set for inning 2 
												$('#allbat0').html(this.state.batOrder[1][0]);
												$('#allbat1').html(this.state.batOrder[1][1]);


			// all players batting order display for inning 2 set
												for(let i=1; i<=11; i++){

															let j = Number(i)-Number(1);				

															$('.allbatsmenName'+i).html(this.state.batOrder[1][j]);


												}



												$('.ground').hide();

												document.getElementById('bottomDisplay').innerHTML='Innings Over <br/>'+

												'Total Runs : '+totruns+'  <br/>'+

												'Wickets: '+this.state.wickets+'  <br/>'+

												'Overs: '+20+'<br/>'+


												'Target: '+towin+ '<br/>'+

												'<a onclick="startgame();" id="continue" href="#">Click to Continue</a>';


												$.alert.open('info', '<b>Innings Over</b>', 'Have A Tea Break');

												this.sweepShot();

												document.getElementById('bottomDisplay').style.display='block';


							}

	}


this.setState({balls: currentBalls});


//wickets

let wickets = this.state.wickets;

if(fall == "OUT") { 




				$.alert.open('info', 'Batsman Out: <b>'+$('#allbat'+bat).html()+'</b>', 'Runs Scored: '+$('#myruns'+bat).html()+'<br/>Bowler: '+$('#bowler').html());



				let wicketfall = Number(wickets) + Number(1); 
				this.setState({wickets: wicketfall});  
				document.getElementById('wkt').innerHTML=wicketfall;


				let maxim = Math.max(...pos);
				let nexti = Number(maxim)+Number(1);

				document.getElementById('totalbatter'+pos[bat]).innerHTML=document.getElementById('myruns'+bat).innerHTML;				
			


  
				 
				 	pos.splice(Number(bat), 1);


					pos.push(nexti);




					if(bat==0){

					document.getElementById('allbat0').innerHTML=document.getElementById('allbat1').innerHTML;
					document.getElementById('batsman0').innerHTML=document.getElementById('batsman1').innerHTML;
					document.getElementById('myruns0').innerHTML=document.getElementById('myruns1').innerHTML;

					}

					
					document.getElementById('allbat1').innerHTML=theinning[this.state.innings][Number(wicketfall)+Number(1)];

					document.getElementById('batsman1').innerHTML = '0';  
					document.getElementById('myruns1').innerHTML = '0';  



					if(wicketfall==10){


									if(this.state.innings==2) {


														  $.alert.open('info', '<b>India</b>', 'Won the Match by x pqr');
															

														   this.setState({innings: 1});  



															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[0].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[0][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = '<div class="col" id="bc">bowler</div><div class="col" id="bc">overs</div><div class="col" id="bc">runs</div><div class="col" id="bc">wickets</div>';
															$('.bowlingcard').html(bowlingDiv+ballLoop);




															



															this.setState({target: '-'});

															document.getElementById('tar').innerHTML='Target: '+'-';
															document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

															$('.number').html(0);
															$('.ball').html('');
															$('.runbyrun').html(0);


															this.setState({pair: [0,0]});
															this.setState({position: [1,2]});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({batting: 0});
															this.setState({balls: 0});
															this.setState({runs: 0});
															this.setState({balls: 0});
															this.setState({totalruns: 0});
															this.setState({batsment1runs: 0});
															this.setState({batsment2runs: 0});
															this.setState({wickets: 0});
															this.setState({overs: 0});


						// openers names set for inning 1 

															$('#allbat0').html(this.state.batOrder[0][0]);
															$('#allbat1').html(this.state.batOrder[0][1]);


						// all players batting order display for inning 2 set
															for(let i=1; i<=11; i++){

																		let j = Number(i)-Number(1);				

																		$('.allbatsmenName'+i).html(this.state.batOrder[0][j]);


															}




									}




									if(this.state.innings==1) {  
													alert('2nd Innings 10fall');


													towin = Number(totruns)+Number(1);


															let ballLoop ='';

															for(let i=0;i<this.state.bowlingSpell[1].length;i++){
																		
																		ballLoop += '<div id="bc">'+this.state.bowlingSpell[1][i]+'</div><div id="bc_over_'+i+'">0</div><div id="bc_runs_'+i+'">0</div><div id="bc_wickets_'+i+'">0</div>';
															}


															let bowlingDiv = $('.bowlingcard').html();
															$('.bowlingcard').html(bowlingDiv+ballLoop);


									}	


									this.setState({innings: 2});
									this.setState({target: towin});

									document.getElementById('tar').innerHTML='Target: '+towin;
									document.getElementById('inn').innerHTML='Innings: '+this.state.innings;

									$('.number').html(0);
									$('.ball').html('');
									$('.runbyrun').html(0);



									this.setState({pair: [0,0]});
									this.setState({position: [1,2]});
									this.setState({batting: 0});
									this.setState({balls: 0});
									this.setState({batting: 0});
									this.setState({balls: 0});
									this.setState({runs: 0});
									this.setState({balls: 0});
									this.setState({totalruns: 0});
									this.setState({batsment1runs: 0});
									this.setState({batsment2runs: 0});
									this.setState({wickets: 0});
									this.setState({overs: 0});





															$('#allbat0').html(this.state.batOrder[1][0]);
															$('#allbat1').html(this.state.batOrder[1][1]);



									for(let i=1; i<=11; i++){

									let j = Number(i)-Number(1);				

									$('.allbatsmenName'+i).html(this.state.batOrder[1][j]);


									}


									$('.ground').hide();


									document.getElementById('bottomDisplay').innerHTML='Innings Over <br/>'+

									'Total Runs : '+totruns+'  <br/>'+

									'Wickets: '+10+'  <br/>'+

									'Overs: '+this.state.overs+'<br/>'+


									'Target: '+towin+ '<br/>'+

									'<a onclick="startgame();" id="continue" href="#">Click to Continue</a>';


									$.alert.open('info', '<b>Innings Over</b>', 'Enjoy The Game');


									this.sweepShot();

									document.getElementById('bottomDisplay').style.display='block';

					}

}


//currentBatsmanRuns

//continue score update 

else {

					let batsman = ","+fall;

					document.getElementById('batsman'+bat).innerHTML += batsman;

					let totalscore = document.getElementById('batsman'+bat).innerHTML.split(',');

					document.getElementById('allbat'+bat).style.textDecoration='underline 6px red';


					let batNot = Number(1) - Number(bat);


					document.getElementById('allbat'+batNot).style.textDecoration='none';


					let bingo = [0,0];


					for(let e=0; e<totalscore.length; e++){

						bingo[bat] = Number(bingo[bat]) + Number(totalscore[e]);

					}



					document.getElementById('myruns'+bat).innerHTML = bingo[bat];

					document.getElementById('totalbatter'+pos[bat]).innerHTML=document.getElementById('myruns'+bat).innerHTML+"*";				




					//if fall = odd
								if(Number(fall)%Number(2)!=0){



										if(Number(currentBalls)%Number(6)!=0){

															bat=+(!bat);

										}

										else {

															bat=bat;

										}					

								}


					//if fall = even
								else {



										if(Number(currentBalls)%Number(6)!=0){

															bat=bat;

										}

										else {

															bat=+(!bat);

										}					

								}

								

									this.setState({batting: bat});


}






		
}

sweepShot(){




}




render(){


//<div class="ballcounter"><div id="bb">{this.state.balls} balls</div><div id="balls">overs {this.state.overs}</div></div>		
		return (<div onClick={this.ballClick} class="clicktoball">clickToball</div>);

}




}


ReactDOM.render(<Cricket />, document.getElementById('renderdiv'));