// start..
function start(){
    console.log('Starting function..');
}

// work..
function work(){
    setTimeout(function(){
        console.log('Working function..');
    }, 2000);
}

// end..
function end(){
    console.log('Ending function..');
}

// function call stack..
start();
work();
end();

