$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const birthday = $("#birthday").val();
    const favcolor = $("#favcolor").val();
    const favpet = $("#favpet").val();
    const cokepepsi = $("input:radio[name=drink]:checked").val();

    $("p.name-result").text(name);
    $("p.birthday-result").text(birthday);
    $("p.favcolor-result").text(favcolor);
    $("p.favpet-result").text(favpet);
    $("p.cokepepsi-result").text(cokepepsi);
  });

});