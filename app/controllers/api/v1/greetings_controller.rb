class API::V1::Greetings < ApiController
    def index
        @randomGreetings = Greeting.order("RANDOM()").first
        respond_to do |format|
            format.json { render :json => @randomGreetings}
          end
    end
end