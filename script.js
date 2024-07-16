document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const image = document.getElementById('selectedImage');
        image.src = e.target.result;
        image.style.display = 'block'; 
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('imageSize').addEventListener('input', function(event) {
    const size = event.target.value;
    const image = document.getElementById('selectedImage');
    image.style.width = size + 'px';
    image.style.height = 'auto';
});

document.getElementById('generateButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const image = document.getElementById('selectedImage').src;
    const previewContent = document.getElementById('previewContent');

    if (name && department && level && image) {
        previewContent.innerHTML = `<p><span style="font-family: cursive;">${name} </span><span  style="color: black; font-family: cursive;">from</span><br><span style="font-family: cursive;">${department} ${level} level </span><span style="color: black; font-family: cursive;">will be attending </span><span style="font-family: cursive;">MFMCF SINGLE'S WEEK 2024</span></p><img src="${image}">`;
        document.getElementById('previewContainer').style.display = 'block';
    } else {
        alert('Please fill all fields and select an image.');
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const previewContent = document.getElementById('previewContent');

    html2canvas(previewContent).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'DP.png';
        link.click();
    });
});
