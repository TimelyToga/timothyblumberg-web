/**
 * Created by Tim on 02/11/16.
 */

// Delay times
var eventCounter = 0;
var delayIncrement = 200;
var delayStartingValue = 900;
var curDelay = delayStartingValue;


// Scroll trigger locations (in pixels)
var fadeLanguagePos = -1;
var fadeToolsPos = 400;
var fadePlatformsPos = 950;
var fadePersonalSkills = 1100;


// Current group color
var curGroupColor = "fff";      // Initialize to white


// Load proper locations on page load
$(window).on('load', function () {
    setTimeout(function(){
        var afterDelayYPos = window.pageYOffset;
        if(afterDelayYPos <= 100){
            $('#hint_text').css({opacity: 0.0, visibility: hidden}).animate({opacity: 1.0})
        }
    }, 2000);

    var curY = window.pageYOffset;

    if(curY > fadeLanguagePos && eventCounter == 0) {
        showSkills();
    }

    if(curY > fadeToolsPos && eventCounter == 1){
        showTools();
    }

    if(curY > fadePlatformsPos && eventCounter == 2){
        showPlatforms();
    }

    if(curY > fadePersonalSkills && eventCounter == 3){
        showPersonalSkills();
    }
});


$(window).on('scroll', function() {
    checkScrollLocation();
});

function checkScrollLocation(){
    var curY = window.pageYOffset;

    if(curY >= 1 && $("#hint_text").css('opacity') == 1){
        $("#hint_text").css({opacity: 1.0}).animate({opacity: 0.0});
    }

    if(curY > fadeLanguagePos && eventCounter == 0) {
        showSkills();
    } else if(curY > fadeToolsPos && eventCounter == 1){
        showTools();
    } else if (curY > fadePlatformsPos && eventCounter == 2){
        showPlatforms();
    }
}


function showSkills(){
    curGroupColor = '#24c3c9';
    showGroup('sg_languages', function(){
        // Animate the skill progress bars
        registerNewBar('java', .90);
        registerNewBar('python', .92);
        registerNewBar('scala', .70);
        registerNewBar('matlab', .65);
        registerNewBar('c_lang', .78);
        registerNewBar('sql', .70);
        registerNewBar('js', .70);
        registerNewBar('sml', .75);
    });
}


function showTools(){
    curGroupColor = '#d136a0';
    showGroup('sg_tools', function(){
        registerNewBar('django', .93);
        registerNewBar('flask', .75);
        registerNewBar('latex', .85);
        registerNewBar('git', .93);
        registerNewBar('spark', .45);
        registerNewBar('nodejs', .49);
        registerNewBar('react', .82);
        registerNewBar('elm', .35);
        registerNewBar('ol', .96);
    });
}

function showPlatforms(){
    curGroupColor = '#db5a0a';
    showGroup('sg_platforms', function(){
        registerNewBar('web', .94);
        registerNewBar('android', .70);
        registerNewBar('ios', .25);
    });
}

function showPersonalSkills(){
    curGroupColor = '#efe823';
    showGroup('sg_personal_skills', function(){
        registerNewBar('dcom', .87);
        registerNewBar('creativity', .95);
        registerNewBar('self_determ', .93);
    });
}


function showGroup(groupName, groupBars){
    // Tally that we have shown another group
    eventCounter++;

    // Start fadeIn
    $('#' + groupName).animate({ opacity: 1}, 600);

    // Animate the progress bars
    groupBars();

    // Reset animation delay
    curDelay = delayStartingValue;
}

/**
 * Used to create and animate a given bar
 * @param itemName
 * @param value
 */
function registerNewBar(itemName, value){
    new ProgressBar.Line('#' + itemName, getBaseBar()).animate(value);
}


function getBaseBar(){
    curDelay += delayIncrement;
    return {
        strokeWidth: 5,
        easing: 'easeOut',
        duration: curDelay,
        color: curGroupColor,
        trailColor: '#eee',
        trailWidth: 0,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
              // Text color.
              // Default: same as stroke color (options.color)
              color: '#bbb',
              position: 'relative',
              padding: '10 0 0 0',
                float: 'right',
              // margin: '22px 0 0 0',
              transform: null,
                font: '12pt'
            },
            autoStyleContainer: false
        },
        from: {
            color: '#FFEA82'
        },
        to: {
            color: '#ED6A5A'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100));
        }
    }
}
