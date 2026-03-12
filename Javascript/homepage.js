
let allCardsData = [];
const loadCard=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then ((res)=>res.json())
    .then((all)=>{
       allCardsData= all.data;   
      displayCard(all.data);

            
    }
      
      
      )

}

const displayCard=(cards)=>{
  spinner(true);
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

<div onclick="modalData(${card.id})" class="card w-11/12 mx-auto  min-h-[400px] bg-[#ffffff]  shadow-md  border-t-4 rounded-md" style="border-top-color:${border};">
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
                    <span>${card.createdAt}</span>
                   </div>

               </div>



`


container.append(Div);

}







}}

// filtering

document.getElementById("All").addEventListener("click",()=>{
  spinner(false);
 setTimeout(()=>displayCard(allCardsData), 300);

});
document.getElementById("Open").addEventListener("click",()=>{
   
  spinner(false);
  const openData=allCardsData.filter(card=>card.status=="open");
   setTimeout(()=>displayCard(openData), 300);


});
document.getElementById("Close").addEventListener("click",()=>{
   spinner(false);
  const closeData=allCardsData.filter(card=>card.status=="closed");
   setTimeout(()=>displayCard(closeData), 300);


});






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


// Spinner 

const spinner=(Status)=>{

if(Status==true){
document.getElementById("spinner").classList.add("hidden");
document.getElementById("allCard").classList.remove("hidden");

}
else{
document.getElementById("spinner").classList.remove("hidden");
document.getElementById("allCard").classList.add("hidden");

}



}




// ModalDisplay

const modalData=async(id)=>{
const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
const res=await fetch(url);
const details=await res.json();

if(details && details.data){
  displayModal(details.data);
}




}


// "status": "success",
// "message": "Issue fetched successfully",
// "data": {
// "id": 33,
// "title": "Add bulk operations support",
// "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
// "status": "open",
// "labels": [
// "enhancement"
// ],
// "priority": "low",
// "author": "bulk_barry",
// "assignee": "",
// "createdAt": "2024-02-02T10:00:00Z",
// "updatedAt": "2024-02-02T10:00:00Z"
// }
// }



 const displayModal=(card)=>{




let priorityBG="";
let priorityTxt="";

if(card.priority==="high"){
    priorityBG="#EF4444";
   priorityTxt="#ffffff";  
}
else if(card.priority==="medium"){
    priorityBG="#F59E0B";
   priorityTxt="#ffffff";  
}
else{
    priorityBG="#9CA3AF";
   priorityTxt="#ffffff";  
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
}



let Bg="";
let Txt="";
if(card.status=="open"){
    Bg="#00A96E";
    Txt="#ffffff"

}
else {
    Bg="#A855F7";
    Txt="#ffffff"

}





const detailCard=document.getElementById("modalcontainer");
detailCard.innerHTML=`
   <div class="modal-box w-11/12 max-w-3xl  space-y-2">
    <h3 class="text-lg font-bold">${card.title}</h3>
      <div class="modalstatus flex  space-x-2 items-center">
         <span class="px-2 py-1  text-sm rounded-xl" style="Background-color:${Bg};color:${Txt};">${card.status=="open"?"Opened":"Closed"}</span>
            <ul class="flex items-center gray space-x-3" >
              
              <li class="flex   items-center space-x-2"><div class="w-[4px] h-[4px] bg-[#64748B] rounded-full"></div> <span>Opened by ${card.assignee?card.assignee:"(not mentioned)"}</span></li>
              <li class="flex   items-center space-x-2"><div class="w-[4px] h-[4px] bg-[#64748B] rounded-full"></div> <span>${card.createdAt}</span></li>

          
            </ul>

      </div>

        <div>
                <span class="px-2 py-1  text-sm rounded-xl">  ${Label}</span>
                 
            </div>


    <p class="py-4 gray">${card.description}</p>
   
   <div class="modalFooter grid grid-cols-2 bg-[#F8FAFC] rounded-md p-4">
    <div>
      <p class="gray">Assignee:</p>
      <p>${card.assignee? card.assignee:"Not Mentioned"}</p>
    </div>
    <div>
      <p class="gray">Priority:</p>
      <span class="px-2 py-1  text-sm rounded-xl" style="background:${priorityBG};color:${priorityTxt};">${card.priority}</span>
    </div>
   </div>
   
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn btn-primary border-none">Close</button>
      </form>
    </div>
  </div>

`;

 document.getElementById("my_modal_4").showModal();
 };