const messageForm=document.getElementById('messageForm');
const chatMessages=document.querySelector('.chat-messsages');
const socket=io();

socket.once('message',(message) =>{console.log(message);
outputMessage(message);
chatMessages.scrollTop=chatMessages.scrollHeight;
})

messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const msg=e.target.elements.msg.value;
    socket.emit('chatMessage',msg);
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();
});


function outputMessage(message){
const div=document.createElement('div');
div.classList.add('message');
div.innerHTML=`<p class="meta">${message.user} <span> ${message.time}</span></p>
<p class="text">
${message.text}
</p>`;
document.querySelector('.chat-messages').appendChild(div);
}