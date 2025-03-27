// Mapping of English transliterations to Amharic letters
const amharicMap = {
  // Case-sensitive mappings (uppercase keys)
  'He': 'ኀ', 'Hu': 'ኁ', 'Hi': 'ኂ', 'Ha': 'ኃ', 'Hee': 'ኄ', 'H': 'ኅ', 'Ho': 'ኆ',
  'Te': 'ጠ', 'Tu': 'ጡ', 'Ti': 'ጢ', 'Ta': 'ጣ', 'Tee': 'ጤ', 'T': 'ጥ', 'To': 'ጦ',
  
  // Case-insensitive mappings (lowercase keys)
  'a': 'አ', 'ea': 'ኧ',
  'A': 'አ', 'Au': 'ኡ', 'Ai': 'ኢ', 'Aa': 'ኣ', 'E': 'ኤ', 'e': 'እ', 'O': 'ኦ',
  'xa': 'ዐ', 'xu': 'ዑ', 'xi': 'ዒ', 'xaa': 'ዓ', 'xee': 'ዔ', 'x': 'ዕ', 'xo': 'ዖ',
  'bua': 'ቧ', 'dua': 'ዷ', 'qua': 'ቋ', 'tua': 'ቷ', 'mua': 'ሟ', 'nua': 'ኗ', 'gnua': 'ኟ', 'rua': 'ሯ', 'sua': 'ሷ', 'shua': 'ሿ', 
  'cua': 'ቿ', 'pua': 'ፗ', 'zua': 'ዟ', 'vua': 'ቯ', 'kua': 'ኳ', 'tsua': 'ጷ', 'gua': 'ጓ', 'lua': 'ሏ', 've': 'ቨ', 'vu': 'ቩ', 
  'vi': 'ቪ', 'va': 'ቫ', 'vee': 'ቬ', 'v': 'ቭ', 'vo': 'ቮ', 'pe': 'ፐ', 'pu': 'ፑ', 'pi': 'ፒ', 'pa': 'ፓ', 'pee': 'ፔ', 'p': 'ፕ', 
  'po': 'ፖ', 'jua': 'ጇ', 'hua': 'ኋ', 'zhe': 'ዠ', 'zhu': 'ዡ', 'zhi': 'ዢ', 'zha': 'ዣ', 'zhee': 'ዤ', 'zh': 'ዥ', 'zho': 'ዦ', 'zhua': 'ዧ',
  'ha': 'ሀ', 'hu': 'ሁ', 'hi': 'ሂ', 'he': 'ሄ', 'h': 'ህ', 'ho': 'ሆ',
  'le': 'ለ', 'lu': 'ሉ', 'li': 'ሊ', 'la': 'ላ', 'lee': 'ሌ', 'l': 'ል', 'lo': 'ሎ',
  'me': 'መ', 'mu': 'ሙ', 'mi': 'ሚ', 'ma': 'ማ', 'mee': 'ሜ', 'm': 'ም', 'mo': 'ሞ',
  're': 'ረ', 'ru': 'ሩ', 'ri': 'ሪ', 'ra': 'ራ', 'ree': 'ሬ', 'r': 'ር', 'ro': 'ሮ',
  'se': 'ሰ', 'su': 'ሱ', 'si': 'ሲ', 'sa': 'ሳ', 'see': 'ሴ', 's': 'ስ', 'so': 'ሶ',
  'she': 'ሸ', 'shu': 'ሹ', 'shi': 'ሺ', 'sha': 'ሻ', 'shee': 'ሼ', 'sh': 'ሽ', 'sho': 'ሾ',
  'qe': 'ቀ', 'qu': 'ቁ', 'qi': 'ቂ', 'qa': 'ቃ', 'qee': 'ቄ', 'q': 'ቅ', 'qo': 'ቆ',
  'be': 'በ', 'bu': 'ቡ', 'bi': 'ቢ', 'ba': 'ባ', 'bee': 'ቤ', 'b': 'ብ', 'bo': 'ቦ',
  'te': 'ተ', 'tu': 'ቱ', 'ti': 'ቲ', 'ta': 'ታ', 'tee': 'ቴ', 't': 'ት', 'to': 'ቶ',
  'che': 'ቸ', 'chu': 'ቹ', 'chi': 'ቺ', 'cha': 'ቻ', 'chee': 'ቼ', 'ch': 'ች', 'cho': 'ቾ',
  'ne': 'ነ', 'nu': 'ኑ', 'ni': 'ኒ', 'na': 'ና', 'nee': 'ኔ', 'n': 'ን', 'no': 'ኖ',
  'gne': 'ኘ', 'gnu': 'ኙ', 'gni': 'ኚ', 'gna': 'ኛ', 'gnee': 'ኜ', 'gn': 'ኝ', 'gno': 'ኞ',
  'ke': 'ከ', 'ku': 'ኩ', 'ki': 'ኪ', 'ka': 'ካ', 'kee': 'ኬ', 'k': 'ክ', 'ko': 'ኮ',
  'we': 'ወ', 'wu': 'ዉ', 'wi': 'ዊ', 'wa': 'ዋ', 'wee': 'ዌ', 'w': 'ው', 'wo': 'ዎ',
  'ze': 'ዘ', 'zu': 'ዙ', 'zi': 'ዚ', 'za': 'ዛ', 'zee': 'ዜ', 'z': 'ዝ', 'zo': 'ዞ',
  'ye': 'የ', 'yu': 'ዩ', 'yi': 'ዪ', 'ya': 'ያ', 'yee': 'ዬ', 'y': 'ይ', 'yo': 'ዮ',
  'de': 'ደ', 'du': 'ዱ', 'di': 'ዲ', 'da': 'ዳ', 'dee': 'ዴ', 'd': 'ድ', 'do': 'ዶ',
  'je': 'ጀ', 'ju': 'ጁ', 'ji': 'ጂ', 'ja': 'ጃ', 'jee': 'ጄ', 'j': 'ጅ', 'jo': 'ጆ',
  'ge': 'ገ', 'gu': 'ጉ', 'gi': 'ጊ', 'ga': 'ጋ', 'gee': 'ጌ', 'g': 'ግ', 'go': 'ጎ',
  'ce': 'ጨ', 'cu': 'ጩ', 'ci': 'ጪ', 'ca': 'ጫ', 'cee': 'ጬ', 'c': 'ጭ', 'co': 'ጮ',
  'tse': 'ፀ', 'tsu': 'ፁ', 'tsi': 'ፂ', 'tsa': 'ፃ', 'tsee': 'ፄ', 'ts': 'ፅ', 'tso': 'ፆ',
  'fe': 'ፈ', 'fu': 'ፉ', 'fi': 'ፊ', 'fa': 'ፋ', 'fee': 'ፌ', 'f': 'ፍ', 'fo': 'ፎ'
};

// ===== DOM ELEMENTS =====
const input = document.getElementById('input');
const fileInput = document.getElementById('fileInput');
const fileBtn = document.getElementById('file-btn');
const suggestionsDiv = document.getElementById('suggestions');
const previewDiv = document.getElementById('transliteration-preview');
const floatCopyBtn = document.getElementById('float-copy-btn');
const floatSaveBtn = document.getElementById('float-save-btn');
const notesList = document.getElementById('notes-list');
const toast = document.getElementById('toast');
const themeSwitch = document.getElementById('theme-switch');

// ===== STATE =====
let savedWords = [];
let jsonWords = [];
let notes = [];
let editingNoteIndex = null;

// ===== THEME FUNCTIONS =====
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  themeSwitch.checked = savedTheme === 'dark';
}

function toggleTheme() {
  const isDark = themeSwitch.checked;
  document.body.classList.toggle('dark-theme', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ===== INITIALIZATION (Using safer JSON.parse approach) =====
function initializeData() {
  savedWords = JSON.parse(localStorage.getItem('savedWords') || '[]');
jsonWords = JSON.parse(localStorage.getItem('jsonWords') || '[]');
notes = JSON.parse(localStorage.getItem('notes') || '[]');
  
  const savedText = localStorage.getItem('currentInputText') || '';
  if (savedText) {
    input.value = savedText;
    updatePreview(savedText);
  }
}

// ===== CORE FUNCTIONS =====
function convertToAmharic(text) {
  const segments = text.split(/(\*.*?\*)/);
  let result = '';
  
  segments.forEach(segment => {
    if (segment.startsWith('*') && segment.endsWith('*')) {
      result += segment.slice(1, -1);
    } else {
      let converted = segment;
      
      // Case-sensitive conversions
      Object.keys(amharicMap)
        .filter(key => key !== key.toLowerCase())
        .sort((a, b) => b.length - a.length)
        .forEach(key => {
          converted = converted.replace(new RegExp(key, 'g'), amharicMap[key]);
        });

      // Case-insensitive conversions
      Object.keys(amharicMap)
        .filter(key => key === key.toLowerCase())
        .sort((a, b) => b.length - a.length)
        .forEach(key => {
          converted = converted.replace(new RegExp(key, 'gi'), amharicMap[key]);
        });
      
      result += converted;
    }
  });
  
  return result;
}

function updatePreview(text) {
  const converted = convertToAmharic(text);
  previewDiv.innerHTML = converted.replace(/\*(.*?)\*/g, '<span class="protected-text">$1</span>');
  return converted;
}

// ===== AUTO-SAVE NEW WORDS =====
function saveNewWord(amharicText) {
  const words = amharicText
    .replace(/\*.*?\*/g, '') // Remove protected text
    .trim()
    .split(' ');
  
  const lastWord = words[words.length - 1];
  
  if (lastWord && lastWord.length >= 2) {
    const allExistingWords = [...new Set([...savedWords, ...jsonWords])];
    
    if (!allExistingWords.includes(lastWord)) {
      savedWords.push(lastWord);
      localStorage.setItem('savedWords', JSON.stringify(savedWords));
      showToast(`New word saved: ${lastWord}`, "success");
    }
  }
}

// ===== SUGGESTIONS SYSTEM (Enhanced with long-press) =====
function setupLongPress(element, word, source) {
  let pressTimer;
  const longPressDuration = 800;

  const startPress = () => {
    pressTimer = setTimeout(() => {
      element.classList.add('delete-mode');
      if (confirm(`Delete the suggestion "${word}"?`)) {
        if (source === 'saved' && savedWords.includes(word)) {
          savedWords = savedWords.filter(w => w !== word);
          localStorage.setItem('savedWords', JSON.stringify(savedWords));
        } else if (source === 'json' && jsonWords.includes(word)) {
          jsonWords = jsonWords.filter(w => w !== word);
          localStorage.setItem('jsonWords', JSON.stringify(jsonWords));
        }
        showToast(`Deleted: ${word}`, "success");
        showSuggestions(previewDiv.textContent);
      }
    }, longPressDuration);
  };

  const cancelPress = () => {
    clearTimeout(pressTimer);
    element.classList.remove('delete-mode');
  };

  element.addEventListener('mousedown', startPress);
  element.addEventListener('mouseup', cancelPress);
  element.addEventListener('mouseleave', cancelPress);
  element.addEventListener('touchstart', startPress, { passive: true });
  element.addEventListener('touchend', cancelPress);
  element.addEventListener('touchcancel', cancelPress);
}

function showSuggestions(amharicText) {
  const lastWord = amharicText.trim().split(" ").pop() || "";
  suggestionsDiv.innerHTML = "";
  
  if (!lastWord || lastWord.includes('*') || lastWord.length < 1) {
    suggestionsDiv.style.display = "none";
    return;
  }

  const allWords = [...new Set([...savedWords, ...jsonWords])];
  const target = lastWord.toLowerCase();
  
  // 1. Exact matches
  const exactMatches = allWords.filter(word => 
    word.toLowerCase().startsWith(target)
  ).slice(0, 5);

  // 2. Similar matches (if needed)
  const suggestions = [...exactMatches];
  if (suggestions.length < 5) {
    allWords.forEach(word => {
      if (suggestions.length >= 5) return;
      if (!exactMatches.includes(word) && isSimilar(target, word.toLowerCase())) {
        suggestions.push(word);
      }
    });
  }

  // Display results
  suggestions.slice(0, 5).forEach(word => {
    const div = document.createElement("div");
    div.className = word.toLowerCase().startsWith(target) 
      ? "suggestion" 
      : "suggestion similar-suggestion";
    div.textContent = word;
    div.onclick = () => applySuggestion(word);
    
    // Add long-press for deletion
    const source = savedWords.includes(word) ? 'saved' : 'json';
    setupLongPress(div, word, source);
    
    suggestionsDiv.appendChild(div);
  });
  
  suggestionsDiv.style.display = suggestions.length ? "flex" : "none";
}

function isSimilar(target, word) {
  if (word.startsWith(target)) return true;
  if (Math.abs(target.length - word.length) > 3) return false;
  
  let matchingChars = 0;
  for (let i = 0; i < Math.min(target.length, word.length); i++) {
    if (target[i] === word[i]) matchingChars++;
  }
  return matchingChars / target.length >= 0.65;
}

function applySuggestion(word) {
  const words = input.value.trim().split(" ");
  words[words.length - 1] = word;
  input.value = words.join(" ") + " ";
  input.focus();
  updatePreview(input.value);
  suggestionsDiv.style.display = "none";
}

// ===== NOTES SYSTEM (Enhanced with editing) =====
function displayNotes() {
  notesList.innerHTML = notes.map((note, index) => {
    if (editingNoteIndex === index) {
      return `
        <div class="note-editor">
          <textarea>${note.content}</textarea>
          <div class="editor-actions">
            <button class="btn secondary-btn cancel-edit-btn">Cancel</button>
            <button class="btn primary-btn save-edit-btn">Save</button>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="note">
          <div class="note-header">
            <div class="timestamp">${note.timestamp}</div>
            <div class="note-actions">
              <button class="action-btn edit-btn" data-index="${index}">✏️</button>
              <button class="action-btn delete-btn" data-index="${index}">🗑️</button>
            </div>
          </div>
          <div class="note-content">${note.content}</div>
        </div>
      `;
    }
  }).join('') || '<div class="empty-notes">No notes yet</div>';

  // Add event listeners
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => startEditing(parseInt(btn.dataset.index)));
  });
  
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteNote(parseInt(btn.dataset.index)));
  });

  document.querySelectorAll('.cancel-edit-btn').forEach(btn => {
    btn.addEventListener('click', cancelEditing);
  });

  document.querySelectorAll('.save-edit-btn').forEach(btn => {
    btn.addEventListener('click', saveEditedNote);
  });
}

function startEditing(index) {
  editingNoteIndex = index;
  displayNotes();
  const textarea = document.querySelector('.note-editor textarea');
  textarea.focus();
  textarea.selectionStart = textarea.value.length;
}

function cancelEditing() {
  editingNoteIndex = null;
  displayNotes();
}

function saveEditedNote() {
  const editedContent = document.querySelector('.note-editor textarea').value.trim();
  if (!editedContent) return;

  notes[editingNoteIndex].content = editedContent;
  notes[editingNoteIndex].timestamp = new Date().toLocaleString() + " (edited)";
  localStorage.setItem("notes", JSON.stringify(notes));
  editingNoteIndex = null;
  displayNotes();
  showToast("Note updated", "success");
}

function deleteNote(index) {
  if (confirm("Delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    showToast("Note deleted", "success");
  }
}

function saveNote() {
  const text = input.value.trim();
  if (!text) return;

  notes.unshift({
    content: convertToAmharic(text),
    timestamp: new Date().toLocaleString()
  });
  
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  previewDiv.textContent = "";
  displayNotes();
  showToast("Note saved!", "success");
}

// ===== UTILITIES =====
async function copyText() {
  const text = previewDiv.textContent;
  
  if (!text.trim()) {
    showToast("Nothing to copy", "warning");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard!", "success");
  } catch (err) {
    // Fallback method
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      showToast("Copied!", "success");
    } catch (err) {
      showToast("Failed to copy", "error");
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===== EVENT LISTENERS =====
input.addEventListener('input', function(e) {
  const text = input.value;
  const amharicText = updatePreview(text);
  
  // Handle asterisk auto-closing
  if (e.inputType === 'insertText' && e.data === '*') {
    const cursorPos = input.selectionStart;
    const textBefore = input.value.substring(0, cursorPos);
    const textAfter = input.value.substring(cursorPos);
    
    const asterisksBefore = (textBefore.match(/\*/g) || []).length;
    const pairedBefore = (textBefore.match(/\*.*?\*/g) || []).length * 2;
    
    if (asterisksBefore > pairedBefore) {
      input.value = textBefore + '*' + textAfter;
      input.selectionStart = input.selectionEnd = cursorPos;
      e.preventDefault();
      return;
    }
  }

  // Auto-save new words when space is pressed
  if (e.inputType === 'insertText' && e.data === ' ') {
    saveNewWord(amharicText);
  }

  // Save state
  localStorage.setItem('currentInputText', text);
  localStorage.setItem('currentTransliterationText', amharicText);
  
  // Show suggestions
  showSuggestions(amharicText);
});



input.addEventListener('keydown', function(e) {
  // Handle backspace for asterisk pairs
  if (e.key === 'Backspace') {
    const cursorPos = input.selectionStart;
    const text = input.value;
    
    // Case 1: Deleting an opening asterisk that has a closing asterisk after it
    if (cursorPos > 0 && text[cursorPos - 1] === '*' && 
        cursorPos < text.length && text[cursorPos] === '*') {
      // Delete both asterisks
      input.value = text.substring(0, cursorPos - 1) + text.substring(cursorPos + 1);
      input.selectionStart = input.selectionEnd = cursorPos - 1;
      e.preventDefault();
    }
    // Case 2: Deleting a closing asterisk that has an opening asterisk before it
    else if (cursorPos > 0 && text[cursorPos - 1] === '*' && 
             (cursorPos === text.length || text[cursorPos] !== '*')) {
      // Find the previous asterisk pair
      let openingPos = -1;
      for (let i = cursorPos - 2; i >= 0; i--) {
        if (text[i] === '*') {
          openingPos = i;
          break;
        }
      }
      
      // If we found an opening asterisk, delete both
      if (openingPos !== -1) {
        input.value = text.substring(0, openingPos) + 
                     text.substring(openingPos + 1, cursorPos - 1) + 
                     text.substring(cursorPos);
        input.selectionStart = input.selectionEnd = openingPos;
        e.preventDefault();
      }
    }
  }
});



floatCopyBtn.addEventListener('click', copyText);
floatSaveBtn.addEventListener('click', saveNote);
fileBtn.addEventListener('click', () => fileInput.click());
themeSwitch.addEventListener('change', toggleTheme);

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.words) {
        jsonWords = data.words;
        localStorage.setItem("jsonWords", JSON.stringify(jsonWords));
        showToast("Dictionary loaded!", "success");
      } else {
        showToast("File must contain 'words' array", "error");
      }
    } catch (err) {
      showToast("Invalid JSON file", "error");
    }
  };
  reader.readAsText(file);
});

// ===== START APP =====
initTheme();
initializeData();
displayNotes();
