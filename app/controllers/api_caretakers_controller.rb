class ApiCaretakersController < ApplicationController

  def get_caretaker
    puts 'ApiCaretakersController.get_caretaker'
    @caretaker = Caretaker.find(params[:id])
    json_response(@caretaker)
  end

  def get_caretakers
    puts 'ApiCaretakersController.get_caretakers'
    @caretakers = Caretaker.all
    json_response(@caretakers)
  end

  def create_caretaker
    puts 'ApiCaretakersController.create_caretaker'
  end

  def update_caretaker
    puts 'ApiCaretakersController.update_caretaker'
  end

  def delete_caretaker
    puts 'ApiCaretakersController.delete_caretaker'
  end

end