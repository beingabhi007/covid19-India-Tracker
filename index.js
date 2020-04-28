const url= 'https://api.covid19api.com/live/country/india/status/confirmed'; 

async function myData(){

    const response=await fetch(url); 
    const data= await response.json();  
    console.log(data[1]);
    const conf= data[data.length-1].Confirmed; 
    const act= data[data.length-1].Active; 
    const rec=data[data.length-1].Recovered; 
    const dea=data[data.length-1].Deaths; 
    

    document.getElementById('text2').textContent=conf; 
    document.getElementById('text4').textContent=act; 
    document.getElementById('text6').textContent=rec; 
    document.getElementById('text8').textContent=dea;
    
} 

myData();  
setInterval(myData, 500);
