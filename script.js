let qrCodeImage=document.querySelector("img");
qrCodeImage.src="./images/qr_code.png";
qrCodeImage.addEventListener("click",function(){
    alert("QR Code Clicked!");
    console.log("QR Code Clicked!");
});