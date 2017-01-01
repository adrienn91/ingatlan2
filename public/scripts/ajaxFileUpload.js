$('.upload-btn').on('click', function (){
    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
});

$('#upload-btn').on('change', function(){

  var files = $(this).get(0).files;

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('file', file, file.name);
    }
  Promise.resolve(
    $.ajax({
      url: '/ajax/advertisments/create/upload',
      type: 'POST',
      data: formData,
      processData: false,
      headers: { 'csrf-token': $('[name="_csrf"]').val() },
      contentType: false,
      success: function(data){
  //          if(data.success == true){ // if true (1)
  //    setTimeout(function(){// wait for 5 secs(2)
  //         location.reload(); // then reload the page.(3)
  //    }, 3000); 
  // }
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();
        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.progress-bar').text(percentComplete + '%');
            $('.progress-bar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              $('.progress-bar').html('Done');
            }

          }

        }, false);

        return xhr;
      }
    })
  )
   .then(json => {
            if (json.success) {
               $('#_row').load(location.pathname +'/ #_row')
            } else {
              console.log("Hibás adatok")
            }
          })
          .catch(err => console.log(err))
  }
});