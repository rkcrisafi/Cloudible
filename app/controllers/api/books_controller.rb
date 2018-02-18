class Api::BooksController < ApplicationController

  def index
    if params[:user_id]
      if current_user
        @user_library = true
        @books = current_user.books
      end
      @books = User.find(params[:user_id]).books
    else
      @books = Book.all
    end
    render :index
  end

  def show
    @book = Book.find(params[:id]);
  end


end
