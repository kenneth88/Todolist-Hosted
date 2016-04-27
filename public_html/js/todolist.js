$(function () {
var APPLICATION_ID = "27F891D9-CEAA-A7C4-FF38-01C51372B800",
    SECRET_KEY = "398F423D-9AF2-4ED7-FF89-1A8AE5F55A00",
    VERSION = "v1";
  
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts({title: "Todo List", content: " 1st Task:Finish the project", authorEmail:"email@email.com"});
    dataStore.save(post);
    
});

 function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}


