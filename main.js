function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9QGSMLpBS/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML='I can hear -'+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
     document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


      img=document.getElementById('harry1');
      img1=document.getElementById('harry2');
      img2=document.getElementById('harry3');
      img3=document.getElementById('harry4');


      if(results[0].label=="Clap"){
        img.src='harry3.gif';
        img1.src='hermoine1.jpg';
        img2.src='ron1.png';
        img3.src='ginny1.jpg';
      }

      else if(results[0].label=="Bell"){
        img.src='harry1.jpg';
        img1.src='hermoine2.gif';
        img2.src='ron1.png';
        img3.src='ginny1.jpg';
      }

      else if(results[0].label=="Snap"){
        img.src='harry1.jpg';
        img1.src='hermoine1.jpg';
        img2.src='ron2.gif';
        img3.src='ginny1.jpg';
      }

      else {
        img.src='harry1.jpg';
        img1.src='hermoine1.jpg';
        img2.src='ron1.png';
        img3.src='ginny2.gif';
      }
  
      
}

}