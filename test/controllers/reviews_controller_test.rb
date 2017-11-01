require 'test_helper'

class ReviewsControllerTest < ActionDispatch::IntegrationTest
  test "should get rails" do
    get reviews_rails_url
    assert_response :success
  end

  test "should get g" do
    get reviews_g_url
    assert_response :success
  end

  test "should get controller" do
    get reviews_controller_url
    assert_response :success
  end

  test "should get Reviews" do
    get reviews_Reviews_url
    assert_response :success
  end

  test "should get create" do
    get reviews_create_url
    assert_response :success
  end

end
