const testimonials = [
    {
        name : "Bill Gates",
        text : "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
        photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7U7eszMRFjykTYTb-YzNXrTvaTkdzS6NdzZ-A8NjkUa2i4GpL527YqqB0&s=10",
    },
    {
        name : "Steve Jobs",
        text : "Every Downfall is the best chance for the greatest comeback",
        photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpav1iIAD5EfBHc-QxBecROMSg5a8jouIN5Q&s",
    },
    {
        name : "Mark Zuckerberg",
        text : "Don't let anyone tell you that you can't do something",
        photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlc7JMKLHTLjICPl2dW9fE8ihvrcmPAvjclaLWqjkaRPFZHD85wudHIhs&s=10",
    },
    ];
    
    const nameEl = document.querySelector(".name");
    const textEl = document.querySelector(".text");
    const urlEl = document.querySelector("img");
    
    let index = 0;
    
    display();
    
    function display(){
        const {name , text , photoURL} = testimonials[index];
          nameEl.innerText = name;
          textEl.innerText = text;
          urlEl.src = photoURL;
        index++;
        
        if(index===testimonials.length)
        {
            index = 0;
        }
    
    setTimeout(function a() {
        display();
    },3000);
    
    }