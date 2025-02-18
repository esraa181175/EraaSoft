
const destinationsContainer = document.querySelector(".container");

const destinations = [
    {
        title: "CERN - The Large Hadron Collider",
        image: "https://img.freepik.com/premium-vector/business-book-cover-design-template-modern-annual-report-design-red-theme-color_181182-2977.jpg?w=740",
    },
    {
        title: "NASA Kennedy Space Center",
        image: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "MIT Media Lab",
        image: "https://img.freepik.com/free-photo/landscape-with-windmills_15879-608.jpg?t=st=1739909304~exp=1739912904~hmac=eaf750cff739059c09def3f8a0115e199c4b56857f8a479d0b023e7c3b7ee439&w=740",
    },
    {
        title: "Silicon Valley Tech Hub",
        image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Fermilab - Particle Physics Laboratory",
        image: "https://img.freepik.com/premium-photo/knights-shining-armours-fortress_113767-3132.jpg?w=740",
    },
    {
        title: "JPL - Jet Propulsion Laboratory",
        image: "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "European Space Agency (ESA)",
        image: "https://img.freepik.com/free-photo/young-handsome-man-listens-music-smartphone_176420-15626.jpg?t=st=1739908845~exp=1739912445~hmac=a6997368fb540f787208ee3cdfaeaadc0699e5a183baaa9d1b8405ca927c28e0&w=740",
    },
    {
        title: "Max Planck Institute for Quantum Optics",
        image: "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Harvard Science Center",
        image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Stanford Linear Accelerator Center",
        image: "https://img.freepik.com/free-photo/little-boy-eating-christmas-cookie_23-2148737878.jpg?t=st=1739908845~exp=1739912445~hmac=ec3e3d51e5057f5aecae5208757cdcbbd49ce99838ef10ac77351cbf89fad281&w=740",
    },
    {
        title: "Tokyo Institute of Technology",
        image: "https://images.pexels.com/photos/2132061/pexels-photo-2132061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Indian Space Research Organisation (ISRO)",
        image: "https://images.pexels.com/photos/7311920/pexels-photo-7311920.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        title: "London Science Museum",
        image: "https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "National Geographic Explorers Hall",
        image: "https://images.pexels.com/photos/23799/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Perimeter Institute for Theoretical Physics",
        image: "https://img.freepik.com/free-vector/labor-day-background-with-flags-flat-style_23-2147866723.jpg?t=st=1739908743~exp=1739912343~hmac=7181eeb138b5d37b45ad7e7a826ae416236c04941e392349c310e4ad24dde41d&w=740",
    },
];

destinations.map((item) => {
    let temp = " ";
    temp += ` 
               <div class="card">
                <div class="card-img">
                  <img src="${item.image}" alt="">
                 </div>
                  <h2>${item.title}</h2> 
                  </div> `;
      destinationsContainer.innerHTML += temp;
});




