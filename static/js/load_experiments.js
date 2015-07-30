function loadjscssfile(filename, filetype){
	if (filetype == "js") {
		document.write('<script src =' + filename + '></script>')
	}
	else if (filetype = "css") {
		document.write('<link href =' + filename + ' rel="stylesheet" type="text/css"></script>')
	}
}

var randomDraw = function(lst,n) {
	n = n || "1"
	var random_list = []
	for (i=0; i<n; i++) {
		index = Math.floor(Math.random()*lst.length)
		random_list.push(lst[index])
	}
    return random_list
}

/* Draws experiments randomly to fill up a certain amount of time. 
Completely avoids any knapsack type optimization and just stops 
when it can't find another experiment to add */

var experimentDraw = function(lst, time) {
	var time = time || "30"
	console.log(time)
	var return_list = []
	var total_time = 0
	while (total_time < time && lst.length > 0) {
		console.log(lst.length)
		index = Math.floor(Math.random()*lst.length)
		if ((total_time + lst[index].time) < 30) {
			total_time += lst[index].time
			return_list.push(lst[index].name)
		} 
		lst.splice(index,1)
	}
    return return_list
}

/* Define some function to select experiments to show. Right now I am hard coding,
but eventually they should be selected by some function (I.E. random new combinations
for a returning subject, keeping the total time under 30 minutes)
*/ 
// full list of experiment names:
var experiment_list = [{name:"simple_rt", time: 2}, {name: "simon", time: 10}, {name: "ANT", time: 20}, {name: "AX-CPT", time: 10}, 
						{name: "stop_signal", time: 20},{name: "plus-minus", time: 5},{name: "number-letter", time: 5}, {name: "local-global", time: 5},
						{name: "go-nogo", time: 7}, {name: 'stroop', time: 6}, {name: 'antisaccade', time: 7.5}, {name: 'flanker', time: 6},
						{name: 'tone_monitoring', time: 6}, {name: 'image_monitoring', time: 6}] 
						
// experiment_names = experimentDraw(experiment_list)
var experiment_names = ["image_monitoring"]

/* One the experiments are selected, load the appropriate files */
for (i = 0; i < experiment_names.length; i++) {
	switch (experiment_names[i]) {
		case "simple_rt":
			loadjscssfile("static/css/Experiments/simple_rt.css","css")
			loadjscssfile("static/js/Experiments/simple_rt.js","js")
			break;
		case "simon":
			loadjscssfile("static/css/Experiments/simon.css","css")
			loadjscssfile("static/js/Experiments/simon.js","js")
			break;
		case "ANT":
			loadjscssfile("static/css/Experiments/ANT.css","css")
			loadjscssfile("static/js/Experiments/ANT.js","js")
			loadjscssfile("static/js/jspsych/custom_plugins/jspsych-ANT-practice.js","js")
			break;
		case "AX-CPT":
			loadjscssfile("static/css/Experiments/AX-CPT.css","css")
			loadjscssfile("static/js/Experiments/AX-CPT.js","js")
			break;
		case "stop_signal":
			loadjscssfile("static/css/Experiments/stop_signal.css","css")
			loadjscssfile("static/js/Experiments/stop_signal.js","js")
			loadjscssfile("static/js/jspsych/custom_plugins/jspsych-stop-signal.js","js")
			loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
			break;
		case "plus-minus":
			loadjscssfile("static/js/Experiments/plus-minus.js","js")
			loadjscssfile("static/js/jspsych/plugins/jspsych-survey-text.js","js")
			break;
		case "number-letter":
			loadjscssfile("static/css/Experiments/number-letter.css","css")
			loadjscssfile("static/js/Experiments/number-letter.js","js")
			break;
		case "local-global":
			loadjscssfile("static/css/Experiments/local-global.css","css")
			loadjscssfile("static/js/Experiments/local-global.js","js")
			break;
		case "go-nogo":
			loadjscssfile("static/css/Experiments/go-nogo.css","css")
			loadjscssfile("static/js/Experiments/go-nogo.js","js")
			break;
		case "stroop":
			loadjscssfile("static/css/Experiments/stroop.css","css")
			loadjscssfile("static/js/Experiments/stroop.js","js")
			break;
		case "antisaccade":
			loadjscssfile("static/css/Experiments/antisaccade.css","css")
			loadjscssfile("static/js/Experiments/antisaccade.js","js")
			break;
		case "flanker":
			loadjscssfile("static/css/Experiments/flanker.css","css")
			loadjscssfile("static/js/Experiments/flanker.js","js")
			break;
		case "tone_monitoring":
			loadjscssfile("static/css/Experiments/tone_monitoring.css","css")
			loadjscssfile("static/js/Experiments/tone_monitoring.js","js")
			loadjscssfile("static/js/jspsych/plugins/jspsych-single-audio.js","js")
			loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
			break;
		case "image_monitoring":
			loadjscssfile("static/css/Experiments/image_monitoring.css","css")
			loadjscssfile("static/js/Experiments/image_monitoring.js","js")
			loadjscssfile("static/js/jspsych/plugins/jspsych-call-function.js","js")
			break;
	}
}

/* takes an experiment array and concatenates it with the array of each experiment \
identified in 'experiment_names' */
function cat_experiments(experiment_array) {
	for (i = 0; i < experiment_names.length; i++) {
		switch (experiment_names[i]) {
			case "simple_rt":
				experiments = experiments.concat(simple_rt_experiment)
				break;
			case "simon":
				experiments = experiments.concat(simon_experiment)
				break;
			case "ANT":
				experiments = experiments.concat(ANT_experiment)
				break;
			case "AX-CPT":
				experiments = experiments.concat(AX_experiment)
				break;
			case "stop_signal":
				experiments = experiments.concat(stop_signal_experiment)
				break;
			case "plus-minus":
				experiments = experiments.concat(plus_minus_experiment)
				break;
			case "number-letter":
				experiments = experiments.concat(numlet_experiment)
				break;
			case "local-global":
				experiments = experiments.concat(local_global_experiment)
				break;
			case "go-nogo":
				experiments = experiments.concat(gonogo_experiment)
				break;
			case "stroop":
				experiments = experiments.concat(stroop_experiment)
				break;
			case "antisaccade":
				experiments = experiments.concat(antisaccade_experiment)
				break;
			case "flanker":
				experiments = experiments.concat(flanker_experiment)
				break;
			case "tone_monitoring":
				experiments = experiments.concat(tone_monitoring_experiment)
				break;
			case "image_monitoring":
				experiments = experiments.concat(image_monitoring_experiment)
				break;
		}
	}
}
