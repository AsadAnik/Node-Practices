// The geoCode function with 4 sec. delay..
const getGeocode = (placeName, callBack) => {
    setTimeout(() => {
        const data = {
            placeName,
            latitute: '23.00',
            longitute: '-45.54'
        };

        callBack(data);
    }, 4000);
};

// 1st calling function..
getGeocode('MyPlace', (data) => {
    console.log(data);
});


// The Add function with 2 sec. delay..
const add = (num1, num2, callBack) => {
    setTimeout(() => {
        const sum = num1 + num2;
        callBack(sum);
    }, 2000);
};

// 2nd calling function..
add(10, 5, (result) => {
    console.log(result);
});