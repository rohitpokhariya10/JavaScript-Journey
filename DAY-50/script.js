// script.js

// SELECT container (NOTE: .all-reel, not .reel)
const container = document.querySelector(".all-reel");

const reelsData = [
  {
    userName: "Rohit Singh",
    userProfile: "https://i.pravatar.cc/100?img=12",
    userCaption: "Life is beautiful when you stay positive 🌿",
    likeCount: 122,
    commentCount: 40,
    shareCount: 12,
    video: "reels/v1.mp4",
    isFollow: true,
  },
  {
    userName: "Ananya Sharma",
    userProfile: "https://i.pravatar.cc/100?img=32",
    userCaption: "Chasing sunsets and dreams ✨",
    likeCount: 340,
    commentCount: 89,
    shareCount: 27,
    video: "reels/v5.mp4",
    isFollow: false,
  },
  {
    userName: "Aman Gupta",
    userProfile: "https://i.pravatar.cc/100?img=56",
    userCaption: "Sunday vibes 😎🔥",
    likeCount: 890,
    commentCount: 120,
    shareCount: 55,
    video: "reels/v3.mp4",
    isFollow: true,
  },
  {
    userName: "Priya Verma",
    userProfile: "https://i.pravatar.cc/100?img=68",
    userCaption: "Be yourself. That's the real beauty ❤️",
    likeCount: 560,
    commentCount: 95,
    shareCount: 32,
    video: "reels/v4.mp4",
    isFollow: false,
  },
];

// ---------- build HTML from reelsData ----------
let clutter = "";
reelsData.forEach((elem, idx) => {
  clutter += `
    <section>
      <div class="reel">
        <video class="reel-video"
               src="${elem.video}"
               playsinline
               muted
               loop
               autoplay
               preload="metadata"></video>

      

        <div class="bottom">
          <div class="user-profile">
            <img src="${elem.userProfile}" alt="${elem.userName} avatar" />

            <div class="user-info">
              <h5>${elem.userName}</h5>
              <h6>${elem.userCaption}</h6>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="like" data-index="${idx}">
           <i class="ri-heart-3-line"></i>
            <span class="count">${elem.likeCount}</span>
          </div>

          <div class="comment">
            <i class="ri-chat-3-line"></i>
            <span class="count">${elem.commentCount}</span>
          </div>

          <div class="share-icon">
            <i class="ri-share-forward-line"></i>
            <span class="count">${elem.shareCount}</span>
          </div>

          <div class="menu">
            <i class="ri-more-2-fill"></i>
          </div>
        </div>
      </div>
    </section>
  `;
});

// inject into DOM
container.innerHTML = clutter;
