# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller for the model Blog Posts with an index method.
class BlogPostsController < ApplicationController
  def index
    # ---2) This is a query search for all instances of blog posts.
    @posts = BlogPost.all
  end

  # ---3) This is a show method which contains a query search, allowing a parameter of primary id to be passed to display one instance of blog post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is a new method which creates a new instance of a blog post, but does not add it to the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This creates the blog post in the database, and is passed the method of blog_post_params (as defined at the bottom of this document). If created correctly the user will be redirected to the created post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This finds an instance of blog post by its primary id and allows it to be edited
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method is used on the instance of blog post found on line 40 above. Like the create method, it is passed the blog_post_params method and will redirect to the instance of this post if updated correctly
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) When an instance of a post is destroyed, the page will redirect to the index
      redirect_to blog_posts_path
    end
  end

  # ---9) Private methods can be accessed from within the controller document only
  private
  def blog_post_params
    # ---10) This is the blog_post_params method mentioned above, and it uses strong params which must receive a blog post and will allow the user to change the blog posts titles and contents with this method (but not other attributes).
    params.require(:blog_post).permit(:title, :content)
  end
end
