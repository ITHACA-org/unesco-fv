
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".featurette");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("fade-in");
    } else {
      $(tag).removeClass("visible");
    }
  }
});
