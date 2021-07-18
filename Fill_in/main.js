

var mang_da_fill=["wonder"
,"hospital"
,"painful"
,"suppose"
,"around"
,"thumb"
,"standing"
,"bad"
,"accident"
,"worried"]

var mang_fill=[
    "fill_1"
    ,"fill_2"
    ,"fill_3"
    ,"fill_4"
    ,"fill_5"
    ,"fill_6"
    ,"fill_7"
    ,"fill_8"
    ,"fill_9"
    ,"fill_10"
]
var mang_ht_da_fill=[
    "da_fill_1"
    ,"da_fill_2"
    ,"da_fill_3"
    ,"da_fill_4"
    ,"da_fill_5"
    ,"da_fill_6"
    ,"da_fill_7"
    ,"da_fill_8"
    ,"da_fill_9"
    ,"da_fill_10"
    
]
function check(){
var diem_so=0;
var mang_kt_fill=[];
   for(i=0;i<mang_da_fill.length;i++){
       mang_kt_fill[i]=document.getElementById(mang_fill[i]).value;
   }

   for(i=0;i<mang_da_fill.length;i++){

        if(mang_kt_fill[i].toUpperCase()==mang_da_fill[i].toUpperCase()){

            document.getElementById(mang_fill[i]).setAttribute("class","true");
            document.getElementById(mang_ht_da_fill[i]).innerHTML=mang_da_fill[i];
            
            diem_so++;

        }
        else{
            document.getElementById(mang_fill[i]).value="";
        }

   }

    document.getElementById("diem_so").innerHTML="Score: "+diem_so+"/"+mang_da_fill.length;
    
}
function show(){
    for(i=0;i<mang_da_fill.length;i++){
        document.getElementById(mang_fill[i]).setAttribute("class","true");
        document.getElementById(mang_ht_da_fill[i]).innerHTML=mang_da_fill[i];
    }
}