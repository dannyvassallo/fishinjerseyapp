if(Meteor.isClient){
  Template.layout.helpers({
    'posts' : function(){
      Meteor.call('getPosts', function(err, results){
        Session.set('posts', JSON.parse(results.content));
      });
      return Session.get('posts');
    }
  });
}