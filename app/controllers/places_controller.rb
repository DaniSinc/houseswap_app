class PlacesController < ApplicationController
  def index
    @places = Place.where.not(latitude: nil, longitude: nil)

    # the `geocoded` scope filters only places with coordinates (latitude & longitude)
    @markers = @places.geocoded.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { place: place }),
        image_url: helpers.asset_url('pub.png'),
        # image_url: "https://res.cloudinary.com/dsjaabri5/image/upload/v1606642769/houseswap_app/noun_pub_983434_zgz8k1.png"
      }
    end
  end

  def destroy
    @place = Place.find(params[:id])
    if @place.destroy
      flash[:success] = 'Place was successfully deleted.'
      redirect_to places_url
    else
      flash[:error] = 'Something went wrong'
      redirect_to places_url
    end
  end
  
end
