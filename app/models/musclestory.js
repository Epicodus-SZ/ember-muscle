import DS from 'ember-data';

export default DS.Model.extend({
  imgurl: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  storytext: DS.attr()
});
