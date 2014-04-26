/*global injectoid,jasmine,describe,beforeEach,it,expect*/

describe('injectoid', function(){
    'use strict';

    var $injectoid;

    beforeEach(function(){
        $injectoid = new injectoid();
    });

    it('should be a function', function(){
        expect(typeof injectoid).toBe('function');
    });

    describe('set', function(){

        it('should be a function', function(){
            expect(typeof $injectoid.set).toBe('function');
        });

        it('should add a key/value to set the $injectoid object', function(){
            $injectoid.set("test", {});
            expect(JSON.stringify($injectoid.values.test)).toBe('{}');
        });

    });

    describe('build', function(){

        it('should be a function', function(){
            expect(typeof $injectoid.build).toBe('function');
        });

        it('should return an object', function(){
            var $container = $injectoid.build();

            expect(typeof $container).toBe('object');
        });

    });

    describe('constructed container', function(){

        var $container;

        beforeEach(function(){
            $injectoid.set("test1", {
                test: "test1"
            });

            $injectoid.set("test2", {
                test: "test2"
            });

            $container = $injectoid.build();
        });

        it('should have a get function', function(){
            expect(typeof $container.get).toBe('function');
        });

        it('should return a value when get is called with an existing key', function(){
            var returnedValue = $container.get('test1');

            expect(typeof returnedValue).not.toBe('undefined');
        });

        it('should return null if the key does not refer to a predefined value', function(){
            var returnedValue = $container.get("badKey");

            expect(returnedValue).toBe(null);
        });

    });
});