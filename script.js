function previewImage() {
    var imageUrl = document.getElementById('url').value;
    var imagePreview = document.getElementById('image-preview');

    imagePreview.src = imageUrl;
}