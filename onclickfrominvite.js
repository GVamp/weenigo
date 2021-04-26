<script>
    function sendValue(){
    
    var instahandler=document.getElementById('handler').innerHTML; 
        alert(instahandler);
        
        window.location = '/step-1?Instahandler=' + instahandler;
    }

    document.getElementById('testbutton').onclick=sendValue;
</script>
