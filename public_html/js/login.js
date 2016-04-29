$(function () {
var APPLICATION_ID = "27F891D9-CEAA-A7C4-FF38-01C51372B800",
    SECRET_KEY = "398F423D-9AF2-4ED7-FF89-1A8AE5F55A00",
    VERSION = "v1";
  
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
    
     $(document).on('submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
        
      Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
    });
});

 function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}



