const movies = [
    {
      "title": "Oppenheimer",
      "poster": "https://images4.alphacoders.com/132/1323605.jpeg",
      "description": "The story of American scientist J. Robert Oppenheimer and his role in the Manhattan Project, the World War II initiative to develop the first nuclear weapons.",
      "releaseDate": "2023-07-21",
      "rating": "8.5",
      "genre": ["Drama", "History", "Thriller"]
    },
    {
      "title": "Barbie",
      "poster": "https://images7.alphacoders.com/133/1337622.jpg",
      "description": "Barbie and Ken embark on an adventure in the real world after being expelled from Barbieland.",
      "releaseDate": "2023-07-21",
      "rating": "7.4",
      "genre": ["Comedy", "Adventure", "Fantasy"]
    },
    {
      "title": "The Meg 2: The Trench",
      "poster": "https://www.themeg.movie/images/share.jpg",
      "description": "Jonas Taylor and his team dive into the depths of the ocean to explore new frontiers, but their mission turns into chaos when a group of megalodons threatens their lives.",
      "releaseDate": "2023-08-04",
      "rating": "6.2",
      "genre": ["Action", "Adventure", "Sci-Fi"]
    },
    {
        "title": "Dune: Part Two",
        "poster": "https://i.ytimg.com/vi/COELrJTyosw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gQSgTMA8=&rs=AOn4CLDkJ1aRb9E2LttJ1p4WA6ZCxZjgMQ",
        "description": "The story of Paul Atreides, a young man from the noble House Atreides, who is destined to become the savior of the desert planet Arrakis.",
        "releaseDate": "2023-11-03",
        "rating": "8.2",
        "genre": ["Sci-Fi", "Adventure", "Drama"]
      },
      {
        "title": "The Hunger Games",
        "poster": "https://m.media-amazon.com/images/S/pv-target-images/6868e7d191829e2a620d3656ff4db46777a4c6247367b15c04f7031d35630145.jpg",
        "description": "Years before he becomes the ruthless President of Panem, young Coriolanus Snow is a promising student from the Capitol who is assigned to mentor Lucy Gray Baird, a girl from District 12, for the Tenth Annual Hunger Games.",
        "releaseDate": "2023-11-17",
        "rating": "6.8",
        "genre": ["Action", "Adventure", "Sci-Fi"]
      },
      {
        "title": "Napoleon",
        "poster": "https://i.ytimg.com/vi/LIsfMO5Jd_w/maxresdefault.jpg",
        "description": "The epic story of Napoleon Bonaparte's rise to power and his turbulent relationship with wife Josephine.",
        "releaseDate": "2023-11-22",
        "rating": "7.5",
        "genre": ["Drama", "History", "War"]
      },
      {
        "title": "Oppenheimer",
        "poster": "https://images4.alphacoders.com/132/1323605.jpeg",
        "description": "The story of American scientist J. Robert Oppenheimer and his role in the Manhattan Project, the World War II initiative to develop the first nuclear weapons.",
        "releaseDate": "2023-07-21",
        "rating": "8.5",
        "genre": ["Drama", "History", "Thriller"]
      },
      {
        "title": "Barbie",
        "poster": "https://images7.alphacoders.com/133/1337622.jpg",
        "description": "Barbie and Ken embark on an adventure in the real world after being expelled from Barbieland.",
        "releaseDate": "2023-07-21",
        "rating": "7.4",
        "genre": ["Comedy", "Adventure", "Fantasy"]
      },
      {
        "title": "The Meg 2: The Trench",
        "poster": "https://www.themeg.movie/images/share.jpg",
        "description": "Jonas Taylor and his team dive into the depths of the ocean to explore new frontiers, but their mission turns into chaos when a group of megalodons threatens their lives.",
        "releaseDate": "2023-08-04",
        "rating": "6.2",
        "genre": ["Action", "Adventure", "Sci-Fi"]
      },
      {
          "title": "Dune: Part Two",
          "poster": "https://i.ytimg.com/vi/COELrJTyosw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gQSgTMA8=&rs=AOn4CLDkJ1aRb9E2LttJ1p4WA6ZCxZjgMQ",
          "description": "The story of Paul Atreides, a young man from the noble House Atreides, who is destined to become the savior of the desert planet Arrakis.",
          "releaseDate": "2023-11-03",
          "rating": "8.2",
          "genre": ["Sci-Fi", "Adventure", "Drama"]
      },
      {
          "title": "The Hunger Games",
          "poster": "https://m.media-amazon.com/images/S/pv-target-images/6868e7d191829e2a620d3656ff4db46777a4c6247367b15c04f7031d35630145.jpg",
          "description": "Young Coriolanus Snow is a promising student from the Capitol who is assigned to mentor Lucy Gray Baird, a girl from District 12, for the Tenth Annual Hunger Games.",
          "releaseDate": "2023-11-17",
          "rating": "6.8",
          "genre": ["Action", "Adventure", "Sci-Fi"]
      },
      {
          "title": "Napoleon",
          "poster": "https://i.ytimg.com/vi/LIsfMO5Jd_w/maxresdefault.jpg",
          "description": "The epic story of Napoleon Bonaparte's rise to power and his turbulent relationship with wife Josephine.",
          "releaseDate": "2023-11-22",
          "rating": "7.5",
          "genre": ["Drama", "History", "War"]
        }
  ]
    const carouselContainer = document.getElementById('carousel');
  
    movies.forEach(movie => {
    // Create carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carouselItem'); 

    // Create image
    const image = document.createElement('img');
    image.src = movie.poster;
    carouselItem.appendChild(image); 

    // Create content
    const content = document.createElement('div');
    content.classList.add('content');
    carouselItem.appendChild(content);

    // Create title
    const title = document.createElement('h3'); 
    title.textContent = movie.title;
    content.appendChild(title); 

    // Create description
    const description = document.createElement('p');
    description.textContent = movie.description;
    content.appendChild(description);

    // Add to carousel
    carouselItem.appendChild(content);
    carouselContainer.appendChild(carouselItem);
    
    
  });

  const carousel = document.getElementById('carousel');
  const buttonLeft = document.querySelector('.buttonLeft');
  const buttonRight = document.querySelector('.buttonRight');
  const carouselItems = document.querySelectorAll('.carouselItem');

  // carouselItems.forEach((item) => {
  //   item.addEventListener('click', () => {
  //     Showdescription(item);
  //   })
  // });

  // function Showdescription(item) {
  
  carousel.addEventListener('scroll', () => {
    checkButtonVisibility();
  });
  
  buttonLeft.addEventListener('click', () => {
    carousel.scrollLeft -= carousel.offsetWidth;
    checkButtonVisibility();
  });
  
  buttonRight.addEventListener('click', () => {
    carousel.scrollLeft += carousel.offsetWidth;
    checkButtonVisibility();
  });
  

function checkButtonVisibility() {
  if (carousel.scrollLeft === 0) {
    buttonLeft.style.display = 'none';
  } else {
    buttonLeft.style.display = 'block';
  }

  if (carousel.scrollLeft + carousel.clientWidth >= document.documentElement.clientWidth) {
    buttonRight.style.display = 'none';
  } else {
    buttonRight.style.display = 'block';
  }
}

