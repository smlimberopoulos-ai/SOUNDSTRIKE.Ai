document.addEventListener("DOMContentLoaded", () => {
  const sounds = {
    title: new Audio("assets/ui-title.wav"),
    logo: new Audio("assets/ui-logo.wav"),
    studio: new Audio("assets/ui-click.wav"),
    datasets: new Audio("assets/ui-hover.wav"),
    name: new Audio("assets/ui-name.wav"),
    role: new Audio("assets/ui-role.wav")
  };

  const playSound = (id, sound) => {
    document.getElementById(id).addEventListener("mouseenter", () => {
      sounds[sound].currentTime = 0;
      sounds[sound].play();
    });
  };

  playSound("title", "title");
  playSound("logo", "logo");
  playSound("studio", "studio");
  playSound("datasets", "datasets");
  playSound("name", "name");
  playSound("role", "role");
});
