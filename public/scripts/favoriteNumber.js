const $panels = $('.panel')

$panels.each(function () {
  const $panel = $(this)
  const db = $panel.find('.list-group-item').length
  $("h2").after(`(${db} kedvenc)`);
})
