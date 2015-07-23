BrowserPolicy.framing.allowAll()

Meteor.methods({
  'getPosts': function(){    
    return Meteor.http.call('GET', 'http://fishinjersey.com/wp-json/posts')
    }
});