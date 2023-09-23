<script>
    var acc = document.getElementsByClassName
    ("accordion")
    var i;

    for(i = 0; i < acc.length; i++)
    {
        acc[i].addEventListener("click",function(){
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

        var answer = this.nextElementSibling;

        if(answer.style.display === "block")
        {
          answer.style.display = "none";
        }
        else
        {
          answer.style.display = "block";
        }
      });

    }
</script>