$(document).ready(function(){
  Post.fetch().then(function(posts){
    posts.forEach(function(post){
      var view = new PostView(post);
    })
  })
})
