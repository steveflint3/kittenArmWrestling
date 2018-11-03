const arrayInput = document.getElementById('arrayInput');
const arrayStructureOutput = document.getElementById('arrayStructureOutput');
const arrayCommandInput = document.getElementById('arrayCommand');
const arrayJSOutput = document.getElementById('arrayJSOutput');
const arrayJSValueOutput = document.getElementById('arrayJSValueOutput');
const array = [];

function enterArrayInput() {
  array.push(arrayInput.value);
  arrayStructureOutput.innerHTML = '[' + array + ']';
  arrayInput.value = '';
}

resetArray = () => {
  output.innerHTML = '';
};

enterArrayJS = () => {
  const arrayValue = eval(arrayCommandInput.value);
  arrayJSOutput.innerHTML = '[' + array + ']';
  arrayCommandInput.value = '';
  arrayJSValueOutput.innerHTML = arrayValue;
  console.log('array value here ===>>>', arrayValue);
};
