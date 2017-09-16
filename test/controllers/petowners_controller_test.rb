require 'test_helper'

class PetownersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @petowner = petowners(:one)
  end

  test "should get index" do
    get petowners_url, as: :json
    assert_response :success
  end

  test "should create petowner" do
    assert_difference('Petowner.count') do
      post petowners_url, params: { petowner: { pet_id: @petowner.pet_id } }, as: :json
    end

    assert_response 201
  end

  test "should show petowner" do
    get petowner_url(@petowner), as: :json
    assert_response :success
  end

  test "should update petowner" do
    patch petowner_url(@petowner), params: { petowner: { pet_id: @petowner.pet_id } }, as: :json
    assert_response 200
  end

  test "should destroy petowner" do
    assert_difference('Petowner.count', -1) do
      delete petowner_url(@petowner), as: :json
    end

    assert_response 204
  end
end
