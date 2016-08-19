$(function(){
  $('#vmap').vectorMap({
    map: 'world_mill',
    backgroundColor: 'rgba(0,0,0,0)',
    regionStyle: {
      initial: {
        fill: '#a8a8a8',
        "fill-opacity": 1,
        stroke: '#000',
        "stroke-width": 1,
        "stroke-opacity": 1
      },
      hover: {
        fill: "#c9dfaf",
        "fill-opacity": 0.8,
        cursor: 'default'
      }
    },
    series: {
      regions: [{
        values: suicides,
        scale: ['#eff3ff', '#08519c'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionTipShow: function(e, el, code){
      el.html(el.html()+':<br/>Suicides per 100K Residents: ' + suicides[code] + '</br>' + 'Psychiatrists per 100K Residents: ' + psychiatrists[code]);
    }
  });
});