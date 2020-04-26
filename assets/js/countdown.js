var countDown = {
    init: function(){
        this.timeDown();
    },
    timeDown: function(){
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
        x = setInterval(function() {    
        let now = new Date().getTime(), distance = countDown - now;

            document.getElementById('Day').innerText = Math.floor(distance / (day)),
            document.getElementById('Hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('Mins').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('Secs').innerText = Math.floor((distance % (minute)) / second);

        }, second)
    }
}
countDown.init();
