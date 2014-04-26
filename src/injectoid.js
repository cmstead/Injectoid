var injectoid;

(function(){
    'use strict';

    function compilePointerObject(valueSet){
        var localValues = {};

        for(var key in valueSet){
            localValues[key] = valueSet[key];
        }

        return localValues;
    }

    function buildGetter(values){
        var valueSet = compilePointerObject(values);

        return function(key){
            return (valueSet[key]) ? valueSet[key] : null;
        };
    }

    function Injectoid(){}

    Injectoid.prototype = {
        values: {},

        set: function(key, value){
            if(typeof key === 'string' && value){
                this.values[key] = value;
            } else {
                throw new Error("Key must be a string and value must be defined");
            }
        },

        build: function(){
            return {
                get: buildGetter(this.values)
            };
        },

        reset: function(){
            this.values = {};
        }
    };

    injectoid = Injectoid;
})();