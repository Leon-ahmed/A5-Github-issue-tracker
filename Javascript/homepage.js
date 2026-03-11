const loadCard=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then ((res)=>res.json())
    .then((all)=>displayCard(all.data))

}

const displayCard=(cards)=>{
const container=document.getElementById("allCard");
container.innerHTML=" ";
const cardCount=document.getElementById("allCount");
cardCount.innerText=cards.length;

for(let card of cards){
const Div=document.createElement("div");

{
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// },

let border=card.status==="open"?"#00A96E":"#A855F7";
let Clogo=card.status==="open"?"./assets/Open-Status.png":"./assets/Closed- Status .png";

let priorityBG="";
let priorityTxt="";

if(card.priority==="high"){
    priorityBG="#FEECEC";
   priorityTxt="#EF4444";  
}
else if(card.priority==="medium"){
    priorityBG="#FFF6D1";
   priorityTxt="#F59E0B";  
}
else{
    priorityBG="#EEEFF2";
   priorityTxt="#9CA3AF";  
}


let Label="";
for(let label of card.labels){
let bg="";
let border=""
let txt="";
let icon="";

  if (label === "bug") {
    bg = "#FEECEC";
    border=""
    txt = "#EF4444";
    icon='<i class="fa-solid fa-bug"></i>'
  }
  else if (label === "documentation"){
   bg = "#E0F2FE";
    txt = "#0284C7";
    border = "#0284C7";
    icon='<i class="fa-brands fa-readme"></i>'
  }
  else if (label === "enhancement") {
    bg = "#DEFCE8";
    border="#BBF7D0"
    txt = "#00A96E";
    icon='<i class="fa-solid fa-hand-sparkles"></i>'
  }

   else if (label === "help wanted"){
    bg = "#FFF8DB";
    border="FDE68A"
    txt = "#D97706";
    icon='<i class="fa-brands fa-chrome"></i>'
  }
   else{
    bg = "#FFF8DB";
    border="#EAB308"
    txt = "#EAB308";
    icon='<i class="fa-solid fa-dna"></i>'
  }


Label += `
<span class="rounded-xl px-3 border inline-flex items-center gap-1"
      style="background:${bg}; color:${txt}; border:1px solid ${border};">
      ${icon} ${label}
</span>
`;


};



Div.innerHTML=`

<div class="card w-11/12 mx-auto  min-h-[400px] bg-[#ffffff]  shadow-md  border-t-4 rounded-md  "  style="border-top-color:${border};">
                   <div class="flex justify-between p-4 ">
                    <img src="${Clogo}" alt="">
                    <div>
                        <span class="rounded-xl w-[90px] px-3 text-center"   style="background:${priorityBG};color:${priorityTxt};">${card.priority}</span>
                    </div>
                   </div>

                   <div class="p-4">
                    <h3 class="font-semibold">${card.title}</h3>
                    <p class="gray">${card.description}</p>
                   </div>
                   
                   <div class="space-x-2 space-y-2 mb-6 p-4">
                     ${Label}
                   </div>
                   <hr class="border-1  border-[#E4E4E7]">

                   <div class="gray   p-4">
                    <p>${card.assignee ?card.assignee :"Not Mentioned" }</p>
                    <span>${card.updatedAt}</span>
                   </div>

               </div>



`


container.append(Div);

}






}}
loadCard();



// Button Toggle
function bToggle(Id){
const ids=["All","Open","Close"];

for(const id of ids){
  const button=document.getElementById(id);
  if(!button) continue;

  if(id===Id){
    button.classList.add("Active");
    button.classList.remove("Remove");
  }
  else{
    button.classList.remove("Active");
    button.classList.add("Remove");
  }
}
};