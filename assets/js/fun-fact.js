let funFact = {
    init: function () {
        this.formatSizeForFactContent();
        this.counter();
    },
    formatSizeForFactContent: function () {
        function setHeightEqualWidth() {
            const width = $(".facts__content").width();
            $(".facts__content").css({"height": width + "px"});
        }

        setHeightEqualWidth();

        $(window).resize(setHeightEqualWidth);
    },
    counter: function () {
        let flag = 0;

        $(window).scroll(function() {
            if (flag == 1){
                return false;
            }
            else{
                const bh = $(window).height(),
                    st = $(window).scrollTop(),
                    el = $('.timer'),
                    eh = el.height();

                if ( st >= (100 + eh) - bh ) {
                    el.countTo({
                        speed: 2000,
                        refreshInterval: 20
                    });
                }
                flag = 1;
            }
        });
    }
};

funFact.init();
