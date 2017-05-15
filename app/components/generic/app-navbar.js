import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['app-navbar'],
  didInsertElement:function(){
    this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
  }
});
