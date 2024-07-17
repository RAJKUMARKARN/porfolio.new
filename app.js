const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry,target.classList.add('show')}
           else{
            entry.target.classList.remove('show');
           } 
        
        });
    });
const hideenElements = document.querySelectorAll('.secondsection');
hideenElements.forEach((el)=>observer.observe(el));