$('.mc-card-counter-child').text("3"); //Counter
$('.mute--opacity2').removeClass('mute--opacity2'); //Background Shadow

$('.mc-card--lvl1').removeClass().addClass('mc-card mc-card--collection mc-card--lvl1 iGrid-item mc-card--border mc-card--shadow width--all-12 hAlign--all-c'); //Border lvl1
$('.mc-card--lvl2').removeClass().addClass('mc-card mc-card--collection mc-card--lvl2 iGrid-item mc-card--border mc-card--shadow width--all-12 hAlign--all-c'); //Border lvl2
$('.mc-card--lvl3').removeClass().addClass('mc-card mc-card--collection mc-card--lvl3 iGrid-item mc-card--border mc-card--shadow width--all-12 hAlign--all-c'); //Border lvl3

$('.mc-card--lvl1 div').removeClass('mc-background--xmasShadow').addClass('mc-background--lvl1'); //Background White
$('.mc-card--lvl2 div').removeClass('mc-background--xmasShadow').addClass('mc-background--lvl2'); //Background Silver
$('.mc-card--lvl3 div').removeClass('mc-background--xmasShadow').addClass('mc-background--lvl3'); //Background Gold

$('.mc-card--lvl1 footer').removeClass('mc-background--xmasShade'); //Textbg
$('.mc-card--lvl2 footer').removeClass('mc-background--xmasShade');	//Textbg
$('.mc-card--lvl3 footer').removeClass('mc-background--xmasShade');	//Textbg

$('.mc-card--lvl1 footer span').removeClass().addClass('size--all-xxl mc-festiveFont mc-foreground--lvl1'); //Text Color
$('.mc-card--lvl2 footer span').removeClass().addClass('size--all-xxl mc-festiveFont mc-foreground--lvl2'); //Text Color
$('.mc-card--lvl3 footer span').removeClass().addClass('size--all-xxl mc-festiveFont mc-foreground--lvl3'); //Text Color

$('.mc-card--lvl1 div img').each(function () { $(this).attr('src', $(this).attr('src').replace('level0.svg', 'level1.svg')); }); //Kroko Lvl1
$('.mc-card--lvl2 div img').each(function () { $(this).attr('src', $(this).attr('src').replace('level0.svg', 'level2.svg')); }); //Kroko Lvl2
$('.mc-card--lvl3 div img').each(function () { $(this).attr('src', $(this).attr('src').replace('level0.svg', 'level3.svg')); }); //Kroko Lvl3

$('.ratioBox').append('<span class="mc-card-counter text--color-white text--b XXspace--h-2 XXspace--v-1"><span class="mc-card-counter-child">3</span></span>'); //Number