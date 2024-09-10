const nam=prompt('Enter Name : ')
const txt=document.querySelector('.txt')
txt.innerText=`Current Score of ${nam} :`
const getdata=async(i)=>{
    const res=await fetch('./qs.json');
    const data=await res.json();
    return data[i];
}
const getlen=async()=>{
    const res=await fetch('./qs.json');
    const data=await res.json();
    return data.length;
}
var score=0;
var r=0;
const start=async()=>{
    const n=await getlen();
    const i=r%n;
    r++;
    const data = await getdata(i);
    console.log(data)
    const question = document.querySelector('.question');
    const label = document.querySelectorAll(' label');
    
    
    question.innerHTML=data.question;
    
    const radios = document.querySelectorAll('input[name="answer"]');
 label.forEach((e, i) => {
  e.innerText = data.options[i];
  radios[i].value = data.options[i]; 
});
    const btn=document.querySelector('.submit-btn')
    btn.addEventListener('click',async()=>{
        const ans=document.querySelector('input[name="answer"]:checked');
        console.log(ans)
        if(ans.value==data.answer){
            score++;
            show()
            start()
        }
        }
    )
    console.log(score)
}
const sc=document.querySelector('.result')
const show=()=>{
    sc.innerHTML=score
}
const reset=()=>{
    sc.innerHTML=0;
    rand=0;
    window.location.href='/'
}
