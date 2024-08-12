function search() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const musicFields = document.querySelectorAll('.music_field');

    musicFields.forEach(field => {
        const songTitle = field.querySelector('.audio_name .name h4').textContent.toLowerCase();
        const artist = field.querySelector('.audio_name .name p').textContent.toLowerCase();

        if (songTitle.includes(query) || artist.includes(query)) {
            field.parentElement.style.display = 'block';
        } else {
            field.parentElement.style.display = 'none';
        }
    });
}
