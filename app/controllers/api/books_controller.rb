class Api::BooksController < ApplicationController

  def index
    if params[:user_id]
      @user_library = true
      @books = current_user.books
    else
      @books = Book.all
    end
    render :index
  end

  def show
    @book = Book.find(params[:id]);
  end


end
