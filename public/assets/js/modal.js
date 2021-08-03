jQuery(document).ready(function($){
  $("#myModal").on("hidden.bs.modal",function(){
    $("#iframeYoutube").attr("src","#");
  })

  $("#myModal").on("show.bs.modal",function(){
    $("#iframeYoutube").attr("src","https://www.youtube.com/embed/c2XBu2vJDZM");
  })
  
})

function changeVideo(vId){
  var iframe=document.getElementById("iframeYoutube");
  iframe.src="https://www.youtube.com/embed/"+vId;

  $("#myModal").modal("show");
}