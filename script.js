$(document).ready(function(){
    $("#inp").submit(function(event){
        search(event);
    })
    function search(event){
        var request;
        event.preventDefault();
        request=$.ajax({
            url:'https://api.openweathermap.org/data/2.5/weather',
            type:'GET',
            data:{
                q:$("#city").val(),
                appid:'ab196caa06ef303fdb34530272b81e30',
                units:'metric'
            }
        })
        request.done(function(response){
            format(response);
        })
        request.fail(function(){
            $("#city_name").text("Please enter a valid city..!")
            $("#temp").text("")
            $("#weath").text("")
            $("#icn").attr("src","")
            $("#desc").text("")
        })

        function format(jsonObj){
            var city=jsonObj.name
            var city_weather=jsonObj.weather[0].main
            var tempreture=jsonObj.main.temp
            var imgurl  = 'http://openweathermap.org/img/wn/' + jsonObj.weather[0].icon + '@2x.png';
            var desc=jsonObj.weather[0].description
            $("#city_name").text(city)
            $("#temp").text(tempreture+" celcius")
            $("#weath").text(city_weather)
            $("#desc").text(desc)
            $("#icn").attr("src",imgurl)
        }
    }
})