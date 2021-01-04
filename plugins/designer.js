import { fabric } from 'fabric'



// interface for a 'layer'
var ILayer = fabric.util.createClass(fabric.Object, {
    type: 'Layer',

    initialize: function(layer_id) {
        this.layer_id = layer_id || "";
    },

    toString: function() {
        return this.callSuper('toString') + `(layer_id) ${this.layer_id}`
    },

    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get("layer_id")
        })
    },

    
});

var UIImage = fabric.util.createClass(fabric.Image, {
    type: 'UIImage',

    initialize: function (layer_id)
    {
        this.callSuper("initialize")
        this.layer_id = layer_id || "";
    },

    toString: function() {
        return this.callSuper('toString') + `(layer_id) ${this.layer_id}`
    },

    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get("layer_id")
        })
    },

    
});


var UIText = fabric.util.createClass(fabric.Text, {
    type: 'UIText',

    initialize: function (layer_id)
    {
        this.callSuper("initialize")
        this.layer_id = layer_id || "";
    },

    toString: function() {
        return this.callSuper('toString') + ` (layer_id) ${this.layer_id}`
    },

    toObject: function() {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            layer_id: this.get("layer_id")
        })
    },

    
});


module.exports = {
    UIText, UIImage, ILayer
}


