class Api::ReviewsController < ApplicationController

  def index
    if params[:book_id]
      @reviews = Book.find(params[:book_id]).reviews
    elsif params[:user_id]
      @reviews = User.find(params[:user_id]).reviews
    end
  end

  def show
    # @review = Review.where(rating_id: params[:rating_id])
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.rating_id = params[:rating_id]

    if @review.save
      # @review = Review.where(rating_id: review.rating_id)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:title, :body)
  end

end
