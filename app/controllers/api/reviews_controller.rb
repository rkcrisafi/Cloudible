class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(book_id: params[:book_id])
  end

  def create
    review = Review.new(review_params)
    review.user_id = current_user.id

    if review.save
      @reviews = Reviews.where(book_id: review.book_id)
      render :index
    else
      render json: reviews.errors.full_messages, status: 422
    end
  end


  private

  def review_params
    params_require(:review).permit(:title, :body)
  end

end
