import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [1,2,3,4,5,6,7,8,9,10];
  }
});
