class API::V1::GreetingsController < APIController
    def show
        @randomGreetings = Greeting.order("RANDOM()").first
        respond_to do |format|
            format.json { render :json => @randomGreetings}
          end
    end
end