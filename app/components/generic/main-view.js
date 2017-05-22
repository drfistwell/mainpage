import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['main-view'],
  didInsertElement:function(){
    $('.parallax').parallax();
  }
});
