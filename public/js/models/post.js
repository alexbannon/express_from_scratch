var Post = function(post_info){
  this.title = post_info.title;
  this.post_content = post_info.post_content;
  this.id = post_info.id;
};

Post.fetch = function(){
  var request = $.getJSON("http://localhost:3000/posts")
  .then(function(response) {
    var posts = [];
    for(var i = 0; i < response.length; i++){
      posts.push(new Post(response[i]));
    }
    return posts;
  })
  .fail(function(response){
    console.log("failed to fetch posts");
  });
  return request;
}

Post.prototype = {
  fetchComments: function() {
    var url = "http://localhost:3000/posts/"+this.id+"/comments";
    var request = $.getJSON(url)
    .then(function(response){
      var comments = [];
      for(var i = 0; i < response.length; i++){
        comments.push(new Comment(response[i]));
      }
      return comments;
    })
    .fail(function(response){
      console.log("comments failed to load in post model");
    })
    return request;
  }
}
