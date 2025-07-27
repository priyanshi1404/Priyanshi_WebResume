// $(document).ready(function () {
//   $("#main-nav a").click(function () {
//     $("section").removeClass("show");
//     var target = $(this).attr("href");
//     $(target).addClass("show");
//   });
// });

// Ensure the DOM is fully loaded
$(document).ready(function () {
  // Section switching
  $("#main-nav a").click(function (e) {
    e.preventDefault();
    $("section").removeClass("show");
    var target = $(this).attr("href");
    $(target).addClass("show");
  });

  // See More button logic
  $(".see-more-btn").click(function (e) {
    e.preventDefault();

    // Get data attributes from clicked button
    const title = $(this).data("title");
    const description = $(this).data("description");
    const github = $(this).data("github");
    const live = $(this).data("live");

    // Set content in popup
    $("#popupTitle").text(title);
    $("#popupDescription").text(description);
    $("#popupGithub").attr("href", github);
    $("#popupLive").attr("href", live);

    // Show popup
    $("#projectOverlay").fadeIn();
    $("#projectPopup").fadeIn();
  });

  // Close button handler
  $(".close-btn, #projectOverlay").click(function () {
    $("#projectOverlay").fadeOut();
    $("#projectPopup").fadeOut();
  });
});
