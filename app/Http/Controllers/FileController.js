'use strict'

const Database = use('Database')
const Property = use('App/Model/Property')
const AdType = use('App/Model/AdType')
const User = use('App/Model/User')
const Image = use('App/Model/Image')
const Validator = use('Validator')
const Helpers = use('Helpers')
const File = use('AdonisFilesystem/Filesystem')
var temp;

class FileController {

*show(request, response) {
  
    const id = request.param('id')
    temp = id;
    const property = yield Property.find(id)
    const images = yield Image.query().where('property_id', id).fetch()
      if (request.currentUser.id !== property.user_id) {
        response.unauthorized('Nincs jog')
        return
      }

    if (!property) {
      response.notFound('Property does not exist')
      return
    }

    yield response.sendView('fileUpload', {
      images: images.toJSON()
    })
}

* delete(request, response) {

    const id = request.param('id')
    
    const image = yield Image.find(id)
    const fs = require('fs');
    fs.unlink(image.path)
    yield image.delete()
    response.redirect('/advertisments/create/' + temp + '/upload');
  
}

 * store(request, response) {

    const id = request.currentUser.id 
    const file = request.file('file', {
        allowedExtensions: ['jpg', 'png', 'jpeg']
    })
    const image = new Image()
    const property = yield Property.find(temp)

    const filename = temp + file.clientName()

   yield file.move(Helpers.storagePath('uploads'), filename)

    if(!file.move()) {
      response.badRequest({error: file.errors()})
      return
    }
    
    const fs = require('fs');
    var data = fs.readFileSync(file.uploadPath()) 
    var base64 = new Buffer(data).toString('base64')
    var type = file.mimeType();
    var prefix = "data:" + type + ";base64,";
    
    image.property_id = temp
    image.image = (prefix + base64)
    image.path = file.uploadPath()
    yield image.save()

    response.redirect('/advertisments/create/' + temp + '/upload');  
  }

}
module.exports = FileController