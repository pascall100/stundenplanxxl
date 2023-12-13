function addRow() {
    const scheduleBody = document.getElementById('schedule-body');
    const newRow = document.createElement('tr');
    
    // Erstelle Zellen für die neue Reihe
    newRow.innerHTML = `
      <td contenteditable="true">Neue Zeit</td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
      <td contenteditable="true"></td>
    `;
    
    // Füge die neue Reihe zum Stundenplan hinzu
    scheduleBody.appendChild(newRow);
  }
  
  // Event-Listener für den Plus-Button, um eine neue Reihe hinzuzufügen
  const addButton = document.getElementById('add-row');
  addButton.addEventListener('click', addRow);

