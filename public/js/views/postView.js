var PostView = function(post){
  this.post = post;
  this.$el = $("<div class='post'></div>");
  this.render();
  $(".post_view").append(this.$el);
}

PostView.prototype = {
  render: function() {
    var self = this;

    self.$el.html(self.postTemplate(self.post));

    var titleEdit = self.$el.find(".post_title");
    var contentEdit = self.$el.find(".post_content");
    var commentButton = self.$el.find(".comment_button");
    var commentsDiv = self.$el.find(".comments");

    commentsDiv.hide();

    titleEdit.on("click", function(){
      console.log("title click");
    });

    contentEdit.on("click", function() {
      console.log("content click");
    });

    commentButton.on("click", function() {
      commentsDiv.toggle();
      self.post.fetchComments().then(function(comments){
        console.log(comments);
        comments.forEach(function(comment){
          self.$el.append("<p>"+comment.comment_content+"</p>")
        })
      })
      console.log("comment click");
    });

  },
  postTemplate: function(post) {
    var html = $("<div class='post'>");
    html.append("<h4 class='post_title'>"+ post.title + "</h4>");
    html.append("<p class='post_content'>"+post.post_content+"</p>");
    html.append("<button class='comment_button'>View Comments</button>")
    html.append("<div class = 'comments'></div>")
    return(html);
  }
}
