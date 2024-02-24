//array from
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//get number slider
var slidesCount = sliderImages.length;

// set current slide
var curentslide =1;

// slide number string element 
var slideNumberElement = document.getElementById('slide-number');

// prev and next button
var nextbutton = document.getElementById('next');
var prevbutton = document.getElementById('prev');

//handel click on prev and next botton
nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;
//creat  the main element ul
var PaginationElement = document.createElement('ul');
//set id creat element ul
PaginationElement.setAttribute('id','Pagination-ul');
//creat list items
for(var i=1;i<=slidesCount;i++)
{
    //creat  element li
var PaginationItems = document.createElement('li');
//set id creat element li
PaginationItems.setAttribute('data-items',i);
//set items content
PaginationItems.appendChild(document.createTextNode(i));
//append list items to the main ul 
PaginationElement.appendChild(PaginationItems);

}
//add the created element ul in my page
document.getElementById('idicator').appendChild(PaginationElement);
// get the new element ul
var PaginationCreatedUl =document.getElementById('Pagination-ul');
// arry from to PaginationItems
var Paginationsbullets = Array.from(document.querySelectorAll('#Pagination-ul li'));
//loop through all Paginationsbullets items
for(var i=0;i<Paginationsbullets.length;i++)
{
    Paginationsbullets[1].onclick = function(){
        
    curentslide = parseInt(this.getAttribute('data-items'));
    
    checker();

        }

}
// call the checker function
checker();

// next slide function
function nextslide()
{
  if(nextbutton.classList.contains('disabled'))
  {
      return false;

  }
  else
  {
    curentslide++;
    checker();

  }
}
// prev slide function
function prevslide()
{
    if(prevbutton.classList.contains('disabled'))
  {
      return false;

  }
  else
  {
    curentslide--;
    checker();

  }

}

// creat the checker function 
function checker()
{
    // set slide number
    slideNumberElement.textContent = 'slide #' +(curentslide)+' of '+(slidesCount);
    // call function remove or active
    removeallactive();
    // set active class on current slide
    
    sliderImages[curentslide-1].classList.add('active');
    // set active class on current  Pagination items
    PaginationCreatedUl.children[curentslide-1].classList.add('active');
    //check if the current slide is first

    

    if(curentslide==1)
    {
       
        prevbutton.classList.add('disabled');

    }
    else
    {
       
        prevbutton.classList.remove('disabled');

    }

    //check if the current slide is last
    if(curentslide==slidesCount)
    {
       
        nextbutton.classList.add('disabled');
    }
    else
    {

        nextbutton.classList.remove('disabled');

    }
    
}

// remove all active class from images
function removeallactive() 
{
    sliderImages.forEach(function (img){
      img.classList.remove('active');
    });
    
    Paginationsbullets.forEach(function (bullent){
        bullent.classList.remove('active');
        });

    
}