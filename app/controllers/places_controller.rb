class PlacesController < ApplicationController
  def index
    @places = Place.where.not(latitude: nil, longitude: nil)

    # the `geocoded` scope filters only places with coordinates (latitude & longitude)
    @markers = @places.geocoded.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { place: place }),
      }
    end
  end
end
