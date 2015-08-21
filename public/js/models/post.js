var Post = function(post_info){
  this.title = info.title;
  this.post_content = info.post_content;
  this.id = info.id;
};

Post.fetch = function(){
  var request - $.getJSON("http://localhost:3000/posts")
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
