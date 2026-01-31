function sendAlert() {
    // Screen par turant message dikhayein
    document.getElementById("msg").innerText = "⌛ लोकेशन निकाली जा रही है और मैसेज भेजा जा रहा है...";

    if (navigator.geolocation) {
        // 'enableHighAccuracy' se location bilkul sahi aayegi
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // 1. Google Maps ka live link taiyar karein
            const locationLink = `https://www.google.com/maps?q=${lat},${lon}`;
            
            // 2. Hindi Message aur Location Link ko ek saath jodein
            const fullMessage = `आपातकालीन स्थिति! मैं खतरे में हूँ, कृपया मेरी मदद करें। मेरी लाइव लोकेशन यहाँ है: ${locationLink}`;
            
            // 3. Aapke 4 Numbers (Inhe 91 ke saath sahi se bharein)
            const phoneNumbers = [
                "917323028513", 
                "917739463181", 
                "917557781740", 
                "917488810661" 
                
            ];

            // 4. Loop chala kar sabhi ko ek saath bhejrein
            phoneNumbers.forEach((number) => {
                if(number.length > 5) { // Check ki number khali na ho
                    const url = `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`;
                    window.open(url, '_blank');
                }
            });

            document.getElementById("msg").innerText = "⚠️ SOS अलर्ट! लोकेशन और मैसेज भेज दिया गया है।";
        }, function(error) {
            alert("लोकेशन नहीं मिल पा रही है। कृपया GPS ऑन करें।");
            document.getElementById("msg").innerText = "❌ एरर: लोकेशन परमिशन नहीं मिली।";
        }, { enableHighAccuracy: true });
    } else {
        alert("आपका ब्राउज़र लोकेशन सपोर्ट नहीं करता।");
    }
}

