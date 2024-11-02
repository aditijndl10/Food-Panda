function setupCheckbox(checkboxId)
 {
    const heartCheckbox = document.getElementById(checkboxId);
    const isChecked = localStorage.getItem(checkboxId);
    
  
    if (isChecked === 'true') 
    {
        heartCheckbox.checked = true; 
    }
    
 
    heartCheckbox.addEventListener('change', function() 
    {
      localStorage.setItem(checkboxId, heartCheckbox.checked);
    });
}

setupCheckbox('heart-checkbox-1');
setupCheckbox('heart-checkbox-2');
setupCheckbox('heart-checkbox-3');
setupCheckbox('heart-checkbox-4');
setupCheckbox('heart-checkbox-5');
setupCheckbox('heart-checkbox-6');
setupCheckbox('heart-checkbox-7');
setupCheckbox('heart-checkbox-8');
setupCheckbox('heart-checkbox-9');
setupCheckbox('heart-checkbox-10');
setupCheckbox('heart-checkbox-11');
setupCheckbox('heart-checkbox-12');
setupCheckbox('heart-checkbox-13');
setupCheckbox('heart-checkbox-14');
setupCheckbox('heart-checkbox-15');
setupCheckbox('heart-checkbox-16');
setupCheckbox('heart-checkbox-17');
setupCheckbox('heart-checkbox-18');
setupCheckbox('heart-checkbox-19');
setupCheckbox('heart-checkbox-20');
setupCheckbox('heart-checkbox-21'); 
setupCheckbox('heart-checkbox-22');
setupCheckbox('heart-checkbox-23');
setupCheckbox('heart-checkbox-24');
setupCheckbox('heart-checkbox-25');
setupCheckbox('heart-checkbox-26');
setupCheckbox('heart-checkbox-27');
setupCheckbox('heart-checkbox-28');

