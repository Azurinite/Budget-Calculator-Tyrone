const careerSelect = document.getElementById(career);
const educationSelect = document.getElementById(edu);
const housingSelect = document.getElementById(housing);
const essentialSelect = document.getElementById(ess);
const lifeSelect = document.getElementById(life);
const savingSelect = document.getElementById(saveings);


//Number data//
const saving = Number(r[savingSelect.value]);
const lifestyle = Number(r[lifeSelect.value]);
const essential = Number(r[essentialSelect.value]);
const housing = Number(r[housingSelect.value]);
const educaton = Number(r[educationSelect.value]);

savingSelect.value = saving[0];
lifeSelect.value = lifestyle[0];
essentialSelect.value = essential[0];
housingSelect.value = housing[0];
educationSelect.value = educaton[0];