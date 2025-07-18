function analyzeText() {
      const text = document.getElementById("inputText").value;

      const vowels = text.match(/[aeiouAEIOU]/g) || [];
      const consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
      const spaces = text.match(/ /g) || [];

      document.getElementById("charCount").textContent = text.length;
      document.getElementById("vowelCount").textContent = vowels.length;
      document.getElementById("consonantCount").textContent = consonants.length;
      document.getElementById("spaceCount").textContent = spaces.length;
    }