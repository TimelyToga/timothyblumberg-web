/**
 * Created by Tim on 02/11/16.
 */

// Delay times
var eventCounter = 0;
var delayIncrement = 200;
var delayStartingValue = 900;
var curDelay = delayStartingValue;


// Scroll trigger locations (in pixels)
var fadeLanguagePos = 160;
var fadeToolsPos = 600;
var fadePlatformsPos = 900;


// Current group color
var curGroupColor = "fff";      // Initialize to white


// Load proper locations on page load
$(window).on('load', function () {
    setTimeout(function(){
        var afterDelayYPos = window.pageYOffset;
        if(afterDelayYPos <= 100){
            $('#hint_text').fadeIn()
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
});


$(window).on('scroll', function() {
    checkScrollLocation();
});

function checkScrollLocation(){
    var curY = window.pageYOffset;

    if(curY >= 1){
        $("#hint_text").fadeOut(400)
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
        registerNewBar('java', .85);
        registerNewBar('python', .90);
        registerNewBar('scala', .70);
        registerNewBar('matlab', .60);
        registerNewBar('c_lang', .30);
        registerNewBar('sql', .65);
        registerNewBar('js', .70);
    });
}


function showTools(){
    curGroupColor = '#d136a0';
    showGroup('sg_tools', function(){
        registerNewBar('django', .92);
        registerNewBar('flask', .75);
        registerNewBar('latex', .70);
        registerNewBar('git', .93);
        registerNewBar('spark', .45);
    });
}

function showPlatforms(){
    curGroupColor = '#db5a0a';
    showGroup('sg_platforms', function(){
        registerNewBar('android', .73);
        registerNewBar('web', .68);
        registerNewBar('ios', .25);
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