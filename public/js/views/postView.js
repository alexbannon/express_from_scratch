var PostView = function(post){
  this.post = post;
  this.$el = $("<div class='post'></div>");
  this.$el.html("<div><h4>"+post.title+"</h4></div>")
  $(".post_view").append(this.$el);
}
