const movies = {
    floor: {
        title: "FL∞R",
        poster: "floor-poster.jpeg",
        status: "COMING SOON",
        tagline: "Every path leads back.",
        description: "A psychological thriller about isolation, repeating spaces, silence, and the fear of realizing there may be no way out.",
        release: "Coming Soon",
        genre: "Psychological Thriller / Sci-Fi",
        director: "Avyukt & Praharsha",
        cast: "Athulith",
        filmStatus: "In Production"
    },

    upcoming: {
        title: "Upcoming Projects",
        poster: "floor-poster.jpeg",
        status: "IN DEVELOPMENT",
        tagline: "New stories are forming.",
        description: "Future short films exploring memory, fear, atmosphere, and emotional tension through a cinematic lens.",
        release: "To Be Announced",
        genre: "Thriller / Drama / Sci-Fi",
        director: "Avyukt",
        cast: "To Be Announced",
        filmStatus: "Writing"
    },

    archive: {
        title: "Archive",
        poster: "floor-poster.jpeg",
        status: "EARLY WORK",
        tagline: "The beginning of the world.",
        description: "A collection of early experiments, visual tests, short scenes, and unfinished ideas from the development of AVI Films.",
        release: "Various",
        genre: "Experimental",
        director: "Avyukt",
        cast: "Various",
        filmStatus: "Archive"
    }
};

function openFilm(movieName) {
    const movie = movies[movieName];

    document.getElementById("popupPoster").src = movie.poster;
    document.getElementById("popupStatus").textContent = movie.status;
    document.getElementById("popupTitle").textContent = movie.title;
    document.getElementById("popupTagline").textContent = movie.tagline;
    document.getElementById("popupDescription").textContent = movie.description;
    document.getElementById("popupRelease").textContent = movie.release;
    document.getElementById("popupGenre").textContent = movie.genre;
    document.getElementById("popupDirector").textContent = movie.director;
    document.getElementById("popupCast").textContent = movie.cast;
    document.getElementById("popupFilmStatus").textContent = movie.filmStatus;

    document.getElementById("moviePopup").classList.add("active");
}

function closeFilm() {
    document.getElementById("moviePopup").classList.remove("active");
}