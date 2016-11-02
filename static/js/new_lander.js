/**
 * Created by Tim on 02/11/16.
 */

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

window.onload = function onLoad() {;
    // $('#java').fadeIn(1000);
    // bar.animate(.85);
    // new ProgressBar.Line('#python', baseBar).animate(value).delay(200);
    // $('#java').fadeIn(1000);
    registerNewBar('java', .85);
    registerNewBar('python', .90);
    registerNewBar('scala', .70);
    registerNewBar('matlab', .60);
    // new ProgressBar.Line('#java', baseBar).delay(100).animate(.85);
    // new ProgressBar.Line('#python', baseBar).animate(.90);
    // new ProgressBar.Line('#scala', baseBar).animate(.60);
    // new ProgressBar.Line('#matlab', baseBar).animate(.40);

    // bar.animate(.73);
}

var delayIncrement = 200;
var curDelay = 700;

function registerNewBar(itemName, value){
    // curDelay += delayIncrement;
    // setTimeout(function(){
    var newBar = new ProgressBar.Line('#' + itemName, getBaseBar()).animate(value);
    // }, curDelay);

}

function getBaseBar(){
    curDelay += delayIncrement;
    return {
        strokeWidth: 4,
        easing: 'easeOut',
        duration: curDelay,
        color: '#07b25c',
        trailColor: '#eee',
        trailWidth: 0,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
              // Text color.
              // Default: same as stroke color (options.color)
              color: '#bbb',
              position: 'absolute',
              right: '0',
              top: '40px',
              padding: 0,
              // margin: 10,
              transform: null
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