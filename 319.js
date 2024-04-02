<script type="text/javascript">
  window.onload+function(){
    var aDiv=document.getElementsByTagName('div');
    var i=0;
    for (i=0;i<aDiv.length;i++){
      aDiv[i].timer=null;
        aDiv[i].onmouseover=function(){
          startMove(this,300);
        }
        aDiv[i].onmouseover=function(){
          startMove(this,300);
        }
    }
  }
  var timer=null;
  function startMove(obj,iTarget){
    clearInterval(obj,timer);
    obj.timer=setInterval(function(){
      var speed=(iTarget-obj.offsetWidth)/8;
      speed=speed>0?Math.ceil(speed):Math.floor(speed);
      if(obj.offsetWidth==iTarget){
          clearInterval(timer);
        }else{
          obj.style.width=obj.offsetWidth+speed+"px";
        }
        },30);
  }
</script>
