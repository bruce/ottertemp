(function() {

  function otters(temp) {
    if (temp <= 90) {
      return 0;
    } else if (temp > 90 && temp <= 95) {
      return temp - 90;
    } else {
      return 5 + ((temp - 95) * 2);
    }
  }

  $(document).ready(function() {
    var body = $('body');
    var target = $('#count');
    $.ajax({
      url : "http://api.wunderground.com/api/957797c028de3746/geolookup/conditions/q/OR/Portland.json",
      dataType : "jsonp",
      success : function(parsed_json) {
        var location = parsed_json['location']['city'];
        var temp =
              parseFloat(parsed_json['current_observation']['temp_f']);
        var amount = Math.round(otters(temp));
        if (amount) {
          body.addClass('otter');
        } else {
          body.addClass('no-otter');
        }
        target.attr('title', temp);
        target.html(amount);
      }
    });

  });

})();
