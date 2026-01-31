function sendAlert() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // Google Maps Link
            const locationLink = `https://www.google.com/maps?q=${lat},${lon}`;
            
            // Hindi Emergency Message
            const message = `आपातकालीन स्थिति! मैं मुश्किल में हूँ और मुझे आपकी मदद की ज़रूरत है। मेरी वर्तमान लोकेशन यहाँ है: ${locationLink}`;
            
            // Yahan apne 5 logon ke mobile number 91 ke saath dalein
            const phoneNumbers = [
                "91732302851", // Number 1
                "917557781740", // Number 2
                "917739463181", // Number 3
                "917294890958", // Number 4
                "917488810661"  // Number 5
            ];

            // Sabhi numbers par bari-bari WhatsApp kholne ke liye
            phoneNumbers.forEach((number) => {
                const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            });

            document.getElementById("msg").innerText = "⚠️ SOS अलर्ट! लोकेशन और मैसेज भेज दिया गया है।";
        });
    } else {
        alert("माफ़ कीजिये, आपके फोन में लोकेशन की सुविधा बंद है।");
    }
}
