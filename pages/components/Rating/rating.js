const ratingStars = document.querySelectorAll(".rating-star-input");

ratingStars.forEach((item, id) =>{
    item.addEventListener("change", () => checkAllPreviousStars(id))
})

function checkAllPreviousStars (idx){
    if(ratingStars[idx].checked){
        for (let i=idx - 1; i >= 0 ; i--)
        {
            ratingStars[i].checked = true;
        }
    }
    else{
        for(let i = idx + 1; i < ratingStars.length ; i++)
        {
            ratingStars[i].checked = false;        
        }
    }
} 

