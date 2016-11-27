'use strict'

const Lucid = use('Lucid')

class Image extends Lucid {

    properties() {
        return this.belongsTo('App/Model/Property')
    }
}

module.exports = Image
