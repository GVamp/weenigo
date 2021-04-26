<script>
    function sendValue(){
    
    var promocode=document.getElementById('get_promo_code').innerHTML; 
        alert(promocode);
        
        window.location = '/step-1?Instahandler=' + promocode;
    }

    document.getElementById('testbutton').onclick=sendValue;
</script>
