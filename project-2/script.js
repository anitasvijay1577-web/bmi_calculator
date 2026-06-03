let form = document.querySelector('#bmiForm');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value) ;

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        alert('Please enter valid positive numbers for weight and height.');
        return;
    }

    let bmit = (weight * 10000) / (height * height );
    bmit = bmit.toFixed(2);

    let resultText = '';

    if(bmit < 18.5){
        resultText = 'Underweight';
    } else if(bmit >= 18.5 && bmit < 24.9){
        resultText = 'Normal weight';
    } else if(bmit >= 25 && bmit < 29.9){
        resultText = 'Overweight';
    } else {
        resultText = 'Obesity';
    }

    document.getElementById('bmiValue').textContent = bmit;
    document.getElementById('bmiStatus').textContent = resultText;

    form.reset() ;
})
