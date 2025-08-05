/************************************ 
 * Numerical_Stroop_Ts_Alt_Web *
 ************************************/


// store info about the experiment session:
let expName = 'numerical_stroop_ts_alt_web';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'age': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(begin_experimentRoutineBegin());
flowScheduler.add(begin_experimentRoutineEachFrame());
flowScheduler.add(begin_experimentRoutineEnd());
flowScheduler.add(instruction_what_numberRoutineBegin());
flowScheduler.add(instruction_what_numberRoutineEachFrame());
flowScheduler.add(instruction_what_numberRoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const trials_loop_what_number_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loop_what_number_practiceLoopBegin(trials_loop_what_number_practiceLoopScheduler));
flowScheduler.add(trials_loop_what_number_practiceLoopScheduler);
flowScheduler.add(trials_loop_what_number_practiceLoopEnd);


flowScheduler.add(instruction_how_manyRoutineBegin());
flowScheduler.add(instruction_how_manyRoutineEachFrame());
flowScheduler.add(instruction_how_manyRoutineEnd());
flowScheduler.add(blank500RoutineBegin());
flowScheduler.add(blank500RoutineEachFrame());
flowScheduler.add(blank500RoutineEnd());
const trials_loop_how_many_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loop_how_many_practiceLoopBegin(trials_loop_how_many_practiceLoopScheduler));
flowScheduler.add(trials_loop_how_many_practiceLoopScheduler);
flowScheduler.add(trials_loop_how_many_practiceLoopEnd);


flowScheduler.add(end_of_practiceRoutineBegin());
flowScheduler.add(end_of_practiceRoutineEachFrame());
flowScheduler.add(end_of_practiceRoutineEnd());
const test_phase_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_phase_loopLoopBegin(test_phase_loopLoopScheduler));
flowScheduler.add(test_phase_loopLoopScheduler);
flowScheduler.add(test_phase_loopLoopEnd);










flowScheduler.add(end_of_experimentRoutineBegin());
flowScheduler.add(end_of_experimentRoutineEachFrame());
flowScheduler.add(end_of_experimentRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'list_stim_incongruent_what_number.xlsx', 'path': 'list_stim_incongruent_what_number.xlsx'},
    {'name': 'list_stim_incongruent_how_many.xlsx', 'path': 'list_stim_incongruent_how_many.xlsx'},
    {'name': 'list_block_rows.xlsx', 'path': 'list_block_rows.xlsx'},
    {'name': 'numerical_stroop_trials_constraints.xlsx', 'path': 'numerical_stroop_trials_constraints.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var begin_experimentClock;
var instruction_font_size;
var prompt_font_size;
var number_font_size;
var fixation_font_size;
var skip_test;
var delay;
var duration_number;
var duration_fixation;
var duration_response;
var text_begin;
var key_resp_begin;
var instruction_what_numberClock;
var instruction_text_what_number;
var key_resp_instruction_what_number;
var blank500Clock;
var blank;
var trial_what_numberClock;
var text_what_number_practice;
var key_resp_what_number_practice;
var text_fixation_what_number_practice;
var what_number_correct_count;
var text_trial_name_what_number_practice;
var instruction_how_manyClock;
var instruction_text_how_many;
var key_resp_instruction_how_many;
var trial_how_manyClock;
var text_how_many_practice;
var key_resp_how_many_practice;
var text_fixation_how_many_practice;
var how_many_correct_count;
var text_trial_name_how_many_practice;
var end_of_practiceClock;
var end_of_practice_text;
var instruction_testClock;
var instruction_text_test;
var key_resp_instruction_test;
var trial_mixedClock;
var text_test;
var key_resp_test;
var text_fixation_test;
var text_trial_name;
var restClock;
var rest_text;
var key_resp_rest;
var end_of_experimentClock;
var end_of_experiment_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin_experiment"
  begin_experimentClock = new util.Clock();
  // Run 'Begin Experiment' code from specifying_task_specs
  instruction_font_size = 0.04;
  prompt_font_size = 0.07;
  number_font_size = 0.1;
  fixation_font_size = 0.1;
  skip_test = 1;
  delay = 0;
  if ((Number.parseInt(expInfo["age"]) <= 13)) {
      delay = 1;
  }
  duration_number = (2 + delay);
  duration_fixation = 1;
  duration_response = ((duration_number + duration_fixation) - 0.1);
  
  text_begin = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_begin',
    text: 'Welcome to the Numerical Stroop Test!\n\nGet ready for some Task Switching Excercises. Press space key to read the instructions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_begin = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_what_number"
  instruction_what_numberClock = new util.Clock();
  instruction_text_what_number = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_what_number',
    text: 'You will see the numbers 1, 2, 3 or 4 on the screen. Press the key c, v, b, or n according to the number you see.\n\nSometimes you may see 1 1 1 1, 2, 3 3, 4 4 4 and so on. Your job is to press the key for whatever the number is that you see, so c for 1s, v for 2s, b for 3s or n for 4s.\n\nRest your fingers on these keys, and press a key to start.',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_what_number = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial_what_number"
  trial_what_numberClock = new util.Clock();
  text_what_number_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_what_number_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: number_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_what_number_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_fixation_what_number_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fixation_what_number_practice',
    text: '*',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: fixation_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from trial_what_number_end_loop_code
  what_number_correct_count = 0;
  
  text_trial_name_what_number_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trial_name_what_number_practice',
    text: '',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: prompt_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "instruction_how_many"
  instruction_how_manyClock = new util.Clock();
  instruction_text_how_many = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_how_many',
    text: "Great. Now, pay attention to the number of items you see. Sometimes the number of items won't match what the number says.\n\nFor example, if you see 1 1 1 1, you now have to press n because it's 4 items. \n\nThe number itself doesn't matter, your job is to press the key for however many are shown on the screen.\n\nLet's try it. Rest your fingers on the keys and press a key to start.",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_how_many = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_how_many"
  trial_how_manyClock = new util.Clock();
  text_how_many_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_how_many_practice',
    text: '',
    font: 'Verdana',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: number_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_how_many_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_fixation_how_many_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fixation_how_many_practice',
    text: '*',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: fixation_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Run 'Begin Experiment' code from trial_how_many_end_loop_code
  how_many_correct_count = 0;
  
  text_trial_name_how_many_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trial_name_how_many_practice',
    text: '',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: prompt_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "end_of_practice"
  end_of_practiceClock = new util.Clock();
  end_of_practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_of_practice_text',
    text: 'Great Job!',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: prompt_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instruction_test"
  instruction_testClock = new util.Clock();
  instruction_text_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_test',
    text: "Let's carry on and do some more now. \n\nRemember to answer according to the prompts - what number or how many. \n\nTry to respond as quickly as you can without making a mistake.\n\nEvery now and then there will be break points when you can rest.\n\nThe prompts may change or remain the same so you have to watch out.\n\nGet ready by putting your fingers on the keys. \n\nPress a key to continue.",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_instruction_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_mixed"
  trial_mixedClock = new util.Clock();
  text_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_test',
    text: '',
    font: 'Verdana',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: number_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_fixation_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fixation_test',
    text: '*',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.05)], draggable: false, height: fixation_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_trial_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_trial_name',
    text: '',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: prompt_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  rest_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'rest_text',
    text: 'Have a short rest.\n\nWhen you are ready put your fingers on the keys and press a key to start.',
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_of_experiment"
  end_of_experimentClock = new util.Clock();
  end_of_experiment_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_of_experiment_text',
    text: "Thank you, you're all done with this task!",
    font: 'Verdana',
    units: undefined, 
    pos: [0, 0], draggable: false, height: instruction_font_size,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var begin_experimentMaxDurationReached;
var _key_resp_begin_allKeys;
var begin_experimentMaxDuration;
var begin_experimentComponents;
function begin_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'begin_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    begin_experimentClock.reset();
    routineTimer.reset();
    begin_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_begin.keys = undefined;
    key_resp_begin.rt = undefined;
    _key_resp_begin_allKeys = [];
    psychoJS.experiment.addData('begin_experiment.started', globalClock.getTime());
    begin_experimentMaxDuration = null
    // keep track of which components have finished
    begin_experimentComponents = [];
    begin_experimentComponents.push(text_begin);
    begin_experimentComponents.push(key_resp_begin);
    
    begin_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'begin_experiment' ---
    // get current time
    t = begin_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_begin* updates
    if (t >= 0.0 && text_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_begin.tStart = t;  // (not accounting for frame time here)
      text_begin.frameNStart = frameN;  // exact frame index
      
      text_begin.setAutoDraw(true);
    }
    
    
    // *key_resp_begin* updates
    if (t >= 0.1 && key_resp_begin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_begin.tStart = t;  // (not accounting for frame time here)
      key_resp_begin.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_begin.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_begin.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_begin.clearEvents(); });
    }
    
    if (key_resp_begin.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_begin.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_begin_allKeys = _key_resp_begin_allKeys.concat(theseKeys);
      if (_key_resp_begin_allKeys.length > 0) {
        key_resp_begin.keys = _key_resp_begin_allKeys[_key_resp_begin_allKeys.length - 1].name;  // just the last key pressed
        key_resp_begin.rt = _key_resp_begin_allKeys[_key_resp_begin_allKeys.length - 1].rt;
        key_resp_begin.duration = _key_resp_begin_allKeys[_key_resp_begin_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'begin_experiment' ---
    begin_experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('begin_experiment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_begin.corr, level);
    }
    psychoJS.experiment.addData('key_resp_begin.keys', key_resp_begin.keys);
    if (typeof key_resp_begin.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_begin.rt', key_resp_begin.rt);
        psychoJS.experiment.addData('key_resp_begin.duration', key_resp_begin.duration);
        routineTimer.reset();
        }
    
    key_resp_begin.stop();
    // the Routine "begin_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_what_numberMaxDurationReached;
var _key_resp_instruction_what_number_allKeys;
var instruction_what_numberMaxDuration;
var instruction_what_numberComponents;
function instruction_what_numberRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_what_number' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_what_numberClock.reset();
    routineTimer.reset();
    instruction_what_numberMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_what_number.keys = undefined;
    key_resp_instruction_what_number.rt = undefined;
    _key_resp_instruction_what_number_allKeys = [];
    psychoJS.experiment.addData('instruction_what_number.started', globalClock.getTime());
    instruction_what_numberMaxDuration = null
    // keep track of which components have finished
    instruction_what_numberComponents = [];
    instruction_what_numberComponents.push(instruction_text_what_number);
    instruction_what_numberComponents.push(key_resp_instruction_what_number);
    
    instruction_what_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_what_numberRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_what_number' ---
    // get current time
    t = instruction_what_numberClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_what_number* updates
    if (t >= 0.0 && instruction_text_what_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_what_number.tStart = t;  // (not accounting for frame time here)
      instruction_text_what_number.frameNStart = frameN;  // exact frame index
      
      instruction_text_what_number.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_what_number* updates
    if (t >= 0.5 && key_resp_instruction_what_number.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_what_number.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_what_number.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_what_number.clock.reset();
      key_resp_instruction_what_number.start();
      key_resp_instruction_what_number.clearEvents();
    }
    
    if (key_resp_instruction_what_number.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_what_number.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_instruction_what_number_allKeys = _key_resp_instruction_what_number_allKeys.concat(theseKeys);
      if (_key_resp_instruction_what_number_allKeys.length > 0) {
        key_resp_instruction_what_number.keys = _key_resp_instruction_what_number_allKeys[_key_resp_instruction_what_number_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_what_number.rt = _key_resp_instruction_what_number_allKeys[_key_resp_instruction_what_number_allKeys.length - 1].rt;
        key_resp_instruction_what_number.duration = _key_resp_instruction_what_number_allKeys[_key_resp_instruction_what_number_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_what_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_what_numberRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_what_number' ---
    instruction_what_numberComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_what_number.stopped', globalClock.getTime());
    key_resp_instruction_what_number.stop();
    // the Routine "instruction_what_number" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(blank);
    
    blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    blank500Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_loop_what_number_practice;
function trials_loop_what_number_practiceLoopBegin(trials_loop_what_number_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop_what_number_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_stim_incongruent_what_number.xlsx',
      seed: undefined, name: 'trials_loop_what_number_practice'
    });
    psychoJS.experiment.addLoop(trials_loop_what_number_practice); // add the loop to the experiment
    currentLoop = trials_loop_what_number_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_loop_what_number_practice.forEach(function() {
      snapshot = trials_loop_what_number_practice.getSnapshot();
    
      trials_loop_what_number_practiceLoopScheduler.add(importConditions(snapshot));
      trials_loop_what_number_practiceLoopScheduler.add(trial_what_numberRoutineBegin(snapshot));
      trials_loop_what_number_practiceLoopScheduler.add(trial_what_numberRoutineEachFrame());
      trials_loop_what_number_practiceLoopScheduler.add(trial_what_numberRoutineEnd(snapshot));
      trials_loop_what_number_practiceLoopScheduler.add(trials_loop_what_number_practiceLoopEndIteration(trials_loop_what_number_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loop_what_number_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop_what_number_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loop_what_number_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_loop_how_many_practice;
function trials_loop_how_many_practiceLoopBegin(trials_loop_how_many_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop_how_many_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_stim_incongruent_how_many.xlsx',
      seed: undefined, name: 'trials_loop_how_many_practice'
    });
    psychoJS.experiment.addLoop(trials_loop_how_many_practice); // add the loop to the experiment
    currentLoop = trials_loop_how_many_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_loop_how_many_practice.forEach(function() {
      snapshot = trials_loop_how_many_practice.getSnapshot();
    
      trials_loop_how_many_practiceLoopScheduler.add(importConditions(snapshot));
      trials_loop_how_many_practiceLoopScheduler.add(trial_how_manyRoutineBegin(snapshot));
      trials_loop_how_many_practiceLoopScheduler.add(trial_how_manyRoutineEachFrame());
      trials_loop_how_many_practiceLoopScheduler.add(trial_how_manyRoutineEnd(snapshot));
      trials_loop_how_many_practiceLoopScheduler.add(trials_loop_how_many_practiceLoopEndIteration(trials_loop_how_many_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loop_how_many_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop_how_many_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loop_how_many_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_phase_loop;
function test_phase_loopLoopBegin(test_phase_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_phase_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: skip_test, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_phase_loop'
    });
    psychoJS.experiment.addLoop(test_phase_loop); // add the loop to the experiment
    currentLoop = test_phase_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_phase_loop.forEach(function() {
      snapshot = test_phase_loop.getSnapshot();
    
      test_phase_loopLoopScheduler.add(importConditions(snapshot));
      test_phase_loopLoopScheduler.add(instruction_testRoutineBegin(snapshot));
      test_phase_loopLoopScheduler.add(instruction_testRoutineEachFrame());
      test_phase_loopLoopScheduler.add(instruction_testRoutineEnd(snapshot));
      test_phase_loopLoopScheduler.add(blank500RoutineBegin(snapshot));
      test_phase_loopLoopScheduler.add(blank500RoutineEachFrame());
      test_phase_loopLoopScheduler.add(blank500RoutineEnd(snapshot));
      const blocks_loop_mixedLoopScheduler = new Scheduler(psychoJS);
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopBegin(blocks_loop_mixedLoopScheduler, snapshot));
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopScheduler);
      test_phase_loopLoopScheduler.add(blocks_loop_mixedLoopEnd);
      test_phase_loopLoopScheduler.add(test_phase_loopLoopEndIteration(test_phase_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var blocks_loop_mixed;
function blocks_loop_mixedLoopBegin(blocks_loop_mixedLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks_loop_mixed = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'list_block_rows.xlsx',
      seed: undefined, name: 'blocks_loop_mixed'
    });
    psychoJS.experiment.addLoop(blocks_loop_mixed); // add the loop to the experiment
    currentLoop = blocks_loop_mixed;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks_loop_mixed.forEach(function() {
      snapshot = blocks_loop_mixed.getSnapshot();
    
      blocks_loop_mixedLoopScheduler.add(importConditions(snapshot));
      blocks_loop_mixedLoopScheduler.add(blank500RoutineBegin(snapshot));
      blocks_loop_mixedLoopScheduler.add(blank500RoutineEachFrame());
      blocks_loop_mixedLoopScheduler.add(blank500RoutineEnd(snapshot));
      const trials_mixed_loopLoopScheduler = new Scheduler(psychoJS);
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopBegin(trials_mixed_loopLoopScheduler, snapshot));
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopScheduler);
      blocks_loop_mixedLoopScheduler.add(trials_mixed_loopLoopEnd);
      blocks_loop_mixedLoopScheduler.add(restRoutineBegin(snapshot));
      blocks_loop_mixedLoopScheduler.add(restRoutineEachFrame());
      blocks_loop_mixedLoopScheduler.add(restRoutineEnd(snapshot));
      blocks_loop_mixedLoopScheduler.add(blocks_loop_mixedLoopEndIteration(blocks_loop_mixedLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_mixed_loop;
function trials_mixed_loopLoopBegin(trials_mixed_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_mixed_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'numerical_stroop_trials_constraints.xlsx', list_of_rows),
      seed: undefined, name: 'trials_mixed_loop'
    });
    psychoJS.experiment.addLoop(trials_mixed_loop); // add the loop to the experiment
    currentLoop = trials_mixed_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_mixed_loop.forEach(function() {
      snapshot = trials_mixed_loop.getSnapshot();
    
      trials_mixed_loopLoopScheduler.add(importConditions(snapshot));
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineBegin(snapshot));
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineEachFrame());
      trials_mixed_loopLoopScheduler.add(trial_mixedRoutineEnd(snapshot));
      trials_mixed_loopLoopScheduler.add(trials_mixed_loopLoopEndIteration(trials_mixed_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_mixed_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_mixed_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_mixed_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocks_loop_mixedLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks_loop_mixed);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocks_loop_mixedLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function test_phase_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_phase_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_phase_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_what_numberMaxDurationReached;
var _key_resp_what_number_practice_allKeys;
var trial_what_numberMaxDuration;
var trial_what_numberComponents;
function trial_what_numberRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_what_number' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_what_numberClock.reset();
    routineTimer.reset();
    trial_what_numberMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from convert_single_digits_to_string_what_number
    let stim2;
    try {
        stim2 = Number.parseInt(stim).toString();
    } catch(e) {
        stim2 = stim.toString();
    }
    
    text_what_number_practice.setText(stim);
    key_resp_what_number_practice.keys = undefined;
    key_resp_what_number_practice.rt = undefined;
    _key_resp_what_number_practice_allKeys = [];
    text_trial_name_what_number_practice.setText('What number?');
    trial_what_numberMaxDuration = null
    // keep track of which components have finished
    trial_what_numberComponents = [];
    trial_what_numberComponents.push(text_what_number_practice);
    trial_what_numberComponents.push(key_resp_what_number_practice);
    trial_what_numberComponents.push(text_fixation_what_number_practice);
    trial_what_numberComponents.push(text_trial_name_what_number_practice);
    
    trial_what_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_what_numberRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_what_number' ---
    // get current time
    t = trial_what_numberClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_what_number_practice* updates
    if (t >= 0.0 && text_what_number_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_what_number_practice.tStart = t;  // (not accounting for frame time here)
      text_what_number_practice.frameNStart = frameN;  // exact frame index
      
      text_what_number_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_what_number_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_what_number_practice.setAutoDraw(false);
    }
    
    
    // *key_resp_what_number_practice* updates
    if (t >= 0.1 && key_resp_what_number_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_what_number_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_what_number_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_what_number_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_what_number_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_what_number_practice.clearEvents(); });
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_what_number_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_what_number_practice.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_what_number_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_what_number_practice.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_what_number_practice_allKeys = _key_resp_what_number_practice_allKeys.concat(theseKeys);
      if (_key_resp_what_number_practice_allKeys.length > 0) {
        key_resp_what_number_practice.keys = _key_resp_what_number_practice_allKeys[_key_resp_what_number_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_what_number_practice.rt = _key_resp_what_number_practice_allKeys[_key_resp_what_number_practice_allKeys.length - 1].rt;
        key_resp_what_number_practice.duration = _key_resp_what_number_practice_allKeys[_key_resp_what_number_practice_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_what_number_practice.keys == corr_key) {
            key_resp_what_number_practice.corr = 1;
        } else {
            key_resp_what_number_practice.corr = 0;
        }
      }
    }
    
    
    // *text_fixation_what_number_practice* updates
    if (t >= duration_number && text_fixation_what_number_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fixation_what_number_practice.tStart = t;  // (not accounting for frame time here)
      text_fixation_what_number_practice.frameNStart = frameN;  // exact frame index
      
      text_fixation_what_number_practice.setAutoDraw(true);
    }
    
    frameRemains = duration_number + duration_fixation - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fixation_what_number_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fixation_what_number_practice.setAutoDraw(false);
    }
    
    
    // *text_trial_name_what_number_practice* updates
    if (t >= 0.0 && text_trial_name_what_number_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trial_name_what_number_practice.tStart = t;  // (not accounting for frame time here)
      text_trial_name_what_number_practice.frameNStart = frameN;  // exact frame index
      
      text_trial_name_what_number_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_trial_name_what_number_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_trial_name_what_number_practice.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_what_numberComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_what_numberRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_what_number' ---
    trial_what_numberComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_what_number_practice.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_what_number_practice.corr = 1;  // correct non-response
      } else {
         key_resp_what_number_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_what_number_practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_what_number_practice.keys', key_resp_what_number_practice.keys);
    psychoJS.experiment.addData('key_resp_what_number_practice.corr', key_resp_what_number_practice.corr);
    if (typeof key_resp_what_number_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_what_number_practice.rt', key_resp_what_number_practice.rt);
        psychoJS.experiment.addData('key_resp_what_number_practice.duration', key_resp_what_number_practice.duration);
        }
    
    key_resp_what_number_practice.stop();
    // Run 'End Routine' code from trial_what_number_end_loop_code
    if ((key_resp_what_number_practice.corr === 1)) {
        what_number_correct_count = (what_number_correct_count + 1);
    }
    if ((key_resp_what_number_practice.corr === 0)) {
        what_number_correct_count = 0;
    }
    if ((what_number_correct_count >= 3)) {
        trials_loop_what_number_practice.finished = true;
    }
    
    // the Routine "trial_what_number" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_how_manyMaxDurationReached;
var _key_resp_instruction_how_many_allKeys;
var instruction_how_manyMaxDuration;
var instruction_how_manyComponents;
function instruction_how_manyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_how_many' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_how_manyClock.reset();
    routineTimer.reset();
    instruction_how_manyMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_how_many.keys = undefined;
    key_resp_instruction_how_many.rt = undefined;
    _key_resp_instruction_how_many_allKeys = [];
    psychoJS.experiment.addData('instruction_how_many.started', globalClock.getTime());
    instruction_how_manyMaxDuration = null
    // keep track of which components have finished
    instruction_how_manyComponents = [];
    instruction_how_manyComponents.push(instruction_text_how_many);
    instruction_how_manyComponents.push(key_resp_instruction_how_many);
    
    instruction_how_manyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_how_manyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_how_many' ---
    // get current time
    t = instruction_how_manyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_how_many* updates
    if (t >= 0.0 && instruction_text_how_many.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_how_many.tStart = t;  // (not accounting for frame time here)
      instruction_text_how_many.frameNStart = frameN;  // exact frame index
      
      instruction_text_how_many.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_how_many* updates
    if (t >= 0.5 && key_resp_instruction_how_many.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_how_many.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_how_many.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_how_many.clock.reset();
      key_resp_instruction_how_many.start();
      key_resp_instruction_how_many.clearEvents();
    }
    
    if (key_resp_instruction_how_many.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_how_many.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_instruction_how_many_allKeys = _key_resp_instruction_how_many_allKeys.concat(theseKeys);
      if (_key_resp_instruction_how_many_allKeys.length > 0) {
        key_resp_instruction_how_many.keys = _key_resp_instruction_how_many_allKeys[_key_resp_instruction_how_many_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_how_many.rt = _key_resp_instruction_how_many_allKeys[_key_resp_instruction_how_many_allKeys.length - 1].rt;
        key_resp_instruction_how_many.duration = _key_resp_instruction_how_many_allKeys[_key_resp_instruction_how_many_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_how_manyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_how_manyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_how_many' ---
    instruction_how_manyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_how_many.stopped', globalClock.getTime());
    key_resp_instruction_how_many.stop();
    // the Routine "instruction_how_many" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_how_manyMaxDurationReached;
var _key_resp_how_many_practice_allKeys;
var trial_how_manyMaxDuration;
var trial_how_manyComponents;
function trial_how_manyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_how_many' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_how_manyClock.reset();
    routineTimer.reset();
    trial_how_manyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from convert_single_digits_to_string_how_many
    let stim2;
    try {
        stim2 = Number.parseInt(stim).toString();
    } catch(e) {
        stim2 = stim.toString();
    }
    
    text_how_many_practice.setText(stim);
    key_resp_how_many_practice.keys = undefined;
    key_resp_how_many_practice.rt = undefined;
    _key_resp_how_many_practice_allKeys = [];
    text_trial_name_how_many_practice.setText('How many?');
    psychoJS.experiment.addData('trial_how_many.started', globalClock.getTime());
    trial_how_manyMaxDuration = null
    // keep track of which components have finished
    trial_how_manyComponents = [];
    trial_how_manyComponents.push(text_how_many_practice);
    trial_how_manyComponents.push(key_resp_how_many_practice);
    trial_how_manyComponents.push(text_fixation_how_many_practice);
    trial_how_manyComponents.push(text_trial_name_how_many_practice);
    
    trial_how_manyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_how_manyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_how_many' ---
    // get current time
    t = trial_how_manyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_how_many_practice* updates
    if (t >= 0.0 && text_how_many_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_how_many_practice.tStart = t;  // (not accounting for frame time here)
      text_how_many_practice.frameNStart = frameN;  // exact frame index
      
      text_how_many_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_how_many_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_how_many_practice.setAutoDraw(false);
    }
    
    
    // *key_resp_how_many_practice* updates
    if (t >= 0.1 && key_resp_how_many_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_how_many_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_how_many_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_how_many_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_how_many_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_how_many_practice.clearEvents(); });
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_how_many_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_how_many_practice.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_how_many_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_how_many_practice.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_how_many_practice_allKeys = _key_resp_how_many_practice_allKeys.concat(theseKeys);
      if (_key_resp_how_many_practice_allKeys.length > 0) {
        key_resp_how_many_practice.keys = _key_resp_how_many_practice_allKeys[_key_resp_how_many_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_how_many_practice.rt = _key_resp_how_many_practice_allKeys[_key_resp_how_many_practice_allKeys.length - 1].rt;
        key_resp_how_many_practice.duration = _key_resp_how_many_practice_allKeys[_key_resp_how_many_practice_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_how_many_practice.keys == corr_key) {
            key_resp_how_many_practice.corr = 1;
        } else {
            key_resp_how_many_practice.corr = 0;
        }
      }
    }
    
    
    // *text_fixation_how_many_practice* updates
    if (t >= duration_number && text_fixation_how_many_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fixation_how_many_practice.tStart = t;  // (not accounting for frame time here)
      text_fixation_how_many_practice.frameNStart = frameN;  // exact frame index
      
      text_fixation_how_many_practice.setAutoDraw(true);
    }
    
    frameRemains = duration_number + duration_fixation - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fixation_how_many_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fixation_how_many_practice.setAutoDraw(false);
    }
    
    
    // *text_trial_name_how_many_practice* updates
    if (t >= 0.0 && text_trial_name_how_many_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trial_name_how_many_practice.tStart = t;  // (not accounting for frame time here)
      text_trial_name_how_many_practice.frameNStart = frameN;  // exact frame index
      
      text_trial_name_how_many_practice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_trial_name_how_many_practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_trial_name_how_many_practice.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_how_manyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_how_manyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_how_many' ---
    trial_how_manyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_how_many.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_how_many_practice.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_how_many_practice.corr = 1;  // correct non-response
      } else {
         key_resp_how_many_practice.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_how_many_practice.corr, level);
    }
    psychoJS.experiment.addData('key_resp_how_many_practice.keys', key_resp_how_many_practice.keys);
    psychoJS.experiment.addData('key_resp_how_many_practice.corr', key_resp_how_many_practice.corr);
    if (typeof key_resp_how_many_practice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_how_many_practice.rt', key_resp_how_many_practice.rt);
        psychoJS.experiment.addData('key_resp_how_many_practice.duration', key_resp_how_many_practice.duration);
        }
    
    key_resp_how_many_practice.stop();
    // Run 'End Routine' code from trial_how_many_end_loop_code
    if ((key_resp_how_many_practice.corr === 1)) {
        how_many_correct_count = (how_many_correct_count + 1);
    }
    if ((key_resp_how_many_practice.corr === 0)) {
        how_many_correct_count = 0;
    }
    if ((how_many_correct_count >= 3)) {
        trials_loop_how_many_practice.finished = true;
    }
    
    // the Routine "trial_how_many" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_of_practiceMaxDurationReached;
var end_of_practiceMaxDuration;
var end_of_practiceComponents;
function end_of_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_of_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    end_of_practiceClock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    end_of_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_of_practice.started', globalClock.getTime());
    end_of_practiceMaxDuration = null
    // keep track of which components have finished
    end_of_practiceComponents = [];
    end_of_practiceComponents.push(end_of_practice_text);
    
    end_of_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_of_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_of_practice' ---
    // get current time
    t = end_of_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_of_practice_text* updates
    if (t >= 0.0 && end_of_practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_of_practice_text.tStart = t;  // (not accounting for frame time here)
      end_of_practice_text.frameNStart = frameN;  // exact frame index
      
      end_of_practice_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_of_practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_of_practice_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_of_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_of_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_of_practice' ---
    end_of_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_of_practice.stopped', globalClock.getTime());
    if (end_of_practiceMaxDurationReached) {
        end_of_practiceClock.add(end_of_practiceMaxDuration);
    } else {
        end_of_practiceClock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_testMaxDurationReached;
var _key_resp_instruction_test_allKeys;
var instruction_testMaxDuration;
var instruction_testComponents;
function instruction_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instruction_testClock.reset();
    routineTimer.reset();
    instruction_testMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_instruction_test.keys = undefined;
    key_resp_instruction_test.rt = undefined;
    _key_resp_instruction_test_allKeys = [];
    psychoJS.experiment.addData('instruction_test.started', globalClock.getTime());
    instruction_testMaxDuration = null
    // keep track of which components have finished
    instruction_testComponents = [];
    instruction_testComponents.push(instruction_text_test);
    instruction_testComponents.push(key_resp_instruction_test);
    
    instruction_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_test' ---
    // get current time
    t = instruction_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_test* updates
    if (t >= 0.0 && instruction_text_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_test.tStart = t;  // (not accounting for frame time here)
      instruction_text_test.frameNStart = frameN;  // exact frame index
      
      instruction_text_test.setAutoDraw(true);
    }
    
    
    // *key_resp_instruction_test* updates
    if (t >= 0.5 && key_resp_instruction_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instruction_test.tStart = t;  // (not accounting for frame time here)
      key_resp_instruction_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_instruction_test.clock.reset();
      key_resp_instruction_test.start();
      key_resp_instruction_test.clearEvents();
    }
    
    if (key_resp_instruction_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instruction_test.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_instruction_test_allKeys = _key_resp_instruction_test_allKeys.concat(theseKeys);
      if (_key_resp_instruction_test_allKeys.length > 0) {
        key_resp_instruction_test.keys = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instruction_test.rt = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].rt;
        key_resp_instruction_test.duration = _key_resp_instruction_test_allKeys[_key_resp_instruction_test_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_test' ---
    instruction_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction_test.stopped', globalClock.getTime());
    key_resp_instruction_test.stop();
    // the Routine "instruction_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_mixedMaxDurationReached;
var _key_resp_test_allKeys;
var trial_mixedMaxDuration;
var trial_mixedComponents;
function trial_mixedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_mixed' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trial_mixedClock.reset();
    routineTimer.reset();
    trial_mixedMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from converting_single_digits_to_string_test
    let stim2;
    
    try {
        // Check if stim is a valid number but not a string with spaces
        if (!isNaN(stim) && !stim.includes(' ')) {
            stim2 = Number.parseInt(stim).toString(); // Convert single number to string
        } else {
            stim2 = stim.toString(); // Otherwise, leave it as a string (including multiple numbers)
        }
    } catch(e) {
        stim2 = stim.toString(); // Fallback in case of error
    }
    text_test.setText(stim2);
    key_resp_test.keys = undefined;
    key_resp_test.rt = undefined;
    _key_resp_test_allKeys = [];
    text_trial_name.setText(trial_name);
    psychoJS.experiment.addData('trial_mixed.started', globalClock.getTime());
    trial_mixedMaxDuration = null
    // keep track of which components have finished
    trial_mixedComponents = [];
    trial_mixedComponents.push(text_test);
    trial_mixedComponents.push(key_resp_test);
    trial_mixedComponents.push(text_fixation_test);
    trial_mixedComponents.push(text_trial_name);
    
    trial_mixedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_mixedRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_mixed' ---
    // get current time
    t = trial_mixedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_test* updates
    if (t >= 0.0 && text_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_test.tStart = t;  // (not accounting for frame time here)
      text_test.frameNStart = frameN;  // exact frame index
      
      text_test.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_test.setAutoDraw(false);
    }
    
    
    // *key_resp_test* updates
    if (t >= 0.1 && key_resp_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_test.tStart = t;  // (not accounting for frame time here)
      key_resp_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_test.clock.reset();
      key_resp_test.start();
      key_resp_test.clearEvents();
    }
    
    frameRemains = 0.1 + duration_response - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_test.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_test.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_test_allKeys = _key_resp_test_allKeys.concat(theseKeys);
      if (_key_resp_test_allKeys.length > 0) {
        key_resp_test.keys = _key_resp_test_allKeys[0].name;  // just the first key pressed
        key_resp_test.rt = _key_resp_test_allKeys[0].rt;
        key_resp_test.duration = _key_resp_test_allKeys[0].duration;
        // was this correct?
        if (key_resp_test.keys == corr_key) {
            key_resp_test.corr = 1;
        } else {
            key_resp_test.corr = 0;
        }
      }
    }
    
    
    // *text_fixation_test* updates
    if (t >= duration_number && text_fixation_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fixation_test.tStart = t;  // (not accounting for frame time here)
      text_fixation_test.frameNStart = frameN;  // exact frame index
      
      text_fixation_test.setAutoDraw(true);
    }
    
    frameRemains = duration_number + duration_fixation - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_fixation_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_fixation_test.setAutoDraw(false);
    }
    
    
    // *text_trial_name* updates
    if (t >= 0.0 && text_trial_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_trial_name.tStart = t;  // (not accounting for frame time here)
      text_trial_name.frameNStart = frameN;  // exact frame index
      
      text_trial_name.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration_number - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_trial_name.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_trial_name.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trial_mixedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_mixedRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_mixed' ---
    trial_mixedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial_mixed.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_test.keys === undefined) {
      if (['None','none',undefined].includes(corr_key)) {
         key_resp_test.corr = 1;  // correct non-response
      } else {
         key_resp_test.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_test.corr, level);
    }
    psychoJS.experiment.addData('key_resp_test.keys', key_resp_test.keys);
    psychoJS.experiment.addData('key_resp_test.corr', key_resp_test.corr);
    if (typeof key_resp_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_test.rt', key_resp_test.rt);
        psychoJS.experiment.addData('key_resp_test.duration', key_resp_test.duration);
        }
    
    key_resp_test.stop();
    // the Routine "trial_mixed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var restMaxDurationReached;
var _key_resp_rest_allKeys;
var maxDurationReached;
var restMaxDuration;
var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    restClock.reset();
    routineTimer.reset();
    restMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_rest.keys = undefined;
    key_resp_rest.rt = undefined;
    _key_resp_rest_allKeys = [];
    psychoJS.experiment.addData('rest.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((block_number_loop == 4));
    maxDurationReached = false
    restMaxDuration = null
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(rest_text);
    restComponents.push(key_resp_rest);
    
    restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest' ---
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rest_text* updates
    if (t >= 0.0 && rest_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rest_text.tStart = t;  // (not accounting for frame time here)
      rest_text.frameNStart = frameN;  // exact frame index
      
      rest_text.setAutoDraw(true);
    }
    
    
    // *key_resp_rest* updates
    if (t >= 1 && key_resp_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_rest.tStart = t;  // (not accounting for frame time here)
      key_resp_rest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_rest.clock.reset();
      key_resp_rest.start();
      key_resp_rest.clearEvents();
    }
    
    if (key_resp_rest.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_rest.getKeys({keyList: ['c', 'v', 'b', 'n'], waitRelease: false});
      _key_resp_rest_allKeys = _key_resp_rest_allKeys.concat(theseKeys);
      if (_key_resp_rest_allKeys.length > 0) {
        key_resp_rest.keys = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].name;  // just the last key pressed
        key_resp_rest.rt = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].rt;
        key_resp_rest.duration = _key_resp_rest_allKeys[_key_resp_rest_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    restComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest' ---
    restComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('rest.stopped', globalClock.getTime());
    key_resp_rest.stop();
    // the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_of_experimentMaxDurationReached;
var end_of_experimentMaxDuration;
var end_of_experimentComponents;
function end_of_experimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_of_experiment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    end_of_experimentClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    end_of_experimentMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_of_experiment.started', globalClock.getTime());
    end_of_experimentMaxDuration = null
    // keep track of which components have finished
    end_of_experimentComponents = [];
    end_of_experimentComponents.push(end_of_experiment_text);
    
    end_of_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_of_experimentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_of_experiment' ---
    // get current time
    t = end_of_experimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_of_experiment_text* updates
    if (t >= 0.0 && end_of_experiment_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_of_experiment_text.tStart = t;  // (not accounting for frame time here)
      end_of_experiment_text.frameNStart = frameN;  // exact frame index
      
      end_of_experiment_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_of_experiment_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_of_experiment_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_of_experimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_of_experimentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_of_experiment' ---
    end_of_experimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_of_experiment.stopped', globalClock.getTime());
    if (end_of_experimentMaxDurationReached) {
        end_of_experimentClock.add(end_of_experimentMaxDuration);
    } else {
        end_of_experimentClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
