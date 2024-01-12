const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-us';
rec.continuous = false;

rec.onresult = function (e) {

    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
    ]
    for (let i = e.resultIndex; i < e.results.length; i++) { //as long as there's the list is not empty
        
        
        const script = e.results[i][0].transcript.toLowerCase().trim(); // to lowercase and trim any white space
        
        if (acceptedColors.includes(script)) {  //make sure colors spoken in matches one of the colors in the array
            document.body.style.backgroundColor = script; //adds style to whatever is spoken
        } else {
            alert('Please say color')
        }
    }
};

rec.start();