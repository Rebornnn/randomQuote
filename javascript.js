var colors=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
var currentText='';
var currentAuthor='';

function newQuote(){
    $.ajax({
        type:'get',
        headers: {
            "X-Mashape-Key": "Y6iyBDjHSdmsh2r96Nk8OXocMeATp1gMmGqjsnW0VFocMI2wVX",
            Accept: "application/json",
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
        success: function(data){
            
            currentText=data.quote;
            currentAuthor=data.author;

            $('.u-content').fadeOut(500).fadeIn(500).text(currentText);
            $('.u-author').fadeOut(500).fadeIn(500).text(currentAuthor);

            $('.twitter').attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentText + '" ' + currentAuthor));
            $('.facebook').attr('href','https://www.facebook.com');

            var random=Math.floor(Math.random()*colors.length);
            $('body').css({backgroundColor:colors[random],color:colors[random]});
            $('.btn-default').css({backgroundColor:colors[random]});
        },
        cache:false
    });
}

$(document).ready(function(){
    newQuote();
    $('.quote').on('click',newQuote);
});

