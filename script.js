const blogs = " - Added Insight";

const container = document.getElementById("blogContainer");
const singleView = document.getElementById("singleView");
const singleHeading = document.getElementById("singleHeading");
const singleImage = document.getElementById("singleImage");
const backBtn = document.getElementById("backBtn");

const headings = [
  {
    image: "gym.jpg",
    text: "Google Marketing Live (GML) 2025, Artificial Intelligence (AI) in advertising and marketing.",
    type: "main"
  },
  {
    image: "gym2.jpg",
    text: "Why AI is Reshaping Digital Marketing in 2024" + blogs,
    type: "main"
  },
  {
    image: "gym3.jpg",
    text: "Future - social-media-marketing - 2025",
    type: "main"
  },
  {
    image: "gym4.jpg",
    text: "Mastering Search Engine Optimization for Growth",
    type: "main"
  },
  {
    image: "thumbnail.jpg",
    text: "Maximize ROI with PPC in 2025",
    type: "sub"
  },
  {
    image: "yamaha.jpg",
    text: "Top Digital Marketing Trends in 2025",
    type: "sub"
  }
];

// Show single blog view
function showSingleHeading(text, image) {
  container.style.display = "none";
  singleHeading.textContent = text;
  singleImage.src = image;
  singleView.style.display = "block";
}

// Handle back button click
backBtn.onclick = () => {     
  singleView.style.display = "none";
  container.style.display = "block";
};

// Render all blog headings
headings.forEach(item => {
  const heading = document.createElement("h1");
  heading.className = item.type === "main" ? "main-heading" : "sub-heading";

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = item.text;
  link.onclick = (e) => {
    e.preventDefault();
    showSingleHeading(item.text, item.image);
  };

  heading.appendChild(link);
  container.appendChild(heading);

});
