require 'test_helper'

class CaretakersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @caretaker = caretakers(:one)
  end

  test "should get index" do
    get caretakers_url, as: :json
    assert_response :success
  end

  test "should create caretaker" do
    assert_difference('Caretaker.count') do
      post caretakers_url, params: { caretaker: { service_id: @caretaker.service_id } }, as: :json
    end

    assert_response 201
  end

  test "should show caretaker" do
    get caretaker_url(@caretaker), as: :json
    assert_response :success
  end

  test "should update caretaker" do
    patch caretaker_url(@caretaker), params: { caretaker: { service_id: @caretaker.service_id } }, as: :json
    assert_response 200
  end

  test "should destroy caretaker" do
    assert_difference('Caretaker.count', -1) do
      delete caretaker_url(@caretaker), as: :json
    end

    assert_response 204
  end
end
