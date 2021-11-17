// sync function..
function iAm1st(){
    console.log('Hello all i am 1st call stack');
}

// async function..
async function iAm2nd(){
    const myTxt = await 'Hello i am 2nd call stack';
    console.log(myTxt);
}

// sync function..
function iAmLast(){
    console.log('I am last call stack');
}

// CallStack..
iAm1st();
iAm2nd();
iAmLast();